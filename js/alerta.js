
function alerta() {
  Swal.fire({
    imageUrl: '../img/trolls/giphy (4).gif',
    imageWidth: 200,
    imageHeight: 250,
    text: 'María José',
    title: 'Has sido invitado a cumpleaños No. 1 de:',
    confirmButtonText: 'Abrir',
    confirmButtonColor: '#eb3dbf',
    color: '#000',
    background: '#fde8ffa6',
    backdrop: 'rgba(0,0,0,0.1)',
    showClass: {
      popup: 'animate__animated animate__backInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__bounceOut'
    },
    footer: 'Invitacion para 4 personas'


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