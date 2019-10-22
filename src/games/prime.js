import { cons } from '@hexlet/pairs';
import gameRun from '..';
import getRandomInt from '../random-integer';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const makeRound = () => {
  const question = getRandomInt(1, 100);
  const getAnswer = (receivedQuestion) => ((isPrime(receivedQuestion)) ? 'yes' : 'no');
  const answer = getAnswer(question);

  return cons(question, answer);
};

export default () => {
  gameRun(makeRound, task);
};
