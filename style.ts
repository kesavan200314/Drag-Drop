const sortableList = document.querySelector(".sortable-list") as HTMLElement;
const items = sortableList.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e: DragEvent) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging") as HTMLElement;

    const siblings = Array.from(sortableList.querySelectorAll(".item:not(.dragging)")) as HTMLElement[];

    const nextSibling = siblings.find((sibling) => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    if (nextSibling) {
        sortableList.insertBefore(draggingItem, nextSibling);
    } else {
        sortableList.appendChild(draggingItem);
    }
};

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
