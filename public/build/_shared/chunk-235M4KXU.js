import {
  EventEmitter,
  defaultMaxListeners,
  init,
  init_events,
  listenerCount,
  on,
  once
} from "/build/_shared/chunk-3KZTRC5K.js";
import {
  __esm,
  __export
} from "/build/_shared/chunk-DPSM2F2X.js";

// node-modules-polyfills-commonjs:events
var events_exports = {};
__export(events_exports, {
  EventEmitter: () => EventEmitter,
  defaultMaxListeners: () => defaultMaxListeners,
  init: () => init,
  listenerCount: () => listenerCount,
  on: () => on,
  once: () => once
});
var init_events2 = __esm({
  "node-modules-polyfills-commonjs:events"() {
    init_events();
  }
});

export {
  events_exports,
  init_events2 as init_events
};
//# sourceMappingURL=/build/_shared/chunk-235M4KXU.js.map
