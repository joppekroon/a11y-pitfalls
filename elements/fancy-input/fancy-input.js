(function () {
  const template = document.createElement("template");
  template.innerHTML = `✨
    <link rel="stylesheet" href="/elements/fancy-input/fancy-input.css">
    <slot><input type="text" /></slot>✨
  `;

  class FancyInput extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define("fancy-input", FancyInput);
})();
