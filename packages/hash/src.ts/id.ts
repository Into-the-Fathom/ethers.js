import { keccak256 } from "@ethersfathom/keccak256";
import { toUtf8Bytes } from "@ethersfathom/strings";

export function id(text: string): string {
    return keccak256(toUtf8Bytes(text));
}
