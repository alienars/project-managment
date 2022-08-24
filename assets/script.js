document.addEventListener('DOMContentLoaded', (event) => {

    var dragSrcEl = null;

    function handleDragStart(e) {
        this.style.opacity = '0.1';
        this.style.border = '3px dashed #c4cad3';

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('task-hover');
    }

    function handleDragLeave(e) {
        this.classList.remove('task-hover');
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        if (dragSrcEl != this) {

            let columnArr = ['ready','progress','review','done']
            if (columnArr.indexOf(e.target.parentNode.getAttribute('id')) > -1) {
                e.target.parentNode.appendChild(dragSrcEl);
            } else if(columnArr.indexOf(e.target.parentNode.parentNode.getAttribute('id')) > -1) {
                e.target.parentNode.parentNode.appendChild(dragSrcEl);
            } else if(columnArr.indexOf(e.target.parentNode.parentNode.parentNode.getAttribute('id')) > -1) {
                e.target.parentNode.parentNode.parentNode.appendChild(dragSrcEl);
            } else {

            }

        }

        return false;
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';
        this.style.border = 0;

        items.forEach(function (item) {
            item.classList.remove('task-hover');
        });
    }


    let items = document.querySelectorAll('.task');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
    });
});