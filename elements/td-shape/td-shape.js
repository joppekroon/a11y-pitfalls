(function () {
  const template = document.createElement("template");
  template.innerHTML = `
    <link rel="stylesheet" href="/elements/td-shape/td-shape.css">
    <div class="small-shape"></div>
    <div class="large-shape"></div>
  `;

  class TDShape extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define("td-shape", TDShape);
})();
