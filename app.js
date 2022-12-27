
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
function changeHeight(){
    let height = ratioButton.checked ? widthValue.value/ratioCalculation : heightValue.value;

    heightValue.value = Math.floor(height);
}
widthValue.addEventListener('keyup',changeHeight);

inputFile.addEventListener('change', loadFile);
uploadBox.addEventListener('click', ()=>{inputFile.click()});