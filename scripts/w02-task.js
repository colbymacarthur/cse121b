/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullname = 'Colby MacArthur';
const currentyear = new Date().getFullYear();
const profilepicture = 'images/baptism.jpeg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentyear;
imageElement.setAttribute('src', profilepicture);
imageElement.setAttribute('alt', `Profile picture of ${fullname}`);



/* Step 5 - Array */
let foods = ['Lasagna', 'Stuffed peppers', 'Hamburgers'];

foodElement.innerHTML += `<br>${foods}`;

const anotherfood = 'Sandwich';
foods.push(anotherfood);
foodElement.innerHTML += `<br>${foods}`;

foods.pop(0);
foodElement.innerHTML += `<br>${foods}`;

foods.pop();
foodElement.innerHTML += `<br>${foods}`;
