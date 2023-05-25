
const alerta = () => {
  Swal.fire({
    imageUrl: '/img/trolls/output-onlinegiftools.gif',
    imageWidth: 200,
    imageHeight: 250,
    html:
      '<div class="alet-text-container" > <div class="ven-a-celebrar"   > <span>¡</span>Ven a celebrar el cumpleaños de<span>:</div></span> ' +
      ' <div class="maria-jose" >María José<span>!</span></div> ' +
      '</div>',
    confirmButtonText: 'abrir!',
    confirmButtonColor: '#9c0dcb',
    color: '#000',
    background: '#ff81d8d4',
    backdrop: 'rgba(0,0,0,0.1)',
    showClass: {
      popup: 'animate__animated animate__jackInTheBox'
    },
    hideClass: {
      popup: 'animate__animated animate__hinge'
    },


  });
}
alerta();

