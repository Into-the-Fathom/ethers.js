Ethereum Providers
==================

This sub-module is part of the [ethers project](https://github.com/Into-the-Fathom/ethers.js).

It contains common Provider classes, utility functions for dealing with providers
and re-exports many of the classes and types needed to implement a custom Provider.

For more information, see the [documentation](https://docs.ethers.io/v5/api/providers/).


Importing
---------

Most users will prefer to use the [umbrella package](https://www.npmjs.com/package/fathom-ethers),
but for those with more specific needs, individual components can be imported.

```javascript
const {

    Provider,
    BaseProvider,

    JsonRpcProvider,
    StaticJsonRpcProvider,
    UrlJsonRpcProvider,

    FallbackProvider,

    AlchemyProvider,
    CloudflareProvider,
    EtherscanProvider,
    InfuraProvider,
    NodesmithProvider,

    IpcProvider,

    Web3Provider,

    WebSocketProvider,

    JsonRpcSigner,

    getDefaultProvider,

    getNetwork,

    Formatter,

    // Types

    TransactionReceipt,
    TransactionRequest,
    TransactionResponse,

    Listener,

    ExternalProvider,

    Block,
    BlockTag,
    EventType,
    Filter,
    Log,

    JsonRpcFetchFunc,

    Network,
    Networkish

} = require("@into-the-fathom/providers");
```


License
-------

MIT License
