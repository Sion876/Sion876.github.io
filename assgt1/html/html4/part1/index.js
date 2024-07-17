
// Get references to the custom name input field, the generate button, and the story paragraph
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Function to get a random value from an array
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


// The template story with placeholders
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments,then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Arrays of potential values to replace the placeholders
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
 
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];

const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

// Add an event listener to the generate button to call the result function when clicked
randomize.addEventListener('click', result);

 // Function to generate and display the story
function result() {

    // Make a copy of the story template
    let newStory = storyText;

    // Get random values from the arrays
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace('insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);



  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = 
  story.style.visibility = 'visible';
}