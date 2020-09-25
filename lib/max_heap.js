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
}

// [null, 18, 15, 22, 1, 11, 7, 26]

//             18
//       15         22
//    1     11    7     26

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
