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
    textoBanner.innerText = 'EQUIPES';

    div.appendChild(textoBanner);
    body.append(div);

    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';

}
Equipe();

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

