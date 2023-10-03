const theBrand = document.querySelector('.the_brand');
theBrand.setAttribute('title', 'The brand');
theBrand.onclick = function () {
    theBrand.textContent = 'THE brand';
}
