import { cons } from '@hexlet/pairs';
import gameRun from '..';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = () => {
  const question = getRandomInt(100);
  const answer = isEven(question);

  return cons(question, answer);
};

export default () => {
  gameRun(game, rule);
};
