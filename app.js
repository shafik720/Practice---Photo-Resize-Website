
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
    
    uploadBox.classList.add('active');
    console.log(file);
}

inputFile.addEventListener('change', loadFile);
uploadBox.addEventListener('click', ()=>{inputFile.click()});