(function () {
  const template = document.createElement("template");
  template.innerHTML = `
    <link rel="stylesheet" href="/elements/example-host/example-host.css">
    <slot></slot>
  `;

  class ExampleHost extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define("example-host", ExampleHost);
})();
