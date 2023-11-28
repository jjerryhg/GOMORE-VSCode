// const form = document.querySelector("form"),
// fileInput = form.querySelector(".form-control"),
// progressArea = document.querySelector(".progress-area"),
// uploadedArea = document.querySelector(".uploaded-area");

// // form.addEventListener("click", ()=>{
// //     fileInput.click();
// // });

// fileInput.onchange = ({target}) =>{
//       let file = target.files[0]
//       if(file){
//         let fileName = file.name;
//         uploadFile(fileName);
//       }
// }

// function uploadFile(name){
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "php/upload.php");
//   xhr.upload.addEventListener("progress", ({loaded, total}) =>{
//         let fileLoaded = Math.floor((loaded / total) * 100);
//         let fileTotal = Math.floor(total / 1000);
//         let progressHTML = `<li class="row">
//                                 <i class="bi-files"></i>
//                                 <div class="content">
//                                 <div class="details">
//                                     <span class="name">${name} ~ Uploading</span>
//                                     <span class="percent">${fileLoaded}%</span>
//                                 </div>
//                                 <div class="progress-bar">
//                                     <div class="progress" style="width: ${fileLoaded}"></div>
//                                 </div>
//                                 </div>
//                             </li>`;
//         progressArea.innerHTML = progressHTML;

//         // let uploadedHTML = `<li class="row">
//         //                         <div class="content">
//         //                         <i class="bi-files"></i>
//         //                         <div class="details">
//         //                             <span class="name">image_01.png ~ Uploaded</span>
//         //                             <span class="size">70 KB</span>
//         //                         </div>
//         //                         </div>
//         //                         <i class="bi-check"></i>
//         //                     </li>`;
//   })
//   let formData = new FormData(form);
//   xhr.send(formData);
// }

function postFile() {
    var formdata = new FormData();

    formdata.append('file1', $('#file1')[0].files[0]);

    var request = new XMLHttpRequest();

    request.upload.addEventListener('progress', function (e) {
        var file1Size = $('#file1')[0].files[0].size;

        if (e.loaded <= file1Size) {
            var percent = Math.round(e.loaded / file1Size * 100);
            $('#progress-bar-file1').width(percent + '%').html(percent + '%');
        } 

        if(e.loaded == e.total){
            $('#progress-bar-file1').width(100 + '%').html(100 + '%');
        }
    });   

    request.open('post', '/echo/html/');
    request.timeout = 45000;
    request.send(formdata);
}