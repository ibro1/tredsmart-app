// node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/errors.js
var WalletError = class extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message, error) {
    super(message);
    this.error = error;
  }
};
var WalletNotReadyError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletNotReadyError";
  }
};
var WalletLoadError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletLoadError";
  }
};
var WalletConfigError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletConfigError";
  }
};
var WalletConnectionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletConnectionError";
  }
};
var WalletDisconnectedError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletDisconnectedError";
  }
};
var WalletDisconnectionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletDisconnectionError";
  }
};
var WalletAccountError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletAccountError";
  }
};
var WalletPublicKeyError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletPublicKeyError";
  }
};
var WalletNotConnectedError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletNotConnectedError";
  }
};
var WalletSendTransactionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSendTransactionError";
  }
};
var WalletSignTransactionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSignTransactionError";
  }
};
var WalletSignMessageError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSignMessageError";
  }
};
var WalletSignInError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSignInError";
  }
};

export {
  WalletError,
  WalletNotReadyError,
  WalletLoadError,
  WalletConfigError,
  WalletConnectionError,
  WalletDisconnectedError,
  WalletDisconnectionError,
  WalletAccountError,
  WalletPublicKeyError,
  WalletNotConnectedError,
  WalletSendTransactionError,
  WalletSignTransactionError,
  WalletSignMessageError,
  WalletSignInError
};
//# sourceMappingURL=/build/_shared/chunk-LQOSUMUF.js.map
