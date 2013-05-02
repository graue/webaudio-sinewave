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
    // DO STUFF with ctx
});
