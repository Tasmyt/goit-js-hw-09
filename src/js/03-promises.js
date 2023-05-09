const refs = {
  dataSubmit: document.querySelector('.js-submit'),
  dataDelay: document.querySelector('[name="delay"]'),
  dataStep: document.querySelector('[name="step"]'),
  dataAmount: document.querySelector('[name="amount"]'),
    
}

refs.dataSubmit.addEventListener('click', onCreatePromise)

function onCreatePromise(evt) {
  evt.preventDefault();
  let Delay = Number(refs.dataDelay.value);
  let Step = Number(refs.dataStep.value);
  let Amount = Number(refs.dataAmount.value);

  for (let i = 1; i <= Amount; i += 1) {
    
    createPromise(i, Delay)
      .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
      .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  Delay += Step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
