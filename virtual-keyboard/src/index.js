import TextArea from './Text-area'
import Keyboard from './Keyboard'
import './index.scss'
import {init} from './Button/index.js'

let keyEng = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let keyRus = [];

document.body.innerHTML = `<main></main>`;
const root = document.querySelector('main')
root.append(TextArea);
root.append(Keyboard);
init(keyEng);

document.onkeydown = function (event) {
  document.querySelector('.key[data="' + event.key.toLowerCase() + '"]').classList.add('active');
}

document.onkeyup = function (event) {
  document.querySelector('.key[data="' + event.key.toLowerCase() + '"]').classList.remove('active');
}