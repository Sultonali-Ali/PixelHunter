
import {changeScreen, render} from "./util";
import moduleGreetingFunc from "./greeting";
import {greeting} from "./data";

export default (data) => {
  const template = `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup>${data[`description`]}</p>
  </section>`;

  const moduleIntroElement = render(template);

  const agreeButton = moduleIntroElement.querySelector(`.intro__asterisk`);

  agreeButton.addEventListener(`click`, () => {
    changeScreen(moduleGreetingFunc(greeting));
  });
  return moduleIntroElement;
};
