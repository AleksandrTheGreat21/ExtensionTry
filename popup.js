document.addEventListener('DOMContentLoaded', function () {
  var colorButton = document.getElementById('colorButton');
  colorButton.addEventListener('click', changeColor);
});


function changeColor() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: changeBackgroundColor,
    });
  });
}


function changeBackgroundColor() {
  if (document.body.style.backgroundColor === 'red') {
    document.body.style.backgroundColor = 'unset';
  }
  else {
    document.body.style.backgroundColor = 'red';
  }
}
