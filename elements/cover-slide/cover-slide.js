(function () {
  const template = document.createElement("template");
  template.innerHTML = `
    <link rel="stylesheet" href="/elements/cover-slide/cover-slide.css">
    <td-shape small large bl orange></td-shape>
    <span class="robin" role="img" title="topdesk logomark"></span>
    <header>
      <h1><slot name="title"></slot></h1>
      <p><slot name="subtitle"></slot></p>
    </header>
  `;

  class CoverSlide extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define("cover-slide", CoverSlide);
})();
