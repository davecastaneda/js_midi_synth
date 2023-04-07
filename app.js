if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
}

// 8:11 Test

function success(midiAccess) {
    // console.log(midiAccess);
    // midiAccess.onstatechange = updateDevices;
    midiAccess.addEventListener('statechange', updateDevices);
}

function updateDevices(event) {
    // console.log(event);
    console.log('Name: $(event.port.name), Brand: ${event.port.manufacturer}, State: ${event.port.state}, Type: ${event.port.type}');
}

function failure() {
    console.log('Could not connect to MIDI');
}