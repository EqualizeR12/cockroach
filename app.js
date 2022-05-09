const RUN_VALUE = 10;
const RUN_FASTER_VALUE = 17;
const COCKROACH_RUN_VALUE = 14;
const CHARM_RIVALS_VALUE = 8;

function getMaxPathValue() {
  const enteredValue = prompt('Path length for you and cockroaches.', '100');
  const parsedValue = parseInt(enteredValue);
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: 'Invalid user input, not a number!' };
  }
  return parsedValue;
}

let chosenMaxPath;

try {
  chosenMaxPath = getMaxPathValue();
} catch (error) {
  console.log(error);
  chosenMaxPath = 100;
  alert('You entered something wrong, default value of 100 was used');
}

let currentJoeyWay = chosenMaxPath;
let currentDeeDeeWay = chosenMaxPath;
let currentMarkyWay = chosenMaxPath;
let currentPlayerWay = chosenMaxPath;
let hasCharmRivals = true;
let timerRef;

adjustPathBars(chosenMaxPath);

function reset() {
  currentJoeyWay = chosenMaxPath;
  currentDeeDeeWay = chosenMaxPath;
  currentMarkyWay = chosenMaxPath;
  currentPlayerWay = chosenMaxPath;
  charmeRivalsBtn.classList.remove('disabled-rivals');
  charmeRivalsBtn.removeAttribute('disabled', 'disabled');
  resetGame(chosenMaxPath);
  clearInterval(timerRef);
  joeyRunning(0);
}

function endRound() {
  if (
    (currentJoeyWay,
    currentDeeDeeWay,
    currentMarkyWay > 0 && currentPlayerWay <= 0)
  ) {
    alert('You win!');
  }
  if (
    (currentDeeDeeWay,
    currentMarkyWay,
    currentPlayerWay > 0 && currentJoeyWay <= 0)
  ) {
    alert('You lose! Defeated Joey!');
  } else if (
    (currentJoeyWay,
    currentMarkyWay,
    currentPlayerWay > 0 && currentDeeDeeWay <= 0)
  ) {
    alert('You lose! Defeated Dee Dee!');
  } else if (
    (currentJoeyWay,
    currentDeeDeeWay,
    currentPlayerWay > 0 && currentMarkyWay <= 0)
  ) {
    alert('You lose! Defeated Marky!');
  } else if (
    (currentJoeyWay,
    currentDeeDeeWay,
    currentMarkyWay <= 0 && currentPlayerWay <= 0)
  ) {
    alert('All cockroaches came at the same time! Try again!');
  }
  if (
    currentJoeyWay <= 0 ||
    currentDeeDeeWay <= 0 ||
    currentMarkyWay <= 0 ||
    currentPlayerWay <= 0
  ) {
    reset();
  }
}

function joeyRunning(mode) {
  let maxSpurt;
  if (mode === RUN_VALUE) {
    maxSpurt = COCKROACH_RUN_VALUE;
  } else if (mode === RUN_FASTER_VALUE) {
    maxSpurt = COCKROACH_RUN_VALUE;
  }
  const run = runningJoey(maxSpurt);
  currentJoeyWay -= run;
  endRound();
}

function deeDeeRunning(mode) {
  let maxSpurt;
  if (mode === RUN_VALUE) {
    maxSpurt = COCKROACH_RUN_VALUE;
  } else if (mode === RUN_FASTER_VALUE) {
    maxSpurt = COCKROACH_RUN_VALUE;
  }
  const run = runningDeeDee(maxSpurt);
  currentDeeDeeWay -= run;
  endRound();
}

function markyRunning(mode) {
  let maxSpurt;
  if (mode === RUN_VALUE) {
    maxSpurt = COCKROACH_RUN_VALUE;
  } else if (mode === RUN_FASTER_VALUE) {
    maxSpurt = COCKROACH_RUN_VALUE;
  }
  const run = runningMarky(maxSpurt);
  currentMarkyWay -= run;
  endRound();
}

function playerRunning(mode) {
  let maxSpurt;
  if (mode === RUN_VALUE) {
    maxSpurt = COCKROACH_RUN_VALUE;
  } else if (mode === RUN_FASTER_VALUE) {
    maxSpurt = COCKROACH_RUN_VALUE;
  }
  const run = runningPlayerCokroache(maxSpurt);
  currentPlayerWay -= run;
  endRound();
}

const job = () => {
  const ref = setInterval(() => {
    playerRunning(RUN_VALUE);
    joeyRunning(RUN_VALUE);
    deeDeeRunning(RUN_VALUE);
    markyRunning(RUN_VALUE);
  }, 1000);
  return ref;
};

function runHandler() {
  timerRef = job();
}

function runFasterHandler() {
  playerRunning(RUN_FASTER_VALUE);
  joeyRunning(RUN_FASTER_VALUE);
  deeDeeRunning(RUN_FASTER_VALUE);
  markyRunning(RUN_FASTER_VALUE);
}

let counter = 3;
function charmeRivalsHandler() {
  let charmeRivals;
  if (currentPlayerWay >= chosenMaxPath - CHARM_RIVALS_VALUE) {
    alert('You can not slow down opponents at the start!');
    charmeRivals = 0;
  } else {
    charmeRivals = CHARM_RIVALS_VALUE;
  }
  if (counter-- != 1) {
    alert(`You have attempts: ${counter + 1}`);
  } else {
    charmeRivalsBtn.classList.add('disabled-rivals');
    charmeRivalsBtn.setAttribute('disabled', 'disabled');
    alert('This was the last attempt!');
    counter = 3;
  }
  slowDownСockroaches(charmeRivals);
  currentJoeyWay += charmeRivals;
  currentDeeDeeWay += charmeRivals;
  currentMarkyWay += charmeRivals;
  endRound();
}

runBtn.addEventListener('click', runHandler);
runFasterBtn.addEventListener('click', runFasterHandler);
charmeRivalsBtn.addEventListener('click', charmeRivalsHandler);
