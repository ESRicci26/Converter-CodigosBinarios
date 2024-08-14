function convertToText() {
    const binaryInput = document.getElementById('binaryInput').value;
    const binaryArray = binaryInput.split(' ');
    let textOutput = '';

    binaryArray.forEach(binary => {
        textOutput += String.fromCharCode(parseInt(binary, 2));
    });

    document.getElementById('textInput').value = textOutput;
}

function convertToBinary() {
    const textInput = document.getElementById('textInput').value;
    let binaryOutput = '';

    for (let i = 0; i < textInput.length; i++) {
        binaryOutput += textInput[i].charCodeAt(0).toString(2).padStart(8, '0') + ' ';
    }

    document.getElementById('binaryInput').value = binaryOutput.trim();
}
