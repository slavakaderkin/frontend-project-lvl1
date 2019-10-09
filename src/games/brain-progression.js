import { cons } from '@hexlet/pairs';
import gameRun from '..';
import getRandomInt from '../random-integer';

const task = 'What number is missing in the progression?';
const makeGame = () => {
  const firstElement = getRandomInt(1, 100);
  const progressionLength = 10;
  const progressionStep = 2;
  const randomElement = getRandomInt(1, progressionLength + 1);

  const valueOfElement = (start, step, number) => String(start + number * step);
  const makeQuestion = (start, length, step, hidden) => {
    let result = '';

    for (let i = 1; i <= length; i += 1) {
      if (i === hidden) {
        result += '.. ';
      } else {
        result += `${valueOfElement(start, step, i)} `;
      }
    }

    return result;
  };

  const question = makeQuestion(firstElement, progressionLength, progressionStep, randomElement);
  const answer = valueOfElement(firstElement, progressionStep, randomElement);

  return cons(question, answer);
};

export default () => {
  gameRun(makeGame, task);
};
