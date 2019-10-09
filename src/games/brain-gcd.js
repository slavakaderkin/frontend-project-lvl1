import { cons } from '@hexlet/pairs';
import gameRun from '..';
import getRandomInt from '../random-integer';


const gcd = (num1, num2) => {
  let divisor = 0;
  if (num1 < num2) {
    divisor = num1;
  } else {
    divisor = num2;
  }

  while (num1 % divisor !== 0 || num2 % divisor !== 0) {
    divisor -= 1;
  }

  return divisor;
};

const task = 'Find the greatest common divisor of given numbers.';
const makeGame = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));

  return cons(question, answer);
};

export default () => {
  gameRun(makeGame, task);
};
