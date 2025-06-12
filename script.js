function mostrarSurpresa () {
    document.querySelector('button').style.display = 'none';
    document.querySelector('#loadingContainer').style.display = 'block';

    setTimeout(() => {
        document.getElementById('loadingBar').style.width = '100%';
    }, 100);

    setTimeout(() => {
        document.getElementById('loadingContainer').style.display = 'none';
        document.getElementById('container').style.display = 'block';
    }, 2100);
}
