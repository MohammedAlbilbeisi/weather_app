import React from 'react';
import "./style.css"
var api = {
key: "21e8aec578e07d1343c0942cb7627fa1",  
base: "https:api.openweathermap.org/data/2.5/"

}


function Weathers() {
  var dateBuilder = (d)=>{
   
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",
  "December"];
 
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
 "Saturday"];
 
 var day = days[d.getDay()];
 var date = d.getDate();
 var month = months[d.getMonth()]
 var year = d.getFullYear();

return `${day} ${date} ${month} ${year}`
}


  
  return (
   

    <div className="weathers">
   <main>
    <div  className="search-box">
    <input type="text"
    className="search-bar"
    placeholder="Search..."
    />
    
    </div>
    <div className="location-box">
    <div className="location">Gaza City,status</div>
    <div className="date">{dateBuilder(new Date())}</div>
    </div>
    <div className="weather-box">
    <div className="temp">
    15°C
    </div>
    <div className="weather">Sunny</div>
    </div>
   </main>

    </div>
  );
}

export default Weathers;
