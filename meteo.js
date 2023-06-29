//appel de l'API et recuperation de la reponse en JSON 
let url="https://api.openweathermap.org/data/2.5/weather?q=Lyon,69007,fr&appid=5647701a6f1b92e4b97df5bafee53e99&units=metric&lang=fr";
fetch(url).then((response)=>
response.json().then((data)=>{
    console.log(data);
    //recuperation des données du ficher Json
    document.querySelector("#ville").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=data.main.temp + "°C";
    document.querySelector("#hum").innerHTML="Humidité:"+data.main.humidity +"%";
    document.querySelector("#vent").innerHTML="Vent:"+data.wind.speed+"kmH";
}));