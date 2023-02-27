var req = new XMLHttpRequest();
req.open('GET', document.location, false);
req.send(null);

const serverLoadTime = req.getResponseHeader('X-Server-Load-Time');

const footer = document.querySelector('footer');
const serverLoadTimeElement = document.createElement('p');
serverLoadTimeElement.textContent = 'Server load time:' + serverLoadTime;
footer.appendChild(serverLoadTimeElement);
