document.querySelector('.calculate').addEventListener('click', function () {
  // Defining variables to act after Clicking Calculate
  let principle = Number(document.querySelector('.principle').value);
  let interest = Number(document.querySelector('.interest').value);
  let period = Number(document.querySelector('.period').value);
  let rate = interest / 12 / 100;
  let result =
    (principle * rate * (1 + rate) ** period) / ((1 + rate) ** period - 1);
  let emiWoInterest = principle / period;
  let monthlyInterest = result - emiWoInterest;
  let totalInterest = monthlyInterest * period;
  let total = totalInterest + principle;

  document.querySelector('.result-value').textContent = result.toFixed(2);

  document.querySelector('.monthly-interest').textContent =
    monthlyInterest.toFixed(2);

  document.querySelector('.yearly-interest').textContent =
    totalInterest.toFixed(2);

  document.querySelector('.total').textContent = total.toFixed(2);
});

document.querySelector('.reset').addEventListener('click', function () {
  document.querySelector('.principle').value = '';
  document.querySelector('.period').value = '';
  document.querySelector('.interest').value = '';
  document.querySelector('.result-value').textContent = 0;
  document.querySelector('.monthly-interest').textContent = 0;
  document.querySelector('.yearly-interest').textContent = 0;
  document.querySelector('.total').textContent = 0;
});
