import { cons } from '@hexlet/pairs';
import gameRun from '..';
import getRandomInt from '../random-integer';

const getRandomOperator = () => {
  const listOfOperators = '+-*';
  return listOfOperators[getRandomInt(0, 2)];
};

const task = 'What is the result of the expression?';
const makeGame = () => {
  const operand1 = getRandomInt(1, 100);
  const operand2 = getRandomInt(1, 100);
  const operator = getRandomOperator();
  const getAnswer = (receivedOperator) => {
    switch (receivedOperator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      default:
        return null;
    }
  };

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(getAnswer(operator));

  return cons(question, answer);
};

export default () => {
  gameRun(makeGame, task);
};
