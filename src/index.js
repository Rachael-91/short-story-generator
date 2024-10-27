function generateStory(event) {
    event.preventDefault();

    new Typewriter('#short-story', {
        strings: "I woke up to the sound of someone whispering my name in the dark. As I reached for the light, I felt a cold hand grab mine from under the bed.",
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}

let storyFormElement = document.querySelector("#story-form");
storyFormElement.addEventListener("submit", generateStory);