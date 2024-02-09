/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples')
let templeList ={}

/* async displayTemples Function */
let displayTemples = templeList => {
    templeList.forEach(temple => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3')
        h3.textContent = temple.templeName;
        
        const img = document.createElement('image')
        img.src = temple.imageUrl
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);

    });
}

/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
    if (response.ok) {
        templeList = await response.json();
    }
    displayTemples(templeList)
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById('filtered')
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes("utah")));
            break;

        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes("utah")));
            break;

        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case "all":
            displayTemples(temples);
            break;

        default:
            break;
    }
}



/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
getTemples();