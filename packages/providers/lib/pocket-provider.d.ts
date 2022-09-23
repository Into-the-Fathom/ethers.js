import { Network } from "@into-the-fathom/networks";
import { ConnectionInfo } from "@into-the-fathom/web";
import { UrlJsonRpcProvider } from "./url-json-rpc-provider";
export declare class PocketProvider extends UrlJsonRpcProvider {
    readonly applicationId: string;
    readonly applicationSecretKey: string;
    readonly loadBalancer: boolean;
    static getApiKey(apiKey: any): any;
    static getUrl(network: Network, apiKey: any): ConnectionInfo;
    isCommunityResource(): boolean;
}
//# sourceMappingURL=pocket-provider.d.ts.map