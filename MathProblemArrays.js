function parseExpression(exp) {

  if (typeof exp === 'number') {

    return exp;

  }

  const [operator, ...subExps] = exp;

  flatExps = subExps.map(parseExpression);

  result = flatExps.reduce(parseOperator(operator));

  return result;

}

function parseOperator(op) {

  switch (op) {

    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      return (x, y) => eval(x + op + y);

    case '^':
      return (x, y) => Math.pow(x, y);

    default: return op;

  }

}

console.log(parseExpression(['^', 2, ['*', 4, 2], ]));