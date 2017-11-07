let form = document.getElementById("problem_options");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  clearProblems();

  let options = getOptions();
  let problems = createProblems(options);
  console.log("createProblems(options):", problems);

  let problemDivs = R.map(createProblemBlock, problems);

  let problemColumn = document.getElementById('problem-column');

  problemDivs.forEach(div => {
    problemColumn.appendChild(div);
  });

  return false; //prevent submission, url bar changing
});
