import TextArea from './Text-area'
import Keyboard from './Keyboard'
import './index.scss'
import {init} from './Button/index.js'

let keyEng = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let keyRus = ['>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/'];

document.body.innerHTML = `<main></main>`;
const root = document.querySelector('main')
root.append(TextArea);
root.append(Keyboard);
init(keyRus);
init(keyEng);

document.addEventListener('keydown', function (event) {
  document.querySelector('.key[data="' + event.key.toLowerCase() + '"]').classList.add('active');
});

document.addEventListener('keyup', function (event) {
  document.querySelector('.key[data="' + event.key.toLowerCase() + '"]').classList.remove('active');
});

// document.onkeydown = function (event) {
//   document.querySelector('.key[data="fn"]').classList.add('active');
// }

// document.querySelector('.key[data="fn"]').addEventListener('click', function () {

//   if (toggle && document.querySelector('.key').getAttribute('data') === '§') {
//     console.log('332');
//     toggle = false;
//     return init(keyRus);
//   }
//   });

//   document.querySelector('.key[data="fn"]').addEventListener('click', function () {

//     if ((!toggle) && document.querySelector('.key').getAttribute('data') === '>'){
//       console.log('4442');
//       toggle = true;
//       return init(keyEng);
//     }
//     });

document.addEventListener('keydown', function (event) {
  if (document.querySelector('.key').getAttribute('data') === '§' && event.shiftKey && event.altKey) {
    return init(keyRus);
  }
  if (document.querySelector('.key').getAttribute('data') === '>' && event.shiftKey && event.altKey) {
    return init(keyEng);
  }
});




// fn.onclick = function () {
//   init(keyRus);
// }

// let allkey = document.querySelectorAll('.key');
// allkey.forEach(e => e.classList.add('hide'));
// init(keyRus);



let container = querySelector('.keyboard__container');
container.addEventListener('click', function(event) {
  let target = event.target;
  if (target.tagName != 'div') return;
  let code = target.getAttribute('data');
    if ( code == null || code.length > 1) {
      return;
    } else
    document.querySelector('.text-area__input').value += code;
})

// document.querySelectorAll('.key').forea addEventListener ('keydown', function () {
//     let code = this.getAttribute('data');
//     if ( code == null || code.length > 1) {
//       return;
//     } else
//     document.querySelector('.text-area__input').value += code;
// });


// table.onclick = function(event) {
//   let target = event.target; // где был клик?

//   if (target.tagName != 'TD') return; // не на TD? тогда не интересует

//   highlight(target); // подсветить TD
// };


// document.querySelectorAll('.key').forEach(function (element) {
//   element.onclick = function (event) {
//     let code = this.getAttribute('data');
//     if ( code == null || code.length > 1) {
//       return;
//     } else
//     document.querySelector('.text-area__input').value += code;
//   }
// });

