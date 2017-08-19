(function( global ) {
    var Module =
        (function() {
                      
            var data = "secret";
            return {
                scrollTop: 0,
                header: document.getElementById('headerImage'),
                title: document.getElementById('homeTitle'),
                nav: document.getElementById('nav'),
                                
                setHeight: function( value, elem ) {
                    return (elem.setAttribute( 'style', 'height:'+value+'px' ));
                }
            };
  })();

    global.Module = Module;
    // Set the initial state
    if(Module.header){ Module.setHeight(window.innerHeight, Module.header); }
    if(Module.nav){ Module.nav.classList.remove("active"); }
    
    window.addEventListener('scroll', function() {
        Module.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        
        if(Module.scrollTop >= 5) {
            Module.nav.classList.add("active");
            Module.title.classList.remove('active');
        } else {
            Module.nav.classList.remove("active");
            Module.title.classList.add('active');
        }
        
        return Module.scrollTop;
    });
    
})( this );
