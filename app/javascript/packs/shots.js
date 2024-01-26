
// TODO:                                     MAKE THE FORM ACCEPT ONLY THE FILES OF THE TYPE image/
document.addEventListener("turbolinks:load", function() {
    var Shots = {
        previewShot() {
            if (window.File && window.FileList && window.FileReader) {
                function handleFileSelect(evt) {
                    evt.stopPropagation();
                    evt.preventDefault();

                    let files = evt.target.files || evt.dataTransfer.files;

                    // files is a fileList of File object. List operates here
                    for (var i = 0, f; f = files[i]; i++) {

                       if (f.type.match("image.*")) {
                           const  reader = new FileReader();
                           // Closure to capture the file
                           reader.onload = (function(theFile) {
                               return function (e) {
                                   // Render thumbnail
                                   let span = document.createElement('span');
                                   span.innerHTML = ['<img id="image-span" class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>']
                                       .join('');

                                   document.getElementById('list').insertBefore(span, null);
                                   document.getElementById('image-span').style = "width: 80em; height: 60em;";
                               };
                           })(f);

                           reader.readAsDataURL(f);
                       } else {
                           continue;
                       }
                    }

                }

                function handleDragOver(evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    evt.dataTransfer.dropEffect = 'copy';
                }

                const dropZone = document.getElementById('drop-zone');
                const target = document.documentElement;
                const fileInput = document.getElementById('shot_user_shot');
                const previewImage = document.getElementById('previewImage');
                const newShotForm = document.getElementById('new_shot');

                if (dropZone) {
                    dropZone.addEventListener('dragover', handleDragOver, false);
                    dropZone.addEventListener('drop', handleFileSelect, false)
                }

                // DESIGN PART
                dropZone.addEventListener('dragover', (e)=> {
                    dropZone.style.backgroundColor = "#ffe9fb"
                }, false);

                dropZone.addEventListener('dragleave', (e)=> {
                    dropZone.style.backgroundColor = "transparent"
                }, false);

                dropZone.addEventListener('drop', (e)=> {
                    e.preventDefault();
                    dropZone.classList.remove('fire');
                    fileInput.files = e.dataTransfer.files;

                    // If on shot/id/edit hide image on drop
                    if (previewImage) {
                        previewImage.style.display = 'none';
                    }
                    if (newShotForm) {
                        dropZone.style.display = 'none';
                    }
                }, false);

                target.addEventListener('dragover', (e)=> {
                   e.preventDefault();
                   dropZone.classList.add('dragging');
                }, false);

                // Remove dragging class to body when NOT dragging
                target.addEventListener('dragleave', (e)=> {
                    dropZone.classList.remove('dragging');
                    dropZone.classList.remove('fire');
                }, false);


            }
        }
    };

    Shots.previewShot();
})