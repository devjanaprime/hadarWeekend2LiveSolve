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
        $.ajax({
            type: 'POST',
            url: '/doMath',
            data: objectToSend
        }).done( function( response ){
            console.log( 'back from POST with:', response );
            getAnswer();
        }); // end ajax
        // display answer on DOM
    }); // end doMathButton on click

} // end ready now

function getAnswer(){
    $.ajax({
        type: 'GET',
        url: '/answer'
    }).done( function( response ){
        console.log( 'back from GET with:', response );
        let outputDiv = $( '#answerOut' );
        outputDiv.empty();
        outputDiv.append( response.answer );
    }); // end get answer
} // end getAnswer