var cnt = 0, wnd = document.getElementById("photopea").contentWindow;
const urlParams = new URLSearchParams(window.location.search);
const signLink = document.getElementById('sign');
const signALink = document.getElementById('signA');
const lurkLink = document.getElementById('lurk');
const clapSign = document.getElementById('clap');
const comicLink = document.getElementById('comic');
const comiciLink = document.getElementById('comici');
const comicbLink = document.getElementById('comicb');



const emote = urlParams.get('e');

if (emote === 'lurk') {
  window.addEventListener("message", lurkEmote);
}
else if (emote === 'sign') {
  window.addEventListener("message", signEmote);
}
else if (emote === 'signA') {
  window.addEventListener("message", signAEmote);
}
else if (emote === 'clap') {
  window.addEventListener("message", clapEmote);
}



function lurkEmote(e) {
  cnt++;


  if (cnt == 1) { }
  if (cnt == 2) {
    console.log(cnt);
    var loadFont1 = `app.open("${comiciLink}")`;
    var loadImage = `app.open("${lurkLink}", false)`;
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
        
        document.getElementById('loading').remove();

        var aLink = document.getElementById('imgLink');
        aLink.insertBefore(img,document.getElementById('download'));
        document.getElementById('image').width = '250';
        aLink.setAttribute('href',URL.createObjectURL(imgFile));

        var eName = urlParams.get('name').substring(0,1).toUpperCase() + urlParams.get('name').substring(1);
        aLink.setAttribute('download', `${urlParams.get('e')}${eName}`);


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
    var loadFont1 = `app.open("${comicLink}")`
    var loadImage = `app.open("${signLink}", false)`;
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
        
        document.getElementById('loading').remove();

        var aLink = document.getElementById('imgLink');
        aLink.insertBefore(img,document.getElementById('download'));
        document.getElementById('image').width = '250';
        aLink.setAttribute('href',URL.createObjectURL(imgFile));

        var eName = urlParams.get('name').substring(0,1).toUpperCase() + urlParams.get('name').substring(1);
        aLink.setAttribute('download', `${urlParams.get('e')}${eName}`);
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
    var loadFont1 = `app.open("${comicLink}")`
    var loadImage = `app.open("${signALink}", false)`;
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
        
        document.getElementById('loading').remove();

        var aLink = document.getElementById('imgLink');
        aLink.insertBefore(img,document.getElementById('download'));
        document.getElementById('image').width = '250';
        aLink.setAttribute('href',URL.createObjectURL(imgFile));

        var eName = urlParams.get('name').substring(0,1).toUpperCase() + urlParams.get('name').substring(1);
        aLink.setAttribute('download', `${urlParams.get('e')}${eName}`);
      }

    })
  }
}

function clapEmote(e) {
  cnt++;
  console.log(cnt);
  const urlParams = new URLSearchParams(window.location.search);

  if (cnt == 1) { }
  if (cnt == 2) {
    var loadFont1 = `app.open("${comicbLink}")`
    var loadImage = `app.open("${clapSign}", false)`;
    wnd.postMessage(loadFont1, '*');
    wnd.postMessage(loadImage, "*");
  }
  if (cnt == 5) {
    console.log('printed');
    var emoteName = urlParams.get('name');
    console.log(emoteName);
    var changeName = `var reText = '${emoteName}';var tLength = reText.length;var group1 = app.activeDocument.layerSets.getByName('_a_p1,150');var group2 = app.activeDocument.layerSets.getByName('_a_p2,150');var layer1 = group1.layers.getByName('TEXT_HERE');var layer2 = group2.layers.getByName('TEXT_HERE');if (tLength <= 5) {layer1.textItem.contents = reText;layer1.textItem.size = 31;layer2.textItem.contents = reText;layer2.textItem.size = 31;}else if (tLength <= 7) {layer1.textItem.contents = reText;layer1.textItem.size = 22;layer2.textItem.contents = reText;layer2.textItem.size = 22;}else{layer1.textItem.contents = reText;layer1.textItem.size = 17;layer2.textItem.contents = reText;layer2.textItem.size = 17;}`;
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
        
        document.getElementById('loading').remove();

        var aLink = document.getElementById('imgLink');
        aLink.insertBefore(img,document.getElementById('download'));
        document.getElementById('image').width = '250';
        aLink.setAttribute('href',URL.createObjectURL(imgFile));

        var eName = urlParams.get('name').substring(0,1).toUpperCase() + urlParams.get('name').substring(1);
        aLink.setAttribute('download', `${urlParams.get('e')}${eName}`);
      }

    })
  }
}
