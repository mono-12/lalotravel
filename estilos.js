document.addEventListener('DOMContentLoaded', () => {
    // Letrero de Recojo en Tienda
    const recijoTienda = document.querySelector('.recojo-tienda');
    const flecha = document.querySelector('.flecha');

    function moverLetrero() {
        recijoTienda.classList.toggle('mover');
        flecha.classList.toggle('rotar');
    }

    setInterval(moverLetrero, 10000);

    // Subir Imagen
    const imagenUpload = document.querySelector('.imagen-upload');
    const imagenInput = document.getElementById('imagen-upload');
    const imagenSubida = document.querySelector('.imagen-subida');

    imagenUpload.addEventListener('click', () => {
        imagenInput.click();
    });

    imagenInput.addEventListener('change', () => {
        const file = imagenInput.files[0];
        const imageUrl = URL.createObjectURL(file);
        imagenSubida.src = imageUrl;
        imagenSubida.classList.remove('hidden');
    });
});
