// Import jQuery and lodash
import $ from 'jquery';
import _ from 'lodash';

// add elements to body
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$("body").append("<p>Copyright - Holberton School</p>");


let count = 0;

// Function to update counter
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Bind click event with lodash debounce
  $('button').on('click', _.debounce(updateCounter, 500));
