
const uploadBox = document.querySelector('.upload-section'),
previewImg = uploadBox.querySelector('img'),
inputFile = uploadBox.querySelector('input');

let widthValue = document.querySelector('.width');
let heightValue = document.querySelector('.height');

let ratioButton = document.querySelector('#ratioCheckbox');
let ratioCalculation ;

function loadFile(e){
    let file = e.target.files[0];
    if(!file){
        return;
    }
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener('load', ()=>{
        uploadBox.classList.add('active');
        document.querySelector('.box').classList.add('active');        
        widthValue.value = previewImg.naturalWidth;
        heightValue.value = previewImg.naturalHeight;
        ratioCalculation = widthValue.value / heightValue.value;
    })    
}
function download(){
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = widthValue.value;
    canvas.height = heightValue.value;

    ctx.drawImage(previewImg,0,0,canvas.width, canvas.height);
    let a = document.createElement('a');
    a.download = 'russell';
    a.href = canvas.toDataURL('image/jpeg',0.5);
    a.click();
}
function changeHeight(){
    let height = ratioButton.checked ? widthValue.value/ratioCalculation : heightValue.value;
    heightValue.value = Math.floor(height);
}
function changeWidth(){
    let width = ratioButton.checked ? heightValue.value * ratioCalculation : widthValue.value;
    widthValue.value = Math.floor(width);
}
widthValue.addEventListener('keyup',changeHeight);
heightValue.addEventListener('keyup',changeWidth);

inputFile.addEventListener('change', loadFile);
uploadBox.addEventListener('click', ()=>{inputFile.click()});

document.querySelector('.download-button').addEventListener('click', download)