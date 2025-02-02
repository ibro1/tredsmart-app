import {
  require_react
} from "/build/_shared/chunk-ZPXNLZE6.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13__aw35te5usjpvmt4lyd5da4kgou/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js
var import_react = __toESM(require_react(), 1);
var ConnectionContext = (0, import_react.createContext)({});
function useConnection() {
  return (0, import_react.useContext)(ConnectionContext);
}

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13__aw35te5usjpvmt4lyd5da4kgou/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js
var import_react2 = __toESM(require_react(), 1);
var EMPTY_ARRAY = [];
var DEFAULT_CONTEXT = {
  autoConnect: false,
  connecting: false,
  connected: false,
  disconnecting: false,
  select() {
    logMissingProviderError("call", "select");
  },
  connect() {
    return Promise.reject(logMissingProviderError("call", "connect"));
  },
  disconnect() {
    return Promise.reject(logMissingProviderError("call", "disconnect"));
  },
  sendTransaction() {
    return Promise.reject(logMissingProviderError("call", "sendTransaction"));
  },
  signTransaction() {
    return Promise.reject(logMissingProviderError("call", "signTransaction"));
  },
  signAllTransactions() {
    return Promise.reject(logMissingProviderError("call", "signAllTransactions"));
  },
  signMessage() {
    return Promise.reject(logMissingProviderError("call", "signMessage"));
  },
  signIn() {
    return Promise.reject(logMissingProviderError("call", "signIn"));
  }
};
Object.defineProperty(DEFAULT_CONTEXT, "wallets", {
  get() {
    logMissingProviderError("read", "wallets");
    return EMPTY_ARRAY;
  }
});
Object.defineProperty(DEFAULT_CONTEXT, "wallet", {
  get() {
    logMissingProviderError("read", "wallet");
    return null;
  }
});
Object.defineProperty(DEFAULT_CONTEXT, "publicKey", {
  get() {
    logMissingProviderError("read", "publicKey");
    return null;
  }
});
function logMissingProviderError(action, property) {
  const error = new Error(`You have tried to ${action} "${property}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`);
  console.error(error);
  return error;
}
var WalletContext = (0, import_react2.createContext)(DEFAULT_CONTEXT);
function useWallet() {
  return (0, import_react2.useContext)(WalletContext);
}

// node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_pqdhqpd7mugw6mwzz56jj63u4m/node_modules/@solana/wallet-adapter-react-ui/lib/esm/useWalletModal.js
var import_react3 = __toESM(require_react(), 1);
var DEFAULT_CONTEXT2 = {
  setVisible(_open) {
    console.error(constructMissingProviderErrorMessage("call", "setVisible"));
  },
  visible: false
};
Object.defineProperty(DEFAULT_CONTEXT2, "visible", {
  get() {
    console.error(constructMissingProviderErrorMessage("read", "visible"));
    return false;
  }
});
function constructMissingProviderErrorMessage(action, valueName) {
  return `You have tried to  ${action} "${valueName}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
}
var WalletModalContext = (0, import_react3.createContext)(DEFAULT_CONTEXT2);
function useWalletModal() {
  return (0, import_react3.useContext)(WalletModalContext);
}

// node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_pqdhqpd7mugw6mwzz56jj63u4m/node_modules/@solana/wallet-adapter-react-ui/lib/esm/Button.js
var import_react4 = __toESM(require_react(), 1);
var Button = (props) => {
  return import_react4.default.createElement(
    "button",
    { className: `wallet-adapter-button ${props.className || ""}`, disabled: props.disabled, style: props.style, onClick: props.onClick, tabIndex: props.tabIndex || 0, type: "button" },
    props.startIcon && import_react4.default.createElement("i", { className: "wallet-adapter-button-start-icon" }, props.startIcon),
    props.children,
    props.endIcon && import_react4.default.createElement("i", { className: "wallet-adapter-button-end-icon" }, props.endIcon)
  );
};

// node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_pqdhqpd7mugw6mwzz56jj63u4m/node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletIcon.js
var import_react5 = __toESM(require_react(), 1);
var WalletIcon = ({ wallet, ...props }) => {
  return wallet && import_react5.default.createElement("img", { src: wallet.adapter.icon, alt: `${wallet.adapter.name} icon`, ...props });
};

export {
  ConnectionContext,
  useConnection,
  WalletContext,
  useWallet,
  WalletModalContext,
  useWalletModal,
  Button,
  WalletIcon
};
//# sourceMappingURL=/build/_shared/chunk-2YGUMPSF.js.map
