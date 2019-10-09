import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const gameRound = (game, name) => {
  const question = car(game);
  const rightAnswer = cdr(game);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== rightAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}`);
    return false;
  }

  console.log('Correct!');
  return true;
};

export default (game, task) => {
  console.log('Welcome to The Brain Games!');
  console.log(`${task}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter, round) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    if (round === false) {
      return null;
    }

    return iter(counter + 1, gameRound(game(), userName));
  };

  return iter(1, gameRound(game(), userName));
};
