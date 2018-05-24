import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Prokemon } from './prokemon.js';

$(document).ready(function() {


  $('#name-form').submit(function(event) {
    event.preventDefault();

    $('#name-form').toggle();

    var name=$('#name').val();
    var type=$('input:radio[name=type]:checked').val();
    var image="";
    var ability="";

    if (type=="rock"){
      $("#rockImage").toggle();
    } else if (type=="fire"){
      $("#fireImage").toggle();
    } else if (type=="box"){
      $("#boxImage").toggle();
    }


    var myProkemon = new Prokemon(name, type);

    //var myProkemon = newProkemon(type);
    // $('#status-area').append("<h3>"+myProkemon.name+"</h3>");
    // $('#status-area').append("<h3>"+myProkemon.type+"</h3>");
    $('#playerNameDisplay').text(myProkemon.name);
    $('#playerTypeDisplay').text(myProkemon.type);
    $('#playerLevelDisplay').text(myProkemon.level);
    $('#playerHPDisplay').text(myProkemon.hp);
    $('#playerAbilitiesDisplay').text(myProkemon.ability);

    $('#status-area').toggle();

    $('#chooseEnemy').toggle();

    // var goal = $('#goal').val();
    // var output = starter(goal);
    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    // });
    // $("#battle").click(function(event) {
    //   $("#enemy").show();
    //
    //   var name= "enemagnimous";
    //   var enemy=$('input:radio[name=type]:checked').val();
    //   var image="";
    //   var ability="";
    //
    //   if (type=="rock"){
    //     $("#rockImage").toggle();
    //   } else if (type=="fire"){
    //     $("#fireImage").toggle();
    //   } else if (type=="box"){
    //     $("#boxImage").toggle();
    //   }
    //
    //   var enemyProkemon = new Prokemon(name, type);
    //
    // });
  });

  $('#enemyButton1').click(function() {
    var enemyProkemon = new Prokemon("Bart", "rock");
    $('#enemyNameDisplay').text(enemyProkemon.name);
    $('#enemyTypeDisplay').text(enemyProkemon.type);
    $('#enemyLevelDisplay').text(enemyProkemon.level);
    $('#enemyHPDisplay').text(enemyProkemon.hp);
    $('#enemyAbilitiesDisplay').text(enemyProkemon.ability);
    $('#chooseEnemy').toggle();
    $('#enemy').show();
    $('#enemyRockImage').toggle();
    $('#battle-btns').show();
    //$('enemy-proke-stats').toggle();
  });
  $('#enemyButton2').click(function() {
    var enemyProkemon = new Prokemon("Dan", "box");
    $('#enemyNameDisplay').text(enemyProkemon.name);
    $('#enemyTypeDisplay').text(enemyProkemon.type);
    $('#enemyLevelDisplay').text(enemyProkemon.level);
    $('#enemyHPDisplay').text(enemyProkemon.hp);
    $('#enemyAbilitiesDisplay').text(enemyProkemon.ability);
    $('#chooseEnemy').toggle();
    $('#enemy').show();
    $('#enemyBoxImage').toggle();
    $('#battle-btns').show();
    //$('enemy-proke-stats').toggle();
  });
  $('#enemyButton3').click(function() {
    var enemyProkemon = new Prokemon("Abby", "fire");
    $('#enemyNameDisplay').text(enemyProkemon.name);
    $('#enemyTypeDisplay').text(enemyProkemon.type);
    $('#enemyLevelDisplay').text(enemyProkemon.level);
    $('#enemyHPDisplay').text(enemyProkemon.hp);
    $('#enemyAbilitiesDisplay').text(enemyProkemon.ability);
    $('#chooseEnemy').toggle();
    $('#enemy').show();
    $('#enemyFireImage').toggle();
    $('#battle-btns').show();
    //$('enemy-proke-stats').toggle();
  });
});


//$("body").css("background", "url('')");
