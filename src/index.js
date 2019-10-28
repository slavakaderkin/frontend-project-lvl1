import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (getData, task) => {
  console.log('Welcome to The Brain Games!');
  console.log(`${task}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const roundsCount = 3;

  const iter = (counter) => {
    if (counter === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const roundData = getData();
    const question = car(roundData);
    const rightAnswer = cdr(roundData);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }

    iter(counter + 1);
  };

  iter(0);
};
