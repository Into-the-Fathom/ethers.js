import { concat, hexlify } from "@into-the-fathom/bytes";
import { toUtf8Bytes, toUtf8String } from "@into-the-fathom/strings";
import { keccak256 } from "@into-the-fathom/keccak256";
import { Logger } from "@into-the-fathom/logger";
import { version } from "./_version";
const logger = new Logger(version);
import { ens_normalize } from "./ens-normalize/lib";
const Zeros = new Uint8Array(32);
Zeros.fill(0);
function checkComponent(comp) {
    if (comp.length === 0) {
        throw new Error("invalid ENS name; empty component");
    }
    return comp;
}
function ensNameSplit(name) {
    const bytes = toUtf8Bytes(ens_normalize(name));
    const comps = [];
    if (name.length === 0) {
        return comps;
    }
    let last = 0;
    for (let i = 0; i < bytes.length; i++) {
        const d = bytes[i];
        // A separator (i.e. "."); copy this component
        if (d === 0x2e) {
            comps.push(checkComponent(bytes.slice(last, i)));
            last = i + 1;
        }
    }
    // There was a stray separator at the end of the name
    if (last >= bytes.length) {
        throw new Error("invalid ENS name; empty component");
    }
    comps.push(checkComponent(bytes.slice(last)));
    return comps;
}
export function ensNormalize(name) {
    return ensNameSplit(name).map((comp) => toUtf8String(comp)).join(".");
}
export function isValidName(name) {
    try {
        return (ensNameSplit(name).length !== 0);
    }
    catch (error) { }
    return false;
}
export function namehash(name) {
    /* istanbul ignore if */
    if (typeof (name) !== "string") {
        logger.throwArgumentError("invalid ENS name; not a string", "name", name);
    }
    let result = Zeros;
    const comps = ensNameSplit(name);
    while (comps.length) {
        result = keccak256(concat([result, keccak256(comps.pop())]));
    }
    return hexlify(result);
}
export function dnsEncode(name) {
    return hexlify(concat(ensNameSplit(name).map((comp) => {
        // DNS does not allow components over 63 bytes in length
        if (comp.length > 63) {
            throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
        }
        const bytes = new Uint8Array(comp.length + 1);
        bytes.set(comp, 1);
        bytes[0] = bytes.length - 1;
        return bytes;
    }))) + "00";
}
//# sourceMappingURL=namehash.js.map