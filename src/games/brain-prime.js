import { cons } from '@hexlet/pairs';
import gameRun from '..';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const isPrime = (num) => {
  for (let i = 2; i !== num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const game = () => {
  const question = getRandomInt(100);
  const answer = isPrime(question);

  return cons(question, answer);
};

export default () => {
  gameRun(game, rule);
};
