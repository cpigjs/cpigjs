export class CircularQueue {
    constructor(n) {
        this.n = n;
        this.data = new Array(n).fill('');
        this.beg = 0;
        this.end = 0;
        this.size = 0;
    }
    push(x) {
        if (this.size === this.n) {
            throw new Error('queue is full');
        }
        else {
            this.data[this.end] = x;
            this.end++;
            this.size++;
            if (this.end === this.n) {
                this.end = 0;
            }
        }
    }
    pop() {
        if (this.size === 0) {
            throw new Error('queue is empty');
        }
        const x = this.data[this.beg];
        this.size--;
        this.beg++;
        if (this.beg === this.n) {
            this.beg = 0;
        }
        return x;
    }
}
//# sourceMappingURL=queue.js.map