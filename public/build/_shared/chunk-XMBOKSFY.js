import {
  Alert
} from "/build/_shared/chunk-QUZUN6TT.js";
import {
  Label,
  labelVariants
} from "/build/_shared/chunk-GRFG2YTY.js";
import {
  cn
} from "/build/_shared/chunk-X65FW46X.js";
import {
  INTENT,
  VALIDATION_SKIPPED,
  VALIDATION_UNDEFINED,
  focusFirstInvalidControl,
  formatPaths,
  getErrors,
  getFormAction,
  getFormControls,
  getFormData,
  getFormElement,
  getFormEncType,
  getFormMethod,
  getPaths,
  getValidationMessage,
  isFocusableFormControl,
  isFormControl,
  parse,
  parseIntent,
  requestIntent,
  validate
} from "/build/_shared/chunk-3NPFXAUL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-SAB7BZTA.js";
import {
  require_react
} from "/build/_shared/chunk-ZPXNLZE6.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";
import {
  __export,
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// node_modules/.pnpm/@conform-to+react@0.9.1_react@18.2.0/node_modules/@conform-to/react/_virtual/_rollupPluginBabelHelpers.mjs
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input2, hint) {
  if (typeof input2 !== "object" || input2 === null)
    return input2;
  var prim = input2[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input2, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input2);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// node_modules/.pnpm/@conform-to+react@0.9.1_react@18.2.0/node_modules/@conform-to/react/hooks.mjs
var import_react = __toESM(require_react(), 1);
function useNoValidate(defaultNoValidate, validateBeforeHydrate) {
  var [noValidate, setNoValidate] = (0, import_react.useState)(defaultNoValidate || !validateBeforeHydrate);
  (0, import_react.useEffect)(() => {
    setNoValidate(true);
  }, []);
  return noValidate;
}
function useFormRef(userProvidedRef) {
  var formRef = (0, import_react.useRef)(null);
  return userProvidedRef !== null && userProvidedRef !== void 0 ? userProvidedRef : formRef;
}
function useConfigRef(config) {
  var ref = (0, import_react.useRef)(config);
  useSafeLayoutEffect(() => {
    ref.current = config;
  });
  return ref;
}
function useFormReporter(ref, lastSubmission) {
  var [submission, setSubmission] = (0, import_react.useState)(lastSubmission);
  var report = (0, import_react.useCallback)((form, submission2) => {
    var event = new CustomEvent("conform", {
      detail: submission2.intent
    });
    form.dispatchEvent(event);
    setSubmission(submission2);
  }, []);
  (0, import_react.useEffect)(() => {
    var form = ref.current;
    if (!form || !lastSubmission) {
      return;
    }
    if (!lastSubmission.payload) {
      form.reset();
      return;
    }
    report(form, lastSubmission);
  }, [ref, lastSubmission, report]);
  (0, import_react.useEffect)(() => {
    var form = ref.current;
    if (!form || !submission) {
      return;
    }
    reportSubmission(form, submission);
  }, [ref, submission]);
  return report;
}
function useFormError(ref, config) {
  var [error, setError] = (0, import_react.useState)(() => {
    if (!config.initialError) {
      return {};
    }
    var result = {};
    for (var [name, message] of Object.entries(config.initialError)) {
      var [path, ...restPaths] = getPaths(name);
      if (typeof path !== "undefined" && restPaths.length === 0) {
        result[path] = message;
      }
    }
    return result;
  });
  (0, import_react.useEffect)(() => {
    var handleInvalid = (event) => {
      var _config$name;
      var form = getFormElement(ref.current);
      var element = event.target;
      var prefix = (_config$name = config.name) !== null && _config$name !== void 0 ? _config$name : "";
      if (!isFormControl(element) || element.form !== form || !element.name.startsWith(prefix) || !element.dataset.conformTouched) {
        return;
      }
      var name = element.name.slice(prefix.length);
      var [path, ...restPaths] = getPaths(name);
      if (typeof path === "undefined" || restPaths.length > 0) {
        return;
      }
      setError((prev) => {
        if (element.validationMessage === getValidationMessage(prev[path])) {
          return prev;
        }
        return _objectSpread2(_objectSpread2({}, prev), {}, {
          [path]: getErrors(element.validationMessage)
        });
      });
      event.preventDefault();
    };
    var handleReset = (event) => {
      var form = getFormElement(ref.current);
      if (form && event.target === form) {
        setError({});
      }
    };
    document.addEventListener("reset", handleReset);
    document.addEventListener("invalid", handleInvalid, true);
    return () => {
      document.removeEventListener("reset", handleReset);
      document.removeEventListener("invalid", handleInvalid, true);
    };
  }, [ref, config.name]);
  return [error, setError];
}
function useForm() {
  var _config$lastSubmissio3, _config$lastSubmissio4;
  var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var configRef = useConfigRef(config);
  var ref = useFormRef(config.ref);
  var noValidate = useNoValidate(config.noValidate, config.fallbackNative);
  var report = useFormReporter(ref, config.lastSubmission);
  var [errors, setErrors] = (0, import_react.useState)(() => {
    var _config$lastSubmissio, _config$lastSubmissio2;
    return (_config$lastSubmissio = (_config$lastSubmissio2 = config.lastSubmission) === null || _config$lastSubmissio2 === void 0 ? void 0 : _config$lastSubmissio2.error[""]) !== null && _config$lastSubmissio !== void 0 ? _config$lastSubmissio : [];
  });
  var initialError = (0, import_react.useMemo)(() => {
    var _submission$error$sco;
    var submission = config.lastSubmission;
    if (!submission) {
      return {};
    }
    var intent = parseIntent(submission.intent);
    var scope = getScope(intent);
    if (typeof scope !== "string") {
      return submission.error;
    }
    return {
      [scope]: (_submission$error$sco = submission.error[scope]) !== null && _submission$error$sco !== void 0 ? _submission$error$sco : []
    };
  }, [config.lastSubmission]);
  var [defaultValueFromLastSubmission, setDefaultValueFromLastSubmission] = (0, import_react.useState)(
    // @ts-expect-error defaultValue is not in Submission type
    (_config$lastSubmissio3 = (_config$lastSubmissio4 = config.lastSubmission) === null || _config$lastSubmissio4 === void 0 ? void 0 : _config$lastSubmissio4.payload) !== null && _config$lastSubmissio3 !== void 0 ? _config$lastSubmissio3 : null
  );
  var fieldset2 = useFieldset(ref, {
    defaultValue: defaultValueFromLastSubmission !== null && defaultValueFromLastSubmission !== void 0 ? defaultValueFromLastSubmission : config.defaultValue,
    initialError,
    constraint: config.constraint,
    form: config.id
  });
  (0, import_react.useEffect)(() => {
    var createValidateHandler = (type) => (event) => {
      var field = event.target;
      var form2 = ref.current;
      var {
        shouldValidate = "onSubmit",
        shouldRevalidate = shouldValidate
      } = configRef.current;
      if (!form2 || !isFocusableFormControl(field) || field.form !== form2 || !field.name) {
        return;
      }
      if (field.dataset.conformTouched ? shouldRevalidate === type : shouldValidate === type) {
        requestIntent(form2, validate(field.name));
      }
    };
    var handleInvalid = (event) => {
      var form2 = ref.current;
      var field = event.target;
      if (!form2 || !isFormControl(field) || field.form !== form2 || field.name !== FORM_ERROR_ELEMENT_NAME) {
        return;
      }
      event.preventDefault();
      if (field.dataset.conformTouched) {
        setErrors(getErrors(field.validationMessage));
      }
    };
    var handleReset = (event) => {
      var form2 = ref.current;
      if (!form2 || event.target !== form2) {
        return;
      }
      for (var _element of getFormControls(form2)) {
        delete _element.dataset.conformTouched;
        _element.setCustomValidity("");
      }
      setErrors([]);
      setDefaultValueFromLastSubmission(null);
    };
    var handleInput = createValidateHandler("onInput");
    var handleBlur = createValidateHandler("onBlur");
    document.addEventListener("input", handleInput, true);
    document.addEventListener("blur", handleBlur, true);
    document.addEventListener("invalid", handleInvalid, true);
    document.addEventListener("reset", handleReset);
    return () => {
      document.removeEventListener("input", handleInput, true);
      document.removeEventListener("blur", handleBlur, true);
      document.removeEventListener("invalid", handleInvalid, true);
      document.removeEventListener("reset", handleReset);
    };
  }, [ref, configRef]);
  var form = {
    ref,
    error: errors[0],
    errors,
    props: {
      ref,
      noValidate,
      onSubmit(event) {
        var form2 = event.currentTarget;
        var nativeEvent = event.nativeEvent;
        var submitter = nativeEvent.submitter;
        if (event.defaultPrevented) {
          return;
        }
        try {
          var _config$onValidate, _config$onValidate2;
          var formData = getFormData(form2, submitter);
          var submission = (_config$onValidate = (_config$onValidate2 = config.onValidate) === null || _config$onValidate2 === void 0 ? void 0 : _config$onValidate2.call(config, {
            form: form2,
            formData
          })) !== null && _config$onValidate !== void 0 ? _config$onValidate : parse(formData);
          var {
            errors: _errors,
            shouldServerValidate
          } = Object.entries(submission.error).reduce((result, _ref) => {
            var [, error] = _ref;
            for (var message of error) {
              if (message === VALIDATION_UNDEFINED) {
                result.shouldServerValidate = true;
              } else if (message !== VALIDATION_SKIPPED) {
                result.errors.push(message);
              }
            }
            return result;
          }, {
            errors: [],
            shouldServerValidate: false
          });
          if (
            // has client validation
            typeof config.onValidate !== "undefined" && // not necessary to validate on the server
            !shouldServerValidate && // client validation failed or non submit intent
            (!config.noValidate && !(submitter !== null && submitter !== void 0 && submitter.formNoValidate) && _errors.length > 0 || parseIntent(submission.intent) !== null)
          ) {
            report(form2, submission);
            event.preventDefault();
          } else {
            var _config$onSubmit;
            (_config$onSubmit = config.onSubmit) === null || _config$onSubmit === void 0 ? void 0 : _config$onSubmit.call(config, event, {
              formData,
              submission,
              action: getFormAction(nativeEvent),
              encType: getFormEncType(nativeEvent),
              method: getFormMethod(nativeEvent)
            });
          }
        } catch (error) {
          console.warn("Client validation failed", error);
        }
      }
    }
  };
  if (config.id) {
    form.id = config.id;
    form.errorId = "".concat(config.id, "-error");
    form.props.id = form.id;
  }
  if (form.errorId && form.errors.length > 0) {
    form.props["aria-invalid"] = "true";
    form.props["aria-describedby"] = form.errorId;
  }
  return [form, fieldset2];
}
function useFieldset(ref, config) {
  var [error] = useFormError(ref, {
    initialError: config.initialError,
    name: config.name
  });
  return new Proxy({}, {
    get(_target, key) {
      var _fieldsetConfig$const, _fieldsetConfig$initi, _fieldsetConfig$defau;
      if (typeof key !== "string") {
        return;
      }
      var fieldsetConfig = config;
      var constraint = (_fieldsetConfig$const = fieldsetConfig.constraint) === null || _fieldsetConfig$const === void 0 ? void 0 : _fieldsetConfig$const[key];
      var errors = error === null || error === void 0 ? void 0 : error[key];
      var initialError = Object.entries((_fieldsetConfig$initi = fieldsetConfig.initialError) !== null && _fieldsetConfig$initi !== void 0 ? _fieldsetConfig$initi : {}).reduce((result, _ref2) => {
        var [name, message] = _ref2;
        var [field2, ...paths] = getPaths(name);
        if (field2 === key) {
          result[formatPaths(paths)] = message;
        }
        return result;
      }, {});
      var field = _objectSpread2(_objectSpread2({}, constraint), {}, {
        name: fieldsetConfig.name ? "".concat(fieldsetConfig.name, ".").concat(key) : key,
        // @ts-expect-error The FieldValue type might need a rework
        defaultValue: (_fieldsetConfig$defau = fieldsetConfig.defaultValue) === null || _fieldsetConfig$defau === void 0 ? void 0 : _fieldsetConfig$defau[key],
        initialError,
        error: errors === null || errors === void 0 ? void 0 : errors[0],
        errors
      });
      if (fieldsetConfig.form) {
        field.form = fieldsetConfig.form;
        field.id = "".concat(fieldsetConfig.form, "-").concat(field.name);
        field.errorId = "".concat(field.id, "-error");
        field.descriptionId = "".concat(field.id, "-description");
      }
      return field;
    }
  });
}
var useSafeLayoutEffect = typeof document === "undefined" ? import_react.useEffect : import_react.useLayoutEffect;
function useInputEvent(options) {
  var optionsRef = useConfigRef(options);
  var eventDispatched = (0, import_react.useRef)({
    onInput: false,
    onFocus: false,
    onBlur: false
  });
  useSafeLayoutEffect(() => {
    var createEventListener = (listener) => {
      return (event) => {
        var _optionsRef$current, _optionsRef$current2, _optionsRef$current3;
        var element = typeof ((_optionsRef$current = optionsRef.current) === null || _optionsRef$current === void 0 ? void 0 : _optionsRef$current.ref) === "function" ? (_optionsRef$current2 = optionsRef.current) === null || _optionsRef$current2 === void 0 ? void 0 : _optionsRef$current2.ref() : (_optionsRef$current3 = optionsRef.current) === null || _optionsRef$current3 === void 0 ? void 0 : _optionsRef$current3.ref.current;
        if (isFormControl(element) && (listener === "onReset" ? event.target === element.form : event.target === element)) {
          var _optionsRef$current4, _optionsRef$current4$;
          if (listener !== "onReset") {
            eventDispatched.current[listener] = true;
          }
          (_optionsRef$current4 = optionsRef.current) === null || _optionsRef$current4 === void 0 || (_optionsRef$current4$ = _optionsRef$current4[listener]) === null || _optionsRef$current4$ === void 0 ? void 0 : _optionsRef$current4$.call(_optionsRef$current4, event);
        }
      };
    };
    var inputHandler = createEventListener("onInput");
    var focusHandler = createEventListener("onFocus");
    var blurHandler = createEventListener("onBlur");
    var resetHandler = createEventListener("onReset");
    document.addEventListener("input", inputHandler, true);
    document.addEventListener("focus", focusHandler, true);
    document.addEventListener("blur", blurHandler, true);
    document.addEventListener("reset", resetHandler);
    return () => {
      document.removeEventListener("input", inputHandler, true);
      document.removeEventListener("focus", focusHandler, true);
      document.removeEventListener("blur", blurHandler, true);
      document.removeEventListener("reset", resetHandler);
    };
  }, []);
  var control = (0, import_react.useMemo)(() => {
    var dispatch = (listener, fn) => {
      if (!eventDispatched.current[listener]) {
        var _optionsRef$current5, _optionsRef$current6, _optionsRef$current7;
        var _element2 = typeof ((_optionsRef$current5 = optionsRef.current) === null || _optionsRef$current5 === void 0 ? void 0 : _optionsRef$current5.ref) === "function" ? (_optionsRef$current6 = optionsRef.current) === null || _optionsRef$current6 === void 0 ? void 0 : _optionsRef$current6.ref() : (_optionsRef$current7 = optionsRef.current) === null || _optionsRef$current7 === void 0 ? void 0 : _optionsRef$current7.ref.current;
        if (!isFormControl(_element2)) {
          console.warn("Failed to dispatch event; is the input mounted?");
          return;
        }
        eventDispatched.current[listener] = true;
        fn(_element2);
      }
      eventDispatched.current[listener] = false;
    };
    return {
      change(eventOrValue) {
        dispatch("onInput", (element) => {
          if (element instanceof HTMLInputElement && (element.type === "checkbox" || element.type === "radio")) {
            if (typeof eventOrValue !== "boolean") {
              throw new Error("You should pass a boolean when changing a checkbox or radio input");
            }
            element.checked = eventOrValue;
          } else {
            if (typeof eventOrValue === "boolean") {
              throw new Error("You can pass a boolean only when changing a checkbox or radio input");
            }
            var _value = typeof eventOrValue === "string" ? eventOrValue : eventOrValue.target.value;
            if (element.value !== _value) {
              var {
                set: valueSetter
              } = Object.getOwnPropertyDescriptor(element, "value") || {};
              var prototype = Object.getPrototypeOf(element);
              var {
                set: prototypeValueSetter
              } = Object.getOwnPropertyDescriptor(prototype, "value") || {};
              if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
                prototypeValueSetter.call(element, _value);
              } else {
                if (valueSetter) {
                  valueSetter.call(element, _value);
                } else {
                  throw new Error("The given element does not have a value setter");
                }
              }
            }
          }
          element.dispatchEvent(new InputEvent("input", {
            bubbles: true
          }));
          element.dispatchEvent(new Event("change", {
            bubbles: true
          }));
        });
      },
      focus() {
        dispatch("onFocus", (element) => {
          element.dispatchEvent(new FocusEvent("focusin", {
            bubbles: true
          }));
          element.dispatchEvent(new FocusEvent("focus"));
        });
      },
      blur() {
        dispatch("onBlur", (element) => {
          element.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true
          }));
          element.dispatchEvent(new FocusEvent("blur"));
        });
      }
    };
  }, [optionsRef]);
  return control;
}
var FORM_ERROR_ELEMENT_NAME = "__form__";
function reportSubmission(form, submission) {
  for (var [name, message] of Object.entries(submission.error)) {
    if (message.length === 0) {
      continue;
    }
    var elementName = name ? name : FORM_ERROR_ELEMENT_NAME;
    var item = form.elements.namedItem(elementName);
    if (item === null) {
      var button = document.createElement("button");
      button.name = elementName;
      button.hidden = true;
      button.dataset.conformTouched = "true";
      form.appendChild(button);
    }
  }
  var intent = parseIntent(submission.intent);
  var scope = getScope(intent);
  for (var _element4 of getFormControls(form)) {
    var _submission$error$_el;
    var _elementName = _element4.name !== FORM_ERROR_ELEMENT_NAME ? _element4.name : "";
    var messages = (_submission$error$_el = submission.error[_elementName]) !== null && _submission$error$_el !== void 0 ? _submission$error$_el : [];
    if (scope === null || scope === _elementName) {
      _element4.dataset.conformTouched = "true";
    }
    if (!messages.includes(VALIDATION_SKIPPED) && !messages.includes(VALIDATION_UNDEFINED)) {
      var invalidEvent = new Event("invalid", {
        cancelable: true
      });
      _element4.setCustomValidity(getValidationMessage(messages));
      _element4.dispatchEvent(invalidEvent);
    }
  }
  if (!intent) {
    focusFirstInvalidControl(form);
  }
}
function getScope(intent) {
  switch (intent === null || intent === void 0 ? void 0 : intent.type) {
    case "validate":
      return intent.payload;
    case "list":
      return intent.payload.name;
  }
  return null;
}

// node_modules/.pnpm/@conform-to+react@0.9.1_react@18.2.0/node_modules/@conform-to/react/helpers.mjs
var helpers_exports = {};
__export(helpers_exports, {
  INTENT: () => INTENT,
  VALIDATION_SKIPPED: () => VALIDATION_SKIPPED,
  VALIDATION_UNDEFINED: () => VALIDATION_UNDEFINED,
  collection: () => collection,
  fieldset: () => fieldset,
  hiddenProps: () => hiddenProps,
  input: () => input,
  select: () => select,
  textarea: () => textarea
});
function cleanup(props) {
  for (var key in props) {
    if (props[key] === void 0) {
      delete props[key];
    }
  }
  return props;
}
function getFormElementProps(config) {
  var _options$ariaAttribut, _config$error, _config$error2;
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var hasAriaAttributes = (_options$ariaAttribut = options.ariaAttributes) !== null && _options$ariaAttribut !== void 0 ? _options$ariaAttribut : true;
  return cleanup({
    id: config.id,
    name: config.name,
    form: config.form,
    "aria-invalid": hasAriaAttributes && config.errorId && (_config$error = config.error) !== null && _config$error !== void 0 && _config$error.length ? true : void 0,
    "aria-describedby": hasAriaAttributes ? [config.errorId && (_config$error2 = config.error) !== null && _config$error2 !== void 0 && _config$error2.length ? config.errorId : void 0, config.descriptionId && options.ariaAttributes !== false && options.description ? config.descriptionId : void 0].reduce((result, id) => {
      if (!result) {
        return id;
      }
      if (!id) {
        return result;
      }
      return "".concat(result, " ").concat(id);
    }) : void 0
  });
}
function getFormControlProps(config, options) {
  return cleanup(_objectSpread2(_objectSpread2({}, getFormElementProps(config, options)), {}, {
    required: config.required,
    autoFocus: config.initialError && Object.entries(config.initialError).length > 0 ? true : void 0
  }, options !== null && options !== void 0 && options.hidden ? hiddenProps : void 0));
}
var hiddenProps = {
  /**
   * Style to make the input element visually hidden
   * Based on the `sr-only` class from tailwindcss
   */
  style: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    whiteSpace: "nowrap",
    border: 0
  },
  tabIndex: -1,
  "aria-hidden": true
};
function input(config) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var props = _objectSpread2(_objectSpread2({}, getFormControlProps(config, options)), {}, {
    type: options.type,
    minLength: config.minLength,
    maxLength: config.maxLength,
    min: config.min,
    max: config.max,
    step: config.step,
    pattern: config.pattern,
    multiple: config.multiple
  });
  if (options.type === "checkbox" || options.type === "radio") {
    var _options$value;
    props.value = (_options$value = options.value) !== null && _options$value !== void 0 ? _options$value : "on";
    props.defaultChecked = config.defaultValue === props.value;
  } else if (options.type !== "file") {
    props.defaultValue = config.defaultValue;
  }
  return cleanup(props);
}
function select(config, options) {
  return cleanup(_objectSpread2(_objectSpread2({}, getFormControlProps(config, options)), {}, {
    defaultValue: config.defaultValue,
    multiple: config.multiple
  }));
}
function textarea(config, options) {
  return cleanup(_objectSpread2(_objectSpread2({}, getFormControlProps(config, options)), {}, {
    defaultValue: config.defaultValue,
    minLength: config.minLength,
    maxLength: config.maxLength
  }));
}
function fieldset(config, options) {
  return getFormElementProps(config, options);
}
function collection(config, options) {
  return options.options.map((value) => cleanup(_objectSpread2(_objectSpread2({}, getFormControlProps(config, options)), {}, {
    id: config.id ? "".concat(config.id, "-").concat(value) : void 0,
    type: options.type,
    value,
    defaultChecked: options.type === "checkbox" && Array.isArray(config.defaultValue) ? config.defaultValue.includes(value) : config.defaultValue === value,
    // The required attribute doesn't make sense for checkbox group
    // As it would require all checkboxes to be checked instead of at least one
    // overriden with `undefiend` so it gets cleaned up
    required: options.type === "checkbox" ? void 0 : config.required
  })));
}

// app/components/ui/form.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/form.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
var FormField = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("flex flex-col gap-1", className), ...props }, void 0, false, {
    fileName: "app/components/ui/form.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
});
_c2 = FormField;
FormField.displayName = "FormField";
var FormLabel = React.forwardRef(_c3 = ({
  className,
  disabled,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { ref, className: cn(labelVariants({
    variant: disabled ? "disabled" : "default"
  }), className), ...props }, void 0, false, {
    fileName: "app/components/ui/form.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
});
_c4 = FormLabel;
FormLabel.displayName = "FormLabel";
var FormDescription = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { ref, className: cn("text-xs text-muted-foreground", className), ...props }, void 0, false, {
    fileName: "app/components/ui/form.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
});
_c6 = FormDescription;
FormDescription.displayName = "FormDescription";
var FormMessage = React.forwardRef(_c7 = ({
  className,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { ref, className: cn("text-[0.8rem] font-medium text-destructive", className), ...props, children }, void 0, false, {
    fileName: "app/components/ui/form.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
});
_c8 = FormMessage;
FormMessage.displayName = "FormMessage";
var FormFieldSet = React.forwardRef(_c9 = ({
  className,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { ref, className: cn("space-y-4 disabled:opacity-80", className), ...props, children }, void 0, false, {
    fileName: "app/components/ui/form.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
});
_c10 = FormFieldSet;
FormFieldSet.displayName = "FormFieldSet";
var FormAlert = React.forwardRef(_c11 = ({
  fieldConfig,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: fieldConfig.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { variant: "destructive", id: fieldConfig.errorId, ref, ...props, children: fieldConfig.error }, void 0, false, {
    fileName: "app/components/ui/form.tsx",
    lineNumber: 79,
    columnNumber: 29
  }, this) }, void 0, false, {
    fileName: "app/components/ui/form.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
});
_c12 = FormAlert;
FormAlert.displayName = "FormAlert";
function FormErrors({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: children.errors && children.errors?.length > 0 && children.errors?.map((error, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { variant: "destructive", children: error }, index, false, {
    fileName: "app/components/ui/form.tsx",
    lineNumber: 90,
    columnNumber: 97
  }, this)) }, void 0, false, {
    fileName: "app/components/ui/form.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_c13 = FormErrors;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
$RefreshReg$(_c, "FormField$React.forwardRef");
$RefreshReg$(_c2, "FormField");
$RefreshReg$(_c3, "FormLabel$React.forwardRef");
$RefreshReg$(_c4, "FormLabel");
$RefreshReg$(_c5, "FormDescription$React.forwardRef");
$RefreshReg$(_c6, "FormDescription");
$RefreshReg$(_c7, "FormMessage$React.forwardRef");
$RefreshReg$(_c8, "FormMessage");
$RefreshReg$(_c9, "FormFieldSet$React.forwardRef");
$RefreshReg$(_c10, "FormFieldSet");
$RefreshReg$(_c11, "FormAlert$React.forwardRef");
$RefreshReg$(_c12, "FormAlert");
$RefreshReg$(_c13, "FormErrors");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  useForm,
  useInputEvent,
  helpers_exports,
  FormField,
  FormLabel,
  FormDescription,
  FormErrors
};
//# sourceMappingURL=/build/_shared/chunk-XMBOKSFY.js.map
