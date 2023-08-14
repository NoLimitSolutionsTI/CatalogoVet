document.addEventListener('DOMContentLoaded', function() {
    const btnWatchList = document.querySelectorAll('.btn-watch');
    const fichaDetail = document.querySelector('.ficha-detail');
    const btnback = document.querySelector('.boton-back-detail');
    const secprod= document.querySelector('.section-p');

    btnWatchList.forEach(btnWatch => {
        btnWatch.addEventListener('click', function() {
            fichaDetail.style.display = 'block';
            secprod.style.display = 'none'
        });
    });
    btnback.addEventListener('click', function(){
        fichaDetail.style.display = 'none';
        secprod.style.display = 'block'
});
});