// My JavaScript

// Score Selectors
const score_left = document.querySelector('#score_left');
let score_left_value = 0;
const score_right = document.querySelector('#score_right');
let score_right_value = 0;

// Playing to Selectors
const score_selector = document.querySelector('#playto');
let score_go_to = score_selector.value;

// Buttons Selectors
const player_one = document.querySelector('#player_one');
const player_two = document.querySelector('#player_two');
const reset = document.querySelector('#reset');

// Update Player 1 Score and Styles
player_one.addEventListener('click', () => {
    if (score_left_value < score_go_to) {
        score_left_value += 1;
        score_left.innerText = score_left_value;
    }
    if (score_left_value == score_go_to) {
        score_left.style.color = 'green';
        score_right.style.color = 'red';
    }
});

// Update Player 2 Score and Styles
player_two.addEventListener('click', () => {
    if (score_right_value < score_go_to) {
        score_right_value += 1;
        score_right.innerText = score_right_value;
    }
    if (score_right_value == score_go_to) {
        score_right.style.color = 'green';
        score_left.style.color = 'red';
    }

});

// Reset Scores and Styles
reset.addEventListener('click', () => {
    score_left.innerText = 0;
    score_right.innerText = 0;
    score_right.style.color = 'black'
    score_left.style.color = 'black'
    score_left_value = 0;
    score_right_value = 0;
});

score_selector.addEventListener('change', (event) => {
    score_go_to = score_selector.value;
});