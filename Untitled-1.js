    let aa = document.getElementsByClassName('hocam')
    let ac = document.getElementsByTagName('')
    let özgeçmiş = document.getElementsByClassName('workbench')
    özgeçmiş.innerHTML ='<p> selamlar </p>'; 
    let metin = document.getElementsByClassName('hocambox')
    metin.innerHTML ='<p> selamlar </p>'; 
function degistir() {
    let imag = document.getElementById('imaj');
    let newimageSource = 'projeresim/sinop.jpg';
    imag.setAttribute('src', newimageSource);
    imag.setAttribute('alt','New image Alt Text');
}
function italik() {
    let ita = document.getElementById('ankara');
    ita.classList.add('italik')
}
function yenibölyap() {
    let yeniböl = document.createElement('div');
    yeniböl.classList.add('yeniböl');
    yeniböl.textContent ='Firindan taze taze div';
    document.body.appendChild(yeniböl);
}