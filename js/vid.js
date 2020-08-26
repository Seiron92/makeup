var video = document.getElementById('video');
var container = document.getElementById('container');
var img = document.getElementById('header');
var topbar = document.getElementById('top-bar');
var shopbar = document.getElementById('shop-bar');
var top = document.getElementById('top');
var menu = document.getElementById('menu');
var search = document.getElementById('search');
var items = document.getElementsByClassName('autocomplete-items');
var wrap = document.getElementsByClassName('wrapper2');
var wrap1 = document.getElementsByClassName('wrapper');
var wrapp = document.getElementById('wraps');
var banner = document.getElementsByClassName('banner1');
var images = document.getElementsByClassName('images');
var images2 = document.getElementsByClassName('images2');
var images3 = document.getElementsByClassName('images3');
var imageright = document.getElementsByClassName('imageright');

var w = window.innerWidth;
var h = window.innerHeight;


for(var i = 0; i < wrap.length; i++){
    wrap[i].style.display= 'none';
}




window.onload = function()
{
    for(var i = 0; i < wrap.length; i++){
        wrap[i].style.opacity= '1';
    }
    for(var i = 0; i < wrap.length; i++){
        wrap[i].style.display= 'block';
    }

if(h<w && w>900){


   var top = document.getElementById('top');

   video.style.display = 'block';
    img.style.display = 'none';
     topbar.style.backgroundColor = 'transparent';
     search.style.backgroundColor = 'transparent';
     top.style.backgroundColor = 'transparent';
     menu.style.backgroundColor = 'transparent';
     for(var i = 0; i < items.length; i++){
        items[i].style.backgroundColor = 'transparent';
     }

 

$('video').on('ended',function(){
    var top = document.getElementById('top')

      topbar.style.backgroundColor = 'black';
      search.style.backgroundColor = 'black';
      //top.style.backgroundColor = 'black';
      shopbar.style.backgroundColor = 'black';
      menu.style.backgroundColor = 'black';
      for(var i = 0; i < items.length; i++){
         items[i].style.backgroundColor = 'black';

       
}
for(var i = 0; i < wrap.length; i++){
    wrap[i].style.opacity= '1';
    wrap[i].style.transition= '2s ease-in-out';
}


});
    
}else {
    var top = document.getElementById('top');
    for(var i = 0; i < wrap1.length; i++){
        wrap1[i].style.opacity= '1';
        wrap1[i].style.transition= '1s ease-in-out';
    }
    video.style.display = 'none';
    img.style.top = '55px'; 


      topbar.style.backgroundColor = 'black';
      search.style.backgroundColor = 'black';
     // top.style.backgroundColor = 'black';
      shopbar.style.backgroundColor = 'black';
      menu.style.backgroundColor = 'black';
      for(var i = 0; i < items.length; i++){
         items[i].style.backgroundColor = 'black';
      }
         for(var i = 0; i < wrap.length; i++){
            wrap[i].style.display= 'none';
        }


     
  





function wraps(){    
    if(h<800 && h<w ){
       for(var i = 0; i < wrap.length; i++){
           wrap[i].style.top= '-230px';
       }
  
 
}
}
wraps()



}

var MOUSE_OVER = false;
$('body').bind('mousewheel', function(e){
 

$('#container').mouseenter(function(){ MOUSE_OVER=true; });
$('#container').mouseleave(function(){ MOUSE_OVER=false; });

$('#container').bind('mousewheel', function(e){
  var delta = e.wheelDelta;
  if(delta > 0){
    for(var i = 0; i < wrap.length; i++){
        wrap[i].style.opacity= '0';
        wrap[i].style.transition= '1s ease-in-out';
    }
    var top = document.getElementById('top')
    topbar.style.backgroundColor = 'black';
    search.style.backgroundColor = 'black';
    top.style.backgroundColor = 'black';
    shopbar.style.backgroundColor = 'black';
    menu.style.backgroundColor = 'black';

    topbar.style.transition= '1s ease-in-out';
    search.style.transition= '1s ease-in-out';
    top.style.transition= '1s ease-in-out';
    shopbar.style.transition= '1s ease-in-out';
    menu.style.transition= '1s ease-in-out';
    for(var i = 0; i < items.length; i++){
       items[i].style.backgroundColor = 'black';
       items[i].style.transition= '1s ease-in-out';
     
    }
  }
  else{
   for(var i = 0; i < wrap.length; i++){
        wrap[i].style.opacity= '0';
        wrap[i].style.transition= '1s ease-in-out';
    }
    var top = document.getElementById('top')
    topbar.style.backgroundColor = 'black';
    search.style.backgroundColor = 'black';
    top.style.backgroundColor = 'black';
    shopbar.style.backgroundColor = 'black';
    menu.style.backgroundColor = 'black';

    topbar.style.transition= '1s ease-in-out';
    search.style.transition= '1s ease-in-out';
    top.style.transition= '1s ease-in-out';
    shopbar.style.transition= '1s ease-in-out';
    menu.style.transition= '1s ease-in-out';
    for(var i = 0; i < items.length; i++){
       items[i].style.backgroundColor = 'black';
       items[i].style.transition= '1s ease-in-out';
     
}
  }
})})}

function cfix(){
    if(w<900 && h<900){
    for(var i = 0; i < wrap1.length; i++){
        wrap1[i].style.opacity= '1';
        wrap1[i].style.transition= '1s ease-in-out';
    }
    video.style.display = 'none';

    img.style.marginTop = '-15px'; 

   wraps.style.backgroundColor = 'transparent';

      if(video.style.display == 'none'){
        var top = document.getElementById('top')
        topbar.style.backgroundColor = 'black';
        search.style.backgroundColor = 'black';
        top.style.backgroundColor = 'black';
        shopbar.style.backgroundColor = 'black';
        menu.style.backgroundColor = 'black';
      }
      for(var i = 0; i <banner.length; i++){
banner[i].style.opacity = '1';
      }
      for(var i = 0; i <images.length; i++){
        images[i].style.opacity = '1';
              }
              for(var i = 0; i <images2.length; i++){
                images2[i].style.opacity = '1';
                      }
                      for(var i = 0; i <images3.length; i++){
                        images3[i].style.opacity = '1';
                              }
                              for(var i = 0; i <imageright.length; i++){
                                imageright[i].style.opacity = '1';
                                      }
}
}cfix();


var addEvent = function(window, type, callback) {
    if (window == null || typeof(window) == 'undefined') return;
    if (window.addEventListener) {
        window.addEventListener(type, callback, false);
    } else if (window.attachEvent) {
        window.attachEvent("on" + type, callback);
    } else {
        window["on"+type] = callback;
    }
};
addEvent(window, "resize", function(event) {
    
var w = window.innerWidth;
var h = window.innerHeight;
    if(w<900 && h<900){
        menu.style.marginTop = '85px'; 
        for(var i = 0; i < wrap1.length; i++){
            wrap1[i].style.opacity= '1';
            wrap1[i].style.transition= '1s ease-in-out';
        }
        video.style.display = 'none';
        img.style.display = 'block'; 
        img.style.marginTop = '-15px'; 
    
       wraps.style.backgroundColor = 'transparent';
    
          if(video.style.display == 'none'){
            var top = document.getElementById('top')
            topbar.style.backgroundColor = 'black';
            search.style.backgroundColor = 'black';
            top.style.backgroundColor = 'black';
            shopbar.style.backgroundColor = 'black';
            menu.style.backgroundColor = 'black';
          }
          for(var i = 0; i <banner.length; i++){
    banner[i].style.opacity = '1';
          }
          for(var i = 0; i <images.length; i++){
            images[i].style.opacity = '1';
                  }
                  for(var i = 0; i <images2.length; i++){
                    images2[i].style.opacity = '1';
                          }
                          for(var i = 0; i <images3.length; i++){
                            images3[i].style.opacity = '1';
                                  }
                                  for(var i = 0; i <imageright.length; i++){
                                    imageright[i].style.opacity = '1';
                                          }
    }
  });