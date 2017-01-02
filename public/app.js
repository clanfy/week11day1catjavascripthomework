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

var appTwo = function (){
 for (var i = 0; i < CAT_ARRAY.length; i++){
  addCat(CAT_ARRAY[i].title, CAT_ARRAY[i].favoriteFood, CAT_ARRAY[i].img);
 }
};

var addCat = function(title, favoriteFood, img){
  var catList = createCatList();
  var catName = createName(title);
  var catFood = createFood(favoriteFood);
  var catPic = createPic(img);
  appendElements(catList, catName, catFood, catPic);
};

var appendElements= function(catList, catName, catFood, catPic){
  var catStuff = document.querySelector('#cats');
  catList.append(catName);
  catList.append(catFood);
  catList.append(catPic);
  catStuff.append(catList);
};


var createCatList = function(){
  var catList = document.createElement('ul');
  catList.classList.add('cat');
  return catList;
};

var createName = function(title){
  var catName = document.createElement('li');
  catName.innerText = title;
  return catName;
};

var createFood = function(favoriteFood){
  var catFood = document.createElement('li');
  catFood.innerText = favoriteFood;
  return catFood;
};

var createPic = function(pic){
  var catPic = document.createElement('img');
  catPic.setAttribute('src', pic);
  catPic.setAttribute('width', 500);
  return catPic;
};

var CAT_ARRAY = [
{title: "Name: Dennis the Menace", favoriteFood: "Apple Pie", img: "http://www.catbreedsjunction.com/images/burmese-cat-breed-9-lilac-color.jpg"},
{title: "Name: Buddy", favoriteFood: "Bin Bags", img: 'http://www.catbreedselector.com/wp-content/uploads/2016/09/Black-Burmese-Cat.jpg'}
];

window.onload = appTwo;
