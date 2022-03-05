"use strict";

// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[11]);
// document.all[10].textContent = "Hello";
// console.log(document.forms[2]);
// console.log(document.links);

// GETELEMENTBYID //
// console.log(document.getElementById("header-title"));
// const headerTitle = document.getElementById("header-title");
// const header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// headerTitle.innerHTML = "<h3>Hello!</h3>";
// header.style.borderBottom = "solid 3px #000";

// GETELEMENTSBYCLASSNAME //
// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// // Gives error
// // items.style.backgroundColor = "#f4f4f4";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

// GETELEMENTSBYTAGNAME //

// const li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// // Gives error
// // items.style.backgroundColor = "#f4f4f4";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

// QUERYSELECTOR //
// const header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #000";

// const input = document.querySelector("input");
// input.value = "Hello World";

// const submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// const item = document.querySelector(".list-group-item");
// item.style.color = "red";

// const lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// const secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

// QUERY SELECTORALL //

// const titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "hello";

// const odd = document.querySelectorAll("li:nth-child(odd)");
// const even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "red";
// }

// for (let i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = "blue";
// }

// TRAVERSING THE DOM //
// const itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "red";
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "red";
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// FirstChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// createElement

// create a div
// const newDiv = document.createElement("div");

// add class
// newDiv.className = "hello";

// add id
// newDiv.id = "hello1";

// add attr
// newDiv.setAttribute("title", "Hello Div");

// create text node
// const newDivText = document.createTextNode("Hello World");

// add text to div
// newDiv.appendChild(newDivText);

// const container = document.querySelector("header .container");
// const h1 = document.querySelector("header h1");

// console.log(newDiv);

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);
