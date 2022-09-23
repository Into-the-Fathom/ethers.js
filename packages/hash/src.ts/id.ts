import { keccak256 } from "@into-the-fathom/keccak256";
import { toUtf8Bytes } from "@into-the-fathom/strings";

export function id(text: string): string {
    return keccak256(toUtf8Bytes(text));
}
