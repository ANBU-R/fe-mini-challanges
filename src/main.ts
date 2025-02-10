import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
<div class="panels">
<div class="panel">
  <p>Night</p>
  <p>screams</p>
  <p>silently</p>
</div>
<div class="panel">
  <p>Corridors</p>
  <p>echo</p>
  <p>terror</p>
</div>
<div class="panel">
  <p>Shadows</p>
  <p>in</p>
  <p>ruins</p>
</div>
<div class="panel">
  <p>Phantoms</p>
  <p>eternal</p>
  <p>wander</p>
</div>
<div class="panel">
  <p>Time</p>
  <p>darkness</p>
  <p>reigns</p>
</div>
</div>
`;

function mouseEnter(this: HTMLDivElement) {
  console.log("hi");
  this.classList.add("active");
}

function mouseLeave(this: HTMLDivElement) {
  this.classList.remove("active");
}

const panels: NodeListOf<HTMLDivElement> =
  document.querySelectorAll<HTMLDivElement>(".panel");
panels.forEach((el) => {
  el.addEventListener("mouseenter", mouseEnter);
  el.addEventListener("mouseleave", mouseLeave);
});
