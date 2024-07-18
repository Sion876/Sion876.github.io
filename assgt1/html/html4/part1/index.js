
// Get references to the custom name input field, the generate button, and the story paragraph
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Function to get a random value from an array
function randomValueFromArray(array){
    // Generate a random index
  const random = Math.floor(Math.random()*array.length);
  // Return the element at the random index 
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

    // Replace placeholders in the story with random values 
    newStory = newStory.replace('insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

  // Replaces the default name "Bob" in the story with a custom name, 
  // only if a custom name is entered into the "Enter custom name" text field 
  // before the generate button is pressed.
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
   
  }

   // Converts the default US weight and temperature quantities and units in the story into UK equivalents 
  // if the UK radio button is checked before the generate button is pressed.
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + 'stone';
    const temperature =  Math.round((94 - 32)* 5 / 9 ) + 'centiigrade';
    newStory = newStory.replace(' 94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds ', weight);
  }

  // Set the story paragraph text to the new story and make it visible
  story.textContent = newStory;
  story.style.visibility = 'visible';
}