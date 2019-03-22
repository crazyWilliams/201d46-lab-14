/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);
// Counter variable
var counter = 0;


// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var productList = document.createElement('option');
    productList.textContent = Product.allProducts[i].name;
    productList.value = Product.allProducts[i].name;
    selectElement.appendChild(productList);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // DONE: suss out the item picked from the select list
  var product = event.target.items.value;
  // DONE: get the quantity
  var quantity = event.target.quantity.value;
  // DONE: using those, add one item to the Cart
  cart.addItem(product, quantity);

}

// DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  counter += Number(event.target.quantity.value);
  var pageItemCounter = document.getElementById('itemCount');
  pageItemCounter.textContent = counter;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var cartContents = document.getElementById('cartContents');
  itemDiv.innerHTML = '';
  var cartList = document.createElement('ul');
  var product = event.target.items.value;
  var quantity = event.target.quantity.value;
  var cartListItem = document.createElement('li');
  cartListItem.textContent = product + ' - ' + quantity;
  cartList.appendChild(cartListItem);
  cartContents.appendChild(cartList);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
