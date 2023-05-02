import TextArea from './Text-area'
import Keyboard from './Keyboard'
import './index.scss'
import { init } from './Button/index'

let keyEng = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let keyRus = ['>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/'];

document.body.innerHTML = '<main></main>';
const root = document.querySelector('main')
root.append(TextArea);
root.append(Keyboard);
init(keyRus);
init(keyEng);

document.addEventListener('keydown', (event) => {
    document.querySelector(`.key[data="${event.key.toLowerCase()}"]`).classList.add('active');
});

document.addEventListener('keyup', (event) => {
    document.querySelector(`.key[data="${event.key.toLowerCase()}"]`).classList.remove('active');
});

document.addEventListener('keydown', (event) => {
    if (document.querySelector('.key').getAttribute('data') === '§' && event.shiftKey && event.altKey) {
        return init(keyRus);
    }
    if (document.querySelector('.key').getAttribute('data') === '>' && event.shiftKey && event.altKey) {
        return init(keyEng);
    }
});

let container = document.querySelector('.keyboard__container');
container.addEventListener('mousedown', (event) => {
    let target = event.target;
    if (target.tagName !== 'DIV') return;
    target.classList.add('active');
    let code = target.getAttribute('data');
    if (code == null || code.length > 1) {
        return;
    } document.querySelector('.text-area__input').value += code;
})

container.addEventListener('mouseup', (event) => {
    let target = event.target;
    if (target.tagName !== 'DIV') {
        return;
    }
    target.classList.remove('active');
});
