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
    var myProkemon = new Prokemon(name);
    var type=$('input:radio[name=type]:checked').val();
    var myProkemon = newProkemon(type);
    $('#status-area').append("<h3>"+myProkemon.name+"</h3>");
    $('#status-area').append("<h3>"+myProkemon.type+"</h3>");

    
    // var goal = $('#goal').val();
    // var output = starter(goal);
    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    // });
  });
});
