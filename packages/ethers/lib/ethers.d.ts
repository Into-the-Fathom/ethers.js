import { BaseContract, Contract, ContractFactory } from "@ethersfathom/contracts";
import { BigNumber, FixedNumber } from "@ethersfathom/bignumber";
import { Signer, VoidSigner } from "@ethersfathom/abstract-signer";
import { Wallet } from "@ethersfathom/wallet";
import * as constants from "@ethersfathom/constants";
import * as providers from "@ethersfathom/providers";
import { getDefaultProvider } from "@ethersfathom/providers";
import { Wordlist, wordlists } from "@ethersfathom/wordlists";
import * as utils from "./utils";
import { ErrorCode as errors } from "@ethersfathom/logger";
import type { TypedDataDomain, TypedDataField } from "@ethersfathom/abstract-signer";
import { BigNumberish } from "@ethersfathom/bignumber";
import { Bytes, BytesLike, Signature } from "@ethersfathom/bytes";
import { Transaction, UnsignedTransaction } from "@ethersfathom/transactions";
import { version } from "./_version";
declare const logger: utils.Logger;
import { ContractFunction, ContractReceipt, ContractTransaction, Event, EventFilter, Overrides, PayableOverrides, CallOverrides, PopulatedTransaction, ContractInterface } from "@ethersfathom/contracts";
export { Signer, Wallet, VoidSigner, getDefaultProvider, providers, BaseContract, Contract, ContractFactory, BigNumber, FixedNumber, constants, errors, logger, utils, wordlists, version, ContractFunction, ContractReceipt, ContractTransaction, Event, EventFilter, Overrides, PayableOverrides, CallOverrides, PopulatedTransaction, ContractInterface, TypedDataDomain, TypedDataField, BigNumberish, Bytes, BytesLike, Signature, Transaction, UnsignedTransaction, Wordlist };
//# sourceMappingURL=ethers.d.ts.map