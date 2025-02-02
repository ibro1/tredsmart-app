import {
  Button,
  WalletIcon,
  useWallet,
  useWalletModal
} from "/build/_shared/chunk-2YGUMPSF.js";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  init_index_browser_esm
} from "/build/_shared/chunk-224XRCKB.js";
import {
  require_react
} from "/build/_shared/chunk-ZPXNLZE6.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_pqdhqpd7mugw6mwzz56jj63u4m/node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletMultiButton.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/.pnpm/@solana+wallet-adapter-base-ui@0.1.2_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13__xoaee2lwisviivtm42lbcudri4/node_modules/@solana/wallet-adapter-base-ui/lib/esm/useWalletMultiButton.js
var import_react = __toESM(require_react(), 1);
function useWalletMultiButton({ onSelectWallet }) {
  const { connect, connected, connecting, disconnect, disconnecting, publicKey, select, wallet, wallets } = useWallet();
  let buttonState;
  if (connecting) {
    buttonState = "connecting";
  } else if (connected) {
    buttonState = "connected";
  } else if (disconnecting) {
    buttonState = "disconnecting";
  } else if (wallet) {
    buttonState = "has-wallet";
  } else {
    buttonState = "no-wallet";
  }
  const handleConnect = (0, import_react.useCallback)(() => {
    connect().catch(() => {
    });
  }, [connect]);
  const handleDisconnect = (0, import_react.useCallback)(() => {
    disconnect().catch(() => {
    });
  }, [disconnect]);
  const handleSelectWallet = (0, import_react.useCallback)(() => {
    onSelectWallet({ onSelectWallet: select, wallets });
  }, [onSelectWallet, select, wallets]);
  return {
    buttonState,
    onConnect: buttonState === "has-wallet" ? handleConnect : void 0,
    onDisconnect: buttonState !== "disconnecting" && buttonState !== "no-wallet" ? handleDisconnect : void 0,
    onSelectWallet: handleSelectWallet,
    publicKey: publicKey ?? void 0,
    walletIcon: wallet?.adapter.icon,
    walletName: wallet?.adapter.name
  };
}

// node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_pqdhqpd7mugw6mwzz56jj63u4m/node_modules/@solana/wallet-adapter-react-ui/lib/esm/BaseWalletMultiButton.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_pqdhqpd7mugw6mwzz56jj63u4m/node_modules/@solana/wallet-adapter-react-ui/lib/esm/BaseWalletConnectionButton.js
var import_react2 = __toESM(require_react(), 1);
function BaseWalletConnectionButton({ walletIcon, walletName, ...props }) {
  return import_react2.default.createElement(Button, { ...props, className: "wallet-adapter-button-trigger", startIcon: walletIcon && walletName ? import_react2.default.createElement(WalletIcon, { wallet: { adapter: { icon: walletIcon, name: walletName } } }) : void 0 });
}

// node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_pqdhqpd7mugw6mwzz56jj63u4m/node_modules/@solana/wallet-adapter-react-ui/lib/esm/BaseWalletMultiButton.js
function BaseWalletMultiButton({ children, labels, ...props }) {
  const { setVisible: setModalVisible } = useWalletModal();
  const { buttonState, onConnect, onDisconnect, publicKey, walletIcon, walletName } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    }
  });
  const [copied, setCopied] = (0, import_react3.useState)(false);
  const [menuOpen, setMenuOpen] = (0, import_react3.useState)(false);
  const ref = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    const listener = (event) => {
      const node = ref.current;
      if (!node || node.contains(event.target))
        return;
      setMenuOpen(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);
  const content = (0, import_react3.useMemo)(() => {
    if (children) {
      return children;
    } else if (publicKey) {
      const base58 = publicKey.toBase58();
      return base58.slice(0, 4) + ".." + base58.slice(-4);
    } else if (buttonState === "connecting" || buttonState === "has-wallet") {
      return labels[buttonState];
    } else {
      return labels["no-wallet"];
    }
  }, [buttonState, children, labels, publicKey]);
  return import_react3.default.createElement(
    "div",
    { className: "wallet-adapter-dropdown" },
    import_react3.default.createElement(BaseWalletConnectionButton, { ...props, "aria-expanded": menuOpen, style: { pointerEvents: menuOpen ? "none" : "auto", ...props.style }, onClick: () => {
      switch (buttonState) {
        case "no-wallet":
          setModalVisible(true);
          break;
        case "has-wallet":
          if (onConnect) {
            onConnect();
          }
          break;
        case "connected":
          setMenuOpen(true);
          break;
      }
    }, walletIcon, walletName }, content),
    import_react3.default.createElement(
      "ul",
      { "aria-label": "dropdown-list", className: `wallet-adapter-dropdown-list ${menuOpen && "wallet-adapter-dropdown-list-active"}`, ref, role: "menu" },
      publicKey ? import_react3.default.createElement("li", { className: "wallet-adapter-dropdown-list-item", onClick: async () => {
        await navigator.clipboard.writeText(publicKey.toBase58());
        setCopied(true);
        setTimeout(() => setCopied(false), 400);
      }, role: "menuitem" }, copied ? labels["copied"] : labels["copy-address"]) : null,
      import_react3.default.createElement("li", { className: "wallet-adapter-dropdown-list-item", onClick: () => {
        setModalVisible(true);
        setMenuOpen(false);
      }, role: "menuitem" }, labels["change-wallet"]),
      onDisconnect ? import_react3.default.createElement("li", { className: "wallet-adapter-dropdown-list-item", onClick: () => {
        onDisconnect();
        setMenuOpen(false);
      }, role: "menuitem" }, labels["disconnect"]) : null
    )
  );
}

// node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_pqdhqpd7mugw6mwzz56jj63u4m/node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletMultiButton.js
var LABELS = {
  "change-wallet": "Change wallet",
  connecting: "Connecting ...",
  "copy-address": "Copy address",
  copied: "Copied",
  disconnect: "Disconnect",
  "has-wallet": "Connect",
  "no-wallet": "Select Wallet"
};
function WalletMultiButton(props) {
  return import_react4.default.createElement(BaseWalletMultiButton, { ...props, labels: LABELS });
}

// app/lib/solana/utils.ts
init_index_browser_esm();

// node_modules/.pnpm/@solana+spl-token@0.4.12_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-valida_ywzmutcomzmhjcrug3w676ajpe/node_modules/@solana/spl-token/lib/esm/constants.js
init_index_browser_esm();
var TOKEN_PROGRAM_ID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
var TOKEN_2022_PROGRAM_ID = new PublicKey("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");
var ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
var NATIVE_MINT = new PublicKey("So11111111111111111111111111111111111111112");
var NATIVE_MINT_2022 = new PublicKey("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");

// app/lib/solana/utils.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/solana/utils.ts"
  );
  import.meta.hot.lastModified = "1738409028328.369";
}
async function getSolanaBalance(connection, publicKey) {
  try {
    const balance = await connection.getBalance(publicKey);
    return balance / LAMPORTS_PER_SOL;
  } catch (error) {
    console.error("Error getting SOL balance:", error);
    throw error;
  }
}
async function getTokenAccounts(connection, publicKey) {
  try {
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      publicKey,
      {
        programId: TOKEN_PROGRAM_ID
      }
    );
    return tokenAccounts.value.map((account) => {
      const parsedInfo = account.account.data.parsed.info;
      return {
        mint: parsedInfo.mint,
        amount: parsedInfo.tokenAmount.uiAmount,
        decimals: parsedInfo.tokenAmount.decimals,
        address: account.pubkey.toBase58()
      };
    });
  } catch (error) {
    console.error("Error getting token accounts:", error);
    throw error;
  }
}
async function getRecentTransactions(connection, publicKey, limit = 10) {
  try {
    const signatures = await connection.getSignaturesForAddress(publicKey, {
      limit
    });
    const transactions = await Promise.all(
      signatures.map(async (sig) => {
        const tx = await connection.getParsedTransaction(sig.signature);
        return {
          signature: sig.signature,
          timestamp: sig.blockTime ? new Date(sig.blockTime * 1e3) : /* @__PURE__ */ new Date(),
          status: tx?.meta?.err ? "failed" : "success",
          amount: tx?.meta?.postBalances[0] ? (tx.meta.postBalances[0] - tx.meta.preBalances[0]) / LAMPORTS_PER_SOL : 0
        };
      })
    );
    return transactions;
  } catch (error) {
    console.error("Error getting recent transactions:", error);
    throw error;
  }
}
function shortenAddress(address, chars = 4) {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

export {
  WalletMultiButton,
  getSolanaBalance,
  getTokenAccounts,
  getRecentTransactions,
  shortenAddress
};
//# sourceMappingURL=/build/_shared/chunk-EFZPRWDG.js.map
