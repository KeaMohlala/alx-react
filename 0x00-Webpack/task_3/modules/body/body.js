import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<div id="body-content"></div>');
$('#body-content').append('<p>Holberton Dashboard</p>');
$('#body-content').append('<p>Dashboard data for the students</p>');
$('#body-content').append('<button>Click here to get started</button>');
$('#body-content').append('<p id="count"></p>');

let count = 0;

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
