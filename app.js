async function displayTools() {
  const response = await fetch('tools.json');
  const tools = await response.json();

  const container = document.querySelector('#tools-container');

  for (let i = 0; i < tools.length; i++) {
    const tool = tools[i];

    const toolBox = document.createElement('div');
    toolBox.classList.add('tool-box');

    const toolImage = document.createElement('img');
    toolImage.src = tool.image;
    toolImage.alt = tool.title;

    const toolTitle = document.createElement('h2');
    toolTitle.textContent = tool.title;

    const toolDescription = document.createElement('p');
    toolDescription.textContent = tool.description;

    const toolLink = document.createElement('a');
    toolLink.href = tool.link;
    toolLink.textContent = 'Learn More';

    toolBox.appendChild(toolImage);
    toolBox.appendChild(toolTitle);
    toolBox.appendChild(toolDescription);
    toolBox.appendChild(toolLink);

    container.appendChild(toolBox);
  }
}

function filterTools() {
  const searchBox = document.querySelector('#search-box');
  const filter = searchBox.value.toUpperCase();
  const toolBoxes = document.querySelectorAll('.tool-box');

  toolBoxes.forEach((toolBox) => {
    const toolTitle = toolBox.querySelector('h2');
    const titleText = toolTitle ? toolTitle.textContent.toUpperCase() : '';
    const toolDescription = toolBox.querySelector('p');
    const descriptionText = toolDescription ? toolDescription.textContent.toUpperCase() : '';

    if (titleText.includes(filter) || descriptionText.includes(filter)) {
      toolBox.style.display = '';
    } else {
      toolBox.style.display = 'none';
    }
  });
}


displayTools();
