import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const isEven = (num) => num % 2 === 0 ? 'yes' : 'no';

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  let index = 0;
  while (index < 3) {
    const currentNum = getRandomInt(50);

    console.log(`Question: ${currentNum}`);
	const rightAnswer = isEven(currentNum);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`);
      break;
    } else {
      console.log('Correct!');
      index += 1;
    }
  }

  if (index === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
