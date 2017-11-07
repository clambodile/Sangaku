class MathProblem {

  constructor(e) {
    this.operation = operation;
    this.expressions = expressions;
  }

  get operation() {

    return this._operation;

  }

  set operation(op) {

    switch (op) {
      case '+':
        op = (x, y) => x + y;
        break;
      case '-':
        op = (x, y) => x - y;
        break;
      case '*':
        op = (x, y) => x * y;
        break;
      case '/':
        op = (x, y) => x / y;
        break;
      case '%':
        op = (x, y) => x % y;
        break;
      case '^':
        op = (x, y) => Math.pow(x, y);
        break;
    }

    this._operation = op;

  }

  resolve() {

    return this.expressions.reduce((total, expression) => {
      if (typeof expression === 'number') {

        return this.operation(total, expression);

      } else if (expression instanceof MathProblem) {

        return this.operation(total, expression.resolve(expression));

      }
    });
  }

}

const myMathProblem1 = new MathProblem('+', [5, 3, 2]);
const myMathProblem2 = new MathProblem('*', [5, myMathProblem1, 2]);

console.log(myMathProblem2.resolve());

//MathProblem is a tree
//a MathProblem has an operator, and a list of expressions