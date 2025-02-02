import {
  WalletConnectionError,
  WalletError,
  WalletNotConnectedError,
  WalletPublicKeyError,
  WalletSignMessageError,
  WalletSignTransactionError
} from "/build/_shared/chunk-LQOSUMUF.js";
import {
  require_bs58
} from "/build/_shared/chunk-F45K7DGY.js";
import {
  PublicKey,
  Transaction,
  init_index_browser_esm
} from "/build/_shared/chunk-224XRCKB.js";
import {
  require_react
} from "/build/_shared/chunk-ZPXNLZE6.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// node_modules/.pnpm/@fractalwagmi+popup-connection@1.1.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@fractalwagmi/popup-connection/dist/esm/core/types.js
var PopupEvent;
(function(PopupEvent2) {
  PopupEvent2["PROJECT_APPROVED"] = "PROJECT_APPROVED";
  PopupEvent2["HANDSHAKE"] = "HANDSHAKE";
  PopupEvent2["HANDSHAKE_ACK"] = "HANDSHAKE_ACK";
  PopupEvent2["SIGNED_TRANSACTION"] = "SIGNED_TRANSACTION";
  PopupEvent2["SIGNED_PARTIAL_TRANSACTION"] = "SIGNED_PARTIAL_TRANSACTION";
  PopupEvent2["FAILED_TO_SIGN_TRANSACTION"] = "FAILED_TO_SIGN_TRANSACTION";
  PopupEvent2["TRANSACTION_DENIED"] = "TRANSACTION_DENIED";
  PopupEvent2["SOLANA_WALLET_ADAPTER_APPROVED"] = "SOLANA_WALLET_ADAPTER_APPROVED";
  PopupEvent2["SOLANA_WALLET_ADAPTER_DENIED"] = "SOLANA_WALLET_ADAPTER_DENIED";
  PopupEvent2["POPUP_CLOSED"] = "POPUP_CLOSED";
  PopupEvent2["TRANSACTION_SIGNATURE_NEEDED"] = "TRANSACTION_SIGNATURE_NEEDED";
  PopupEvent2["TRANSACTION_SIGNATURE_NEEDED_RESPONSE"] = "TRANSACTION_SIGNATURE_NEEDED_RESPONSE";
  PopupEvent2["AUTH_LOADED"] = "AUTH_LOADED";
  PopupEvent2["MESSAGE_SIGNATURE_NEEDED"] = "MESSAGE_SIGNATURE_NEEDED";
  PopupEvent2["MESSAGE_SIGNATURE_NEEDED_RESPONSE"] = "MESSAGE_SIGNATURE_NEEDED_RESPONSE";
  PopupEvent2["ONRAMP_FULFILLMENT_COMPLETE"] = "ONRAMP_FULFILLMENT_COMPLETE";
  PopupEvent2["ONRAMP_REJECTED"] = "ONRAMP_REJECTED";
})(PopupEvent || (PopupEvent = {}));
var Platform;
(function(Platform2) {
  Platform2["UNKNOWN"] = "UNKNOWN";
  Platform2["REACT_SDK"] = "REACT_SDK";
  Platform2["SOLANA_WALLET_ADAPTER"] = "SOLANA_WALLET_ADAPTER";
})(Platform || (Platform = {}));

// node_modules/.pnpm/@fractalwagmi+popup-connection@1.1.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@fractalwagmi/popup-connection/dist/esm/core/connection.js
var Connection = class {
  constructor(validatedOrigin, targetWindow) {
    this.validatedOrigin = validatedOrigin;
    this.targetWindow = targetWindow;
    this.handlers = /* @__PURE__ */ new Map();
  }
  off(event, callback) {
    const eventCallbacks = this.handlers.get(event);
    eventCallbacks === null || eventCallbacks === void 0 ? void 0 : eventCallbacks.delete(callback);
  }
  on(event, callback) {
    var _a;
    const eventCallbacks = (_a = this.handlers.get(event)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
    eventCallbacks.add(callback);
    this.handlers.set(event, eventCallbacks);
  }
  send({ event, payload }) {
    this.targetWindow.postMessage({
      event,
      payload
    }, this.validatedOrigin);
  }
  runHandlersForEvent(event, payload) {
    const eventCallbacks = this.handlers.get(event);
    if (!eventCallbacks) {
      return;
    }
    for (const callback of eventCallbacks) {
      callback(payload);
    }
  }
  resetHandlers() {
    this.handlers.clear();
  }
  export() {
    return {
      off: this.off.bind(this),
      on: this.on.bind(this),
      send: this.send.bind(this),
      validatedOrigin: this.validatedOrigin
    };
  }
};

// node_modules/.pnpm/@fractalwagmi+popup-connection@1.1.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@fractalwagmi/popup-connection/dist/esm/core/constants.js
var FRACTAL_DOMAIN_HTTPS = "https://fractal.is";
var FRACTAL_DOMAIN_HTTPS_WWW = "https://www.fractal.is";
var DEFAULT_POPUP_WIDTH_PX = 400;
var DEFAULT_POPUP_HEIGHT_PX = 600;

// node_modules/.pnpm/@fractalwagmi+popup-connection@1.1.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@fractalwagmi/popup-connection/dist/esm/core/utils.js
function validateOrigin(origin) {
  return origin === FRACTAL_DOMAIN_HTTPS_WWW || origin === FRACTAL_DOMAIN_HTTPS;
}
var TARGET = "fractal:approval:popup";
var STATIC_POPUP_FEATURES = ["resizable", "scrollbars=1", "status=1"];
function openPopup({ left = 0, scope = window, top = 0, width = DEFAULT_POPUP_HEIGHT_PX, height = DEFAULT_POPUP_HEIGHT_PX, url }) {
  return scope.open(url, TARGET, getPopupFeatures({ height, left, top, width }));
}
function getPopupFeatures({ height, left, top, width }) {
  return [
    "popup",
    `left=${left}`,
    `top=${top}`,
    `width=${width}`,
    `height=${height}`,
    ...STATIC_POPUP_FEATURES
  ].join(",");
}

// node_modules/.pnpm/@fractalwagmi+popup-connection@1.1.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@fractalwagmi/popup-connection/dist/esm/connection-manager.js
var ConnectionManager = class {
  constructor(platform) {
    this.platform = platform;
    this.connection = null;
    this.popupWindow = null;
    this.handleMessage = (e) => {
      var _a, _b;
      if (!validateOrigin(e.origin)) {
        return;
      }
      const validatedOrigin = e.origin;
      if (!this.popupWindow) {
        return;
      }
      if (e.data.event === PopupEvent.HANDSHAKE && !this.connection) {
        if (!this.verifyAndResetNonce((_a = e.data.payload) === null || _a === void 0 ? void 0 : _a.nonce)) {
          return;
        }
        this.popupWindow.postMessage({
          event: PopupEvent.HANDSHAKE_ACK,
          payload: {
            platform: this.platform
          }
        }, validatedOrigin);
        this.connection = new Connection(validatedOrigin, this.popupWindow);
        (_b = this.connectionUpdatedCallback) === null || _b === void 0 ? void 0 : _b.call(this, this.connection);
      }
      if (!this.connection) {
        return;
      }
      this.connection.runHandlersForEvent(e.data.event, e.data.payload);
      if (e.data.event === PopupEvent.POPUP_CLOSED && this.connection) {
        this.resetConnection();
        this.popupWindow = null;
      }
    };
  }
  initialize() {
    window.addEventListener("message", this.handleMessage);
    return this;
  }
  tearDown() {
    window.removeEventListener("message", this.handleMessage);
    this.resetConnection();
    return this;
  }
  async open({ url, widthPx = DEFAULT_POPUP_WIDTH_PX, heightPx = DEFAULT_POPUP_HEIGHT_PX, nonce }) {
    var _a;
    if ((_a = this.popupWindow) === null || _a === void 0 ? void 0 : _a.closed) {
      this.resetConnectionAndPopupWindow();
    }
    if (this.popupWindow) {
      return;
    }
    this.initialize();
    if (nonce) {
      this.nonce = nonce;
    }
    const left = window.screenX + (window.innerWidth - widthPx) / 2;
    const top = window.screenY + (window.innerHeight - heightPx) / 2;
    this.popupWindow = openPopup({
      height: heightPx,
      left,
      top,
      url: typeof url === "string" ? url : void 0,
      width: widthPx
    });
    if (url instanceof Promise) {
      this.setUrl(await url);
    }
  }
  close() {
    if (!this.popupWindow) {
      return;
    }
    this.popupWindow.close();
    this.resetConnectionAndPopupWindow();
  }
  onConnectionUpdated(callback) {
    this.connectionUpdatedCallback = callback;
    return this;
  }
  getConnection() {
    return this.connection;
  }
  setUrl(url) {
    if (!this.popupWindow) {
      return;
    }
    this.popupWindow.location = url;
  }
  resetConnectionAndPopupWindow() {
    this.resetConnection();
    this.popupWindow = null;
  }
  resetConnection() {
    var _a, _b;
    (_a = this.connection) === null || _a === void 0 ? void 0 : _a.resetHandlers();
    this.connection = null;
    (_b = this.connectionUpdatedCallback) === null || _b === void 0 ? void 0 : _b.call(this, this.connection);
  }
  verifyAndResetNonce(uncheckedNonce) {
    if (!this.nonce) {
      return true;
    }
    const result = uncheckedNonce === this.nonce;
    if (result) {
      this.nonce = void 0;
    }
    return result;
  }
};

// node_modules/.pnpm/@fractalwagmi+popup-connection@1.1.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@fractalwagmi/popup-connection/dist/esm/use-popup-connection.js
var import_react = __toESM(require_react(), 1);

// node_modules/.pnpm/@fractalwagmi+popup-connection@1.1.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@fractalwagmi/popup-connection/dist/esm/lib/guards.js
function isObject(value) {
  if (value === null) {
    return false;
  }
  if (typeof value !== "object") {
    return false;
  }
  return true;
}

// node_modules/.pnpm/@fractalwagmi+popup-connection@1.1.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@fractalwagmi/popup-connection/dist/esm/payloads/solana-wallet-adapter-approved.js
function assertPayloadIsSolanaWalletAdapterApproved(payload) {
  if (!isObject(payload)) {
    return false;
  }
  if (!("solanaPublicKey" in payload)) {
    return false;
  }
  if (typeof payload.solanaPublicKey !== "string") {
    return false;
  }
  return true;
}

// node_modules/.pnpm/@fractalwagmi+popup-connection@1.1.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@fractalwagmi/popup-connection/dist/esm/payloads/transaction-signature-needed-response.js
function assertPayloadIsTransactionSignatureNeededResponsePayload(payload) {
  if (!isObject(payload)) {
    return false;
  }
  if (!("signedB58Transactions" in payload)) {
    return false;
  }
  if (!Array.isArray(payload.signedB58Transactions)) {
    return false;
  }
  return payload.signedB58Transactions.every((value) => typeof value === "string");
}

// node_modules/.pnpm/@fractalwagmi+popup-connection@1.1.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@fractalwagmi/popup-connection/dist/esm/payloads/message-signature-needed-response.js
function assertPayloadIsMessageSignatureNeededResponsePayload(payload) {
  if (!isObject(payload)) {
    return false;
  }
  if (!("decodedSignature" in payload)) {
    return false;
  }
  return typeof payload.decodedSignature === "string";
}

// node_modules/.pnpm/@fractalwagmi+solana-wallet-adapter@0.1.1_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0._n6g2znxbatrq6x6buqdvtxurce/node_modules/@fractalwagmi/solana-wallet-adapter/dist/esm/core/fractal-wallet-adapter-impl.js
init_index_browser_esm();
var import_bs58 = __toESM(require_bs58(), 1);

// node_modules/.pnpm/@fractalwagmi+solana-wallet-adapter@0.1.1_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0._n6g2znxbatrq6x6buqdvtxurce/node_modules/@fractalwagmi/solana-wallet-adapter/dist/esm/core/nonce.js
function createNonce() {
  return `${randomString()}${randomString()}${randomString()}`;
}
function randomString() {
  return (Math.random() + 1).toString(36).substring(7);
}

// node_modules/.pnpm/@fractalwagmi+solana-wallet-adapter@0.1.1_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0._n6g2znxbatrq6x6buqdvtxurce/node_modules/@fractalwagmi/solana-wallet-adapter/dist/esm/core/fractal-wallet-adapter-impl.js
var UNKNOWN_ERROR_MESSAGE = "Unknown Error";
var FRACTAL_DOMAIN_HTTPS2 = "https://fractal.is";
var APPROVE_PAGE_URL = `${FRACTAL_DOMAIN_HTTPS2}/wallet-adapter/approve`;
var SIGN_PAGE_URL = `${FRACTAL_DOMAIN_HTTPS2}/wallet-adapter/sign`;
var SIGN_MESSAGE_PAGE_URL = `${FRACTAL_DOMAIN_HTTPS2}/wallet-adapter/sign/message`;
var MIN_POPUP_HEIGHT_PX = DEFAULT_POPUP_HEIGHT_PX;
var MAX_POPUP_WIDTH_PX = 850;
var LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY = "RdxqNYxF";
var FractalWalletAdapterImpl = class {
  constructor() {
    this.popupManager = new ConnectionManager(Platform.SOLANA_WALLET_ADAPTER);
    this.publicKey = null;
    this.connecting = false;
  }
  getPublicKey() {
    return this.publicKey;
  }
  async connect() {
    let resolve;
    let reject;
    const publicKeyInLocalStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY);
    if (publicKeyInLocalStorage) {
      this.publicKey = new PublicKey(publicKeyInLocalStorage);
      return Promise.resolve();
    }
    const nonce = createNonce();
    this.popupManager.open({
      nonce,
      url: `${APPROVE_PAGE_URL}/${nonce}`
    });
    const handleSolanaWalletAdapterApproved = (payload) => {
      if (!assertPayloadIsSolanaWalletAdapterApproved(payload)) {
        reject(new WalletConnectionError(`Malformed payload when setting up connection. Expected { solanaPublicKey: string } but received ${JSON.stringify(payload)}`));
        this.popupManager.close();
        return;
      }
      try {
        this.publicKey = new PublicKey(payload.solanaPublicKey);
        window.localStorage.setItem(LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY, payload.solanaPublicKey);
        resolve();
      } catch (error) {
        const publicKeyError = new WalletPublicKeyError(error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE, error);
        reject(publicKeyError);
      }
      this.popupManager.close();
    };
    const handleExplicitDenialByUser = () => {
      reject(new WalletConnectionError("The user denied the connection."));
      this.popupManager.close();
    };
    const handleClosedByUser = () => {
      reject(new WalletConnectionError("The user denied the connection."));
      this.popupManager.close();
    };
    this.popupManager.onConnectionUpdated((connection) => {
      if (!connection) {
        return;
      }
      connection.on(PopupEvent.SOLANA_WALLET_ADAPTER_APPROVED, handleSolanaWalletAdapterApproved);
      connection.on(PopupEvent.SOLANA_WALLET_ADAPTER_DENIED, handleExplicitDenialByUser);
      connection.on(PopupEvent.POPUP_CLOSED, handleClosedByUser);
    });
    return new Promise((promiseResolver, promiseRejector) => {
      resolve = promiseResolver;
      reject = promiseRejector;
    });
  }
  async disconnect() {
    this.popupManager.tearDown();
    this.publicKey = null;
    window.localStorage.removeItem(LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY);
  }
  async signTransaction(transaction) {
    try {
      this.checkWalletReadiness();
      const result = await this.signTransactions([transaction]);
      return result[0];
    } catch (error) {
      let errorToThrow = error;
      if (!(error instanceof WalletError)) {
        errorToThrow = new WalletSignTransactionError(error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE, error);
      }
      throw errorToThrow;
    }
  }
  async signAllTransactions(transactions) {
    try {
      this.checkWalletReadiness();
      const result = await this.signTransactions(transactions);
      return result;
    } catch (error) {
      let errorToThrow = error;
      if (!(error instanceof WalletError)) {
        errorToThrow = new WalletSignTransactionError(error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE, error);
      }
      throw errorToThrow;
    }
  }
  async signMessage(encodedMessage) {
    const decodedMessage = new TextDecoder().decode(encodedMessage);
    let resolve;
    let reject;
    const handleMessageSignatureNeededResponse = (payload) => {
      if (!assertPayloadIsMessageSignatureNeededResponsePayload(payload)) {
        const error = new WalletSignMessageError(`Malformed payload when signing message. Expected { decodedSignature: string } but received ${JSON.stringify(payload)}`);
        reject(error);
        this.popupManager.close();
        return;
      }
      const encodedSignature = Uint8Array.from(payload.decodedSignature.split(",").map((n) => Number(n)));
      resolve(encodedSignature);
      this.popupManager.close();
    };
    const handleClosedOrDeniedByUser = () => {
      reject(new WalletSignMessageError("The user did not approve the message"));
      this.popupManager.close();
    };
    const handleAuthLoaded = () => {
      var _a;
      const payload = {
        decodedMessage
      };
      (_a = this.popupManager.getConnection()) === null || _a === void 0 ? void 0 : _a.send({
        event: PopupEvent.MESSAGE_SIGNATURE_NEEDED,
        payload
      });
    };
    const nonce = createNonce();
    this.popupManager.open({
      heightPx: Math.max(MIN_POPUP_HEIGHT_PX, Math.floor(window.innerHeight * 0.8)),
      nonce,
      url: `${SIGN_MESSAGE_PAGE_URL}/${nonce}`,
      widthPx: Math.min(MAX_POPUP_WIDTH_PX, Math.floor(window.innerWidth * 0.8))
    });
    this.popupManager.onConnectionUpdated((connection) => {
      if (!connection) {
        return;
      }
      connection.on(PopupEvent.MESSAGE_SIGNATURE_NEEDED_RESPONSE, handleMessageSignatureNeededResponse);
      connection.on(PopupEvent.TRANSACTION_DENIED, handleClosedOrDeniedByUser);
      connection.on(PopupEvent.POPUP_CLOSED, handleClosedOrDeniedByUser);
      connection.on(PopupEvent.AUTH_LOADED, handleAuthLoaded);
    });
    return new Promise((promiseResolver, promiseRejector) => {
      resolve = promiseResolver;
      reject = promiseRejector;
    });
  }
  async signTransactions(transactions) {
    let resolve;
    let reject;
    const handleTransactionSignatureNeededResponse = (payload) => {
      if (!assertPayloadIsTransactionSignatureNeededResponsePayload(payload)) {
        const error = new WalletSignTransactionError(`Malformed payload when signing transactions. Expected { signedB58Transactions: string[] } but received ${JSON.stringify(payload)}`);
        reject(error);
        this.popupManager.close();
        return;
      }
      const signedTransactions = payload.signedB58Transactions.map((signedB58Transaction) => {
        return Transaction.from(import_bs58.default.decode(signedB58Transaction));
      });
      resolve(signedTransactions);
      this.popupManager.close();
    };
    const handleClosedOrDeniedByUser = () => {
      reject(new WalletSignTransactionError("The user did not approve the transaction"));
      this.popupManager.close();
    };
    const handleAuthLoaded = () => {
      var _a;
      const payload = {
        unsignedB58Transactions: transactions.map((t) => import_bs58.default.encode(t.serializeMessage()))
      };
      (_a = this.popupManager.getConnection()) === null || _a === void 0 ? void 0 : _a.send({
        event: PopupEvent.TRANSACTION_SIGNATURE_NEEDED,
        payload
      });
    };
    const nonce = createNonce();
    this.popupManager.open({
      heightPx: Math.max(MIN_POPUP_HEIGHT_PX, Math.floor(window.innerHeight * 0.8)),
      nonce,
      url: `${SIGN_PAGE_URL}/${nonce}`,
      widthPx: Math.min(MAX_POPUP_WIDTH_PX, Math.floor(window.innerWidth * 0.8))
    });
    this.popupManager.onConnectionUpdated((connection) => {
      if (!connection) {
        return;
      }
      connection.on(PopupEvent.TRANSACTION_SIGNATURE_NEEDED_RESPONSE, handleTransactionSignatureNeededResponse);
      connection.on(PopupEvent.TRANSACTION_DENIED, handleClosedOrDeniedByUser);
      connection.on(PopupEvent.POPUP_CLOSED, handleClosedOrDeniedByUser);
      connection.on(PopupEvent.AUTH_LOADED, handleAuthLoaded);
    });
    return new Promise((promiseResolver, promiseRejector) => {
      resolve = promiseResolver;
      reject = promiseRejector;
    });
  }
  checkWalletReadiness() {
    if (this.publicKey === null) {
      throw new WalletNotConnectedError("`publicKey` is null. Did you forget to call `.connect()`?");
    }
  }
};
export {
  FractalWalletAdapterImpl
};
//# sourceMappingURL=/build/_shared/esm-7AK2C6LV.js.map
