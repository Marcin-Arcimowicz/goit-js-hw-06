
const qs = (selector) => document.querySelector(selector);

const counter = qs("div#counter");
const value = qs("span#value");

const update = (e) => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }  
  e.target.dataset.action === "increment" ? increase() : decrease();
};

const increase = () => value.innerHTML++;

const decrease = () => value.innerHTML--;


counter.addEventListener("click", update);
