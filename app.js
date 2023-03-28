if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
}

// 4:30 Test

function success(midiAccess) {
    console.log(midiAccess);
    midiAccess.onstatechange = updateDevices;
}

function update(event) {
    console.log(event);
}

function failure() {
    console.log('Could not connect to MIDI');
}