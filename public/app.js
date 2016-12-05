window.onload = function(){

  var catList = document.createElement('ul');
  catList.classList.add('cat');

  var catName = document.createElement('li');
  catName.innerText = "Name: Buddy";

  var catFood = document.createElement('li');
  catFood.innerText = "Favorite food: bin bags";

  var catPicture = document.createElement('li');
  catPicture.innerText = "picture stuff";

  catFood.appendChild(catPicture);
  catName.appendChild(catFood);
  catList.appendChild(catName);

  var catStuff = document.querySelector('#cats');
  catStuff.append(catList);
};