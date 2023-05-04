let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let toggle_circle = document.querySelector('.toggle_circle');
let night_mode = document.querySelector('.night_mode');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let change_color = document.querySelector('.change_light_color');
let colors_input = document.querySelector('.colors_input');
let keyboard_lights = document.querySelector('.keyboard_lights');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            caps_lock_key.classList.toggle('active');
        }
    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
            shift_right.classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
            shift_left.classList.remove('remove')
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})


night_mode.addEventListener('click',function() {
    toggle_circle.classList.toggle('active');
    body.classList.toggle('active');
    night_mode.classList.toggle('active');
    keyboard_wrapp.classList.toggle('active');
    text_input.classList.toggle('active');
    change_color.classList.toggle('active');
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys_night')
    }
})

colors_input.addEventListener('input',function() {
    for(let i = 0; i < keys.length; i++) {
        keys[i].style.color = colors_input.value
    }
    keyboard_lights.style.background = colors_input.value;
})

const paragraphs = [
    'HTML dient als Auszeichnungssprache dazu, einen Text semantisch zu strukturieren, nicht aber zu formatieren.[6] Die visuelle Darstellung ist nicht Teil der HTML-Spezifikationen und wird durch den Webbrowser und Gestaltungsvorlagen wie CSS bestimmt. Ausnahme sind die als veraltet (englisch deprecated) markierten präsentationsbezogenen Elemente.',
    'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
    'JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.[11] As of 2022, 98% of websites use JavaScript on the client side for webpage behavior,[12] often incorporating third-party libraries.[13] All major web browsers have a dedicated JavaScript engine to execute the code on users devices.',
]

let inputField = document.querySelector('.input-field');
let text = document.querySelector('.text p');
let charindex = 0;

function initParagraph() {
    let randText = Math.floor(Math.random() * paragraphs.length);
    paragraphs[randText].split("").forEach(item => {
        let span = `<span>${item}</span>`;
        text.innerHTML += span
    })

    text.addEventListener('click', () => inputField.focus())
    document.addEventListener('keydown', () => inputField.focus())
}

function initTyping() {
    const characters = document.querySelectorAll('span');
    let typechar = inputField.value.split("")[charindex];

    if(typechar == null) {
        charindex--;
        characters[charindex].classList.remove('correct','inCorrect')
    } else {
        if(characters[charindex].innerText === typechar) {
            characters[charindex].classList.add('correct')
        } else {
            characters[charindex].classList.add('inCorrect')
        }
        charindex++
    }
    characters.forEach(item => item.classList.remove('cursorTyping'))
    characters[charindex].classList.add('cursorTyping')
}

initParagraph()
inputField.addEventListener('input',initTyping)