(function( global ) {
    var Module = (function() {
                      
    var data = "secret";
                      return {
                          // This is some boolean property
                          bool: true,
                          // Some string value
                          string: "a string",
                          // An array property
                          array: [ 1, 2, 3, 4 ],
                          // An object property
                          object: {
                              lang: "en-Us"
                          },
                          getData: function() {
                              // get the current value of `data`
                              return data;
                          },
                          setHeight: function( value ) {
                              // set the value of `data` and return it
                              console.log('Got here');
                              var elem = document.getElementById('headerImage');
                              return (
                                   elem.setAttribute( 'style', 'height:'+value+'px' )
                                     );
                              
                          },
                          
                          helloWorld: function( value ) {
                              // set the value of `data` and return it
                              return ( console.log('Hello World.'+window.innerHeight) );
                          }
                      };
  })();
    
    // Other things might happen here
    
    // expose our module to the global object
    global.Module = Module;
    Module.helloWorld();
    Module.setHeight(window.innerHeight);
    
})( this );