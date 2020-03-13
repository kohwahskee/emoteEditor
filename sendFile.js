var cnt = 0, wnd = document.getElementById("photopea").contentWindow;
window.addEventListener("message", onMessage);


function onMessage(e) {
  cnt++;
  console.log(cnt);
  const urlParams = new URLSearchParams(window.location.search);

  if (cnt == 1) { }
  if (cnt == 2) {
    var loadImage = 'app.open("https://srv-file7.gofile.io/download/CQpdXx/lurk.psd", false)';
    wnd.postMessage(loadImage, "*");
  }
  if (cnt == 4) {
    /*  var xhr = new XMLHttpRequest();
     var emoteName;
     xhr.open('GET', '/emotename');
     xhr.send();
     xhr.onload = function (e) {
       console.log(e);
       emoteName = e.srcElement.response;
       console.log(emoteName);
     } */


    console.log('printed');
    var emoteName = urlParams.get('name');
    console.log(emoteName);
    var changeName = `var nameLayer = app.activeDocument.layers.getByName('user');nameLayer.textItem.contents = '${emoteName}'`;
    wnd.postMessage(changeName, "*");

  }
  if (cnt == 5) {
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
        document.getElementById('img').appendChild(img);
        document.getElementById('image').width = '500';
        
        /* const gofileForm = new FormData();
        gofileForm.append('filesUploaded', imgFile);
        //gofileForm.append('email', 'hidonbrush@gmail.com');


        // SEND ---> GoFile
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://srv-file10.gofile.io/upload');
        xhr.send(gofileForm);
        xhr.onload = function (e) {
          //console.log(JSON.parse(e.srcElement.response));
          var rawData = JSON.parse(e.srcElement.response)
          var imgPreview = document.createElement('img');
          var fileCode = rawData.data.code;
          var imgURL = `https://srv-file10.gofile.io/download/${fileCode}/emote.png`;
          imgPreview.src = imgURL;
          document.body.appendChild(imgPreview);
          console.log(imgURL);
        } */


      }

    })
  }
}

