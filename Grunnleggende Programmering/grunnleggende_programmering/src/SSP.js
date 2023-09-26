const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const choises = ('stein', 'saks', 'papir');

function Choice() {
    const RandomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; 
}

function Vinner(player, computer) {
  if (player === computer) {
    return "Uavgjort!";
  } else if (
    (player === 'stein' && computer === 'saks')
    (player === 'papir' && computer === 'stein')
    (player === 'saks' && computer === 'papir')
  ) {
    return 'Du vant!';
  } else {
    return 'Bot vant';
  }
} 

function Spill(playerChoice) {
  if (!choices.includes(playerChoice)) {
    console.log('Stein, saks, papir');
    rl.close();
    return;
  }

  const computer = computerChoice();
  console.log(`You chose: ${playerChoice}`);
  console.log(`Computer chose: ${computer}`);

  const result = determineWinner(playerChoice, computer);
  console.log(result);

  rl.close();
}
