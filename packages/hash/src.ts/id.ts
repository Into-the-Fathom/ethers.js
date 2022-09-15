import { keccak256 } from "@baldyash/keccak256";
import { toUtf8Bytes } from "@baldyash/strings";

export function id(text: string): string {
    return keccak256(toUtf8Bytes(text));
}
