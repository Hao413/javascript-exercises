const para = document.querySelector("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

const head3 = document.querySelector("h3");
head3.textContent = "I'm blue h3!";
head3.style.color = "blue";

const content = document.querySelector("div");
content.style.backgroundColor = "pink";
content.style.border = "black";

const head1 = document.createElement("h1");
content.textContent = "I'm in a div";

const p = document.createElement("p");
content.textContent = "ME TOO!";

content.appendChild(head1);
content.appendChild(p);


