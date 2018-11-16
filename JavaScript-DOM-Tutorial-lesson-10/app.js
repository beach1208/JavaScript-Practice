//Get by classname need to be changed to arrays
var titles = document.getElementsByClassName("title");

// console.log(Array.isArray(titles));

//changing html collections to array
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(item => {
//   console.log(item);
// });

// const wrap = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(wrap);

//querrySelectorAll = return Nodelist
//no need to change to array for loop

//get first element of li
var books = document.querySelector("#book-list li .name");
// get all elements of li
books = document.querySelectorAll("#book-list li .name");
console.log(books);

//all elements change to array and log it console
Array.from(books).forEach(book => {
  book.textContent += "(book title)";
});

const bookList = document.querySelector("#book-list");
// bookList.innerHTML = "<h2>Books and more books...</h2>";
bookList.innerHTML += "<p>This is how you add HTML</p>";

//what is node?
const banner = document.querySelector("#page-banner");
console.log("#page-banner node type is", banner.nodeType);
console.log("#page-banner node name is", banner.nodeName);
console.log("#page-banner node has childNode", banner.hasChildNodes()); //return true or false

//clone node
const clonedBanner = banner.cloneNode(true);
//returns all elements inside page-banner elements
console.log(clonedBanner);

//clone node and insert