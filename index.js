let form = document.getElementById("problem_options");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  clearProblems();

  let options = getOptions();
  let problems = createProblems(options);
  console.log("problems", problems);

  let problemDivs = R.map(createProblemBlock, problems);

  let problemColumn = document.getElementById('problem-column');

  problemDivs.forEach(div => {
    problemColumn.appendChild(div);
  })

  return false; //prevent submission, url bar changing
});

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
      optionsObj[option] = document.getElementById(option).value;
      return optionsObj
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