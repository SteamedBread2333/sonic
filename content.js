function applyfastEnded() {
  var v = document.querySelector('video')
  if (v) {
    v.dispatchEvent(new Event('ended'))
    v.addEventListener('ended', function () {
      if (v) {
        v.muted = true;
        v.playbackRate = 1.2;
        v.play();
      }
    });
  }
}

function applyCallSonic() {
  if (!document.querySelector('.biu-btn')) {
    var fixedElement = document.createElement('button');
    fixedElement.className = 'biu-btn'
    fixedElement.innerHTML = 'Biu!';
    var styleStr = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      font-family: monospace;
      font-size: 1.5rem;
      color: #FAFAFA;
      text-transform: uppercase;
      padding: 10px 20px;
      border-radius: 10px;
      border: 2px solid #FAFAFA;
      background: pink;
      box-shadow: 3px 3px #fafafa;
      cursor: pointer;
      margin: 12px 0;
    `
    fixedElement.style.ac
    fixedElement.style.cssText = styleStr;
    fixedElement.onclick = () => {
      applyfastEnded && applyfastEnded()
    }
    document.body.appendChild(fixedElement);
  }
}