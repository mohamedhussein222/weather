 var all = [];
function getData(test){
  var req =new XMLHttpRequest(); 
req.open("get" , `https://api.weatherapi.com/v1/forecast.json?key=f1622f03689f4295b1b205803232002&q=${test}&days=3`)
req.send();
req.addEventListener("readystatechange" , function(){
    if(req.readyState ==4){
      all = JSON.parse(req.response) ; 
        display();
    }
})
}
getData("cairo");
var parentContainer= document.createElement("div");
parentContainer.classList.add("container-lg","contain-head","py-5","mt-3","w-75")
document.querySelector(".image").append(parentContainer);
 var myDiv = document.createElement("div");
 myDiv.classList.add("inputs" , "position-relative");
 document.querySelector(".contain-head").append(myDiv);
var input1 =  document.createElement("input");
input1.classList.add("position-relative" , "mmm");
input1.setAttribute("placeholder" , "Find your location...");
input1.setAttribute("type" , "text");
input1.setAttribute("id" ,"search");
document.querySelector(".inputs").append(input1);
var input2  = document.createElement("input");
input2.setAttribute("type" ,"button");
input2.setAttribute("class" , "find");
input2.setAttribute("value" , "find") ; 
input2.setAttribute("id" , "submit");
document.querySelector(".inputs").append(input2)
var row1 = document.createElement("div");
row1.classList.add("row" , "row-rad","py-5", "g-0" );
document.querySelector(".contain-head").append(row1) ;
function display (){
  var cartona = "" ;
     cartona+=`
     <div class="col-md-4 ">
     <div class="item weather-one testi">
       <div class="item-head item-rad text-center weather-one testi">
         <span class="location" >${all.location.localtime}</span>
       
       </div>
       <div class="item-content weather-one testi ">
       <div class="d-flex concity weather-one testi">
         <h1>${all.location.name}</h1>
       
        </div>
        <div class="d-flex weather-one ">
        <div class="num">${all.current.temp_c}<sup>o</sup>C</div>
         <img src="https://${all.current.condition.icon}"  />
          </div>
         <div class="custom">${all.current.condition.text}</div>
       
         <div class="icons d-flex justify-content-around">
         <div class="icons-item">
           <i class="fa-solid fa-umbrella"></i>
           <span>20%</span>
         </div>
         <div class="icons-item">
         <i class="fa-solid fa-gauge-high"></i>
           <span>East</span>
         </div>
         <div class="icons-item">
         <i class="fa-solid fa-wind"></i>
           <span>18km/h</span>
         </div>
         </div>
       </div>
     </div>
   </div>
   </div>

   <div class="col-md-4">
   <div class="item item-part2">
     <div class="item-head part2 text-center ">
     <span >${all.forecast.forecastday[1].date}</span>
     </div>
     <div class="item-content text-center">
     <img class="text-center m-auto" src="https://cdn.weatherapi.com/weather/64x64/day/113.png"  />
     <div class="num">${all.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
     <small class="num-part2">${all.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small>
     <h6  class="condition">${all.forecast.forecastday[1].day.condition.text}</h6>
      </div>
     </div>
   </div>
 </div>





 <div class="col-md-4 ">

 <div class="item weather-two weather-two">
   <div class="item-head weather-two text-center ">
   <span class="location">${all.forecast.forecastday[2].date}</span>
   </div>
   <div class="item-content text-center weather-two">
   <img class="text-center m-auto" src="https://cdn.weatherapi.com/weather/64x64/day/113.png"  />
   <div class="num ">${all.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>
   <small class="num-part2">${all.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small>
   <h6 class="condition">${all.forecast.forecastday[2].day.condition.text}</h6>
    </div>
   </div>
 </div>
</div>
     
     
     `
     document.querySelector(".row").innerHTML=cartona;
 }



 let find = document.querySelector(".find") ; 
 find.addEventListener("click" , function(){
  find.style.backgroundColor="#538D8A";
 })
  
 find.addEventListener("dblclick" , function(){
  find.style.backgroundColor="#6497B0";
 })
 let subscribe = document.querySelector(".res-submit");
 subscribe.addEventListener("click" , function(){
  subscribe.style.backgroundColor="#538D8A";
 })
  
 subscribe.addEventListener("dblclick" , function(){
  subscribe.style.backgroundColor="#6497B0";
 })
let mmm = document.querySelector(".mmm");


find.addEventListener("click" , function(){
  find.style.backgroundColor="#538D8A";
  
    getData(mmm.value)
  
  
 })




// 
