var sortableList = document.querySelector(".sortable-list");
var items = sortableList.querySelectorAll(".item");
items.forEach(function (item) {
    item.addEventListener("dragstart", function () {
        setTimeout(function () { return item.classList.add("dragging"); }, 0);
    });
    item.addEventListener("dragend", function () { return item.classList.remove("dragging"); });
});
var initSortableList = function (e) {
    e.preventDefault();
    var draggingItem = document.querySelector(".dragging");
    var siblings = Array.from(sortableList.querySelectorAll(".item:not(.dragging)"));
    var nextSibling = siblings.find(function (sibling) {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    if (nextSibling) {
        sortableList.insertBefore(draggingItem, nextSibling);
    }
    else {
        sortableList.appendChild(draggingItem);
    }
};
sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", function (e) { return e.preventDefault(); });
