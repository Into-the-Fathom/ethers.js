Byte Manipulation
=================

This sub-module is part of the [ethers project](https://github.com/Into-the-Fathom/ethers.js).

It is responsible for manipulating binary data.

For more information, see the [documentation](https://docs.ethers.io/v5/api/utils/bytes/).


Importing
---------

Most users will prefer to use the [umbrella package](https://www.npmjs.com/package/fathom-ethers),
but for those with more specific needs, individual components can be imported.

```javascript
const {

    isBytesLike,
    isBytes,

    arrayify,

    concat,

    stripZeros,
    zeroPad,

    isHexString,
    hexlify,

    hexDataLength,
    hexDataSlice,
    hexConcat,

    hexValue,

    hexStripZeros,
    hexZeroPad,

    splitSignature,
    joinSignature,

    // Types

    Bytes,
    BytesLike,

    DataOptions,

    Hexable,

    SignatureLike,
    Signature

} = require("@into-the-fathom/bytes");
```


License
-------

MIT License
