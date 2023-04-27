import TextArea from './Text-area'
import Keyboard from './Keyboard'
import './index.scss'

document.body.innerHTML = `<main></main>`;
const root = document.querySelector('main')
root.append(TextArea);
root.append(Keyboard);

