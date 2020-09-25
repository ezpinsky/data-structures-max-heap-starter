class MaxHeap {
	constructor() {
		this.array = [null];
	}

	getParent(idx) {
		return Math.floor(idx / 2);
	}

	getLeftChild(idx) {
		return idx * 2;
	}

	getRightChild(idx) {
		return idx * 2 + 1;
	}

	siftUp(idx) {
		if (idx === 1) return;
		let parentIdx = this.getParent(idx);
		let parentVal = this.array[parentIdx];
		let val = this.array[idx];

		if (parentVal < val) {
			[this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
			this.siftUp(parentIdx);
		}
	}

	insert(val) {
		this.array.push(val);
		this.siftUp(this.array.length - 1);
	}

	siftDown(idx) {
		//if either child node is greater then our value (parent) then sift down
		let arr = this.array;
		let parentVal = arr[idx];
		let leftChildIdx = this.getLeftChild(idx);
		let rightChildIdx = this.getRightChild(idx);
		let leftChildVal = arr[leftChildIdx];
		let rightChildVal = arr[rightChildIdx];
		//Base Case TIME!
		// base case is when we reach bottom of heap
		if (leftChildVal === undefined) leftChildVal = -Infinity;
		if (rightChildVal === undefined) rightChildVal = -Infinity;

		//base case check if it hits bottom or is at correct place
		if (parentVal > leftChildVal && parentVal > rightChildVal) return;

		//if we hit this code our parent is smaller than our child nodes
		//finds correct child for parent to switch with
		let swapIdx;
		if (leftChildVal > rightChildVal) {
			swapIdx = leftChildIdx;
		} else {
			swapIdx = rightChildIdx;
		}

		[arr[swapIdx], arr[idx]] = [arr[idx], arr[swapIdx]];
		this.siftDown(swapIdx);
	}
}

// let heap1 = new MaxHeap();
// heap1.array = [null, 27, 30, 40, 20, 25, 16];
//          27
//      30      40
//    20  25  16

// heap1.siftDown(1);
// console.log(heap1.array); // --> [null, 40, 30, 27, 20, 25, 16]);

// [null, 18, 15, 22, 4, 11, 7, 26]

//             12
//       15         22
//     4     13    7     26
//   1
//ud  ud

// WITH NULL
// getLEFTChild
// idx * 2 = LEFTChildIdx
// 1 * 2 = 2
// getRIGHTChild
// idx * 2 + 1 = RIGHTChildIdx
// 1 * 2 + 1 = 3

//     23
// 15      18

//    0    1   2    3
// [null, 23, 15, 18]

// WITHOUT NULL
// getLEFTChild
// idx * 2 = LEFTChildIdx
// 0 * 2 + 1 = 3

// getRIGHTChild
// idx * 2 + 2 = RIGHTChildIdx
// 0 * 2 + 2 = 2

//     23
// 15      18

//  0    1   2
// [23, 15, 18]

module.exports = {
	MaxHeap
};
