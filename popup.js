document.addEventListener('DOMContentLoaded', function () {
  var colorButton = document.getElementById('colorButton');
  colorButton.addEventListener('click', changeColor);
});

function changeColor() {
  if (chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (chrome.scripting) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: changeBackgroundColor,
        }, function () {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
          }
        });
      } else {
        console.error('chrome.scripting is undefined');
      }
    });
  } else {
    console.error('chrome.tabs is undefined');
  }
}

function changeBackgroundColor() {
  if (document.body.style.backgroundColor === 'red') {
    document.body.style.backgroundColor = 'unset';
  } else {
    document.body.style.backgroundColor = 'red';
  }
}
