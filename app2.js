
let uploadSection = document.querySelector('.upload-section'),
uploadImg = uploadSection.querySelector('img'),
uploadInput = uploadSection.querySelector('input');

let widthValue = document.querySelector('.width');
let heightValue = document.querySelector('.height');

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
    })
    
}

uploadInput.addEventListener('change',upload);
uploadSection.addEventListener('click',()=>uploadInput.click());