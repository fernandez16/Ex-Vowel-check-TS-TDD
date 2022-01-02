import { vowelCheckBtn, vowelCheckCountBtn, vowelCheckCountInput, vowelCheckCountOutput, vowelCheckInput, vowelCheckOutput, vowelCountBtn, vowelCountInput, vowelCountOutput } from "./modules/connectors";
import { printResult } from "./modules/printResult";
import { vowelCheck } from "./modules/vowelCheck";
import { vowelCheckCount } from "./modules/vowelCheckCount";
import { vowelCount } from "./modules/vowelCount";

function app() {
  vowelCheck("");
  vowelCount("");
  vowelCheckCount("");
  printResult("", "")
}

vowelCheckBtn.addEventListener("click", function () {
  var inputValue = (<HTMLInputElement>vowelCheckInput).value;
  printResult(vowelCheck(inputValue), vowelCheckOutput);
});

vowelCountBtn.addEventListener("click", function () {
  var inputValue = (<HTMLInputElement>vowelCountInput).value;
  printResult(vowelCount(inputValue), vowelCountOutput);
});

vowelCheckCountBtn.addEventListener("click", function () {
  var inputValue = (<HTMLInputElement>vowelCheckCountInput).value;
  printResult(vowelCheckCount(inputValue), vowelCheckCountOutput);
});
