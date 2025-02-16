Property Utilities
==================

This sub-module is part of the [ethers project](https://github.com/Into-the-Fathom/ethers.js).

It contains several useful utility methods for managing simple objects with
defined properties.

For more information, see the [documentation](https://docs.ethers.io/v5/api/utils/properties/).


Importing
---------

Most users will prefer to use the [umbrella package](https://www.npmjs.com/package/fathom-ethers),
but for those with more specific needs, individual components can be imported.

```javascript
const {

    defineReadOnly,

    getStatic,

    resolveProperties,
    checkProperties,

    shallowCopy,
    deepCopy,

    Description,

    // Types

    Deferrable

} = require("@into-the-fathom/properties");
```


License
-------

MIT License
