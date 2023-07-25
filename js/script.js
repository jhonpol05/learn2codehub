// Display the first block of questions
document.getElementsByClassName('container')[0].style.display = 'block';

// The next function
function next(id) {
  document.getElementsByClassName('container')[id - 1].style.display = 'none';
  document.getElementsByClassName('container')[id].style.display = 'block';
}

function displayScore() {
  var score = 0;
  var totalQuestions = 65;

  // loop through the correct answers
  var answers = [];
  for (var i = 1; i <= totalQuestions; i++) {
    answers.push('correct' + i);
  }

  // add up the correct answers
  for (var i = 0; i < answers.length; i++) {
    if (document.getElementById(answers[i]).checked) {
      score++;
    }
  }

  var percentage = ((score / totalQuestions) * 100).toFixed(2); // Limit to 2 decimal places

  // Set the score text in the result div
  var resultDiv = document.getElementById('result');
  var PercentageDiv = document.getElementById('Percentage');
  var greetingH1 = document.getElementById('greeting');

  if (score > 48) {
    greetingH1.textContent = "Congratulations!";
  } else {
    greetingH1.textContent = "Try Again.";
  }

  resultDiv.textContent = score + ' / ' + totalQuestions ;
  PercentageDiv.textContent = percentage + "%";

  // Show the result div and hide the question div
  document.getElementById('question65').style.display = 'none';
  resultDiv.parentNode.style.display = 'block';
}
