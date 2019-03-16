//Get by classname need to be changed to arrays
var titles = document.getElementsByClassName("title");

console.log(Array.isArray(titles));

//changing html collections to array
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(item => {
  console.log(item);
});

const wrap = document.querySelector("#book-list li:nth-child(2) .name");
console.log(wrap);



//get first element of li
var books = document.querySelector("#book-list li .name");
// get all elements of li
books = document.querySelectorAll("#book-list li .name");
console.log(books);

// //all elements change to array and log it console
// Array.from(books).forEach(book => {
//   book.textContent += "(book title)";
// });

const bookList = document.querySelector("#book-list");
// bookList.innerHTML = "<h2>Books and more books...</h2>";
bookList.innerHTML += "<p>This is how you add HTML</p>";

// const bookList = document.querySelectorAll(".name");
// console.log(bookList);
// Array.from(bookList).forEach(mybook => {
//   mybook.innerHTML += "<p>This is how you add HTML</p>"
// })

// //what is node?
const banner = document.querySelector("#page-banner");
console.log("#page-banner node type is", banner.nodeType);
console.log("#page-banner node name is", banner.nodeName);
console.log("#page-banner node has childNode", banner.hasChildNodes()); //return true or false

// //clone node
const clonedBanner = banner.cloneNode(true);
//returns all elements inside page-banner elements
console.log(clonedBanner);

// //parentnode
const bookList2 = document.querySelector("#book-list");
console.log("the parent node is:", bookList2.parentNode);
// //get parent of parent
console.log("the parent element is:", bookList2.parentElement.parentElement);
console.log(bookList2.children);

// //get sibling node
const bookList3 = document.querySelector("#book-list");
console.log("book-list next sibling is", bookList.nextSibling);
console.log("book-list next element sibling is", bookList.nextElementSibling);

console.log("book-list next previous sibling is", bookList.previousSibling);
console.log(
  "book-list next previous element sibling is",
  bookList.previousElementSibling
);

bookList.previousElementSibling.querySelector("p").innerHTML +=
  "<br/>Too cool for everyone";

// var btns = document.querySelectorAll("#book-list .delete");

// Array.from(btns).forEach(btn => {
//   btn.addEventListener('click', e =>{
//     //get element you clicked
//     const li = e.target.parentElement;

//     //remove child li from ul
//     li.parentNode.removeChild(li);
//   });
// });

// const link = document.querySelector('#page-banner a');
// link.addEventListener('click',e => {
//   e.preventDefault();
//   console.log('navigation to', e.target.textContent);
// })

// remove elements once delete btn clicked
const list = document.querySelector('#book-list ul');

list.addEventListener('click', e => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
})

//add book-list
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',e => {
  e.preventDefault();
  //get text of user typed
  const value = addForm.querySelector('input[type="text"]').value;
  
  //create Elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add content
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  //add classname
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  //Append those elements to dom
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
})


//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', e => {

  if(hideBox.checked){
    list.style.display = 'none';
  }else {
    list.style.display = 'block';
  }
})

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', e => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(book => {
    //grabbing span
    const title = book.firstElementChild.textContent;
    //check if title is same as term
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block';
    }else {
      book.style.display = 'none';
    }
  })
})