if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
}

function success(midiAccess) {
    // console.log(midiAccess);
    // midiAccess.onstatechange = updateDevices;
    midiAccess.addEventListener('statechange', updateDevices);

    const inputs = midiAccess.inputs;
    console.log(inputs);

    inputs.forEach(input => {
        console.log(input);
        // oninput.onmidimessage = handleInput;
        input.addEventListener('midimessage', handleInput);
    });
}

function handleInput(event) {
    // console.log(event);
    const command = input.data[0];
}

function updateDevices(event) {
    // console.log(event);
    console.log('Name: $(event.port.name), Brand: ${event.port.manufacturer}, State: ${event.port.state}, Type: ${event.port.type}');
}

function failure() {
    console.log('Could not connect to MIDI');
}