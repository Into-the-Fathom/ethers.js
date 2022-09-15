import { keccak256 } from "@baldyash/keccak256";
import { toUtf8Bytes } from "@baldyash/strings";
export function id(text) {
    return keccak256(toUtf8Bytes(text));
}
//# sourceMappingURL=id.js.map