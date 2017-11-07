const exampleOptions = {

  addition: true,
  subtraction: true,
  multiplication: true,
  division: true,

  termsPerProblem: 5,
  minOperand: 1000,
  maxOperand: 9999,
  noOfProblems: 5,

}

const signs = {
 
  addition: '+',
  subtraction: '-',
  multiplication: 'x',
  division: '%',
 
}

//TODO: a problem should be a type of object which includes an answer
//the syntax for describing a problem should use prefix notation
//ex: (+ 5 4 3 2 6 (/ 4 2))

function createProblems(options) {

  let types = ['addition', 'subtraction', 'multiplication', 'division'];
  
  types = types.filter(type => {
 
    return options[type];
 
  });


  let problems = [];

  for (let i = 0; i < options.noOfProblems; i++) {

    let randomTypeIndex = Math.floor(Math.random() * types.length);
    let type = types[randomTypeIndex];
    let sign = signs[type];
    let terms = [];
    let range = options.maxOperand - options.minOperand;

    for (let j = 0; j < options.termsPerProblem; j++) {
 
      terms.push(Math.floor(Math.random() * range + options.minOperand));
 
    }

    terms[terms.length - 1] = `${sign} ${terms[terms.length - 1]}`;

    let problem = terms.join('\n');

    problems.push(problem);

  }

  return problems;

}