const canvas = document.getElementsByTagName('layer-canvas')[0];
const fileInput = document.createElement('input');
const helperImage = new Image();

fileInput.style = 'position: absolute; left: 0; top: 0; z-index: 1000000;';
fileInput.type = 'file';
fileInput.onchange = function(){
    const imageReader = new FileReader
    imageReader.onload = function(e){
        helperImage.src = e.target.result;
    }
    imageReader.readAsDataURL(fileInput.files[0]);
}
helperImage.onload = function(){
    canvas.drawImage(helperImage, 0, 0, 1000, 1000);
}
document.body.appendChild(fileInput);