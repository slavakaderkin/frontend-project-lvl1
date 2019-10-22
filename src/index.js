import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (data, task) => {
  console.log('Welcome to The Brain Games!');
  console.log(`${task}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter, roundData, name) => {
    const round = roundData();
    const question = car(round);
    const rightAnswer = cdr(round);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}`);
    }
    if (counter === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    return iter(counter + 1, data, userName);
  };

  return iter(1, data, userName);
};
