export function init(keys) {
  let out = '';
  for (let i = 0; i < keys.length; i++) {
    if (i === 13) {
      out += '<div class="key delete" data="backspace">backspace</div><div class="key tab" data="tab">Tab</div>';
    }
    if (i === 25) {
      out += '<div class="key backslash" data="backslash">\\</div><div class="key capslock" data="capslock">CapsLock</div>';
    }
    if (i === 36) {
      out += '<div class="key return" data="enter">enter</div><div class="key leftshift" data="shift">Shift</div>'
    }
    out += '<div class="key" data="' + keys[i] + '" >' + keys[i] + '</div>';
  }
  out += '<div class="key" data="arrowup">↑</div><div class="key rightshift" data="Shift">Shift</div><div class="key">Fn</div><div class="key" data="control">Ctrl</div><div class="key" data="alt">Opt</div><div class="key command" data="meta">Command</div><div class="key space" data=" ">Space</div><div class="key command">Command</div><div class="key">Opt</div><div class="key" data="arrowleft">←</div><div class="key" data="arrowdown">↓</div><div class="key" data="arrowright">→</div>';
  document.querySelector('.keyboard__container').innerHTML = out;
}
