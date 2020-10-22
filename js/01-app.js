
const btnNotificar = document.querySelector('#notificar');

btnNotificar.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {console.log('El resultado es', resultado);
    })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        // new Notification('Esta es la notificacion', {
        //     icon: 'img/ccj.png',
        //     body: 'Código con Juan, aprende con proyectos reales'
        // });
        notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/ccj.png',
            body: 'Código con Juan, aprende con proyectos reales'
        });

        notificacion.onclick =  function() {
            window.open('https://www.codigoconjuan.com')
        }
    }
})