let calculate = function( mathyObject ){
    console.log( 'in calculate module calculate function:', mathyObject );
    /// example data from a test: { x: '456', y: '456', type: '+' }
    // our answer variable
    let answer = 0;
    if( mathyObject.type === '-' ){
        answer = Number( mathyObject.x ) - Number( mathyObject.y );
    } // end -
    else if( mathyObject.type === '*' ){
        answer = Number( mathyObject.x ) * Number( mathyObject.y );
    } // end *
    else if( mathyObject.type === '/' ){
        answer = Number( mathyObject.x ) / Number( mathyObject.y );
    } //end /
    else {
        answer = Number( mathyObject.x ) + Number( mathyObject.y );
    } // end default +
    return answer;    
} // end calculate

module.exports = calculate;