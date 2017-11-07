//plan it out

//what do we start off knowing?
//start with dictionary of element Ids that have the options
//match those to an option name
//create

//in the beginning, I already know the ids for the inputs I need values from
//how do I make that not magic?

let form = document.getElementById("problem_options");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  clearProblems();

  let options = getOptions();
  let problems = createProblems(options);

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

  // let options = {};

  // options.noOfProblems = document.getElementById("no_of_problems").value;
  // options.minOperand = document.getElementById("min_operand").value;
  // options.maxOperand = document.getElementById("max_operand").value;
  // options.termsPerProblem = document.getElementById("terms_per_problem").value;


  // options = R.map(Number, options);

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