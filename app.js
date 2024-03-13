const body = document.querySelector('body');

function banner() {
  let div = document.createElement("div");
  div.setAttribute('class', 'banner');

  var img = document.createElement('img');
  img.src = 'img/banner.png';
  img.setAttribute('class', 'bannerimg');

  body.appendChild(div);
  div.append(img);

  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'center';
}

banner();

const Equipe = () => {
  let div = document.createElement("div");
  div.setAttribute('class', 'equipe');

  var textoBanner = document.createElement("h1");
  textoBanner.innerText = 'EQUIPE';

  div.appendChild(textoBanner);
  body.append(div);

  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'center';

}
Equipe();

function cards() {

  let divAreaCards = document.createElement("div");
  divAreaCards.setAttribute('class', 'areaCards');
  body.append(divAreaCards);



  let divCards = document.createElement("div");
  divCards.setAttribute('class', 'cardsContainer');

  body.append(divCards);

  for (let i = 0; i < 3; i++) {
    let divDireita = document.createElement("div");
    let titulo = document.createElement("h1");
    let paragrafo = document.createElement("p");
    let card = document.createElement("div");
    let textoContainer = document.createElement("div")

    textoContainer.setAttribute('class', `textoContainer-${i+1}`)
    titulo.setAttribute('id', `titulo-${i+1}`)
    paragrafo.setAttribute('id', `paragrafo-${i+1}`)
    divDireita.setAttribute('class', `div divDireita-${i+1}`)
    card.setAttribute('class', `card card-${i+1}`)

    
    divCards.append(divDireita);
    divDireita.appendChild(card);
    textoContainer.appendChild(titulo);
    textoContainer.appendChild(paragrafo);
    divDireita.appendChild(textoContainer);

  }
}
cards();
const texto = () => {
  const titulo1 = document.getElementById("titulo-1");
  titulo1.innerText = "Ana";
  const titulo2 = document.getElementById("titulo-2");
  titulo2.innerText = "Laura";
  const titulo3 = document.getElementById("titulo-3");
  titulo3.innerText = "Yannie";
  const paragrafo1 = document.getElementById("paragrafo-1")
  paragrafo1.innerText = "16 anos. Estudante do terceiro ano no ensino médio técnico na FIAP, com habilidades em design e prototipagem."
  const paragrafo2 = document.getElementById("paragrafo-2")
  paragrafo2.innerText = "17 anos. Estudante do terceiro ano no ensino médio técnico na FIAP, com habilidades em prototipagem e design."
  const paragrafo3 = document.getElementById("paragrafo-3")
  paragrafo3.innerText = "17 anos. Estudante do terceiro ano no ensino médio técnico na FIAP, com habilidades em front-end."
}
texto()





const Habilidades = () => {
  let div = document.createElement("div");
  div.setAttribute('class', 'habilidades');

  var textoBanner = document.createElement("h1");
  textoBanner.innerText = 'HABILIDADES E PROJETOS';

  div.appendChild(textoBanner);
  body.append(div);

  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'center';
}
Habilidades();

const HabilidadesIntro = () => {
  let div = document.createElement("div");
  div.setAttribute('class', 'habilidadesIntro');

  var textoBanner = document.createElement("h1");
  textoBanner.innerText = 'A equipe atua em projetos que abrangem as áreas de design, prototipagem e front-end.';

  div.appendChild(textoBanner);
  body.append(div);

  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'flex-start';
}
HabilidadesIntro();

const cardsContainer2 = () => {

  let cardsContainer2 = document.createElement("div");
  cardsContainer2.setAttribute('class', 'cardsContainer2');


for (let i = 0; i < 2; i++) {

  let card = document.createElement("div");
  card.setAttribute('id', `cardP-${i+1}`)
  cardsContainer2.appendChild(card);
  }
  body.append(cardsContainer2);
  

  
}
cardsContainer2();

const links = () => {
const link1 = document.getElementById ('cardP-1');
const link2 = document.getElementById('cardP-2');


link2.setAttribute("onclick", "location.href='https://viudess.github.io/psymosaic/'")
link1.setAttribute("onclick", "location.href='https://laurakalybatas.github.io/ArteEmMov/'")
}
links();




const Contato = () => {
  let div = document.createElement("div");
  div.setAttribute('class', 'contato');

  var textoBanner = document.createElement("h1");
  textoBanner.innerText = 'CONTATO';

  div.appendChild(textoBanner);
  body.append(div);

  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'center';
}
Contato();

const form = () => {

  const div = document.createElement("div");
  div.setAttribute('class', 'contact');


  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'center';


  document.body.appendChild(div);


  const form = document.createElement('form');
  form.id = 'contactForm';
  form.style.maxWidth = '700px';
  form.style.margin = '20px auto';



  function createField(labelText, inputType, inputName, isRequired) {

    const div = document.createElement('div');
    div.setAttribute('class', 'input');
    div.style.marginBottom = '5%';

    const label = document.createElement('label');
    label.textContent = labelText;
    label.style.display = 'block';



    const input = document.createElement('input');
    input.type = inputType;
    input.name = inputName;
    input.required = isRequired;
    input.style.width = '100%';
    input.style.padding = '8px';
    input.style.boxSizing = 'border-box';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '4px';
    input.placeholder = 'Digite aqui...';

    div.appendChild(label);
    div.appendChild(input);

    return div;
  }


  const nameField = createField('Nome:', 'text', 'name', true);
  const emailField = createField('Email:', 'email', 'email', true);

  const messageDiv = document.createElement('div');
  messageDiv.style.marginBottom = '10px';

  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Mensagem:';
  messageLabel.style.display = 'block';



  const messageTextarea = document.createElement('textarea');
  messageTextarea.name = 'message';
  messageTextarea.rows = '4';
  messageTextarea.required = true;
  messageTextarea.style.width = '100%';
  messageTextarea.style.padding = '8px';
  messageTextarea.style.boxSizing = 'border-box';
  messageTextarea.style.border = '1px solid #ccc';
  messageTextarea.style.borderRadius = '4px';
  messageTextarea.placeholder = 'Digite sua mensagem aqui...';

  messageDiv.appendChild(messageLabel);
  messageDiv.appendChild(messageTextarea);

  form.appendChild(nameField);
  form.appendChild(emailField);
  form.appendChild(messageDiv);


  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Enviar';
  submitButton.style.width = '100%';
  submitButton.style.padding = '10px';
  submitButton.style.backgroundColor = '#998f52';
  submitButton.style.border = 'none';
  submitButton.style.color = 'white';
  submitButton.style.borderRadius = '4px';
  submitButton.style.cursor = 'pointer';


  submitButton.addEventListener('mouseover', function () {
    submitButton.style.backgroundColor = '#c6b96e';
  });

  submitButton.addEventListener('mouseout', function () {
    submitButton.style.backgroundColor = '#998f52';
  });

  form.appendChild(submitButton);


  document.body.appendChild(form);

  // Adicionando evento de envio do formulário
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    setTimeout(function () {
      alert('Obrigado por entrar em contato, ' + name + '! Nós responderemos em breve, no email: ' + email);
      form.reset();
    }, 1000);
  });
}


form();


const Footer = () => {
  let div = document.createElement("div");
  div.setAttribute('class', 'footer');

  var textoBanner = document.createElement("h1");
  textoBanner.innerText = 'CopyRight © 2024 | All Rights Reserved';

  div.appendChild(textoBanner);
  body.append(div);

  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'center';


}
Footer();