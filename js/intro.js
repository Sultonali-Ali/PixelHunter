
import {changeScreen, render} from "./util";
import moduleGreetingElement from "./greeting";

const template = `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;

const moduleIntroElement = render(template);

const agreeButton = moduleIntroElement.querySelector(`.intro__asterisk`);

agreeButton.addEventListener(`click`, () => {
  changeScreen(moduleGreetingElement);
});


export default moduleIntroElement;
