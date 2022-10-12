
/*
let URL = "https://goweather.herokuapp.com/weather/Argentina" ; 
fetch(URL)
.then(res => res.json())
 .then(data => {
    let temp = JSON.stringify(data.temperature) ;
 	  let wind = JSON.stringify(data.wind) ;
    document.getElementById("temperature").innerHTML = JSON.parse(temp);
    document.getElementById("wind").innerHTML = JSON.parse(wind)
 });
*/
app=new Vue({
  el:"#app",
  data:{
    activities:[
      {
        imagen:"img/actitivitie-trekking.jpg",
        titulo:"Trekking Cordoba",
        dificultad:"Media",
        fecha:"12/10",
        duracion: "5 dias"
      },
      {
        imagen:"img/actitivitie-kayak.jpg",
        titulo:"Kayak Madryn",
        dificultad:"Alta",
        fecha:"30/11",
        duracion: "2 dias"
      },  
      {
        imagen:"img/actitivitie-climbing.jpg",
        titulo:"Escalada Mendoza",
        dificultad:"Fácil",
        fecha:"20/12",
        duracion: "1 día"
      }
    ]
  }  


})