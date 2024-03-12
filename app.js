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

    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.banner', { duration: 4000 });
}

banner();
