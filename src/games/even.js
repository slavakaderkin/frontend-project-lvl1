import { cons } from '@hexlet/pairs';
import gameRun from '..';
import getRandomInt from '../random-integer';

const isEven = (num) => num % 2 === 0;

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeRound = () => {
  const question = getRandomInt(1, 100);
  const getAnswer = (receivedQuestion) => ((isEven(receivedQuestion)) ? 'yes' : 'no');
  const answer = getAnswer(question);

  return cons(question, answer);
};

export default () => {
  gameRun(makeRound, task);
};
