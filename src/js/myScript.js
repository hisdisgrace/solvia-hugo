(function( global ) {
    var Module =
        (function() {
                      
            var data = "secret";
            return {
                bool: true,
                header: document.getElementById('headerImage'),

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
    Module.setHeight(window.innerHeight, Module.header);
    //Module.helloWorld();
    //Module.scrollUp(Module.header);

    window.addEventListener('scroll', function() {
        if(document.body.scrollTop >= 100)
        {
            Module.header.classList.add("is-active");
            console.log('if');
        } else{
            Module.header.classList.remove("is-active");
            console.log('else');
        }
        //Module.scrollTop = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
        return ( console.log(document.body.scrollTop+' '+Module.scrollTop) );
    });

})( this );
