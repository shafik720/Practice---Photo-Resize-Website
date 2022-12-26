
let uploadSection = document.querySelector('.upload-section'),
uploadImg = uploadSection.querySelector('img'),
uploadInput = uploadSection.querySelector('input');

let widthValue = document.querySelector('.width');
let heightValue = document.querySelector('.height');
let ratioCheckBox = document.getElementById('ratioCheckbox'); 
let ratioCalculation;

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

uploadInput.addEventListener('change',upload);
uploadSection.addEventListener('click',()=>uploadInput.click());