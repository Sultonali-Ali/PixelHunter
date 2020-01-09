
import {changeScreen, render} from "./util";
import moduleRulesFunc from "./rules";
import {rules} from "./data";

export default (data) => {
  const template = `<section class="greeting central--blur">
    <img class="greeting__logo" src="img/logo_ph-big.svg" width="201" height="89" alt="Pixel Hunter">
    <div class="greeting__asterisk asterisk"><span class="visually-hidden">${data.asterisk}</span>*</div>
    <div class="greeting__challenge">
      <h3 class="greeting__challenge-title">${data.challengeTitle}</h3>
      <p class="greeting__challenge-text">${data.challengeText}</p>
      <ul class="greeting__challenge-list">
      ${data.challengeList.map((item) => `<li>${item}</li>`).join(``)}
      </ul>
    </div>
    <button class="greeting__continue" type="button">
      <span class="visually-hidden">Продолжить</span>
      <svg class="icon" width="64" height="64" viewBox="0 0 64 64" fill="#000000">
        <use xlink:href="build/img/sprite.svg#arrow-right"></use>
      </svg>
    </button>
  </section>`;

  const moduleGreetingElement = render(template);

  const greetingContinue = moduleGreetingElement.querySelector(`.greeting__continue`);
  greetingContinue.addEventListener(`click`, () => {
    changeScreen(moduleRulesFunc(rules));
  });


  return moduleGreetingElement;
};


