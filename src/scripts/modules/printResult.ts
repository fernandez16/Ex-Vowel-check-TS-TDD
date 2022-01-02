export function printResult(result, output) {
  if (result != "") {
    (<HTMLInputElement>output).innerHTML = result;
  } else (<HTMLInputElement>output).innerHTML = "No vowels were found";
}
