function searchVerse(event) {
  event.preventDefault();

  let instructions = document.querySelector("#verse-input");
  let key = "3t7b46o8f5d3a094fe4a456f3ea46695";
  let prompt = `User's instructions are: Generate a food recipe about ${instructions.value}`;
  let context =
    "You are a food expert and love to share recipes from around the world. Your mission is to provide only a healthy recipe with no comments. Make sure each ingredient of the recipe is separated by a <br />. The title of the recipe should be at the top and using a <strong> element.and a <br /> element to separate it from the ingredients. Make sure to follow the user's instructions";
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
