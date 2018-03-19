$( document ).ready( readyNow ); //end doc ready

function readyNow(){
    $( '#clearButton' ).on( 'click', function(){
        console.log( 'in clearButton on click' );
    }); // end clearButton on click

    $( '#doMathButton' ).on( 'click', function(){
        console.log( 'in doMathButton on click' );
        // capture user input & store in an object
        let objectToSend = {
            x: $( '#xIn' ).val(),
            y: $( '#yIn' ).val(),
            type: $( '#typeIn' ).val()
        }; // end objectToSend
        console.log( 'objectToSend:', objectToSend ); 
        // send object to server with AJAX
        // display answer on DOM
    }); // end doMathButton on click

} // end ready now