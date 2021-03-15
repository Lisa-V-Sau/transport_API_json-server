//**This file contains an algorithm to run the json file directly */

function setup() {
  
    loadJSON("../trainData.json", gotData, 'jsonp')
    
  }
  
  function gotData(data) {
    console.log(data)
  }