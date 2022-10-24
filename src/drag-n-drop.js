export default function dragNDrop() {
  const items = document.querySelectorAll('#item');

  items.forEach((item) => {
    item.addEventListener('dragstart', dragStart);
  });

  function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  }

  const board = document.querySelector('.board-div-one');

  board.addEventListener('dragenter', dragEnter);
  board.addEventListener('dragover', dragOver);
  board.addEventListener('dragleave', dragLeave);
  board.addEventListener('drop', drop);

  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  function dragLeave(e) {
    e.target.classList.remove('drag-over');
  }

  function drop(e) {
    e.target.classList.remove('drag-over');

    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    e.target.appendChild(draggable);

    draggable.classList.remove('hide');
  }
}
