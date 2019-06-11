'use strict'

// test

let getJSONFile = function(e) {
    let ajax = Object.create(Ajax);
    ajax.init();
    ajax.getFile('source.json');
}

/*
 * Callback function
 * for the above AJaX
 */
let callBack = function(txt) {
    let myJson = JSON.parse(txt);

    var body = document.getElementsByTagName("body")[0];
    let obj = [];

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < myJson.length; i++) { //  rows
      obj[i] = Object.create(GeoObj);
      obj[i].init(myJson[i].id, myJson[i].city, myJson[i].lat, myJson[i].lon, myJson[i].country);

      for (var c = 0; c < myJson.length; c++) { // cells
        console.log('from: ' + obj[i].city + ' - ' + myJson[c].city + ' = ' + (Math.round(obj[i].calcDistance(myJson[c].lat, myJson[c].lon))/1000) + 'km');
      }
    }
}

/*
 *  Assign handlers (functions) to the buttons
 */
let showStarter = function () {
    getJSONFile();
}

window.addEventListener('load', showStarter);       // kick off JS
