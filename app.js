
const uploadBox = document.querySelector('.upload-section'),
previewImg = uploadBox.querySelector('img'),
inputFile = uploadBox.querySelector('input');

let widthValue = document.querySelector('.width');
let heightValue = document.querySelector('.height');

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
    })    
}

inputFile.addEventListener('change', loadFile);
uploadBox.addEventListener('click', ()=>{inputFile.click()});