import { cons } from '@hexlet/pairs';
import gameRun from '..';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const rule = 'What number is missing in the progression?';
const game = () => {
  let startNum = getRandomInt(100);
  const randomChar = getRandomInt(9);
  let question = '';
  let answer = '';

  for (let i = 0; i < 10; i += 1) {
    if (i === randomChar) {
      question += '.. ';
      answer = String(startNum);
    } else {
      question += `${startNum} `;
    }

    startNum += 2;
  }

  return cons(question, answer);
};

export default () => {
  gameRun(game, rule);
};
