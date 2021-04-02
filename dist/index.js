"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timeStamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    }
}
const genesisBlock = new Block(0, "12345", "", "Hello", 987654321);
let blockChain = [genesisBlock];
console.log(blockChain);
//# sourceMappingURL=index.js.map