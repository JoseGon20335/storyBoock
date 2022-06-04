var input = document.getElementById("display-result");

const Operaciones = () => {

  function ClearCalculator() {
    input.value = "";
    input.focus();
  }

  function AddToCalculator(value) {
    input.value += value;
    input.focus();
  }

  function ResultCalculator() {
    input.value = eval(input.value);
    input.focus();
  }

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("button-equal").click();
    }
  });

  function AdvanceCalculator(funcName) {
    input.value = Math[funcName](input.value);
    input.focus();
  }
}

export default Operaciones;