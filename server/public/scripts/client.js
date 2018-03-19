$( document ).ready( readyNow ); //end doc ready

function readyNow(){
    $( '#clearButton' ).on( 'click', function(){
        console.log( 'in clearButton on click' );
        // target inputs by ID and clear text
        $( '#xIn' ).val( '' );
        $( '#yIn' ).val( '' );
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

    // page init
    getHistory();
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
        getHistory();
    }); // end get answer
} // end getAnswer

function getHistory(){
    // ajax call to /history
    $.ajax({
        type: 'GET',
        url: '/history'
    }).done( function( response ){
        console.log( response );
        // target the output element
        let outputElement = $( '#historyOut' );
        outputElement.empty();
        for( let i = 0; i<response.length; i++ ) {
            console.log(  response[i] );
            let outputString = '<li>';
            outputString += response[i].x + ' ';
            outputString += response[i].type + ' ';
            outputString += response[i].y;
            outputString += '</li>';
            outputElement.append( outputString );
        } //end for
    }); //end ajax
    // display history on DOM
} //end getHistory