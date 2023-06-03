const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text content!';

const redText = document.createElement('p');
redText.style.cssText = 'color: red';
redText.textContent = 'Hey I\'m red!'
content.appendChild(redText);
container.appendChild(content);

const pinkDiv = document.createElement('div');
  pinkDiv.style.cssText = 'border-style: solid; border-thickness: 1em; border-color: black; background-color: pink';


const header1 = document.createElement('h1');
  header1.textContent = 'I\'m in a div';
  pinkDiv.appendChild(header1);

const meToo = document.createElement('div');
  meToo.textContent = 'ME TOO!';
  pinkDiv.appendChild(meToo);


content.appendChild(pinkDiv);
