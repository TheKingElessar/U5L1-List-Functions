var bList = ["to", 5, "po"];
appendItem(bList, bList[2] + "ta" + bList[0]);
insertItem(bList, 2 - 1, "go");
removeItem(bList, 2);

function appendItem(list, item) {
  list.push(item);
}

function insertItem(list, index, item) {
  list.splice(index, 0, item);
}

function removeItem(list, index) {
  list.splice(index, 1);
}

console.log(bList);