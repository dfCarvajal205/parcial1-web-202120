const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');
const express = require("express");
const app = express();
let url = `https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`;

function callApi() {
  fetch(
    url
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log('data', data);
      render(data.data);
    });
}

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  const input = document.getElementById('inputText');

  //alert('Implementar lógica del button submit');
  getresults(input);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data);
  printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

(function init(){
  callApi();
})();
