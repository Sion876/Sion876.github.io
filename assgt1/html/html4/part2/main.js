/*
 Name: Sion Green 
 Date: July 24, 2024.
 Assignment 4 part 2 
 
*/

const displayedImage = document.querySelector('.displayed-img');

const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');

const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const imageAlts = [
    "Description for pic1",
    "Description for pic2",
    "Description for pic4",
    "Description for pic3",
    "Description for pic5"
];

/* Looping through images */
 for(let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img');

    const imagePath = 'images/${imagesFilesnames[i]}';
    
    newImage.setAttribute('src', imagePath);
    
    newImage.setAttribute('alt', imageAlts[i]);

    thumbBar.appendChild(newImage);

    console.log(`Thumbnail added: ${imagePath}`);

    // Adding a click event listenerto each thumbnail image
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', imagePath);

        newImage.setAttribute('alt', imageAlts[i]);

        console.log('Image clicked: ${imagePath}');

    });


 }
/* Wiring up the Darken/Lighten button */
 btn.addEventListener('click', () => {

    const currentClass = btn.getAttribute('class');

    if (currentClass === 'dark') {
        btn.setAttribute('class, light');
        btn.textContent = 'Lighten';
        overylay.style.backgroundColor = 'rgba(0, 0, 0 , 0.5)';

    } else {
        
        btn.setAttribute('class, dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
 });