/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myprofile = {
    name: 'Colby MacArthur',
    photo: 'images/baptism.jpeg',
    favoritefoods: ['lasagna', 'club sandwich', 'pizza', 'stuffed peppers'],
    hobbies: ['3d printing', 'basketball', 'nintendo', 'camping'],
    placesLived:[],

}

/* Populate Profile Object with placesLive objects */
myprofile.placesLived.push({place: 'Kaysville, Utah, USA', length: '19 years'});
myprofile.placesLived.push({place: 'Mission to Mexico', length: '2 years'});
myprofile.placesLived.push({place: 'Kaysville, Utah, USA', length: '1 year'});
myprofile.placesLived.push({place: 'Guadalajara, Jalisco, Mex', length: '18 months'});
myprofile.placesLived.push({place: 'Ciudad del Carmen, Campeche, Mex', length: '10 years'});
myprofile.placesLived.push({place: 'Herriman, Utah, USA', length: '8 months'});
myprofile.placesLived.push({place: 'Lehi, Utah, USA', length: '7 months'});
myprofile.placesLived.push({place: 'Ciudad del Carmen, Campeche, Mex', length: '1 year'});

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myprofile.name

/* Photo with attributes */
document.getElementById('photo').src = myprofile.photo
document.getElementById('photo').alt = myprofile.name

/* Favorite Foods List*/
myprofile.favoritefoods.forEach(function (food){
    let newLi = document.createElement('li');
    newLi.textContent = food;
    document.getElementById('favorite-foods').appendChild(newLi);
})

/* Hobbies List */
myprofile.hobbies.forEach(function (hobby){
    let newLi = document.createElement('li');
    newLi.textContent = hobby;
    document.getElementById('hobbies').appendChild(newLi);
})

/* Places Lived DataList */
myprofile.placesLived.forEach(function (city){
    let newDt = document.createElement('dt');
    newDt.textContent = city.place;
    let newDd = document.createElement('dd');
    newDd.textContent = city.length;

    document.getElementById('places-lived').appendChild(newDt);
    document.getElementById('places-lived').appendChild(newDd);

})

