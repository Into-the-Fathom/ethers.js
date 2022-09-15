Ethereum (and ilk) Network Definitions
======================================

This sub-module is part of the [ethers project](https://github.com/Into-the-Fathom/ethers.js).

It is responsible for tracking common networks along with important
parameters for each.

For more information, see the [documentation](https://docs.ethers.io/v5/api/providers/types/#providers-Network).

Importing
---------

Most users will prefer to use the [umbrella package](https://www.npmjs.com/package/ethersfathom),
but for those with more specific needs, individual components can be imported.

```javascript
const {

    getNetwork,

    // Types

    Network,
    Networkish

} = require("@ethersfathom/networks");
```


License
-------

MIT License
