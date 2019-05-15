//Service Worker

if('serviceWorker' in navigator){
    console.log('Puede usar los service workers');

    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('serviceWorker cargado correctamente', res))
                            .catch(err => console.log('serviceWorker no se ha podido registrar', err));
                            
}else{
    console.log('NO PUEDES usar los service workers');
}

//Scroll suavizado

$(document).ready(function(){
    
    $("#menu a").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });

        return false;
    });
 
});