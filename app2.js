
let uploadSection = document.querySelector('.upload-section'),
uploadImg = uploadSection.querySelector('img'),
uploadInput = uploadSection.querySelector('input');

let widthValue = document.querySelector('.width');
let heightValue = document.querySelector('.height');
let ratioCheckBox = document.getElementById('ratioCheckbox'); 

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

widthValue.addEventListener('keyup',()=>{
    let height = ratioCheckBox.checked ? 600 : 100 ;
    heightValue.value = height;
})

uploadInput.addEventListener('change',upload);
uploadSection.addEventListener('click',()=>uploadInput.click());