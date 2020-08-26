var vid = document.getElementById('product-image-small-3');
var play = document.getElementById('vid');
var minip = document.getElementById('minip');
var container = document.getElementById('container')

var w = window.innerWidth;
var h = window.innerHeight;



$('#product-image-small-3').click(function (event) {
    play.play(); 
    play.style.display = 'block'
    play.style.marginTop = '-120px'
    minip.style.display = 'none';
    
    if(w<551){
        play.style.marginTop = '0px';
        play.style.maxWidth = '84%';
        play.style.width = '100%';
        
    }
    if(w<416){
    
        play.style.maxWidth = '80%';
        play.style.width = '100%';
       
        
    }
    if(w<340){
    
        play.style.maxWidth = '75%';
        play.style.width = '100%';
       
    }
    $('html').one('click', function () {
        play.style.display = 'none';
        minip.style.display = 'block';
    });
    event.stopPropagation();
});

$('video').on('ended',function(){
    play.style.display = 'none';
    minip.style.display = 'block';
       
});