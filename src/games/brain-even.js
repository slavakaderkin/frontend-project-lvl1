import { cons } from '@hexlet/pairs';
import gameRun from '..';
import getRandomInt from '../random-integer';

const isEven = (num) => (num % 2 === 0);

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeGame = () => {
  const question = getRandomInt(1, 100);
  const getAnswer = (receivedQuestion) => {
    if (isEven(receivedQuestion) === true) {
      return 'yes';
    }

    return 'no';
  };
  const answer = getAnswer(question);

  return cons(question, answer);
};

export default () => {
  gameRun(makeGame, task);
};
