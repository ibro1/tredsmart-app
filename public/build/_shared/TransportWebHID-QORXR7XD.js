import {
  require_semver
} from "/build/_shared/chunk-QHBTKWMT.js";
import {
  init_events,
  y
} from "/build/_shared/chunk-3KZTRC5K.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// node_modules/.pnpm/@ledgerhq+errors@6.19.1/node_modules/@ledgerhq/errors/lib-es/helpers.js
function isObject(value) {
  return typeof value === "object";
}
function destroyCircular(from, seen) {
  const to = {};
  seen.push(from);
  for (const key of Object.keys(from)) {
    const value = from[key];
    if (typeof value === "function") {
      continue;
    }
    if (!value || typeof value !== "object") {
      to[key] = value;
      continue;
    }
    if (seen.indexOf(from[key]) === -1) {
      to[key] = destroyCircular(from[key], seen.slice(0));
      continue;
    }
    to[key] = "[Circular]";
  }
  if (typeof from.name === "string") {
    to.name = from.name;
  }
  if (typeof from.message === "string") {
    to.message = from.message;
  }
  if (typeof from.stack === "string") {
    to.stack = from.stack;
  }
  return to;
}
var errorClasses, deserializers, addCustomErrorDeserializer, createCustomErrorClass, deserializeError, serializeError;
var init_helpers = __esm({
  "node_modules/.pnpm/@ledgerhq+errors@6.19.1/node_modules/@ledgerhq/errors/lib-es/helpers.js"() {
    errorClasses = {};
    deserializers = {};
    addCustomErrorDeserializer = (name, deserializer) => {
      deserializers[name] = deserializer;
    };
    createCustomErrorClass = (name) => {
      class CustomErrorClass extends Error {
        constructor(message, fields, options) {
          super(message || name, options);
          Object.setPrototypeOf(this, CustomErrorClass.prototype);
          this.name = name;
          if (fields) {
            for (const k in fields) {
              this[k] = fields[k];
            }
          }
          if (options && isObject(options) && "cause" in options && !("cause" in this)) {
            const cause = options.cause;
            this.cause = cause;
            if ("stack" in cause) {
              this.stack = this.stack + "\nCAUSE: " + cause.stack;
            }
          }
        }
      }
      errorClasses[name] = CustomErrorClass;
      return CustomErrorClass;
    };
    deserializeError = (object) => {
      if (object && typeof object === "object") {
        try {
          if (typeof object.message === "string") {
            const msg = JSON.parse(object.message);
            if (msg.message && msg.name) {
              object = msg;
            }
          }
        } catch (e) {
        }
        let error;
        if (typeof object.name === "string") {
          const { name } = object;
          const des = deserializers[name];
          if (des) {
            error = des(object);
          } else {
            let constructor = name === "Error" ? Error : errorClasses[name];
            if (!constructor) {
              console.warn("deserializing an unknown class '" + name + "'");
              constructor = createCustomErrorClass(name);
            }
            error = Object.create(constructor.prototype);
            try {
              for (const prop in object) {
                if (object.hasOwnProperty(prop)) {
                  error[prop] = object[prop];
                }
              }
            } catch (e) {
            }
          }
        } else {
          if (typeof object.message === "string") {
            error = new Error(object.message);
          }
        }
        if (error && !error.stack && Error.captureStackTrace) {
          Error.captureStackTrace(error, deserializeError);
        }
        return error;
      }
      return new Error(String(object));
    };
    serializeError = (value) => {
      if (!value)
        return value;
      if (typeof value === "object") {
        return destroyCircular(value, []);
      }
      if (typeof value === "function") {
        return `[Function: ${value.name || "anonymous"}]`;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/@ledgerhq+errors@6.19.1/node_modules/@ledgerhq/errors/lib-es/index.js
var lib_es_exports = {};
__export(lib_es_exports, {
  AccountAwaitingSendPendingOperations: () => AccountAwaitingSendPendingOperations,
  AccountNameRequiredError: () => AccountNameRequiredError,
  AccountNotSupported: () => AccountNotSupported,
  AmountRequired: () => AmountRequired,
  BluetoothRequired: () => BluetoothRequired,
  BtcUnmatchedApp: () => BtcUnmatchedApp,
  CantOpenDevice: () => CantOpenDevice,
  CantScanQRCode: () => CantScanQRCode,
  CashAddrNotSupported: () => CashAddrNotSupported,
  ClaimRewardsFeesWarning: () => ClaimRewardsFeesWarning,
  CurrencyNotSupported: () => CurrencyNotSupported,
  DBNotReset: () => DBNotReset,
  DBWrongPassword: () => DBWrongPassword,
  DeviceAppVerifyNotSupported: () => DeviceAppVerifyNotSupported,
  DeviceExtractOnboardingStateError: () => DeviceExtractOnboardingStateError,
  DeviceGenuineSocketEarlyClose: () => DeviceGenuineSocketEarlyClose,
  DeviceHalted: () => DeviceHalted,
  DeviceInOSUExpected: () => DeviceInOSUExpected,
  DeviceNameInvalid: () => DeviceNameInvalid,
  DeviceNeedsRestart: () => DeviceNeedsRestart,
  DeviceNotGenuineError: () => DeviceNotGenuineError,
  DeviceOnDashboardExpected: () => DeviceOnDashboardExpected,
  DeviceOnDashboardUnexpected: () => DeviceOnDashboardUnexpected,
  DeviceOnboardingStatePollingError: () => DeviceOnboardingStatePollingError,
  DeviceShouldStayInApp: () => DeviceShouldStayInApp,
  DeviceSocketFail: () => DeviceSocketFail,
  DeviceSocketNoBulkStatus: () => DeviceSocketNoBulkStatus,
  DisabledTransactionBroadcastError: () => DisabledTransactionBroadcastError,
  DisconnectedDevice: () => DisconnectedDevice,
  DisconnectedDeviceDuringOperation: () => DisconnectedDeviceDuringOperation,
  DustLimit: () => DustLimit,
  ETHAddressNonEIP: () => ETHAddressNonEIP,
  EnpointConfigError: () => EnpointConfigError,
  EthAppPleaseEnableContractData: () => EthAppPleaseEnableContractData,
  ExpertModeRequired: () => ExpertModeRequired,
  FeeEstimationFailed: () => FeeEstimationFailed,
  FeeNotLoaded: () => FeeNotLoaded,
  FeeNotLoadedSwap: () => FeeNotLoadedSwap,
  FeeRequired: () => FeeRequired,
  FeeTooHigh: () => FeeTooHigh,
  FirmwareNotRecognized: () => FirmwareNotRecognized,
  FirmwareOrAppUpdateRequired: () => FirmwareOrAppUpdateRequired,
  GasLessThanEstimate: () => GasLessThanEstimate,
  GenuineCheckFailed: () => GenuineCheckFailed,
  HardResetFail: () => HardResetFail,
  HwTransportError: () => HwTransportError,
  HwTransportErrorType: () => HwTransportErrorType,
  InvalidAddress: () => InvalidAddress,
  InvalidAddressBecauseDestinationIsAlsoSource: () => InvalidAddressBecauseDestinationIsAlsoSource,
  InvalidNonce: () => InvalidNonce,
  InvalidXRPTag: () => InvalidXRPTag,
  LanguageNotFound: () => LanguageNotFound,
  LatestMCUInstalledError: () => LatestMCUInstalledError,
  LedgerAPI4xx: () => LedgerAPI4xx,
  LedgerAPI5xx: () => LedgerAPI5xx,
  LedgerAPIError: () => LedgerAPIError,
  LedgerAPIErrorWithMessage: () => LedgerAPIErrorWithMessage,
  LedgerAPINotAvailable: () => LedgerAPINotAvailable,
  LockedDeviceError: () => LockedDeviceError,
  MCUNotGenuineToDashboard: () => MCUNotGenuineToDashboard,
  ManagerAppAlreadyInstalledError: () => ManagerAppAlreadyInstalledError,
  ManagerAppDepInstallRequired: () => ManagerAppDepInstallRequired,
  ManagerAppDepUninstallRequired: () => ManagerAppDepUninstallRequired,
  ManagerAppRelyOnBTCError: () => ManagerAppRelyOnBTCError,
  ManagerDeviceLockedError: () => ManagerDeviceLockedError,
  ManagerFirmwareNotEnoughSpaceError: () => ManagerFirmwareNotEnoughSpaceError,
  ManagerNotEnoughSpaceError: () => ManagerNotEnoughSpaceError,
  ManagerUninstallBTCDep: () => ManagerUninstallBTCDep,
  MaxFeeTooLow: () => MaxFeeTooLow,
  MaybeKeepTronAccountAlive: () => MaybeKeepTronAccountAlive,
  NetworkDown: () => NetworkDown,
  NetworkError: () => NetworkError,
  NoAccessToCamera: () => NoAccessToCamera,
  NoAddressesFound: () => NoAddressesFound,
  NoDBPathGiven: () => NoDBPathGiven,
  NotEnoughBalance: () => NotEnoughBalance,
  NotEnoughBalanceBecauseDestinationNotCreated: () => NotEnoughBalanceBecauseDestinationNotCreated,
  NotEnoughBalanceInParentAccount: () => NotEnoughBalanceInParentAccount,
  NotEnoughBalanceSwap: () => NotEnoughBalanceSwap,
  NotEnoughBalanceToDelegate: () => NotEnoughBalanceToDelegate,
  NotEnoughGas: () => NotEnoughGas,
  NotEnoughGasSwap: () => NotEnoughGasSwap,
  NotEnoughSpendableBalance: () => NotEnoughSpendableBalance,
  NotSupportedLegacyAddress: () => NotSupportedLegacyAddress,
  OpReturnDataSizeLimit: () => OpReturnDataSizeLimit,
  PairingFailed: () => PairingFailed,
  PasswordIncorrectError: () => PasswordIncorrectError,
  PasswordsDontMatchError: () => PasswordsDontMatchError,
  PeerRemovedPairing: () => PeerRemovedPairing,
  PendingOperation: () => PendingOperation,
  PinNotSet: () => PinNotSet,
  PriorityFeeHigherThanMaxFee: () => PriorityFeeHigherThanMaxFee,
  PriorityFeeTooHigh: () => PriorityFeeTooHigh,
  PriorityFeeTooLow: () => PriorityFeeTooLow,
  RecipientRequired: () => RecipientRequired,
  RecommendSubAccountsToEmpty: () => RecommendSubAccountsToEmpty,
  RecommendUndelegation: () => RecommendUndelegation,
  ReplacementTransactionUnderpriced: () => ReplacementTransactionUnderpriced,
  SequenceNumberError: () => SequenceNumberError,
  StatusCodes: () => StatusCodes,
  SyncError: () => SyncError,
  TimeoutTagged: () => TimeoutTagged,
  TransactionHasBeenValidatedError: () => TransactionHasBeenValidatedError,
  TransportError: () => TransportError,
  TransportExchangeTimeoutError: () => TransportExchangeTimeoutError,
  TransportInterfaceNotAvailable: () => TransportInterfaceNotAvailable,
  TransportOpenUserCancelled: () => TransportOpenUserCancelled,
  TransportRaceCondition: () => TransportRaceCondition,
  TransportStatusError: () => TransportStatusError,
  TransportWebUSBGestureRequired: () => TransportWebUSBGestureRequired,
  TronEmptyAccount: () => TronEmptyAccount,
  UnavailableTezosOriginatedAccountReceive: () => UnavailableTezosOriginatedAccountReceive,
  UnavailableTezosOriginatedAccountSend: () => UnavailableTezosOriginatedAccountSend,
  UnexpectedBootloader: () => UnexpectedBootloader,
  UnknownMCU: () => UnknownMCU,
  UnresponsiveDeviceError: () => UnresponsiveDeviceError,
  UpdateFetchFileFail: () => UpdateFetchFileFail,
  UpdateIncorrectHash: () => UpdateIncorrectHash,
  UpdateIncorrectSig: () => UpdateIncorrectSig,
  UpdateYourApp: () => UpdateYourApp,
  UserRefusedAddress: () => UserRefusedAddress,
  UserRefusedAllowManager: () => UserRefusedAllowManager,
  UserRefusedDeviceNameChange: () => UserRefusedDeviceNameChange,
  UserRefusedFirmwareUpdate: () => UserRefusedFirmwareUpdate,
  UserRefusedOnDevice: () => UserRefusedOnDevice,
  WebsocketConnectionError: () => WebsocketConnectionError,
  WebsocketConnectionFailed: () => WebsocketConnectionFailed,
  WrongAppForCurrency: () => WrongAppForCurrency,
  WrongDeviceForAccount: () => WrongDeviceForAccount,
  WrongDeviceForAccountPayout: () => WrongDeviceForAccountPayout,
  WrongDeviceForAccountRefund: () => WrongDeviceForAccountRefund,
  addCustomErrorDeserializer: () => addCustomErrorDeserializer,
  createCustomErrorClass: () => createCustomErrorClass,
  deserializeError: () => deserializeError,
  getAltStatusMessage: () => getAltStatusMessage,
  serializeError: () => serializeError
});
function getAltStatusMessage(code) {
  switch (code) {
    case 26368:
      return "Incorrect length";
    case 26624:
      return "Missing critical parameter";
    case 27010:
      return "Security not satisfied (dongle locked or have invalid access rights)";
    case 27013:
      return "Condition of use not satisfied (denied by the user?)";
    case 27264:
      return "Invalid data received";
    case 27392:
      return "Invalid parameter received";
    case 21781:
      return "Locked device";
  }
  if (28416 <= code && code <= 28671) {
    return "Internal error, please report";
  }
}
var AccountNameRequiredError, AccountNotSupported, AccountAwaitingSendPendingOperations, AmountRequired, BluetoothRequired, BtcUnmatchedApp, CantOpenDevice, CashAddrNotSupported, ClaimRewardsFeesWarning, CurrencyNotSupported, DeviceAppVerifyNotSupported, DeviceGenuineSocketEarlyClose, DeviceNotGenuineError, DeviceOnDashboardExpected, DeviceOnDashboardUnexpected, DeviceInOSUExpected, DeviceHalted, DeviceNameInvalid, DeviceSocketFail, DeviceSocketNoBulkStatus, DeviceNeedsRestart, UnresponsiveDeviceError, DisconnectedDevice, DisconnectedDeviceDuringOperation, DeviceExtractOnboardingStateError, DeviceOnboardingStatePollingError, EnpointConfigError, EthAppPleaseEnableContractData, FeeEstimationFailed, FirmwareNotRecognized, HardResetFail, InvalidXRPTag, InvalidAddress, InvalidNonce, InvalidAddressBecauseDestinationIsAlsoSource, LatestMCUInstalledError, UnknownMCU, LedgerAPIError, LedgerAPIErrorWithMessage, LedgerAPINotAvailable, ManagerAppAlreadyInstalledError, ManagerAppRelyOnBTCError, ManagerAppDepInstallRequired, ManagerAppDepUninstallRequired, ManagerDeviceLockedError, ManagerFirmwareNotEnoughSpaceError, ManagerNotEnoughSpaceError, ManagerUninstallBTCDep, NetworkDown, NetworkError, NoAddressesFound, NotEnoughBalance, NotEnoughBalanceSwap, NotEnoughBalanceToDelegate, NotEnoughBalanceInParentAccount, NotEnoughSpendableBalance, NotEnoughBalanceBecauseDestinationNotCreated, NoAccessToCamera, NotEnoughGas, NotEnoughGasSwap, TronEmptyAccount, MaybeKeepTronAccountAlive, NotSupportedLegacyAddress, GasLessThanEstimate, PriorityFeeTooLow, PriorityFeeTooHigh, PriorityFeeHigherThanMaxFee, MaxFeeTooLow, PasswordsDontMatchError, PasswordIncorrectError, RecommendSubAccountsToEmpty, RecommendUndelegation, TimeoutTagged, UnexpectedBootloader, MCUNotGenuineToDashboard, RecipientRequired, UnavailableTezosOriginatedAccountReceive, UnavailableTezosOriginatedAccountSend, UpdateFetchFileFail, UpdateIncorrectHash, UpdateIncorrectSig, UpdateYourApp, UserRefusedDeviceNameChange, UserRefusedAddress, UserRefusedFirmwareUpdate, UserRefusedAllowManager, UserRefusedOnDevice, PinNotSet, ExpertModeRequired, TransportOpenUserCancelled, TransportInterfaceNotAvailable, TransportRaceCondition, TransportWebUSBGestureRequired, TransactionHasBeenValidatedError, TransportExchangeTimeoutError, DeviceShouldStayInApp, WebsocketConnectionError, WebsocketConnectionFailed, WrongDeviceForAccount, WrongDeviceForAccountPayout, WrongDeviceForAccountRefund, WrongAppForCurrency, ETHAddressNonEIP, CantScanQRCode, FeeNotLoaded, FeeNotLoadedSwap, FeeRequired, FeeTooHigh, PendingOperation, SyncError, PairingFailed, PeerRemovedPairing, GenuineCheckFailed, LedgerAPI4xx, LedgerAPI5xx, FirmwareOrAppUpdateRequired, ReplacementTransactionUnderpriced, OpReturnDataSizeLimit, DustLimit, LanguageNotFound, NoDBPathGiven, DBWrongPassword, DBNotReset, SequenceNumberError, DisabledTransactionBroadcastError, HwTransportErrorType, HwTransportError, TransportError, StatusCodes, TransportStatusError, LockedDeviceError;
var init_lib_es = __esm({
  "node_modules/.pnpm/@ledgerhq+errors@6.19.1/node_modules/@ledgerhq/errors/lib-es/index.js"() {
    init_helpers();
    AccountNameRequiredError = createCustomErrorClass("AccountNameRequired");
    AccountNotSupported = createCustomErrorClass("AccountNotSupported");
    AccountAwaitingSendPendingOperations = createCustomErrorClass("AccountAwaitingSendPendingOperations");
    AmountRequired = createCustomErrorClass("AmountRequired");
    BluetoothRequired = createCustomErrorClass("BluetoothRequired");
    BtcUnmatchedApp = createCustomErrorClass("BtcUnmatchedApp");
    CantOpenDevice = createCustomErrorClass("CantOpenDevice");
    CashAddrNotSupported = createCustomErrorClass("CashAddrNotSupported");
    ClaimRewardsFeesWarning = createCustomErrorClass("ClaimRewardsFeesWarning");
    CurrencyNotSupported = createCustomErrorClass("CurrencyNotSupported");
    DeviceAppVerifyNotSupported = createCustomErrorClass("DeviceAppVerifyNotSupported");
    DeviceGenuineSocketEarlyClose = createCustomErrorClass("DeviceGenuineSocketEarlyClose");
    DeviceNotGenuineError = createCustomErrorClass("DeviceNotGenuine");
    DeviceOnDashboardExpected = createCustomErrorClass("DeviceOnDashboardExpected");
    DeviceOnDashboardUnexpected = createCustomErrorClass("DeviceOnDashboardUnexpected");
    DeviceInOSUExpected = createCustomErrorClass("DeviceInOSUExpected");
    DeviceHalted = createCustomErrorClass("DeviceHalted");
    DeviceNameInvalid = createCustomErrorClass("DeviceNameInvalid");
    DeviceSocketFail = createCustomErrorClass("DeviceSocketFail");
    DeviceSocketNoBulkStatus = createCustomErrorClass("DeviceSocketNoBulkStatus");
    DeviceNeedsRestart = createCustomErrorClass("DeviceSocketNoBulkStatus");
    UnresponsiveDeviceError = createCustomErrorClass("UnresponsiveDeviceError");
    DisconnectedDevice = createCustomErrorClass("DisconnectedDevice");
    DisconnectedDeviceDuringOperation = createCustomErrorClass("DisconnectedDeviceDuringOperation");
    DeviceExtractOnboardingStateError = createCustomErrorClass("DeviceExtractOnboardingStateError");
    DeviceOnboardingStatePollingError = createCustomErrorClass("DeviceOnboardingStatePollingError");
    EnpointConfigError = createCustomErrorClass("EnpointConfig");
    EthAppPleaseEnableContractData = createCustomErrorClass("EthAppPleaseEnableContractData");
    FeeEstimationFailed = createCustomErrorClass("FeeEstimationFailed");
    FirmwareNotRecognized = createCustomErrorClass("FirmwareNotRecognized");
    HardResetFail = createCustomErrorClass("HardResetFail");
    InvalidXRPTag = createCustomErrorClass("InvalidXRPTag");
    InvalidAddress = createCustomErrorClass("InvalidAddress");
    InvalidNonce = createCustomErrorClass("InvalidNonce");
    InvalidAddressBecauseDestinationIsAlsoSource = createCustomErrorClass("InvalidAddressBecauseDestinationIsAlsoSource");
    LatestMCUInstalledError = createCustomErrorClass("LatestMCUInstalledError");
    UnknownMCU = createCustomErrorClass("UnknownMCU");
    LedgerAPIError = createCustomErrorClass("LedgerAPIError");
    LedgerAPIErrorWithMessage = createCustomErrorClass("LedgerAPIErrorWithMessage");
    LedgerAPINotAvailable = createCustomErrorClass("LedgerAPINotAvailable");
    ManagerAppAlreadyInstalledError = createCustomErrorClass("ManagerAppAlreadyInstalled");
    ManagerAppRelyOnBTCError = createCustomErrorClass("ManagerAppRelyOnBTC");
    ManagerAppDepInstallRequired = createCustomErrorClass("ManagerAppDepInstallRequired");
    ManagerAppDepUninstallRequired = createCustomErrorClass("ManagerAppDepUninstallRequired");
    ManagerDeviceLockedError = createCustomErrorClass("ManagerDeviceLocked");
    ManagerFirmwareNotEnoughSpaceError = createCustomErrorClass("ManagerFirmwareNotEnoughSpace");
    ManagerNotEnoughSpaceError = createCustomErrorClass("ManagerNotEnoughSpace");
    ManagerUninstallBTCDep = createCustomErrorClass("ManagerUninstallBTCDep");
    NetworkDown = createCustomErrorClass("NetworkDown");
    NetworkError = createCustomErrorClass("NetworkError");
    NoAddressesFound = createCustomErrorClass("NoAddressesFound");
    NotEnoughBalance = createCustomErrorClass("NotEnoughBalance");
    NotEnoughBalanceSwap = createCustomErrorClass("NotEnoughBalanceSwap");
    NotEnoughBalanceToDelegate = createCustomErrorClass("NotEnoughBalanceToDelegate");
    NotEnoughBalanceInParentAccount = createCustomErrorClass("NotEnoughBalanceInParentAccount");
    NotEnoughSpendableBalance = createCustomErrorClass("NotEnoughSpendableBalance");
    NotEnoughBalanceBecauseDestinationNotCreated = createCustomErrorClass("NotEnoughBalanceBecauseDestinationNotCreated");
    NoAccessToCamera = createCustomErrorClass("NoAccessToCamera");
    NotEnoughGas = createCustomErrorClass("NotEnoughGas");
    NotEnoughGasSwap = createCustomErrorClass("NotEnoughGasSwap");
    TronEmptyAccount = createCustomErrorClass("TronEmptyAccount");
    MaybeKeepTronAccountAlive = createCustomErrorClass("MaybeKeepTronAccountAlive");
    NotSupportedLegacyAddress = createCustomErrorClass("NotSupportedLegacyAddress");
    GasLessThanEstimate = createCustomErrorClass("GasLessThanEstimate");
    PriorityFeeTooLow = createCustomErrorClass("PriorityFeeTooLow");
    PriorityFeeTooHigh = createCustomErrorClass("PriorityFeeTooHigh");
    PriorityFeeHigherThanMaxFee = createCustomErrorClass("PriorityFeeHigherThanMaxFee");
    MaxFeeTooLow = createCustomErrorClass("MaxFeeTooLow");
    PasswordsDontMatchError = createCustomErrorClass("PasswordsDontMatch");
    PasswordIncorrectError = createCustomErrorClass("PasswordIncorrect");
    RecommendSubAccountsToEmpty = createCustomErrorClass("RecommendSubAccountsToEmpty");
    RecommendUndelegation = createCustomErrorClass("RecommendUndelegation");
    TimeoutTagged = createCustomErrorClass("TimeoutTagged");
    UnexpectedBootloader = createCustomErrorClass("UnexpectedBootloader");
    MCUNotGenuineToDashboard = createCustomErrorClass("MCUNotGenuineToDashboard");
    RecipientRequired = createCustomErrorClass("RecipientRequired");
    UnavailableTezosOriginatedAccountReceive = createCustomErrorClass("UnavailableTezosOriginatedAccountReceive");
    UnavailableTezosOriginatedAccountSend = createCustomErrorClass("UnavailableTezosOriginatedAccountSend");
    UpdateFetchFileFail = createCustomErrorClass("UpdateFetchFileFail");
    UpdateIncorrectHash = createCustomErrorClass("UpdateIncorrectHash");
    UpdateIncorrectSig = createCustomErrorClass("UpdateIncorrectSig");
    UpdateYourApp = createCustomErrorClass("UpdateYourApp");
    UserRefusedDeviceNameChange = createCustomErrorClass("UserRefusedDeviceNameChange");
    UserRefusedAddress = createCustomErrorClass("UserRefusedAddress");
    UserRefusedFirmwareUpdate = createCustomErrorClass("UserRefusedFirmwareUpdate");
    UserRefusedAllowManager = createCustomErrorClass("UserRefusedAllowManager");
    UserRefusedOnDevice = createCustomErrorClass("UserRefusedOnDevice");
    PinNotSet = createCustomErrorClass("PinNotSet");
    ExpertModeRequired = createCustomErrorClass("ExpertModeRequired");
    TransportOpenUserCancelled = createCustomErrorClass("TransportOpenUserCancelled");
    TransportInterfaceNotAvailable = createCustomErrorClass("TransportInterfaceNotAvailable");
    TransportRaceCondition = createCustomErrorClass("TransportRaceCondition");
    TransportWebUSBGestureRequired = createCustomErrorClass("TransportWebUSBGestureRequired");
    TransactionHasBeenValidatedError = createCustomErrorClass("TransactionHasBeenValidatedError");
    TransportExchangeTimeoutError = createCustomErrorClass("TransportExchangeTimeoutError");
    DeviceShouldStayInApp = createCustomErrorClass("DeviceShouldStayInApp");
    WebsocketConnectionError = createCustomErrorClass("WebsocketConnectionError");
    WebsocketConnectionFailed = createCustomErrorClass("WebsocketConnectionFailed");
    WrongDeviceForAccount = createCustomErrorClass("WrongDeviceForAccount");
    WrongDeviceForAccountPayout = createCustomErrorClass("WrongDeviceForAccountPayout");
    WrongDeviceForAccountRefund = createCustomErrorClass("WrongDeviceForAccountRefund");
    WrongAppForCurrency = createCustomErrorClass("WrongAppForCurrency");
    ETHAddressNonEIP = createCustomErrorClass("ETHAddressNonEIP");
    CantScanQRCode = createCustomErrorClass("CantScanQRCode");
    FeeNotLoaded = createCustomErrorClass("FeeNotLoaded");
    FeeNotLoadedSwap = createCustomErrorClass("FeeNotLoadedSwap");
    FeeRequired = createCustomErrorClass("FeeRequired");
    FeeTooHigh = createCustomErrorClass("FeeTooHigh");
    PendingOperation = createCustomErrorClass("PendingOperation");
    SyncError = createCustomErrorClass("SyncError");
    PairingFailed = createCustomErrorClass("PairingFailed");
    PeerRemovedPairing = createCustomErrorClass("PeerRemovedPairing");
    GenuineCheckFailed = createCustomErrorClass("GenuineCheckFailed");
    LedgerAPI4xx = createCustomErrorClass("LedgerAPI4xx");
    LedgerAPI5xx = createCustomErrorClass("LedgerAPI5xx");
    FirmwareOrAppUpdateRequired = createCustomErrorClass("FirmwareOrAppUpdateRequired");
    ReplacementTransactionUnderpriced = createCustomErrorClass("ReplacementTransactionUnderpriced");
    OpReturnDataSizeLimit = createCustomErrorClass("OpReturnSizeLimit");
    DustLimit = createCustomErrorClass("DustLimit");
    LanguageNotFound = createCustomErrorClass("LanguageNotFound");
    NoDBPathGiven = createCustomErrorClass("NoDBPathGiven");
    DBWrongPassword = createCustomErrorClass("DBWrongPassword");
    DBNotReset = createCustomErrorClass("DBNotReset");
    SequenceNumberError = createCustomErrorClass("SequenceNumberError");
    DisabledTransactionBroadcastError = createCustomErrorClass("DisabledTransactionBroadcastError");
    (function(HwTransportErrorType2) {
      HwTransportErrorType2["Unknown"] = "Unknown";
      HwTransportErrorType2["LocationServicesDisabled"] = "LocationServicesDisabled";
      HwTransportErrorType2["LocationServicesUnauthorized"] = "LocationServicesUnauthorized";
      HwTransportErrorType2["BluetoothScanStartFailed"] = "BluetoothScanStartFailed";
    })(HwTransportErrorType || (HwTransportErrorType = {}));
    HwTransportError = class extends Error {
      constructor(type, message) {
        super(message);
        this.name = "HwTransportError";
        this.type = type;
        Object.setPrototypeOf(this, HwTransportError.prototype);
      }
    };
    TransportError = class extends Error {
      constructor(message, id2) {
        const name = "TransportError";
        super(message || name);
        this.name = name;
        this.message = message;
        this.stack = new Error(message).stack;
        this.id = id2;
      }
    };
    addCustomErrorDeserializer("TransportError", (e) => new TransportError(e.message, e.id));
    StatusCodes = {
      ACCESS_CONDITION_NOT_FULFILLED: 38916,
      ALGORITHM_NOT_SUPPORTED: 38020,
      CLA_NOT_SUPPORTED: 28160,
      CODE_BLOCKED: 38976,
      CODE_NOT_INITIALIZED: 38914,
      COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 27009,
      CONDITIONS_OF_USE_NOT_SATISFIED: 27013,
      CONTRADICTION_INVALIDATION: 38928,
      CONTRADICTION_SECRET_CODE_STATUS: 38920,
      DEVICE_IN_RECOVERY_MODE: 26159,
      CUSTOM_IMAGE_EMPTY: 26158,
      FILE_ALREADY_EXISTS: 27273,
      FILE_NOT_FOUND: 37892,
      GP_AUTH_FAILED: 25344,
      HALTED: 28586,
      INCONSISTENT_FILE: 37896,
      INCORRECT_DATA: 27264,
      INCORRECT_LENGTH: 26368,
      INCORRECT_P1_P2: 27392,
      INS_NOT_SUPPORTED: 27904,
      DEVICE_NOT_ONBOARDED: 27911,
      DEVICE_NOT_ONBOARDED_2: 26129,
      INVALID_KCV: 38021,
      INVALID_OFFSET: 37890,
      LICENSING: 28482,
      LOCKED_DEVICE: 21781,
      MAX_VALUE_REACHED: 38992,
      MEMORY_PROBLEM: 37440,
      MISSING_CRITICAL_PARAMETER: 26624,
      NO_EF_SELECTED: 37888,
      NOT_ENOUGH_MEMORY_SPACE: 27268,
      OK: 36864,
      PIN_REMAINING_ATTEMPTS: 25536,
      REFERENCED_DATA_NOT_FOUND: 27272,
      SECURITY_STATUS_NOT_SATISFIED: 27010,
      TECHNICAL_PROBLEM: 28416,
      UNKNOWN_APDU: 27906,
      USER_REFUSED_ON_DEVICE: 21761,
      NOT_ENOUGH_SPACE: 20738,
      APP_NOT_FOUND_OR_INVALID_CONTEXT: 20771,
      INVALID_APP_NAME_LENGTH: 26378,
      GEN_AES_KEY_FAILED: 21529,
      INTERNAL_CRYPTO_OPERATION_FAILED: 21530,
      INTERNAL_COMPUTE_AES_CMAC_FAILED: 21531,
      ENCRYPT_APP_STORAGE_FAILED: 21532,
      INVALID_BACKUP_STATE: 26178,
      PIN_NOT_SET: 21762,
      INVALID_BACKUP_LENGTH: 26419,
      INVALID_RESTORE_STATE: 26179,
      INVALID_CHUNK_LENGTH: 26420,
      INVALID_BACKUP_HEADER: 26698,
      // Not documented:
      TRUSTCHAIN_WRONG_SEED: 45063
    };
    TransportStatusError = class extends Error {
      /**
       * @param statusCode The error status code coming from a Transport implementation
       * @param options containing:
       *  - canBeMappedToChildError: enable the mapping of TransportStatusError to an error extending/inheriting from it
       *  . Ex: LockedDeviceError. Default to true.
       */
      constructor(statusCode, { canBeMappedToChildError = true } = {}) {
        const statusText = Object.keys(StatusCodes).find((k) => StatusCodes[k] === statusCode) || "UNKNOWN_ERROR";
        const smsg = getAltStatusMessage(statusCode) || statusText;
        const statusCodeStr = statusCode.toString(16);
        const message = `Ledger device: ${smsg} (0x${statusCodeStr})`;
        super(message);
        this.name = "TransportStatusError";
        this.statusCode = statusCode;
        this.statusText = statusText;
        Object.setPrototypeOf(this, TransportStatusError.prototype);
        if (canBeMappedToChildError && statusCode === StatusCodes.LOCKED_DEVICE) {
          return new LockedDeviceError(message);
        }
      }
    };
    LockedDeviceError = class extends TransportStatusError {
      constructor(message) {
        super(StatusCodes.LOCKED_DEVICE, { canBeMappedToChildError: false });
        if (message) {
          this.message = message;
        }
        this.name = "LockedDeviceError";
        Object.setPrototypeOf(this, LockedDeviceError.prototype);
      }
    };
    addCustomErrorDeserializer("TransportStatusError", (e) => new TransportStatusError(e.statusCode));
  }
});

// node_modules/.pnpm/@ledgerhq+devices@6.27.1/node_modules/@ledgerhq/devices/lib/hid-framing.js
var require_hid_framing = __commonJS({
  "node_modules/.pnpm/@ledgerhq+devices@6.27.1/node_modules/@ledgerhq/devices/lib/hid-framing.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var errors_1 = (init_lib_es(), __toCommonJS(lib_es_exports));
    var Tag = 5;
    function asUInt16BE(value) {
      var b = Buffer.alloc(2);
      b.writeUInt16BE(value, 0);
      return b;
    }
    var initialAcc = {
      data: Buffer.alloc(0),
      dataLength: 0,
      sequence: 0
    };
    var createHIDframing = function(channel, packetSize) {
      return {
        makeBlocks: function(apdu) {
          var data = Buffer.concat([asUInt16BE(apdu.length), apdu]);
          var blockSize = packetSize - 5;
          var nbBlocks = Math.ceil(data.length / blockSize);
          data = Buffer.concat([
            data,
            Buffer.alloc(nbBlocks * blockSize - data.length + 1).fill(0)
          ]);
          var blocks = [];
          for (var i = 0; i < nbBlocks; i++) {
            var head = Buffer.alloc(5);
            head.writeUInt16BE(channel, 0);
            head.writeUInt8(Tag, 2);
            head.writeUInt16BE(i, 3);
            var chunk = data.slice(i * blockSize, (i + 1) * blockSize);
            blocks.push(Buffer.concat([head, chunk]));
          }
          return blocks;
        },
        reduceResponse: function(acc, chunk) {
          var _a2 = acc || initialAcc, data = _a2.data, dataLength = _a2.dataLength, sequence = _a2.sequence;
          if (chunk.readUInt16BE(0) !== channel) {
            throw new errors_1.TransportError("Invalid channel", "InvalidChannel");
          }
          if (chunk.readUInt8(2) !== Tag) {
            throw new errors_1.TransportError("Invalid tag", "InvalidTag");
          }
          if (chunk.readUInt16BE(3) !== sequence) {
            throw new errors_1.TransportError("Invalid sequence", "InvalidSequence");
          }
          if (!acc) {
            dataLength = chunk.readUInt16BE(5);
          }
          sequence++;
          var chunkData = chunk.slice(acc ? 5 : 7);
          data = Buffer.concat([data, chunkData]);
          if (data.length > dataLength) {
            data = data.slice(0, dataLength);
          }
          return {
            data,
            dataLength,
            sequence
          };
        },
        getReducedResult: function(acc) {
          if (acc && acc.dataLength === acc.data.length) {
            return acc.data;
          }
        }
      };
    };
    exports["default"] = createHIDframing;
  }
});

// node_modules/.pnpm/@ledgerhq+hw-transport@6.27.1/node_modules/@ledgerhq/hw-transport/lib-es/Transport.js
init_events();
init_lib_es();
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y2, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done)
          return t;
        if (y2 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y2 = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Transport = (
  /** @class */
  function() {
    function Transport2() {
      var _this = this;
      this.exchangeTimeout = 3e4;
      this.unresponsiveTimeout = 15e3;
      this.deviceModel = null;
      this._events = new y();
      this.send = function(cla, ins, p1, p2, data, statusList) {
        if (data === void 0) {
          data = Buffer.alloc(0);
        }
        if (statusList === void 0) {
          statusList = [StatusCodes.OK];
        }
        return __awaiter(_this, void 0, void 0, function() {
          var response, sw;
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                if (data.length >= 256) {
                  throw new TransportError("data.length exceed 256 bytes limit. Got: " + data.length, "DataLengthTooBig");
                }
                return [4, this.exchange(Buffer.concat([
                  Buffer.from([cla, ins, p1, p2]),
                  Buffer.from([data.length]),
                  data
                ]))];
              case 1:
                response = _a2.sent();
                sw = response.readUInt16BE(response.length - 2);
                if (!statusList.some(function(s) {
                  return s === sw;
                })) {
                  throw new TransportStatusError(sw);
                }
                return [2, response];
            }
          });
        });
      };
      this.exchangeAtomicImpl = function(f) {
        return __awaiter(_this, void 0, void 0, function() {
          var resolveBusy, busyPromise, unresponsiveReached, timeout, res;
          var _this2 = this;
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                if (this.exchangeBusyPromise) {
                  throw new TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");
                }
                busyPromise = new Promise(function(r) {
                  resolveBusy = r;
                });
                this.exchangeBusyPromise = busyPromise;
                unresponsiveReached = false;
                timeout = setTimeout(function() {
                  unresponsiveReached = true;
                  _this2.emit("unresponsive");
                }, this.unresponsiveTimeout);
                _a2.label = 1;
              case 1:
                _a2.trys.push([1, , 3, 4]);
                return [4, f()];
              case 2:
                res = _a2.sent();
                if (unresponsiveReached) {
                  this.emit("responsive");
                }
                return [2, res];
              case 3:
                clearTimeout(timeout);
                if (resolveBusy)
                  resolveBusy();
                this.exchangeBusyPromise = null;
                return [
                  7
                  /*endfinally*/
                ];
              case 4:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
      this._appAPIlock = null;
    }
    Transport2.prototype.exchange = function(_apdu) {
      throw new Error("exchange not implemented");
    };
    Transport2.prototype.setScrambleKey = function(_key) {
    };
    Transport2.prototype.close = function() {
      return Promise.resolve();
    };
    Transport2.prototype.on = function(eventName, cb) {
      this._events.on(eventName, cb);
    };
    Transport2.prototype.off = function(eventName, cb) {
      this._events.removeListener(eventName, cb);
    };
    Transport2.prototype.emit = function(event) {
      var _a2;
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      (_a2 = this._events).emit.apply(_a2, __spreadArray([event], __read(args), false));
    };
    Transport2.prototype.setDebugMode = function() {
      console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.");
    };
    Transport2.prototype.setExchangeTimeout = function(exchangeTimeout) {
      this.exchangeTimeout = exchangeTimeout;
    };
    Transport2.prototype.setExchangeUnresponsiveTimeout = function(unresponsiveTimeout) {
      this.unresponsiveTimeout = unresponsiveTimeout;
    };
    Transport2.create = function(openTimeout, listenTimeout) {
      var _this = this;
      if (openTimeout === void 0) {
        openTimeout = 3e3;
      }
      return new Promise(function(resolve, reject) {
        var found = false;
        var sub = _this.listen({
          next: function(e) {
            found = true;
            if (sub)
              sub.unsubscribe();
            if (listenTimeoutId)
              clearTimeout(listenTimeoutId);
            _this.open(e.descriptor, openTimeout).then(resolve, reject);
          },
          error: function(e) {
            if (listenTimeoutId)
              clearTimeout(listenTimeoutId);
            reject(e);
          },
          complete: function() {
            if (listenTimeoutId)
              clearTimeout(listenTimeoutId);
            if (!found) {
              reject(new TransportError(_this.ErrorMessage_NoDeviceFound, "NoDeviceFound"));
            }
          }
        });
        var listenTimeoutId = listenTimeout ? setTimeout(function() {
          sub.unsubscribe();
          reject(new TransportError(_this.ErrorMessage_ListenTimeout, "ListenTimeout"));
        }, listenTimeout) : null;
      });
    };
    Transport2.prototype.decorateAppAPIMethods = function(self, methods, scrambleKey) {
      var e_1, _a2;
      try {
        for (var methods_1 = __values(methods), methods_1_1 = methods_1.next(); !methods_1_1.done; methods_1_1 = methods_1.next()) {
          var methodName = methods_1_1.value;
          self[methodName] = this.decorateAppAPIMethod(methodName, self[methodName], self, scrambleKey);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (methods_1_1 && !methods_1_1.done && (_a2 = methods_1["return"]))
            _a2.call(methods_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    Transport2.prototype.decorateAppAPIMethod = function(methodName, f, ctx, scrambleKey) {
      var _this = this;
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function() {
          var _appAPIlock;
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                _appAPIlock = this._appAPIlock;
                if (_appAPIlock) {
                  return [2, Promise.reject(new TransportError("Ledger Device is busy (lock " + _appAPIlock + ")", "TransportLocked"))];
                }
                _a2.label = 1;
              case 1:
                _a2.trys.push([1, , 3, 4]);
                this._appAPIlock = methodName;
                this.setScrambleKey(scrambleKey);
                return [4, f.apply(ctx, args)];
              case 2:
                return [2, _a2.sent()];
              case 3:
                this._appAPIlock = null;
                return [
                  7
                  /*endfinally*/
                ];
              case 4:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
    };
    Transport2.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
    Transport2.ErrorMessage_NoDeviceFound = "No Ledger device found";
    return Transport2;
  }()
);
var Transport_default = Transport;

// node_modules/.pnpm/@ledgerhq+hw-transport-webhid@6.27.1/node_modules/@ledgerhq/hw-transport-webhid/lib-es/TransportWebHID.js
var import_hid_framing = __toESM(require_hid_framing());

// node_modules/.pnpm/@ledgerhq+devices@6.27.1/node_modules/@ledgerhq/devices/lib-es/index.js
var import_semver = __toESM(require_semver());
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var _a;
var DeviceModelId;
(function(DeviceModelId2) {
  DeviceModelId2["blue"] = "blue";
  DeviceModelId2["nanoS"] = "nanoS";
  DeviceModelId2["nanoSP"] = "nanoSP";
  DeviceModelId2["nanoX"] = "nanoX";
  DeviceModelId2["nanoFTS"] = "nanoFTS";
})(DeviceModelId || (DeviceModelId = {}));
var devices = (_a = {}, _a[DeviceModelId.blue] = {
  id: DeviceModelId.blue,
  productName: "Ledger\xA0Blue",
  productIdMM: 0,
  legacyUsbProductId: 0,
  usbOnly: true,
  memorySize: 480 * 1024,
  masks: [822083584, 822149120],
  getBlockSize: function(_firwareVersion) {
    return 4 * 1024;
  }
}, _a[DeviceModelId.nanoS] = {
  id: DeviceModelId.nanoS,
  productName: "Ledger\xA0Nano\xA0S",
  productIdMM: 16,
  legacyUsbProductId: 1,
  usbOnly: true,
  memorySize: 320 * 1024,
  masks: [823132160],
  getBlockSize: function(firmwareVersion) {
    var _a2;
    return import_semver.default.lt((_a2 = import_semver.default.coerce(firmwareVersion)) !== null && _a2 !== void 0 ? _a2 : "", "2.0.0") ? 4 * 1024 : 2 * 1024;
  }
}, _a[DeviceModelId.nanoSP] = {
  id: DeviceModelId.nanoSP,
  productName: "Ledger Nano S Plus",
  productIdMM: 80,
  legacyUsbProductId: 5,
  usbOnly: true,
  memorySize: 1536 * 1024,
  masks: [856686592],
  getBlockSize: function(_firmwareVersion) {
    return 32;
  }
}, _a[DeviceModelId.nanoX] = {
  id: DeviceModelId.nanoX,
  productName: "Ledger\xA0Nano\xA0X",
  productIdMM: 64,
  legacyUsbProductId: 4,
  usbOnly: false,
  memorySize: 2 * 1024 * 1024,
  masks: [855638016],
  getBlockSize: function(_firwareVersion) {
    return 4 * 1024;
  },
  bluetoothSpec: [
    {
      serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
      notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
      writeUuid: "13d63400-2c97-0004-0002-4c6564676572",
      writeCmdUuid: "13d63400-2c97-0004-0003-4c6564676572"
    }
  ]
}, _a[DeviceModelId.nanoFTS] = {
  id: DeviceModelId.nanoFTS,
  productName: "Ledger\xA0Nano\xA0FTS",
  productIdMM: 96,
  legacyUsbProductId: 6,
  usbOnly: false,
  memorySize: 2 * 1024 * 1024,
  masks: [857735168],
  getBlockSize: function(_firwareVersion) {
    return 4 * 1024;
  },
  bluetoothSpec: [
    {
      serviceUuid: "13d63400-2c97-6004-0000-4c6564676572",
      notifyUuid: "13d63400-2c97-6004-0001-4c6564676572",
      writeUuid: "13d63400-2c97-6004-0002-4c6564676572",
      writeCmdUuid: "13d63400-2c97-6004-0003-4c6564676572"
    }
  ]
}, _a);
var productMap = {
  Blue: DeviceModelId.blue,
  "Nano S": DeviceModelId.nanoS,
  "Nano S Plus": DeviceModelId.nanoSP,
  "Nano X": DeviceModelId.nanoX,
  "Nano FTS": DeviceModelId.nanoFTS
};
var devicesList = Object.values(devices);
var ledgerUSBVendorId = 11415;
var identifyUSBProductId = function(usbProductId) {
  var legacy = devicesList.find(function(d) {
    return d.legacyUsbProductId === usbProductId;
  });
  if (legacy)
    return legacy;
  var mm = usbProductId >> 8;
  var deviceModel = devicesList.find(function(d) {
    return d.productIdMM === mm;
  });
  return deviceModel;
};
var bluetoothServices = [];
var serviceUuidToInfos = {};
for (id2 in devices) {
  deviceModel = devices[id2];
  bluetoothSpec = deviceModel.bluetoothSpec;
  if (bluetoothSpec) {
    for (i = 0; i < bluetoothSpec.length; i++) {
      spec = bluetoothSpec[i];
      bluetoothServices.push(spec.serviceUuid);
      serviceUuidToInfos[spec.serviceUuid] = serviceUuidToInfos[spec.serviceUuid.replace(/-/g, "")] = __assign({ deviceModel }, spec);
    }
  }
}
var deviceModel;
var bluetoothSpec;
var spec;
var i;
var id2;

// node_modules/.pnpm/@ledgerhq+logs@6.12.0/node_modules/@ledgerhq/logs/lib-es/index.js
var id = 0;
var subscribers = [];
var log = (type, message, data) => {
  const obj = {
    type,
    id: String(++id),
    date: /* @__PURE__ */ new Date()
  };
  if (message)
    obj.message = message;
  if (data)
    obj.data = data;
  dispatch(obj);
};
var listen = (cb) => {
  subscribers.push(cb);
  return () => {
    const i = subscribers.indexOf(cb);
    if (i !== -1) {
      subscribers[i] = subscribers[subscribers.length - 1];
      subscribers.pop();
    }
  };
};
function dispatch(log2) {
  for (let i = 0; i < subscribers.length; i++) {
    try {
      subscribers[i](log2);
    } catch (e) {
      console.error(e);
    }
  }
}
if (typeof window !== "undefined") {
  window.__ledgerLogsListen = listen;
}

// node_modules/.pnpm/@ledgerhq+hw-transport-webhid@6.27.1/node_modules/@ledgerhq/hw-transport-webhid/lib-es/TransportWebHID.js
init_lib_es();
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator2 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y2, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done)
          return t;
        if (y2 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y2 = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __read2 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var ledgerDevices = [
  {
    vendorId: ledgerUSBVendorId
  }
];
var isSupported = function() {
  return Promise.resolve(!!(window.navigator && window.navigator.hid));
};
var getHID = function() {
  var hid = navigator.hid;
  if (!hid)
    throw new TransportError("navigator.hid is not supported", "HIDNotSupported");
  return hid;
};
function requestLedgerDevices() {
  return __awaiter2(this, void 0, void 0, function() {
    var device;
    return __generator2(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, getHID().requestDevice({
            filters: ledgerDevices
          })];
        case 1:
          device = _a2.sent();
          if (Array.isArray(device))
            return [2, device];
          return [2, [device]];
      }
    });
  });
}
function getLedgerDevices() {
  return __awaiter2(this, void 0, void 0, function() {
    var devices2;
    return __generator2(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, getHID().getDevices()];
        case 1:
          devices2 = _a2.sent();
          return [2, devices2.filter(function(d) {
            return d.vendorId === ledgerUSBVendorId;
          })];
      }
    });
  });
}
function getFirstLedgerDevice() {
  return __awaiter2(this, void 0, void 0, function() {
    var existingDevices, devices2;
    return __generator2(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, getLedgerDevices()];
        case 1:
          existingDevices = _a2.sent();
          if (existingDevices.length > 0)
            return [2, existingDevices[0]];
          return [4, requestLedgerDevices()];
        case 2:
          devices2 = _a2.sent();
          return [2, devices2[0]];
      }
    });
  });
}
var TransportWebHID = (
  /** @class */
  function(_super) {
    __extends(TransportWebHID2, _super);
    function TransportWebHID2(device) {
      var _this = _super.call(this) || this;
      _this.channel = Math.floor(Math.random() * 65535);
      _this.packetSize = 64;
      _this.inputs = [];
      _this.read = function() {
        if (_this.inputs.length) {
          return Promise.resolve(_this.inputs.shift());
        }
        return new Promise(function(success) {
          _this.inputCallback = success;
        });
      };
      _this.onInputReport = function(e) {
        var buffer = Buffer.from(e.data.buffer);
        if (_this.inputCallback) {
          _this.inputCallback(buffer);
          _this.inputCallback = null;
        } else {
          _this.inputs.push(buffer);
        }
      };
      _this._disconnectEmitted = false;
      _this._emitDisconnect = function(e) {
        if (_this._disconnectEmitted)
          return;
        _this._disconnectEmitted = true;
        _this.emit("disconnect", e);
      };
      _this.exchange = function(apdu) {
        return __awaiter2(_this, void 0, void 0, function() {
          var b;
          var _this2 = this;
          return __generator2(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                return [4, this.exchangeAtomicImpl(function() {
                  return __awaiter2(_this2, void 0, void 0, function() {
                    var _a3, channel, packetSize, framing, blocks, i, result, acc, buffer;
                    return __generator2(this, function(_b) {
                      switch (_b.label) {
                        case 0:
                          _a3 = this, channel = _a3.channel, packetSize = _a3.packetSize;
                          log("apdu", "=> " + apdu.toString("hex"));
                          framing = (0, import_hid_framing.default)(channel, packetSize);
                          blocks = framing.makeBlocks(apdu);
                          i = 0;
                          _b.label = 1;
                        case 1:
                          if (!(i < blocks.length))
                            return [3, 4];
                          return [4, this.device.sendReport(0, blocks[i])];
                        case 2:
                          _b.sent();
                          _b.label = 3;
                        case 3:
                          i++;
                          return [3, 1];
                        case 4:
                          if (!!(result = framing.getReducedResult(acc)))
                            return [3, 6];
                          return [4, this.read()];
                        case 5:
                          buffer = _b.sent();
                          acc = framing.reduceResponse(acc, buffer);
                          return [3, 4];
                        case 6:
                          log("apdu", "<= " + result.toString("hex"));
                          return [2, result];
                      }
                    });
                  });
                })["catch"](function(e) {
                  if (e && e.message && e.message.includes("write")) {
                    _this2._emitDisconnect(e);
                    throw new DisconnectedDeviceDuringOperation(e.message);
                  }
                  throw e;
                })];
              case 1:
                b = _a2.sent();
                return [2, b];
            }
          });
        });
      };
      _this.device = device;
      _this.deviceModel = typeof device.productId === "number" ? identifyUSBProductId(device.productId) : void 0;
      device.addEventListener("inputreport", _this.onInputReport);
      return _this;
    }
    TransportWebHID2.request = function() {
      return __awaiter2(this, void 0, void 0, function() {
        var _a2, device;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, requestLedgerDevices()];
            case 1:
              _a2 = __read2.apply(void 0, [_b.sent(), 1]), device = _a2[0];
              return [2, TransportWebHID2.open(device)];
          }
        });
      });
    };
    TransportWebHID2.openConnected = function() {
      return __awaiter2(this, void 0, void 0, function() {
        var devices2;
        return __generator2(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, getLedgerDevices()];
            case 1:
              devices2 = _a2.sent();
              if (devices2.length === 0)
                return [2, null];
              return [2, TransportWebHID2.open(devices2[0])];
          }
        });
      });
    };
    TransportWebHID2.open = function(device) {
      return __awaiter2(this, void 0, void 0, function() {
        var transport, onDisconnect;
        return __generator2(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, device.open()];
            case 1:
              _a2.sent();
              transport = new TransportWebHID2(device);
              onDisconnect = function(e) {
                if (device === e.device) {
                  getHID().removeEventListener("disconnect", onDisconnect);
                  transport._emitDisconnect(new DisconnectedDevice());
                }
              };
              getHID().addEventListener("disconnect", onDisconnect);
              return [2, transport];
          }
        });
      });
    };
    TransportWebHID2.prototype.close = function() {
      return __awaiter2(this, void 0, void 0, function() {
        return __generator2(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.exchangeBusyPromise];
            case 1:
              _a2.sent();
              this.device.removeEventListener("inputreport", this.onInputReport);
              return [4, this.device.close()];
            case 2:
              _a2.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TransportWebHID2.prototype.setScrambleKey = function() {
    };
    TransportWebHID2.isSupported = isSupported;
    TransportWebHID2.list = getLedgerDevices;
    TransportWebHID2.listen = function(observer) {
      var unsubscribed = false;
      getFirstLedgerDevice().then(function(device) {
        if (!device) {
          observer.error(new TransportOpenUserCancelled("Access denied to use Ledger device"));
        } else if (!unsubscribed) {
          var deviceModel = typeof device.productId === "number" ? identifyUSBProductId(device.productId) : void 0;
          observer.next({
            type: "add",
            descriptor: device,
            deviceModel
          });
          observer.complete();
        }
      }, function(error) {
        observer.error(new TransportOpenUserCancelled(error.message));
      });
      function unsubscribe() {
        unsubscribed = true;
      }
      return {
        unsubscribe
      };
    };
    return TransportWebHID2;
  }(Transport_default)
);
var TransportWebHID_default = TransportWebHID;
export {
  TransportWebHID_default as default
};
//# sourceMappingURL=/build/_shared/TransportWebHID-QORXR7XD.js.map
