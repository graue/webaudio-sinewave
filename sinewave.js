;$(document).ready(function() {
    var ctx;
    if (typeof AudioContext !== 'undefined') {
        ctx = new AudioContext();
    } else if (typeof webkitAudioContext !== 'undefined') {
        ctx = new webkitAudioContext();
    } else {
        alert('So sad! You do not have Web Audio support.');
        return;
    }

    var node = ctx.createJavaScriptNode(16384, 1, 1);
    var rate = ctx.sampleRate; // samples/sec
    var sineFreq = 1000; // cycles/sec
    var sineLength = 5; // play for 5 seconds
    window.n = 0; // current sample number

    node.onaudioprocess = function(e) {
        //console.log('onaudioprocess called');
        var data = e.outputBuffer.getChannelData(0);
        //console.log('at start, n is ' + window.n);
        for (var i = 0; i < data.length; i++) {
            if (window.n < rate*sineLength)
                data[i] = Math.sin(window.n*2*Math.PI*sineFreq/rate);
            else
                data[i] = 0;

            window.n++;
        }
        //console.log('at end, n is ' + window.n);
    };

    node.connect(ctx.destination);
});
