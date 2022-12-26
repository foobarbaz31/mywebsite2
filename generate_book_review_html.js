
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, './assets/books');
files = fs.readdirSync(directoryPath)

function generateHiddenModals(files) {
  allDivs = ''
  for (let file of files) {
    allDivs +=  `
    <div class="ui modal" id="f_${file.split('_')[1]}">
    <i class="close icon"></i>
    <div class="image content">
      <div class="ui larger image">
        <img src="assets/books/${file}">
      </div>
    </div>
  </div>
  `
  }
  return allDivs
}

function generateCardsDivs(files) {
  let allDivs = ''
  for (let file of files) {
    allDivs +=  `
    <div class="column">
    <div class="ui card" onclick="$('#f_${file.split('_')[1]}').modal('show');">
      
        <img src="assets/books/${file}">
      
    </div>
  </div>
    `
  }
  return allDivs
}

console.log(generateCardsDivs(files))