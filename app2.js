
let uploadSection = document.querySelector('.upload-section'),
uploadImg = uploadSection.querySelector('img'),
uploadInput = uploadSection.querySelector('input');

function upload(e){
    let file = e.target.files[0];
    if(!file){
        return;
    }
    uploadImg.src = URL.createObjectURL(file);
    uploadImg.addEventListener('load',()=>{
        uploadSection.classList.add('active');
    })
    
}

uploadInput.addEventListener('change',upload);
uploadSection.addEventListener('click',()=>uploadInput.click());