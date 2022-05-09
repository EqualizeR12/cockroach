const joeyWayBar = document.getElementById('joey-way');
const deeDeeWayBar = document.getElementById('dee-dee-way');
const markyWayBar = document.getElementById('marky-way');
const playerWayBar = document.getElementById('player-way');
const charmeRivalsEl = document.getElementById('charme-rivals');

const runBtn = document.getElementById('run-btn');
const runFasterBtn = document.getElementById('run-faster-btn');
const charmeRivalsBtn = document.getElementById('charme-rivals-btn');
const logBtn = document.getElementById('log-btn');

function adjustPathBars(maxPathLenght) {
  joeyWayBar.max = maxPathLenght;
  joeyWayBar.value = maxPathLenght;
  deeDeeWayBar.max = maxPathLenght;
  deeDeeWayBar.value = maxPathLenght;
  markyWayBar.max = maxPathLenght;
  markyWayBar.value = maxPathLenght;
  playerWayBar.max = maxPathLenght;
  playerWayBar.value = maxPathLenght;
  }

  function runningJoey(run) {
    const spurt = Math.random() * run;
    joeyWayBar.value = +joeyWayBar.value - spurt;
    return spurt;
  }

  function runningDeeDee(run) {
    const spurt = Math.random() * run;
    deeDeeWayBar.value = +deeDeeWayBar.value - spurt;
    return spurt;
  }

  function runningMarky(run) {
    const spurt = Math.random() * run;
    markyWayBar.value = +markyWayBar.value - spurt;
    return spurt;
  }

  function runningPlayerCokroache(run) {
    const spurt = Math.random() * run;
    playerWayBar.value = +playerWayBar.value - spurt;
    return spurt;
  }

  function slowDownСockroaches(charmeRivals) {
    joeyWayBar.value = +joeyWayBar.value + charmeRivals;
    deeDeeWayBar.value = +deeDeeWayBar.value + charmeRivals;
    markyWayBar.value = +markyWayBar.value + charmeRivals;
  }

  function resetGame(value) {
    playerWayBar.value = value;
    markyWayBar.value = value;
    deeDeeWayBar.value = value;
    joeyWayBar.value = value;
  }
  