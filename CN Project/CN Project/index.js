const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#fileInput");
const browseBtn = document.querySelector(".browseBtn");

dropZone.addEventListener("dragover",(e)=>{
    e.preventDefault();
    
    if (!dropZone.classList.contains("dragged")) {
    dropZone.classList.add("dragged");
    }
});

dropZone.addEventListener("dragleave", ()=>{
    dropZone.classList.remove("dragged");
});

dropZone.addEventListener("drop", (e)=>{
    e.preventDefault();
    dropZone.classList.remove("dragged");
});

browseBtn.addEventListener("click", ()=>{
    fileInput.click();
});