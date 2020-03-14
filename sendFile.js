var cnt = 0, wnd = document.getElementById("photopea").contentWindow;
const urlParams = new URLSearchParams(window.location.search);

const emote = urlParams.get('e');

if (emote === 'lurk') {
  window.addEventListener("message", lurkEmote);
}
else if (emote === 'sign') {
  window.addEventListener("message", signEmote);
}
else if (emote === 'signA'){
  window.addEventListener("message", signAEmote);
}




function lurkEmote(e) {
  cnt++;
  console.log(cnt);


  if (cnt == 1) { }
  if (cnt == 2) {
    var loadFont1 = 'app.open("https://srv-file4.gofile.io/download/LTY0di/comici.ttf")'
    var loadImage = 'app.open("https://srv-file7.gofile.io/download/CQpdXx/lurk.psd", false)';
    wnd.postMessage(loadFont1, '*');
    wnd.postMessage(loadImage, "*");
  }
  if (cnt == 5) {
    console.log('printed');
    var emoteName = urlParams.get('name');
    console.log(emoteName);
    var changeName = `var nameLayer = app.activeDocument.layers.getByName('user');nameLayer.textItem.contents = '${emoteName}'`;
    wnd.postMessage(changeName, "*");

  }
  if (cnt == 6) {
    var save = `app.activeDocument.saveToOE("png")`;
    wnd.postMessage(save, "*");
    window.addEventListener('message', event => {
      let aBuffer = event.data;
      if (event.data !== 'done') {
        // ArrayBuffer -> Blob
        let imgBlob = new Blob([aBuffer], {
          type: 'image/png'
        });
        // Blob -> Image File
        let imgFile = new File([imgBlob], 'emote.png', {
          type: 'image/png'
        })
        var img = new Image();
        img.src = URL.createObjectURL(imgFile);
        img.id = 'image';
        //document.body.appendChild(img);
        document.getElementById('loading').remove();
        document.getElementById('imgContainer').appendChild(img);
        document.getElementById('image').width = '250';


      }

    })
  }
}


function signEmote(e) {
  cnt++;
  console.log(cnt);
  const urlParams = new URLSearchParams(window.location.search);

  if (cnt == 1) { }
  if (cnt == 2) {
    var loadFont1 = 'app.open("https://srv-file4.gofile.io/download/LTY0di/comic.ttf")'
    var loadImage = 'app.open("https://srv-file11.gofile.io/download/fvTHVW/PeepoSign.psd", false)';
    wnd.postMessage(loadFont1, '*');
    wnd.postMessage(loadImage, "*");
  }
  if (cnt == 5) {
    console.log('printed');
    var emoteName = urlParams.get('name');
    console.log(emoteName);
    var changeName = `var reText = '${emoteName}';var tLayer = app.activeDocument.layers.getByName('TEXT_HERE');var tLength = reText.length;if (tLength <= 4){tLayer.textItem.size = 65;tLayer.textItem.contents = reText;}else if (tLength <= 7){tLayer.textItem.size = 40;tLayer.textItem.contents = reText;}else
      {tLayer.textItem.size = 25;tLayer.textItem.contents = reText;}`;
    wnd.postMessage(changeName, "*");

  }
  if (cnt == 6) {
    var save = `app.activeDocument.saveToOE("png")`;
    wnd.postMessage(save, "*");
    window.addEventListener('message', event => {
      let aBuffer = event.data;
      if (event.data !== 'done') {
        // ArrayBuffer -> Blob
        let imgBlob = new Blob([aBuffer], {
          type: 'image/png'
        });
        // Blob -> Image File
        let imgFile = new File([imgBlob], 'emote.png', {
          type: 'image/png'
        })
        var img = new Image();
        img.src = URL.createObjectURL(imgFile);
        img.id = 'image';
        //document.body.appendChild(img);
        document.getElementById('loading').remove();
        document.getElementById('imgContainer').appendChild(img);
        document.getElementById('image').width = '250';
      }

    })
  }
}

function signAEmote(e) {
  cnt++;
  console.log(cnt);
  const urlParams = new URLSearchParams(window.location.search);

  if (cnt == 1) { }
  if (cnt == 2) {
    var loadFont1 = 'app.open("https://srv-file4.gofile.io/download/LTY0di/comic.ttf")'
    var loadImage = 'app.open("https://srv-file11.gofile.io/download/YbY651/peepoSignAnimated.psd", false)';
    wnd.postMessage(loadFont1, '*');
    wnd.postMessage(loadImage, "*");
  }
  if (cnt == 5) {
    console.log('printed');
    var emoteName = urlParams.get('name');
    console.log(emoteName);
    var changeName = `var reText = '${emoteName}'; var tLength = reText.length; for (var x = 1; x <= 7; x++) { var group = app.activeDocument.layerSets.getByName('_a_holdSign' + x); var tLayer = group.layers.getByName('TEXT_HERE'); if (tLength <= 4) {
      tLayer.textItem.size = 65; tLayer.textItem.contents = reText; } else if (tLength <= 7) { tLayer.textItem.size = 40; tLayer.textItem.contents = reText; } else {
      tLayer.textItem.size = 25; tLayer.textItem.contents = reText; } } `;
    wnd.postMessage(changeName, "*");

  }
  if (cnt == 6) {
    var save = `app.activeDocument.saveToOE("gif")`;
    wnd.postMessage(save, "*");
    window.addEventListener('message', event => {
      let aBuffer = event.data;
      if (event.data !== 'done') {
        // ArrayBuffer -> Blob
        let imgBlob = new Blob([aBuffer], {
          type: 'image/png'
        });
        imgBlob.name = 'emote.gif';
        // Blob -> Image File
        let imgFile = new File([imgBlob], 'emote.gif', {
          type: 'image/gif'
        })
        var img = new Image();
        img.src = URL.createObjectURL(imgFile);
        img.id = 'image';
        //document.body.appendChild(img);
        document.getElementById('loading').remove();
        document.getElementById('imgContainer').appendChild(img);
        document.getElementById('image').width = '250';
      }

    })
  }
}