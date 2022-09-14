import { keccak256 } from "@ethersfathom/keccak256";
import { toUtf8Bytes } from "@ethersfathom/strings";
export function id(text) {
    return keccak256(toUtf8Bytes(text));
}
//# sourceMappingURL=id.js.map