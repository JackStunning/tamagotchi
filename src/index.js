import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Tamagotchi } from './tamagotchi.js';

$(document).ready(function(){

  // let timTamagotchi = new Tamagotchi ("Tim", 0, 5, 5, 5, 5);
  let bobTamagotchi = new Tamagotchi ("Bob", 0, 20, 20, 20, 20);
  //let johnTamagotchi = new Tamagotchi ("John", 0, 100, 100, 100, 100);


  $("#start").click(function(event){
    event.preventDefault();
    $("#game").show();
    $("#start").hide();
    setUpTamagotchi(bobTamagotchi);
  }); 

  

  function setUpTamagotchi(tamagotchi) {
  
    function updateFoodDisplay() {
      setInterval(() => {
        if (tamagotchi.age >= 5) {
          $(".screen").hide();
          $("#buttons").hide();
          $("#goodfinal").show();
          $("#badfinal").hide();
        } else if (tamagotchi.playLevel <= 0 || tamagotchi.sleepLevel <= 0  || tamagotchi.foodLevel <= 0 ){
          $("#unhappy").hide();
          $("#happy").hide();
          $("#dead").show();
          $(".screen").hide();
          $("#buttons").hide();
          $("#badfinal").show();

        } else if (tamagotchi.playLevel <10 && tamagotchi.playLevel >0|| tamagotchi.sleepLevel <10 && tamagotchi.sleepLevel > 0|| tamagotchi.foodLevel <10 && tamagotchi.foodLevel >0){
          $("#unhappy").show();
          $("#happy").hide();
          $("#dead").hide();
        } else {
          $("#unhappy").hide();
          $("#happy").show();
          $("#dead").hide();
        }
      }, 1000);
    }



    tamagotchi.setFood();
    tamagotchi.setSleep();
    tamagotchi.setPlay();
    tamagotchi.setAge();

    setInterval(() => {$("#foodOutput").text(tamagotchi.foodLevel);}, 1000);
    setInterval(() => {$("#sleepOutput").text(tamagotchi.sleepLevel);}, 1000);
    setInterval(() => {$("#playOutput").text(tamagotchi.playLevel);}, 1000);
    setInterval(() => {$("#ageOutput").text(tamagotchi.age);}, 1000);
    updateFoodDisplay();

    $("#feedme").click(function(event){
      event.preventDefault();
      tamagotchi.feedTamagotchi();
      $("#foodOutput").text(tamagotchi.foodLevel);
      $("#texts").show();
      $("#textfood").fadeIn(1000);
      $("#textfood").fadeOut(1000);

    });

    $("#sleepme").click(function(event){
      event.preventDefault();    
      tamagotchi.sleepTamagotchi();
      $("#sleepOutput").text(tamagotchi.foodLevel);
      $("#textsleep").show();
      // $("#textsleep").delay(2000);
      // $("#textsleep").hide();

    });

    $("#playme").click(function(event){
      event.preventDefault();
      tamagotchi.playTamagotchi();
      $("#playOutput").text(tamagotchi.foodLevel);
      $("#textplay").show();
      // $("#textplay").delay(2000);
      // $("#textplay").hide();
    });
  

    $("#restart").click(function(event){
      event.preventDefault();
      location.reload();
    });
  
  }


});