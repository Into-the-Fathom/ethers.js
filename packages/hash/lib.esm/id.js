import { keccak256 } from "@into-the-fathom/keccak256";
import { toUtf8Bytes } from "@into-the-fathom/strings";
export function id(text) {
    return keccak256(toUtf8Bytes(text));
}
//# sourceMappingURL=id.js.map