const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');

const playNote = (note) => {
    const audio = new Audio(`./notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));

    if (key.classList.contains('black')) {
        key.classList.add('black--pressed');
        return;
    }

    if (parseInt(key.getAttribute('data-note')) <= 17) {
        key.classList.add('left-key');
    } else {
        key.classList.add('right-key');
    }
}

const handleMouseUp = (key) => {
    if (key.classList.contains('black')) {
        key.classList.remove('black--pressed');
        return;
    }

    key.classList.remove('left-key', 'right-key');
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key));
    key.addEventListener('mouseup', () => handleMouseUp(key));
});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        return;
    }

    switcher.classList.remove('switcher--active');
    keysSection.classList.add('disabled-keys');
});

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    handleMouseDown(document.querySelector(`[data-note="${event.key}"]`));
});

document.addEventListener('keyup', (event) => {
    handleMouseUp(document.querySelector(`[data-note="${event.key}"]`));
});



                                const keyDownMapper = {
                                "Tab": () => handleMouseDown(keys[0]),
                                    "1": () => handleMouseDown(keys[1]),
                                    "q": () => handleMouseDown(keys[2]),
                                    "2": () => handleMouseDown(keys[3]),
                                    "w": () => handleMouseDown(keys[4]),
                                    "e": () => handleMouseDown(keys[5]),
                                    "4": () => handleMouseDown(keys[6]),
                                    "r": () => handleMouseDown(keys[7]),
                                    "5": () => handleMouseDown(keys[8]),
                                    "t": () => handleMouseDown(keys[9]),
                                    "6": () => handleMouseDown(keys[10]),
                                    "y": () => handleMouseDown(keys[11]),
                                    "u": () => handleMouseDown(keys[12]),
                                    "8": () => handleMouseDown(keys[13]),
                                    "i": () => handleMouseDown(keys[14]),
                                    "9": () => handleMouseDown(keys[15]),
                                    "o": () => handleMouseDown(keys[16]),
                                    "p": () => handleMouseDown(keys[17]),
                                    "-": () => handleMouseDown(keys[18]),
                                "\\": () => handleMouseDown(keys[19]),
                                    "=": () => handleMouseDown(keys[20]),
                                    "z": () => handleMouseDown(keys[21]),
                                "Backspace": () => handleMouseDown(keys[22]),
                                    "x": () => handleMouseDown(keys[23]),
                                    "c": () => handleMouseDown(keys[24]),
                                    "3": () => handleMouseDown(keys[25]),
                                    "v": () => handleMouseDown(keys[26]),
                                    "7": () => handleMouseDown(keys[27]),
                                    "b": () => handleMouseDown(keys[28]),
                                    "n": () => handleMouseDown(keys[29]),
                                    "j": () => handleMouseDown(keys[30]),
                                    "m": () => handleMouseDown(keys[31]),
                                    "k": () => handleMouseDown(keys[32]),
                                    ",": () => handleMouseDown(keys[33]),
                                    "l": () => handleMouseDown(keys[34]),
                                    ".": () => handleMouseDown(keys[35]),
                                    //cbsh = 25,27,30,32
    
}

                                    const keyUpMapper = {
                                    "Tab":() =>handleMouseUp(keys[0]),
                                    "1": () => handleMouseUp(keys[1] ),
                                    "q": () => handleMouseUp(keys[2] ),
                                    "2": () => handleMouseUp(keys[3] ),
                                    "w": () => handleMouseUp(keys[4] ),
                                    "e": () => handleMouseUp(keys[5] ),
                                    "4": () => handleMouseUp(keys[6] ),
                                    "r": () => handleMouseUp(keys[7] ),
                                    "5": () => handleMouseUp(keys[8] ),
                                    "t": () => handleMouseUp(keys[9] ),
                                    "6": () => handleMouseUp(keys[10]),
                                    "y": () => handleMouseUp(keys[11]),
                                    "u": () => handleMouseUp(keys[12]),
                                    "8": () => handleMouseUp(keys[13]),
                                    "i": () => handleMouseUp(keys[14]),
                                    "9": () => handleMouseUp(keys[15]),
                                    "o": () => handleMouseUp(keys[16]),
                                    "p": () => handleMouseUp(keys[17]),
                                    "-": () => handleMouseUp(keys[18]),
                                    "\\": () => handleMouseUp(keys[19]),
                                    "=": () => handleMouseUp(keys[20]),
                                    "z": () => handleMouseUp(keys[21]),
                                    "Backspace": () => handleMouseUp (keys[22]),
                                    "x": () => handleMouseUp(keys[23]),
                                    "c": () => handleMouseUp(keys[24]),
                                    "3": () => handleMouseUp(keys[25]),
                                    "v": () => handleMouseUp(keys[26]),
                                    "7": () => handleMouseUp(keys[27]),
                                    "b": () => handleMouseUp(keys[28]),
                                    "n": () => handleMouseUp(keys[29]),
                                    "j": () => handleMouseUp(keys[30]),
                                    "m": () => handleMouseUp(keys[31]),
                                    "k": () => handleMouseUp(keys[32]),
                                    ",": () => handleMouseUp(keys[33]),
                                    "l": () => handleMouseUp(keys[34]),
                                    ".": () => handleMouseUp(keys[35]),
                                    //cbsh = 25,27,30,32
}                                   


document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
});

document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()
});
