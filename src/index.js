import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (data, task) => {
  console.log('Welcome to The Brain Games!');
  console.log(`${task}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const round = data();
    const question = car(round);
    const rightAnswer = cdr(round);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`);
      return;
    }

    iter(counter + 1);
  };

  iter(0);
};
