function searchVerse(event) {
  event.preventDefault();

  let instructions = document.querySelector("#verse-input");
  let key = "3t7b46o8f5d3a094fe4a456f3ea46695";
  let prompt = `User's instructions are: Generate a Bible verse about ${instructions.value}`;
  let context =
    "You are a religion expert and love to share knowledge about the Bible. Your mission is to provide only a verse from the bible. Make sure to follow the user's instructions";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios.get(url).then(giveVerse);
  let poemElement = document.querySelector("#verse");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = "Generating...";
}

function giveVerse(response) {
  let verse = document.querySelector("#verse");
  new Typewriter("#verse", {
    strings: `${`${response.data.answer}`}`,
    autoStart: true,
    delay: 10,
  });
}

let button = document.querySelector("#verse-form");
button.addEventListener("submit", searchVerse);
