const jsonFileName = "response.json";
const baseURL = "https://opentdb.com/api.php";
let quizQuestions = [];
const welcomeContainer = document.getElementById("welcome-container");
const quizContainer = document.getElementById("quiz-container");
const loading = document.getElementById("loading-screen");
const progressBar = document.getElementById("range");
const scoreElement = document.getElementById("score");
const progress = document.getElementById("progress");
const restart = document.getElementById("restart");
let score = 0;
let current = 0;
let totalQuestion = 0;
progressBar.value = 0;


document.getElementById("quiz-form").addEventListener("submit", startQuiz);

async function startQuiz(e) {
  e.preventDefault();
  const amount = document.getElementById("trivia_amount").value;
  const category = document.querySelector(
    "select[name='trivia_category']"
  ).value;
  const difficulty = document.querySelector(
    "select[name='trivia_difficulty']"
  ).value;

  if (category == "any") {
    alert("please select a category!");
    return;
  }

  if (difficulty == "any") {
    alert("please select difficulty!");
    return;
  }
  welcomeContainer.classList.add("hidden");
  loading.classList.remove("hidden");

  try {
    await fetchData(amount, category, difficulty);

    setTimeout(() => {
      loading.classList.add("hidden");
      quizContainer.classList.remove("hidden");
      loadQuestion();
      setupProgress();
    }, 1000);
  } catch (error) {
    throw new Error("Error", error.message);
  }
}

function restartQuiz() {
  document.querySelector(".nav-container").classList.add("hidden");
  quizContainer.classList.add("hidden");
  welcomeContainer.classList.remove("hidden");
}

async function fetchData(amount, category, difficulty) {
  try {
    const response = await fetch(
      `${baseURL}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    if (!response.ok) {
      throw new Error("fetch function returned error!");
    }

    const data = await response.json();

    quizQuestions.push(...data.results);
    totalQuestion = quizQuestions.length;
  } catch (error) {
    console.log(error.message);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index before the current element
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the current element with the random element
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function provideOptions(question) {
  let options = [];

  options.push(question.correct_answer);

  options.push(...question.incorrect_answers);

  shuffleArray(options);

  return options;
}

function loadQuestion() {
  const question = document.getElementById("question");
  const options = document.getElementById("options");
  const currentQuestion = document.getElementById("current");

  currentQuestion.textContent = `Q${current + 1}.`;

  question.textContent = quizQuestions[current].question;

  const opts = provideOptions(quizQuestions[current]);

  options.innerHTML = opts
    .map(
      (opt) =>
        `<label><input type="radio" name="opt" value="${opt}"> ${opt}</label>`
    )
    .join("<br>");

  setupProgress();
}

function setupProgress() {
  document.querySelector(".nav-container").classList.remove("hidden");
  progressBar.min = current;
  progressBar.max = totalQuestion;

  updateBoard();
}

function updateBoard() {
  progress.textContent = `${current}/${totalQuestion}`;
  progressBar.value = current;
  scoreElement.textContent = `${score}/${totalQuestion}`;
}

function checkAnswer() {
  const selected = document.querySelector('input[name="opt"]:checked');
  const quizContainer = document.getElementById("quiz-container");

  if (selected) {
    if (selected.value === quizQuestions[current].correct_answer) {
      score++;
    }
    current++;
    updateBoard();
    if (current < totalQuestion) {
      loadQuestion();
    } else {
      quizContainer.innerHTML = `
      <div class="final-message-container">
        <h2>Your Final Score</h2>
        <h3>${score}/${totalQuestion}</h3>
        <button class="reset-button" onClick="restartQuiz()" >Restart Quiz</button>
      </div>`;
    }
  } else {
    alert("Please select an option!");
  }
}

document.getElementById("submit").onclick = checkAnswer;
