async function getSlideContent(slide) {
  if (!slide) {
    return `No slide specified: ${slide}`;
  }

  const file = `slides/${slide}.html`;

  return await fetch(file)
    .then(async (response) => {
      if (!response.ok) {
        return `Failed to load ${slide}: ${response.status} ${response.statusText}`;
      }

      return await response.text();
    })
    .catch((error) => {
      return `Fetch failed of ${slide}, ${error}`;
    });
}

export default async function attachSlides() {
  const slides = [...document.querySelectorAll("section[data-slide]")];
  const parser = new DOMParser();

  for await (const data of slides.map(async (slide) => ({
    element: slide,
    name: slide.dataset.slide,
    content: await getSlideContent(slide.dataset.slide)
  }))) {
    const doc = parser.parseFromString(data.content, "text/html");
    const titleEl = doc.querySelector("h2");
    const titleId = `${data.name}-title`;

    if (!titleEl) {
      console.error(`Missing title in ${data.name}`);
    } else {
      titleEl.setAttribute("id", titleId);
    }

    data.element.innerHTML = doc.body.innerHTML;
    data.element.classList.add("slide");
    data.element.setAttribute("id", data.name); // used by goto
    data.element.setAttribute("aria-labelledby", titleId);
  }
}
