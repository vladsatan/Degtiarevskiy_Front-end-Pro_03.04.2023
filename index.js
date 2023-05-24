const link = document.getElementById('link').textContent;
const http = document.getElementById('http');
const https = document.getElementById('https');

function forwarder(protocol){

    let linkProto = link.slice(0, 4)

    if(linkProto === 'http'){
      location.href = link
   }else {
      if(protocol === 'https'){
         window.location.href = 'https://' + link
      }
      if(protocol === 'http'){
         window.location.href = 'http://' + link
      }
   }
}

http.addEventListener('click', ()=> forwarder('http'))
https.addEventListener('click', ()=> forwarder('https'))