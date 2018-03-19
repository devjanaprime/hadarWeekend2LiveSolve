// requires
let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );
let calculate = require( './modules/calculate.js' );
// global variables
let mostRecentAnswer = 0;
let calculateHistory = [];
// uses
app.use( bodyParser.urlencoded( { extended: true } ) );
// look server/public 1st 
app.use( express.static( 'server/public' ) );

// vars
let port = 4567;

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up server

app.get( '/answer', function( req, res ){
    res.send( { answer: mostRecentAnswer } );
}); // end /answer GET

app.post( '/doMath', function( req, res ){
    console.log( 'in /doMath POST:', req.body );
    // send req.body to calculate module & hold answer in global variable
    mostRecentAnswer = calculate( req.body );
    // save this request in the calculate history
    calculateHistory.push( req.body );
    console.log( 'answer:', mostRecentAnswer );
    res.sendStatus( 200 );
}); // end /doMath POST

app.get( '/history', function( req, res ){
    console.log( 'in /history GET' );
    res.send( calculateHistory );
}); //end /history GET