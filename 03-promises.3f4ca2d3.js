!function(){var e={dataSubmit:document.querySelector(".js-submit"),dataDelay:document.querySelector('[name="delay"]'),dataStep:document.querySelector('[name="step"]'),dataAmount:document.querySelector('[name="amount"]')};function t(e,t){return new Promise((function(a,n){var o=Math.random()>.3;setTimeout((function(){o?a({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.dataSubmit.addEventListener("click",(function(a){a.preventDefault();for(var n=Number(e.dataDelay.value),o=Number(e.dataStep.value),u=Number(e.dataAmount.value),c=1;c<=u;c+=1)t(c,n).then((function(e){var t=e.position,a=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(a,"ms"))})).catch((function(e){var t=e.position,a=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(a,"ms"))})),n+=o}))}();
//# sourceMappingURL=03-promises.3f4ca2d3.js.map