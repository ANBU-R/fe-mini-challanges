import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <section >
  <div class="boxes">
  <div class="box">
  </div>
  <div class="box">
  </div>
  <div class="box">
  </div>
  </div>
  <div class="inputs">
  <label for="padding">Padding</label>
  <input name="padding" value="10" id="padding" type="range" min="10" max="50"/>
  <label for="border">Border</label>
  <input name="border" value="1" id="border" type="range" min="1" max="10">
  <label for="background-color">Background</label>
  <input name="background-color" value="#646cff" id="background-color" type="color" >
  </div>
  </section>
`;

function handleInput(this: HTMLInputElement) {
  const suffix = this.type === "color" ? "" : "px";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

const InputElements = document.querySelectorAll("input");
InputElements.forEach((el) => {
  el.addEventListener("input", handleInput);
});
