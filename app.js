if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
}

// 4:30 Test

function success(midiAccess) {
    console.log(midiAccess);
}

function failure() {
    console.log('Could not connect to MIDI');
}