window.onload = function(){

  var catList = document.createElement('ul');
  catList.classList.add('cat');

  var catName = document.createElement('li');
  catName.innerText = "Name: Buddy (RIP)";

  var catFood = document.createElement('li');
  catFood.innerText = "Favorite food: Bin Bags";

  var catPicture = document.createElement("img");
  catPicture.setAttribute('src', 'http://www.catbreedselector.com/wp-content/uploads/2016/09/Black-Burmese-Cat.jpg');
  catPicture.setAttribute('width', 500);

  catFood.appendChild(catPicture);
  catName.appendChild(catFood);
  catList.appendChild(catName);

  var catStuff = document.querySelector('#cats');
  catStuff.append(catList);
};