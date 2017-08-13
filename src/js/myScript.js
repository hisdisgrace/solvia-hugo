(function( global ) {
    var Module =
        (function() {
                      
            var data = "secret";
            return {
                bool: true,
                header: document.getElementById('headerImage'),
                title: document.getElementById('homeTitle'),
                nav: document.getElementById('nav'),

                scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                                
                setHeight: function( value, elem ) {
                    return (elem.setAttribute( 'style', 'height:'+value+'px' ));
                    
                },

                helloWorld: function( val ) {
                    return ( console.log(this.scrollLeft+' '+this.scrollTop) );
                }
            };
  })();

    global.Module = Module;
    if(Module.header)
        Module.setHeight(window.innerHeight, Module.header);
    //Module.helloWorld();
    //Module.scrollUp(Module.header);
    if(Module.nav)
        Module.nav.classList.remove("active");
    
    window.addEventListener('scroll', function() {
        if(document.body.scrollTop >= 5)
        {
            Module.nav.classList.add("active");
            Module.title.classList.remove('active');
        } else{
            Module.nav.classList.remove("active");
            Module.title.classList.add('active');
        }
        //Module.scrollTop = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
        return ( console.log(document.body.scrollTop+' '+Module.scrollTop) );
    });

})( this );
