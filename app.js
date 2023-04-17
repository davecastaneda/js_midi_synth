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
    const note = input.data[1];
    const velocity = input.data[2];
    // console.log(command, note, velocity);
    switch (command) {
        case 144: // noteOn
            if (velocity > 0) {
                // note is on
            }
    }
}

function updateDevices(event) {
    // console.log(event);
    console.log('Name: $(event.port.name), Brand: ${event.port.manufacturer}, State: ${event.port.state}, Type: ${event.port.type}');
}

function failure() {
    console.log('Could not connect to MIDI');
}