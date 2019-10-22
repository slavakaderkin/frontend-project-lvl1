import { cons } from '@hexlet/pairs';
import gameRun from '..';
import getRandomInt from '../random-integer';

const getRandomOperator = (operators) => operators[getRandomInt(0, operators.length - 1)];
const operators = '+-*';
const getAnswer = (operand1, operand2, operator) => {
  switch (operator) {
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

const task = 'What is the result of the expression?';
const makeRound = () => {
  const operand1 = getRandomInt(1, 100);
  const operand2 = getRandomInt(1, 100);
  const operator = getRandomOperator(operators);

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(getAnswer(operand1, operand2, operator));

  return cons(question, answer);
};

export default () => {
  gameRun(makeRound, task);
};
