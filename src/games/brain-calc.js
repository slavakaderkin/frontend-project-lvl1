import { cons } from '@hexlet/pairs';
import gameRun from '..';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const getRandomOperator = (str) => str[getRandomInt(2)];

const rule = 'What is the result of the expression?';
const game = () => {
  const operand1 = getRandomInt(100);
  const operand2 = getRandomInt(100);
  const operator = getRandomOperator('+-*');
  const getAnswer = (oper) => {
    switch (oper) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      default:
        return operand1 * operand2;
    }
  };

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(getAnswer(operator));

  return cons(question, answer);
};

export default () => {
  gameRun(game, rule);
};
