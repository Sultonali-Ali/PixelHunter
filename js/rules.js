
import {changeScreen, render} from "./util";
import moduleGame1Func from "./game-1";
import {game1} from "./data";
import headerTemplateFunc from "./header";


export default (data) => {
  const template = `<section class="rules">
    <h2 class="rules__title">${data.title}</h2>
    <ul class="rules__description">
      <li>${data.descriptionList[0]}
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>${data.descriptionList[1]}</li>
      <li>${data.descriptionList[2]}</li>
      <li>${data.descriptionList[3]}</li>
    </ul>
    <p class="rules__ready">${data.ready}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;



  const moduleRulesElement = render(template);

  const rulesButton = moduleRulesElement.querySelector(`.rules__button`);
  rulesButton.addEventListener(`click`, () => {
    rulesInput.value = ``;
    changeScreen(moduleGame1Func(game1));
  });

  const rulesInput = moduleRulesElement.querySelector(`.rules__input`);
  rulesInput.addEventListener(`input`, () => {
    if (rulesInput.value.length >= 2) {
      rulesButton.removeAttribute(`disabled`);
    }
    if (rulesInput.value.length < 2) {
      rulesButton.setAttribute(`disabled`, `true`);
    }
  });
  moduleRulesElement.prepend(headerTemplateFunc());

  return moduleRulesElement;
};
