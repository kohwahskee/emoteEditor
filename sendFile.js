var cnt = 0, wnd = document.getElementById("photopea").contentWindow;
const urlParams = new URLSearchParams(window.location.search);
/* const signLink = document.getElementById('sign');
const signALink = document.getElementById('signA');
const lurkLink = document.getElementById('lurk');
const clapSign = document.getElementById('clap');
const comicLink = document.getElementById('comic');
const comiciLink = document.getElementById('comici');
const comicbLink = document.getElementById('comicb'); */

const pepegaSignLink = 'https://kohwahskee.github.io/emoteEditor/assets/PepegaSign.psd'
const PETlink = 'https://kohwahskee.github.io/emoteEditor/assets/PETTHEEMOTE.psd';
const hazmatLink = 'https://kohwahskee.github.io/emoteEditor/assets/pepeHazmat.psd'
const signLink = 'https://kohwahskee.github.io/emoteEditor/assets/PeepoSign.psd'
const signALink = 'https://kohwahskee.github.io/emoteEditor/assets/peepoSignAnimated.psd';
const lurkLink = 'https://kohwahskee.github.io/emoteEditor/assets/lurk.psd';
const clapSign = 'https://kohwahskee.github.io/emoteEditor/assets/clapSign.psd';
const comicLink = 'https://kohwahskee.github.io/emoteEditor/assets/comic.ttf';
const comiciLink = 'https://kohwahskee.github.io/emoteEditor/assets/comici.ttf';
const comicbLink = 'https://kohwahskee.github.io/emoteEditor/assets/comicbd.ttf';



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
else if (emote == 'hazmat') {
  window.addEventListener("message", hazmatEmote);
}
else if (emote == 'PETTHE') {
  window.addEventListener("message", petEmote);
}
else if (emote == 'PepegaSign'){
  window.addEventListener("message", pepegaSignEmote);
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
        var img = document.getElementById('image');
        img.src = URL.createObjectURL(imgFile);
        document.getElementById('download').innerText = 'DOWNLOAD';

        img.setAttribute('class', 'afterLoaded')
        document.getElementById('download').setAttribute('style', 'color: #53f4ff');

        var aLink = document.getElementById('imgLink');
        aLink.insertBefore(img, document.getElementById('download'));
        document.getElementById('image').width = '250';
        aLink.setAttribute('href', URL.createObjectURL(imgFile));

        var eName = urlParams.get('name').substring(0, 1).toUpperCase() + urlParams.get('name').substring(1);
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
        var img = document.getElementById('image');
        img.src = URL.createObjectURL(imgFile);
        document.getElementById('download').innerText = 'DOWNLOAD';

        img.setAttribute('class', 'afterLoaded')
        document.getElementById('download').setAttribute('style', 'color: #53f4ff');



        var aLink = document.getElementById('imgLink');
        aLink.insertBefore(img, document.getElementById('download'));
        document.getElementById('image').width = '250';
        aLink.setAttribute('href', URL.createObjectURL(imgFile));

        var eName = urlParams.get('name').substring(0, 1).toUpperCase() + urlParams.get('name').substring(1);
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
        var img = document.getElementById('image');
        img.src = URL.createObjectURL(imgFile);
        document.getElementById('download').innerText = 'DOWNLOAD';

        img.setAttribute('class', 'afterLoaded')
        document.getElementById('download').setAttribute('style', 'color: #53f4ff');



        var aLink = document.getElementById('imgLink');
        aLink.insertBefore(img, document.getElementById('download'));
        document.getElementById('image').width = '250';
        aLink.setAttribute('href', URL.createObjectURL(imgFile));

        var eName = urlParams.get('name').substring(0, 1).toUpperCase() + urlParams.get('name').substring(1);
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
        var img = document.getElementById('image');
        img.src = URL.createObjectURL(imgFile);
        document.getElementById('download').innerText = 'DOWNLOAD';

        img.setAttribute('class', 'afterLoaded')
        document.getElementById('download').setAttribute('style', 'color: #53f4ff');



        var aLink = document.getElementById('imgLink');
        aLink.insertBefore(img, document.getElementById('download'));
        document.getElementById('image').width = '250';
        aLink.setAttribute('href', URL.createObjectURL(imgFile));

        var eName = urlParams.get('name').substring(0, 1).toUpperCase() + urlParams.get('name').substring(1);
        aLink.setAttribute('download', `${urlParams.get('e')}${eName}`);
      }

    })
  }
}
function hazmatEmote(e) {
  cnt++;
  console.log(cnt);
  const urlParams = new URLSearchParams(window.location.search);

  if (cnt == 1) { }
  if (cnt == 2) {
    var emoteName = urlParams.get('name');
    var loadImage = `app.open("${hazmatLink}", false)`;
    var loadEmote = `var emoteID = '${emoteName}';app.open('https://cdn.discordapp.com/emojis/' + emoteID);`
    wnd.postMessage(loadImage, "*");
    wnd.postMessage(loadEmote, "*");
  }
  if (cnt == 6) {
    console.log('printed');
    var emoteName = urlParams.get('name');
    console.log(emoteName);
    var changeName = `var emoteID = '${emoteName}';app.activeDocument.resizeImage(112,112);var targetDoc = app.documents.getByName('pepeHazmat.psd');if (app.activeDocument.layerSets[0] != undefined){var target = app.activeDocument.layerSets[0];target.duplicate(targetDoc);app.activeDocument = app.documents.getByName('pepeHazmat.psd');var duppedObj = app.activeDocument.layerSets[2];duppedObj.resize(90,90,AnchorPosition.TOPRIGHT);var target = duppedObj;var group =  app.activeDocument.layerSets.getByName('PLACE');target.move(group);}else{var target = app.activeDocument.layers[0];target.duplicate(targetDoc);app.activeDocument = app.documents.getByName('pepeHazmat.psd');var duppedObj = app.activeDocument.layerSets[0].layers[0];duppedObj.resize(90,90,AnchorPosition.TOPRIGHT);var target = duppedObj;var group =  app.activeDocument.layerSets.getByName('PLACE');target.move(group);}`;
    wnd.postMessage(changeName, "*");

  }
  if (cnt == 7) {
    var save = `if (app.activeDocument.layerSets.getByName('PLACE').layers.getByName('Layer 1')){app.activeDocument.saveToOE("png");}else{app.activeDocument.saveToOE("gif");}`;
    wnd.postMessage(save, "*");
    window.addEventListener('message', event => {
      let aBuffer = event.data;
      console.log(aBuffer);
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
        var img = document.getElementById('image');
        img.src = URL.createObjectURL(imgFile);
        document.getElementById('download').innerText = 'DOWNLOAD';

        img.setAttribute('class', 'afterLoaded')
        document.getElementById('download').setAttribute('style', 'color: #53f4ff');



        var aLink = document.getElementById('imgLink');
        aLink.insertBefore(img, document.getElementById('download'));
        document.getElementById('image').width = '250';
        aLink.setAttribute('href', URL.createObjectURL(imgFile));
        aLink.setAttribute('download', `${urlParams.get('e')}`);
      }

    })
  }
}
function petEmote(e) {
  cnt++;
  console.log(cnt);
  const urlParams = new URLSearchParams(window.location.search);

  if (cnt == 1) { }
  if (cnt == 2) {
    var loadImage = `app.open("${PETlink}", false)`;
    wnd.postMessage(loadImage, "*");
  }
  if (cnt == 4) {
    var emoteName = urlParams.get('name');
    var openSmart = `var emotePlace = app.activeDocument.layers.getByName('[Emote Here]');app.activeDocument.activeLayer = emotePlace;executeAction(stringIDToTypeID("placedLayerEditContents"));var emoteID = '${emoteName}';app.open('https://cdn.discordapp.com/emojis/' + emoteID);app.activeDocument = app.documents.getByName('${emoteName}.psd');`
    wnd.postMessage(openSmart, "*");
    console.log('printed');
    var emoteName = urlParams.get('name');
    console.log(emoteName);

  }
  if (cnt == 6) {
    var emoteName = urlParams.get('name');
    var save = `app.activeDocument.resizeImage(94, 94);var targetDoc = app.documents.getByName('Layer 11.psd');var target = app.activeDocument.layers[0];target.duplicate(targetDoc);app.activeDocument.close();app.activeDocument.save();app.activeDocument.close();app.activeDocument.saveToOE("gif");`;
    wnd.postMessage(save, "*");
    window.addEventListener('message', event => {
      let aBuffer = event.data;
      console.log(aBuffer);
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
        var img = document.getElementById('image');
        img.src = URL.createObjectURL(imgFile);
        document.getElementById('download').innerText = 'DOWNLOAD';

        img.setAttribute('class', 'afterLoaded')
        document.getElementById('download').setAttribute('style', 'color: #53f4ff');



        var aLink = document.getElementById('imgLink');
        aLink.insertBefore(img, document.getElementById('download'));
        document.getElementById('image').width = '250';
        aLink.setAttribute('href', URL.createObjectURL(imgFile));
        aLink.setAttribute('download', `${urlParams.get('e')}`);
      }

    })
  }
}
function pepegaSignEmote(e) {
  cnt++;
  console.log(cnt);
  const urlParams = new URLSearchParams(window.location.search);

  if (cnt == 1) { }
  if (cnt == 2) {
    var loadFont1 = `app.open("${comicLink}")`
    var loadImage = `app.open("${pepegaSignLink}", false)`;
    wnd.postMessage(loadFont1, '*');
    wnd.postMessage(loadImage, "*");
  }
  if (cnt == 5) {
    console.log('printed');
    var emoteName = urlParams.get('name');
    console.log(emoteName);
    var openObj = `var target = app.activeDocument.layerSets[2].layers.getByName("TEXT"); app.activeDocument.activeLayer = target; executeAction(stringIDToTypeID("placedLayerEditContents"));`;
    wnd.postMessage(openObj, "*");

  }
  if (cnt == 7){
    console.log('printed');
    var emoteName = urlParams.get('name');
    var changeText = `var reText = '${emoteName}'; app.activeDocument.layers[0].textItem.contents = reText; app.activeDocument.save(); app.activeDocument.close();`;
    wnd.postMessage(changeText, "*");
  }
  if (cnt == 8) {
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
        var img = document.getElementById('image');
        img.src = URL.createObjectURL(imgFile);
        document.getElementById('download').innerText = 'DOWNLOAD';

        img.setAttribute('class', 'afterLoaded')
        document.getElementById('download').setAttribute('style', 'color: #53f4ff');



        var aLink = document.getElementById('imgLink');
        aLink.insertBefore(img, document.getElementById('download'));
        document.getElementById('image').width = '250';
        aLink.setAttribute('href', URL.createObjectURL(imgFile));

        var eName = urlParams.get('name').substring(0, 1).toUpperCase() + urlParams.get('name').substring(1);
        aLink.setAttribute('download', `${urlParams.get('e')}${eName}`);
      }

    })
  }
}