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
const images= ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg" ];

/* Declaring the alternative text for each image file */

const Alts = [
    "pic1",
    "pic2",
    "pic4",
    "pic3",
    "pic5"
];

/* Looping through images */
 for(let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    
    newImage.setAttribute('src', `image/${images[i]}`);
    
    newImage.setAttribute('alt', Alts[i]);

    thumbBar.appendChild(newImage);

    // Adding a click event listener to each thumbnail image
    newImage.addEventListener('click', a => {
        displayedImage.src = a.target.src;
        displayedImage.alt = a.target.alt;
    });


 }
/* Wiring up the Darken/Lighten button */
 btn.addEventListener('click', () => {

    const currentClass = btn.getAttribute('class');

    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0 , 50%)';

    } else {
        
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0%)';
    }
 });