
export function urltoFile(url, filename, mimeType){
    return (fetch(url)
        .then(function(res){ return res.arrayBuffer();})
        .then(function(buf){ return new File([buf], filename, {type:mimeType});})
    );
  }

  export function download(file,fileName,type) {

    var blob = new Blob([file], { type }),
    anchor = document.createElement('a');

    document.body.appendChild(anchor)
    anchor.download = fileName;
    anchor.href =  window.URL.createObjectURL(blob);
    anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
    anchor.click();
  }