//**This file contains an algorithm to fetch API directly from the url */

async function getData() {
  
  const api_url = 'https://transportapi.com/v3/uk/train/station/PAD/timetable.json?app_id=bbac82cd&app_key=4fdb217e779681c28fba9e08e19a4517&train_status=passenger'
  
  const response = await fetch(api_url)
  
  const data = await response.json(); 
    
  console.log(data);  
  
} 

getData()

module.exports = getData