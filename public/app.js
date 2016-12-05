window.onload = function(){

  var catList = document.createElement('ul');
  catList.classList.add('cat');

  var catName = document.createElement('li');
  catName.innerText = "Name: Buddy (RIP)";

  var catFood = document.createElement('li');
  catFood.innerText = "Favorite food: Bin Bags";

  var catPicture = document.createElement('img');
  catPicture.setAttribute('src','http://www.catbreedselector.com/wp-content/uploads/2016/09/Black-Burmese-Cat.jpg');
  catPicture.setAttribute('width', 500);
  // document.getElementById('img').appendChild(catPicture);

  catList.append(catName);
  catList.append(catFood);
  catList.append(catPicture);

  var catStuff = document.querySelector('#cats');
  catStuff.append(catList);
};