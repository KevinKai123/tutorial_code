function startDragAndDrop(){
    mypic = document.getElementById('circle');
    mypic.addEventListener("dragstart",startDrag, false);
    leftbox = document.getElementById('leftbox');
    leftbox.addEventListener("dragenter", function(e){e.preventDefault();}, false);
    leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
    leftbox.addEventListener("drop", dropped, false);
}

function startDrag(e){
    var image = '<img id="circle" src="./circle.png" />';
    e.dataTransfer.setData('Text', image);
}

function dropped(e){
    e.preventDefault();
    leftbox.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener("load", startDragAndDrop, false);