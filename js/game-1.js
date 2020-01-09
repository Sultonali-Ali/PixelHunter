
import {changeScreen, render} from "./util";
import moduleGame2Element from "./game-2";
import headerTemplateFunc from "./header";
import statisticsTemplateFunc from "./statistics";


export default (data) => {
  const template = `
  <section class="game">
    <p class="game__task">${data.task}</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>${data.photo}</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>${data.paint}</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question2" type="radio" value="photo">
          <span>${data.photo}</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question2" type="radio" value="paint">
          <span>${data.paint}</span>
        </label>
      </div>
    </form>
  </section>`;

  const moduleGame1Element = render(template);

  const gameContent = moduleGame1Element.querySelector(`.game__content`);
  const gameAnswers = Array.from(moduleGame1Element.querySelectorAll(`input[type=radio]`));
  gameContent.addEventListener(`click`, () => {
    let checkedCount = 0;
    gameAnswers.map((item) => {
      if (item.checked) {
        checkedCount++;
      }
    });
    if (checkedCount >= 2) {
      changeScreen(moduleGame2Element);
    }
  });
  moduleGame1Element.prepend(headerTemplateFunc());
  moduleGame1Element.append(statisticsTemplateFunc());


  return moduleGame1Element;
};
