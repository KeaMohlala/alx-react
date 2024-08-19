// Import jQuery
import $ from 'jquery';

$(document).ready(function() {
  // Add elements to the body
  $('body').append(`
    <div id='logo'></div>
    <p>Holberton Dashboard</p>
    <p>Dashboard data for the students</p>
    <button id='clicker'>Click here to get started</button>
    <p id='count'>0</p>
    <p>Copyright - Holberton School</p>
  `);

  // Function to update counter
  function updateCounter() {
    const countElement = $('#count');
    const currentCount = parseInt(countElement.text(), 10);
    countElement.text(currentCount + 1 + ' clicks on the button');
  }

  // Bind click event with lodash debounce
  $(document).on('click', '#clicker', _.debounce(updateCounter, 300));
});
