import { cons } from '@hexlet/pairs';
import gameRun from '..';
import getRandomInt from '../random-integer';

const task = 'What number is missing in the progression?';
const progressionLength = 10;
const getValueOfElement = (start, step, number) => String(start + number * step);
const makeProgression = (start, length, step, hidden) => {
  let result = '';

  for (let i = 0; i < length; i += 1) {
    if (i === hidden) {
      result = `${result} ..`;
    } else {
      result = `${result} ${getValueOfElement(start, step, i)}`;
    }
  }

  return result;
};

const makeRound = () => {
  const firstElement = getRandomInt(1, 100);
  const progressionStep = getRandomInt(1, 10);
  const randomIndex = getRandomInt(0, progressionLength - 1);

  const question = makeProgression(firstElement, progressionLength, progressionStep, randomIndex);
  const answer = getValueOfElement(firstElement, progressionStep, randomIndex);

  return cons(question, answer);
};

export default () => {
  gameRun(makeRound, task);
};
