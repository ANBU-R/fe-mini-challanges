import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="outer">
  
  </div>
`;

// const inner = document.querySelectorAll<HTMLDivElement>(".inner");
const outer = document.querySelector<HTMLDivElement>(
  ".outer"
) as HTMLDivElement;

for (let i = 0; i < 20; i++) {
  const child = document.createElement("div");
  child.innerText = `${i + 1}`;
  child.classList.add("inner");
  outer.appendChild(child);
}
let grabbed = false;
let grabPoint: number;
let scrollTopPoint: number;

outer.addEventListener(
  "mousemove",
  function (this: HTMLDivElement, e: MouseEvent) {
    e.preventDefault();
    if (!grabbed) return;
    outer.scrollTop = scrollTopPoint + grabPoint - e.pageY;
  }
);

outer.addEventListener("mousedown", function (this: HTMLDivElement, e) {
  e.preventDefault();
  grabbed = true;
  grabPoint = e.pageY - this.offsetTop;
  scrollTopPoint = this.scrollTop;
  console.log("mousedown");
});
outer.addEventListener("mouseup", function (this, e) {
  e.preventDefault();
  console.log("mouseup");
  grabbed = false;
  grabPoint = 0;
});
