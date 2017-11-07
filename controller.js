function clearProblems() {
  document.getElementById('problem-column').innerHTML = '';
}

function getOptions() {

  let optionNames = [

    "no_of_problems",
    "min_operand",
    "max_operand",
    "terms_per_problem"

  ];
  
  const options = optionNames.reduce((optionsObj, option) => {
      optionsObj[snakeToCamel(option)] = document.getElementById(option).value;
      return optionsObj;
  }, {});

  let problemTypes = document.getElementsByClassName("problem_type");

  Array.from(problemTypes).forEach((input) => {

    let typeName = input.name;

    options[typeName] = input.checked;

  });

  return options;

}

function createProblemBlock(problem) {

  const lines = problem.split('\n');

  let problemBlock = document.createElement('div');

  let ledgerLine = document.createElement('hr');
  let input = document.createElement('input');

  problemBlock.className = 'problem-block';

  const divs = R.map(function (line) {

    let div = document.createElement('div');

    div.innerHTML = line;

    return div;

  }, lines);


  divs.forEach(function (div) {

    problemBlock.appendChild(div);

  });

  problemBlock.appendChild(ledgerLine);

  problemBlock.appendChild(input);

  return problemBlock;

}

function snakeToCamel(str) {

  const words = str.split('_');

  const capitalized = words.map((word, i) => {
    if (i > 0) {
      const firstLetter = word[0].toUpperCase();
      return firstLetter + word.slice(1);
    } else {
      return word;
    }
  });

  return capitalized.join('');
}