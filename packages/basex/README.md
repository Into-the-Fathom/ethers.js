Base-X
======

This sub-module is part of the [ethers project](https://github.com/Into-the-Fathom/ethers.js).

It is responsible for encoding and decoding vinary data in arbitrary bases, but
is primarily for Base58 encoding which is used for various blockchain data.

For more information, see the [documentation](https://docs.ethers.io/v5/api/utils/encoding/).

Importing
---------

Most users will prefer to use the [umbrella package](https://www.npmjs.com/package/fathom-ethers),
but for those with more specific needs, individual components can be imported.

```javascript
const {

    BaseX,

    Base32,
    Base58

} = require("@into-the-fathom/basex");
```

License
-------

MIT License
