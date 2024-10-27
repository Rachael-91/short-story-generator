function displayStory(response) {
    console.log("Story generated.")
    new Typewriter('#short-story', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generateStory(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "beeet5337ba0d42b5b6310f3e39o1452";
    let context = "You are a short story writer. Your mission is to generate a short story in basic HTML format of no more than 6 lines. Separate each line with a <br/>, but output the story without any extra symbols or code delimiters. Sign the bottom of the story with SheCodes AI in bold text";
    let prompt = `User instructions: Generate a short story about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating story...");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    axios.get(apiUrl).then(displayStory);

}

let storyFormElement = document.querySelector("#story-form");
storyFormElement.addEventListener("submit", generateStory);