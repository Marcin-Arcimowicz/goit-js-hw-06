const qs = (selector) => document.querySelector(selector);

const range = qs("#font-size-control");
const text = qs("span#text");

const changeFontSize = (e) => {
  console.log(`${e.target.value}px`);
  text.style.fontSize = `${e.target.value}px`;
};

range.addEventListener("input", changeFontSize);
