var appOne = function(){

  var catList = document.createElement('ul');
  catList.classList.add('cat');

  var catName = document.createElement('li');
  catName.innerText = "Name: Buddy (RIP)";

  var catFood = document.createElement('li');
  catFood.innerText = "Favorite food: Bin Bags";

  var catPicture = document.createElement('img');
  catPicture.setAttribute('src','http://www.catbreedselector.com/wp-content/uploads/2016/09/Black-Burmese-Cat.jpg');
  catPicture.setAttribute('width', 500);


  catList.append(catName);
  catList.append(catFood);
  catList.append(catPicture);

  var catStuff = document.querySelector('#cats');
  catStuff.append(catList);
};

window.onload = appOne;

var appTwo = function (){
 for (var i = 0; i < CAT_ARRAY.length; i++){
  addCat(CAT_ARRAY[i].title, CAT_ARRAY[i].favoriteFood, CAT_ARRAY[i].img);
 }
};



var CAT_ARRAY = [
{title: "Name: Dennis the Menace", favoriteFood: "Apple Pie", img: "http://www.catbreedsjunction.com/images/burmese-cat-breed-9-lilac-color.jpg"}];


