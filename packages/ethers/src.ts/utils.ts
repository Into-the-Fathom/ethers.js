"use strict";

import { AbiCoder, checkResultErrors, ConstructorFragment, defaultAbiCoder, ErrorFragment, EventFragment, FormatTypes, Fragment, FunctionFragment, Indexed, Interface, LogDescription, ParamType, Result, TransactionDescription }from "@ethersfathom/abi";
import { getAddress, getCreate2Address, getContractAddress, getIcapAddress, isAddress } from "@ethersfathom/address";
import * as base64 from "@ethersfathom/base64";
import { Base58 as base58 } from "@ethersfathom/basex";
import { arrayify, concat, hexConcat, hexDataSlice, hexDataLength, hexlify, hexStripZeros, hexValue, hexZeroPad, isBytes, isBytesLike, isHexString, joinSignature, zeroPad, splitSignature, stripZeros } from "@ethersfathom/bytes";
import { _TypedDataEncoder, dnsEncode, hashMessage, id, isValidName, namehash } from "@ethersfathom/hash";
import { defaultPath, entropyToMnemonic, getAccountPath, HDNode, isValidMnemonic, mnemonicToEntropy, mnemonicToSeed } from "@ethersfathom/hdnode";
import { getJsonWalletAddress } from "@ethersfathom/json-wallets";
import { keccak256 } from "@ethersfathom/keccak256";
import { Logger } from "@ethersfathom/logger";
import { computeHmac, ripemd160, sha256, sha512 } from "@ethersfathom/sha2";
import { keccak256 as solidityKeccak256, pack as solidityPack, sha256 as soliditySha256 } from "@ethersfathom/solidity";
import { randomBytes, shuffled } from "@ethersfathom/random";
import { checkProperties, deepCopy, defineReadOnly, getStatic, resolveProperties, shallowCopy } from "@ethersfathom/properties";
import * as RLP from "@ethersfathom/rlp";
import { computePublicKey, recoverPublicKey, SigningKey } from "@ethersfathom/signing-key";
import { formatBytes32String, nameprep, parseBytes32String, _toEscapedUtf8String, toUtf8Bytes, toUtf8CodePoints, toUtf8String, Utf8ErrorFuncs } from "@ethersfathom/strings";
import { accessListify, computeAddress, parse as parseTransaction, recoverAddress, serialize as serializeTransaction, TransactionTypes } from "@ethersfathom/transactions";
import { commify, formatEther, parseEther, formatUnits, parseUnits } from "@ethersfathom/units";
import { verifyMessage, verifyTypedData } from "@ethersfathom/wallet";
import { _fetchData, fetchJson, poll } from "@ethersfathom/web";

////////////////////////
// Enums

import { SupportedAlgorithm } from "@ethersfathom/sha2";
import { UnicodeNormalizationForm, Utf8ErrorReason } from "@ethersfathom/strings";
import { UnsignedTransaction } from "@ethersfathom/transactions";

////////////////////////
// Types and Interfaces

import { CoerceFunc } from "@ethersfathom/abi";
import { Bytes, BytesLike, Hexable } from "@ethersfathom/bytes"
import { Mnemonic } from "@ethersfathom/hdnode";
import { EncryptOptions, ProgressCallback } from "@ethersfathom/json-wallets";
import { Deferrable } from "@ethersfathom/properties";
import { Utf8ErrorFunc } from "@ethersfathom/strings";
import { AccessList, AccessListish } from "@ethersfathom/transactions";
import { ConnectionInfo, FetchJsonResponse, OnceBlockable, OncePollable, PollOptions } from "@ethersfathom/web";

////////////////////////
// Exports

export {
    AbiCoder,
    defaultAbiCoder,

    Fragment,
    ConstructorFragment,
    ErrorFragment,
    EventFragment,
    FunctionFragment,
    ParamType,
    FormatTypes,

    checkResultErrors,
    Result,

    Logger,

    RLP,

    _fetchData,
    fetchJson,
    poll,

    checkProperties,
    deepCopy,
    defineReadOnly,
    getStatic,
    resolveProperties,
    shallowCopy,

    arrayify,

    concat,
    stripZeros,
    zeroPad,

    isBytes,
    isBytesLike,

    defaultPath,
    HDNode,
    SigningKey,

    Interface,

    LogDescription,
    TransactionDescription,

    base58,
    base64,

    hexlify,
    isHexString,
    hexConcat,
    hexStripZeros,
    hexValue,
    hexZeroPad,
    hexDataLength,
    hexDataSlice,

    nameprep,
    _toEscapedUtf8String,
    toUtf8Bytes,
    toUtf8CodePoints,
    toUtf8String,
    Utf8ErrorFuncs,

    formatBytes32String,
    parseBytes32String,

    dnsEncode,
    hashMessage,
    namehash,
    isValidName,
    id,

    _TypedDataEncoder,

    getAddress,
    getIcapAddress,
    getContractAddress,
    getCreate2Address,
    isAddress,

    formatEther,
    parseEther,

    formatUnits,
    parseUnits,

    commify,

    computeHmac,
    keccak256,
    ripemd160,
    sha256,
    sha512,

    randomBytes,
    shuffled,

    solidityPack,
    solidityKeccak256,
    soliditySha256,

    splitSignature,
    joinSignature,

    accessListify,
    parseTransaction,
    serializeTransaction,
    TransactionTypes,

    getJsonWalletAddress,

    computeAddress,
    recoverAddress,

    computePublicKey,
    recoverPublicKey,

    verifyMessage,
    verifyTypedData,

    getAccountPath,
    mnemonicToEntropy,
    entropyToMnemonic,
    isValidMnemonic,
    mnemonicToSeed,


    ////////////////////////
    // Enums

    SupportedAlgorithm,

    UnicodeNormalizationForm,
    Utf8ErrorReason,

    ////////////////////////
    // Types

    Bytes,
    BytesLike,
    Hexable,

    AccessList,
    AccessListish,
    UnsignedTransaction,

    CoerceFunc,

    Indexed,

    Mnemonic,

    Deferrable,

    Utf8ErrorFunc,

    ConnectionInfo,
    OnceBlockable,
    OncePollable,
    PollOptions,
    FetchJsonResponse,

    EncryptOptions,
    ProgressCallback
}

