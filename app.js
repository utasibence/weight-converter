const g_input = document.getElementById('g_input');
const output = document.querySelector(".output")
const dk_output = document.getElementById('dk_output');
const kg_output = document.getElementById('kg_output');
const t_output = document.getElementById('t_output');

function main() {

  function notNum(wrong) {

  }

  function convertDk(gram) {
    dk_output.innerHTML = gram / 10;
  }

  function convertKg(gram) {
    kg_output.innerHTML = gram / 1000;
  }

  function convertT(gram) {
    t_output.innerHTML = gram / 1000000;
  }

  output.style.visibility = "hidden";

  g_input.addEventListener('input', function() {
    if (isNaN(parseFloat(g_input.value))) {
      console.log("Not a Number!");
      output.style.visibility = "hidden";
    } else {
      output.style.visibility = "visible";
    }
    convertDk(g_input.value);
    convertKg(g_input.value);
    convertT(g_input.value);
  });
}

main();
