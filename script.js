const adultMinusButton = document.querySelectorAll('.core-number-picker .minus')[0];
const adultPlusButton = document.querySelectorAll('.core-number-picker .plus')[0];
const adultValueElement = document.querySelectorAll('.core-number-picker .value.adultvalue')[0];
const adultPriceElement = document.getElementById('adultPrice');

const childMinusButton = document.querySelectorAll('.core-number-picker .minus')[1];
const childPlusButton = document.querySelectorAll('.core-number-picker .plus')[1];
const childValueElement = document.querySelectorAll('.core-number-picker .value.childvalue')[0];
const childPriceElement = document.getElementById('childPrice');
const oneChildPriceElement = document.getElementById('childPriceValue');

const totalPriceElement = document.querySelector('.totalPrice');
const totalPayableElement = document.getElementById('totalPayable');

let adultPrice = parseInt(adultPriceElement.textContent.slice(4));
let childPrice = parseInt(childPriceElement.textContent.slice(4));

function updateTotalPrice() {
  const adultValue = parseInt(adultValueElement.textContent);
  const childValue = parseInt(childValueElement.textContent);
  const totalPayable = adultPrice * adultValue + childPrice * childValue;
  totalPriceElement.textContent = `AED ${totalPayable}`;
  totalPayableElement.textContent = `AED ${totalPayable}`;
}

// Функция для замены первой цифры в числе
function replaceFirstDigit(number, newDigit) {
  const digits = number.toString().split('');
  digits[0] = newDigit.toString();
  return parseInt(digits.join(''));
}

// Обработчик события нажатия на кнопку минус для Adult
adultMinusButton.addEventListener('click', function() {
  let currentValue = parseInt(adultValueElement.textContent);
  if (currentValue > 1) {
    currentValue -= 1;
    adultValueElement.textContent = currentValue;

    const oneAdultTotalPrice = adultPrice * currentValue;
    const oneAdultPriceElement = document.getElementById('oneAdultPrice');
    oneAdultPriceElement.textContent = `AED ${oneAdultTotalPrice}`;
  } else if (currentValue === 1) {
    currentValue = 0;
    adultValueElement.textContent = currentValue;
    adultPriceElement.textContent = 'AED 0';

    const oneAdultPriceElement = document.getElementById('oneAdultPrice');
    oneAdultPriceElement.textContent = 'AED 0';
  }
  updateTotalPrice();
});

// Обработчик события нажатия на кнопку плюс для Adult
adultPlusButton.addEventListener('click', function() {
  let currentValue = parseInt(adultValueElement.textContent);
  currentValue += 1;
  adultValueElement.textContent = currentValue;

  const oneAdultTotalPrice = adultPrice * currentValue;
  const oneAdultPriceElement = document.getElementById('oneAdultPrice');
  oneAdultPriceElement.textContent = `AED ${oneAdultTotalPrice}`;

  const adultTotalPrice = adultPrice * currentValue;
  adultPriceElement.textContent = `AED ${adultTotalPrice}`;
  updateTotalPrice();
});

// Обработчик события нажатия на кнопку минус для Child
childMinusButton.addEventListener('click', function() {
  let currentValue = parseInt(childValueElement.textContent);
  if (currentValue > 1) {
    currentValue -= 1;
    childValueElement.textContent = currentValue;

    const childTotalPrice = childPrice * currentValue;
    childPriceElement.textContent = `AED ${childTotalPrice}`;

    const oneChildTotalPrice = childPrice * currentValue;
    oneChildPriceElement.textContent = `AED ${oneChildTotalPrice}`;
  } else if (currentValue === 1) {
    currentValue = 0;
    childValueElement.textContent = currentValue;
    childPriceElement.textContent = 'AED 0';
    oneChildPriceElement.textContent = 'AED 0';
  }
  updateTotalPrice();
});

// Обработчик события нажатия на кнопку плюс для Child
childPlusButton.addEventListener('click', function() {
  let currentValue = parseInt(childValueElement.textContent);
  currentValue += 1;
  childValueElement.textContent = currentValue;

  const childTotalPrice = childPrice * currentValue;
  childPriceElement.textContent = `AED ${childTotalPrice}`;

  const oneChildTotalPrice = childPrice * currentValue;
  oneChildPriceElement.textContent = `AED ${oneChildTotalPrice}`;
  updateTotalPrice();
});












const selectedFlag = document.querySelector(".iti__selected-flag");
const countryList = document.querySelector(".iti__country-list");
const phoneNumberInput = document.querySelector(
  '.react-tel-input input[type="tel"]'
);

// Добавляем обработчик события для открытия/закрытия списка
selectedFlag.addEventListener("click", function () {
  countryList.classList.toggle("iti__hide");
});

// Добавляем обработчик события для выбора страны
countryList.addEventListener("click", function (event) {
  const listItem = event.target.closest(".iti__country");
  if (listItem) {
    const dialCode = listItem.dataset.dialCode;
    const countryName =
      listItem.querySelector(".iti__country-name").textContent;

    phoneNumberInput.value = `+${dialCode}`;
    phoneNumberInput.dataset.countryName = countryName;
    selectedFlag.setAttribute("title", `${countryName} (+${dialCode})`);

    // Удаляем текущий класс флага и добавляем новый класс флага
    const currentFlag = selectedFlag.querySelector(".iti__flag");
    const newFlag = document.createElement("div");
    newFlag.classList.add("iti__flag", `iti__${listItem.dataset.countryCode}`);
    selectedFlag.replaceChild(newFlag, currentFlag);

    countryList.classList.add("iti__hide");
  }
});
