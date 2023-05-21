
function alerta() {
  Swal.fire({
    imageUrl: 'https://media1.giphy.com/media/UVMaSzWhq7NnPulCOd/giphy.gif?cid=ecf05e479fhtxv7qp8lpdt95ndo6xi5nibtayrh9v54c7p7z&ep=v1_gifs_related&rid=giphy.gif&ct=s',
    imageWidth: 200,
    imageHeight: 250,
    text: 'María José',
    title: '<span>¡</span>Ven a celebrar el cumpleaños de<span>:</span>',
    confirmButtonText: 'Abrir',
    confirmButtonColor: '#9c0dcb',
    color: '#000',
    background: '#ff81d8d4',
    backdrop: 'rgba(0,0,0,0.1)',
    showClass: {
      popup: 'animate__animated animate__backInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__bounceOut'
    },


  });
}
alerta();


/* function alertaDiaDeLaBoda() {
  Swal.fire({
    imageUrl: 'https://media0.giphy.com/media/keURpmUeGAjvGZ2VTJ/giphy.gif?cid=ecf05e47msqc9smayhyco5ux0ilwcqccumjx6c2ctywf3006&rid=giphy.gif&ct=s',
    imageWidth: 150,
    imageHeight: 150,
    confirmButtonText: 'Abrir',
    color: '#000',
    background: '#ffffffb3',
    backdrop: 'rgba(0,0,0,0.7)',
    showClass: {
      popup: 'animate__animated animate__backInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__bounceOut'
    },
    footer: 'Invitacion para 2 personas',
    html: '<div class="html-alert" > Hoy es el gran dia! <br>Gracias por acompañarnos. </div>'


  });
}
alertaDiaDeLaBoda(); */