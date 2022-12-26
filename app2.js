
let uploadSection = document.querySelector('.upload-section'),
uploadImg = uploadSection.querySelector('img'),
uploadInput = uploadSection.querySelector('input');

let widthValue = document.querySelector('.width');
let heightValue = document.querySelector('.height');
let ratioCheckBox = document.getElementById('ratioCheckbox'); 
let ratioCalculation;
let downloadButton = document.querySelector('.download-button');

function upload(e){
    let file = e.target.files[0];
    if(!file){
        return;
    }
    uploadImg.src = URL.createObjectURL(file);
    uploadImg.addEventListener('load',()=>{
        uploadSection.classList.add('active');
        widthValue.value = uploadImg.naturalWidth;
        heightValue.value = uploadImg.naturalHeight;
        ratioCalculation = uploadImg.naturalWidth / uploadImg.naturalHeight;
    })
    
}

widthValue.addEventListener('keyup',()=>{
    let height = ratioCheckBox.checked ? (widthValue.value / ratioCalculation) : heightValue.value ;
    heightValue.value = Math.floor(height);
})

heightValue.addEventListener('keyup',()=>{
    let width = ratioCheckBox.checked ? (heightValue.value / ratioCalculation ) : widthValue.value;
    widthValue.value = Math.floor(width);
})

uploadInput.addEventListener('change',upload);
uploadSection.addEventListener('click',()=>uploadInput.click());

function downloadAndResize(){
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = widthValue.value;
    canvas.height = heightValue.value;
    ctx.drawImage(uploadImg, 0, 0, canvas.width, canvas.height);
    document.body.appendChild(canvas);
}
downloadButton.addEventListener('click', downloadAndResize);