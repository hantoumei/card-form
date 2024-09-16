import './just-validate.css';
import JustValidate from 'just-validate';

const validator = new JustValidate('.card-form__form');

function cardNumberCheck(value) {
  if (/[^0-9-\s]+/.test(value)) return false;

  let nCheck = 0;
  value = value.replace(/\D/g, "");

  for (let n = 0; n < value.length; n++) {
    let nDigit = parseInt(value[n], 10);
    if (!((n + value.length) % 2) && (nDigit *= 2) > 9) nDigit -= 9;
    nCheck += nDigit;
  }

  return (nCheck % 10) === 0 && !isNaN(value.replace(' ', '')) && value.replace(' ', '').length == 16;
}

function dateCheck(cardDate) {

  let d = new Date();
  let currentMonth = (d.getMonth() + 1).toString().padStart(2, '0');
  let currentYear = d.getFullYear().toString().slice(2, 4);
  let cardMonth = cardDate.replace('/', '').slice(0, 2);
  let cardYear = cardDate.replace('/', '').slice(2, 4);
  if (isNaN(cardDate.replace('/', '')) ||
    (cardDate.replace(/[^\d]/g, '').length != 4) ||
    (currentMonth > cardMonth && currentYear == cardYear) ||
    currentYear > cardYear ||
    cardMonth > 12 || cardMonth == 0) {
    return true;
  } else {
    return false;
  }
}

function isFormValid() {
  let count = 0;
  document.querySelectorAll('input').forEach((input) => {
    if (input.classList.contains('just-validate-success-field')) {
      count++
    }
  });
  if (count == 4) {
    return true;
  }
  return false;
}

validator
  .addField('#card-number', [
    {
      rule: 'required',
      errorMessage: 'Введите номер карты',
    },
    {
      validator: (value) => cardNumberCheck(value) ? true : false,
      errorMessage: 'Некорректный номер карты',
    }
  ],
    {
      errorsContainer: '.card-form__input-wrapper--number',
    })

  .addField('#card-expires', [
    {
      rule: 'required',
      errorMessage: 'Введите месяц и год',
    },
    {
      validator: (value) => dateCheck(value) ? false : true,
      errorMessage: 'Введите корректное значение',
    }
  ],
    {
      errorsContainer: '.card-form__input-wrapper--expires',
    })

  .addField('#card-cvv', [
    {
      rule: 'required',
      errorMessage: 'Введите проверочный код',
    },
    {
      rule: 'integer',
      errorMessage: 'Введите проверочный код',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите трехзначный код',
    },
    {
      rule: 'maxLength',
      value: 3,
      errorMessage: 'Введите трехзначный код',
    },
  ],
    {
      errorsContainer: '.card-form__input-wrapper--cvv',
    })

  .addField('#card-email', [
    {
      rule: 'required',
      errorMessage: 'Введите адрес эл.почты',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный адрес эл.почты',
    },
    {
      rule: 'customRegexp',
      value: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}',
      errorMessage: 'Эл.почта содержит недопустимые символы',
    },
  ],
    {
      errorsContainer: '.card-form__input-wrapper--email',
    });


validator.onSuccess((e) => {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(document.querySelector('.card-form__form'))))
})

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('blur', (e) => {
    validator.revalidateField(`#${e.target.id}`);
    setTimeout(() => {
      if (isFormValid()) {
        document.querySelector('.card-form__btn').disabled = false;
      } else {
        document.querySelector('.card-form__btn').disabled = true;
      }
    })
  });
})