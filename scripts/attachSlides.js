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

  for await (const data of slides.map(async (slide) => ({
    element: slide,
    name: slide.dataset.slide,
    content: await getSlideContent(slide.dataset.slide)
  }))) {
    data.element.innerHTML = data.content;
    data.element.classList.add("slide");
    data.element.setAttribute("id", data.name);
    data.element.setAttribute("aria-labelledby", `${data.name}-title`);
  }
}
