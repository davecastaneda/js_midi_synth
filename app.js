if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
}

// 8:11 Test

function success(midiAccess) {
    console.log(midiAccess);
    // midiAccess.onstatechange = updateDevices;
    midiAccess.addEventListener('statechange', updateDevices);
}

function update(event) {
    console.log(event);
}

function failure() {
    console.log('Could not connect to MIDI');
}