/* istanbul ignore file */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = exports.randomNumber = exports.randomHexString = exports.randomBytes = void 0;
var fathom_ethers_1 = require("fathom-ethers");
function randomBytes(seed, lower, upper) {
    if (!upper) {
        upper = lower;
    }
    if (upper === 0 && upper === lower) {
        return new Uint8Array(0);
    }
    var result = fathom_ethers_1.ethers.utils.arrayify(fathom_ethers_1.ethers.utils.keccak256(fathom_ethers_1.ethers.utils.toUtf8Bytes(seed)));
    while (result.length < upper) {
        result = fathom_ethers_1.ethers.utils.concat([result, fathom_ethers_1.ethers.utils.keccak256(fathom_ethers_1.ethers.utils.concat([seed, result]))]);
    }
    var top = fathom_ethers_1.ethers.utils.arrayify(fathom_ethers_1.ethers.utils.keccak256(result));
    var percent = ((top[0] << 16) | (top[1] << 8) | top[2]) / 0x01000000;
    return result.slice(0, lower + Math.floor((upper - lower) * percent));
}
exports.randomBytes = randomBytes;
function randomHexString(seed, lower, upper) {
    return fathom_ethers_1.ethers.utils.hexlify(randomBytes(seed, lower, upper));
}
exports.randomHexString = randomHexString;
function randomNumber(seed, lower, upper) {
    var top = randomBytes(seed, 3);
    var percent = ((top[0] << 16) | (top[1] << 8) | top[2]) / 0x01000000;
    return lower + Math.floor((upper - lower) * percent);
}
exports.randomNumber = randomNumber;
function equals(a, b) {
    // Array (treat recursively)
    if (Array.isArray(a)) {
        if (!Array.isArray(b) || a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (!equals(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    // BigNumber
    if (a.eq) {
        if (!b.eq || !a.eq(b)) {
            return false;
        }
        return true;
    }
    // Uint8Array
    if (a.buffer) {
        if (!b.buffer || a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    // Something else
    return a === b;
}
exports.equals = equals;
//# sourceMappingURL=utils.js.map