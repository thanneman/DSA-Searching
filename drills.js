const BinarySearchTree = require('./BST');
const Queue = require('./queue');

// How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm,
// identify the sequence of numbers that each recursive call will search to try and find 8 & 16.

function binarySearch(arr, value, start = 0, end = arr.length - 1) {

    if (start > end) {
        return -1;
    }

    let index = Math.floor((start + end) / 2);
    let item = arr[index];

    console.log(`start and end: `, start, end);
    if (item === value) {
        return index;
    }

    else if (item < value) {

        return binarySearch(arr, value, index + 1, end);
    }
    //item greatter than value
    else if (item > value) {

        return binarySearch(arr, value, start, index - 1);
    }
}

const arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

console.log(binarySearch(arr, 8)); // 3 
// start and end:  0 9
// start and end:  0 3
// start and end:  2 3
// start and end:  3 3

console.log(binarySearch(arr, 16)); // -1 (not found)
// start and end:  0 9
// start and end:  5 9
// start and end:  8 9


// Implement different tree traversals
const preOrder = (bst) => {
    console.log({ preOrder: bst.key });
  
    if (bst.left) {
        preOrder(bst.left);
    }
    if (bst.right) {
        preOrder(bst.right);
    }
};
  
const inOrder = (bst) => {  
    if (bst.left) {
      inOrder(bst.left);
    }
  
    console.log({ inOrder: bst.key });
  
    if (bst.right) {
      inOrder(bst.right);
    }
};
  
const postOrder = (bst) => {  
    if (bst.left) {
      postOrder(bst.left);
    }
  
    if (bst.right) {
      postOrder(bst.right);
    }
  
    console.log({ postOrder: bst.key });
};
  
const order = new BinarySearchTree();
  order.insert('25', 25);
  order.insert('15', 15);
  order.insert('50', 50);
  order.insert('10', 10);
  order.insert('24', 24);
  order.insert('35', 35);
  order.insert('70', 70);
  order.insert('04', 04);
  order.insert('12', 12);
  order.insert('18', 18);
  order.insert('31', 31);
  order.insert('44', 44);
  order.insert('66', 66);
  order.insert('90', 90);
  order.insert('22', 22);
preOrder(order);
inOrder(order);
postOrder(order);


// Find the next commanding officer
const whosInCharge = (tree, values = []) => {
    const queue = new Queue();
    const node = tree;
  
    queue.enqueue(node);
  
    while (queue.first) {
      const node = queue.dequeue(); //remove from the queue
      values.push(node.value); // add that value from the queue to an array
  
      if (node.left) {
        queue.enqueue(node.left); //add left child to the queue
      }
  
      if (node.right) {
        queue.enqueue(node.right); // add right child to the queue
      }
    }
  
    return values;
}
  
function officers() {
    const officers = new BinarySearchTree();
    officers.insert(25, 'Captain Picard');
    officers.insert(20, 'Commander Riker');
    officers.insert(36, 'Commander Data');
    officers.insert(10, 'Lt. Cmdr. Worf');
    officers.insert(22, 'Lt. Cmdr. LaForge');
    officers.insert(40, 'Lt. Cmdr. Crusher');
    officers.insert(5, 'Lt. security-officer');
    officers.insert(38, 'Lieutenant Selar');
  
    return officers;
}
  
console.log('Next in command: ', whosInCharge(officers()));



// Max profit
function maxProfit(array) {
    // start at 0
    let max = 0;
    // loop through given array and set max
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] - array[i] > max) {
            max = array[i + 1] - array[i];
        }
    }
    console.log(`max: `, max);
    return max;

}
maxProfit([128, 97, 121, 123, 98, 97, 105]);