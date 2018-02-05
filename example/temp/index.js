function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

var emptyObject_1 = emptyObject;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var validateFormat = function validateFormat(format) {};

{
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

var warning = emptyFunction_1;

{
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

{
  var invariant$1 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var react_development = createCommonjsModule(function (module) {
/** @license React v16.2.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  (function() {
var _assign = objectAssign;
var emptyObject = emptyObject_1;
var invariant = invariant_1;
var warning = warning_1;
var emptyFunction = emptyFunction_1;
var checkPropTypes = checkPropTypes_1;

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.2.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    var componentName = constructor && (constructor.displayName || constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function PureComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

function AsyncComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

var asyncComponentPrototype = AsyncComponent.prototype = new ComponentDummy();
asyncComponentPrototype.constructor = AsyncComponent;
// Avoid an extra prototype jump for these methods.
_assign(asyncComponentPrototype, Component.prototype);
asyncComponentPrototype.unstable_isAsyncReactComponent = true;
asyncComponentPrototype.render = function () {
  return this.props.children;
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_CALL_TYPE:
          case REACT_RETURN_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum());
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'string') {
    return type;
  }
  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

{
  var currentlyValidatingElement = null;

  var propTypesMisspellWarningShown = false;

  var getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  var getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };

  var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(fragment.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (!VALID_FRAGMENT_PROPS.has(key)) {
        warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = typeof type === 'string' || typeof type === 'function' || typeof type === 'symbol' || typeof type === 'number';
  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (typeof type === 'symbol' && type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  // Legacy hook TODO: Warn if this is accessed
  validatedFactory.type = type;

  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  Component: Component,
  PureComponent: PureComponent,
  unstable_AsyncComponent: AsyncComponent,

  Fragment: REACT_FRAGMENT_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3['default'] ? React$3['default'] : React$3;

module.exports = react;
  })();
}
});

var react = createCommonjsModule(function (module) {
{
  module.exports = react_development;
}
});

function __(tag, block) {
  block.tag = tag;
  return block;
}


/* No side effect */

var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;


/*  Not a pure module */

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }
  return result;
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity ? arity : 1;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d) {
      if (d < 0) {
        _args = caml_array_sub(args, arity$1, -d | 0);
        _f = f.apply(null, caml_array_sub(args, 0, arity$1));
        continue ;

      } else {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat(/* array */[x]));
        }
        }(f,args));
      }
    } else {
      return f.apply(null, args);
    }
  }
}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 :
      case 1 :
          return o(a0);
      case 2 :
          return (function (param) {
              return o(a0, param);
            });
      case 3 :
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 :
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 :
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 :
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 :
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });

    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 :
      case 1 :
          return app(o(a0), /* array */[a1]);
      case 2 :
          return o(a0, a1);
      case 3 :
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 :
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 :
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 :
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 :
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });

    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}


/* No side effect */

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable$1 = Object.prototype.propertyIsEnumerable;

function toObject$1(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative$1() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign$2 = shouldUseNative$1() ? Object.assign : function (target, source) {
	var from;
	var to = toObject$1(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols$1) {
			symbols = getOwnPropertySymbols$1(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable$1.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var emptyObject$1 = {};

{
  Object.freeze(emptyObject$1);
}

var emptyObject_1$2 = emptyObject$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat$1 = function validateFormat(format) {};

{
  validateFormat$1 = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant$2(condition, format, a, b, c, d, e, f) {
  validateFormat$1(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1$2 = invariant$2;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

function makeEmptyFunction$1(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction$2 = function emptyFunction() {};

emptyFunction$2.thatReturns = makeEmptyFunction$1;
emptyFunction$2.thatReturnsFalse = makeEmptyFunction$1(false);
emptyFunction$2.thatReturnsTrue = makeEmptyFunction$1(true);
emptyFunction$2.thatReturnsNull = makeEmptyFunction$1(null);
emptyFunction$2.thatReturnsThis = function () {
  return this;
};
emptyFunction$2.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1$2 = emptyFunction$2;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning$2 = emptyFunction_1$2;

{
  var printWarning$1 = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning$2 = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning$1.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1$2 = warning$2;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1$2 = ReactPropTypesSecret$1$1;

{
  var invariant$1$1 = invariant_1$2;
  var warning$1$1 = warning_1$2;
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1$2;
  var loggedTypeFailures$1 = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        warning$1$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures$1)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures$1[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1$2 = checkPropTypes$1;

var react_development$2 = createCommonjsModule$1(function (module) {
/** @license React v16.2.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  (function() {
var _assign = objectAssign$2;
var emptyObject = emptyObject_1$2;
var invariant = invariant_1$2;
var warning = warning_1$2;
var emptyFunction = emptyFunction_1$2;
var checkPropTypes = checkPropTypes_1$2;

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.2.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    var componentName = constructor && (constructor.displayName || constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function PureComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

function AsyncComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

var asyncComponentPrototype = AsyncComponent.prototype = new ComponentDummy();
asyncComponentPrototype.constructor = AsyncComponent;
// Avoid an extra prototype jump for these methods.
_assign(asyncComponentPrototype, Component.prototype);
asyncComponentPrototype.unstable_isAsyncReactComponent = true;
asyncComponentPrototype.render = function () {
  return this.props.children;
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_CALL_TYPE:
          case REACT_RETURN_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum());
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'string') {
    return type;
  }
  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

{
  var currentlyValidatingElement = null;

  var propTypesMisspellWarningShown = false;

  var getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  var getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };

  var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(fragment.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (!VALID_FRAGMENT_PROPS.has(key)) {
        warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = typeof type === 'string' || typeof type === 'function' || typeof type === 'symbol' || typeof type === 'number';
  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (typeof type === 'symbol' && type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  // Legacy hook TODO: Warn if this is accessed
  validatedFactory.type = type;

  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  Component: Component,
  PureComponent: PureComponent,
  unstable_AsyncComponent: AsyncComponent,

  Fragment: REACT_FRAGMENT_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3['default'] ? React$3['default'] : React$3;

module.exports = react;
  })();
}
});

var react$2 = createCommonjsModule$1(function (module) {
{
  module.exports = react_development$2;
}
});

var id = [0];

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}


/* No side effect */

/* not_implemented Not a pure module */

/* No side effect */

var Exit = create("Pervasives.Exit");


/* No side effect */

function length(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue ;

    } else {
      return len;
    }
  }
}

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;

    } else {
      return l2;
    }
  }
}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function map(f, param) {
  if (param) {
    var r = _1(f, param[0]);
    return /* :: */[
            r,
            map(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      _1(f, param[0]);
      _param = param[1];
      continue ;

    } else {
      return /* () */0;
    }
  }
}


/* No side effect */

var $$Error = create("Js_exn.Error");


/* No side effect */

var Bottom = create("Array.Bottom");


/* No side effect */

function _assign(prim, prim$1) {
  return Object.assign(prim, prim$1);
}

var emptyObject$1$1 = { };


/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

// 'use strict';

// var _assign = require('object-assign');

// var emptyObject = require('emptyObject');
// var _invariant = require('invariant');

// if ("development" !== 'production') {
//   var warning = require('fbjs/lib/warning');
// }

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

// }



var factory = (
function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      // if ("development" !== 'production') {
      //   validateTypeDef(Constructor, childContextTypes, 'childContext');
      // }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      // if ("development" !== 'production') {
      //   validateTypeDef(Constructor, contextTypes, 'context');
      // }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      // if ("development" !== 'production') {
      //   validateTypeDef(Constructor, propTypes, 'prop');
      // }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      // _invariant(
      //   specPolicy === 'OVERRIDE_BASE',
      //   'ReactClassInterface: You are attempting to override ' +
      //     '`%s` from your class specification. Ensure that your method names ' +
      //     'do not overlap with React methods.',
      //   name
      // );
    }

    // Disallow defining methods more than once unless explicitly allowed.

  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      // if ("development" !== 'production') {
      //   var typeofSpec = typeof spec;
      //   var isMixinValid = typeofSpec === 'object' && spec !== null;
      //
      //   if ("development" !== 'production') {
      //     warning(
      //       isMixinValid,
      //       "%s: You're attempting to include a mixin that is either null " +
      //         'or not an object. Check the mixins included by the component, ' +
      //         'as well as any mixins they include themselves. ' +
      //         'Expected object but got %s.',
      //       Constructor.displayName || 'ReactClass',
      //       spec === null ? null : typeofSpec
      //     );
      //   }
      // }

      return;
    }

    // _invariant(
    //   typeof spec !== 'function',
    //   "ReactClass: You're attempting to " +
    //     'use a component class or function as a mixin. Instead, just use a ' +
    //     'regular object.'
    // );
    // _invariant(
    //   !isValidElement(spec),
    //   "ReactClass: You're attempting to " +
    //     'use a component as a mixin. Instead, just use a regular object.'
    // );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            // _invariant(
            //   isReactClassMethod &&
            //     (specPolicy === 'DEFINE_MANY_MERGED' ||
            //       specPolicy === 'DEFINE_MANY'),
            //   'ReactClass: Unexpected spec policy %s for key %s ' +
            //     'when mixing in component specs.',
            //   specPolicy,
            //   name
            // );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            // if ("development" !== 'production') {
            //   // Add verbose displayName to the function, which helps when looking
            //   // at profiling tools.
            //   if (typeof property === 'function' && spec.displayName) {
            //     proto[name].displayName = spec.displayName + '_' + name;
            //   }
            // }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    // _invariant(
    //   one && two && typeof one === 'object' && typeof two === 'object',
    //   'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    // );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        // _invariant(
        //   one[key] === undefined,
        //   'mergeIntoWithNoDuplicateKeys(): ' +
        //     'Tried to merge two objects with the same key: `%s`. This conflict ' +
        //     'may be due to a mixin; in particular, this may be caused by two ' +
        //     'getInitialState() or getDefaultProps() methods returning objects ' +
        //     'with clashing keys.',
        //   key
        // );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    // if ("development" !== 'production') {
    //   boundMethod.__reactBoundContext = component;
    //   boundMethod.__reactBoundMethod = method;
    //   boundMethod.__reactBoundArguments = null;
    //   var componentName = component.constructor.displayName;
    //   var _bind = boundMethod.bind;
    //   boundMethod.bind = function(newThis) {
    //     for (
    //       var _len = arguments.length,
    //         args = Array(_len > 1 ? _len - 1 : 0),
    //         _key = 1;
    //       _key < _len;
    //       _key++
    //     ) {
    //       args[_key - 1] = arguments[_key];
    //     }
    //
    //     // User is trying to bind() an autobound method; we effectively will
    //     // ignore the value of "this" that the user is trying to use, so
    //     // let's warn.
    //     if (newThis !== component && newThis !== null) {
    //       if ("development" !== 'production') {
    //         warning(
    //           false,
    //           'bind(): React component methods may only be bound to the ' +
    //             'component instance. See %s',
    //           componentName
    //         );
    //       }
    //     } else if (!args.length) {
    //       if ("development" !== 'production') {
    //         warning(
    //           false,
    //           'bind(): You are binding a component method to the component. ' +
    //             'React does this for you automatically in a high-performance ' +
    //             'way, so you can safely remove this call. See %s',
    //           componentName
    //         );
    //       }
    //       return boundMethod;
    //     }
    //     var reboundMethod = _bind.apply(boundMethod, arguments);
    //     reboundMethod.__reactBoundContext = component;
    //     reboundMethod.__reactBoundMethod = method;
    //     reboundMethod.__reactBoundArguments = args;
    //     return reboundMethod;
    //   };
    // }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      // if ("development" !== 'production') {
      //   warning(
      //     this.__didWarnIsMounted,
      //     '%s: isMounted is deprecated. Instead, make sure to clean up ' +
      //       'subscriptions and pending requests in componentWillUnmount to ' +
      //       'prevent memory leaks.',
      //     (this.constructor && this.constructor.displayName) ||
      //       this.name ||
      //       'Component'
      //   );
      //   this.__didWarnIsMounted = true;
      // }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      // if ("development" !== 'production') {
      //   warning(
      //     this instanceof Constructor,
      //     'Something is calling a React component directly. Use a factory or ' +
      //       'JSX instead. See: https://fb.me/react-legacyfactory'
      //   );
      // }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject$1$1;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      // if ("development" !== 'production') {
      //   // We allow auto-mocks to proceed as if they're returning null.
      //   if (
      //     initialState === undefined &&
      //     this.getInitialState._isMockFunction
      //   ) {
      //     // This is probably bad practice. Consider warning here and
      //     // deprecating this convenience.
      //     initialState = null;
      //   }
      // }
      // _invariant(
      //   typeof initialState === 'object' && !Array.isArray(initialState),
      //   '%s.getInitialState(): must return an object or null',
      //   Constructor.displayName || 'ReactCompositeComponent'
      // );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    // if ("development" !== 'production') {
    //   // This is a tag to indicate that the use of these method names is ok,
    //   // since it's used with createClass. If it's not, then it's likely a
    //   // mistake so we'll warn you to use the static property, property
    //   // initializer or constructor respectively.
    //   if (Constructor.getDefaultProps) {
    //     Constructor.getDefaultProps.isReactClassApproved = {};
    //   }
    //   if (Constructor.prototype.getInitialState) {
    //     Constructor.prototype.getInitialState.isReactClassApproved = {};
    //   }
    // }

    // _invariant(
    //   Constructor.prototype.render,
    //   'createClass(...): Class specification must implement a `render` method.'
    // );

    // if ("development" !== 'production') {
    //   warning(
    //     !Constructor.prototype.componentShouldUpdate,
    //     '%s has a method called ' +
    //       'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
    //       'The name is phrased as a question because the function is ' +
    //       'expected to return a value.',
    //     spec.displayName || 'A component'
    //   );
    //   warning(
    //     !Constructor.prototype.componentWillRecieveProps,
    //     '%s has a method called ' +
    //       'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
    //     spec.displayName || 'A component'
    //   );
    // }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}
);

var reactNoopUpdateQueue = new undefined().updater;

var createClass$1 = factory(undefined, undefined, reactNoopUpdateQueue);


/*  Not a pure module */

var magicNull = null;

function lifecycleNoUpdate() {
  return /* NoUpdate */0;
}

function lifecyclePreviousNextUnit() {
  return /* () */0;
}

function lifecyclePreviousCurrentReturnUnit() {
  return /* () */0;
}

function lifecycleReturnUnit() {
  return /* () */0;
}

function lifecycleReturnTrue() {
  return /* true */1;
}

function willReceivePropsDefault(param) {
  return param[/* state */2];
}

function renderDefault() {
  return "RenderNotImplemented";
}

function initialStateDefault() {
  return /* () */0;
}

function reducerDefault(_, _$1) {
  return /* NoUpdate */0;
}

function subscriptionsDefault() {
  return /* [] */0;
}

function convertPropsIfTheyreFromJs(props, jsPropsToReason, debugName) {
  var match = props.reasonProps;
  if (match == null) {
    if (jsPropsToReason) {
      return /* Element */[_1(jsPropsToReason[0], props)];
    } else {
      throw [
            invalid_argument,
            "A JS component called the Reason component " + (debugName + " which didn't implement the JS->Reason React props conversion.")
          ];
    }
  } else {
    return match;
  }
}

function createClass(debugName) {
  return createClass$1({
              displayName: debugName,
              subscriptions: null,
              self: (function (state, retainedProps) {
                  var $$this = this;
                  return /* record */[
                          /* handle */$$this.handleMethod,
                          /* reduce */$$this.reduceMethod,
                          /* state */state,
                          /* retainedProps */retainedProps,
                          /* send */$$this.sendMethod
                        ];
                }),
              transitionNextTotalState: (function (curTotalState, reasonStateUpdate) {
                  if (typeof reasonStateUpdate === "number") {
                    return curTotalState;
                  } else {
                    switch (reasonStateUpdate.tag | 0) {
                      case 0 :
                          return {
                                  reasonState: reasonStateUpdate[0],
                                  reasonStateVersion: curTotalState.reasonStateVersion + 1 | 0,
                                  reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements,
                                  sideEffects: curTotalState.sideEffects
                                };
                      case 1 :
                          return {
                                  reasonState: reasonStateUpdate[0],
                                  reasonStateVersion: curTotalState.reasonStateVersion + 1 | 0,
                                  reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements + 1 | 0,
                                  sideEffects: curTotalState.sideEffects
                                };
                      case 2 :
                          return {
                                  reasonState: curTotalState.reasonState,
                                  reasonStateVersion: curTotalState.reasonStateVersion + 1 | 0,
                                  reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements + 1 | 0,
                                  sideEffects: /* :: */[
                                    reasonStateUpdate[0],
                                    curTotalState.sideEffects
                                  ]
                                };
                      case 3 :
                          return {
                                  reasonState: reasonStateUpdate[0],
                                  reasonStateVersion: curTotalState.reasonStateVersion + 1 | 0,
                                  reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements,
                                  sideEffects: /* :: */[
                                    reasonStateUpdate[1],
                                    curTotalState.sideEffects
                                  ]
                                };
                      case 4 :
                          return {
                                  reasonState: reasonStateUpdate[0],
                                  reasonStateVersion: curTotalState.reasonStateVersion + 1 | 0,
                                  reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements + 1 | 0,
                                  sideEffects: /* :: */[
                                    reasonStateUpdate[1],
                                    curTotalState.sideEffects
                                  ]
                                };

                    }
                  }
                }),
              getInitialState: (function () {
                  var thisJs = (this);
                  var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  var initialReasonState = _1(convertedReasonProps[0][/* initialState */10], /* () */0);
                  return {
                          reasonState: initialReasonState,
                          reasonStateVersion: 1,
                          reasonStateVersionUsedToComputeSubelements: 1,
                          sideEffects: /* [] */0
                        };
                }),
              componentDidMount: (function () {
                  var $$this = this;
                  var thisJs = (this);
                  var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  var component = convertedReasonProps[0];
                  var curTotalState = thisJs.state;
                  var curReasonState = curTotalState.reasonState;
                  var self = $$this.self(curReasonState, component[/* retainedProps */11]);
                  if (component[/* subscriptions */13] !== subscriptionsDefault) {
                    var subscriptions = map((function (param) {
                            var unsubscribe = param[1];
                            var token = _1(param[0], /* () */0);
                            return (function () {
                                return _1(unsubscribe, token);
                              });
                          }), _1(component[/* subscriptions */13], self));
                    $$this.subscriptions = subscriptions;
                  }
                  if (component[/* didMount */4] !== lifecycleNoUpdate) {
                    var reasonStateUpdate = _1(component[/* didMount */4], self);
                    var nextTotalState = $$this.transitionNextTotalState(curTotalState, reasonStateUpdate);
                    if (nextTotalState.reasonStateVersion !== curTotalState.reasonStateVersion) {
                      return thisJs.setState(nextTotalState);
                    } else {
                      return 0;
                    }
                  } else {
                    return 0;
                  }
                }),
              componentDidUpdate: (function (prevProps, prevState) {
                  var $$this = this;
                  var thisJs = (this);
                  var curState = thisJs.state;
                  var curReasonState = curState.reasonState;
                  var newJsProps = thisJs.props;
                  var newConvertedReasonProps = convertPropsIfTheyreFromJs(newJsProps, thisJs.jsPropsToReason, debugName);
                  var newComponent = newConvertedReasonProps[0];
                  if (newComponent[/* didUpdate */5] !== lifecyclePreviousCurrentReturnUnit) {
                    var match = +(prevProps === newJsProps);
                    var oldConvertedReasonProps = match !== 0 ? newConvertedReasonProps : convertPropsIfTheyreFromJs(prevProps, thisJs.jsPropsToReason, debugName);
                    var prevReasonState = prevState.reasonState;
                    var newSelf = $$this.self(curReasonState, newComponent[/* retainedProps */11]);
                    var oldSelf_000 = /* handle */newSelf[/* handle */0];
                    var oldSelf_001 = /* reduce */newSelf[/* reduce */1];
                    var oldSelf_003 = /* retainedProps */oldConvertedReasonProps[0][/* retainedProps */11];
                    var oldSelf_004 = /* send */newSelf[/* send */4];
                    var oldSelf = /* record */[
                      oldSelf_000,
                      oldSelf_001,
                      /* state */prevReasonState,
                      oldSelf_003,
                      oldSelf_004
                    ];
                    return _1(newComponent[/* didUpdate */5], /* record */[
                                /* oldSelf */oldSelf,
                                /* newSelf */newSelf
                              ]);
                  } else {
                    return 0;
                  }
                }),
              componentWillUnmount: (function () {
                  var $$this = this;
                  var thisJs = (this);
                  var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  var component = convertedReasonProps[0];
                  var curState = thisJs.state;
                  var curReasonState = curState.reasonState;
                  if (component[/* willUnmount */6] !== lifecycleReturnUnit) {
                    _1(component[/* willUnmount */6], $$this.self(curReasonState, component[/* retainedProps */11]));
                  }
                  var match = $$this.subscriptions;
                  if (match == null) {
                    return /* () */0;
                  } else {
                    return iter((function (unsubscribe) {
                                  return _1(unsubscribe, /* () */0);
                                }), rev(match));
                  }
                }),
              componentWillUpdate: (function (nextProps, nextState) {
                  var $$this = this;
                  var thisJs = (this);
                  var newConvertedReasonProps = convertPropsIfTheyreFromJs(nextProps, thisJs.jsPropsToReason, debugName);
                  var newComponent = newConvertedReasonProps[0];
                  if (newComponent[/* willUpdate */7] !== lifecyclePreviousNextUnit) {
                    var oldJsProps = thisJs.props;
                    var match = +(nextProps === oldJsProps);
                    var oldConvertedReasonProps = match !== 0 ? newConvertedReasonProps : convertPropsIfTheyreFromJs(oldJsProps, thisJs.jsPropsToReason, debugName);
                    var curState = thisJs.state;
                    var curReasonState = curState.reasonState;
                    var nextReasonState = nextState.reasonState;
                    var newSelf = $$this.self(nextReasonState, newComponent[/* retainedProps */11]);
                    var oldSelf_000 = /* handle */newSelf[/* handle */0];
                    var oldSelf_001 = /* reduce */newSelf[/* reduce */1];
                    var oldSelf_003 = /* retainedProps */oldConvertedReasonProps[0][/* retainedProps */11];
                    var oldSelf_004 = /* send */newSelf[/* send */4];
                    var oldSelf = /* record */[
                      oldSelf_000,
                      oldSelf_001,
                      /* state */curReasonState,
                      oldSelf_003,
                      oldSelf_004
                    ];
                    return _1(newComponent[/* willUpdate */7], /* record */[
                                /* oldSelf */oldSelf,
                                /* newSelf */newSelf
                              ]);
                  } else {
                    return 0;
                  }
                }),
              componentWillReceiveProps: (function (nextProps) {
                  var $$this = this;
                  var thisJs = (this);
                  var newConvertedReasonProps = convertPropsIfTheyreFromJs(nextProps, thisJs.jsPropsToReason, debugName);
                  var newComponent = newConvertedReasonProps[0];
                  if (newComponent[/* willReceiveProps */3] !== willReceivePropsDefault) {
                    var oldJsProps = thisJs.props;
                    var match = +(nextProps === oldJsProps);
                    var oldConvertedReasonProps = match !== 0 ? newConvertedReasonProps : convertPropsIfTheyreFromJs(oldJsProps, thisJs.jsPropsToReason, debugName);
                    var oldComponent = oldConvertedReasonProps[0];
                    return thisJs.setState((function (curTotalState, _) {
                                  var curReasonState = curTotalState.reasonState;
                                  var curReasonStateVersion = curTotalState.reasonStateVersion;
                                  var oldSelf = $$this.self(curReasonState, oldComponent[/* retainedProps */11]);
                                  var nextReasonState = _1(newComponent[/* willReceiveProps */3], oldSelf);
                                  var match = +(nextReasonState !== curReasonState);
                                  var nextReasonStateVersion = match !== 0 ? curReasonStateVersion + 1 | 0 : curReasonStateVersion;
                                  if (nextReasonStateVersion !== curReasonStateVersion) {
                                    return {
                                            reasonState: nextReasonState,
                                            reasonStateVersion: nextReasonStateVersion,
                                            reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements,
                                            sideEffects: nextReasonState.sideEffects
                                          };
                                  } else {
                                    return curTotalState;
                                  }
                                }));
                  } else {
                    return 0;
                  }
                }),
              shouldComponentUpdate: (function (nextJsProps, nextState, _) {
                  var $$this = this;
                  var thisJs = (this);
                  var curJsProps = thisJs.props;
                  var propsWarrantRerender = +(nextJsProps !== curJsProps);
                  var oldConvertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  var match = +(nextJsProps === curJsProps);
                  var newConvertedReasonProps = match !== 0 ? oldConvertedReasonProps : convertPropsIfTheyreFromJs(nextJsProps, thisJs.jsPropsToReason, debugName);
                  var newComponent = newConvertedReasonProps[0];
                  var nextReasonStateVersion = nextState.reasonStateVersion;
                  var nextReasonStateVersionUsedToComputeSubelements = nextState.reasonStateVersionUsedToComputeSubelements;
                  var stateChangeWarrantsComputingSubelements = +(nextReasonStateVersionUsedToComputeSubelements !== nextReasonStateVersion);
                  var warrantsUpdate = propsWarrantRerender || stateChangeWarrantsComputingSubelements;
                  var nextReasonState = nextState.reasonState;
                  var newSelf = $$this.self(nextReasonState, newComponent[/* retainedProps */11]);
                  var ret;
                  if (warrantsUpdate && newComponent[/* shouldUpdate */8] !== lifecycleReturnTrue) {
                    var curState = thisJs.state;
                    var curReasonState = curState.reasonState;
                    var oldSelf_000 = /* handle */newSelf[/* handle */0];
                    var oldSelf_001 = /* reduce */newSelf[/* reduce */1];
                    var oldSelf_003 = /* retainedProps */oldConvertedReasonProps[0][/* retainedProps */11];
                    var oldSelf_004 = /* send */newSelf[/* send */4];
                    var oldSelf = /* record */[
                      oldSelf_000,
                      oldSelf_001,
                      /* state */curReasonState,
                      oldSelf_003,
                      oldSelf_004
                    ];
                    ret = _1(newComponent[/* shouldUpdate */8], /* record */[
                          /* oldSelf */oldSelf,
                          /* newSelf */newSelf
                        ]);
                  } else {
                    ret = warrantsUpdate;
                  }
                  nextState.reasonStateVersionUsedToComputeSubelements = nextReasonStateVersion;
                  var nextSideEffects = rev(nextState.sideEffects);
                  if (nextSideEffects !== /* [] */0) {
                    iter((function (performSideEffects) {
                            return _1(performSideEffects, newSelf);
                          }), nextSideEffects);
                    thisJs.setState((function (futureTotalState, _) {
                            var initialSegment = function (_acc, _n, _l) {
                              while(true) {
                                var l = _l;
                                var n = _n;
                                var acc = _acc;
                                if (l) {
                                  if (n > 0) {
                                    _l = l[1];
                                    _n = n - 1 | 0;
                                    _acc = /* :: */[
                                      l[0],
                                      acc
                                    ];
                                    continue ;

                                  } else {
                                    return rev(acc);
                                  }
                                } else {
                                  return rev(acc);
                                }
                              }
                            };
                            var n = length(futureTotalState.sideEffects) - length(nextState.sideEffects) | 0;
                            var newSideEffects = initialSegment(/* [] */0, n, futureTotalState.sideEffects);
                            return {
                                    reasonState: futureTotalState.reasonState,
                                    reasonStateVersion: futureTotalState.reasonStateVersion,
                                    reasonStateVersionUsedToComputeSubelements: futureTotalState.reasonStateVersionUsedToComputeSubelements,
                                    sideEffects: newSideEffects
                                  };
                          }));
                  }
                  return ret;
                }),
              handleMethod: (function (callback) {
                  var $$this = this;
                  var thisJs = (this);
                  return (function (callbackPayload) {
                      var curState = thisJs.state;
                      var curReasonState = curState.reasonState;
                      var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                      return _2(callback, callbackPayload, $$this.self(curReasonState, convertedReasonProps[0][/* retainedProps */11]));
                    });
                }),
              updateMethod: (function (callback) {
                  var $$this = this;
                  var thisJs = (this);
                  return (function ($$event) {
                      var curTotalState = thisJs.state;
                      var curReasonState = curTotalState.reasonState;
                      var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                      var reasonStateUpdate = _2(callback, $$event, $$this.self(curReasonState, convertedReasonProps[0][/* retainedProps */11]));
                      if (reasonStateUpdate) {
                        var nextTotalState = $$this.transitionNextTotalState(curTotalState, reasonStateUpdate);
                        if (nextTotalState.reasonStateVersion !== curTotalState.reasonStateVersion) {
                          return thisJs.setState(nextTotalState);
                        } else {
                          return 0;
                        }
                      } else {
                        return magicNull;
                      }
                    });
                }),
              sendMethod: (function (action) {
                  var $$this = this;
                  var thisJs = (this);
                  var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  var component = convertedReasonProps[0];
                  if (component[/* reducer */12] !== reducerDefault) {
                    var partialStateApplication = _1(component[/* reducer */12], action);
                    return thisJs.setState((function (curTotalState, _) {
                                  var curReasonState = curTotalState.reasonState;
                                  var reasonStateUpdate = _1(partialStateApplication, curReasonState);
                                  if (reasonStateUpdate) {
                                    var nextTotalState = $$this.transitionNextTotalState(curTotalState, reasonStateUpdate);
                                    if (nextTotalState.reasonStateVersion !== curTotalState.reasonStateVersion) {
                                      return nextTotalState;
                                    } else {
                                      return magicNull;
                                    }
                                  } else {
                                    return magicNull;
                                  }
                                }));
                  } else {
                    return 0;
                  }
                }),
              reduceMethod: (function (callback, payload) {
                  var $$this = this;
                  return $$this.sendMethod(_1(callback, payload));
                }),
              render: (function () {
                  var $$this = this;
                  var thisJs = (this);
                  var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  var created = convertedReasonProps[0];
                  var curState = thisJs.state;
                  var curReasonState = curState.reasonState;
                  return _1(created[/* render */9], $$this.self(curReasonState, created[/* retainedProps */11]));
                })
            });
}

function basicComponent(debugName) {
  return /* record */[
          /* debugName */debugName,
          /* reactClassInternal */createClass(debugName),
          /* handedOffState : record */[/* contents : None */0],
          /* willReceiveProps */willReceivePropsDefault,
          /* didMount */lifecycleNoUpdate,
          /* didUpdate */lifecyclePreviousCurrentReturnUnit,
          /* willUnmount */lifecycleReturnUnit,
          /* willUpdate */lifecyclePreviousNextUnit,
          /* shouldUpdate */lifecycleReturnTrue,
          /* render */renderDefault,
          /* initialState */initialStateDefault,
          /* retainedProps : () */0,
          /* reducer */reducerDefault,
          /* subscriptions */subscriptionsDefault,
          /* jsElementWrapped : None */0
        ];
}

var reducerComponent = basicComponent;

function wrapReasonForJs(component, jsPropsToReason) {
  var tmp = component[/* reactClassInternal */1].prototype;
  tmp.jsPropsToReason = /* Some */[jsPropsToReason];
  return component[/* reactClassInternal */1];
}

var dummyInteropComponent = basicComponent("interop");


/* magicNull Not a pure module */

/* No side effect */

var caml_methods_cache = caml_make_vect(1000, 0);


/* No side effect */

var component$1 = reducerComponent("NumericInput");

function make(onChange, value, _) {
  var handleChange = function ($$event, self) {
    var value = $$event.target.value;
    _1(self[/* send */4], /* UpdateValue */[value]);
    return _2(onChange, value, $$event);
  };
  var newrecord = component$1.slice();
  newrecord[/* render */9] = (function (param) {
      return undefined("input", {
                  type: "tel",
                  value: param[/* state */2][/* value */0],
                  onChange: _1(param[/* handle */0], handleChange)
                });
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* value */value,
              /* intValue */1
            ];
    });
  newrecord[/* reducer */12] = (function (action) {
      var value = action[0];
      return (function (state) {
          return /* Update */__(0, [/* record */[
                      /* value */value,
                      /* intValue */state[/* intValue */1]
                    ]]);
        });
    });
  return newrecord;
}

var $$default = wrapReasonForJs(component$1, (function (jsProps) {
        return make(jsProps.onChange, jsProps.value, /* array */[]);
      }));


/* component Not a pure module */


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtbnVtZXJpYy5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvYmxvY2suanMiLCIuLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfYXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jdXJyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5T2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX29iai5qcyIsIi4uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfaW8uanMiLCIuLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX3N5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfaW50MzIuanMiLCIuLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX3V0aWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9pbnQ2NC5qcyIsIi4uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfZm9ybWF0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9zdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2V4Y2VwdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX21pc3NpbmdfcG9seWZpbGwuanMiLCIuLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1saW50ZXJuYWxGb3JtYXRCYXNpY3MuanMiLCIuLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9wZXJ2YXNpdmVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvbGlzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2pzX2V4bi5qcyIsIi4uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYXNvbi1yZWFjdC9saWIvZXM2X2dsb2JhbC9zcmMvUmVhc29uUmVhY3RPcHRpbWl6ZWRDcmVhdGVDbGFzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFzb24tcmVhY3QvbGliL2VzNl9nbG9iYWwvc3JjL1JlYXNvblJlYWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvbWFyc2hhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L29iai5qcyIsIi4uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfb28uanMiLCIuLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1saW50ZXJuYWxPTy5qcyIsIi4uL2xpYi9lczZfZ2xvYmFsL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gX18odGFnLCBibG9jaykge1xuICBibG9jay50YWcgPSB0YWc7XG4gIHJldHVybiBibG9jaztcbn1cblxuZXhwb3J0IHtcbiAgX18gLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIG91dF9vZl9tZW1vcnkgPSAvKiB0dXBsZSAqL1tcbiAgXCJPdXRfb2ZfbWVtb3J5XCIsXG4gIDBcbl07XG5cbnZhciBzeXNfZXJyb3IgPSAvKiB0dXBsZSAqL1tcbiAgXCJTeXNfZXJyb3JcIixcbiAgLTFcbl07XG5cbnZhciBmYWlsdXJlID0gLyogdHVwbGUgKi9bXG4gIFwiRmFpbHVyZVwiLFxuICAtMlxuXTtcblxudmFyIGludmFsaWRfYXJndW1lbnQgPSAvKiB0dXBsZSAqL1tcbiAgXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gIC0zXG5dO1xuXG52YXIgZW5kX29mX2ZpbGUgPSAvKiB0dXBsZSAqL1tcbiAgXCJFbmRfb2ZfZmlsZVwiLFxuICAtNFxuXTtcblxudmFyIGRpdmlzaW9uX2J5X3plcm8gPSAvKiB0dXBsZSAqL1tcbiAgXCJEaXZpc2lvbl9ieV96ZXJvXCIsXG4gIC01XG5dO1xuXG52YXIgbm90X2ZvdW5kID0gLyogdHVwbGUgKi9bXG4gIFwiTm90X2ZvdW5kXCIsXG4gIC02XG5dO1xuXG52YXIgbWF0Y2hfZmFpbHVyZSA9IC8qIHR1cGxlICovW1xuICBcIk1hdGNoX2ZhaWx1cmVcIixcbiAgLTdcbl07XG5cbnZhciBzdGFja19vdmVyZmxvdyA9IC8qIHR1cGxlICovW1xuICBcIlN0YWNrX292ZXJmbG93XCIsXG4gIC04XG5dO1xuXG52YXIgc3lzX2Jsb2NrZWRfaW8gPSAvKiB0dXBsZSAqL1tcbiAgXCJTeXNfYmxvY2tlZF9pb1wiLFxuICAtOVxuXTtcblxudmFyIGFzc2VydF9mYWlsdXJlID0gLyogdHVwbGUgKi9bXG4gIFwiQXNzZXJ0X2ZhaWx1cmVcIixcbiAgLTEwXG5dO1xuXG52YXIgdW5kZWZpbmVkX3JlY3Vyc2l2ZV9tb2R1bGUgPSAvKiB0dXBsZSAqL1tcbiAgXCJVbmRlZmluZWRfcmVjdXJzaXZlX21vZHVsZVwiLFxuICAtMTFcbl07XG5cbm91dF9vZl9tZW1vcnkudGFnID0gMjQ4O1xuXG5zeXNfZXJyb3IudGFnID0gMjQ4O1xuXG5mYWlsdXJlLnRhZyA9IDI0ODtcblxuaW52YWxpZF9hcmd1bWVudC50YWcgPSAyNDg7XG5cbmVuZF9vZl9maWxlLnRhZyA9IDI0ODtcblxuZGl2aXNpb25fYnlfemVyby50YWcgPSAyNDg7XG5cbm5vdF9mb3VuZC50YWcgPSAyNDg7XG5cbm1hdGNoX2ZhaWx1cmUudGFnID0gMjQ4O1xuXG5zdGFja19vdmVyZmxvdy50YWcgPSAyNDg7XG5cbnN5c19ibG9ja2VkX2lvLnRhZyA9IDI0ODtcblxuYXNzZXJ0X2ZhaWx1cmUudGFnID0gMjQ4O1xuXG51bmRlZmluZWRfcmVjdXJzaXZlX21vZHVsZS50YWcgPSAyNDg7XG5cbmV4cG9ydCB7XG4gIG91dF9vZl9tZW1vcnkgICAgICAgICAgICAgICxcbiAgc3lzX2Vycm9yICAgICAgICAgICAgICAgICAgLFxuICBmYWlsdXJlICAgICAgICAgICAgICAgICAgICAsXG4gIGludmFsaWRfYXJndW1lbnQgICAgICAgICAgICxcbiAgZW5kX29mX2ZpbGUgICAgICAgICAgICAgICAgLFxuICBkaXZpc2lvbl9ieV96ZXJvICAgICAgICAgICAsXG4gIG5vdF9mb3VuZCAgICAgICAgICAgICAgICAgICxcbiAgbWF0Y2hfZmFpbHVyZSAgICAgICAgICAgICAgLFxuICBzdGFja19vdmVyZmxvdyAgICAgICAgICAgICAsXG4gIHN5c19ibG9ja2VkX2lvICAgICAgICAgICAgICxcbiAgYXNzZXJ0X2ZhaWx1cmUgICAgICAgICAgICAgLFxuICB1bmRlZmluZWRfcmVjdXJzaXZlX21vZHVsZSAsXG4gIFxufVxuLyogIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIGNhbWxfYXJyYXlfc3ViKHgsIG9mZnNldCwgbGVuKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuKTtcbiAgdmFyIGogPSAwO1xuICB2YXIgaSA9IG9mZnNldDtcbiAgd2hpbGUoaiA8IGxlbikge1xuICAgIHJlc3VsdFtqXSA9IHhbaV07XG4gICAgaiA9IGogKyAxIHwgMDtcbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBsZW4oX2FjYywgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKGwpIHtcbiAgICAgIF9sID0gbFsxXTtcbiAgICAgIF9hY2MgPSBsWzBdLmxlbmd0aCArIGFjYyB8IDA7XG4gICAgICBjb250aW51ZSA7XG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbGwoYXJyLCBfaSwgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAobCkge1xuICAgICAgdmFyIHggPSBsWzBdO1xuICAgICAgdmFyIGwkMSA9IHgubGVuZ3RoO1xuICAgICAgdmFyIGsgPSBpO1xuICAgICAgdmFyIGogPSAwO1xuICAgICAgd2hpbGUoaiA8IGwkMSkge1xuICAgICAgICBhcnJba10gPSB4W2pdO1xuICAgICAgICBrID0gayArIDEgfCAwO1xuICAgICAgICBqID0gaiArIDEgfCAwO1xuICAgICAgfTtcbiAgICAgIF9sID0gbFsxXTtcbiAgICAgIF9pID0gaztcbiAgICAgIGNvbnRpbnVlIDtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogKCkgKi8wO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FtbF9hcnJheV9jb25jYXQobCkge1xuICB2YXIgdiA9IGxlbigwLCBsKTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh2KTtcbiAgZmlsbChyZXN1bHQsIDAsIGwpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjYW1sX2FycmF5X3NldCh4cywgaW5kZXgsIG5ld3ZhbCkge1xuICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHhzLmxlbmd0aCkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiaW5kZXggb3V0IG9mIGJvdW5kc1wiXG4gICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgeHNbaW5kZXhdID0gbmV3dmFsO1xuICAgIHJldHVybiAvKiAoKSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9hcnJheV9nZXQoeHMsIGluZGV4KSB7XG4gIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0geHMubGVuZ3RoKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJpbmRleCBvdXQgb2YgYm91bmRzXCJcbiAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geHNbaW5kZXhdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfbWFrZV92ZWN0KGxlbiwgaW5pdCkge1xuICB2YXIgYiA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGxlbiAtIDEgfCAwOyBpIDw9IGlfZmluaXNoOyArK2kpe1xuICAgIGJbaV0gPSBpbml0O1xuICB9XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBjYW1sX2FycmF5X2JsaXQoYTEsIGkxLCBhMiwgaTIsIGxlbikge1xuICBpZiAoaTIgPD0gaTEpIHtcbiAgICBmb3IodmFyIGogPSAwICxqX2ZpbmlzaCA9IGxlbiAtIDEgfCAwOyBqIDw9IGpfZmluaXNoOyArK2ope1xuICAgICAgYTJbaiArIGkyIHwgMF0gPSBhMVtqICsgaTEgfCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIC8qICgpICovMDtcbiAgfSBlbHNlIHtcbiAgICBmb3IodmFyIGokMSA9IGxlbiAtIDEgfCAwOyBqJDEgPj0gMDsgLS1qJDEpe1xuICAgICAgYTJbaiQxICsgaTIgfCAwXSA9IGExW2okMSArIGkxIHwgMF07XG4gICAgfVxuICAgIHJldHVybiAvKiAoKSAqLzA7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgY2FtbF9hcnJheV9zdWIgICAgLFxuICBjYW1sX2FycmF5X2NvbmNhdCAsXG4gIGNhbWxfbWFrZV92ZWN0ICAgICxcbiAgY2FtbF9hcnJheV9ibGl0ICAgLFxuICBjYW1sX2FycmF5X2dldCAgICAsXG4gIGNhbWxfYXJyYXlfc2V0ICAgICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBDYW1sX2FycmF5IGZyb20gXCIuL2NhbWxfYXJyYXkuanNcIjtcblxuZnVuY3Rpb24gYXBwKF9mLCBfYXJncykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFyZ3MgPSBfYXJncztcbiAgICB2YXIgZiA9IF9mO1xuICAgIHZhciBhcml0eSA9IGYubGVuZ3RoO1xuICAgIHZhciBhcml0eSQxID0gYXJpdHkgPyBhcml0eSA6IDE7XG4gICAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgIHZhciBkID0gYXJpdHkkMSAtIGxlbiB8IDA7XG4gICAgaWYgKGQpIHtcbiAgICAgIGlmIChkIDwgMCkge1xuICAgICAgICBfYXJncyA9IENhbWxfYXJyYXkuY2FtbF9hcnJheV9zdWIoYXJncywgYXJpdHkkMSwgLWQgfCAwKTtcbiAgICAgICAgX2YgPSBmLmFwcGx5KG51bGwsIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zdWIoYXJncywgMCwgYXJpdHkkMSkpO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbihmLGFyZ3Mpe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4gYXBwKGYsIGFyZ3MuY29uY2F0KC8qIGFycmF5ICovW3hdKSk7XG4gICAgICAgIH1cbiAgICAgICAgfShmLGFyZ3MpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjdXJyeV8xKG8sIGEwLCBhcml0eSkge1xuICBpZiAoYXJpdHkgPiA3IHx8IGFyaXR5IDwgMCkge1xuICAgIHJldHVybiBhcHAobywgLyogYXJyYXkgKi9bYTBdKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDAgOiBcbiAgICAgIGNhc2UgMSA6IFxuICAgICAgICAgIHJldHVybiBvKGEwKTtcbiAgICAgIGNhc2UgMiA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgMyA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNCA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNSA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNiA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNyA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0LCBwYXJhbSQ1KSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCwgcGFyYW0kNSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfMShvLCBhMCkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAxKSB7XG4gICAgcmV0dXJuIG8oYTApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjdXJyeV8xKG8sIGEwLCBhcml0eSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX18xKG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMSkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwKSB7XG4gICAgICAgIHJldHVybiBfMShvLCBhMCk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjdXJyeV8yKG8sIGEwLCBhMSwgYXJpdHkpIHtcbiAgaWYgKGFyaXR5ID4gNyB8fCBhcml0eSA8IDApIHtcbiAgICByZXR1cm4gYXBwKG8sIC8qIGFycmF5ICovW1xuICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgIGExXG4gICAgICAgICAgICAgIF0pO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMCA6IFxuICAgICAgY2FzZSAxIDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgLyogYXJyYXkgKi9bYTFdKTtcbiAgICAgIGNhc2UgMiA6IFxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSk7XG4gICAgICBjYXNlIDMgOiBcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA0IDogXG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNSA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDYgOiBcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMykge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA3IDogXG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfMihvLCBhMCwgYTEpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMikge1xuICAgIHJldHVybiBvKGEwLCBhMSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGN1cnJ5XzIobywgYTAsIGExLCBhcml0eSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX18yKG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMikge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwLCBhMSkge1xuICAgICAgICByZXR1cm4gXzIobywgYTAsIGExKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGN1cnJ5XzMobywgYTAsIGExLCBhMiwgYXJpdHkpIHtcbiAgdmFyIGV4aXQgPSAwO1xuICBpZiAoYXJpdHkgPiA3IHx8IGFyaXR5IDwgMCkge1xuICAgIHJldHVybiBhcHAobywgLyogYXJyYXkgKi9bXG4gICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgYTJcbiAgICAgICAgICAgICAgXSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAwIDogXG4gICAgICBjYXNlIDEgOiBcbiAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMiA6IFxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCAvKiBhcnJheSAqL1thMl0pO1xuICAgICAgY2FzZSAzIDogXG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMik7XG4gICAgICBjYXNlIDQgOiBcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNSA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA2IDogXG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDcgOiBcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMykge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIFxuICAgIH1cbiAgfVxuICBpZiAoZXhpdCA9PT0gMSkge1xuICAgIHJldHVybiBhcHAobyhhMCksIC8qIGFycmF5ICovW1xuICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgIGEyXG4gICAgICAgICAgICAgIF0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBfMyhvLCBhMCwgYTEsIGEyKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDMpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3VycnlfMyhvLCBhMCwgYTEsIGEyLCBhcml0eSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX18zKG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMykge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwLCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIF8zKG8sIGEwLCBhMSwgYTIpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3VycnlfNChvLCBhMCwgYTEsIGEyLCBhMywgYXJpdHkpIHtcbiAgdmFyIGV4aXQgPSAwO1xuICBpZiAoYXJpdHkgPiA3IHx8IGFyaXR5IDwgMCkge1xuICAgIHJldHVybiBhcHAobywgLyogYXJyYXkgKi9bXG4gICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgYTNcbiAgICAgICAgICAgICAgXSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAwIDogXG4gICAgICBjYXNlIDEgOiBcbiAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMiA6IFxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCAvKiBhcnJheSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhM1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6IFxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgLyogYXJyYXkgKi9bYTNdKTtcbiAgICAgIGNhc2UgNCA6IFxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzKTtcbiAgICAgIGNhc2UgNSA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNiA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNyA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgIFxuICAgIH1cbiAgfVxuICBpZiAoZXhpdCA9PT0gMSkge1xuICAgIHJldHVybiBhcHAobyhhMCksIC8qIGFycmF5ICovW1xuICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgIGEzXG4gICAgICAgICAgICAgIF0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBfNChvLCBhMCwgYTEsIGEyLCBhMykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA0KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjdXJyeV80KG8sIGEwLCBhMSwgYTIsIGEzLCBhcml0eSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX180KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNCkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzKSB7XG4gICAgICAgIHJldHVybiBfNChvLCBhMCwgYTEsIGEyLCBhMyk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjdXJyeV81KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYXJpdHkpIHtcbiAgdmFyIGV4aXQgPSAwO1xuICBpZiAoYXJpdHkgPiA3IHx8IGFyaXR5IDwgMCkge1xuICAgIHJldHVybiBhcHAobywgLyogYXJyYXkgKi9bXG4gICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgXSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAwIDogXG4gICAgICBjYXNlIDEgOiBcbiAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMiA6IFxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCAvKiBhcnJheSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6IFxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgLyogYXJyYXkgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOiBcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCAvKiBhcnJheSAqL1thNF0pO1xuICAgICAgY2FzZSA1IDogXG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0KTtcbiAgICAgIGNhc2UgNiA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgcGFyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDcgOiBcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgfVxuICB9XG4gIGlmIChleGl0ID09PSAxKSB7XG4gICAgcmV0dXJuIGFwcChvKGEwKSwgLyogYXJyYXkgKi9bXG4gICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIF81KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA1KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3VycnlfNShvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGFyaXR5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfXzUobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA1KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0KSB7XG4gICAgICAgIHJldHVybiBfNShvLCBhMCwgYTEsIGEyLCBhMywgYTQpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3VycnlfNihvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhcml0eSkge1xuICB2YXIgZXhpdCA9IDA7XG4gIGlmIChhcml0eSA+IDcgfHwgYXJpdHkgPCAwKSB7XG4gICAgcmV0dXJuIGFwcChvLCAvKiBhcnJheSAqL1tcbiAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICBdKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDAgOiBcbiAgICAgIGNhc2UgMSA6IFxuICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyIDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIC8qIGFycmF5ICovW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCAvKiBhcnJheSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6IFxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIC8qIGFycmF5ICovW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIC8qIGFycmF5ICovW2E1XSk7XG4gICAgICBjYXNlIDYgOiBcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgICAgIGNhc2UgNyA6IFxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIHBhcmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgfVxuICB9XG4gIGlmIChleGl0ID09PSAxKSB7XG4gICAgcmV0dXJuIGFwcChvKGEwKSwgLyogYXJyYXkgKi9bXG4gICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIF82KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNikge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjdXJyeV82KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGFyaXR5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfXzYobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA2KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICAgICAgICByZXR1cm4gXzYobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjdXJyeV83KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhcml0eSkge1xuICB2YXIgZXhpdCA9IDA7XG4gIGlmIChhcml0eSA+IDcgfHwgYXJpdHkgPCAwKSB7XG4gICAgcmV0dXJuIGFwcChvLCAvKiBhcnJheSAqL1tcbiAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICBdKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDAgOiBcbiAgICAgIGNhc2UgMSA6IFxuICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyIDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIC8qIGFycmF5ICovW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCAvKiBhcnJheSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6IFxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIC8qIGFycmF5ICovW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIC8qIGFycmF5ICovW1xuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA2IDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpLCAvKiBhcnJheSAqL1thNl0pO1xuICAgICAgY2FzZSA3IDogXG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICAgICAgXG4gICAgfVxuICB9XG4gIGlmIChleGl0ID09PSAxKSB7XG4gICAgcmV0dXJuIGFwcChvKGEwKSwgLyogYXJyYXkgKi9bXG4gICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIF83KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDcpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGN1cnJ5XzcobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGFyaXR5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfXzcobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA3KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHtcbiAgICAgICAgcmV0dXJuIF83KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGN1cnJ5XzgobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhcml0eSkge1xuICB2YXIgZXhpdCA9IDA7XG4gIGlmIChhcml0eSA+IDcgfHwgYXJpdHkgPCAwKSB7XG4gICAgcmV0dXJuIGFwcChvLCAvKiBhcnJheSAqL1tcbiAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICBdKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDAgOiBcbiAgICAgIGNhc2UgMSA6IFxuICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyIDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIC8qIGFycmF5ICovW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCAvKiBhcnJheSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6IFxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIC8qIGFycmF5ICovW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIC8qIGFycmF5ICovW1xuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA2IDogXG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpLCAvKiBhcnJheSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNyA6IFxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiksIC8qIGFycmF5ICovW2E3XSk7XG4gICAgICBcbiAgICB9XG4gIH1cbiAgaWYgKGV4aXQgPT09IDEpIHtcbiAgICByZXR1cm4gYXBwKG8oYTApLCAvKiBhcnJheSAqL1tcbiAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICBdKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gXzgobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDgpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjdXJyeV84KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYXJpdHkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9fOChvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDgpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpIHtcbiAgICAgICAgcmV0dXJuIF84KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNyk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBhcHAgICAgICxcbiAgY3VycnlfMSAsXG4gIF8xICAgICAgLFxuICBfXzEgICAgICxcbiAgY3VycnlfMiAsXG4gIF8yICAgICAgLFxuICBfXzIgICAgICxcbiAgY3VycnlfMyAsXG4gIF8zICAgICAgLFxuICBfXzMgICAgICxcbiAgY3VycnlfNCAsXG4gIF80ICAgICAgLFxuICBfXzQgICAgICxcbiAgY3VycnlfNSAsXG4gIF81ICAgICAgLFxuICBfXzUgICAgICxcbiAgY3VycnlfNiAsXG4gIF82ICAgICAgLFxuICBfXzYgICAgICxcbiAgY3VycnlfNyAsXG4gIF83ICAgICAgLFxuICBfXzcgICAgICxcbiAgY3VycnlfOCAsXG4gIF84ICAgICAgLFxuICBfXzggICAgICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5T2JqZWN0OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaW52YXJpYW50KHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSA9PT0gJ2Z1bmN0aW9uJywgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gJyArICd0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJXNgLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKTtcbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgd2FybmluZyghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMi4wXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBlbXB0eU9iamVjdCA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5T2JqZWN0Jyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi4yLjAnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sWydmb3InXTtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9DQUxMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5jYWxsJykgOiAweGVhYzg7XG52YXIgUkVBQ1RfUkVUVVJOX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5yZXR1cm4nKSA6IDB4ZWFjOTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFdBUk5JTkc6IERPIE5PVCBtYW51YWxseSByZXF1aXJlIHRoaXMgbW9kdWxlLlxuICogVGhpcyBpcyBhIHJlcGxhY2VtZW50IGZvciBgaW52YXJpYW50KC4uLilgIHVzZWQgYnkgdGhlIGVycm9yIGNvZGUgc3lzdGVtXG4gKiBhbmQgd2lsbCBfb25seV8gYmUgcmVxdWlyZWQgYnkgdGhlIGNvcnJlc3BvbmRpbmcgYmFiZWwgcGFzcy5cbiAqIEl0IGFsd2F5cyB0aHJvd3MuXG4gKi9cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb25zdHJ1Y3RvciAmJiAoY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIGNhbGxlck5hbWU7XG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3YXJuaW5nKGZhbHNlLCAnJXMoLi4uKTogQ2FuIG9ubHkgdXBkYXRlIGEgbW91bnRlZCBvciBtb3VudGluZyBjb21wb25lbnQuICcgKyAnVGhpcyB1c3VhbGx5IG1lYW5zIHlvdSBjYWxsZWQgJXMoKSBvbiBhbiB1bm1vdW50ZWQgY29tcG9uZW50LiAnICsgJ1RoaXMgaXMgYSBuby1vcC5cXG5cXG5QbGVhc2UgY2hlY2sgdGhlIGNvZGUgZm9yIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICAhKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJykgOiB2b2lkIDA7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuXG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG5cbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAvLyBEdXBsaWNhdGVkIGZyb20gQ29tcG9uZW50LlxuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50O1xuLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbmZ1bmN0aW9uIEFzeW5jQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIC8vIER1cGxpY2F0ZWQgZnJvbSBDb21wb25lbnQuXG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgYXN5bmNDb21wb25lbnRQcm90b3R5cGUgPSBBc3luY0NvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbmFzeW5jQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQXN5bmNDb21wb25lbnQ7XG4vLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cbl9hc3NpZ24oYXN5bmNDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuYXN5bmNDb21wb25lbnRQcm90b3R5cGUudW5zdGFibGVfaXNBc3luY1JlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcbmFzeW5jQ29tcG9uZW50UHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG5cbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoZmFsc2UsICclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3cgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9O1xuXG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7XG4gICAgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pO1xuICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIgcHJvcHMgPSB7fTtcblxuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTtcbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuJCR0eXBlb2YgPT09ICd1bmRlZmluZWQnIHx8IHByb3BzLiQkdHlwZW9mICE9PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVmYWN0b3J5XG4gKi9cblxuXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7XG5cbiAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmO1xuICAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7XG4gIC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG5cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgdmFsaWQgY29tcG9uZW50LlxuICogQGZpbmFsXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xuXG57XG4gIC8vIENvbXBvbmVudCB0aGF0IGlzIGJlaW5nIHdvcmtlZCBvblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHJldHVybiBpbXBsKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG52YXIgUE9PTF9TSVpFID0gMTA7XG52YXIgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gdHJhdmVyc2VDb250ZXh0UG9vbC5wb3AoKTtcbiAgICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgICByZXR1cm4gdHJhdmVyc2VDb250ZXh0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hcFJlc3VsdCxcbiAgICAgIGtleVByZWZpeDoga2V5UHJlZml4LFxuICAgICAgZnVuYzogbWFwRnVuY3Rpb24sXG4gICAgICBjb250ZXh0OiBtYXBDb250ZXh0LFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KSB7XG4gIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gKiBwcm9jZXNzLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ0FMTF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUkVUVVJOX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sXG4gICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgd2FybmluZyhkaWRXYXJuQWJvdXRNYXBzLCAnVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyB1bnN1cHBvcnRlZCBhbmQgd2lsbCBsaWtlbHkgeWllbGQgJyArICd1bmV4cGVjdGVkIHJlc3VsdHMuIENvbnZlcnQgaXQgdG8gYSBzZXF1ZW5jZS9pdGVyYWJsZSBvZiBrZXllZCAnICsgJ1JlYWN0RWxlbWVudHMgaW5zdGVhZC4lcycsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgYWRkZW5kdW0gPSAnJztcbiAgICAgIHtcbiAgICAgICAgYWRkZW5kdW0gPSAnIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicgKyBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsICdPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6ICVzKS4lcycsIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZywgYWRkZW5kdW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfVxuICAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCxcbiAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4uY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbiwgY29udGV4dCkge1xuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwsIG51bGwpO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4udG9hcnJheVxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICAhaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJykgOiB2b2lkIDA7XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxudmFyIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUgPSBmdW5jdGlvbiAobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyAoc291cmNlID8gJyAoYXQgJyArIHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJyA6IG93bmVyTmFtZSA/ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJyA6ICcnKTtcbn07XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUoZmliZXIpIHtcbiAgdmFyIHR5cGUgPSBmaWJlci50eXBlO1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWU7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVhY3RFbGVtZW50VmFsaWRhdG9yIHByb3ZpZGVzIGEgd3JhcHBlciBhcm91bmQgYSBlbGVtZW50IGZhY3RvcnlcbiAqIHdoaWNoIHZhbGlkYXRlcyB0aGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBlbGVtZW50LiBUaGlzIGlzIGludGVuZGVkIHRvIGJlXG4gKiB1c2VkIG9ubHkgaW4gREVWIGFuZCBjb3VsZCBiZSByZXBsYWNlZCBieSBhIHN0YXRpYyB0eXBlIGNoZWNrZXIgZm9yIGxhbmd1YWdlc1xuICogdGhhdCBzdXBwb3J0IGl0LlxuICovXG5cbntcbiAgdmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICB2YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcblxuICB2YXIgZ2V0RGlzcGxheU5hbWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnI2VtcHR5JztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiAnI3RleHQnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnR5cGU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHJldHVybiAnUmVhY3QuRnJhZ21lbnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudC50eXBlLmRpc3BsYXlOYW1lIHx8IGVsZW1lbnQudHlwZS5uYW1lIHx8ICdVbmtub3duJztcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldERpc3BsYXlOYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KTtcbiAgICAgIHZhciBvd25lciA9IGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9vd25lcjtcbiAgICAgIHN0YWNrICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgZ2V0Q29tcG9uZW50TmFtZShvd25lcikpO1xuICAgIH1cbiAgICBzdGFjayArPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKSB8fCAnJztcbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG5cbiAgdmFyIFZBTElEX0ZSQUdNRU5UX1BST1BTID0gbmV3IE1hcChbWydjaGlsZHJlbicsIHRydWVdLCBbJ2tleScsIHRydWVdXSk7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50UHJvcHMuX19zb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBzb3VyY2UgPSBlbGVtZW50UHJvcHMuX19zb3VyY2U7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9ICdcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDwnICsgcGFyZW50TmFtZSArICc+Lic7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmZvO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuXG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlO1xuXG4gIC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSAnIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tICcgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyKSArICcuJztcbiAgfVxuXG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAge1xuICAgIHdhcm5pbmcoZmFsc2UsICdFYWNoIGNoaWxkIGluIGFuIGFycmF5IG9yIGl0ZXJhdG9yIHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLiVzJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lciwgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgfVxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIGNvbXBvbmVudENsYXNzID0gZWxlbWVudC50eXBlO1xuICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuYW1lID0gY29tcG9uZW50Q2xhc3MuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Q2xhc3MubmFtZTtcbiAgdmFyIHByb3BUeXBlcyA9IGNvbXBvbmVudENsYXNzLnByb3BUeXBlcztcbiAgaWYgKHByb3BUeXBlcykge1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuICB9IGVsc2UgaWYgKGNvbXBvbmVudENsYXNzLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICB3YXJuaW5nKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgd2FybmluZyhjb21wb25lbnRDbGFzcy5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBmcmFnbWVudDtcblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIga2V5ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIGlmICghVkFMSURfRlJBR01FTlRfUFJPUFMuaGFzKGtleSkpIHtcbiAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4lcycsIGtleSwgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbJ3JldHVybiddKSB7XG4gICAgICAgIF9pdGVyYXRvclsncmV0dXJuJ10oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4lcycsIGdldFN0YWNrQWRkZW5kdW0oKSk7XG4gIH1cblxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N5bWJvbCcgfHwgdHlwZW9mIHR5cGUgPT09ICdudW1iZXInO1xuICAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShwcm9wcyk7XG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICBpbmZvICs9IGdldFN0YWNrQWRkZW5kdW0oKSB8fCAnJztcblxuICAgIHdhcm5pbmcoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGUgPT0gbnVsbCA/IHR5cGUgOiB0eXBlb2YgdHlwZSwgaW5mbyk7XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzeW1ib2wnICYmIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgLy8gTGVnYWN5IGhvb2sgVE9ETzogV2FybiBpZiB0aGlzIGlzIGFjY2Vzc2VkXG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbnZhciBSZWFjdCA9IHtcbiAgQ2hpbGRyZW46IHtcbiAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIG9ubHk6IG9ubHlDaGlsZFxuICB9LFxuXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuICB1bnN0YWJsZV9Bc3luY0NvbXBvbmVudDogQXN5bmNDb21wb25lbnQsXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG5cbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjbG9uZUVsZW1lbnQ6IGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjcmVhdGVGYWN0b3J5OiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24sXG4gIGlzVmFsaWRFbGVtZW50OiBpc1ZhbGlkRWxlbWVudCxcblxuICB2ZXJzaW9uOiBSZWFjdFZlcnNpb24sXG5cbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IHtcbiAgICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gICAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgICBhc3NpZ246IF9hc3NpZ25cbiAgfVxufTtcblxue1xuICBfYXNzaWduKFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELCB7XG4gICAgLy8gVGhlc2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWU6IFJlYWN0RGVidWdDdXJyZW50RnJhbWUsXG4gICAgLy8gU2hpbSBmb3IgUmVhY3QgRE9NIDE2LjAuMCB3aGljaCBzdGlsbCBkZXN0cnVjdHVyZWQgKGJ1dCBub3QgdXNlZCkgdGhpcy5cbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gUmVhY3QgMTcuMC5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiB7fVxuICB9KTtcbn1cblxuXG5cbnZhciBSZWFjdCQyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmF1bHQ6IFJlYWN0XG59KTtcblxudmFyIFJlYWN0JDMgPSAoIFJlYWN0JDIgJiYgUmVhY3QgKSB8fCBSZWFjdCQyO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdC5cbnZhciByZWFjdCA9IFJlYWN0JDNbJ2RlZmF1bHQnXSA/IFJlYWN0JDNbJ2RlZmF1bHQnXSA6IFJlYWN0JDM7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhY3Q7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgQmxvY2sgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vYmxvY2suanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIGNhbWxfb2JqX2R1cCh4KSB7XG4gIHZhciBsZW4gPSB4Lmxlbmd0aCB8IDA7XG4gIHZhciB2ID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gbGVuIC0gMSB8IDA7IGkgPD0gaV9maW5pc2g7ICsraSl7XG4gICAgdltpXSA9IHhbaV07XG4gIH1cbiAgdi50YWcgPSB4LnRhZyB8IDA7XG4gIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBjYW1sX29ial90cnVuY2F0ZSh4LCBuZXdfc2l6ZSkge1xuICB2YXIgbGVuID0geC5sZW5ndGggfCAwO1xuICBpZiAobmV3X3NpemUgPD0gMCB8fCBuZXdfc2l6ZSA+IGxlbikge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiT2JqLnRydW5jYXRlXCJcbiAgICAgICAgXTtcbiAgfSBlbHNlIGlmIChsZW4gIT09IG5ld19zaXplKSB7XG4gICAgZm9yKHZhciBpID0gbmV3X3NpemUgLGlfZmluaXNoID0gbGVuIC0gMSB8IDA7IGkgPD0gaV9maW5pc2g7ICsraSl7XG4gICAgICB4W2ldID0gMDtcbiAgICB9XG4gICAgeC5sZW5ndGggPSBuZXdfc2l6ZTtcbiAgICByZXR1cm4gLyogKCkgKi8wO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfbGF6eV9tYWtlX2ZvcndhcmQoeCkge1xuICByZXR1cm4gQmxvY2suX18oMjUwLCBbeF0pO1xufVxuXG5mdW5jdGlvbiBjYW1sX3VwZGF0ZV9kdW1teSh4LCB5KSB7XG4gIHZhciBsZW4gPSB5Lmxlbmd0aCB8IDA7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gbGVuIC0gMSB8IDA7IGkgPD0gaV9maW5pc2g7ICsraSl7XG4gICAgeFtpXSA9IHlbaV07XG4gIH1cbiAgdmFyIHlfdGFnID0geS50YWcgfCAwO1xuICBpZiAoeV90YWcgIT09IDApIHtcbiAgICB4LnRhZyA9IHlfdGFnO1xuICAgIHJldHVybiAvKiAoKSAqLzA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnRfY29tcGFyZSh4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9jb21wYXJlKF9hLCBfYikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGIgPSBfYjtcbiAgICB2YXIgYSA9IF9hO1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFfdHlwZSA9IHR5cGVvZiBhO1xuICAgICAgdmFyIGJfdHlwZSA9IHR5cGVvZiBiO1xuICAgICAgaWYgKGFfdHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgeCA9IGE7XG4gICAgICAgIHZhciB5ID0gYjtcbiAgICAgICAgaWYgKHggPCB5KSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYgKHggPT09IHkpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlzX2FfbnVtYmVyID0gKyhhX3R5cGUgPT09IFwibnVtYmVyXCIpO1xuICAgICAgICB2YXIgaXNfYl9udW1iZXIgPSArKGJfdHlwZSA9PT0gXCJudW1iZXJcIik7XG4gICAgICAgIGlmIChpc19hX251bWJlciAhPT0gMCkge1xuICAgICAgICAgIGlmIChpc19iX251bWJlciAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbWxfaW50X2NvbXBhcmUoYSwgYik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNfYl9udW1iZXIgIT09IDApIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIGlmIChhX3R5cGUgPT09IFwiYm9vbGVhblwiIHx8IGFfdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhID09PSBudWxsKSB7XG4gICAgICAgICAgdmFyIHgkMSA9IGE7XG4gICAgICAgICAgdmFyIHkkMSA9IGI7XG4gICAgICAgICAgaWYgKHgkMSA9PT0geSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHgkMSA8IHkkMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYV90eXBlID09PSBcImZ1bmN0aW9uXCIgfHwgYl90eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgICAgICBcImNvbXBhcmU6IGZ1bmN0aW9uYWwgdmFsdWVcIlxuICAgICAgICAgICAgICBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0YWdfYSA9IGEudGFnIHwgMDtcbiAgICAgICAgICB2YXIgdGFnX2IgPSBiLnRhZyB8IDA7XG4gICAgICAgICAgaWYgKHRhZ19hID09PSAyNTApIHtcbiAgICAgICAgICAgIF9hID0gYVswXTtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0gZWxzZSBpZiAodGFnX2IgPT09IDI1MCkge1xuICAgICAgICAgICAgX2IgPSBiWzBdO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSBlbHNlIGlmICh0YWdfYSA9PT0gMjQ4KSB7XG4gICAgICAgICAgICByZXR1cm4gY2FtbF9pbnRfY29tcGFyZShhWzFdLCBiWzFdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhZ19hID09PSAyNTEpIHtcbiAgICAgICAgICAgIHRocm93IFtcbiAgICAgICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICAgICAgICBcImVxdWFsOiBhYnN0cmFjdCB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhZ19hICE9PSB0YWdfYikge1xuICAgICAgICAgICAgaWYgKHRhZ19hIDwgdGFnX2IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBsZW5fYSA9IGEubGVuZ3RoIHwgMDtcbiAgICAgICAgICAgIHZhciBsZW5fYiA9IGIubGVuZ3RoIHwgMDtcbiAgICAgICAgICAgIGlmIChsZW5fYSA9PT0gbGVuX2IpIHtcbiAgICAgICAgICAgICAgdmFyIGEkMSA9IGE7XG4gICAgICAgICAgICAgIHZhciBiJDEgPSBiO1xuICAgICAgICAgICAgICB2YXIgX2kgPSAwO1xuICAgICAgICAgICAgICB2YXIgc2FtZV9sZW5ndGggPSBsZW5fYTtcbiAgICAgICAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gX2k7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHNhbWVfbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IGNhbWxfY29tcGFyZShhJDFbaV0sIGIkMVtpXSk7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbl9hIDwgbGVuX2IpIHtcbiAgICAgICAgICAgICAgdmFyIGEkMiA9IGE7XG4gICAgICAgICAgICAgIHZhciBiJDIgPSBiO1xuICAgICAgICAgICAgICB2YXIgX2kkMSA9IDA7XG4gICAgICAgICAgICAgIHZhciBzaG9ydF9sZW5ndGggPSBsZW5fYTtcbiAgICAgICAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBpJDEgPSBfaSQxO1xuICAgICAgICAgICAgICAgIGlmIChpJDEgPT09IHNob3J0X2xlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcmVzJDEgPSBjYW1sX2NvbXBhcmUoYSQyW2kkMV0sIGIkMltpJDFdKTtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMkMSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzJDE7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaSQxID0gaSQxICsgMSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGEkMyA9IGE7XG4gICAgICAgICAgICAgIHZhciBiJDMgPSBiO1xuICAgICAgICAgICAgICB2YXIgX2kkMiA9IDA7XG4gICAgICAgICAgICAgIHZhciBzaG9ydF9sZW5ndGgkMSA9IGxlbl9iO1xuICAgICAgICAgICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkkMiA9IF9pJDI7XG4gICAgICAgICAgICAgICAgaWYgKGkkMiA9PT0gc2hvcnRfbGVuZ3RoJDEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcmVzJDIgPSBjYW1sX2NvbXBhcmUoYSQzW2kkMl0sIGIkM1tpJDJdKTtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMkMiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzJDI7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaSQyID0gaSQyICsgMSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FtbF9lcXVhbChfYSwgX2IpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBiID0gX2I7XG4gICAgdmFyIGEgPSBfYTtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgcmV0dXJuIC8qIHRydWUgKi8xO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYV90eXBlID0gdHlwZW9mIGE7XG4gICAgICBpZiAoYV90eXBlID09PSBcInN0cmluZ1wiIHx8IGFfdHlwZSA9PT0gXCJudW1iZXJcIiB8fCBhX3R5cGUgPT09IFwiYm9vbGVhblwiIHx8IGFfdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAvKiBmYWxzZSAqLzA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYl90eXBlID0gdHlwZW9mIGI7XG4gICAgICAgIGlmIChhX3R5cGUgPT09IFwiZnVuY3Rpb25cIiB8fCBiX3R5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHRocm93IFtcbiAgICAgICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgICAgIFwiZXF1YWw6IGZ1bmN0aW9uYWwgdmFsdWVcIlxuICAgICAgICAgICAgICBdO1xuICAgICAgICB9IGVsc2UgaWYgKGJfdHlwZSA9PT0gXCJudW1iZXJcIiB8fCBiX3R5cGUgPT09IFwidW5kZWZpbmVkXCIgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAvKiBmYWxzZSAqLzA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRhZ19hID0gYS50YWcgfCAwO1xuICAgICAgICAgIHZhciB0YWdfYiA9IGIudGFnIHwgMDtcbiAgICAgICAgICBpZiAodGFnX2EgPT09IDI1MCkge1xuICAgICAgICAgICAgX2EgPSBhWzBdO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSBlbHNlIGlmICh0YWdfYiA9PT0gMjUwKSB7XG4gICAgICAgICAgICBfYiA9IGJbMF07XG4gICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhZ19hID09PSAyNDgpIHtcbiAgICAgICAgICAgIHJldHVybiArKGFbMV0gPT09IGJbMV0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFnX2EgPT09IDI1MSkge1xuICAgICAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgICAgICAgIFwiZXF1YWw6IGFic3RyYWN0IHZhbHVlXCJcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFnX2EgIT09IHRhZ19iKSB7XG4gICAgICAgICAgICByZXR1cm4gLyogZmFsc2UgKi8wO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbGVuX2EgPSBhLmxlbmd0aCB8IDA7XG4gICAgICAgICAgICB2YXIgbGVuX2IgPSBiLmxlbmd0aCB8IDA7XG4gICAgICAgICAgICBpZiAobGVuX2EgPT09IGxlbl9iKSB7XG4gICAgICAgICAgICAgIHZhciBhJDEgPSBhO1xuICAgICAgICAgICAgICB2YXIgYiQxID0gYjtcbiAgICAgICAgICAgICAgdmFyIF9pID0gMDtcbiAgICAgICAgICAgICAgdmFyIHNhbWVfbGVuZ3RoID0gbGVuX2E7XG4gICAgICAgICAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IF9pO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBzYW1lX2xlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIHRydWUgKi8xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FtbF9lcXVhbChhJDFbaV0sIGIkMVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBmYWxzZSAqLzA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIGZhbHNlICovMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbWxfbm90ZXF1YWwoYSwgYikge1xuICByZXR1cm4gMSAtIGNhbWxfZXF1YWwoYSwgYik7XG59XG5cbmZ1bmN0aW9uIGNhbWxfZ3JlYXRlcmVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuICsoY2FtbF9jb21wYXJlKGEsIGIpID49IDApO1xufVxuXG5mdW5jdGlvbiBjYW1sX2dyZWF0ZXJ0aGFuKGEsIGIpIHtcbiAgcmV0dXJuICsoY2FtbF9jb21wYXJlKGEsIGIpID4gMCk7XG59XG5cbmZ1bmN0aW9uIGNhbWxfbGVzc2VxdWFsKGEsIGIpIHtcbiAgcmV0dXJuICsoY2FtbF9jb21wYXJlKGEsIGIpIDw9IDApO1xufVxuXG5mdW5jdGlvbiBjYW1sX2xlc3N0aGFuKGEsIGIpIHtcbiAgcmV0dXJuICsoY2FtbF9jb21wYXJlKGEsIGIpIDwgMCk7XG59XG5cbnZhciBjYW1sX2ludDMyX2NvbXBhcmUgPSBjYW1sX2ludF9jb21wYXJlO1xuXG52YXIgY2FtbF9uYXRpdmVpbnRfY29tcGFyZSA9IGNhbWxfaW50X2NvbXBhcmU7XG5cbmV4cG9ydCB7XG4gIGNhbWxfb2JqX2R1cCAgICAgICAgICAgLFxuICBjYW1sX29ial90cnVuY2F0ZSAgICAgICxcbiAgY2FtbF9sYXp5X21ha2VfZm9yd2FyZCAsXG4gIGNhbWxfdXBkYXRlX2R1bW15ICAgICAgLFxuICBjYW1sX2ludF9jb21wYXJlICAgICAgICxcbiAgY2FtbF9pbnQzMl9jb21wYXJlICAgICAsXG4gIGNhbWxfbmF0aXZlaW50X2NvbXBhcmUgLFxuICBjYW1sX2NvbXBhcmUgICAgICAgICAgICxcbiAgY2FtbF9lcXVhbCAgICAgICAgICAgICAsXG4gIGNhbWxfbm90ZXF1YWwgICAgICAgICAgLFxuICBjYW1sX2dyZWF0ZXJlcXVhbCAgICAgICxcbiAgY2FtbF9ncmVhdGVydGhhbiAgICAgICAsXG4gIGNhbWxfbGVzc3RoYW4gICAgICAgICAgLFxuICBjYW1sX2xlc3NlcXVhbCAgICAgICAgICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBDdXJyeSAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMgZnJvbSBcIi4vY2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuanNcIjtcblxuZnVuY3Rpb24gJGNhcmV0KHByaW0sIHByaW0kMSkge1xuICByZXR1cm4gcHJpbSArIHByaW0kMTtcbn1cblxudmFyIHN0ZGluID0gdW5kZWZpbmVkO1xuXG52YXIgc3Rkb3V0ID0gLyogcmVjb3JkICovW1xuICAvKiBidWZmZXIgKi9cIlwiLFxuICAvKiBvdXRwdXQgKi8oZnVuY3Rpb24gKF8sIHMpIHtcbiAgICAgIHZhciB2ID0gcy5sZW5ndGggLSAxIHwgMDtcbiAgICAgIGlmICgoICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIikgJiYgcHJvY2Vzcy5zdGRvdXQgJiYgcHJvY2Vzcy5zdGRvdXQud3JpdGUpKSB7XG4gICAgICAgIHJldHVybiAoIHByb2Nlc3Muc3Rkb3V0LndyaXRlICkocyk7XG4gICAgICB9IGVsc2UgaWYgKHNbdl0gPT09IFwiXFxuXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2cocy5zbGljZSgwLCB2KSk7XG4gICAgICAgIHJldHVybiAvKiAoKSAqLzA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhzKTtcbiAgICAgICAgcmV0dXJuIC8qICgpICovMDtcbiAgICAgIH1cbiAgICB9KVxuXTtcblxudmFyIHN0ZGVyciA9IC8qIHJlY29yZCAqL1tcbiAgLyogYnVmZmVyICovXCJcIixcbiAgLyogb3V0cHV0ICovKGZ1bmN0aW9uIChfLCBzKSB7XG4gICAgICB2YXIgdiA9IHMubGVuZ3RoIC0gMSB8IDA7XG4gICAgICBpZiAoc1t2XSA9PT0gXCJcXG5cIikge1xuICAgICAgICBjb25zb2xlLmxvZyhzLnNsaWNlKDAsIHYpKTtcbiAgICAgICAgcmV0dXJuIC8qICgpICovMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHMpO1xuICAgICAgICByZXR1cm4gLyogKCkgKi8wO1xuICAgICAgfVxuICAgIH0pXG5dO1xuXG5mdW5jdGlvbiBjYW1sX21sX29wZW5fZGVzY3JpcHRvcl9pbigpIHtcbiAgdGhyb3cgW1xuICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5mYWlsdXJlLFxuICAgICAgICBcImNhbWxfbWxfb3Blbl9kZXNjcmlwdG9yX2luIG5vdCBpbXBsZW1lbnRlZFwiXG4gICAgICBdO1xufVxuXG5mdW5jdGlvbiBjYW1sX21sX29wZW5fZGVzY3JpcHRvcl9vdXQoKSB7XG4gIHRocm93IFtcbiAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuZmFpbHVyZSxcbiAgICAgICAgXCJjYW1sX21sX29wZW5fZGVzY3JpcHRvcl9vdXQgbm90IGltcGxlbWVudGVkXCJcbiAgICAgIF07XG59XG5cbmZ1bmN0aW9uIGNhbWxfbWxfZmx1c2gob2MpIHtcbiAgaWYgKG9jWy8qIGJ1ZmZlciAqLzBdICE9PSBcIlwiKSB7XG4gICAgQ3VycnkuXzIob2NbLyogb3V0cHV0ICovMV0sIG9jLCBvY1svKiBidWZmZXIgKi8wXSk7XG4gICAgb2NbLyogYnVmZmVyICovMF0gPSBcIlwiO1xuICAgIHJldHVybiAvKiAoKSAqLzA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxudmFyIG5vZGVfc3RkX291dHB1dCA9IChmdW5jdGlvbiAocyl7XG4gICByZXR1cm4gKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiKSAmJiBwcm9jZXNzLnN0ZG91dCAmJiAocHJvY2Vzcy5zdGRvdXQud3JpdGUocyksIHRydWUpO1xuICAgfVxuKTtcblxuZnVuY3Rpb24gY2FtbF9tbF9vdXRwdXQob2MsIHN0ciwgb2Zmc2V0LCBsZW4pIHtcbiAgdmFyIHN0ciQxID0gb2Zmc2V0ID09PSAwICYmIGxlbiA9PT0gc3RyLmxlbmd0aCA/IHN0ciA6IHN0ci5zbGljZShvZmZzZXQsIGxlbik7XG4gIGlmICgoICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIikgJiYgcHJvY2Vzcy5zdGRvdXQgJiYgcHJvY2Vzcy5zdGRvdXQud3JpdGUgKSAmJiBvYyA9PT0gc3Rkb3V0KSB7XG4gICAgcmV0dXJuICggcHJvY2Vzcy5zdGRvdXQud3JpdGUgKShzdHIkMSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGlkID0gc3RyJDEubGFzdEluZGV4T2YoXCJcXG5cIik7XG4gICAgaWYgKGlkIDwgMCkge1xuICAgICAgb2NbLyogYnVmZmVyICovMF0gPSBvY1svKiBidWZmZXIgKi8wXSArIHN0ciQxO1xuICAgICAgcmV0dXJuIC8qICgpICovMDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2NbLyogYnVmZmVyICovMF0gPSBvY1svKiBidWZmZXIgKi8wXSArIHN0ciQxLnNsaWNlKDAsIGlkICsgMSB8IDApO1xuICAgICAgY2FtbF9tbF9mbHVzaChvYyk7XG4gICAgICBvY1svKiBidWZmZXIgKi8wXSA9IG9jWy8qIGJ1ZmZlciAqLzBdICsgc3RyJDEuc2xpY2UoaWQgKyAxIHwgMCk7XG4gICAgICByZXR1cm4gLyogKCkgKi8wO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX21sX291dHB1dF9jaGFyKG9jLCAkJGNoYXIpIHtcbiAgcmV0dXJuIGNhbWxfbWxfb3V0cHV0KG9jLCBTdHJpbmcuZnJvbUNoYXJDb2RlKCQkY2hhciksIDAsIDEpO1xufVxuXG5mdW5jdGlvbiBjYW1sX21sX2lucHV0KF8sIF8kMSwgXyQyLCBfJDMpIHtcbiAgdGhyb3cgW1xuICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5mYWlsdXJlLFxuICAgICAgICBcImNhbWxfbWxfaW5wdXQgaWMgbm90IGltcGxlbWVudGVkXCJcbiAgICAgIF07XG59XG5cbmZ1bmN0aW9uIGNhbWxfbWxfaW5wdXRfY2hhcigpIHtcbiAgdGhyb3cgW1xuICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5mYWlsdXJlLFxuICAgICAgICBcImNhbWxfbWxfaW5wdXRfY2hhciBub3QgaW1wbGVtbnRlZFwiXG4gICAgICBdO1xufVxuXG5mdW5jdGlvbiBjYW1sX21sX291dF9jaGFubmVsc19saXN0KCkge1xuICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgc3Rkb3V0LFxuICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgc3RkZXJyLFxuICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgXVxuICAgICAgICBdO1xufVxuXG5leHBvcnQge1xuICAkY2FyZXQgICAgICAgICAgICAgICAgICAgICAgLFxuICBzdGRpbiAgICAgICAgICAgICAgICAgICAgICAgLFxuICBzdGRvdXQgICAgICAgICAgICAgICAgICAgICAgLFxuICBzdGRlcnIgICAgICAgICAgICAgICAgICAgICAgLFxuICBjYW1sX21sX29wZW5fZGVzY3JpcHRvcl9pbiAgLFxuICBjYW1sX21sX29wZW5fZGVzY3JpcHRvcl9vdXQgLFxuICBjYW1sX21sX2ZsdXNoICAgICAgICAgICAgICAgLFxuICBub2RlX3N0ZF9vdXRwdXQgICAgICAgICAgICAgLFxuICBjYW1sX21sX291dHB1dCAgICAgICAgICAgICAgLFxuICBjYW1sX21sX291dHB1dF9jaGFyICAgICAgICAgLFxuICBjYW1sX21sX2lucHV0ICAgICAgICAgICAgICAgLFxuICBjYW1sX21sX2lucHV0X2NoYXIgICAgICAgICAgLFxuICBjYW1sX21sX291dF9jaGFubmVsc19saXN0ICAgLFxuICBcbn1cbi8qIHN0ZGluIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIGNhbWxfc3lzX2dldGVudihzKSB7XG4gIHZhciBtYXRjaCA9IHR5cGVvZiAocHJvY2VzcykgPT09IFwidW5kZWZpbmVkXCIgPyB1bmRlZmluZWQgOiAocHJvY2Vzcyk7XG4gIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIG1hdGNoJDEgPSBtYXRjaC5lbnZbc107XG4gICAgaWYgKG1hdGNoJDEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG1hdGNoJDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IENhbWxfYnVpbHRpbl9leGNlcHRpb25zLm5vdF9mb3VuZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMubm90X2ZvdW5kO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfc3lzX3RpbWUoKSB7XG4gIHZhciBtYXRjaCA9IHR5cGVvZiAocHJvY2VzcykgPT09IFwidW5kZWZpbmVkXCIgPyB1bmRlZmluZWQgOiAocHJvY2Vzcyk7XG4gIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG1hdGNoLnVwdGltZSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAtMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N5c19yYW5kb21fc2VlZCgpIHtcbiAgcmV0dXJuIC8qIGFycmF5ICovWygoRGF0ZS5ub3coKSB8IDApIF4gNDI5NDk2NzI5NSkgKiBNYXRoLnJhbmRvbSgpIHwgMF07XG59XG5cbmZ1bmN0aW9uIGNhbWxfc3lzX3N5c3RlbV9jb21tYW5kKCkge1xuICByZXR1cm4gMTI3O1xufVxuXG5mdW5jdGlvbiBjYW1sX3N5c19nZXRjd2QoKSB7XG4gIHZhciBtYXRjaCA9IHR5cGVvZiAocHJvY2VzcykgPT09IFwidW5kZWZpbmVkXCIgPyB1bmRlZmluZWQgOiAocHJvY2Vzcyk7XG4gIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG1hdGNoLmN3ZCgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIi9cIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N5c19nZXRfYXJndigpIHtcbiAgdmFyIG1hdGNoID0gdHlwZW9mIChwcm9jZXNzKSA9PT0gXCJ1bmRlZmluZWRcIiA/IHVuZGVmaW5lZCA6IChwcm9jZXNzKTtcbiAgaWYgKG1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAobWF0Y2guYXJndiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgIC8qIGFycmF5ICovW1wiXCJdXG4gICAgICAgICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgIG1hdGNoLmFyZ3ZbMF0sXG4gICAgICAgICAgICAgIG1hdGNoLmFyZ3ZcbiAgICAgICAgICAgIF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAvKiBhcnJheSAqL1tcIlwiXVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zeXNfZXhpdChleGl0X2NvZGUpIHtcbiAgdmFyIG1hdGNoID0gdHlwZW9mIChwcm9jZXNzKSA9PT0gXCJ1bmRlZmluZWRcIiA/IHVuZGVmaW5lZCA6IChwcm9jZXNzKTtcbiAgaWYgKG1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbWF0Y2guZXhpdChleGl0X2NvZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiAoKSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zeXNfaXNfZGlyZWN0b3J5KCkge1xuICB0aHJvdyBbXG4gICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmZhaWx1cmUsXG4gICAgICAgIFwiY2FtbF9zeXNfaXNfZGlyZWN0b3J5IG5vdCBpbXBsZW1lbnRlZFwiXG4gICAgICBdO1xufVxuXG5mdW5jdGlvbiBjYW1sX3N5c19maWxlX2V4aXN0cygpIHtcbiAgdGhyb3cgW1xuICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5mYWlsdXJlLFxuICAgICAgICBcImNhbWxfc3lzX2ZpbGVfZXhpc3RzIG5vdCBpbXBsZW1lbnRlZFwiXG4gICAgICBdO1xufVxuXG5leHBvcnQge1xuICBjYW1sX3N5c19nZXRlbnYgICAgICAgICAsXG4gIGNhbWxfc3lzX3RpbWUgICAgICAgICAgICxcbiAgY2FtbF9zeXNfcmFuZG9tX3NlZWQgICAgLFxuICBjYW1sX3N5c19zeXN0ZW1fY29tbWFuZCAsXG4gIGNhbWxfc3lzX2dldGN3ZCAgICAgICAgICxcbiAgY2FtbF9zeXNfZ2V0X2FyZ3YgICAgICAgLFxuICBjYW1sX3N5c19leGl0ICAgICAgICAgICAsXG4gIGNhbWxfc3lzX2lzX2RpcmVjdG9yeSAgICxcbiAgY2FtbF9zeXNfZmlsZV9leGlzdHMgICAgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIGRpdih4LCB5KSB7XG4gIGlmICh5ID09PSAwKSB7XG4gICAgdGhyb3cgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuZGl2aXNpb25fYnlfemVybztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAvIHkgfCAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vZF8oeCwgeSkge1xuICBpZiAoeSA9PT0gMCkge1xuICAgIHRocm93IENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmRpdmlzaW9uX2J5X3plcm87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggJSB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYnN3YXAxNih4KSB7XG4gIHJldHVybiAoKHggJiAyNTUpIDw8IDgpIHwgKCh4ICYgNjUyODApID4+PiA4KTtcbn1cblxuZnVuY3Rpb24gY2FtbF9pbnQzMl9ic3dhcCh4KSB7XG4gIHJldHVybiAoKHggJiAyNTUpIDw8IDI0KSB8ICgoeCAmIDY1MjgwKSA8PCA4KSB8ICgoeCAmIDE2NzExNjgwKSA+Pj4gOCkgfCAoKHggJiA0Mjc4MTkwMDgwKSA+Pj4gMjQpO1xufVxuXG52YXIgaW11bCA9ICggTWF0aC5pbXVsIHx8IGZ1bmN0aW9uICh4LHkpIHtcbiAgeSB8PSAwOyByZXR1cm4gKCgoKHggPj4gMTYpICogeSkgPDwgMTYpICsgKHggJiAweGZmZmYpICogeSl8MDsgXG59XG4pO1xuXG52YXIgY2FtbF9uYXRpdmVpbnRfYnN3YXAgPSBjYW1sX2ludDMyX2Jzd2FwO1xuXG5leHBvcnQge1xuICBkaXYgICAgICAgICAgICAgICAgICAsXG4gIG1vZF8gICAgICAgICAgICAgICAgICxcbiAgY2FtbF9ic3dhcDE2ICAgICAgICAgLFxuICBjYW1sX2ludDMyX2Jzd2FwICAgICAsXG4gIGNhbWxfbmF0aXZlaW50X2Jzd2FwICxcbiAgaW11bCAgICAgICAgICAgICAgICAgLFxuICBcbn1cbi8qIGltdWwgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgcmVwZWF0ID0gKCAoU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQgJiYgZnVuY3Rpb24gKGNvdW50LHNlbGYpe3JldHVybiBzZWxmLnJlcGVhdChjb3VudCl9KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihjb3VudCAsIHNlbGYpIHtcbiAgICAgICAgaWYgKHNlbGYubGVuZ3RoID09IDAgfHwgY291bnQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuc3VyaW5nIGNvdW50IGlzIGEgMzEtYml0IGludGVnZXIgYWxsb3dzIHVzIHRvIGhlYXZpbHkgb3B0aW1pemUgdGhlXG4gICAgICAgIC8vIG1haW4gcGFydC4gQnV0IGFueXdheSwgbW9zdCBjdXJyZW50IChBdWd1c3QgMjAxNCkgYnJvd3NlcnMgY2FuJ3QgaGFuZGxlXG4gICAgICAgIC8vIHN0cmluZ3MgMSA8PCAyOCBjaGFycyBvciBsb25nZXIsIHNvOlxuICAgICAgICBpZiAoc2VsZi5sZW5ndGggKiBjb3VudCA+PSAxIDw8IDI4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigncmVwZWF0IGNvdW50IG11c3Qgbm90IG92ZXJmbG93IG1heGltdW0gc3RyaW5nIHNpemUnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcnB0ID0gJyc7XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgIGlmICgoY291bnQgJiAxKSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcnB0ICs9IHNlbGY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCA+Pj49IDE7XG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZiArPSBzZWxmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBycHQ7XG4gICAgfVxuKTtcblxuZXhwb3J0IHtcbiAgcmVwZWF0ICxcbiAgXG59XG4vKiByZXBlYXQgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgQ2FtbF9vYmogICAgICAgICAgICAgICAgZnJvbSBcIi4vY2FtbF9vYmouanNcIjtcbmltcG9ydCAqIGFzIENhbWxfaW50MzIgICAgICAgICAgICAgIGZyb20gXCIuL2NhbWxfaW50MzIuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfdXRpbHMgICAgICAgICAgICAgIGZyb20gXCIuL2NhbWxfdXRpbHMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbnZhciBtaW5faW50ID0gLyogcmVjb3JkICovW1xuICAvKiBoaSAqLy0yMTQ3NDgzNjQ4LFxuICAvKiBsbyAqLzBcbl07XG5cbnZhciBtYXhfaW50ID0gLyogcmVjb3JkICovW1xuICAvKiBoaSAqLzEzNDIxNzcyNyxcbiAgLyogbG8gKi8xXG5dO1xuXG52YXIgb25lID0gLyogcmVjb3JkICovW1xuICAvKiBoaSAqLzAsXG4gIC8qIGxvICovMVxuXTtcblxudmFyIHplcm8gPSAvKiByZWNvcmQgKi9bXG4gIC8qIGhpICovMCxcbiAgLyogbG8gKi8wXG5dO1xuXG52YXIgbmVnX29uZSA9IC8qIHJlY29yZCAqL1tcbiAgLyogaGkgKi8tMSxcbiAgLyogbG8gKi80Mjk0OTY3Mjk1XG5dO1xuXG5mdW5jdGlvbiBuZWdfc2lnbmVkKHgpIHtcbiAgcmV0dXJuICsoKHggJiAyMTQ3NDgzNjQ4KSAhPT0gMCk7XG59XG5cbmZ1bmN0aW9uIGFkZChwYXJhbSwgcGFyYW0kMSkge1xuICB2YXIgb3RoZXJfbG93XyA9IHBhcmFtJDFbLyogbG8gKi8xXTtcbiAgdmFyIHRoaXNfbG93XyA9IHBhcmFtWy8qIGxvICovMV07XG4gIHZhciBsbyA9IHRoaXNfbG93XyArIG90aGVyX2xvd18gJiA0Mjk0OTY3Mjk1O1xuICB2YXIgb3ZlcmZsb3cgPSBuZWdfc2lnbmVkKHRoaXNfbG93XykgJiYgKG5lZ19zaWduZWQob3RoZXJfbG93XykgfHwgIW5lZ19zaWduZWQobG8pKSB8fCBuZWdfc2lnbmVkKG90aGVyX2xvd18pICYmICFuZWdfc2lnbmVkKGxvKSA/IDEgOiAwO1xuICB2YXIgaGkgPSBwYXJhbVsvKiBoaSAqLzBdICsgcGFyYW0kMVsvKiBoaSAqLzBdICsgb3ZlcmZsb3cgJiA0Mjk0OTY3Mjk1O1xuICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgIC8qIGhpICovaGksXG4gICAgICAgICAgLyogbG8gKi8obG8gPj4+IDApXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIG5vdChwYXJhbSkge1xuICB2YXIgaGkgPSBwYXJhbVsvKiBoaSAqLzBdIF4gLTE7XG4gIHZhciBsbyA9IHBhcmFtWy8qIGxvICovMV0gXiAtMTtcbiAgcmV0dXJuIC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAvKiBoaSAqL2hpLFxuICAgICAgICAgIC8qIGxvICovKGxvID4+PiAwKVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBlcSh4LCB5KSB7XG4gIGlmICh4Wy8qIGhpICovMF0gPT09IHlbLyogaGkgKi8wXSkge1xuICAgIHJldHVybiArKHhbLyogbG8gKi8xXSA9PT0geVsvKiBsbyAqLzFdKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogZmFsc2UgKi8wO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5lZyh4KSB7XG4gIGlmIChlcSh4LCBtaW5faW50KSkge1xuICAgIHJldHVybiBtaW5faW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhZGQobm90KHgpLCBvbmUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1Yih4LCB5KSB7XG4gIHJldHVybiBhZGQoeCwgbmVnKHkpKTtcbn1cblxuZnVuY3Rpb24gbHNsXyh4LCBudW1CaXRzKSB7XG4gIGlmIChudW1CaXRzKSB7XG4gICAgdmFyIGxvID0geFsvKiBsbyAqLzFdO1xuICAgIGlmIChudW1CaXRzID49IDMyKSB7XG4gICAgICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgICAgICAvKiBoaSAqLyhsbyA8PCAobnVtQml0cyAtIDMyIHwgMCkpLFxuICAgICAgICAgICAgICAvKiBsbyAqLzBcbiAgICAgICAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBoaSA9IChsbyA+Pj4gKDMyIC0gbnVtQml0cyB8IDApKSB8ICh4Wy8qIGhpICovMF0gPDwgbnVtQml0cyk7XG4gICAgICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgICAgICAvKiBoaSAqL2hpLFxuICAgICAgICAgICAgICAvKiBsbyAqLygobG8gPDwgbnVtQml0cykgPj4+IDApXG4gICAgICAgICAgICBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsc3JfKHgsIG51bUJpdHMpIHtcbiAgaWYgKG51bUJpdHMpIHtcbiAgICB2YXIgaGkgPSB4Wy8qIGhpICovMF07XG4gICAgdmFyIG9mZnNldCA9IG51bUJpdHMgLSAzMiB8IDA7XG4gICAgaWYgKG9mZnNldCkge1xuICAgICAgaWYgKG9mZnNldCA+IDApIHtcbiAgICAgICAgdmFyIGxvID0gKGhpID4+PiBvZmZzZXQpO1xuICAgICAgICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgICAgICAgIC8qIGhpICovMCxcbiAgICAgICAgICAgICAgICAvKiBsbyAqLyhsbyA+Pj4gMClcbiAgICAgICAgICAgICAgXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBoaSQxID0gKGhpID4+PiBudW1CaXRzKTtcbiAgICAgICAgdmFyIGxvJDEgPSAoaGkgPDwgKC1vZmZzZXQgfCAwKSkgfCAoeFsvKiBsbyAqLzFdID4+PiBudW1CaXRzKTtcbiAgICAgICAgcmV0dXJuIC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAgICAgICAvKiBoaSAqL2hpJDEsXG4gICAgICAgICAgICAgICAgLyogbG8gKi8obG8kMSA+Pj4gMClcbiAgICAgICAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAgICAgLyogaGkgKi8wLFxuICAgICAgICAgICAgICAvKiBsbyAqLyhoaSA+Pj4gMClcbiAgICAgICAgICAgIF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzcl8oeCwgbnVtQml0cykge1xuICBpZiAobnVtQml0cykge1xuICAgIHZhciBoaSA9IHhbLyogaGkgKi8wXTtcbiAgICBpZiAobnVtQml0cyA8IDMyKSB7XG4gICAgICB2YXIgaGkkMSA9IChoaSA+PiBudW1CaXRzKTtcbiAgICAgIHZhciBsbyA9IChoaSA8PCAoMzIgLSBudW1CaXRzIHwgMCkpIHwgKHhbLyogbG8gKi8xXSA+Pj4gbnVtQml0cyk7XG4gICAgICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgICAgICAvKiBoaSAqL2hpJDEsXG4gICAgICAgICAgICAgIC8qIGxvICovKGxvID4+PiAwKVxuICAgICAgICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxvJDEgPSAoaGkgPj4gKG51bUJpdHMgLSAzMiB8IDApKTtcbiAgICAgIHJldHVybiAvKiByZWNvcmQgKi9bXG4gICAgICAgICAgICAgIC8qIGhpICovaGkgPj0gMCA/IDAgOiAtMSxcbiAgICAgICAgICAgICAgLyogbG8gKi8obG8kMSA+Pj4gMClcbiAgICAgICAgICAgIF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzX3plcm8ocGFyYW0pIHtcbiAgaWYgKHBhcmFtWy8qIGhpICovMF0gIT09IDAgfHwgcGFyYW1bLyogbG8gKi8xXSAhPT0gMCkge1xuICAgIHJldHVybiAvKiBmYWxzZSAqLzA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIHRydWUgKi8xO1xuICB9XG59XG5cbmZ1bmN0aW9uIG11bChfdGhpcywgX290aGVyKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgb3RoZXIgPSBfb3RoZXI7XG4gICAgdmFyICQkdGhpcyA9IF90aGlzO1xuICAgIHZhciBleGl0ID0gMDtcbiAgICB2YXIgbG87XG4gICAgdmFyIHRoaXNfaGkgPSAkJHRoaXNbLyogaGkgKi8wXTtcbiAgICB2YXIgZXhpdCQxID0gMDtcbiAgICB2YXIgZXhpdCQyID0gMDtcbiAgICB2YXIgZXhpdCQzID0gMDtcbiAgICBpZiAodGhpc19oaSAhPT0gMCkge1xuICAgICAgZXhpdCQzID0gNDtcbiAgICB9IGVsc2UgaWYgKCQkdGhpc1svKiBsbyAqLzFdICE9PSAwKSB7XG4gICAgICBleGl0JDMgPSA0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gemVybztcbiAgICB9XG4gICAgaWYgKGV4aXQkMyA9PT0gNCkge1xuICAgICAgaWYgKG90aGVyWy8qIGhpICovMF0gIT09IDApIHtcbiAgICAgICAgZXhpdCQyID0gMztcbiAgICAgIH0gZWxzZSBpZiAob3RoZXJbLyogbG8gKi8xXSAhPT0gMCkge1xuICAgICAgICBleGl0JDIgPSAzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHplcm87XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChleGl0JDIgPT09IDMpIHtcbiAgICAgIGlmICh0aGlzX2hpICE9PSAtMjE0NzQ4MzY0OCkge1xuICAgICAgICBleGl0JDEgPSAyO1xuICAgICAgfSBlbHNlIGlmICgkJHRoaXNbLyogbG8gKi8xXSAhPT0gMCkge1xuICAgICAgICBleGl0JDEgPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG8gPSBvdGhlclsvKiBsbyAqLzFdO1xuICAgICAgICBleGl0ID0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV4aXQkMSA9PT0gMikge1xuICAgICAgdmFyIG90aGVyX2hpID0gb3RoZXJbLyogaGkgKi8wXTtcbiAgICAgIHZhciBsbyQxID0gJCR0aGlzWy8qIGxvICovMV07XG4gICAgICB2YXIgZXhpdCQ0ID0gMDtcbiAgICAgIGlmIChvdGhlcl9oaSAhPT0gLTIxNDc0ODM2NDgpIHtcbiAgICAgICAgZXhpdCQ0ID0gMztcbiAgICAgIH0gZWxzZSBpZiAob3RoZXJbLyogbG8gKi8xXSAhPT0gMCkge1xuICAgICAgICBleGl0JDQgPSAzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG8gPSBsbyQxO1xuICAgICAgICBleGl0ID0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChleGl0JDQgPT09IDMpIHtcbiAgICAgICAgdmFyIG90aGVyX2xvID0gb3RoZXJbLyogbG8gKi8xXTtcbiAgICAgICAgaWYgKHRoaXNfaGkgPCAwKSB7XG4gICAgICAgICAgaWYgKG90aGVyX2hpIDwgMCkge1xuICAgICAgICAgICAgX290aGVyID0gbmVnKG90aGVyKTtcbiAgICAgICAgICAgIF90aGlzID0gbmVnKCQkdGhpcyk7XG4gICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5lZyhtdWwobmVnKCQkdGhpcyksIG90aGVyKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyX2hpIDwgMCkge1xuICAgICAgICAgIHJldHVybiBuZWcobXVsKCQkdGhpcywgbmVnKG90aGVyKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBhNDggPSAodGhpc19oaSA+Pj4gMTYpO1xuICAgICAgICAgIHZhciBhMzIgPSB0aGlzX2hpICYgNjU1MzU7XG4gICAgICAgICAgdmFyIGExNiA9IChsbyQxID4+PiAxNik7XG4gICAgICAgICAgdmFyIGEwMCA9IGxvJDEgJiA2NTUzNTtcbiAgICAgICAgICB2YXIgYjQ4ID0gKG90aGVyX2hpID4+PiAxNik7XG4gICAgICAgICAgdmFyIGIzMiA9IG90aGVyX2hpICYgNjU1MzU7XG4gICAgICAgICAgdmFyIGIxNiA9IChvdGhlcl9sbyA+Pj4gMTYpO1xuICAgICAgICAgIHZhciBiMDAgPSBvdGhlcl9sbyAmIDY1NTM1O1xuICAgICAgICAgIHZhciBjNDggPSAwO1xuICAgICAgICAgIHZhciBjMzIgPSAwO1xuICAgICAgICAgIHZhciBjMTYgPSAwO1xuICAgICAgICAgIHZhciBjMDAgPSBhMDAgKiBiMDA7XG4gICAgICAgICAgYzE2ID0gKGMwMCA+Pj4gMTYpICsgYTE2ICogYjAwO1xuICAgICAgICAgIGMzMiA9IChjMTYgPj4+IDE2KTtcbiAgICAgICAgICBjMTYgPSAoYzE2ICYgNjU1MzUpICsgYTAwICogYjE2O1xuICAgICAgICAgIGMzMiA9IGMzMiArIChjMTYgPj4+IDE2KSArIGEzMiAqIGIwMDtcbiAgICAgICAgICBjNDggPSAoYzMyID4+PiAxNik7XG4gICAgICAgICAgYzMyID0gKGMzMiAmIDY1NTM1KSArIGExNiAqIGIxNjtcbiAgICAgICAgICBjNDggKz0gKGMzMiA+Pj4gMTYpO1xuICAgICAgICAgIGMzMiA9IChjMzIgJiA2NTUzNSkgKyBhMDAgKiBiMzI7XG4gICAgICAgICAgYzQ4ICs9IChjMzIgPj4+IDE2KTtcbiAgICAgICAgICBjMzIgPSBjMzIgJiA2NTUzNTtcbiAgICAgICAgICBjNDggPSBjNDggKyAoYTQ4ICogYjAwICsgYTMyICogYjE2ICsgYTE2ICogYjMyICsgYTAwICogYjQ4KSAmIDY1NTM1O1xuICAgICAgICAgIHZhciBoaSA9IGMzMiB8IChjNDggPDwgMTYpO1xuICAgICAgICAgIHZhciBsbyQyID0gYzAwICYgNjU1MzUgfCAoKGMxNiAmIDY1NTM1KSA8PCAxNik7XG4gICAgICAgICAgcmV0dXJuIC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAgICAgICAgIC8qIGhpICovaGksXG4gICAgICAgICAgICAgICAgICAvKiBsbyAqLyhsbyQyID4+PiAwKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICBpZiAoZXhpdCA9PT0gMSkge1xuICAgICAgaWYgKChsbyAmIDEpID09PSAwKSB7XG4gICAgICAgIHJldHVybiB6ZXJvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1pbl9pbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9O1xufVxuXG5mdW5jdGlvbiBzd2FwKHBhcmFtKSB7XG4gIHZhciBoaSA9IENhbWxfaW50MzIuY2FtbF9pbnQzMl9ic3dhcChwYXJhbVsvKiBsbyAqLzFdKTtcbiAgdmFyIGxvID0gQ2FtbF9pbnQzMi5jYW1sX2ludDMyX2Jzd2FwKHBhcmFtWy8qIGhpICovMF0pO1xuICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgIC8qIGhpICovaGksXG4gICAgICAgICAgLyogbG8gKi8obG8gPj4+IDApXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHhvcihwYXJhbSwgcGFyYW0kMSkge1xuICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgIC8qIGhpICovcGFyYW1bLyogaGkgKi8wXSBeIHBhcmFtJDFbLyogaGkgKi8wXSxcbiAgICAgICAgICAvKiBsbyAqLygocGFyYW1bLyogbG8gKi8xXSBeIHBhcmFtJDFbLyogbG8gKi8xXSkgPj4+IDApXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIG9yXyhwYXJhbSwgcGFyYW0kMSkge1xuICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgIC8qIGhpICovcGFyYW1bLyogaGkgKi8wXSB8IHBhcmFtJDFbLyogaGkgKi8wXSxcbiAgICAgICAgICAvKiBsbyAqLygocGFyYW1bLyogbG8gKi8xXSB8IHBhcmFtJDFbLyogbG8gKi8xXSkgPj4+IDApXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIGFuZF8ocGFyYW0sIHBhcmFtJDEpIHtcbiAgcmV0dXJuIC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAvKiBoaSAqL3BhcmFtWy8qIGhpICovMF0gJiBwYXJhbSQxWy8qIGhpICovMF0sXG4gICAgICAgICAgLyogbG8gKi8oKHBhcmFtWy8qIGxvICovMV0gJiBwYXJhbSQxWy8qIGxvICovMV0pID4+PiAwKVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBnZShwYXJhbSwgcGFyYW0kMSkge1xuICB2YXIgb3RoZXJfaGkgPSBwYXJhbSQxWy8qIGhpICovMF07XG4gIHZhciBoaSA9IHBhcmFtWy8qIGhpICovMF07XG4gIGlmIChoaSA+IG90aGVyX2hpKSB7XG4gICAgcmV0dXJuIC8qIHRydWUgKi8xO1xuICB9IGVsc2UgaWYgKGhpIDwgb3RoZXJfaGkpIHtcbiAgICByZXR1cm4gLyogZmFsc2UgKi8wO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiArKHBhcmFtWy8qIGxvICovMV0gPj0gcGFyYW0kMVsvKiBsbyAqLzFdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBuZXEoeCwgeSkge1xuICByZXR1cm4gMSAtIGVxKHgsIHkpO1xufVxuXG5mdW5jdGlvbiBsdCh4LCB5KSB7XG4gIHJldHVybiAxIC0gZ2UoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIGd0KHgsIHkpIHtcbiAgaWYgKHhbLyogaGkgKi8wXSA+IHlbLyogaGkgKi8wXSkge1xuICAgIHJldHVybiAvKiB0cnVlICovMTtcbiAgfSBlbHNlIGlmICh4Wy8qIGhpICovMF0gPCB5Wy8qIGhpICovMF0pIHtcbiAgICByZXR1cm4gLyogZmFsc2UgKi8wO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiArKHhbLyogbG8gKi8xXSA+IHlbLyogbG8gKi8xXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGUoeCwgeSkge1xuICByZXR1cm4gMSAtIGd0KHgsIHkpO1xufVxuXG5mdW5jdGlvbiB0b19mbG9hdChwYXJhbSkge1xuICByZXR1cm4gcGFyYW1bLyogaGkgKi8wXSAqICgweDEwMDAwMDAwMCkgKyBwYXJhbVsvKiBsbyAqLzFdO1xufVxuXG52YXIgdHdvX3B0cl8zMl9kYmwgPSBNYXRoLnBvdygyLCAzMik7XG5cbnZhciB0d29fcHRyXzYzX2RibCA9IE1hdGgucG93KDIsIDYzKTtcblxudmFyIG5lZ190d29fcHRyXzYzID0gLU1hdGgucG93KDIsIDYzKTtcblxuZnVuY3Rpb24gb2ZfZmxvYXQoeCkge1xuICBpZiAoaXNOYU4oeCkgfHwgIWlzRmluaXRlKHgpKSB7XG4gICAgcmV0dXJuIHplcm87XG4gIH0gZWxzZSBpZiAoeCA8PSBuZWdfdHdvX3B0cl82Mykge1xuICAgIHJldHVybiBtaW5faW50O1xuICB9IGVsc2UgaWYgKHggKyAxID49IHR3b19wdHJfNjNfZGJsKSB7XG4gICAgcmV0dXJuIG1heF9pbnQ7XG4gIH0gZWxzZSBpZiAoeCA8IDApIHtcbiAgICByZXR1cm4gbmVnKG9mX2Zsb2F0KC14KSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGhpID0geCAvIHR3b19wdHJfMzJfZGJsIHwgMDtcbiAgICB2YXIgbG8gPSB4ICUgdHdvX3B0cl8zMl9kYmwgfCAwO1xuICAgIHJldHVybiAvKiByZWNvcmQgKi9bXG4gICAgICAgICAgICAvKiBoaSAqL2hpLFxuICAgICAgICAgICAgLyogbG8gKi8obG8gPj4+IDApXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXYoX3NlbGYsIF9vdGhlcikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG90aGVyID0gX290aGVyO1xuICAgIHZhciBzZWxmID0gX3NlbGY7XG4gICAgdmFyIHNlbGZfaGkgPSBzZWxmWy8qIGhpICovMF07XG4gICAgdmFyIGV4aXQgPSAwO1xuICAgIHZhciBleGl0JDEgPSAwO1xuICAgIGlmIChvdGhlclsvKiBoaSAqLzBdICE9PSAwKSB7XG4gICAgICBleGl0JDEgPSAyO1xuICAgIH0gZWxzZSBpZiAob3RoZXJbLyogbG8gKi8xXSAhPT0gMCkge1xuICAgICAgZXhpdCQxID0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuZGl2aXNpb25fYnlfemVybztcbiAgICB9XG4gICAgaWYgKGV4aXQkMSA9PT0gMikge1xuICAgICAgaWYgKHNlbGZfaGkgIT09IC0yMTQ3NDgzNjQ4KSB7XG4gICAgICAgIGlmIChzZWxmX2hpICE9PSAwKSB7XG4gICAgICAgICAgZXhpdCA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZlsvKiBsbyAqLzFdICE9PSAwKSB7XG4gICAgICAgICAgZXhpdCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHplcm87XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2VsZlsvKiBsbyAqLzFdICE9PSAwKSB7XG4gICAgICAgIGV4aXQgPSAxO1xuICAgICAgfSBlbHNlIGlmIChlcShvdGhlciwgb25lKSB8fCBlcShvdGhlciwgbmVnX29uZSkpIHtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9IGVsc2UgaWYgKGVxKG90aGVyLCBtaW5faW50KSkge1xuICAgICAgICByZXR1cm4gb25lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG90aGVyX2hpID0gb3RoZXJbLyogaGkgKi8wXTtcbiAgICAgICAgdmFyIGhhbGZfdGhpcyA9IGFzcl8oc2VsZiwgMSk7XG4gICAgICAgIHZhciBhcHByb3ggPSBsc2xfKGRpdihoYWxmX3RoaXMsIG90aGVyKSwgMSk7XG4gICAgICAgIHZhciBleGl0JDIgPSAwO1xuICAgICAgICBpZiAoYXBwcm94Wy8qIGhpICovMF0gIT09IDApIHtcbiAgICAgICAgICBleGl0JDIgPSAzO1xuICAgICAgICB9IGVsc2UgaWYgKGFwcHJveFsvKiBsbyAqLzFdICE9PSAwKSB7XG4gICAgICAgICAgZXhpdCQyID0gMztcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlcl9oaSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gb25lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZWcob25lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXhpdCQyID09PSAzKSB7XG4gICAgICAgICAgdmFyIHkgPSBtdWwob3RoZXIsIGFwcHJveCk7XG4gICAgICAgICAgdmFyIHJlbSA9IGFkZChzZWxmLCBuZWcoeSkpO1xuICAgICAgICAgIHJldHVybiBhZGQoYXBwcm94LCBkaXYocmVtLCBvdGhlcikpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXhpdCA9PT0gMSkge1xuICAgICAgdmFyIG90aGVyX2hpJDEgPSBvdGhlclsvKiBoaSAqLzBdO1xuICAgICAgdmFyIGV4aXQkMyA9IDA7XG4gICAgICBpZiAob3RoZXJfaGkkMSAhPT0gLTIxNDc0ODM2NDgpIHtcbiAgICAgICAgZXhpdCQzID0gMjtcbiAgICAgIH0gZWxzZSBpZiAob3RoZXJbLyogbG8gKi8xXSAhPT0gMCkge1xuICAgICAgICBleGl0JDMgPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHplcm87XG4gICAgICB9XG4gICAgICBpZiAoZXhpdCQzID09PSAyKSB7XG4gICAgICAgIGlmIChzZWxmX2hpIDwgMCkge1xuICAgICAgICAgIGlmIChvdGhlcl9oaSQxIDwgMCkge1xuICAgICAgICAgICAgX290aGVyID0gbmVnKG90aGVyKTtcbiAgICAgICAgICAgIF9zZWxmID0gbmVnKHNlbGYpO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZWcoZGl2KG5lZyhzZWxmKSwgb3RoZXIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJfaGkkMSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gbmVnKGRpdihzZWxmLCBuZWcob3RoZXIpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJlcyA9IHplcm87XG4gICAgICAgICAgdmFyIHJlbSQxID0gc2VsZjtcbiAgICAgICAgICB3aGlsZShnZShyZW0kMSwgb3RoZXIpKSB7XG4gICAgICAgICAgICB2YXIgYXBwcm94JDEgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRvX2Zsb2F0KHJlbSQxKSAvIHRvX2Zsb2F0KG90aGVyKSkpO1xuICAgICAgICAgICAgdmFyIGxvZzIgPSBNYXRoLmNlaWwoTWF0aC5sb2coYXBwcm94JDEpIC8gTWF0aC5MTjIpO1xuICAgICAgICAgICAgdmFyIGRlbHRhID0gbG9nMiA8PSA0OCA/IDEgOiBNYXRoLnBvdygyLCBsb2cyIC0gNDgpO1xuICAgICAgICAgICAgdmFyIGFwcHJveFJlcyA9IG9mX2Zsb2F0KGFwcHJveCQxKTtcbiAgICAgICAgICAgIHZhciBhcHByb3hSZW0gPSBtdWwoYXBwcm94UmVzLCBvdGhlcik7XG4gICAgICAgICAgICB3aGlsZShhcHByb3hSZW1bLyogaGkgKi8wXSA8IDAgfHwgZ3QoYXBwcm94UmVtLCByZW0kMSkpIHtcbiAgICAgICAgICAgICAgYXBwcm94JDEgLT0gZGVsdGE7XG4gICAgICAgICAgICAgIGFwcHJveFJlcyA9IG9mX2Zsb2F0KGFwcHJveCQxKTtcbiAgICAgICAgICAgICAgYXBwcm94UmVtID0gbXVsKGFwcHJveFJlcywgb3RoZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc196ZXJvKGFwcHJveFJlcykpIHtcbiAgICAgICAgICAgICAgYXBwcm94UmVzID0gb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzID0gYWRkKHJlcywgYXBwcm94UmVzKTtcbiAgICAgICAgICAgIHJlbSQxID0gYWRkKHJlbSQxLCBuZWcoYXBwcm94UmVtKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1vZF8oc2VsZiwgb3RoZXIpIHtcbiAgdmFyIHkgPSBtdWwoZGl2KHNlbGYsIG90aGVyKSwgb3RoZXIpO1xuICByZXR1cm4gYWRkKHNlbGYsIG5lZyh5KSk7XG59XG5cbmZ1bmN0aW9uIGRpdl9tb2Qoc2VsZiwgb3RoZXIpIHtcbiAgdmFyIHF1b3RpZW50ID0gZGl2KHNlbGYsIG90aGVyKTtcbiAgdmFyIHkgPSBtdWwocXVvdGllbnQsIG90aGVyKTtcbiAgcmV0dXJuIC8qIHR1cGxlICovW1xuICAgICAgICAgIHF1b3RpZW50LFxuICAgICAgICAgIGFkZChzZWxmLCBuZWcoeSkpXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUoc2VsZiwgb3RoZXIpIHtcbiAgdmFyIHYgPSBDYW1sX29iai5jYW1sX25hdGl2ZWludF9jb21wYXJlKHNlbGZbLyogaGkgKi8wXSwgb3RoZXJbLyogaGkgKi8wXSk7XG4gIGlmICh2KSB7XG4gICAgcmV0dXJuIHY7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIENhbWxfb2JqLmNhbWxfbmF0aXZlaW50X2NvbXBhcmUoc2VsZlsvKiBsbyAqLzFdLCBvdGhlclsvKiBsbyAqLzFdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZl9pbnQzMihsbykge1xuICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgIC8qIGhpICovbG8gPCAwID8gLTEgOiAwLFxuICAgICAgICAgIC8qIGxvICovKGxvID4+PiAwKVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiB0b19pbnQzMih4KSB7XG4gIHJldHVybiB4Wy8qIGxvICovMV0gfCAwO1xufVxuXG5mdW5jdGlvbiB0b19oZXgoeCkge1xuICB2YXIgYXV4ID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gKHYgPj4+IDApLnRvU3RyaW5nKDE2KTtcbiAgfTtcbiAgdmFyIG1hdGNoID0geFsvKiBoaSAqLzBdO1xuICB2YXIgbWF0Y2gkMSA9IHhbLyogbG8gKi8xXTtcbiAgdmFyIGV4aXQgPSAwO1xuICBpZiAobWF0Y2ggIT09IDApIHtcbiAgICBleGl0ID0gMTtcbiAgfSBlbHNlIGlmIChtYXRjaCQxICE9PSAwKSB7XG4gICAgZXhpdCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiMFwiO1xuICB9XG4gIGlmIChleGl0ID09PSAxKSB7XG4gICAgaWYgKG1hdGNoJDEgIT09IDApIHtcbiAgICAgIGlmIChtYXRjaCAhPT0gMCkge1xuICAgICAgICB2YXIgbG8gPSBhdXgoeFsvKiBsbyAqLzFdKTtcbiAgICAgICAgdmFyIHBhZCA9IDggLSBsby5sZW5ndGggfCAwO1xuICAgICAgICBpZiAocGFkIDw9IDApIHtcbiAgICAgICAgICByZXR1cm4gYXV4KHhbLyogaGkgKi8wXSkgKyBsbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYXV4KHhbLyogaGkgKi8wXSkgKyAoQ2FtbF91dGlscy5yZXBlYXQocGFkLCBcIjBcIikgKyBsbyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhdXgoeFsvKiBsbyAqLzFdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGF1eCh4Wy8qIGhpICovMF0pICsgXCIwMDAwMDAwMFwiO1xuICAgIH1cbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZGlzY2FyZF9zaWduKHgpIHtcbiAgcmV0dXJuIC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAvKiBoaSAqLzIxNDc0ODM2NDcgJiB4Wy8qIGhpICovMF0sXG4gICAgICAgICAgLyogbG8gKi94Wy8qIGxvICovMV1cbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gZmxvYXRfb2ZfYml0cyh4KSB7XG4gIHZhciBpbnQzMiA9IG5ldyBJbnQzMkFycmF5KC8qIGFycmF5ICovW1xuICAgICAgICB4Wy8qIGxvICovMV0sXG4gICAgICAgIHhbLyogaGkgKi8wXVxuICAgICAgXSk7XG4gIHJldHVybiBuZXcgRmxvYXQ2NEFycmF5KGludDMyLmJ1ZmZlcilbMF07XG59XG5cbmZ1bmN0aW9uIGJpdHNfb2ZfZmxvYXQoeCkge1xuICB2YXIgdSA9IG5ldyBGbG9hdDY0QXJyYXkoLyogZmxvYXQgYXJyYXkgKi9beF0pO1xuICB2YXIgaW50MzIgPSBuZXcgSW50MzJBcnJheSh1LmJ1ZmZlcik7XG4gIHZhciB4JDEgPSBpbnQzMlsxXTtcbiAgdmFyIGhpID0geCQxO1xuICB2YXIgeCQyID0gaW50MzJbMF07XG4gIHZhciBsbyA9IHgkMjtcbiAgcmV0dXJuIC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAvKiBoaSAqL2hpLFxuICAgICAgICAgIC8qIGxvICovKGxvID4+PiAwKVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBnZXQ2NChzLCBpKSB7XG4gIHZhciBoaSA9IChzLmNoYXJDb2RlQXQoaSArIDQgfCAwKSA8PCAzMikgfCAocy5jaGFyQ29kZUF0KGkgKyA1IHwgMCkgPDwgNDApIHwgKHMuY2hhckNvZGVBdChpICsgNiB8IDApIDw8IDQ4KSB8IChzLmNoYXJDb2RlQXQoaSArIDcgfCAwKSA8PCA1Nik7XG4gIHZhciBsbyA9IHMuY2hhckNvZGVBdChpKSB8IChzLmNoYXJDb2RlQXQoaSArIDEgfCAwKSA8PCA4KSB8IChzLmNoYXJDb2RlQXQoaSArIDIgfCAwKSA8PCAxNikgfCAocy5jaGFyQ29kZUF0KGkgKyAzIHwgMCkgPDwgMjQpO1xuICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgIC8qIGhpICovaGksXG4gICAgICAgICAgLyogbG8gKi8obG8gPj4+IDApXG4gICAgICAgIF07XG59XG5cbmV4cG9ydCB7XG4gIG1pbl9pbnQgICAgICAgLFxuICBtYXhfaW50ICAgICAgICxcbiAgb25lICAgICAgICAgICAsXG4gIHplcm8gICAgICAgICAgLFxuICBub3QgICAgICAgICAgICxcbiAgb2ZfaW50MzIgICAgICAsXG4gIHRvX2ludDMyICAgICAgLFxuICBhZGQgICAgICAgICAgICxcbiAgbmVnICAgICAgICAgICAsXG4gIHN1YiAgICAgICAgICAgLFxuICBsc2xfICAgICAgICAgICxcbiAgbHNyXyAgICAgICAgICAsXG4gIGFzcl8gICAgICAgICAgLFxuICBpc196ZXJvICAgICAgICxcbiAgbXVsICAgICAgICAgICAsXG4gIHhvciAgICAgICAgICAgLFxuICBvcl8gICAgICAgICAgICxcbiAgYW5kXyAgICAgICAgICAsXG4gIHN3YXAgICAgICAgICAgLFxuICBnZSAgICAgICAgICAgICxcbiAgZXEgICAgICAgICAgICAsXG4gIG5lcSAgICAgICAgICAgLFxuICBsdCAgICAgICAgICAgICxcbiAgZ3QgICAgICAgICAgICAsXG4gIGxlICAgICAgICAgICAgLFxuICB0b19mbG9hdCAgICAgICxcbiAgb2ZfZmxvYXQgICAgICAsXG4gIGRpdiAgICAgICAgICAgLFxuICBtb2RfICAgICAgICAgICxcbiAgZGl2X21vZCAgICAgICAsXG4gIGNvbXBhcmUgICAgICAgLFxuICB0b19oZXggICAgICAgICxcbiAgZGlzY2FyZF9zaWduICAsXG4gIGZsb2F0X29mX2JpdHMgLFxuICBiaXRzX29mX2Zsb2F0ICxcbiAgZ2V0NjQgICAgICAgICAsXG4gIFxufVxuLyogdHdvX3B0cl8zMl9kYmwgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgQ3VycnkgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfaW50MzIgICAgICAgICAgICAgIGZyb20gXCIuL2NhbWxfaW50MzIuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfaW50NjQgICAgICAgICAgICAgIGZyb20gXCIuL2NhbWxfaW50NjQuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfdXRpbHMgICAgICAgICAgICAgIGZyb20gXCIuL2NhbWxfdXRpbHMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIGNhbWxfZmFpbHdpdGgocykge1xuICB0aHJvdyBbXG4gICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmZhaWx1cmUsXG4gICAgICAgIHNcbiAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHBhcnNlX2RpZ2l0KGMpIHtcbiAgaWYgKGMgPj0gNjUpIHtcbiAgICBpZiAoYyA+PSA5Nykge1xuICAgICAgaWYgKGMgPj0gMTIzKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjIC0gODcgfCAwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYyA+PSA5MSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYyAtIDU1IHwgMDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYyA+IDU3IHx8IGMgPCA0OCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYyAtIC8qIFwiMFwiICovNDggfCAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludF9vZl9zdHJpbmdfYmFzZShwYXJhbSkge1xuICBzd2l0Y2ggKHBhcmFtKSB7XG4gICAgY2FzZSAwIDogXG4gICAgICAgIHJldHVybiA4O1xuICAgIGNhc2UgMSA6IFxuICAgICAgICByZXR1cm4gMTY7XG4gICAgY2FzZSAyIDogXG4gICAgICAgIHJldHVybiAxMDtcbiAgICBjYXNlIDMgOiBcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2Vfc2lnbl9hbmRfYmFzZShzKSB7XG4gIHZhciBzaWduID0gMTtcbiAgdmFyIGJhc2UgPSAvKiBEZWMgKi8yO1xuICB2YXIgaSA9IDA7XG4gIGlmIChzW2ldID09PSBcIi1cIikge1xuICAgIHNpZ24gPSAtMTtcbiAgICBpID0gaSArIDEgfCAwO1xuICB9XG4gIHZhciBtYXRjaCA9IHMuY2hhckNvZGVBdChpKTtcbiAgdmFyIG1hdGNoJDEgPSBzLmNoYXJDb2RlQXQoaSArIDEgfCAwKTtcbiAgaWYgKG1hdGNoID09PSA0OCkge1xuICAgIGlmIChtYXRjaCQxID49IDg5KSB7XG4gICAgICBpZiAobWF0Y2gkMSAhPT0gOTgpIHtcbiAgICAgICAgaWYgKG1hdGNoJDEgIT09IDExMSkge1xuICAgICAgICAgIGlmIChtYXRjaCQxID09PSAxMjApIHtcbiAgICAgICAgICAgIGJhc2UgPSAvKiBIZXggKi8xO1xuICAgICAgICAgICAgaSA9IGkgKyAyIHwgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZSA9IC8qIE9jdCAqLzA7XG4gICAgICAgICAgaSA9IGkgKyAyIHwgMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFzZSA9IC8qIEJpbiAqLzM7XG4gICAgICAgIGkgPSBpICsgMiB8IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXRjaCQxICE9PSA2Nikge1xuICAgICAgaWYgKG1hdGNoJDEgIT09IDc5KSB7XG4gICAgICAgIGlmIChtYXRjaCQxID49IDg4KSB7XG4gICAgICAgICAgYmFzZSA9IC8qIEhleCAqLzE7XG4gICAgICAgICAgaSA9IGkgKyAyIHwgMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhc2UgPSAvKiBPY3QgKi8wO1xuICAgICAgICBpID0gaSArIDIgfCAwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gLyogQmluICovMztcbiAgICAgIGkgPSBpICsgMiB8IDA7XG4gICAgfVxuICB9XG4gIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICBpLFxuICAgICAgICAgIHNpZ24sXG4gICAgICAgICAgYmFzZVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBjYW1sX2ludF9vZl9zdHJpbmcocykge1xuICB2YXIgbWF0Y2ggPSBwYXJzZV9zaWduX2FuZF9iYXNlKHMpO1xuICB2YXIgaSA9IG1hdGNoWzBdO1xuICB2YXIgYmFzZSA9IGludF9vZl9zdHJpbmdfYmFzZShtYXRjaFsyXSk7XG4gIHZhciB0aHJlc2hvbGQgPSA0Mjk0OTY3Mjk1O1xuICB2YXIgbGVuID0gcy5sZW5ndGg7XG4gIHZhciBjID0gaSA8IGxlbiA/IHMuY2hhckNvZGVBdChpKSA6IC8qIFwiXFwwMDBcIiAqLzA7XG4gIHZhciBkID0gcGFyc2VfZGlnaXQoYyk7XG4gIGlmIChkIDwgMCB8fCBkID49IGJhc2UpIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuZmFpbHVyZSxcbiAgICAgICAgICBcImludF9vZl9zdHJpbmdcIlxuICAgICAgICBdO1xuICB9XG4gIHZhciBhdXggPSBmdW5jdGlvbiAoX2FjYywgX2spIHtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgayA9IF9rO1xuICAgICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgICBpZiAoayA9PT0gbGVuKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYSA9IHMuY2hhckNvZGVBdChrKTtcbiAgICAgICAgaWYgKGEgPT09IC8qIFwiX1wiICovOTUpIHtcbiAgICAgICAgICBfayA9IGsgKyAxIHwgMDtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHYgPSBwYXJzZV9kaWdpdChhKTtcbiAgICAgICAgICBpZiAodiA8IDAgfHwgdiA+PSBiYXNlKSB7XG4gICAgICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5mYWlsdXJlLFxuICAgICAgICAgICAgICAgICAgXCJpbnRfb2Zfc3RyaW5nXCJcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYWNjJDEgPSBiYXNlICogYWNjICsgdjtcbiAgICAgICAgICAgIGlmIChhY2MkMSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmZhaWx1cmUsXG4gICAgICAgICAgICAgICAgICAgIFwiaW50X29mX3N0cmluZ1wiXG4gICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX2sgPSBrICsgMSB8IDA7XG4gICAgICAgICAgICAgIF9hY2MgPSBhY2MkMTtcbiAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICB2YXIgcmVzID0gbWF0Y2hbMV0gKiBhdXgoZCwgaSArIDEgfCAwKTtcbiAgdmFyIG9yX3JlcyA9IHJlcyB8IDA7XG4gIGlmIChiYXNlID09PSAxMCAmJiByZXMgIT09IG9yX3Jlcykge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5mYWlsdXJlLFxuICAgICAgICAgIFwiaW50X29mX3N0cmluZ1wiXG4gICAgICAgIF07XG4gIH1cbiAgcmV0dXJuIG9yX3Jlcztcbn1cblxuZnVuY3Rpb24gY2FtbF9pbnQ2NF9vZl9zdHJpbmcocykge1xuICB2YXIgbWF0Y2ggPSBwYXJzZV9zaWduX2FuZF9iYXNlKHMpO1xuICB2YXIgaGJhc2UgPSBtYXRjaFsyXTtcbiAgdmFyIGkgPSBtYXRjaFswXTtcbiAgdmFyIGJhc2UgPSBDYW1sX2ludDY0Lm9mX2ludDMyKGludF9vZl9zdHJpbmdfYmFzZShoYmFzZSkpO1xuICB2YXIgc2lnbiA9IENhbWxfaW50NjQub2ZfaW50MzIobWF0Y2hbMV0pO1xuICB2YXIgdGhyZXNob2xkO1xuICBzd2l0Y2ggKGhiYXNlKSB7XG4gICAgY2FzZSAwIDogXG4gICAgICAgIHRocmVzaG9sZCA9IC8qIGludDY0ICovW1xuICAgICAgICAgIC8qIGhpICovNTM2ODcwOTExLFxuICAgICAgICAgIC8qIGxvICovNDI5NDk2NzI5NVxuICAgICAgICBdO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIDEgOiBcbiAgICAgICAgdGhyZXNob2xkID0gLyogaW50NjQgKi9bXG4gICAgICAgICAgLyogaGkgKi8yNjg0MzU0NTUsXG4gICAgICAgICAgLyogbG8gKi80Mjk0OTY3Mjk1XG4gICAgICAgIF07XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgMiA6IFxuICAgICAgICB0aHJlc2hvbGQgPSAvKiBpbnQ2NCAqL1tcbiAgICAgICAgICAvKiBoaSAqLzQyOTQ5NjcyOSxcbiAgICAgICAgICAvKiBsbyAqLzI1NzY5ODAzNzdcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAzIDogXG4gICAgICAgIHRocmVzaG9sZCA9IC8qIGludDY0ICovW1xuICAgICAgICAgIC8qIGhpICovMjE0NzQ4MzY0NyxcbiAgICAgICAgICAvKiBsbyAqLzQyOTQ5NjcyOTVcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG4gICAgXG4gIH1cbiAgdmFyIGxlbiA9IHMubGVuZ3RoO1xuICB2YXIgYyA9IGkgPCBsZW4gPyBzLmNoYXJDb2RlQXQoaSkgOiAvKiBcIlxcMDAwXCIgKi8wO1xuICB2YXIgZCA9IENhbWxfaW50NjQub2ZfaW50MzIocGFyc2VfZGlnaXQoYykpO1xuICBpZiAoQ2FtbF9pbnQ2NC5sdChkLCAvKiBpbnQ2NCAqL1tcbiAgICAgICAgICAvKiBoaSAqLzAsXG4gICAgICAgICAgLyogbG8gKi8wXG4gICAgICAgIF0pIHx8IENhbWxfaW50NjQuZ2UoZCwgYmFzZSkpIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuZmFpbHVyZSxcbiAgICAgICAgICBcImludDY0X29mX3N0cmluZ1wiXG4gICAgICAgIF07XG4gIH1cbiAgdmFyIGF1eCA9IGZ1bmN0aW9uIChfYWNjLCBfaykge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBrID0gX2s7XG4gICAgICB2YXIgYWNjID0gX2FjYztcbiAgICAgIGlmIChrID09PSBsZW4pIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhID0gcy5jaGFyQ29kZUF0KGspO1xuICAgICAgICBpZiAoYSA9PT0gLyogXCJfXCIgKi85NSkge1xuICAgICAgICAgIF9rID0gayArIDEgfCAwO1xuICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdiA9IENhbWxfaW50NjQub2ZfaW50MzIocGFyc2VfZGlnaXQoYSkpO1xuICAgICAgICAgIGlmIChDYW1sX2ludDY0Lmx0KHYsIC8qIGludDY0ICovW1xuICAgICAgICAgICAgICAgICAgLyogaGkgKi8wLFxuICAgICAgICAgICAgICAgICAgLyogbG8gKi8wXG4gICAgICAgICAgICAgICAgXSkgfHwgQ2FtbF9pbnQ2NC5nZSh2LCBiYXNlKSB8fCBDYW1sX2ludDY0Lmd0KGFjYywgdGhyZXNob2xkKSkge1xuICAgICAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuZmFpbHVyZSxcbiAgICAgICAgICAgICAgICAgIFwiaW50NjRfb2Zfc3RyaW5nXCJcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYWNjJDEgPSBDYW1sX2ludDY0LmFkZChDYW1sX2ludDY0Lm11bChiYXNlLCBhY2MpLCB2KTtcbiAgICAgICAgICAgIF9rID0gayArIDEgfCAwO1xuICAgICAgICAgICAgX2FjYyA9IGFjYyQxO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgdmFyIHJlcyA9IENhbWxfaW50NjQubXVsKHNpZ24sIGF1eChkLCBpICsgMSB8IDApKTtcbiAgdmFyIG9yX3JlcyA9IENhbWxfaW50NjQub3JfKHJlcywgLyogaW50NjQgKi9bXG4gICAgICAgIC8qIGhpICovMCxcbiAgICAgICAgLyogbG8gKi8wXG4gICAgICBdKTtcbiAgaWYgKENhbWxfaW50NjQuZXEoYmFzZSwgLyogaW50NjQgKi9bXG4gICAgICAgICAgLyogaGkgKi8wLFxuICAgICAgICAgIC8qIGxvICovMTBcbiAgICAgICAgXSkgJiYgQ2FtbF9pbnQ2NC5uZXEocmVzLCBvcl9yZXMpKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmZhaWx1cmUsXG4gICAgICAgICAgXCJpbnQ2NF9vZl9zdHJpbmdcIlxuICAgICAgICBdO1xuICB9XG4gIHJldHVybiBvcl9yZXM7XG59XG5cbmZ1bmN0aW9uIGludF9vZl9iYXNlKHBhcmFtKSB7XG4gIHN3aXRjaCAocGFyYW0pIHtcbiAgICBjYXNlIDAgOiBcbiAgICAgICAgcmV0dXJuIDg7XG4gICAgY2FzZSAxIDogXG4gICAgICAgIHJldHVybiAxNjtcbiAgICBjYXNlIDIgOiBcbiAgICAgICAgcmV0dXJuIDEwO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIGxvd2VyY2FzZShjKSB7XG4gIGlmIChjID49IC8qIFwiQVwiICovNjUgJiYgYyA8PSAvKiBcIlpcIiAqLzkwIHx8IGMgPj0gLyogXCJcXDE5MlwiICovMTkyICYmIGMgPD0gLyogXCJcXDIxNFwiICovMjE0IHx8IGMgPj0gLyogXCJcXDIxNlwiICovMjE2ICYmIGMgPD0gLyogXCJcXDIyMlwiICovMjIyKSB7XG4gICAgcmV0dXJuIGMgKyAzMiB8IDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VfZm9ybWF0KGZtdCkge1xuICB2YXIgbGVuID0gZm10Lmxlbmd0aDtcbiAgaWYgKGxlbiA+IDMxKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJmb3JtYXRfaW50OiBmb3JtYXQgdG9vIGxvbmdcIlxuICAgICAgICBdO1xuICB9XG4gIHZhciBmID0gLyogcmVjb3JkICovW1xuICAgIC8qIGp1c3RpZnkgKi9cIitcIixcbiAgICAvKiBzaWduc3R5bGUgKi9cIi1cIixcbiAgICAvKiBmaWx0ZXIgKi9cIiBcIixcbiAgICAvKiBhbHRlcm5hdGUgOiBmYWxzZSAqLzAsXG4gICAgLyogYmFzZSA6IERlYyAqLzIsXG4gICAgLyogc2lnbmVkY29udiA6IGZhbHNlICovMCxcbiAgICAvKiB3aWR0aCAqLzAsXG4gICAgLyogdXBwZXJjYXNlIDogZmFsc2UgKi8wLFxuICAgIC8qIHNpZ24gKi8xLFxuICAgIC8qIHByZWMgKi8tMSxcbiAgICAvKiBjb252ICovXCJmXCJcbiAgXTtcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPj0gbGVuKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGMgPSBmbXQuY2hhckNvZGVBdChpKTtcbiAgICAgIHZhciBleGl0ID0gMDtcbiAgICAgIGlmIChjID49IDY5KSB7XG4gICAgICAgIGlmIChjID49IDg4KSB7XG4gICAgICAgICAgaWYgKGMgPj0gMTIxKSB7XG4gICAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoIChjIC0gODggfCAwKSB7XG4gICAgICAgICAgICAgIGNhc2UgMCA6IFxuICAgICAgICAgICAgICAgICAgZlsvKiBiYXNlICovNF0gPSAvKiBIZXggKi8xO1xuICAgICAgICAgICAgICAgICAgZlsvKiB1cHBlcmNhc2UgKi83XSA9IC8qIHRydWUgKi8xO1xuICAgICAgICAgICAgICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgICAgICAgICBjYXNlIDEzIDogXG4gICAgICAgICAgICAgIGNhc2UgMTQgOiBcbiAgICAgICAgICAgICAgY2FzZSAxNSA6IFxuICAgICAgICAgICAgICAgICAgZXhpdCA9IDU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAxMiA6IFxuICAgICAgICAgICAgICBjYXNlIDE3IDogXG4gICAgICAgICAgICAgICAgICBleGl0ID0gNDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDIzIDogXG4gICAgICAgICAgICAgICAgICBmWy8qIGJhc2UgKi80XSA9IC8qIE9jdCAqLzA7XG4gICAgICAgICAgICAgICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMjkgOiBcbiAgICAgICAgICAgICAgICAgIGZbLyogYmFzZSAqLzRdID0gLyogRGVjICovMjtcbiAgICAgICAgICAgICAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICAgICAgY2FzZSAxIDogXG4gICAgICAgICAgICAgIGNhc2UgMiA6IFxuICAgICAgICAgICAgICBjYXNlIDMgOiBcbiAgICAgICAgICAgICAgY2FzZSA0IDogXG4gICAgICAgICAgICAgIGNhc2UgNSA6IFxuICAgICAgICAgICAgICBjYXNlIDYgOiBcbiAgICAgICAgICAgICAgY2FzZSA3IDogXG4gICAgICAgICAgICAgIGNhc2UgOCA6IFxuICAgICAgICAgICAgICBjYXNlIDkgOiBcbiAgICAgICAgICAgICAgY2FzZSAxMCA6IFxuICAgICAgICAgICAgICBjYXNlIDExIDogXG4gICAgICAgICAgICAgIGNhc2UgMTYgOiBcbiAgICAgICAgICAgICAgY2FzZSAxOCA6IFxuICAgICAgICAgICAgICBjYXNlIDE5IDogXG4gICAgICAgICAgICAgIGNhc2UgMjAgOiBcbiAgICAgICAgICAgICAgY2FzZSAyMSA6IFxuICAgICAgICAgICAgICBjYXNlIDIyIDogXG4gICAgICAgICAgICAgIGNhc2UgMjQgOiBcbiAgICAgICAgICAgICAgY2FzZSAyNSA6IFxuICAgICAgICAgICAgICBjYXNlIDI2IDogXG4gICAgICAgICAgICAgIGNhc2UgMjcgOiBcbiAgICAgICAgICAgICAgY2FzZSAyOCA6IFxuICAgICAgICAgICAgICBjYXNlIDMwIDogXG4gICAgICAgICAgICAgIGNhc2UgMzEgOiBcbiAgICAgICAgICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMzIgOiBcbiAgICAgICAgICAgICAgICAgIGZbLyogYmFzZSAqLzRdID0gLyogSGV4ICovMTtcbiAgICAgICAgICAgICAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGMgPj0gNzIpIHtcbiAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmWy8qIHNpZ25lZGNvbnYgKi81XSA9IC8qIHRydWUgKi8xO1xuICAgICAgICAgIGZbLyogdXBwZXJjYXNlICovN10gPSAvKiB0cnVlICovMTtcbiAgICAgICAgICBmWy8qIGNvbnYgKi8xMF0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGxvd2VyY2FzZShjKSk7XG4gICAgICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc3dpdGNoZXIgPSBjIC0gMzIgfCAwO1xuICAgICAgICBpZiAoc3dpdGNoZXIgPiAyNSB8fCBzd2l0Y2hlciA8IDApIHtcbiAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2l0Y2ggKHN3aXRjaGVyKSB7XG4gICAgICAgICAgICBjYXNlIDMgOiBcbiAgICAgICAgICAgICAgICBmWy8qIGFsdGVybmF0ZSAqLzNdID0gLyogdHJ1ZSAqLzE7XG4gICAgICAgICAgICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICAgIGNhc2UgMCA6IFxuICAgICAgICAgICAgY2FzZSAxMSA6IFxuICAgICAgICAgICAgICAgIGV4aXQgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMyA6IFxuICAgICAgICAgICAgICAgIGZbLyoganVzdGlmeSAqLzBdID0gXCItXCI7XG4gICAgICAgICAgICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICAgIGNhc2UgMTQgOiBcbiAgICAgICAgICAgICAgICBmWy8qIHByZWMgKi85XSA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGogPSBpICsgMSB8IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUoKGZ1bmN0aW9uKGope1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gZm10LmNoYXJDb2RlQXQoaikgLSAvKiBcIjBcIiAqLzQ4IHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKyh3ID49IDAgJiYgdyA8PSA5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KGopKSgpKSB7XG4gICAgICAgICAgICAgICAgICBmWy8qIHByZWMgKi85XSA9IChDYW1sX2ludDMyLmltdWwoZlsvKiBwcmVjICovOV0sIDEwKSArIGZtdC5jaGFyQ29kZUF0KGopIHwgMCkgLSAvKiBcIjBcIiAqLzQ4IHwgMDtcbiAgICAgICAgICAgICAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfaSA9IGo7XG4gICAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICAgIGNhc2UgMSA6IFxuICAgICAgICAgICAgY2FzZSAyIDogXG4gICAgICAgICAgICBjYXNlIDQgOiBcbiAgICAgICAgICAgIGNhc2UgNSA6IFxuICAgICAgICAgICAgY2FzZSA2IDogXG4gICAgICAgICAgICBjYXNlIDcgOiBcbiAgICAgICAgICAgIGNhc2UgOCA6IFxuICAgICAgICAgICAgY2FzZSA5IDogXG4gICAgICAgICAgICBjYXNlIDEwIDogXG4gICAgICAgICAgICBjYXNlIDEyIDogXG4gICAgICAgICAgICBjYXNlIDE1IDogXG4gICAgICAgICAgICAgICAgZXhpdCA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE2IDogXG4gICAgICAgICAgICAgICAgZlsvKiBmaWx0ZXIgKi8yXSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgICBjYXNlIDE3IDogXG4gICAgICAgICAgICBjYXNlIDE4IDogXG4gICAgICAgICAgICBjYXNlIDE5IDogXG4gICAgICAgICAgICBjYXNlIDIwIDogXG4gICAgICAgICAgICBjYXNlIDIxIDogXG4gICAgICAgICAgICBjYXNlIDIyIDogXG4gICAgICAgICAgICBjYXNlIDIzIDogXG4gICAgICAgICAgICBjYXNlIDI0IDogXG4gICAgICAgICAgICBjYXNlIDI1IDogXG4gICAgICAgICAgICAgICAgZXhpdCA9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoZXhpdCkge1xuICAgICAgICBjYXNlIDEgOiBcbiAgICAgICAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgY2FzZSAyIDogXG4gICAgICAgICAgICBmWy8qIHNpZ25zdHlsZSAqLzFdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgICAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgY2FzZSAzIDogXG4gICAgICAgICAgICBmWy8qIHdpZHRoICovNl0gPSAwO1xuICAgICAgICAgICAgdmFyIGokMSA9IGk7XG4gICAgICAgICAgICB3aGlsZSgoZnVuY3Rpb24oaiQxKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHcgPSBmbXQuY2hhckNvZGVBdChqJDEpIC0gLyogXCIwXCIgKi80OCB8IDA7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKyh3ID49IDAgJiYgdyA8PSA5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfShqJDEpKSgpKSB7XG4gICAgICAgICAgICAgIGZbLyogd2lkdGggKi82XSA9IChDYW1sX2ludDMyLmltdWwoZlsvKiB3aWR0aCAqLzZdLCAxMCkgKyBmbXQuY2hhckNvZGVBdChqJDEpIHwgMCkgLSAvKiBcIjBcIiAqLzQ4IHwgMDtcbiAgICAgICAgICAgICAgaiQxID0gaiQxICsgMSB8IDA7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2kgPSBqJDE7XG4gICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgICBjYXNlIDQgOiBcbiAgICAgICAgICAgIGZbLyogc2lnbmVkY29udiAqLzVdID0gLyogdHJ1ZSAqLzE7XG4gICAgICAgICAgICBmWy8qIGJhc2UgKi80XSA9IC8qIERlYyAqLzI7XG4gICAgICAgICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgIGNhc2UgNSA6IFxuICAgICAgICAgICAgZlsvKiBzaWduZWRjb252ICovNV0gPSAvKiB0cnVlICovMTtcbiAgICAgICAgICAgIGZbLyogY29udiAqLzEwXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICAgICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluaXNoX2Zvcm1hdHRpbmcocGFyYW0sIHJhd2J1ZmZlcikge1xuICB2YXIganVzdGlmeSA9IHBhcmFtWy8qIGp1c3RpZnkgKi8wXTtcbiAgdmFyIHNpZ25zdHlsZSA9IHBhcmFtWy8qIHNpZ25zdHlsZSAqLzFdO1xuICB2YXIgZmlsdGVyID0gcGFyYW1bLyogZmlsdGVyICovMl07XG4gIHZhciBhbHRlcm5hdGUgPSBwYXJhbVsvKiBhbHRlcm5hdGUgKi8zXTtcbiAgdmFyIGJhc2UgPSBwYXJhbVsvKiBiYXNlICovNF07XG4gIHZhciBzaWduZWRjb252ID0gcGFyYW1bLyogc2lnbmVkY29udiAqLzVdO1xuICB2YXIgd2lkdGggPSBwYXJhbVsvKiB3aWR0aCAqLzZdO1xuICB2YXIgdXBwZXJjYXNlID0gcGFyYW1bLyogdXBwZXJjYXNlICovN107XG4gIHZhciBzaWduID0gcGFyYW1bLyogc2lnbiAqLzhdO1xuICB2YXIgbGVuID0gcmF3YnVmZmVyLmxlbmd0aDtcbiAgaWYgKHNpZ25lZGNvbnYgJiYgKHNpZ24gPCAwIHx8IHNpZ25zdHlsZSAhPT0gXCItXCIpKSB7XG4gICAgbGVuID0gbGVuICsgMSB8IDA7XG4gIH1cbiAgaWYgKGFsdGVybmF0ZSkge1xuICAgIGlmIChiYXNlKSB7XG4gICAgICBpZiAoYmFzZSA9PT0gLyogSGV4ICovMSkge1xuICAgICAgICBsZW4gPSBsZW4gKyAyIHwgMDtcbiAgICAgIH1cbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBsZW4gPSBsZW4gKyAxIHwgMDtcbiAgICB9XG4gIH1cbiAgdmFyIGJ1ZmZlciA9IFwiXCI7XG4gIGlmIChqdXN0aWZ5ID09PSBcIitcIiAmJiBmaWx0ZXIgPT09IFwiIFwiKSB7XG4gICAgZm9yKHZhciBpID0gbGVuICxpX2ZpbmlzaCA9IHdpZHRoIC0gMSB8IDA7IGkgPD0gaV9maW5pc2g7ICsraSl7XG4gICAgICBidWZmZXIgPSBidWZmZXIgKyBmaWx0ZXI7XG4gICAgfVxuICB9XG4gIGlmIChzaWduZWRjb252KSB7XG4gICAgaWYgKHNpZ24gPCAwKSB7XG4gICAgICBidWZmZXIgPSBidWZmZXIgKyBcIi1cIjtcbiAgICB9IGVsc2UgaWYgKHNpZ25zdHlsZSAhPT0gXCItXCIpIHtcbiAgICAgIGJ1ZmZlciA9IGJ1ZmZlciArIHNpZ25zdHlsZTtcbiAgICB9XG4gICAgXG4gIH1cbiAgaWYgKGFsdGVybmF0ZSAmJiBiYXNlID09PSAvKiBPY3QgKi8wKSB7XG4gICAgYnVmZmVyID0gYnVmZmVyICsgXCIwXCI7XG4gIH1cbiAgaWYgKGFsdGVybmF0ZSAmJiBiYXNlID09PSAvKiBIZXggKi8xKSB7XG4gICAgYnVmZmVyID0gYnVmZmVyICsgXCIweFwiO1xuICB9XG4gIGlmIChqdXN0aWZ5ID09PSBcIitcIiAmJiBmaWx0ZXIgPT09IFwiMFwiKSB7XG4gICAgZm9yKHZhciBpJDEgPSBsZW4gLGlfZmluaXNoJDEgPSB3aWR0aCAtIDEgfCAwOyBpJDEgPD0gaV9maW5pc2gkMTsgKytpJDEpe1xuICAgICAgYnVmZmVyID0gYnVmZmVyICsgZmlsdGVyO1xuICAgIH1cbiAgfVxuICBidWZmZXIgPSB1cHBlcmNhc2UgPyBidWZmZXIgKyByYXdidWZmZXIudG9VcHBlckNhc2UoKSA6IGJ1ZmZlciArIHJhd2J1ZmZlcjtcbiAgaWYgKGp1c3RpZnkgPT09IFwiLVwiKSB7XG4gICAgZm9yKHZhciBpJDIgPSBsZW4gLGlfZmluaXNoJDIgPSB3aWR0aCAtIDEgfCAwOyBpJDIgPD0gaV9maW5pc2gkMjsgKytpJDIpe1xuICAgICAgYnVmZmVyID0gYnVmZmVyICsgXCIgXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGNhbWxfZm9ybWF0X2ludChmbXQsIGkpIHtcbiAgaWYgKGZtdCA9PT0gXCIlZFwiKSB7XG4gICAgcmV0dXJuIFN0cmluZyhpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZiA9IHBhcnNlX2Zvcm1hdChmbXQpO1xuICAgIHZhciBmJDEgPSBmO1xuICAgIHZhciBpJDEgPSBpO1xuICAgIHZhciBpJDIgPSBpJDEgPCAwID8gKFxuICAgICAgICBmJDFbLyogc2lnbmVkY29udiAqLzVdID8gKGYkMVsvKiBzaWduICovOF0gPSAtMSwgLWkkMSkgOiAoaSQxID4+PiAwKVxuICAgICAgKSA6IGkkMTtcbiAgICB2YXIgcyA9IGkkMi50b1N0cmluZyhpbnRfb2ZfYmFzZShmJDFbLyogYmFzZSAqLzRdKSk7XG4gICAgaWYgKGYkMVsvKiBwcmVjICovOV0gPj0gMCkge1xuICAgICAgZiQxWy8qIGZpbHRlciAqLzJdID0gXCIgXCI7XG4gICAgICB2YXIgbiA9IGYkMVsvKiBwcmVjICovOV0gLSBzLmxlbmd0aCB8IDA7XG4gICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgcyA9IENhbWxfdXRpbHMucmVwZWF0KG4sIFwiMFwiKSArIHM7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgcmV0dXJuIGZpbmlzaF9mb3JtYXR0aW5nKGYkMSwgcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnQ2NF9mb3JtYXQoZm10LCB4KSB7XG4gIHZhciBmID0gcGFyc2VfZm9ybWF0KGZtdCk7XG4gIHZhciB4JDEgPSBmWy8qIHNpZ25lZGNvbnYgKi81XSAmJiBDYW1sX2ludDY0Lmx0KHgsIC8qIGludDY0ICovW1xuICAgICAgICAvKiBoaSAqLzAsXG4gICAgICAgIC8qIGxvICovMFxuICAgICAgXSkgPyAoZlsvKiBzaWduICovOF0gPSAtMSwgQ2FtbF9pbnQ2NC5uZWcoeCkpIDogeDtcbiAgdmFyIHMgPSBcIlwiO1xuICB2YXIgbWF0Y2ggPSBmWy8qIGJhc2UgKi80XTtcbiAgc3dpdGNoIChtYXRjaCkge1xuICAgIGNhc2UgMCA6IFxuICAgICAgICB2YXIgd2Jhc2UgPSAvKiBpbnQ2NCAqL1tcbiAgICAgICAgICAvKiBoaSAqLzAsXG4gICAgICAgICAgLyogbG8gKi84XG4gICAgICAgIF07XG4gICAgICAgIHZhciBjdnRibCA9IFwiMDEyMzQ1NjdcIjtcbiAgICAgICAgaWYgKENhbWxfaW50NjQubHQoeCQxLCAvKiBpbnQ2NCAqL1tcbiAgICAgICAgICAgICAgICAvKiBoaSAqLzAsXG4gICAgICAgICAgICAgICAgLyogbG8gKi8wXG4gICAgICAgICAgICAgIF0pKSB7XG4gICAgICAgICAgdmFyIHkgPSBDYW1sX2ludDY0LmRpc2NhcmRfc2lnbih4JDEpO1xuICAgICAgICAgIHZhciBtYXRjaCQxID0gQ2FtbF9pbnQ2NC5kaXZfbW9kKHksIHdiYXNlKTtcbiAgICAgICAgICB2YXIgcXVvdGllbnQgPSBDYW1sX2ludDY0LmFkZCgvKiBpbnQ2NCAqL1tcbiAgICAgICAgICAgICAgICAvKiBoaSAqLzI2ODQzNTQ1NixcbiAgICAgICAgICAgICAgICAvKiBsbyAqLzBcbiAgICAgICAgICAgICAgXSwgbWF0Y2gkMVswXSk7XG4gICAgICAgICAgdmFyIG1vZHVsdXMgPSBtYXRjaCQxWzFdO1xuICAgICAgICAgIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGN2dGJsLmNoYXJDb2RlQXQobW9kdWx1c1sxXSB8IDApKSArIHM7XG4gICAgICAgICAgd2hpbGUoQ2FtbF9pbnQ2NC5uZXEocXVvdGllbnQsIC8qIGludDY0ICovW1xuICAgICAgICAgICAgICAgICAgLyogaGkgKi8wLFxuICAgICAgICAgICAgICAgICAgLyogbG8gKi8wXG4gICAgICAgICAgICAgICAgXSkpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCQyID0gQ2FtbF9pbnQ2NC5kaXZfbW9kKHF1b3RpZW50LCB3YmFzZSk7XG4gICAgICAgICAgICBxdW90aWVudCA9IG1hdGNoJDJbMF07XG4gICAgICAgICAgICBtb2R1bHVzID0gbWF0Y2gkMlsxXTtcbiAgICAgICAgICAgIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGN2dGJsLmNoYXJDb2RlQXQobW9kdWx1c1sxXSB8IDApKSArIHM7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbWF0Y2gkMyA9IENhbWxfaW50NjQuZGl2X21vZCh4JDEsIHdiYXNlKTtcbiAgICAgICAgICB2YXIgcXVvdGllbnQkMSA9IG1hdGNoJDNbMF07XG4gICAgICAgICAgdmFyIG1vZHVsdXMkMSA9IG1hdGNoJDNbMV07XG4gICAgICAgICAgcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY3Z0YmwuY2hhckNvZGVBdChtb2R1bHVzJDFbMV0gfCAwKSkgKyBzO1xuICAgICAgICAgIHdoaWxlKENhbWxfaW50NjQubmVxKHF1b3RpZW50JDEsIC8qIGludDY0ICovW1xuICAgICAgICAgICAgICAgICAgLyogaGkgKi8wLFxuICAgICAgICAgICAgICAgICAgLyogbG8gKi8wXG4gICAgICAgICAgICAgICAgXSkpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCQ0ID0gQ2FtbF9pbnQ2NC5kaXZfbW9kKHF1b3RpZW50JDEsIHdiYXNlKTtcbiAgICAgICAgICAgIHF1b3RpZW50JDEgPSBtYXRjaCQ0WzBdO1xuICAgICAgICAgICAgbW9kdWx1cyQxID0gbWF0Y2gkNFsxXTtcbiAgICAgICAgICAgIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGN2dGJsLmNoYXJDb2RlQXQobW9kdWx1cyQxWzFdIHwgMCkpICsgcztcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgMSA6IFxuICAgICAgICBzID0gQ2FtbF9pbnQ2NC50b19oZXgoeCQxKSArIHM7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgMiA6IFxuICAgICAgICB2YXIgd2Jhc2UkMSA9IC8qIGludDY0ICovW1xuICAgICAgICAgIC8qIGhpICovMCxcbiAgICAgICAgICAvKiBsbyAqLzEwXG4gICAgICAgIF07XG4gICAgICAgIHZhciBjdnRibCQxID0gXCIwMTIzNDU2Nzg5XCI7XG4gICAgICAgIGlmIChDYW1sX2ludDY0Lmx0KHgkMSwgLyogaW50NjQgKi9bXG4gICAgICAgICAgICAgICAgLyogaGkgKi8wLFxuICAgICAgICAgICAgICAgIC8qIGxvICovMFxuICAgICAgICAgICAgICBdKSkge1xuICAgICAgICAgIHZhciB5JDEgPSBDYW1sX2ludDY0LmRpc2NhcmRfc2lnbih4JDEpO1xuICAgICAgICAgIHZhciBtYXRjaCQ1ID0gQ2FtbF9pbnQ2NC5kaXZfbW9kKHkkMSwgd2Jhc2UkMSk7XG4gICAgICAgICAgdmFyIG1hdGNoJDYgPSBDYW1sX2ludDY0LmRpdl9tb2QoQ2FtbF9pbnQ2NC5hZGQoLyogaW50NjQgKi9bXG4gICAgICAgICAgICAgICAgICAgIC8qIGhpICovMCxcbiAgICAgICAgICAgICAgICAgICAgLyogbG8gKi84XG4gICAgICAgICAgICAgICAgICBdLCBtYXRjaCQ1WzFdKSwgd2Jhc2UkMSk7XG4gICAgICAgICAgdmFyIHF1b3RpZW50JDIgPSBDYW1sX2ludDY0LmFkZChDYW1sX2ludDY0LmFkZCgvKiBpbnQ2NCAqL1tcbiAgICAgICAgICAgICAgICAgICAgLyogaGkgKi8yMTQ3NDgzNjQsXG4gICAgICAgICAgICAgICAgICAgIC8qIGxvICovMzQzNTk3MzgzNlxuICAgICAgICAgICAgICAgICAgXSwgbWF0Y2gkNVswXSksIG1hdGNoJDZbMF0pO1xuICAgICAgICAgIHZhciBtb2R1bHVzJDIgPSBtYXRjaCQ2WzFdO1xuICAgICAgICAgIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGN2dGJsJDEuY2hhckNvZGVBdChtb2R1bHVzJDJbMV0gfCAwKSkgKyBzO1xuICAgICAgICAgIHdoaWxlKENhbWxfaW50NjQubmVxKHF1b3RpZW50JDIsIC8qIGludDY0ICovW1xuICAgICAgICAgICAgICAgICAgLyogaGkgKi8wLFxuICAgICAgICAgICAgICAgICAgLyogbG8gKi8wXG4gICAgICAgICAgICAgICAgXSkpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCQ3ID0gQ2FtbF9pbnQ2NC5kaXZfbW9kKHF1b3RpZW50JDIsIHdiYXNlJDEpO1xuICAgICAgICAgICAgcXVvdGllbnQkMiA9IG1hdGNoJDdbMF07XG4gICAgICAgICAgICBtb2R1bHVzJDIgPSBtYXRjaCQ3WzFdO1xuICAgICAgICAgICAgcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY3Z0YmwkMS5jaGFyQ29kZUF0KG1vZHVsdXMkMlsxXSB8IDApKSArIHM7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbWF0Y2gkOCA9IENhbWxfaW50NjQuZGl2X21vZCh4JDEsIHdiYXNlJDEpO1xuICAgICAgICAgIHZhciBxdW90aWVudCQzID0gbWF0Y2gkOFswXTtcbiAgICAgICAgICB2YXIgbW9kdWx1cyQzID0gbWF0Y2gkOFsxXTtcbiAgICAgICAgICBzID0gU3RyaW5nLmZyb21DaGFyQ29kZShjdnRibCQxLmNoYXJDb2RlQXQobW9kdWx1cyQzWzFdIHwgMCkpICsgcztcbiAgICAgICAgICB3aGlsZShDYW1sX2ludDY0Lm5lcShxdW90aWVudCQzLCAvKiBpbnQ2NCAqL1tcbiAgICAgICAgICAgICAgICAgIC8qIGhpICovMCxcbiAgICAgICAgICAgICAgICAgIC8qIGxvICovMFxuICAgICAgICAgICAgICAgIF0pKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2gkOSA9IENhbWxfaW50NjQuZGl2X21vZChxdW90aWVudCQzLCB3YmFzZSQxKTtcbiAgICAgICAgICAgIHF1b3RpZW50JDMgPSBtYXRjaCQ5WzBdO1xuICAgICAgICAgICAgbW9kdWx1cyQzID0gbWF0Y2gkOVsxXTtcbiAgICAgICAgICAgIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGN2dGJsJDEuY2hhckNvZGVBdChtb2R1bHVzJDNbMV0gfCAwKSkgKyBzO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgXG4gIH1cbiAgaWYgKGZbLyogcHJlYyAqLzldID49IDApIHtcbiAgICBmWy8qIGZpbHRlciAqLzJdID0gXCIgXCI7XG4gICAgdmFyIG4gPSBmWy8qIHByZWMgKi85XSAtIHMubGVuZ3RoIHwgMDtcbiAgICBpZiAobiA+IDApIHtcbiAgICAgIHMgPSBDYW1sX3V0aWxzLnJlcGVhdChuLCBcIjBcIikgKyBzO1xuICAgIH1cbiAgICBcbiAgfVxuICByZXR1cm4gZmluaXNoX2Zvcm1hdHRpbmcoZiwgcyk7XG59XG5cbmZ1bmN0aW9uIGNhbWxfZm9ybWF0X2Zsb2F0KGZtdCwgeCkge1xuICB2YXIgZiA9IHBhcnNlX2Zvcm1hdChmbXQpO1xuICB2YXIgcHJlYyA9IGZbLyogcHJlYyAqLzldIDwgMCA/IDYgOiBmWy8qIHByZWMgKi85XTtcbiAgdmFyIHgkMSA9IHggPCAwID8gKGZbLyogc2lnbiAqLzhdID0gLTEsIC14KSA6IHg7XG4gIHZhciBzID0gXCJcIjtcbiAgaWYgKGlzTmFOKHgkMSkpIHtcbiAgICBzID0gXCJuYW5cIjtcbiAgICBmWy8qIGZpbHRlciAqLzJdID0gXCIgXCI7XG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUoeCQxKSkge1xuICAgIHZhciBtYXRjaCA9IGZbLyogY29udiAqLzEwXTtcbiAgICBzd2l0Y2ggKG1hdGNoKSB7XG4gICAgICBjYXNlIFwiZVwiIDogXG4gICAgICAgICAgcyA9IHgkMS50b0V4cG9uZW50aWFsKHByZWMpO1xuICAgICAgICAgIHZhciBpID0gcy5sZW5ndGg7XG4gICAgICAgICAgaWYgKHNbaSAtIDMgfCAwXSA9PT0gXCJlXCIpIHtcbiAgICAgICAgICAgIHMgPSBzLnNsaWNlKDAsIGkgLSAxIHwgMCkgKyAoXCIwXCIgKyBzLnNsaWNlKGkgLSAxIHwgMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJmXCIgOiBcbiAgICAgICAgICBzID0geCQxLnRvRml4ZWQocHJlYyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZ1wiIDogXG4gICAgICAgICAgdmFyIHByZWMkMSA9IHByZWMgIT09IDAgPyBwcmVjIDogMTtcbiAgICAgICAgICBzID0geCQxLnRvRXhwb25lbnRpYWwocHJlYyQxIC0gMSB8IDApO1xuICAgICAgICAgIHZhciBqID0gcy5pbmRleE9mKFwiZVwiKTtcbiAgICAgICAgICB2YXIgZXhwID0gTnVtYmVyKHMuc2xpY2UoaiArIDEgfCAwKSkgfCAwO1xuICAgICAgICAgIGlmIChleHAgPCAtNCB8fCB4JDEgPj0gMWUyMSB8fCB4JDEudG9GaXhlZCgpLmxlbmd0aCA+IHByZWMkMSkge1xuICAgICAgICAgICAgdmFyIGkkMSA9IGogLSAxIHwgMDtcbiAgICAgICAgICAgIHdoaWxlKHNbaSQxXSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgaSQxID0gaSQxIC0gMSB8IDA7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHNbaSQxXSA9PT0gXCIuXCIpIHtcbiAgICAgICAgICAgICAgaSQxID0gaSQxIC0gMSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzID0gcy5zbGljZSgwLCBpJDEgKyAxIHwgMCkgKyBzLnNsaWNlKGopO1xuICAgICAgICAgICAgdmFyIGkkMiA9IHMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHNbaSQyIC0gMyB8IDBdID09PSBcImVcIikge1xuICAgICAgICAgICAgICBzID0gcy5zbGljZSgwLCBpJDIgLSAxIHwgMCkgKyAoXCIwXCIgKyBzLnNsaWNlKGkkMiAtIDEgfCAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHAgPSBwcmVjJDE7XG4gICAgICAgICAgICBpZiAoZXhwIDwgMCkge1xuICAgICAgICAgICAgICBwID0gcCAtIChleHAgKyAxIHwgMCkgfCAwO1xuICAgICAgICAgICAgICBzID0geCQxLnRvRml4ZWQocCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aGlsZSgoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHMgPSB4JDEudG9GaXhlZChwKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKyhzLmxlbmd0aCA+IChwcmVjJDEgKyAxIHwgMCkpO1xuICAgICAgICAgICAgICAgICAgICB9KSgpKSB7XG4gICAgICAgICAgICAgICAgcCA9IHAgLSAxIHwgMDtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwICE9PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBrID0gcy5sZW5ndGggLSAxIHwgMDtcbiAgICAgICAgICAgICAgd2hpbGUoc1trXSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICBrID0gayAtIDEgfCAwO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpZiAoc1trXSA9PT0gXCIuXCIpIHtcbiAgICAgICAgICAgICAgICBrID0gayAtIDEgfCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHMgPSBzLnNsaWNlKDAsIGsgKyAxIHwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcyA9IFwiaW5mXCI7XG4gICAgZlsvKiBmaWx0ZXIgKi8yXSA9IFwiIFwiO1xuICB9XG4gIHJldHVybiBmaW5pc2hfZm9ybWF0dGluZyhmLCBzKTtcbn1cblxudmFyIGZsb2F0X29mX3N0cmluZyA9IChcbiAgZnVuY3Rpb24gKHMsIGNhbWxfZmFpbHdpdGgpIHtcbiAgICB2YXIgcmVzID0gK3M7XG4gICAgaWYgKChzLmxlbmd0aCA+IDApICYmIChyZXMgPT09IHJlcykpXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgcyA9IHMucmVwbGFjZSgvXy9nLCBcIlwiKTtcbiAgICByZXMgPSArcztcbiAgICBpZiAoKChzLmxlbmd0aCA+IDApICYmIChyZXMgPT09IHJlcykpIHx8IC9eWystXT9uYW4kL2kudGVzdChzKSkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICA7XG4gICAgaWYgKC9eICoweFswLTlhLWZfXStwWystXT9bMC05X10rL2kudGVzdChzKSkge1xuICAgICAgICB2YXIgcGlkeCA9IHMuaW5kZXhPZigncCcpO1xuICAgICAgICBwaWR4ID0gKHBpZHggPT0gLTEpID8gcy5pbmRleE9mKCdQJykgOiBwaWR4O1xuICAgICAgICB2YXIgZXhwID0gK3Muc3Vic3RyaW5nKHBpZHggKyAxKTtcbiAgICAgICAgcmVzID0gK3Muc3Vic3RyaW5nKDAsIHBpZHgpO1xuICAgICAgICByZXR1cm4gcmVzICogTWF0aC5wb3coMiwgZXhwKTtcbiAgICB9XG4gICAgaWYgKC9eXFwrP2luZihpbml0eSk/JC9pLnRlc3QocykpXG4gICAgICAgIHJldHVybiBJbmZpbml0eTtcbiAgICBpZiAoL14taW5mKGluaXR5KT8kL2kudGVzdChzKSlcbiAgICAgICAgcmV0dXJuIC1JbmZpbml0eTtcbiAgICBjYW1sX2ZhaWx3aXRoKFwiZmxvYXRfb2Zfc3RyaW5nXCIpO1xufVxuXG4pO1xuXG5mdW5jdGlvbiBjYW1sX2Zsb2F0X29mX3N0cmluZyhzKSB7XG4gIHJldHVybiBDdXJyeS5fMihmbG9hdF9vZl9zdHJpbmcsIHMsIGNhbWxfZmFpbHdpdGgpO1xufVxuXG52YXIgY2FtbF9uYXRpdmVpbnRfZm9ybWF0ID0gY2FtbF9mb3JtYXRfaW50O1xuXG52YXIgY2FtbF9pbnQzMl9mb3JtYXQgPSBjYW1sX2Zvcm1hdF9pbnQ7XG5cbnZhciBjYW1sX2ludDMyX29mX3N0cmluZyA9IGNhbWxfaW50X29mX3N0cmluZztcblxudmFyIGNhbWxfbmF0aXZlaW50X29mX3N0cmluZyA9IGNhbWxfaW50X29mX3N0cmluZztcblxuZXhwb3J0IHtcbiAgY2FtbF9mb3JtYXRfZmxvYXQgICAgICAgICxcbiAgY2FtbF9mb3JtYXRfaW50ICAgICAgICAgICxcbiAgY2FtbF9uYXRpdmVpbnRfZm9ybWF0ICAgICxcbiAgY2FtbF9pbnQzMl9mb3JtYXQgICAgICAgICxcbiAgY2FtbF9mbG9hdF9vZl9zdHJpbmcgICAgICxcbiAgY2FtbF9pbnQ2NF9mb3JtYXQgICAgICAgICxcbiAgY2FtbF9pbnRfb2Zfc3RyaW5nICAgICAgICxcbiAgY2FtbF9pbnQzMl9vZl9zdHJpbmcgICAgICxcbiAgY2FtbF9pbnQ2NF9vZl9zdHJpbmcgICAgICxcbiAgY2FtbF9uYXRpdmVpbnRfb2Zfc3RyaW5nICxcbiAgXG59XG4vKiBmbG9hdF9vZl9zdHJpbmcgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMgZnJvbSBcIi4vY2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuanNcIjtcblxuZnVuY3Rpb24gc3RyaW5nX29mX2NoYXIocHJpbSkge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwcmltKTtcbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfZ2V0KHMsIGkpIHtcbiAgaWYgKGkgPj0gcy5sZW5ndGggfHwgaSA8IDApIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcImluZGV4IG91dCBvZiBib3VuZHNcIlxuICAgICAgICBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzLmNoYXJDb2RlQXQoaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9jcmVhdGVfc3RyaW5nKGxlbikge1xuICBpZiAobGVuIDwgMCkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiU3RyaW5nLmNyZWF0ZVwiXG4gICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheShsZW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfc3RyaW5nX2NvbXBhcmUoczEsIHMyKSB7XG4gIGlmIChzMSA9PT0gczIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChzMSA8IHMyKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZmlsbF9zdHJpbmcocywgaSwgbCwgYykge1xuICBpZiAobCA+IDApIHtcbiAgICBmb3IodmFyIGsgPSBpICxrX2ZpbmlzaCA9IChsICsgaSB8IDApIC0gMSB8IDA7IGsgPD0ga19maW5pc2g7ICsrayl7XG4gICAgICBzW2tdID0gYztcbiAgICB9XG4gICAgcmV0dXJuIC8qICgpICovMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2JsaXRfc3RyaW5nKHMxLCBpMSwgczIsIGkyLCBsZW4pIHtcbiAgaWYgKGxlbiA+IDApIHtcbiAgICB2YXIgb2ZmMSA9IHMxLmxlbmd0aCAtIGkxIHwgMDtcbiAgICBpZiAobGVuIDw9IG9mZjEpIHtcbiAgICAgIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gbGVuIC0gMSB8IDA7IGkgPD0gaV9maW5pc2g7ICsraSl7XG4gICAgICAgIHMyW2kyICsgaSB8IDBdID0gczEuY2hhckNvZGVBdChpMSArIGkgfCAwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAvKiAoKSAqLzA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcih2YXIgaSQxID0gMCAsaV9maW5pc2gkMSA9IG9mZjEgLSAxIHwgMDsgaSQxIDw9IGlfZmluaXNoJDE7ICsraSQxKXtcbiAgICAgICAgczJbaTIgKyBpJDEgfCAwXSA9IHMxLmNoYXJDb2RlQXQoaTEgKyBpJDEgfCAwKTtcbiAgICAgIH1cbiAgICAgIGZvcih2YXIgaSQyID0gb2ZmMSAsaV9maW5pc2gkMiA9IGxlbiAtIDEgfCAwOyBpJDIgPD0gaV9maW5pc2gkMjsgKytpJDIpe1xuICAgICAgICBzMltpMiArIGkkMiB8IDBdID0gLyogXCJcXDAwMFwiICovMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAvKiAoKSAqLzA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYmxpdF9ieXRlcyhzMSwgaTEsIHMyLCBpMiwgbGVuKSB7XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgaWYgKHMxID09PSBzMikge1xuICAgICAgdmFyIHMxJDEgPSBzMTtcbiAgICAgIHZhciBpMSQxID0gaTE7XG4gICAgICB2YXIgaTIkMSA9IGkyO1xuICAgICAgdmFyIGxlbiQxID0gbGVuO1xuICAgICAgaWYgKGkxJDEgPCBpMiQxKSB7XG4gICAgICAgIHZhciByYW5nZV9hID0gKHMxJDEubGVuZ3RoIC0gaTIkMSB8IDApIC0gMSB8IDA7XG4gICAgICAgIHZhciByYW5nZV9iID0gbGVuJDEgLSAxIHwgMDtcbiAgICAgICAgdmFyIHJhbmdlID0gcmFuZ2VfYSA+IHJhbmdlX2IgPyByYW5nZV9iIDogcmFuZ2VfYTtcbiAgICAgICAgZm9yKHZhciBqID0gcmFuZ2U7IGogPj0gMDsgLS1qKXtcbiAgICAgICAgICBzMSQxW2kyJDEgKyBqIHwgMF0gPSBzMSQxW2kxJDEgKyBqIHwgMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC8qICgpICovMDtcbiAgICAgIH0gZWxzZSBpZiAoaTEkMSA+IGkyJDEpIHtcbiAgICAgICAgdmFyIHJhbmdlX2EkMSA9IChzMSQxLmxlbmd0aCAtIGkxJDEgfCAwKSAtIDEgfCAwO1xuICAgICAgICB2YXIgcmFuZ2VfYiQxID0gbGVuJDEgLSAxIHwgMDtcbiAgICAgICAgdmFyIHJhbmdlJDEgPSByYW5nZV9hJDEgPiByYW5nZV9iJDEgPyByYW5nZV9iJDEgOiByYW5nZV9hJDE7XG4gICAgICAgIGZvcih2YXIgayA9IDA7IGsgPD0gcmFuZ2UkMTsgKytrKXtcbiAgICAgICAgICBzMSQxW2kyJDEgKyBrIHwgMF0gPSBzMSQxW2kxJDEgKyBrIHwgMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC8qICgpICovMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb2ZmMSA9IHMxLmxlbmd0aCAtIGkxIHwgMDtcbiAgICAgIGlmIChsZW4gPD0gb2ZmMSkge1xuICAgICAgICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGxlbiAtIDEgfCAwOyBpIDw9IGlfZmluaXNoOyArK2kpe1xuICAgICAgICAgIHMyW2kyICsgaSB8IDBdID0gczFbaTEgKyBpIHwgMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC8qICgpICovMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcih2YXIgaSQxID0gMCAsaV9maW5pc2gkMSA9IG9mZjEgLSAxIHwgMDsgaSQxIDw9IGlfZmluaXNoJDE7ICsraSQxKXtcbiAgICAgICAgICBzMltpMiArIGkkMSB8IDBdID0gczFbaTEgKyBpJDEgfCAwXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IodmFyIGkkMiA9IG9mZjEgLGlfZmluaXNoJDIgPSBsZW4gLSAxIHwgMDsgaSQyIDw9IGlfZmluaXNoJDI7ICsraSQyKXtcbiAgICAgICAgICBzMltpMiArIGkkMiB8IDBdID0gLyogXCJcXDAwMFwiICovMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLyogKCkgKi8wO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBieXRlc19vZl9zdHJpbmcocykge1xuICB2YXIgbGVuID0gcy5sZW5ndGg7XG4gIHZhciByZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBsZW4gLSAxIHwgMDsgaSA8PSBpX2ZpbmlzaDsgKytpKXtcbiAgICByZXNbaV0gPSBzLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gYnl0ZXNfdG9fc3RyaW5nKGEpIHtcbiAgdmFyIGJ5dGVzID0gYTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuID0gYS5sZW5ndGg7XG4gIHZhciBzID0gXCJcIjtcbiAgdmFyIHNfbGVuID0gbGVuO1xuICBpZiAoaSA9PT0gMCAmJiBsZW4gPD0gNDA5NiAmJiBsZW4gPT09IGJ5dGVzLmxlbmd0aCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsYnl0ZXMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHdoaWxlKHNfbGVuID4gMCkge1xuICAgICAgdmFyIG5leHQgPSBzX2xlbiA8IDEwMjQgPyBzX2xlbiA6IDEwMjQ7XG4gICAgICB2YXIgdG1wX2J5dGVzID0gbmV3IEFycmF5KG5leHQpO1xuICAgICAgY2FtbF9ibGl0X2J5dGVzKGJ5dGVzLCBvZmZzZXQsIHRtcF9ieXRlcywgMCwgbmV4dCk7XG4gICAgICBzID0gcyArIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCx0bXBfYnl0ZXMpO1xuICAgICAgc19sZW4gPSBzX2xlbiAtIG5leHQgfCAwO1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0ICsgbmV4dCB8IDA7XG4gICAgfTtcbiAgICByZXR1cm4gcztcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N0cmluZ19vZl9jaGFyX2FycmF5KGNoYXJzKSB7XG4gIHZhciBsZW4gPSBjaGFycy5sZW5ndGg7XG4gIHZhciBieXRlcyA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGxlbiAtIDEgfCAwOyBpIDw9IGlfZmluaXNoOyArK2kpe1xuICAgIGJ5dGVzW2ldID0gY2hhcnNbaV07XG4gIH1cbiAgcmV0dXJuIGJ5dGVzX3RvX3N0cmluZyhieXRlcyk7XG59XG5cbmZ1bmN0aW9uIGNhbWxfaXNfcHJpbnRhYmxlKGMpIHtcbiAgaWYgKGMgPiAzMSkge1xuICAgIHJldHVybiArKGMgPCAxMjcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBmYWxzZSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfZ2V0MTYocywgaSkge1xuICByZXR1cm4gcy5jaGFyQ29kZUF0KGkpICsgKHMuY2hhckNvZGVBdChpICsgMSB8IDApIDw8IDgpIHwgMDtcbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfZ2V0MzIocywgaSkge1xuICByZXR1cm4gKChzLmNoYXJDb2RlQXQoaSkgKyAocy5jaGFyQ29kZUF0KGkgKyAxIHwgMCkgPDwgOCkgfCAwKSArIChzLmNoYXJDb2RlQXQoaSArIDIgfCAwKSA8PCAxNikgfCAwKSArIChzLmNoYXJDb2RlQXQoaSArIDMgfCAwKSA8PCAyNCkgfCAwO1xufVxuXG5mdW5jdGlvbiBnZXQocywgaSkge1xuICBpZiAoaSA8IDAgfHwgaSA+PSBzLmxlbmd0aCkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiaW5kZXggb3V0IG9mIGJvdW5kc1wiXG4gICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHMuY2hhckNvZGVBdChpKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBieXRlc19vZl9zdHJpbmcgICAgICAgICAgICxcbiAgYnl0ZXNfdG9fc3RyaW5nICAgICAgICAgICAsXG4gIGNhbWxfaXNfcHJpbnRhYmxlICAgICAgICAgLFxuICBjYW1sX3N0cmluZ19vZl9jaGFyX2FycmF5ICxcbiAgY2FtbF9zdHJpbmdfZ2V0ICAgICAgICAgICAsXG4gIGNhbWxfc3RyaW5nX2NvbXBhcmUgICAgICAgLFxuICBjYW1sX2NyZWF0ZV9zdHJpbmcgICAgICAgICxcbiAgY2FtbF9maWxsX3N0cmluZyAgICAgICAgICAsXG4gIGNhbWxfYmxpdF9zdHJpbmcgICAgICAgICAgLFxuICBjYW1sX2JsaXRfYnl0ZXMgICAgICAgICAgICxcbiAgY2FtbF9zdHJpbmdfZ2V0MTYgICAgICAgICAsXG4gIGNhbWxfc3RyaW5nX2dldDMyICAgICAgICAgLFxuICBzdHJpbmdfb2ZfY2hhciAgICAgICAgICAgICxcbiAgZ2V0ICAgICAgICAgICAgICAgICAgICAgICAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgaWQgPSBbMF07XG5cbmZ1bmN0aW9uIGNhbWxfc2V0X29vX2lkKGIpIHtcbiAgYlsxXSA9IGlkWzBdO1xuICBpZFswXSArPSAxO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gZ2V0X2lkKCkge1xuICBpZFswXSArPSAxO1xuICByZXR1cm4gaWRbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShzdHIpIHtcbiAgdmFyIHZfMDAxID0gZ2V0X2lkKC8qICgpICovMCk7XG4gIHZhciB2ID0gLyogdHVwbGUgKi9bXG4gICAgc3RyLFxuICAgIHZfMDAxXG4gIF07XG4gIHYudGFnID0gMjQ4O1xuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gaXNDYW1sRXhjZXB0aW9uT3JPcGVuVmFyaWFudChlKSB7XG4gIGlmIChlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gLyogZmFsc2UgKi8wO1xuICB9IGVsc2UgaWYgKGUudGFnID09PSAyNDgpIHtcbiAgICByZXR1cm4gLyogdHJ1ZSAqLzE7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsb3QgPSBlWzBdO1xuICAgIGlmIChzbG90ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiArKHNsb3QudGFnID09PSAyNDgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogZmFsc2UgKi8wO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBjYW1sX3NldF9vb19pZCAgICAgICAgICAgICAgICxcbiAgZ2V0X2lkICAgICAgICAgICAgICAgICAgICAgICAsXG4gIGNyZWF0ZSAgICAgICAgICAgICAgICAgICAgICAgLFxuICBpc0NhbWxFeGNlcHRpb25Pck9wZW5WYXJpYW50ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBub3RfaW1wbGVtZW50ZWQgPSAoZnVuY3Rpb24gKHMpeyB0aHJvdyBuZXcgRXJyb3Iocyl9KTtcblxuZXhwb3J0IHtcbiAgbm90X2ltcGxlbWVudGVkICxcbiAgXG59XG4vKiBub3RfaW1wbGVtZW50ZWQgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgQmxvY2sgZnJvbSBcIi4vYmxvY2suanNcIjtcblxuZnVuY3Rpb24gZXJhc2VfcmVsKHBhcmFtKSB7XG4gIGlmICh0eXBlb2YgcGFyYW0gPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gLyogRW5kX29mX2ZtdHR5ICovMDtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHBhcmFtLnRhZyB8IDApIHtcbiAgICAgIGNhc2UgMCA6IFxuICAgICAgICAgIHJldHVybiAvKiBDaGFyX3R5ICovQmxvY2suX18oMCwgW2VyYXNlX3JlbChwYXJhbVswXSldKTtcbiAgICAgIGNhc2UgMSA6IFxuICAgICAgICAgIHJldHVybiAvKiBTdHJpbmdfdHkgKi9CbG9jay5fXygxLCBbZXJhc2VfcmVsKHBhcmFtWzBdKV0pO1xuICAgICAgY2FzZSAyIDogXG4gICAgICAgICAgcmV0dXJuIC8qIEludF90eSAqL0Jsb2NrLl9fKDIsIFtlcmFzZV9yZWwocGFyYW1bMF0pXSk7XG4gICAgICBjYXNlIDMgOiBcbiAgICAgICAgICByZXR1cm4gLyogSW50MzJfdHkgKi9CbG9jay5fXygzLCBbZXJhc2VfcmVsKHBhcmFtWzBdKV0pO1xuICAgICAgY2FzZSA0IDogXG4gICAgICAgICAgcmV0dXJuIC8qIE5hdGl2ZWludF90eSAqL0Jsb2NrLl9fKDQsIFtlcmFzZV9yZWwocGFyYW1bMF0pXSk7XG4gICAgICBjYXNlIDUgOiBcbiAgICAgICAgICByZXR1cm4gLyogSW50NjRfdHkgKi9CbG9jay5fXyg1LCBbZXJhc2VfcmVsKHBhcmFtWzBdKV0pO1xuICAgICAgY2FzZSA2IDogXG4gICAgICAgICAgcmV0dXJuIC8qIEZsb2F0X3R5ICovQmxvY2suX18oNiwgW2VyYXNlX3JlbChwYXJhbVswXSldKTtcbiAgICAgIGNhc2UgNyA6IFxuICAgICAgICAgIHJldHVybiAvKiBCb29sX3R5ICovQmxvY2suX18oNywgW2VyYXNlX3JlbChwYXJhbVswXSldKTtcbiAgICAgIGNhc2UgOCA6IFxuICAgICAgICAgIHJldHVybiAvKiBGb3JtYXRfYXJnX3R5ICovQmxvY2suX18oOCwgW1xuICAgICAgICAgICAgICAgICAgICBwYXJhbVswXSxcbiAgICAgICAgICAgICAgICAgICAgZXJhc2VfcmVsKHBhcmFtWzFdKVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDkgOiBcbiAgICAgICAgICB2YXIgdHkxID0gcGFyYW1bMF07XG4gICAgICAgICAgcmV0dXJuIC8qIEZvcm1hdF9zdWJzdF90eSAqL0Jsb2NrLl9fKDksIFtcbiAgICAgICAgICAgICAgICAgICAgdHkxLFxuICAgICAgICAgICAgICAgICAgICB0eTEsXG4gICAgICAgICAgICAgICAgICAgIGVyYXNlX3JlbChwYXJhbVsyXSlcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAxMCA6IFxuICAgICAgICAgIHJldHVybiAvKiBBbHBoYV90eSAqL0Jsb2NrLl9fKDEwLCBbZXJhc2VfcmVsKHBhcmFtWzBdKV0pO1xuICAgICAgY2FzZSAxMSA6IFxuICAgICAgICAgIHJldHVybiAvKiBUaGV0YV90eSAqL0Jsb2NrLl9fKDExLCBbZXJhc2VfcmVsKHBhcmFtWzBdKV0pO1xuICAgICAgY2FzZSAxMiA6IFxuICAgICAgICAgIHJldHVybiAvKiBBbnlfdHkgKi9CbG9jay5fXygxMiwgW2VyYXNlX3JlbChwYXJhbVswXSldKTtcbiAgICAgIGNhc2UgMTMgOiBcbiAgICAgICAgICByZXR1cm4gLyogUmVhZGVyX3R5ICovQmxvY2suX18oMTMsIFtlcmFzZV9yZWwocGFyYW1bMF0pXSk7XG4gICAgICBjYXNlIDE0IDogXG4gICAgICAgICAgcmV0dXJuIC8qIElnbm9yZWRfcmVhZGVyX3R5ICovQmxvY2suX18oMTQsIFtlcmFzZV9yZWwocGFyYW1bMF0pXSk7XG4gICAgICBcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uY2F0X2ZtdHR5KGZtdHR5MSwgZm10dHkyKSB7XG4gIGlmICh0eXBlb2YgZm10dHkxID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIGZtdHR5MjtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGZtdHR5MS50YWcgfCAwKSB7XG4gICAgICBjYXNlIDAgOiBcbiAgICAgICAgICByZXR1cm4gLyogQ2hhcl90eSAqL0Jsb2NrLl9fKDAsIFtjb25jYXRfZm10dHkoZm10dHkxWzBdLCBmbXR0eTIpXSk7XG4gICAgICBjYXNlIDEgOiBcbiAgICAgICAgICByZXR1cm4gLyogU3RyaW5nX3R5ICovQmxvY2suX18oMSwgW2NvbmNhdF9mbXR0eShmbXR0eTFbMF0sIGZtdHR5MildKTtcbiAgICAgIGNhc2UgMiA6IFxuICAgICAgICAgIHJldHVybiAvKiBJbnRfdHkgKi9CbG9jay5fXygyLCBbY29uY2F0X2ZtdHR5KGZtdHR5MVswXSwgZm10dHkyKV0pO1xuICAgICAgY2FzZSAzIDogXG4gICAgICAgICAgcmV0dXJuIC8qIEludDMyX3R5ICovQmxvY2suX18oMywgW2NvbmNhdF9mbXR0eShmbXR0eTFbMF0sIGZtdHR5MildKTtcbiAgICAgIGNhc2UgNCA6IFxuICAgICAgICAgIHJldHVybiAvKiBOYXRpdmVpbnRfdHkgKi9CbG9jay5fXyg0LCBbY29uY2F0X2ZtdHR5KGZtdHR5MVswXSwgZm10dHkyKV0pO1xuICAgICAgY2FzZSA1IDogXG4gICAgICAgICAgcmV0dXJuIC8qIEludDY0X3R5ICovQmxvY2suX18oNSwgW2NvbmNhdF9mbXR0eShmbXR0eTFbMF0sIGZtdHR5MildKTtcbiAgICAgIGNhc2UgNiA6IFxuICAgICAgICAgIHJldHVybiAvKiBGbG9hdF90eSAqL0Jsb2NrLl9fKDYsIFtjb25jYXRfZm10dHkoZm10dHkxWzBdLCBmbXR0eTIpXSk7XG4gICAgICBjYXNlIDcgOiBcbiAgICAgICAgICByZXR1cm4gLyogQm9vbF90eSAqL0Jsb2NrLl9fKDcsIFtjb25jYXRfZm10dHkoZm10dHkxWzBdLCBmbXR0eTIpXSk7XG4gICAgICBjYXNlIDggOiBcbiAgICAgICAgICByZXR1cm4gLyogRm9ybWF0X2FyZ190eSAqL0Jsb2NrLl9fKDgsIFtcbiAgICAgICAgICAgICAgICAgICAgZm10dHkxWzBdLFxuICAgICAgICAgICAgICAgICAgICBjb25jYXRfZm10dHkoZm10dHkxWzFdLCBmbXR0eTIpXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgOSA6IFxuICAgICAgICAgIHJldHVybiAvKiBGb3JtYXRfc3Vic3RfdHkgKi9CbG9jay5fXyg5LCBbXG4gICAgICAgICAgICAgICAgICAgIGZtdHR5MVswXSxcbiAgICAgICAgICAgICAgICAgICAgZm10dHkxWzFdLFxuICAgICAgICAgICAgICAgICAgICBjb25jYXRfZm10dHkoZm10dHkxWzJdLCBmbXR0eTIpXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMTAgOiBcbiAgICAgICAgICByZXR1cm4gLyogQWxwaGFfdHkgKi9CbG9jay5fXygxMCwgW2NvbmNhdF9mbXR0eShmbXR0eTFbMF0sIGZtdHR5MildKTtcbiAgICAgIGNhc2UgMTEgOiBcbiAgICAgICAgICByZXR1cm4gLyogVGhldGFfdHkgKi9CbG9jay5fXygxMSwgW2NvbmNhdF9mbXR0eShmbXR0eTFbMF0sIGZtdHR5MildKTtcbiAgICAgIGNhc2UgMTIgOiBcbiAgICAgICAgICByZXR1cm4gLyogQW55X3R5ICovQmxvY2suX18oMTIsIFtjb25jYXRfZm10dHkoZm10dHkxWzBdLCBmbXR0eTIpXSk7XG4gICAgICBjYXNlIDEzIDogXG4gICAgICAgICAgcmV0dXJuIC8qIFJlYWRlcl90eSAqL0Jsb2NrLl9fKDEzLCBbY29uY2F0X2ZtdHR5KGZtdHR5MVswXSwgZm10dHkyKV0pO1xuICAgICAgY2FzZSAxNCA6IFxuICAgICAgICAgIHJldHVybiAvKiBJZ25vcmVkX3JlYWRlcl90eSAqL0Jsb2NrLl9fKDE0LCBbY29uY2F0X2ZtdHR5KGZtdHR5MVswXSwgZm10dHkyKV0pO1xuICAgICAgXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbmNhdF9mbXQoZm10MSwgZm10Mikge1xuICBpZiAodHlwZW9mIGZtdDEgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZm10MjtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGZtdDEudGFnIHwgMCkge1xuICAgICAgY2FzZSAwIDogXG4gICAgICAgICAgcmV0dXJuIC8qIENoYXIgKi9CbG9jay5fXygwLCBbY29uY2F0X2ZtdChmbXQxWzBdLCBmbXQyKV0pO1xuICAgICAgY2FzZSAxIDogXG4gICAgICAgICAgcmV0dXJuIC8qIENhbWxfY2hhciAqL0Jsb2NrLl9fKDEsIFtjb25jYXRfZm10KGZtdDFbMF0sIGZtdDIpXSk7XG4gICAgICBjYXNlIDIgOiBcbiAgICAgICAgICByZXR1cm4gLyogU3RyaW5nICovQmxvY2suX18oMiwgW1xuICAgICAgICAgICAgICAgICAgICBmbXQxWzBdLFxuICAgICAgICAgICAgICAgICAgICBjb25jYXRfZm10KGZtdDFbMV0sIGZtdDIpXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6IFxuICAgICAgICAgIHJldHVybiAvKiBDYW1sX3N0cmluZyAqL0Jsb2NrLl9fKDMsIFtcbiAgICAgICAgICAgICAgICAgICAgZm10MVswXSxcbiAgICAgICAgICAgICAgICAgICAgY29uY2F0X2ZtdChmbXQxWzFdLCBmbXQyKVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOiBcbiAgICAgICAgICByZXR1cm4gLyogSW50ICovQmxvY2suX18oNCwgW1xuICAgICAgICAgICAgICAgICAgICBmbXQxWzBdLFxuICAgICAgICAgICAgICAgICAgICBmbXQxWzFdLFxuICAgICAgICAgICAgICAgICAgICBmbXQxWzJdLFxuICAgICAgICAgICAgICAgICAgICBjb25jYXRfZm10KGZtdDFbM10sIGZtdDIpXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNSA6IFxuICAgICAgICAgIHJldHVybiAvKiBJbnQzMiAqL0Jsb2NrLl9fKDUsIFtcbiAgICAgICAgICAgICAgICAgICAgZm10MVswXSxcbiAgICAgICAgICAgICAgICAgICAgZm10MVsxXSxcbiAgICAgICAgICAgICAgICAgICAgZm10MVsyXSxcbiAgICAgICAgICAgICAgICAgICAgY29uY2F0X2ZtdChmbXQxWzNdLCBmbXQyKVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDYgOiBcbiAgICAgICAgICByZXR1cm4gLyogTmF0aXZlaW50ICovQmxvY2suX18oNiwgW1xuICAgICAgICAgICAgICAgICAgICBmbXQxWzBdLFxuICAgICAgICAgICAgICAgICAgICBmbXQxWzFdLFxuICAgICAgICAgICAgICAgICAgICBmbXQxWzJdLFxuICAgICAgICAgICAgICAgICAgICBjb25jYXRfZm10KGZtdDFbM10sIGZtdDIpXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNyA6IFxuICAgICAgICAgIHJldHVybiAvKiBJbnQ2NCAqL0Jsb2NrLl9fKDcsIFtcbiAgICAgICAgICAgICAgICAgICAgZm10MVswXSxcbiAgICAgICAgICAgICAgICAgICAgZm10MVsxXSxcbiAgICAgICAgICAgICAgICAgICAgZm10MVsyXSxcbiAgICAgICAgICAgICAgICAgICAgY29uY2F0X2ZtdChmbXQxWzNdLCBmbXQyKVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDggOiBcbiAgICAgICAgICByZXR1cm4gLyogRmxvYXQgKi9CbG9jay5fXyg4LCBbXG4gICAgICAgICAgICAgICAgICAgIGZtdDFbMF0sXG4gICAgICAgICAgICAgICAgICAgIGZtdDFbMV0sXG4gICAgICAgICAgICAgICAgICAgIGZtdDFbMl0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmNhdF9mbXQoZm10MVszXSwgZm10MilcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA5IDogXG4gICAgICAgICAgcmV0dXJuIC8qIEJvb2wgKi9CbG9jay5fXyg5LCBbY29uY2F0X2ZtdChmbXQxWzBdLCBmbXQyKV0pO1xuICAgICAgY2FzZSAxMCA6IFxuICAgICAgICAgIHJldHVybiAvKiBGbHVzaCAqL0Jsb2NrLl9fKDEwLCBbY29uY2F0X2ZtdChmbXQxWzBdLCBmbXQyKV0pO1xuICAgICAgY2FzZSAxMSA6IFxuICAgICAgICAgIHJldHVybiAvKiBTdHJpbmdfbGl0ZXJhbCAqL0Jsb2NrLl9fKDExLCBbXG4gICAgICAgICAgICAgICAgICAgIGZtdDFbMF0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmNhdF9mbXQoZm10MVsxXSwgZm10MilcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAxMiA6IFxuICAgICAgICAgIHJldHVybiAvKiBDaGFyX2xpdGVyYWwgKi9CbG9jay5fXygxMiwgW1xuICAgICAgICAgICAgICAgICAgICBmbXQxWzBdLFxuICAgICAgICAgICAgICAgICAgICBjb25jYXRfZm10KGZtdDFbMV0sIGZtdDIpXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMTMgOiBcbiAgICAgICAgICByZXR1cm4gLyogRm9ybWF0X2FyZyAqL0Jsb2NrLl9fKDEzLCBbXG4gICAgICAgICAgICAgICAgICAgIGZtdDFbMF0sXG4gICAgICAgICAgICAgICAgICAgIGZtdDFbMV0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmNhdF9mbXQoZm10MVsyXSwgZm10MilcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAxNCA6IFxuICAgICAgICAgIHJldHVybiAvKiBGb3JtYXRfc3Vic3QgKi9CbG9jay5fXygxNCwgW1xuICAgICAgICAgICAgICAgICAgICBmbXQxWzBdLFxuICAgICAgICAgICAgICAgICAgICBmbXQxWzFdLFxuICAgICAgICAgICAgICAgICAgICBjb25jYXRfZm10KGZtdDFbMl0sIGZtdDIpXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMTUgOiBcbiAgICAgICAgICByZXR1cm4gLyogQWxwaGEgKi9CbG9jay5fXygxNSwgW2NvbmNhdF9mbXQoZm10MVswXSwgZm10MildKTtcbiAgICAgIGNhc2UgMTYgOiBcbiAgICAgICAgICByZXR1cm4gLyogVGhldGEgKi9CbG9jay5fXygxNiwgW2NvbmNhdF9mbXQoZm10MVswXSwgZm10MildKTtcbiAgICAgIGNhc2UgMTcgOiBcbiAgICAgICAgICByZXR1cm4gLyogRm9ybWF0dGluZ19saXQgKi9CbG9jay5fXygxNywgW1xuICAgICAgICAgICAgICAgICAgICBmbXQxWzBdLFxuICAgICAgICAgICAgICAgICAgICBjb25jYXRfZm10KGZtdDFbMV0sIGZtdDIpXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMTggOiBcbiAgICAgICAgICByZXR1cm4gLyogRm9ybWF0dGluZ19nZW4gKi9CbG9jay5fXygxOCwgW1xuICAgICAgICAgICAgICAgICAgICBmbXQxWzBdLFxuICAgICAgICAgICAgICAgICAgICBjb25jYXRfZm10KGZtdDFbMV0sIGZtdDIpXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMTkgOiBcbiAgICAgICAgICByZXR1cm4gLyogUmVhZGVyICovQmxvY2suX18oMTksIFtjb25jYXRfZm10KGZtdDFbMF0sIGZtdDIpXSk7XG4gICAgICBjYXNlIDIwIDogXG4gICAgICAgICAgcmV0dXJuIC8qIFNjYW5fY2hhcl9zZXQgKi9CbG9jay5fXygyMCwgW1xuICAgICAgICAgICAgICAgICAgICBmbXQxWzBdLFxuICAgICAgICAgICAgICAgICAgICBmbXQxWzFdLFxuICAgICAgICAgICAgICAgICAgICBjb25jYXRfZm10KGZtdDFbMl0sIGZtdDIpXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMjEgOiBcbiAgICAgICAgICByZXR1cm4gLyogU2Nhbl9nZXRfY291bnRlciAqL0Jsb2NrLl9fKDIxLCBbXG4gICAgICAgICAgICAgICAgICAgIGZtdDFbMF0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmNhdF9mbXQoZm10MVsxXSwgZm10MilcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyMiA6IFxuICAgICAgICAgIHJldHVybiAvKiBTY2FuX25leHRfY2hhciAqL0Jsb2NrLl9fKDIyLCBbY29uY2F0X2ZtdChmbXQxWzBdLCBmbXQyKV0pO1xuICAgICAgY2FzZSAyMyA6IFxuICAgICAgICAgIHJldHVybiAvKiBJZ25vcmVkX3BhcmFtICovQmxvY2suX18oMjMsIFtcbiAgICAgICAgICAgICAgICAgICAgZm10MVswXSxcbiAgICAgICAgICAgICAgICAgICAgY29uY2F0X2ZtdChmbXQxWzFdLCBmbXQyKVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDI0IDogXG4gICAgICAgICAgcmV0dXJuIC8qIEN1c3RvbSAqL0Jsb2NrLl9fKDI0LCBbXG4gICAgICAgICAgICAgICAgICAgIGZtdDFbMF0sXG4gICAgICAgICAgICAgICAgICAgIGZtdDFbMV0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmNhdF9mbXQoZm10MVsyXSwgZm10MilcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNvbmNhdF9mbXR0eSAsXG4gIGVyYXNlX3JlbCAgICAsXG4gIGNvbmNhdF9mbXQgICAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgQ3VycnkgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2lvICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vY2FtbF9pby5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vYmogICAgICAgICAgICAgICAgIGZyb20gXCIuL2NhbWxfb2JqLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX3N5cyAgICAgICAgICAgICAgICAgZnJvbSBcIi4vY2FtbF9zeXMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfZm9ybWF0ICAgICAgICAgICAgICBmcm9tIFwiLi9jYW1sX2Zvcm1hdC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9zdHJpbmcgICAgICAgICAgICAgIGZyb20gXCIuL2NhbWxfc3RyaW5nLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgICAgICAgICAgZnJvbSBcIi4vY2FtbF9leGNlcHRpb25zLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX21pc3NpbmdfcG9seWZpbGwgICAgZnJvbSBcIi4vY2FtbF9taXNzaW5nX3BvbHlmaWxsLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucyAgZnJvbSBcIi4vY2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxpbnRlcm5hbEZvcm1hdEJhc2ljcyBmcm9tIFwiLi9jYW1saW50ZXJuYWxGb3JtYXRCYXNpY3MuanNcIjtcblxuZnVuY3Rpb24gZmFpbHdpdGgocykge1xuICB0aHJvdyBbXG4gICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmZhaWx1cmUsXG4gICAgICAgIHNcbiAgICAgIF07XG59XG5cbmZ1bmN0aW9uIGludmFsaWRfYXJnKHMpIHtcbiAgdGhyb3cgW1xuICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICBzXG4gICAgICBdO1xufVxuXG52YXIgRXhpdCA9IENhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJQZXJ2YXNpdmVzLkV4aXRcIik7XG5cbmZ1bmN0aW9uIG1pbih4LCB5KSB7XG4gIGlmIChDYW1sX29iai5jYW1sX2xlc3NlcXVhbCh4LCB5KSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIG1heCh4LCB5KSB7XG4gIGlmIChDYW1sX29iai5jYW1sX2dyZWF0ZXJlcXVhbCh4LCB5KSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGFicyh4KSB7XG4gIGlmICh4ID49IDApIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLXggfCAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxub3QoeCkge1xuICByZXR1cm4geCBeIC0xO1xufVxuXG52YXIgbWluX2ludCA9IC0yMTQ3NDgzNjQ4O1xuXG5mdW5jdGlvbiAkY2FyZXQoYSwgYikge1xuICByZXR1cm4gYSArIGI7XG59XG5cbmZ1bmN0aW9uIGNoYXJfb2ZfaW50KG4pIHtcbiAgaWYgKG4gPCAwIHx8IG4gPiAyNTUpIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcImNoYXJfb2ZfaW50XCJcbiAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdfb2ZfYm9vbChiKSB7XG4gIGlmIChiKSB7XG4gICAgcmV0dXJuIFwidHJ1ZVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcImZhbHNlXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYm9vbF9vZl9zdHJpbmcocGFyYW0pIHtcbiAgc3dpdGNoIChwYXJhbSkge1xuICAgIGNhc2UgXCJmYWxzZVwiIDogXG4gICAgICAgIHJldHVybiAvKiBmYWxzZSAqLzA7XG4gICAgY2FzZSBcInRydWVcIiA6IFxuICAgICAgICByZXR1cm4gLyogdHJ1ZSAqLzE7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICBcImJvb2xfb2Zfc3RyaW5nXCJcbiAgICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ19vZl9pbnQocGFyYW0pIHtcbiAgcmV0dXJuIFwiXCIgKyBwYXJhbTtcbn1cblxuZnVuY3Rpb24gdmFsaWRfZmxvYXRfbGV4ZW0ocykge1xuICB2YXIgbCA9IHMubGVuZ3RoO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA+PSBsKSB7XG4gICAgICByZXR1cm4gJGNhcmV0KHMsIFwiLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1hdGNoID0gQ2FtbF9zdHJpbmcuZ2V0KHMsIGkpO1xuICAgICAgaWYgKG1hdGNoID49IDQ4KSB7XG4gICAgICAgIGlmIChtYXRjaCA+PSA1OCkge1xuICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtYXRjaCAhPT0gNDUpIHtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ19vZl9mbG9hdChmKSB7XG4gIHJldHVybiB2YWxpZF9mbG9hdF9sZXhlbShDYW1sX2Zvcm1hdC5jYW1sX2Zvcm1hdF9mbG9hdChcIiUuMTJnXCIsIGYpKTtcbn1cblxuZnVuY3Rpb24gJGF0KGwxLCBsMikge1xuICBpZiAobDEpIHtcbiAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICBsMVswXSxcbiAgICAgICAgICAgICRhdChsMVsxXSwgbDIpXG4gICAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbDI7XG4gIH1cbn1cblxudmFyIHN0ZGluID0gQ2FtbF9pby5zdGRpbjtcblxudmFyIHN0ZG91dCA9IENhbWxfaW8uc3Rkb3V0O1xuXG52YXIgc3RkZXJyID0gQ2FtbF9pby5zdGRlcnI7XG5cbmZ1bmN0aW9uIG9wZW5fb3V0X2dlbihfLCBfJDEsIF8kMikge1xuICByZXR1cm4gQ2FtbF9pby5jYW1sX21sX29wZW5fZGVzY3JpcHRvcl9vdXQoQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfc3lzX29wZW4gbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIikpO1xufVxuXG5mdW5jdGlvbiBvcGVuX291dChuYW1lKSB7XG4gIHJldHVybiBvcGVuX291dF9nZW4oLyogOjogKi9bXG4gICAgICAgICAgICAgIC8qIE9wZW5fd3Jvbmx5ICovMSxcbiAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgLyogT3Blbl9jcmVhdCAqLzMsXG4gICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAvKiBPcGVuX3RydW5jICovNCxcbiAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAvKiBPcGVuX3RleHQgKi83LFxuICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sIDQzOCwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5fb3V0X2JpbihuYW1lKSB7XG4gIHJldHVybiBvcGVuX291dF9nZW4oLyogOjogKi9bXG4gICAgICAgICAgICAgIC8qIE9wZW5fd3Jvbmx5ICovMSxcbiAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgLyogT3Blbl9jcmVhdCAqLzMsXG4gICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAvKiBPcGVuX3RydW5jICovNCxcbiAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAvKiBPcGVuX2JpbmFyeSAqLzYsXG4gICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSwgNDM4LCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZmx1c2hfYWxsKCkge1xuICB2YXIgX3BhcmFtID0gQ2FtbF9pby5jYW1sX21sX291dF9jaGFubmVsc19saXN0KC8qICgpICovMCk7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICB0cnkge1xuICAgICAgICBDYW1sX2lvLmNhbWxfbWxfZmx1c2gocGFyYW1bMF0pO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGV4bil7XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgX3BhcmFtID0gcGFyYW1bMV07XG4gICAgICBjb250aW51ZSA7XG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC8qICgpICovMDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG91dHB1dF9ieXRlcyhvYywgcykge1xuICByZXR1cm4gQ2FtbF9pby5jYW1sX21sX291dHB1dChvYywgcywgMCwgcy5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBvdXRwdXRfc3RyaW5nKG9jLCBzKSB7XG4gIHJldHVybiBDYW1sX2lvLmNhbWxfbWxfb3V0cHV0KG9jLCBzLCAwLCBzLmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIG91dHB1dChvYywgcywgb2ZzLCBsZW4pIHtcbiAgaWYgKG9mcyA8IDAgfHwgbGVuIDwgMCB8fCBvZnMgPiAocy5sZW5ndGggLSBsZW4gfCAwKSkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwib3V0cHV0XCJcbiAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQ2FtbF9pby5jYW1sX21sX291dHB1dChvYywgcywgb2ZzLCBsZW4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG91dHB1dF9zdWJzdHJpbmcob2MsIHMsIG9mcywgbGVuKSB7XG4gIGlmIChvZnMgPCAwIHx8IGxlbiA8IDAgfHwgb2ZzID4gKHMubGVuZ3RoIC0gbGVuIHwgMCkpIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcIm91dHB1dF9zdWJzdHJpbmdcIlxuICAgICAgICBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBDYW1sX2lvLmNhbWxfbWxfb3V0cHV0KG9jLCBzLCBvZnMsIGxlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3V0cHV0X3ZhbHVlKF8sIF8kMSkge1xuICByZXR1cm4gQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfb3V0cHV0X3ZhbHVlIG5vdCBpbXBsZW1lbnRlZCBieSBidWNrbGVzY3JpcHQgeWV0XFxuXCIpO1xufVxuXG5mdW5jdGlvbiBjbG9zZV9vdXQob2MpIHtcbiAgQ2FtbF9pby5jYW1sX21sX2ZsdXNoKG9jKTtcbiAgcmV0dXJuIENhbWxfbWlzc2luZ19wb2x5ZmlsbC5ub3RfaW1wbGVtZW50ZWQoXCJjYW1sX21sX2Nsb3NlX2NoYW5uZWwgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbmZ1bmN0aW9uIGNsb3NlX291dF9ub2VycihvYykge1xuICB0cnkge1xuICAgIENhbWxfaW8uY2FtbF9tbF9mbHVzaChvYyk7XG4gIH1cbiAgY2F0Y2ggKGV4bil7XG4gICAgXG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfbWxfY2xvc2VfY2hhbm5lbCBub3QgaW1wbGVtZW50ZWQgYnkgYnVja2xlc2NyaXB0IHlldFxcblwiKTtcbiAgfVxuICBjYXRjaCAoZXhuJDEpe1xuICAgIHJldHVybiAvKiAoKSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3Blbl9pbl9nZW4oXywgXyQxLCBfJDIpIHtcbiAgcmV0dXJuIENhbWxfaW8uY2FtbF9tbF9vcGVuX2Rlc2NyaXB0b3JfaW4oQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfc3lzX29wZW4gbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIikpO1xufVxuXG5mdW5jdGlvbiBvcGVuX2luKG5hbWUpIHtcbiAgcmV0dXJuIG9wZW5faW5fZ2VuKC8qIDo6ICovW1xuICAgICAgICAgICAgICAvKiBPcGVuX3Jkb25seSAqLzAsXG4gICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgIC8qIE9wZW5fdGV4dCAqLzcsXG4gICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sIDAsIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBvcGVuX2luX2JpbihuYW1lKSB7XG4gIHJldHVybiBvcGVuX2luX2dlbigvKiA6OiAqL1tcbiAgICAgICAgICAgICAgLyogT3Blbl9yZG9ubHkgKi8wLFxuICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAvKiBPcGVuX2JpbmFyeSAqLzYsXG4gICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sIDAsIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBpbnB1dChfLCBzLCBvZnMsIGxlbikge1xuICBpZiAob2ZzIDwgMCB8fCBsZW4gPCAwIHx8IG9mcyA+IChzLmxlbmd0aCAtIGxlbiB8IDApKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJpbnB1dFwiXG4gICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIENhbWxfbWlzc2luZ19wb2x5ZmlsbC5ub3RfaW1wbGVtZW50ZWQoXCJjYW1sX21sX2lucHV0IG5vdCBpbXBsZW1lbnRlZCBieSBidWNrbGVzY3JpcHQgeWV0XFxuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc2FmZV9yZWFsbHlfaW5wdXQoXywgXyQxLCBfb2ZzLCBfbGVuKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbGVuID0gX2xlbjtcbiAgICB2YXIgb2ZzID0gX29mcztcbiAgICBpZiAobGVuIDw9IDApIHtcbiAgICAgIHJldHVybiAvKiAoKSAqLzA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByID0gQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfbWxfaW5wdXQgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG4gICAgICBpZiAocikge1xuICAgICAgICBfbGVuID0gbGVuIC0gciB8IDA7XG4gICAgICAgIF9vZnMgPSBvZnMgKyByIHwgMDtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmVuZF9vZl9maWxlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVhbGx5X2lucHV0KGljLCBzLCBvZnMsIGxlbikge1xuICBpZiAob2ZzIDwgMCB8fCBsZW4gPCAwIHx8IG9mcyA+IChzLmxlbmd0aCAtIGxlbiB8IDApKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJyZWFsbHlfaW5wdXRcIlxuICAgICAgICBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB1bnNhZmVfcmVhbGx5X2lucHV0KGljLCBzLCBvZnMsIGxlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhbGx5X2lucHV0X3N0cmluZyhpYywgbGVuKSB7XG4gIHZhciBzID0gQ2FtbF9zdHJpbmcuY2FtbF9jcmVhdGVfc3RyaW5nKGxlbik7XG4gIHJlYWxseV9pbnB1dChpYywgcywgMCwgbGVuKTtcbiAgcmV0dXJuIENhbWxfc3RyaW5nLmJ5dGVzX3RvX3N0cmluZyhzKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRfbGluZShjaGFuKSB7XG4gIHZhciBidWlsZF9yZXN1bHQgPSBmdW5jdGlvbiAoYnVmLCBfcG9zLCBfcGFyYW0pIHtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgICB2YXIgcG9zID0gX3BvcztcbiAgICAgIGlmIChwYXJhbSkge1xuICAgICAgICB2YXIgaGQgPSBwYXJhbVswXTtcbiAgICAgICAgdmFyIGxlbiA9IGhkLmxlbmd0aDtcbiAgICAgICAgQ2FtbF9zdHJpbmcuY2FtbF9ibGl0X2J5dGVzKGhkLCAwLCBidWYsIHBvcyAtIGxlbiB8IDAsIGxlbik7XG4gICAgICAgIF9wYXJhbSA9IHBhcmFtWzFdO1xuICAgICAgICBfcG9zID0gcG9zIC0gbGVuIHwgMDtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgdmFyIHNjYW4gPSBmdW5jdGlvbiAoX2FjY3UsIF9sZW4pIHtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgbGVuID0gX2xlbjtcbiAgICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgICB2YXIgbiA9IENhbWxfbWlzc2luZ19wb2x5ZmlsbC5ub3RfaW1wbGVtZW50ZWQoXCJjYW1sX21sX2lucHV0X3NjYW5fbGluZSBub3QgaW1wbGVtZW50ZWQgYnkgYnVja2xlc2NyaXB0IHlldFxcblwiKTtcbiAgICAgIGlmIChuKSB7XG4gICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgIHZhciByZXMgPSBDYW1sX3N0cmluZy5jYW1sX2NyZWF0ZV9zdHJpbmcobiAtIDEgfCAwKTtcbiAgICAgICAgICBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tbF9pbnB1dCBub3QgaW1wbGVtZW50ZWQgYnkgYnVja2xlc2NyaXB0IHlldFxcblwiKTtcbiAgICAgICAgICBDYW1sX2lvLmNhbWxfbWxfaW5wdXRfY2hhcihjaGFuKTtcbiAgICAgICAgICBpZiAoYWNjdSkge1xuICAgICAgICAgICAgdmFyIGxlbiQxID0gKGxlbiArIG4gfCAwKSAtIDEgfCAwO1xuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkX3Jlc3VsdChDYW1sX3N0cmluZy5jYW1sX2NyZWF0ZV9zdHJpbmcobGVuJDEpLCBsZW4kMSwgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2N1XG4gICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBiZWcgPSBDYW1sX3N0cmluZy5jYW1sX2NyZWF0ZV9zdHJpbmcoLW4gfCAwKTtcbiAgICAgICAgICBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tbF9pbnB1dCBub3QgaW1wbGVtZW50ZWQgYnkgYnVja2xlc2NyaXB0IHlldFxcblwiKTtcbiAgICAgICAgICBfbGVuID0gbGVuIC0gbiB8IDA7XG4gICAgICAgICAgX2FjY3UgPSAvKiA6OiAqL1tcbiAgICAgICAgICAgIGJlZyxcbiAgICAgICAgICAgIGFjY3VcbiAgICAgICAgICBdO1xuICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhY2N1KSB7XG4gICAgICAgIHJldHVybiBidWlsZF9yZXN1bHQoQ2FtbF9zdHJpbmcuY2FtbF9jcmVhdGVfc3RyaW5nKGxlbiksIGxlbiwgYWNjdSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5lbmRfb2ZfZmlsZTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICByZXR1cm4gQ2FtbF9zdHJpbmcuYnl0ZXNfdG9fc3RyaW5nKHNjYW4oLyogW10gKi8wLCAwKSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlX2luX25vZXJyKCkge1xuICB0cnkge1xuICAgIHJldHVybiBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tbF9jbG9zZV9jaGFubmVsIG5vdCBpbXBsZW1lbnRlZCBieSBidWNrbGVzY3JpcHQgeWV0XFxuXCIpO1xuICB9XG4gIGNhdGNoIChleG4pe1xuICAgIHJldHVybiAvKiAoKSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRfY2hhcihjKSB7XG4gIHJldHVybiBDYW1sX2lvLmNhbWxfbWxfb3V0cHV0X2NoYXIoc3Rkb3V0LCBjKTtcbn1cblxuZnVuY3Rpb24gcHJpbnRfc3RyaW5nKHMpIHtcbiAgcmV0dXJuIG91dHB1dF9zdHJpbmcoc3Rkb3V0LCBzKTtcbn1cblxuZnVuY3Rpb24gcHJpbnRfYnl0ZXMocykge1xuICByZXR1cm4gb3V0cHV0X2J5dGVzKHN0ZG91dCwgcyk7XG59XG5cbmZ1bmN0aW9uIHByaW50X2ludChpKSB7XG4gIHJldHVybiBvdXRwdXRfc3RyaW5nKHN0ZG91dCwgXCJcIiArIGkpO1xufVxuXG5mdW5jdGlvbiBwcmludF9mbG9hdChmKSB7XG4gIHJldHVybiBvdXRwdXRfc3RyaW5nKHN0ZG91dCwgdmFsaWRfZmxvYXRfbGV4ZW0oQ2FtbF9mb3JtYXQuY2FtbF9mb3JtYXRfZmxvYXQoXCIlLjEyZ1wiLCBmKSkpO1xufVxuXG5mdW5jdGlvbiBwcmludF9lbmRsaW5lKHBhcmFtKSB7XG4gIGNvbnNvbGUubG9nKHBhcmFtKTtcbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIHByaW50X25ld2xpbmUoKSB7XG4gIENhbWxfaW8uY2FtbF9tbF9vdXRwdXRfY2hhcihzdGRvdXQsIC8qIFwiXFxuXCIgKi8xMCk7XG4gIHJldHVybiBDYW1sX2lvLmNhbWxfbWxfZmx1c2goc3Rkb3V0KTtcbn1cblxuZnVuY3Rpb24gcHJlcnJfY2hhcihjKSB7XG4gIHJldHVybiBDYW1sX2lvLmNhbWxfbWxfb3V0cHV0X2NoYXIoc3RkZXJyLCBjKTtcbn1cblxuZnVuY3Rpb24gcHJlcnJfc3RyaW5nKHMpIHtcbiAgcmV0dXJuIG91dHB1dF9zdHJpbmcoc3RkZXJyLCBzKTtcbn1cblxuZnVuY3Rpb24gcHJlcnJfYnl0ZXMocykge1xuICByZXR1cm4gb3V0cHV0X2J5dGVzKHN0ZGVyciwgcyk7XG59XG5cbmZ1bmN0aW9uIHByZXJyX2ludChpKSB7XG4gIHJldHVybiBvdXRwdXRfc3RyaW5nKHN0ZGVyciwgXCJcIiArIGkpO1xufVxuXG5mdW5jdGlvbiBwcmVycl9mbG9hdChmKSB7XG4gIHJldHVybiBvdXRwdXRfc3RyaW5nKHN0ZGVyciwgdmFsaWRfZmxvYXRfbGV4ZW0oQ2FtbF9mb3JtYXQuY2FtbF9mb3JtYXRfZmxvYXQoXCIlLjEyZ1wiLCBmKSkpO1xufVxuXG5mdW5jdGlvbiBwcmVycl9lbmRsaW5lKHBhcmFtKSB7XG4gIGNvbnNvbGUuZXJyb3IocGFyYW0pO1xuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gcHJlcnJfbmV3bGluZSgpIHtcbiAgQ2FtbF9pby5jYW1sX21sX291dHB1dF9jaGFyKHN0ZGVyciwgLyogXCJcXG5cIiAqLzEwKTtcbiAgcmV0dXJuIENhbWxfaW8uY2FtbF9tbF9mbHVzaChzdGRlcnIpO1xufVxuXG5mdW5jdGlvbiByZWFkX2xpbmUoKSB7XG4gIENhbWxfaW8uY2FtbF9tbF9mbHVzaChzdGRvdXQpO1xuICByZXR1cm4gaW5wdXRfbGluZShzdGRpbik7XG59XG5cbmZ1bmN0aW9uIHJlYWRfaW50KCkge1xuICByZXR1cm4gQ2FtbF9mb3JtYXQuY2FtbF9pbnRfb2Zfc3RyaW5nKChDYW1sX2lvLmNhbWxfbWxfZmx1c2goc3Rkb3V0KSwgaW5wdXRfbGluZShzdGRpbikpKTtcbn1cblxuZnVuY3Rpb24gcmVhZF9mbG9hdCgpIHtcbiAgcmV0dXJuIENhbWxfZm9ybWF0LmNhbWxfZmxvYXRfb2Zfc3RyaW5nKChDYW1sX2lvLmNhbWxfbWxfZmx1c2goc3Rkb3V0KSwgaW5wdXRfbGluZShzdGRpbikpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nX29mX2Zvcm1hdChwYXJhbSkge1xuICByZXR1cm4gcGFyYW1bMV07XG59XG5cbmZ1bmN0aW9uICRjYXJldCRjYXJldChwYXJhbSwgcGFyYW0kMSkge1xuICByZXR1cm4gLyogRm9ybWF0ICovW1xuICAgICAgICAgIENhbWxpbnRlcm5hbEZvcm1hdEJhc2ljcy5jb25jYXRfZm10KHBhcmFtWzBdLCBwYXJhbSQxWzBdKSxcbiAgICAgICAgICAkY2FyZXQocGFyYW1bMV0sICRjYXJldChcIiUsXCIsIHBhcmFtJDFbMV0pKVxuICAgICAgICBdO1xufVxuXG52YXIgZXhpdF9mdW5jdGlvbiA9IFtmbHVzaF9hbGxdO1xuXG5mdW5jdGlvbiBhdF9leGl0KGYpIHtcbiAgdmFyIGcgPSBleGl0X2Z1bmN0aW9uWzBdO1xuICBleGl0X2Z1bmN0aW9uWzBdID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIEN1cnJ5Ll8xKGYsIC8qICgpICovMCk7XG4gICAgICByZXR1cm4gQ3VycnkuXzEoZywgLyogKCkgKi8wKTtcbiAgICB9KTtcbiAgcmV0dXJuIC8qICgpICovMDtcbn1cblxuZnVuY3Rpb24gZG9fYXRfZXhpdCgpIHtcbiAgcmV0dXJuIEN1cnJ5Ll8xKGV4aXRfZnVuY3Rpb25bMF0sIC8qICgpICovMCk7XG59XG5cbmZ1bmN0aW9uIGV4aXQocmV0Y29kZSkge1xuICBkb19hdF9leGl0KC8qICgpICovMCk7XG4gIHJldHVybiBDYW1sX3N5cy5jYW1sX3N5c19leGl0KHJldGNvZGUpO1xufVxuXG52YXIgbWF4X2ludCA9IDIxNDc0ODM2NDc7XG5cbnZhciBpbmZpbml0eSA9IEluZmluaXR5O1xuXG52YXIgbmVnX2luZmluaXR5ID0gLUluZmluaXR5O1xuXG52YXIgbmFuID0gTmFOO1xuXG52YXIgbWF4X2Zsb2F0ID0gTnVtYmVyLk1BWF9WQUxVRTtcblxudmFyIG1pbl9mbG9hdCA9IE51bWJlci5NSU5fVkFMVUU7XG5cbnZhciBlcHNpbG9uX2Zsb2F0ID0gMi4yMjA0NDYwNDkyNTAzMTNlLTE2O1xuXG52YXIgZmx1c2ggPSBDYW1sX2lvLmNhbWxfbWxfZmx1c2g7XG5cbnZhciBvdXRwdXRfY2hhciA9IENhbWxfaW8uY2FtbF9tbF9vdXRwdXRfY2hhcjtcblxudmFyIG91dHB1dF9ieXRlID0gQ2FtbF9pby5jYW1sX21sX291dHB1dF9jaGFyO1xuXG5mdW5jdGlvbiBvdXRwdXRfYmluYXJ5X2ludChfLCBfJDEpIHtcbiAgcmV0dXJuIENhbWxfbWlzc2luZ19wb2x5ZmlsbC5ub3RfaW1wbGVtZW50ZWQoXCJjYW1sX21sX291dHB1dF9pbnQgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbmZ1bmN0aW9uIHNlZWtfb3V0KF8sIF8kMSkge1xuICByZXR1cm4gQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfbWxfc2Vla19vdXQgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbmZ1bmN0aW9uIHBvc19vdXQoKSB7XG4gIHJldHVybiBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tbF9wb3Nfb3V0IG5vdCBpbXBsZW1lbnRlZCBieSBidWNrbGVzY3JpcHQgeWV0XFxuXCIpO1xufVxuXG5mdW5jdGlvbiBvdXRfY2hhbm5lbF9sZW5ndGgoKSB7XG4gIHJldHVybiBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tbF9jaGFubmVsX3NpemUgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbmZ1bmN0aW9uIHNldF9iaW5hcnlfbW9kZV9vdXQoXywgXyQxKSB7XG4gIHJldHVybiBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tbF9zZXRfYmluYXJ5X21vZGUgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbnZhciBpbnB1dF9jaGFyID0gQ2FtbF9pby5jYW1sX21sX2lucHV0X2NoYXI7XG5cbnZhciBpbnB1dF9ieXRlID0gQ2FtbF9pby5jYW1sX21sX2lucHV0X2NoYXI7XG5cbmZ1bmN0aW9uIGlucHV0X2JpbmFyeV9pbnQoKSB7XG4gIHJldHVybiBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tbF9pbnB1dF9pbnQgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbmZ1bmN0aW9uIGlucHV0X3ZhbHVlKCkge1xuICByZXR1cm4gQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfaW5wdXRfdmFsdWUgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbmZ1bmN0aW9uIHNlZWtfaW4oXywgXyQxKSB7XG4gIHJldHVybiBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tbF9zZWVrX2luIG5vdCBpbXBsZW1lbnRlZCBieSBidWNrbGVzY3JpcHQgeWV0XFxuXCIpO1xufVxuXG5mdW5jdGlvbiBwb3NfaW4oKSB7XG4gIHJldHVybiBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tbF9wb3NfaW4gbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbmZ1bmN0aW9uIGluX2NoYW5uZWxfbGVuZ3RoKCkge1xuICByZXR1cm4gQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfbWxfY2hhbm5lbF9zaXplIG5vdCBpbXBsZW1lbnRlZCBieSBidWNrbGVzY3JpcHQgeWV0XFxuXCIpO1xufVxuXG5mdW5jdGlvbiBjbG9zZV9pbigpIHtcbiAgcmV0dXJuIENhbWxfbWlzc2luZ19wb2x5ZmlsbC5ub3RfaW1wbGVtZW50ZWQoXCJjYW1sX21sX2Nsb3NlX2NoYW5uZWwgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbmZ1bmN0aW9uIHNldF9iaW5hcnlfbW9kZV9pbihfLCBfJDEpIHtcbiAgcmV0dXJuIENhbWxfbWlzc2luZ19wb2x5ZmlsbC5ub3RfaW1wbGVtZW50ZWQoXCJjYW1sX21sX3NldF9iaW5hcnlfbW9kZSBub3QgaW1wbGVtZW50ZWQgYnkgYnVja2xlc2NyaXB0IHlldFxcblwiKTtcbn1cblxuZnVuY3Rpb24gTGFyZ2VGaWxlXzAwMChfLCBfJDEpIHtcbiAgcmV0dXJuIENhbWxfbWlzc2luZ19wb2x5ZmlsbC5ub3RfaW1wbGVtZW50ZWQoXCJjYW1sX21sX3NlZWtfb3V0XzY0IG5vdCBpbXBsZW1lbnRlZCBieSBidWNrbGVzY3JpcHQgeWV0XFxuXCIpO1xufVxuXG5mdW5jdGlvbiBMYXJnZUZpbGVfMDAxKCkge1xuICByZXR1cm4gQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfbWxfcG9zX291dF82NCBub3QgaW1wbGVtZW50ZWQgYnkgYnVja2xlc2NyaXB0IHlldFxcblwiKTtcbn1cblxuZnVuY3Rpb24gTGFyZ2VGaWxlXzAwMigpIHtcbiAgcmV0dXJuIENhbWxfbWlzc2luZ19wb2x5ZmlsbC5ub3RfaW1wbGVtZW50ZWQoXCJjYW1sX21sX2NoYW5uZWxfc2l6ZV82NCBub3QgaW1wbGVtZW50ZWQgYnkgYnVja2xlc2NyaXB0IHlldFxcblwiKTtcbn1cblxuZnVuY3Rpb24gTGFyZ2VGaWxlXzAwMyhfLCBfJDEpIHtcbiAgcmV0dXJuIENhbWxfbWlzc2luZ19wb2x5ZmlsbC5ub3RfaW1wbGVtZW50ZWQoXCJjYW1sX21sX3NlZWtfaW5fNjQgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbmZ1bmN0aW9uIExhcmdlRmlsZV8wMDQoKSB7XG4gIHJldHVybiBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tbF9wb3NfaW5fNjQgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbmZ1bmN0aW9uIExhcmdlRmlsZV8wMDUoKSB7XG4gIHJldHVybiBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tbF9jaGFubmVsX3NpemVfNjQgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbnZhciBMYXJnZUZpbGUgPSBbXG4gIExhcmdlRmlsZV8wMDAsXG4gIExhcmdlRmlsZV8wMDEsXG4gIExhcmdlRmlsZV8wMDIsXG4gIExhcmdlRmlsZV8wMDMsXG4gIExhcmdlRmlsZV8wMDQsXG4gIExhcmdlRmlsZV8wMDVcbl07XG5cbmV4cG9ydCB7XG4gIGludmFsaWRfYXJnICAgICAgICAgLFxuICBmYWlsd2l0aCAgICAgICAgICAgICxcbiAgRXhpdCAgICAgICAgICAgICAgICAsXG4gIG1pbiAgICAgICAgICAgICAgICAgLFxuICBtYXggICAgICAgICAgICAgICAgICxcbiAgYWJzICAgICAgICAgICAgICAgICAsXG4gIG1heF9pbnQgICAgICAgICAgICAgLFxuICBtaW5faW50ICAgICAgICAgICAgICxcbiAgbG5vdCAgICAgICAgICAgICAgICAsXG4gIGluZmluaXR5ICAgICAgICAgICAgLFxuICBuZWdfaW5maW5pdHkgICAgICAgICxcbiAgbmFuICAgICAgICAgICAgICAgICAsXG4gIG1heF9mbG9hdCAgICAgICAgICAgLFxuICBtaW5fZmxvYXQgICAgICAgICAgICxcbiAgZXBzaWxvbl9mbG9hdCAgICAgICAsXG4gICRjYXJldCAgICAgICAgICAgICAgLFxuICBjaGFyX29mX2ludCAgICAgICAgICxcbiAgc3RyaW5nX29mX2Jvb2wgICAgICAsXG4gIGJvb2xfb2Zfc3RyaW5nICAgICAgLFxuICBzdHJpbmdfb2ZfaW50ICAgICAgICxcbiAgc3RyaW5nX29mX2Zsb2F0ICAgICAsXG4gICRhdCAgICAgICAgICAgICAgICAgLFxuICBzdGRpbiAgICAgICAgICAgICAgICxcbiAgc3Rkb3V0ICAgICAgICAgICAgICAsXG4gIHN0ZGVyciAgICAgICAgICAgICAgLFxuICBwcmludF9jaGFyICAgICAgICAgICxcbiAgcHJpbnRfc3RyaW5nICAgICAgICAsXG4gIHByaW50X2J5dGVzICAgICAgICAgLFxuICBwcmludF9pbnQgICAgICAgICAgICxcbiAgcHJpbnRfZmxvYXQgICAgICAgICAsXG4gIHByaW50X2VuZGxpbmUgICAgICAgLFxuICBwcmludF9uZXdsaW5lICAgICAgICxcbiAgcHJlcnJfY2hhciAgICAgICAgICAsXG4gIHByZXJyX3N0cmluZyAgICAgICAgLFxuICBwcmVycl9ieXRlcyAgICAgICAgICxcbiAgcHJlcnJfaW50ICAgICAgICAgICAsXG4gIHByZXJyX2Zsb2F0ICAgICAgICAgLFxuICBwcmVycl9lbmRsaW5lICAgICAgICxcbiAgcHJlcnJfbmV3bGluZSAgICAgICAsXG4gIHJlYWRfbGluZSAgICAgICAgICAgLFxuICByZWFkX2ludCAgICAgICAgICAgICxcbiAgcmVhZF9mbG9hdCAgICAgICAgICAsXG4gIG9wZW5fb3V0ICAgICAgICAgICAgLFxuICBvcGVuX291dF9iaW4gICAgICAgICxcbiAgb3Blbl9vdXRfZ2VuICAgICAgICAsXG4gIGZsdXNoICAgICAgICAgICAgICAgLFxuICBmbHVzaF9hbGwgICAgICAgICAgICxcbiAgb3V0cHV0X2NoYXIgICAgICAgICAsXG4gIG91dHB1dF9zdHJpbmcgICAgICAgLFxuICBvdXRwdXRfYnl0ZXMgICAgICAgICxcbiAgb3V0cHV0ICAgICAgICAgICAgICAsXG4gIG91dHB1dF9zdWJzdHJpbmcgICAgLFxuICBvdXRwdXRfYnl0ZSAgICAgICAgICxcbiAgb3V0cHV0X2JpbmFyeV9pbnQgICAsXG4gIG91dHB1dF92YWx1ZSAgICAgICAgLFxuICBzZWVrX291dCAgICAgICAgICAgICxcbiAgcG9zX291dCAgICAgICAgICAgICAsXG4gIG91dF9jaGFubmVsX2xlbmd0aCAgLFxuICBjbG9zZV9vdXQgICAgICAgICAgICxcbiAgY2xvc2Vfb3V0X25vZXJyICAgICAsXG4gIHNldF9iaW5hcnlfbW9kZV9vdXQgLFxuICBvcGVuX2luICAgICAgICAgICAgICxcbiAgb3Blbl9pbl9iaW4gICAgICAgICAsXG4gIG9wZW5faW5fZ2VuICAgICAgICAgLFxuICBpbnB1dF9jaGFyICAgICAgICAgICxcbiAgaW5wdXRfbGluZSAgICAgICAgICAsXG4gIGlucHV0ICAgICAgICAgICAgICAgLFxuICByZWFsbHlfaW5wdXQgICAgICAgICxcbiAgcmVhbGx5X2lucHV0X3N0cmluZyAsXG4gIGlucHV0X2J5dGUgICAgICAgICAgLFxuICBpbnB1dF9iaW5hcnlfaW50ICAgICxcbiAgaW5wdXRfdmFsdWUgICAgICAgICAsXG4gIHNlZWtfaW4gICAgICAgICAgICAgLFxuICBwb3NfaW4gICAgICAgICAgICAgICxcbiAgaW5fY2hhbm5lbF9sZW5ndGggICAsXG4gIGNsb3NlX2luICAgICAgICAgICAgLFxuICBjbG9zZV9pbl9ub2VyciAgICAgICxcbiAgc2V0X2JpbmFyeV9tb2RlX2luICAsXG4gIExhcmdlRmlsZSAgICAgICAgICAgLFxuICBzdHJpbmdfb2ZfZm9ybWF0ICAgICxcbiAgJGNhcmV0JGNhcmV0ICAgICAgICAsXG4gIGV4aXQgICAgICAgICAgICAgICAgLFxuICBhdF9leGl0ICAgICAgICAgICAgICxcbiAgdmFsaWRfZmxvYXRfbGV4ZW0gICAsXG4gIHVuc2FmZV9yZWFsbHlfaW5wdXQgLFxuICBkb19hdF9leGl0ICAgICAgICAgICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBDdXJyeSAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vYmogICAgICAgICAgICAgICAgZnJvbSBcIi4vY2FtbF9vYmouanNcIjtcbmltcG9ydCAqIGFzIFBlcnZhc2l2ZXMgICAgICAgICAgICAgIGZyb20gXCIuL3BlcnZhc2l2ZXMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIGxlbmd0aChsKSB7XG4gIHZhciBfbGVuID0gMDtcbiAgdmFyIF9wYXJhbSA9IGw7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGxlbiA9IF9sZW47XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICBfcGFyYW0gPSBwYXJhbVsxXTtcbiAgICAgIF9sZW4gPSBsZW4gKyAxIHwgMDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbGVuO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaGQocGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuIHBhcmFtWzBdO1xuICB9IGVsc2Uge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5mYWlsdXJlLFxuICAgICAgICAgIFwiaGRcIlxuICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRsKHBhcmFtKSB7XG4gIGlmIChwYXJhbSkge1xuICAgIHJldHVybiBwYXJhbVsxXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuZmFpbHVyZSxcbiAgICAgICAgICBcInRsXCJcbiAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBudGgobCwgbikge1xuICBpZiAobiA8IDApIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcIkxpc3QubnRoXCJcbiAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2wgPSBsO1xuICAgIHZhciBfbiA9IG47XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIG4kMSA9IF9uO1xuICAgICAgdmFyIGwkMSA9IF9sO1xuICAgICAgaWYgKGwkMSkge1xuICAgICAgICBpZiAobiQxKSB7XG4gICAgICAgICAgX24gPSBuJDEgLSAxIHwgMDtcbiAgICAgICAgICBfbCA9IGwkMVsxXTtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGwkMVswXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5mYWlsdXJlLFxuICAgICAgICAgICAgICBcIm50aFwiXG4gICAgICAgICAgICBdO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV2X2FwcGVuZChfbDEsIF9sMikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAobDEpIHtcbiAgICAgIF9sMiA9IC8qIDo6ICovW1xuICAgICAgICBsMVswXSxcbiAgICAgICAgbDJcbiAgICAgIF07XG4gICAgICBfbDEgPSBsMVsxXTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbDI7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXYobCkge1xuICByZXR1cm4gcmV2X2FwcGVuZChsLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKHBhcmFtKSB7XG4gIGlmIChwYXJhbSkge1xuICAgIHJldHVybiBQZXJ2YXNpdmVzLiRhdChwYXJhbVswXSwgZmxhdHRlbihwYXJhbVsxXSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwKGYsIHBhcmFtKSB7XG4gIGlmIChwYXJhbSkge1xuICAgIHZhciByID0gQ3VycnkuXzEoZiwgcGFyYW1bMF0pO1xuICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgICBtYXAoZiwgcGFyYW1bMV0pXG4gICAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcGkoaSwgZiwgcGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgdmFyIHIgPSBDdXJyeS5fMihmLCBpLCBwYXJhbVswXSk7XG4gICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgcixcbiAgICAgICAgICAgIG1hcGkoaSArIDEgfCAwLCBmLCBwYXJhbVsxXSlcbiAgICAgICAgICBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwaSQxKGYsIGwpIHtcbiAgcmV0dXJuIG1hcGkoMCwgZiwgbCk7XG59XG5cbmZ1bmN0aW9uIHJldl9tYXAoZiwgbCkge1xuICB2YXIgX2FjY3UgPSAvKiBbXSAqLzA7XG4gIHZhciBfcGFyYW0gPSBsO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICBfcGFyYW0gPSBwYXJhbVsxXTtcbiAgICAgIF9hY2N1ID0gLyogOjogKi9bXG4gICAgICAgIEN1cnJ5Ll8xKGYsIHBhcmFtWzBdKSxcbiAgICAgICAgYWNjdVxuICAgICAgXTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGl0ZXIoZiwgX3BhcmFtKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICBDdXJyeS5fMShmLCBwYXJhbVswXSk7XG4gICAgICBfcGFyYW0gPSBwYXJhbVsxXTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogKCkgKi8wO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaXRlcmkoZiwgbCkge1xuICB2YXIgX2kgPSAwO1xuICB2YXIgZiQxID0gZjtcbiAgdmFyIF9wYXJhbSA9IGw7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAocGFyYW0pIHtcbiAgICAgIEN1cnJ5Ll8yKGYkMSwgaSwgcGFyYW1bMF0pO1xuICAgICAgX3BhcmFtID0gcGFyYW1bMV07XG4gICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogKCkgKi8wO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9sZF9sZWZ0KGYsIF9hY2N1LCBfbCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwgPSBfbDtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIGlmIChsKSB7XG4gICAgICBfbCA9IGxbMV07XG4gICAgICBfYWNjdSA9IEN1cnJ5Ll8yKGYsIGFjY3UsIGxbMF0pO1xuICAgICAgY29udGludWUgO1xuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9sZF9yaWdodChmLCBsLCBhY2N1KSB7XG4gIGlmIChsKSB7XG4gICAgcmV0dXJuIEN1cnJ5Ll8yKGYsIGxbMF0sIGZvbGRfcmlnaHQoZiwgbFsxXSwgYWNjdSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhY2N1O1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcDIoZiwgbDEsIGwyKSB7XG4gIGlmIChsMSkge1xuICAgIGlmIChsMikge1xuICAgICAgdmFyIHIgPSBDdXJyeS5fMihmLCBsMVswXSwgbDJbMF0pO1xuICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICByLFxuICAgICAgICAgICAgICBtYXAyKGYsIGwxWzFdLCBsMlsxXSlcbiAgICAgICAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICBcIkxpc3QubWFwMlwiXG4gICAgICAgICAgXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobDIpIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcIkxpc3QubWFwMlwiXG4gICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXZfbWFwMihmLCBsMSwgbDIpIHtcbiAgdmFyIF9hY2N1ID0gLyogW10gKi8wO1xuICB2YXIgX2wxID0gbDE7XG4gIHZhciBfbDIgPSBsMjtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiQxID0gX2wyO1xuICAgIHZhciBsMSQxID0gX2wxO1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgaWYgKGwxJDEpIHtcbiAgICAgIGlmIChsMiQxKSB7XG4gICAgICAgIF9sMiA9IGwyJDFbMV07XG4gICAgICAgIF9sMSA9IGwxJDFbMV07XG4gICAgICAgIF9hY2N1ID0gLyogOjogKi9bXG4gICAgICAgICAgQ3VycnkuXzIoZiwgbDEkMVswXSwgbDIkMVswXSksXG4gICAgICAgICAgYWNjdVxuICAgICAgICBdO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgICBcIkxpc3QucmV2X21hcDJcIlxuICAgICAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGwyJDEpIHtcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICBcIkxpc3QucmV2X21hcDJcIlxuICAgICAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaXRlcjIoZiwgX2wxLCBfbDIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKGwxKSB7XG4gICAgICBpZiAobDIpIHtcbiAgICAgICAgQ3VycnkuXzIoZiwgbDFbMF0sIGwyWzBdKTtcbiAgICAgICAgX2wyID0gbDJbMV07XG4gICAgICAgIF9sMSA9IGwxWzFdO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgICBcIkxpc3QuaXRlcjJcIlxuICAgICAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGwyKSB7XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgXCJMaXN0Lml0ZXIyXCJcbiAgICAgICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogKCkgKi8wO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9sZF9sZWZ0MihmLCBfYWNjdSwgX2wxLCBfbDIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICBpZiAobDEpIHtcbiAgICAgIGlmIChsMikge1xuICAgICAgICBfbDIgPSBsMlsxXTtcbiAgICAgICAgX2wxID0gbDFbMV07XG4gICAgICAgIF9hY2N1ID0gQ3VycnkuXzMoZiwgYWNjdSwgbDFbMF0sIGwyWzBdKTtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IFtcbiAgICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgICAgXCJMaXN0LmZvbGRfbGVmdDJcIlxuICAgICAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGwyKSB7XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgXCJMaXN0LmZvbGRfbGVmdDJcIlxuICAgICAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9sZF9yaWdodDIoZiwgbDEsIGwyLCBhY2N1KSB7XG4gIGlmIChsMSkge1xuICAgIGlmIChsMikge1xuICAgICAgcmV0dXJuIEN1cnJ5Ll8zKGYsIGwxWzBdLCBsMlswXSwgZm9sZF9yaWdodDIoZiwgbDFbMV0sIGwyWzFdLCBhY2N1KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICBcIkxpc3QuZm9sZF9yaWdodDJcIlxuICAgICAgICAgIF07XG4gICAgfVxuICB9IGVsc2UgaWYgKGwyKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJMaXN0LmZvbGRfcmlnaHQyXCJcbiAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYWNjdTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JfYWxsKHAsIF9wYXJhbSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIGlmIChwYXJhbSkge1xuICAgICAgaWYgKEN1cnJ5Ll8xKHAsIHBhcmFtWzBdKSkge1xuICAgICAgICBfcGFyYW0gPSBwYXJhbVsxXTtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAvKiBmYWxzZSAqLzA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiB0cnVlICovMTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4aXN0cyhwLCBfcGFyYW0pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICBpZiAocGFyYW0pIHtcbiAgICAgIGlmIChDdXJyeS5fMShwLCBwYXJhbVswXSkpIHtcbiAgICAgICAgcmV0dXJuIC8qIHRydWUgKi8xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3BhcmFtID0gcGFyYW1bMV07XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiBmYWxzZSAqLzA7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JfYWxsMihwLCBfbDEsIF9sMikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAobDEpIHtcbiAgICAgIGlmIChsMikge1xuICAgICAgICBpZiAoQ3VycnkuXzIocCwgbDFbMF0sIGwyWzBdKSkge1xuICAgICAgICAgIF9sMiA9IGwyWzFdO1xuICAgICAgICAgIF9sMSA9IGwxWzFdO1xuICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLyogZmFsc2UgKi8wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICAgIFwiTGlzdC5mb3JfYWxsMlwiXG4gICAgICAgICAgICBdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobDIpIHtcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICBcIkxpc3QuZm9yX2FsbDJcIlxuICAgICAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiB0cnVlICovMTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4aXN0czIocCwgX2wxLCBfbDIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKGwxKSB7XG4gICAgICBpZiAobDIpIHtcbiAgICAgICAgaWYgKEN1cnJ5Ll8yKHAsIGwxWzBdLCBsMlswXSkpIHtcbiAgICAgICAgICByZXR1cm4gLyogdHJ1ZSAqLzE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2wyID0gbDJbMV07XG4gICAgICAgICAgX2wxID0gbDFbMV07XG4gICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICAgIFwiTGlzdC5leGlzdHMyXCJcbiAgICAgICAgICAgIF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsMikge1xuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgIFwiTGlzdC5leGlzdHMyXCJcbiAgICAgICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogZmFsc2UgKi8wO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVtKHgsIF9wYXJhbSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIGlmIChwYXJhbSkge1xuICAgICAgaWYgKENhbWxfb2JqLmNhbWxfY29tcGFyZShwYXJhbVswXSwgeCkpIHtcbiAgICAgICAgX3BhcmFtID0gcGFyYW1bMV07XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLyogdHJ1ZSAqLzE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiBmYWxzZSAqLzA7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBtZW1xKHgsIF9wYXJhbSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIGlmIChwYXJhbSkge1xuICAgICAgaWYgKHBhcmFtWzBdID09PSB4KSB7XG4gICAgICAgIHJldHVybiAvKiB0cnVlICovMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9wYXJhbSA9IHBhcmFtWzFdO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogZmFsc2UgKi8wO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gYXNzb2MoeCwgX3BhcmFtKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBwYXJhbVswXTtcbiAgICAgIGlmIChDYW1sX29iai5jYW1sX2NvbXBhcmUobWF0Y2hbMF0sIHgpKSB7XG4gICAgICAgIF9wYXJhbSA9IHBhcmFtWzFdO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5ub3RfZm91bmQ7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBhc3NxKHgsIF9wYXJhbSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIGlmIChwYXJhbSkge1xuICAgICAgdmFyIG1hdGNoID0gcGFyYW1bMF07XG4gICAgICBpZiAobWF0Y2hbMF0gPT09IHgpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3BhcmFtID0gcGFyYW1bMV07XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IENhbWxfYnVpbHRpbl9leGNlcHRpb25zLm5vdF9mb3VuZDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lbV9hc3NvYyh4LCBfcGFyYW0pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICBpZiAocGFyYW0pIHtcbiAgICAgIGlmIChDYW1sX29iai5jYW1sX2NvbXBhcmUocGFyYW1bMF1bMF0sIHgpKSB7XG4gICAgICAgIF9wYXJhbSA9IHBhcmFtWzFdO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC8qIHRydWUgKi8xO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogZmFsc2UgKi8wO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVtX2Fzc3EoeCwgX3BhcmFtKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICBpZiAocGFyYW1bMF1bMF0gPT09IHgpIHtcbiAgICAgICAgcmV0dXJuIC8qIHRydWUgKi8xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3BhcmFtID0gcGFyYW1bMV07XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiBmYWxzZSAqLzA7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVfYXNzb2MoeCwgcGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgdmFyIGwgPSBwYXJhbVsxXTtcbiAgICB2YXIgcGFpciA9IHBhcmFtWzBdO1xuICAgIGlmIChDYW1sX29iai5jYW1sX2NvbXBhcmUocGFpclswXSwgeCkpIHtcbiAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgICAgcmVtb3ZlX2Fzc29jKHgsIGwpXG4gICAgICAgICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVfYXNzcSh4LCBwYXJhbSkge1xuICBpZiAocGFyYW0pIHtcbiAgICB2YXIgbCA9IHBhcmFtWzFdO1xuICAgIHZhciBwYWlyID0gcGFyYW1bMF07XG4gICAgaWYgKHBhaXJbMF0gPT09IHgpIHtcbiAgICAgIHJldHVybiBsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICAgIHJlbW92ZV9hc3NxKHgsIGwpXG4gICAgICAgICAgICBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmQocCwgX3BhcmFtKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICB2YXIgeCA9IHBhcmFtWzBdO1xuICAgICAgaWYgKEN1cnJ5Ll8xKHAsIHgpKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3BhcmFtID0gcGFyYW1bMV07XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IENhbWxfYnVpbHRpbl9leGNlcHRpb25zLm5vdF9mb3VuZDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRfYWxsKHApIHtcbiAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIHZhciBfYWNjdSA9IC8qIFtdICovMDtcbiAgICAgIHZhciBfcGFyYW0gPSBwYXJhbTtcbiAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgdmFyIHBhcmFtJDEgPSBfcGFyYW07XG4gICAgICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgICAgIGlmIChwYXJhbSQxKSB7XG4gICAgICAgICAgdmFyIGwgPSBwYXJhbSQxWzFdO1xuICAgICAgICAgIHZhciB4ID0gcGFyYW0kMVswXTtcbiAgICAgICAgICBpZiAoQ3VycnkuXzEocCwgeCkpIHtcbiAgICAgICAgICAgIF9wYXJhbSA9IGw7XG4gICAgICAgICAgICBfYWNjdSA9IC8qIDo6ICovW1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICBhY2N1XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9wYXJhbSA9IGw7XG4gICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJldl9hcHBlbmQoYWNjdSwgLyogW10gKi8wKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uKHAsIGwpIHtcbiAgdmFyIF95ZXMgPSAvKiBbXSAqLzA7XG4gIHZhciBfbm8gPSAvKiBbXSAqLzA7XG4gIHZhciBfcGFyYW0gPSBsO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBubyA9IF9ubztcbiAgICB2YXIgeWVzID0gX3llcztcbiAgICBpZiAocGFyYW0pIHtcbiAgICAgIHZhciBsJDEgPSBwYXJhbVsxXTtcbiAgICAgIHZhciB4ID0gcGFyYW1bMF07XG4gICAgICBpZiAoQ3VycnkuXzEocCwgeCkpIHtcbiAgICAgICAgX3BhcmFtID0gbCQxO1xuICAgICAgICBfeWVzID0gLyogOjogKi9bXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5ZXNcbiAgICAgICAgXTtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9wYXJhbSA9IGwkMTtcbiAgICAgICAgX25vID0gLyogOjogKi9bXG4gICAgICAgICAgeCxcbiAgICAgICAgICBub1xuICAgICAgICBdO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgIHJldl9hcHBlbmQoeWVzLCAvKiBbXSAqLzApLFxuICAgICAgICAgICAgICByZXZfYXBwZW5kKG5vLCAvKiBbXSAqLzApXG4gICAgICAgICAgICBdO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc3BsaXQocGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgdmFyIG1hdGNoID0gcGFyYW1bMF07XG4gICAgdmFyIG1hdGNoJDEgPSBzcGxpdChwYXJhbVsxXSk7XG4gICAgcmV0dXJuIC8qIHR1cGxlICovW1xuICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgIG1hdGNoWzBdLFxuICAgICAgICAgICAgICBtYXRjaCQxWzBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgIG1hdGNoWzFdLFxuICAgICAgICAgICAgICBtYXRjaCQxWzFdXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAvKiBbXSAqLzAsXG4gICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmUobDEsIGwyKSB7XG4gIGlmIChsMSkge1xuICAgIGlmIChsMikge1xuICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgICBsMVswXSxcbiAgICAgICAgICAgICAgICBsMlswXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBjb21iaW5lKGwxWzFdLCBsMlsxXSlcbiAgICAgICAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICBcIkxpc3QuY29tYmluZVwiXG4gICAgICAgICAgXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobDIpIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcIkxpc3QuY29tYmluZVwiXG4gICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZShjbXAsIGwxLCBsMikge1xuICBpZiAobDEpIHtcbiAgICBpZiAobDIpIHtcbiAgICAgIHZhciBoMiA9IGwyWzBdO1xuICAgICAgdmFyIGgxID0gbDFbMF07XG4gICAgICBpZiAoQ3VycnkuXzIoY21wLCBoMSwgaDIpIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgIGgxLFxuICAgICAgICAgICAgICAgIG1lcmdlKGNtcCwgbDFbMV0sIGwyKVxuICAgICAgICAgICAgICBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgIGgyLFxuICAgICAgICAgICAgICAgIG1lcmdlKGNtcCwgbDEsIGwyWzFdKVxuICAgICAgICAgICAgICBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbDE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBsMjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaG9wKF9rLCBfbCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwgPSBfbDtcbiAgICB2YXIgayA9IF9rO1xuICAgIGlmIChrKSB7XG4gICAgICBpZiAobCkge1xuICAgICAgICBfbCA9IGxbMV07XG4gICAgICAgIF9rID0gayAtIDEgfCAwO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5hc3NlcnRfZmFpbHVyZSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwibGlzdC5tbFwiLFxuICAgICAgICAgICAgICAgIDIyMyxcbiAgICAgICAgICAgICAgICAxMVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0YWJsZV9zb3J0KGNtcCwgbCkge1xuICB2YXIgc29ydCA9IGZ1bmN0aW9uIChuLCBsKSB7XG4gICAgdmFyIGV4aXQgPSAwO1xuICAgIGlmIChuICE9PSAyKSB7XG4gICAgICBpZiAobiAhPT0gMykge1xuICAgICAgICBleGl0ID0gMTtcbiAgICAgIH0gZWxzZSBpZiAobCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBsWzFdO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB2YXIgbWF0Y2gkMSA9IG1hdGNoWzFdO1xuICAgICAgICAgIGlmIChtYXRjaCQxKSB7XG4gICAgICAgICAgICB2YXIgeDMgPSBtYXRjaCQxWzBdO1xuICAgICAgICAgICAgdmFyIHgyID0gbWF0Y2hbMF07XG4gICAgICAgICAgICB2YXIgeDEgPSBsWzBdO1xuICAgICAgICAgICAgaWYgKEN1cnJ5Ll8yKGNtcCwgeDEsIHgyKSA8PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChDdXJyeS5fMihjbXAsIHgyLCB4MykgPD0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoQ3VycnkuXzIoY21wLCB4MSwgeDMpIDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICB4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB4MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQ3VycnkuXzIoY21wLCB4MSwgeDMpIDw9IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgeDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQ3VycnkuXzIoY21wLCB4MiwgeDMpIDw9IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgeDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICB4MyxcbiAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhpdCA9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsKSB7XG4gICAgICB2YXIgbWF0Y2gkMiA9IGxbMV07XG4gICAgICBpZiAobWF0Y2gkMikge1xuICAgICAgICB2YXIgeDIkMSA9IG1hdGNoJDJbMF07XG4gICAgICAgIHZhciB4MSQxID0gbFswXTtcbiAgICAgICAgaWYgKEN1cnJ5Ll8yKGNtcCwgeDEkMSwgeDIkMSkgPD0gMCkge1xuICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgIHgxJDEsXG4gICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgeDIkMSxcbiAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICB4MiQxLFxuICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgIHgxJDEsXG4gICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4aXQgPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBleGl0ID0gMTtcbiAgICB9XG4gICAgaWYgKGV4aXQgPT09IDEpIHtcbiAgICAgIHZhciBuMSA9IChuID4+IDEpO1xuICAgICAgdmFyIG4yID0gbiAtIG4xIHwgMDtcbiAgICAgIHZhciBsMiA9IGNob3AobjEsIGwpO1xuICAgICAgdmFyIHMxID0gcmV2X3NvcnQobjEsIGwpO1xuICAgICAgdmFyIHMyID0gcmV2X3NvcnQobjIsIGwyKTtcbiAgICAgIHZhciBfbDEgPSBzMTtcbiAgICAgIHZhciBfbDIgPSBzMjtcbiAgICAgIHZhciBfYWNjdSA9IC8qIFtdICovMDtcbiAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICAgICAgdmFyIGwyJDEgPSBfbDI7XG4gICAgICAgIHZhciBsMSA9IF9sMTtcbiAgICAgICAgaWYgKGwxKSB7XG4gICAgICAgICAgaWYgKGwyJDEpIHtcbiAgICAgICAgICAgIHZhciBoMiA9IGwyJDFbMF07XG4gICAgICAgICAgICB2YXIgaDEgPSBsMVswXTtcbiAgICAgICAgICAgIGlmIChDdXJyeS5fMihjbXAsIGgxLCBoMikgPiAwKSB7XG4gICAgICAgICAgICAgIF9hY2N1ID0gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICAgICAgYWNjdVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICBfbDEgPSBsMVsxXTtcbiAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9hY2N1ID0gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgaDIsXG4gICAgICAgICAgICAgICAgYWNjdVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICBfbDIgPSBsMiQxWzFdO1xuICAgICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmV2X2FwcGVuZChsMSwgYWNjdSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXZfYXBwZW5kKGwyJDEsIGFjY3UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBcbiAgfTtcbiAgdmFyIHJldl9zb3J0ID0gZnVuY3Rpb24gKG4sIGwpIHtcbiAgICB2YXIgZXhpdCA9IDA7XG4gICAgaWYgKG4gIT09IDIpIHtcbiAgICAgIGlmIChuICE9PSAzKSB7XG4gICAgICAgIGV4aXQgPSAxO1xuICAgICAgfSBlbHNlIGlmIChsKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGxbMV07XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHZhciBtYXRjaCQxID0gbWF0Y2hbMV07XG4gICAgICAgICAgaWYgKG1hdGNoJDEpIHtcbiAgICAgICAgICAgIHZhciB4MyA9IG1hdGNoJDFbMF07XG4gICAgICAgICAgICB2YXIgeDIgPSBtYXRjaFswXTtcbiAgICAgICAgICAgIHZhciB4MSA9IGxbMF07XG4gICAgICAgICAgICBpZiAoQ3VycnkuXzIoY21wLCB4MSwgeDIpID4gMCkge1xuICAgICAgICAgICAgICBpZiAoQ3VycnkuXzIoY21wLCB4MiwgeDMpID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoQ3VycnkuXzIoY21wLCB4MSwgeDMpID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgeDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChDdXJyeS5fMihjbXAsIHgxLCB4MykgPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEN1cnJ5Ll8yKGNtcCwgeDIsIHgzKSA+IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgeDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICB4MyxcbiAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhpdCA9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsKSB7XG4gICAgICB2YXIgbWF0Y2gkMiA9IGxbMV07XG4gICAgICBpZiAobWF0Y2gkMikge1xuICAgICAgICB2YXIgeDIkMSA9IG1hdGNoJDJbMF07XG4gICAgICAgIHZhciB4MSQxID0gbFswXTtcbiAgICAgICAgaWYgKEN1cnJ5Ll8yKGNtcCwgeDEkMSwgeDIkMSkgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgeDEkMSxcbiAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICB4MiQxLFxuICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgIHgyJDEsXG4gICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgeDEkMSxcbiAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhpdCA9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXQgPSAxO1xuICAgIH1cbiAgICBpZiAoZXhpdCA9PT0gMSkge1xuICAgICAgdmFyIG4xID0gKG4gPj4gMSk7XG4gICAgICB2YXIgbjIgPSBuIC0gbjEgfCAwO1xuICAgICAgdmFyIGwyID0gY2hvcChuMSwgbCk7XG4gICAgICB2YXIgczEgPSBzb3J0KG4xLCBsKTtcbiAgICAgIHZhciBzMiA9IHNvcnQobjIsIGwyKTtcbiAgICAgIHZhciBfbDEgPSBzMTtcbiAgICAgIHZhciBfbDIgPSBzMjtcbiAgICAgIHZhciBfYWNjdSA9IC8qIFtdICovMDtcbiAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICAgICAgdmFyIGwyJDEgPSBfbDI7XG4gICAgICAgIHZhciBsMSA9IF9sMTtcbiAgICAgICAgaWYgKGwxKSB7XG4gICAgICAgICAgaWYgKGwyJDEpIHtcbiAgICAgICAgICAgIHZhciBoMiA9IGwyJDFbMF07XG4gICAgICAgICAgICB2YXIgaDEgPSBsMVswXTtcbiAgICAgICAgICAgIGlmIChDdXJyeS5fMihjbXAsIGgxLCBoMikgPD0gMCkge1xuICAgICAgICAgICAgICBfYWNjdSA9IC8qIDo6ICovW1xuICAgICAgICAgICAgICAgIGgxLFxuICAgICAgICAgICAgICAgIGFjY3VcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgX2wxID0gbDFbMV07XG4gICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfYWNjdSA9IC8qIDo6ICovW1xuICAgICAgICAgICAgICAgIGgyLFxuICAgICAgICAgICAgICAgIGFjY3VcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgX2wyID0gbDIkMVsxXTtcbiAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJldl9hcHBlbmQobDEsIGFjY3UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmV2X2FwcGVuZChsMiQxLCBhY2N1KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgXG4gIH07XG4gIHZhciBsZW4gPSBsZW5ndGgobCk7XG4gIGlmIChsZW4gPCAyKSB7XG4gICAgcmV0dXJuIGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNvcnQobGVuLCBsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0X3VuaXEoY21wLCBsKSB7XG4gIHZhciBzb3J0ID0gZnVuY3Rpb24gKG4sIGwpIHtcbiAgICB2YXIgZXhpdCA9IDA7XG4gICAgaWYgKG4gIT09IDIpIHtcbiAgICAgIGlmIChuICE9PSAzKSB7XG4gICAgICAgIGV4aXQgPSAxO1xuICAgICAgfSBlbHNlIGlmIChsKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGxbMV07XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHZhciBtYXRjaCQxID0gbWF0Y2hbMV07XG4gICAgICAgICAgaWYgKG1hdGNoJDEpIHtcbiAgICAgICAgICAgIHZhciB4MyA9IG1hdGNoJDFbMF07XG4gICAgICAgICAgICB2YXIgeDIgPSBtYXRjaFswXTtcbiAgICAgICAgICAgIHZhciB4MSA9IGxbMF07XG4gICAgICAgICAgICB2YXIgYyA9IEN1cnJ5Ll8yKGNtcCwgeDEsIHgyKTtcbiAgICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICAgIGlmIChjIDwgMCkge1xuICAgICAgICAgICAgICAgIHZhciBjJDEgPSBDdXJyeS5fMihjbXAsIHgyLCB4Myk7XG4gICAgICAgICAgICAgICAgaWYgKGMkMSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGMkMSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjJDIgPSBDdXJyeS5fMihjbXAsIHgxLCB4Myk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjJDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYyQyIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjJDMgPSBDdXJyeS5fMihjbXAsIHgxLCB4Myk7XG4gICAgICAgICAgICAgICAgaWYgKGMkMykge1xuICAgICAgICAgICAgICAgICAgaWYgKGMkMyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjJDQgPSBDdXJyeS5fMihjbXAsIHgyLCB4Myk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjJDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYyQ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgYyQ1ID0gQ3VycnkuXzIoY21wLCB4MiwgeDMpO1xuICAgICAgICAgICAgICBpZiAoYyQ1KSB7XG4gICAgICAgICAgICAgICAgaWYgKGMkNSA8IDApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhpdCA9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsKSB7XG4gICAgICB2YXIgbWF0Y2gkMiA9IGxbMV07XG4gICAgICBpZiAobWF0Y2gkMikge1xuICAgICAgICB2YXIgeDIkMSA9IG1hdGNoJDJbMF07XG4gICAgICAgIHZhciB4MSQxID0gbFswXTtcbiAgICAgICAgdmFyIGMkNiA9IEN1cnJ5Ll8yKGNtcCwgeDEkMSwgeDIkMSk7XG4gICAgICAgIGlmIChjJDYpIHtcbiAgICAgICAgICBpZiAoYyQ2IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICB4MSQxLFxuICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICB4MiQxLFxuICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgIHgyJDEsXG4gICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgIHgxJDEsXG4gICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgIHgxJDEsXG4gICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleGl0ID0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXhpdCA9IDE7XG4gICAgfVxuICAgIGlmIChleGl0ID09PSAxKSB7XG4gICAgICB2YXIgbjEgPSAobiA+PiAxKTtcbiAgICAgIHZhciBuMiA9IG4gLSBuMSB8IDA7XG4gICAgICB2YXIgbDIgPSBjaG9wKG4xLCBsKTtcbiAgICAgIHZhciBzMSA9IHJldl9zb3J0KG4xLCBsKTtcbiAgICAgIHZhciBzMiA9IHJldl9zb3J0KG4yLCBsMik7XG4gICAgICB2YXIgX2wxID0gczE7XG4gICAgICB2YXIgX2wyID0gczI7XG4gICAgICB2YXIgX2FjY3UgPSAvKiBbXSAqLzA7XG4gICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgICAgIHZhciBsMiQxID0gX2wyO1xuICAgICAgICB2YXIgbDEgPSBfbDE7XG4gICAgICAgIGlmIChsMSkge1xuICAgICAgICAgIGlmIChsMiQxKSB7XG4gICAgICAgICAgICB2YXIgdDIgPSBsMiQxWzFdO1xuICAgICAgICAgICAgdmFyIGgyID0gbDIkMVswXTtcbiAgICAgICAgICAgIHZhciB0MSA9IGwxWzFdO1xuICAgICAgICAgICAgdmFyIGgxID0gbDFbMF07XG4gICAgICAgICAgICB2YXIgYyQ3ID0gQ3VycnkuXzIoY21wLCBoMSwgaDIpO1xuICAgICAgICAgICAgaWYgKGMkNykge1xuICAgICAgICAgICAgICBpZiAoYyQ3ID4gMCkge1xuICAgICAgICAgICAgICAgIF9hY2N1ID0gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICBoMSxcbiAgICAgICAgICAgICAgICAgIGFjY3VcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIF9sMSA9IHQxO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfYWNjdSA9IC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgaDIsXG4gICAgICAgICAgICAgICAgICBhY2N1XG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBfbDIgPSB0MjtcbiAgICAgICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9hY2N1ID0gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICAgICAgYWNjdVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICBfbDIgPSB0MjtcbiAgICAgICAgICAgICAgX2wxID0gdDE7XG4gICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXZfYXBwZW5kKGwxLCBhY2N1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJldl9hcHBlbmQobDIkMSwgYWNjdSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIFxuICB9O1xuICB2YXIgcmV2X3NvcnQgPSBmdW5jdGlvbiAobiwgbCkge1xuICAgIHZhciBleGl0ID0gMDtcbiAgICBpZiAobiAhPT0gMikge1xuICAgICAgaWYgKG4gIT09IDMpIHtcbiAgICAgICAgZXhpdCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGwpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gbFsxXTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIG1hdGNoJDEgPSBtYXRjaFsxXTtcbiAgICAgICAgICBpZiAobWF0Y2gkMSkge1xuICAgICAgICAgICAgdmFyIHgzID0gbWF0Y2gkMVswXTtcbiAgICAgICAgICAgIHZhciB4MiA9IG1hdGNoWzBdO1xuICAgICAgICAgICAgdmFyIHgxID0gbFswXTtcbiAgICAgICAgICAgIHZhciBjID0gQ3VycnkuXzIoY21wLCB4MSwgeDIpO1xuICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgaWYgKGMgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMkMSA9IEN1cnJ5Ll8yKGNtcCwgeDIsIHgzKTtcbiAgICAgICAgICAgICAgICBpZiAoYyQxKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYyQxID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMkMiA9IEN1cnJ5Ll8yKGNtcCwgeDEsIHgzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMkMikge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChjJDIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGMkMyA9IEN1cnJ5Ll8yKGNtcCwgeDEsIHgzKTtcbiAgICAgICAgICAgICAgICBpZiAoYyQzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYyQzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMkNCA9IEN1cnJ5Ll8yKGNtcCwgeDIsIHgzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMkNCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChjJDQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBjJDUgPSBDdXJyeS5fMihjbXAsIHgyLCB4Myk7XG4gICAgICAgICAgICAgIGlmIChjJDUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYyQ1ID4gMCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhpdCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleGl0ID0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGwpIHtcbiAgICAgIHZhciBtYXRjaCQyID0gbFsxXTtcbiAgICAgIGlmIChtYXRjaCQyKSB7XG4gICAgICAgIHZhciB4MiQxID0gbWF0Y2gkMlswXTtcbiAgICAgICAgdmFyIHgxJDEgPSBsWzBdO1xuICAgICAgICB2YXIgYyQ2ID0gQ3VycnkuXzIoY21wLCB4MSQxLCB4MiQxKTtcbiAgICAgICAgaWYgKGMkNikge1xuICAgICAgICAgIGlmIChjJDYgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgIHgxJDEsXG4gICAgICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgIHgyJDEsXG4gICAgICAgICAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgeDIkMSxcbiAgICAgICAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgeDEkMSxcbiAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgeDEkMSxcbiAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4aXQgPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBleGl0ID0gMTtcbiAgICB9XG4gICAgaWYgKGV4aXQgPT09IDEpIHtcbiAgICAgIHZhciBuMSA9IChuID4+IDEpO1xuICAgICAgdmFyIG4yID0gbiAtIG4xIHwgMDtcbiAgICAgIHZhciBsMiA9IGNob3AobjEsIGwpO1xuICAgICAgdmFyIHMxID0gc29ydChuMSwgbCk7XG4gICAgICB2YXIgczIgPSBzb3J0KG4yLCBsMik7XG4gICAgICB2YXIgX2wxID0gczE7XG4gICAgICB2YXIgX2wyID0gczI7XG4gICAgICB2YXIgX2FjY3UgPSAvKiBbXSAqLzA7XG4gICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgICAgIHZhciBsMiQxID0gX2wyO1xuICAgICAgICB2YXIgbDEgPSBfbDE7XG4gICAgICAgIGlmIChsMSkge1xuICAgICAgICAgIGlmIChsMiQxKSB7XG4gICAgICAgICAgICB2YXIgdDIgPSBsMiQxWzFdO1xuICAgICAgICAgICAgdmFyIGgyID0gbDIkMVswXTtcbiAgICAgICAgICAgIHZhciB0MSA9IGwxWzFdO1xuICAgICAgICAgICAgdmFyIGgxID0gbDFbMF07XG4gICAgICAgICAgICB2YXIgYyQ3ID0gQ3VycnkuXzIoY21wLCBoMSwgaDIpO1xuICAgICAgICAgICAgaWYgKGMkNykge1xuICAgICAgICAgICAgICBpZiAoYyQ3IDwgMCkge1xuICAgICAgICAgICAgICAgIF9hY2N1ID0gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICBoMSxcbiAgICAgICAgICAgICAgICAgIGFjY3VcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIF9sMSA9IHQxO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfYWNjdSA9IC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgaDIsXG4gICAgICAgICAgICAgICAgICBhY2N1XG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBfbDIgPSB0MjtcbiAgICAgICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9hY2N1ID0gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICAgICAgYWNjdVxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICBfbDIgPSB0MjtcbiAgICAgICAgICAgICAgX2wxID0gdDE7XG4gICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXZfYXBwZW5kKGwxLCBhY2N1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJldl9hcHBlbmQobDIkMSwgYWNjdSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIFxuICB9O1xuICB2YXIgbGVuID0gbGVuZ3RoKGwpO1xuICBpZiAobGVuIDwgMikge1xuICAgIHJldHVybiBsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb3J0KGxlbiwgbCk7XG4gIH1cbn1cblxudmFyIGFwcGVuZCA9IFBlcnZhc2l2ZXMuJGF0O1xuXG52YXIgY29uY2F0ID0gZmxhdHRlbjtcblxudmFyIGZpbHRlciA9IGZpbmRfYWxsO1xuXG52YXIgc29ydCA9IHN0YWJsZV9zb3J0O1xuXG52YXIgZmFzdF9zb3J0ID0gc3RhYmxlX3NvcnQ7XG5cbmV4cG9ydCB7XG4gIGxlbmd0aCAgICAgICAsXG4gIGhkICAgICAgICAgICAsXG4gIHRsICAgICAgICAgICAsXG4gIG50aCAgICAgICAgICAsXG4gIHJldiAgICAgICAgICAsXG4gIGFwcGVuZCAgICAgICAsXG4gIHJldl9hcHBlbmQgICAsXG4gIGNvbmNhdCAgICAgICAsXG4gIGZsYXR0ZW4gICAgICAsXG4gIGl0ZXIgICAgICAgICAsXG4gIGl0ZXJpICAgICAgICAsXG4gIG1hcCAgICAgICAgICAsXG4gIG1hcGkkMSAgICAgICAgIGFzIG1hcGksXG4gIHJldl9tYXAgICAgICAsXG4gIGZvbGRfbGVmdCAgICAsXG4gIGZvbGRfcmlnaHQgICAsXG4gIGl0ZXIyICAgICAgICAsXG4gIG1hcDIgICAgICAgICAsXG4gIHJldl9tYXAyICAgICAsXG4gIGZvbGRfbGVmdDIgICAsXG4gIGZvbGRfcmlnaHQyICAsXG4gIGZvcl9hbGwgICAgICAsXG4gIGV4aXN0cyAgICAgICAsXG4gIGZvcl9hbGwyICAgICAsXG4gIGV4aXN0czIgICAgICAsXG4gIG1lbSAgICAgICAgICAsXG4gIG1lbXEgICAgICAgICAsXG4gIGZpbmQgICAgICAgICAsXG4gIGZpbHRlciAgICAgICAsXG4gIGZpbmRfYWxsICAgICAsXG4gIHBhcnRpdGlvbiAgICAsXG4gIGFzc29jICAgICAgICAsXG4gIGFzc3EgICAgICAgICAsXG4gIG1lbV9hc3NvYyAgICAsXG4gIG1lbV9hc3NxICAgICAsXG4gIHJlbW92ZV9hc3NvYyAsXG4gIHJlbW92ZV9hc3NxICAsXG4gIHNwbGl0ICAgICAgICAsXG4gIGNvbWJpbmUgICAgICAsXG4gIHNvcnQgICAgICAgICAsXG4gIHN0YWJsZV9zb3J0ICAsXG4gIGZhc3Rfc29ydCAgICAsXG4gIHNvcnRfdW5pcSAgICAsXG4gIG1lcmdlICAgICAgICAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgQ2FtbF9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgJCRFcnJvciA9IENhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJKc19leG4uRXJyb3JcIik7XG5cbmZ1bmN0aW9uIGludGVybmFsVG9PQ2FtbEV4Y2VwdGlvbihlKSB7XG4gIGlmIChDYW1sX2V4Y2VwdGlvbnMuaXNDYW1sRXhjZXB0aW9uT3JPcGVuVmFyaWFudChlKSkge1xuICAgIHJldHVybiBlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAkJEVycm9yLFxuICAgICAgICAgICAgZVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmFpc2VFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlRXZhbEVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgRXZhbEVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlUmFuZ2VFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IFJhbmdlRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VSZWZlcmVuY2VFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlU3ludGF4RXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBTeW50YXhFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZVR5cGVFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZVVyaUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgVVJJRXJyb3Ioc3RyKTtcbn1cblxuZXhwb3J0IHtcbiAgJCRFcnJvciAgICAgICAgICAgICAgICAgICxcbiAgaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uICxcbiAgcmFpc2VFcnJvciAgICAgICAgICAgICAgICxcbiAgcmFpc2VFdmFsRXJyb3IgICAgICAgICAgICxcbiAgcmFpc2VSYW5nZUVycm9yICAgICAgICAgICxcbiAgcmFpc2VSZWZlcmVuY2VFcnJvciAgICAgICxcbiAgcmFpc2VTeW50YXhFcnJvciAgICAgICAgICxcbiAgcmFpc2VUeXBlRXJyb3IgICAgICAgICAgICxcbiAgcmFpc2VVcmlFcnJvciAgICAgICAgICAgICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBDdXJyeSAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgSnNfZXhuICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vanNfZXhuLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2FycmF5ICAgICAgICAgICAgICBmcm9tIFwiLi9jYW1sX2FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgICAgICAgICBmcm9tIFwiLi9jYW1sX2V4Y2VwdGlvbnMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIGluaXQobCwgZikge1xuICBpZiAobCkge1xuICAgIGlmIChsIDwgMCkge1xuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgIFwiQXJyYXkuaW5pdFwiXG4gICAgICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlcyA9IENhbWxfYXJyYXkuY2FtbF9tYWtlX3ZlY3QobCwgQ3VycnkuXzEoZiwgMCkpO1xuICAgICAgZm9yKHZhciBpID0gMSAsaV9maW5pc2ggPSBsIC0gMSB8IDA7IGkgPD0gaV9maW5pc2g7ICsraSl7XG4gICAgICAgIHJlc1tpXSA9IEN1cnJ5Ll8xKGYsIGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIGFycmF5ICovW107XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZV9tYXRyaXgoc3gsIHN5LCBpbml0KSB7XG4gIHZhciByZXMgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KHN4LCAvKiBhcnJheSAqL1tdKTtcbiAgZm9yKHZhciB4ID0gMCAseF9maW5pc2ggPSBzeCAtIDEgfCAwOyB4IDw9IHhfZmluaXNoOyArK3gpe1xuICAgIHJlc1t4XSA9IENhbWxfYXJyYXkuY2FtbF9tYWtlX3ZlY3Qoc3ksIGluaXQpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGNvcHkoYSkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCkge1xuICAgIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc3ViKGEsIDAsIGwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBhcnJheSAqL1tdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZChhMSwgYTIpIHtcbiAgdmFyIGwxID0gYTEubGVuZ3RoO1xuICBpZiAobDEpIHtcbiAgICBpZiAoYTIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYTEuY29uY2F0KGEyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zdWIoYTEsIDAsIGwxKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvcHkoYTIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YihhLCBvZnMsIGxlbikge1xuICBpZiAobGVuIDwgMCB8fCBvZnMgPiAoYS5sZW5ndGggLSBsZW4gfCAwKSkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiQXJyYXkuc3ViXCJcbiAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3N1YihhLCBvZnMsIGxlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbChhLCBvZnMsIGxlbiwgdikge1xuICBpZiAob2ZzIDwgMCB8fCBsZW4gPCAwIHx8IG9mcyA+IChhLmxlbmd0aCAtIGxlbiB8IDApKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJBcnJheS5maWxsXCJcbiAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICBmb3IodmFyIGkgPSBvZnMgLGlfZmluaXNoID0gKG9mcyArIGxlbiB8IDApIC0gMSB8IDA7IGkgPD0gaV9maW5pc2g7ICsraSl7XG4gICAgICBhW2ldID0gdjtcbiAgICB9XG4gICAgcmV0dXJuIC8qICgpICovMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBibGl0KGExLCBvZnMxLCBhMiwgb2ZzMiwgbGVuKSB7XG4gIGlmIChsZW4gPCAwIHx8IG9mczEgPCAwIHx8IG9mczEgPiAoYTEubGVuZ3RoIC0gbGVuIHwgMCkgfHwgb2ZzMiA8IDAgfHwgb2ZzMiA+IChhMi5sZW5ndGggLSBsZW4gfCAwKSkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiQXJyYXkuYmxpdFwiXG4gICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9ibGl0KGExLCBvZnMxLCBhMiwgb2ZzMiwgbGVuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpdGVyKGYsIGEpIHtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBhLmxlbmd0aCAtIDEgfCAwOyBpIDw9IGlfZmluaXNoOyArK2kpe1xuICAgIEN1cnJ5Ll8xKGYsIGFbaV0pO1xuICB9XG4gIHJldHVybiAvKiAoKSAqLzA7XG59XG5cbmZ1bmN0aW9uIG1hcChmLCBhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsKSB7XG4gICAgdmFyIHIgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KGwsIEN1cnJ5Ll8xKGYsIGFbMF0pKTtcbiAgICBmb3IodmFyIGkgPSAxICxpX2ZpbmlzaCA9IGwgLSAxIHwgMDsgaSA8PSBpX2ZpbmlzaDsgKytpKXtcbiAgICAgIHJbaV0gPSBDdXJyeS5fMShmLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIGFycmF5ICovW107XG4gIH1cbn1cblxuZnVuY3Rpb24gaXRlcmkoZiwgYSkge1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoIC0gMSB8IDA7IGkgPD0gaV9maW5pc2g7ICsraSl7XG4gICAgQ3VycnkuXzIoZiwgaSwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIC8qICgpICovMDtcbn1cblxuZnVuY3Rpb24gbWFwaShmLCBhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsKSB7XG4gICAgdmFyIHIgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KGwsIEN1cnJ5Ll8yKGYsIDAsIGFbMF0pKTtcbiAgICBmb3IodmFyIGkgPSAxICxpX2ZpbmlzaCA9IGwgLSAxIHwgMDsgaSA8PSBpX2ZpbmlzaDsgKytpKXtcbiAgICAgIHJbaV0gPSBDdXJyeS5fMihmLCBpLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIGFycmF5ICovW107XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9fbGlzdChhKSB7XG4gIHZhciBfaSA9IGEubGVuZ3RoIC0gMSB8IDA7XG4gIHZhciBfcmVzID0gLyogW10gKi8wO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHJlcyA9IF9yZXM7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9yZXMgPSAvKiA6OiAqL1tcbiAgICAgICAgYVtpXSxcbiAgICAgICAgcmVzXG4gICAgICBdO1xuICAgICAgX2kgPSBpIC0gMSB8IDA7XG4gICAgICBjb250aW51ZSA7XG4gICAgICBcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGxpc3RfbGVuZ3RoKF9hY2N1LCBfcGFyYW0pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIGlmIChwYXJhbSkge1xuICAgICAgX3BhcmFtID0gcGFyYW1bMV07XG4gICAgICBfYWNjdSA9IGFjY3UgKyAxIHwgMDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mX2xpc3QobCkge1xuICBpZiAobCkge1xuICAgIHZhciBhID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfdmVjdChsaXN0X2xlbmd0aCgwLCBsKSwgbFswXSk7XG4gICAgdmFyIF9pID0gMTtcbiAgICB2YXIgX3BhcmFtID0gbFsxXTtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgICB2YXIgaSA9IF9pO1xuICAgICAgaWYgKHBhcmFtKSB7XG4gICAgICAgIGFbaV0gPSBwYXJhbVswXTtcbiAgICAgICAgX3BhcmFtID0gcGFyYW1bMV07XG4gICAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogYXJyYXkgKi9bXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb2xkX2xlZnQoZiwgeCwgYSkge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGggLSAxIHwgMDsgaSA8PSBpX2ZpbmlzaDsgKytpKXtcbiAgICByID0gQ3VycnkuXzIoZiwgciwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGZvbGRfcmlnaHQoZiwgYSwgeCkge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IGEubGVuZ3RoIC0gMSB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICByID0gQ3VycnkuXzIoZiwgYVtpXSwgcik7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbnZhciBCb3R0b20gPSBDYW1sX2V4Y2VwdGlvbnMuY3JlYXRlKFwiQXJyYXkuQm90dG9tXCIpO1xuXG5mdW5jdGlvbiBzb3J0KGNtcCwgYSkge1xuICB2YXIgbWF4c29uID0gZnVuY3Rpb24gKGwsIGkpIHtcbiAgICB2YXIgaTMxID0gKChpICsgaSB8IDApICsgaSB8IDApICsgMSB8IDA7XG4gICAgdmFyIHggPSBpMzE7XG4gICAgaWYgKChpMzEgKyAyIHwgMCkgPCBsKSB7XG4gICAgICBpZiAoQ3VycnkuXzIoY21wLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGkzMSksIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgaTMxICsgMSB8IDApKSA8IDApIHtcbiAgICAgICAgeCA9IGkzMSArIDEgfCAwO1xuICAgICAgfVxuICAgICAgaWYgKEN1cnJ5Ll8yKGNtcCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCB4KSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpMzEgKyAyIHwgMCkpIDwgMCkge1xuICAgICAgICB4ID0gaTMxICsgMiB8IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4geDtcbiAgICB9IGVsc2UgaWYgKChpMzEgKyAxIHwgMCkgPCBsICYmIEN1cnJ5Ll8yKGNtcCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpMzEpLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGkzMSArIDEgfCAwKSkgPCAwKSB7XG4gICAgICByZXR1cm4gaTMxICsgMSB8IDA7XG4gICAgfSBlbHNlIGlmIChpMzEgPCBsKSB7XG4gICAgICByZXR1cm4gaTMxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBCb3R0b20sXG4gICAgICAgICAgICBpXG4gICAgICAgICAgXTtcbiAgICB9XG4gIH07XG4gIHZhciB0cmlja2xlID0gZnVuY3Rpb24gKGwsIGksIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGwkMSA9IGw7XG4gICAgICB2YXIgX2kgPSBpO1xuICAgICAgdmFyIGUkMSA9IGU7XG4gICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgIHZhciBpJDEgPSBfaTtcbiAgICAgICAgdmFyIGogPSBtYXhzb24obCQxLCBpJDEpO1xuICAgICAgICBpZiAoQ3VycnkuXzIoY21wLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGopLCBlJDEpID4gMCkge1xuICAgICAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgaSQxLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGopKTtcbiAgICAgICAgICBfaSA9IGo7XG4gICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIGkkMSwgZSQxKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2ggKHJhd19leG4pe1xuICAgICAgdmFyIGV4biA9IEpzX2V4bi5pbnRlcm5hbFRvT0NhbWxFeGNlcHRpb24ocmF3X2V4bik7XG4gICAgICBpZiAoZXhuWzBdID09PSBCb3R0b20pIHtcbiAgICAgICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgZXhuWzFdLCBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGV4bjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHZhciBidWJibGUgPSBmdW5jdGlvbiAobCwgaSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbCQxID0gbDtcbiAgICAgIHZhciBfaSA9IGk7XG4gICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgIHZhciBpJDEgPSBfaTtcbiAgICAgICAgdmFyIGogPSBtYXhzb24obCQxLCBpJDEpO1xuICAgICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIGkkMSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBqKSk7XG4gICAgICAgIF9pID0gajtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgICBcbiAgICAgIH07XG4gICAgfVxuICAgIGNhdGNoIChyYXdfZXhuKXtcbiAgICAgIHZhciBleG4gPSBKc19leG4uaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uKHJhd19leG4pO1xuICAgICAgaWYgKGV4blswXSA9PT0gQm90dG9tKSB7XG4gICAgICAgIHJldHVybiBleG5bMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBleG47XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB2YXIgdHJpY2tsZXVwID0gZnVuY3Rpb24gKF9pLCBlKSB7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGkgPSBfaTtcbiAgICAgIHZhciBmYXRoZXIgPSAoaSAtIDEgfCAwKSAvIDMgfCAwO1xuICAgICAgaWYgKGkgPT09IGZhdGhlcikge1xuICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmFzc2VydF9mYWlsdXJlLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJhcnJheS5tbFwiLFxuICAgICAgICAgICAgICAgIDE2OCxcbiAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF07XG4gICAgICB9XG4gICAgICBpZiAoQ3VycnkuXzIoY21wLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGZhdGhlciksIGUpIDwgMCkge1xuICAgICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIGksIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgZmF0aGVyKSk7XG4gICAgICAgIGlmIChmYXRoZXIgPiAwKSB7XG4gICAgICAgICAgX2kgPSBmYXRoZXI7XG4gICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIDAsIGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCBpLCBlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBmb3IodmFyIGkgPSAoKGwgKyAxIHwgMCkgLyAzIHwgMCkgLSAxIHwgMDsgaSA+PSAwOyAtLWkpe1xuICAgIHRyaWNrbGUobCwgaSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpKSk7XG4gIH1cbiAgZm9yKHZhciBpJDEgPSBsIC0gMSB8IDA7IGkkMSA+PSAyOyAtLWkkMSl7XG4gICAgdmFyIGUgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGkkMSk7XG4gICAgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCBpJDEsIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgMCkpO1xuICAgIHRyaWNrbGV1cChidWJibGUoaSQxLCAwKSwgZSk7XG4gIH1cbiAgaWYgKGwgPiAxKSB7XG4gICAgdmFyIGUkMSA9IENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgMSk7XG4gICAgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCAxLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIDApKTtcbiAgICByZXR1cm4gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCAwLCBlJDEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YWJsZV9zb3J0KGNtcCwgYSkge1xuICB2YXIgbWVyZ2UgPSBmdW5jdGlvbiAoc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMpIHtcbiAgICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gICAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICAgIHZhciBfaTEgPSBzcmMxb2ZzO1xuICAgIHZhciBfczEgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIHNyYzFvZnMpO1xuICAgIHZhciBfaTIgPSBzcmMyb2ZzO1xuICAgIHZhciBfczIgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KHNyYzIsIHNyYzJvZnMpO1xuICAgIHZhciBfZCA9IGRzdG9mcztcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgZCA9IF9kO1xuICAgICAgdmFyIHMyID0gX3MyO1xuICAgICAgdmFyIGkyID0gX2kyO1xuICAgICAgdmFyIHMxID0gX3MxO1xuICAgICAgdmFyIGkxID0gX2kxO1xuICAgICAgaWYgKEN1cnJ5Ll8yKGNtcCwgczEsIHMyKSA8PSAwKSB7XG4gICAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoZHN0LCBkLCBzMSk7XG4gICAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgICAgaWYgKGkxJDEgPCBzcmMxcikge1xuICAgICAgICAgIF9kID0gZCArIDEgfCAwO1xuICAgICAgICAgIF9zMSA9IENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgaTEkMSk7XG4gICAgICAgICAgX2kxID0gaTEkMTtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGJsaXQoc3JjMiwgaTIsIGRzdCwgZCArIDEgfCAwLCBzcmMyciAtIGkyIHwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoZHN0LCBkLCBzMik7XG4gICAgICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICAgICAgaWYgKGkyJDEgPCBzcmMycikge1xuICAgICAgICAgIF9kID0gZCArIDEgfCAwO1xuICAgICAgICAgIF9zMiA9IENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoc3JjMiwgaTIkMSk7XG4gICAgICAgICAgX2kyID0gaTIkMTtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGJsaXQoYSwgaTEsIGRzdCwgZCArIDEgfCAwLCBzcmMxciAtIGkxIHwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICB2YXIgaXNvcnR0byA9IGZ1bmN0aW9uIChzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4pIHtcbiAgICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGxlbiAtIDEgfCAwOyBpIDw9IGlfZmluaXNoOyArK2kpe1xuICAgICAgdmFyIGUgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIHNyY29mcyArIGkgfCAwKTtcbiAgICAgIHZhciBqID0gKGRzdG9mcyArIGkgfCAwKSAtIDEgfCAwO1xuICAgICAgd2hpbGUoaiA+PSBkc3RvZnMgJiYgQ3VycnkuXzIoY21wLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGRzdCwgaiksIGUpID4gMCkge1xuICAgICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGRzdCwgaiArIDEgfCAwLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGRzdCwgaikpO1xuICAgICAgICBqID0gaiAtIDEgfCAwO1xuICAgICAgfTtcbiAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoZHN0LCBqICsgMSB8IDAsIGUpO1xuICAgIH1cbiAgICByZXR1cm4gLyogKCkgKi8wO1xuICB9O1xuICB2YXIgc29ydHRvID0gZnVuY3Rpb24gKHNyY29mcywgZHN0LCBkc3RvZnMsIGxlbikge1xuICAgIGlmIChsZW4gPD0gNSkge1xuICAgICAgcmV0dXJuIGlzb3J0dG8oc3Jjb2ZzLCBkc3QsIGRzdG9mcywgbGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGwxID0gbGVuIC8gMiB8IDA7XG4gICAgICB2YXIgbDIgPSBsZW4gLSBsMSB8IDA7XG4gICAgICBzb3J0dG8oc3Jjb2ZzICsgbDEgfCAwLCBkc3QsIGRzdG9mcyArIGwxIHwgMCwgbDIpO1xuICAgICAgc29ydHRvKHNyY29mcywgYSwgc3Jjb2ZzICsgbDIgfCAwLCBsMSk7XG4gICAgICByZXR1cm4gbWVyZ2Uoc3Jjb2ZzICsgbDIgfCAwLCBsMSwgZHN0LCBkc3RvZnMgKyBsMSB8IDAsIGwyLCBkc3QsIGRzdG9mcyk7XG4gICAgfVxuICB9O1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCA8PSA1KSB7XG4gICAgcmV0dXJuIGlzb3J0dG8oMCwgYSwgMCwgbCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGwxID0gbCAvIDIgfCAwO1xuICAgIHZhciBsMiA9IGwgLSBsMSB8IDA7XG4gICAgdmFyIHQgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KGwyLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIDApKTtcbiAgICBzb3J0dG8obDEsIHQsIDAsIGwyKTtcbiAgICBzb3J0dG8oMCwgYSwgbDIsIGwxKTtcbiAgICByZXR1cm4gbWVyZ2UobDIsIGwxLCB0LCAwLCBsMiwgYSwgMCk7XG4gIH1cbn1cblxudmFyIGNyZWF0ZV9tYXRyaXggPSBtYWtlX21hdHJpeDtcblxudmFyIGNvbmNhdCA9IENhbWxfYXJyYXkuY2FtbF9hcnJheV9jb25jYXQ7XG5cbnZhciBmYXN0X3NvcnQgPSBzdGFibGVfc29ydDtcblxuZXhwb3J0IHtcbiAgaW5pdCAgICAgICAgICAsXG4gIG1ha2VfbWF0cml4ICAgLFxuICBjcmVhdGVfbWF0cml4ICxcbiAgYXBwZW5kICAgICAgICAsXG4gIGNvbmNhdCAgICAgICAgLFxuICBzdWIgICAgICAgICAgICxcbiAgY29weSAgICAgICAgICAsXG4gIGZpbGwgICAgICAgICAgLFxuICBibGl0ICAgICAgICAgICxcbiAgdG9fbGlzdCAgICAgICAsXG4gIG9mX2xpc3QgICAgICAgLFxuICBpdGVyICAgICAgICAgICxcbiAgbWFwICAgICAgICAgICAsXG4gIGl0ZXJpICAgICAgICAgLFxuICBtYXBpICAgICAgICAgICxcbiAgZm9sZF9sZWZ0ICAgICAsXG4gIGZvbGRfcmlnaHQgICAgLFxuICBzb3J0ICAgICAgICAgICxcbiAgc3RhYmxlX3NvcnQgICAsXG4gIGZhc3Rfc29ydCAgICAgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBfYXNzaWduKHByaW0sIHByaW0kMSkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcmltLCBwcmltJDEpO1xufVxuXG52YXIgZW1wdHlPYmplY3QgPSB7IH07XG5cblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbi8vICd1c2Ugc3RyaWN0JztcblxuLy8gdmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIHZhciBlbXB0eU9iamVjdCA9IHJlcXVpcmUoJ2VtcHR5T2JqZWN0Jyk7XG4vLyB2YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG4vLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuLy8gICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbi8vIH1cblxudmFyIE1JWElOU19LRVkgPSAnbWl4aW5zJztcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGFsbG93IHRoZSBjcmVhdGlvbiBvZiBhbm9ueW1vdXMgZnVuY3Rpb25zIHdoaWNoIGRvIG5vdFxuLy8gaGF2ZSAubmFtZSBzZXQgdG8gdGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIGJlaW5nIGFzc2lnbmVkIHRvLlxuZnVuY3Rpb24gaWRlbnRpdHkoZm4pIHtcbiAgcmV0dXJuIGZuO1xufVxuXG52YXIgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXM7XG4vLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuLy8gICBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcyA9IHtcbi8vICAgICBwcm9wOiAncHJvcCcsXG4vLyAgICAgY29udGV4dDogJ2NvbnRleHQnLFxuLy8gICAgIGNoaWxkQ29udGV4dDogJ2NoaWxkIGNvbnRleHQnXG4vLyAgIH07XG4vLyB9IGVsc2Uge1xuICBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcyA9IHt9O1xuLy8gfVxuXG47XG5cbnZhciBmYWN0b3J5ID0gKFxuZnVuY3Rpb24gZmFjdG9yeShSZWFjdENvbXBvbmVudCwgaXNWYWxpZEVsZW1lbnQsIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlKSB7XG4gIC8qKlxuICAgKiBQb2xpY2llcyB0aGF0IGRlc2NyaWJlIG1ldGhvZHMgaW4gYFJlYWN0Q2xhc3NJbnRlcmZhY2VgLlxuICAgKi9cblxuICB2YXIgaW5qZWN0ZWRNaXhpbnMgPSBbXTtcblxuICAvKipcbiAgICogQ29tcG9zaXRlIGNvbXBvbmVudHMgYXJlIGhpZ2hlci1sZXZlbCBjb21wb25lbnRzIHRoYXQgY29tcG9zZSBvdGhlciBjb21wb3NpdGVcbiAgICogb3IgaG9zdCBjb21wb25lbnRzLlxuICAgKlxuICAgKiBUbyBjcmVhdGUgYSBuZXcgdHlwZSBvZiBgUmVhY3RDbGFzc2AsIHBhc3MgYSBzcGVjaWZpY2F0aW9uIG9mXG4gICAqIHlvdXIgbmV3IGNsYXNzIHRvIGBSZWFjdC5jcmVhdGVDbGFzc2AuIFRoZSBvbmx5IHJlcXVpcmVtZW50IG9mIHlvdXIgY2xhc3NcbiAgICogc3BlY2lmaWNhdGlvbiBpcyB0aGF0IHlvdSBpbXBsZW1lbnQgYSBgcmVuZGVyYCBtZXRob2QuXG4gICAqXG4gICAqICAgdmFyIE15Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICogICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj47XG4gICAqICAgICB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIFRoZSBjbGFzcyBzcGVjaWZpY2F0aW9uIHN1cHBvcnRzIGEgc3BlY2lmaWMgcHJvdG9jb2wgb2YgbWV0aG9kcyB0aGF0IGhhdmVcbiAgICogc3BlY2lhbCBtZWFuaW5nIChlLmcuIGByZW5kZXJgKS4gU2VlIGBSZWFjdENsYXNzSW50ZXJmYWNlYCBmb3JcbiAgICogbW9yZSB0aGUgY29tcHJlaGVuc2l2ZSBwcm90b2NvbC4gQW55IG90aGVyIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgaW4gdGhlXG4gICAqIGNsYXNzIHNwZWNpZmljYXRpb24gd2lsbCBiZSBhdmFpbGFibGUgb24gdGhlIHByb3RvdHlwZS5cbiAgICpcbiAgICogQGludGVyZmFjZSBSZWFjdENsYXNzSW50ZXJmYWNlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdmFyIFJlYWN0Q2xhc3NJbnRlcmZhY2UgPSB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgTWl4aW4gb2JqZWN0cyB0byBpbmNsdWRlIHdoZW4gZGVmaW5pbmcgeW91ciBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgbWl4aW5zOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0aGF0IHNob3VsZCBiZSBkZWZpbmVkIG9uXG4gICAgICogdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YgaXRzIHByb3RvdHlwZSAoc3RhdGljIG1ldGhvZHMpLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBzdGF0aWNzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBwcm9wIHR5cGVzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgcHJvcFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29udGV4dFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIHRoaXMgY29tcG9uZW50IHNldHMgZm9yIGl0cyBjaGlsZHJlbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY2hpbGRDb250ZXh0VHlwZXM6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvLyA9PT09IERlZmluaXRpb24gbWV0aG9kcyA9PT09XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLiBWYWx1ZXMgaW4gdGhlIG1hcHBpbmcgd2lsbCBiZSBzZXQgb25cbiAgICAgKiBgdGhpcy5wcm9wc2AgaWYgdGhhdCBwcm9wIGlzIG5vdCBzcGVjaWZpZWQgKGkuZS4gdXNpbmcgYW4gYGluYCBjaGVjaykuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIGJlZm9yZSBgZ2V0SW5pdGlhbFN0YXRlYCBhbmQgdGhlcmVmb3JlIGNhbm5vdCByZWx5XG4gICAgICogb24gYHRoaXMuc3RhdGVgIG9yIHVzZSBgdGhpcy5zZXRTdGF0ZWAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzOiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb25jZSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgYmUgdXNlZFxuICAgICAqIGFzIHRoZSBpbml0aWFsIHZhbHVlIG9mIGB0aGlzLnN0YXRlYC5cbiAgICAgKlxuICAgICAqICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgKiAgICAgcmV0dXJuIHtcbiAgICAgKiAgICAgICBpc09uOiBmYWxzZSxcbiAgICAgKiAgICAgICBmb29CYXo6IG5ldyBCYXpGb28oKVxuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBnZXRDaGlsZENvbnRleHQ6ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuXG4gICAgLyoqXG4gICAgICogVXNlcyBwcm9wcyBmcm9tIGB0aGlzLnByb3BzYCBhbmQgc3RhdGUgZnJvbSBgdGhpcy5zdGF0ZWAgdG8gcmVuZGVyIHRoZVxuICAgICAqIHN0cnVjdHVyZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogTm8gZ3VhcmFudGVlcyBhcmUgbWFkZSBhYm91dCB3aGVuIG9yIGhvdyBvZnRlbiB0aGlzIG1ldGhvZCBpcyBpbnZva2VkLCBzb1xuICAgICAqIGl0IG11c3Qgbm90IGhhdmUgc2lkZSBlZmZlY3RzLlxuICAgICAqXG4gICAgICogICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAqICAgICB2YXIgbmFtZSA9IHRoaXMucHJvcHMubmFtZTtcbiAgICAgKiAgICAgcmV0dXJuIDxkaXY+SGVsbG8sIHtuYW1lfSE8L2Rpdj47XG4gICAgICogICB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtSZWFjdENvbXBvbmVudH1cbiAgICAgKiBAcmVxdWlyZWRcbiAgICAgKi9cbiAgICByZW5kZXI6ICdERUZJTkVfT05DRScsXG5cbiAgICAvLyA9PT09IERlbGVnYXRlIG1ldGhvZHMgPT09PVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgaW5pdGlhbGx5IGNyZWF0ZWQgYW5kIGFib3V0IHRvIGJlIG1vdW50ZWQuXG4gICAgICogVGhpcyBtYXkgaGF2ZSBzaWRlIGVmZmVjdHMsIGJ1dCBhbnkgZXh0ZXJuYWwgc3Vic2NyaXB0aW9ucyBvciBkYXRhIGNyZWF0ZWRcbiAgICAgKiBieSB0aGlzIG1ldGhvZCBtdXN0IGJlIGNsZWFuZWQgdXAgaW4gYGNvbXBvbmVudFdpbGxVbm1vdW50YC5cbiAgICAgKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgYW5kIGhhcyBhIERPTSByZXByZXNlbnRhdGlvbi5cbiAgICAgKiBIb3dldmVyLCB0aGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCB0aGUgRE9NIG5vZGUgaXMgaW4gdGhlIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gb3BlcmF0ZSBvbiB0aGUgRE9NIHdoZW4gdGhlIGNvbXBvbmVudCBoYXNcbiAgICAgKiBiZWVuIG1vdW50ZWQgKGluaXRpYWxpemVkIGFuZCByZW5kZXJlZCkgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtET01FbGVtZW50fSByb290Tm9kZSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgcmVjZWl2ZXMgbmV3IHByb3BzLlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gcmVhY3QgdG8gYSBwcm9wIHRyYW5zaXRpb24gYnkgdXBkYXRpbmcgdGhlXG4gICAgICogc3RhdGUgdXNpbmcgYHRoaXMuc2V0U3RhdGVgLiBDdXJyZW50IHByb3BzIGFyZSBhY2Nlc3NlZCB2aWEgYHRoaXMucHJvcHNgLlxuICAgICAqXG4gICAgICogICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXh0UHJvcHMsIG5leHRDb250ZXh0KSB7XG4gICAgICogICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAqICAgICAgIGxpa2VzSW5jcmVhc2luZzogbmV4dFByb3BzLmxpa2VDb3VudCA+IHRoaXMucHJvcHMubGlrZUNvdW50XG4gICAgICogICAgIH0pO1xuICAgICAqICAgfVxuICAgICAqXG4gICAgICogTk9URTogVGhlcmUgaXMgbm8gZXF1aXZhbGVudCBgY29tcG9uZW50V2lsbFJlY2VpdmVTdGF0ZWAuIEFuIGluY29taW5nIHByb3BcbiAgICAgKiB0cmFuc2l0aW9uIG1heSBjYXVzZSBhIHN0YXRlIGNoYW5nZSwgYnV0IHRoZSBvcHBvc2l0ZSBpcyBub3QgdHJ1ZS4gSWYgeW91XG4gICAgICogbmVlZCBpdCwgeW91IGFyZSBwcm9iYWJseSBsb29raW5nIGZvciBgY29tcG9uZW50V2lsbFVwZGF0ZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmV4dFByb3BzXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hpbGUgZGVjaWRpbmcgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgdXBkYXRlZCBhcyBhIHJlc3VsdCBvZlxuICAgICAqIHJlY2VpdmluZyBuZXcgcHJvcHMsIHN0YXRlIGFuZC9vciBjb250ZXh0LlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gYHJldHVybiBmYWxzZWAgd2hlbiB5b3UncmUgY2VydGFpbiB0aGF0IHRoZVxuICAgICAqIHRyYW5zaXRpb24gdG8gdGhlIG5ldyBwcm9wcy9zdGF0ZS9jb250ZXh0IHdpbGwgbm90IHJlcXVpcmUgYSBjb21wb25lbnRcbiAgICAgKiB1cGRhdGUuXG4gICAgICpcbiAgICAgKiAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICogICAgIHJldHVybiAhZXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fFxuICAgICAqICAgICAgICFlcXVhbChuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICogICAgICAgIWVxdWFsKG5leHRDb250ZXh0LCB0aGlzLmNvbnRleHQpO1xuICAgICAqICAgfVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dFN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgdXBkYXRlLlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogJ0RFRklORV9PTkNFJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHVwZGF0ZSBkdWUgdG8gYSB0cmFuc2l0aW9uIGZyb21cbiAgICAgKiBgdGhpcy5wcm9wc2AsIGB0aGlzLnN0YXRlYCBhbmQgYHRoaXMuY29udGV4dGAgdG8gYG5leHRQcm9wc2AsIGBuZXh0U3RhdGVgXG4gICAgICogYW5kIGBuZXh0Q29udGV4dGAuXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBwZXJmb3JtIHByZXBhcmF0aW9uIGJlZm9yZSBhbiB1cGRhdGUgb2NjdXJzLlxuICAgICAqXG4gICAgICogTk9URTogWW91ICoqY2Fubm90KiogdXNlIGB0aGlzLnNldFN0YXRlKClgIGluIHRoaXMgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dFN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgICAqIEBwYXJhbSB7UmVhY3RSZWNvbmNpbGVUcmFuc2FjdGlvbn0gdHJhbnNhY3Rpb25cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQncyBET00gcmVwcmVzZW50YXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIG9wZXJhdGUgb24gdGhlIERPTSB3aGVuIHRoZSBjb21wb25lbnQgaGFzXG4gICAgICogYmVlbiB1cGRhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByZXZQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gcHJldlN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBwcmV2Q29udGV4dFxuICAgICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdE5vZGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQuXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkVXBkYXRlOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYWJvdXQgdG8gYmUgcmVtb3ZlZCBmcm9tIGl0cyBwYXJlbnQgYW5kIGhhdmVcbiAgICAgKiBpdHMgRE9NIHJlcHJlc2VudGF0aW9uIGRlc3Ryb3llZC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIGRlYWxsb2NhdGUgYW55IGV4dGVybmFsIHJlc291cmNlcy5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoZXJlIGlzIG5vIGBjb21wb25lbnREaWRVbm1vdW50YCBzaW5jZSB5b3VyIGNvbXBvbmVudCB3aWxsIGhhdmUgYmVlblxuICAgICAqIGRlc3Ryb3llZCBieSB0aGF0IHBvaW50LlxuICAgICAqXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvLyA9PT09IEFkdmFuY2VkIG1ldGhvZHMgPT09PVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY29tcG9uZW50J3MgY3VycmVudGx5IG1vdW50ZWQgRE9NIHJlcHJlc2VudGF0aW9uLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBpbXBsZW1lbnRzIFJlYWN0J3MgcmVuZGVyaW5nIGFuZCByZWNvbmNpbGlhdGlvbiBhbGdvcml0aG0uXG4gICAgICogU29waGlzdGljYXRlZCBjbGllbnRzIG1heSB3aXNoIHRvIG92ZXJyaWRlIHRoaXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAgICogQGludGVybmFsXG4gICAgICogQG92ZXJyaWRhYmxlXG4gICAgICovXG4gICAgdXBkYXRlQ29tcG9uZW50OiAnT1ZFUlJJREVfQkFTRSdcbiAgfTtcblxuICAvKipcbiAgICogTWFwcGluZyBmcm9tIGNsYXNzIHNwZWNpZmljYXRpb24ga2V5cyB0byBzcGVjaWFsIHByb2Nlc3NpbmcgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBBbHRob3VnaCB0aGVzZSBhcmUgZGVjbGFyZWQgbGlrZSBpbnN0YW5jZSBwcm9wZXJ0aWVzIGluIHRoZSBzcGVjaWZpY2F0aW9uXG4gICAqIHdoZW4gZGVmaW5pbmcgY2xhc3NlcyB1c2luZyBgUmVhY3QuY3JlYXRlQ2xhc3NgLCB0aGV5IGFyZSBhY3R1YWxseSBzdGF0aWNcbiAgICogYW5kIGFyZSBhY2Nlc3NpYmxlIG9uIHRoZSBjb25zdHJ1Y3RvciBpbnN0ZWFkIG9mIHRoZSBwcm90b3R5cGUuIERlc3BpdGVcbiAgICogYmVpbmcgc3RhdGljLCB0aGV5IG11c3QgYmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBcInN0YXRpY3NcIiBrZXkgdW5kZXJcbiAgICogd2hpY2ggYWxsIG90aGVyIHN0YXRpYyBtZXRob2RzIGFyZSBkZWZpbmVkLlxuICAgKi9cbiAgdmFyIFJFU0VSVkVEX1NQRUNfS0VZUyA9IHtcbiAgICBkaXNwbGF5TmFtZTogZnVuY3Rpb24oQ29uc3RydWN0b3IsIGRpc3BsYXlOYW1lKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIH0sXG4gICAgbWl4aW5zOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgbWl4aW5zKSB7XG4gICAgICBpZiAobWl4aW5zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWl4aW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIG1peGluc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgY2hpbGRDb250ZXh0VHlwZXMpIHtcbiAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyAgIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgY2hpbGRDb250ZXh0VHlwZXMsICdjaGlsZENvbnRleHQnKTtcbiAgICAgIC8vIH1cbiAgICAgIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzID0gX2Fzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzLFxuICAgICAgICBjaGlsZENvbnRleHRUeXBlc1xuICAgICAgKTtcbiAgICB9LFxuICAgIGNvbnRleHRUeXBlczogZnVuY3Rpb24oQ29uc3RydWN0b3IsIGNvbnRleHRUeXBlcykge1xuICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vICAgdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCBjb250ZXh0VHlwZXMsICdjb250ZXh0Jyk7XG4gICAgICAvLyB9XG4gICAgICBDb25zdHJ1Y3Rvci5jb250ZXh0VHlwZXMgPSBfYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgQ29uc3RydWN0b3IuY29udGV4dFR5cGVzLFxuICAgICAgICBjb250ZXh0VHlwZXNcbiAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTcGVjaWFsIGNhc2UgZ2V0RGVmYXVsdFByb3BzIHdoaWNoIHNob3VsZCBtb3ZlIGludG8gc3RhdGljcyBidXQgcmVxdWlyZXNcbiAgICAgKiBhdXRvbWF0aWMgbWVyZ2luZy5cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBnZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzID0gY3JlYXRlTWVyZ2VkUmVzdWx0RnVuY3Rpb24oXG4gICAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzLFxuICAgICAgICAgIGdldERlZmF1bHRQcm9wc1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzID0gZ2V0RGVmYXVsdFByb3BzO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcFR5cGVzOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgcHJvcFR5cGVzKSB7XG4gICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gICB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIHByb3BUeXBlcywgJ3Byb3AnKTtcbiAgICAgIC8vIH1cbiAgICAgIENvbnN0cnVjdG9yLnByb3BUeXBlcyA9IF9hc3NpZ24oe30sIENvbnN0cnVjdG9yLnByb3BUeXBlcywgcHJvcFR5cGVzKTtcbiAgICB9LFxuICAgIHN0YXRpY3M6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBzdGF0aWNzKSB7XG4gICAgICBtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3RhdGljcyk7XG4gICAgfSxcbiAgICBhdXRvYmluZDogZnVuY3Rpb24oKSB7fVxuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgdHlwZURlZiwgbG9jYXRpb24pIHtcbiAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiB0eXBlRGVmKSB7XG4gICAgICAvLyBpZiAodHlwZURlZi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgIC8vICAgLy8gdXNlIGEgd2FybmluZyBpbnN0ZWFkIG9mIGFuIF9pbnZhcmlhbnQgc28gY29tcG9uZW50c1xuICAgICAgLy8gICAvLyBkb24ndCBzaG93IHVwIGluIHByb2QgYnV0IG9ubHkgaW4gX19ERVZfX1xuICAgICAgLy8gICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gICAvLyAgIHdhcm5pbmcoXG4gICAgICAvLyAgIC8vICAgICB0eXBlb2YgdHlwZURlZltwcm9wTmFtZV0gPT09ICdmdW5jdGlvbicsXG4gICAgICAvLyAgIC8vICAgICAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICtcbiAgICAgIC8vICAgLy8gICAgICAgJ1JlYWN0LlByb3BUeXBlcy4nLFxuICAgICAgLy8gICAvLyAgICAgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q2xhc3MnLFxuICAgICAgLy8gICAvLyAgICAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dLFxuICAgICAgLy8gICAvLyAgICAgcHJvcE5hbWVcbiAgICAgIC8vICAgLy8gICApO1xuICAgICAgLy8gICAvLyB9XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVNZXRob2RPdmVycmlkZShpc0FscmVhZHlEZWZpbmVkLCBuYW1lKSB7XG4gICAgdmFyIHNwZWNQb2xpY3kgPSBSZWFjdENsYXNzSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpXG4gICAgICA/IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV1cbiAgICAgIDogbnVsbDtcblxuICAgIC8vIERpc2FsbG93IG92ZXJyaWRpbmcgb2YgYmFzZSBjbGFzcyBtZXRob2RzIHVubGVzcyBleHBsaWNpdGx5IGFsbG93ZWQuXG4gICAgaWYgKFJlYWN0Q2xhc3NNaXhpbi5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgLy8gX2ludmFyaWFudChcbiAgICAgIC8vICAgc3BlY1BvbGljeSA9PT0gJ09WRVJSSURFX0JBU0UnLFxuICAgICAgLy8gICAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIG92ZXJyaWRlICcgK1xuICAgICAgLy8gICAgICdgJXNgIGZyb20geW91ciBjbGFzcyBzcGVjaWZpY2F0aW9uLiBFbnN1cmUgdGhhdCB5b3VyIG1ldGhvZCBuYW1lcyAnICtcbiAgICAgIC8vICAgICAnZG8gbm90IG92ZXJsYXAgd2l0aCBSZWFjdCBtZXRob2RzLicsXG4gICAgICAvLyAgIG5hbWVcbiAgICAgIC8vICk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWxsb3cgZGVmaW5pbmcgbWV0aG9kcyBtb3JlIHRoYW4gb25jZSB1bmxlc3MgZXhwbGljaXRseSBhbGxvd2VkLlxuICAgIGlmIChpc0FscmVhZHlEZWZpbmVkKSB7XG4gICAgICAvLyBfaW52YXJpYW50KFxuICAgICAgLy8gICBzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTlknIHx8IHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuICAgICAgLy8gICAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSAnICtcbiAgICAgIC8vICAgICAnYCVzYCBvbiB5b3VyIGNvbXBvbmVudCBtb3JlIHRoYW4gb25jZS4gVGhpcyBjb25mbGljdCBtYXkgYmUgZHVlICcgK1xuICAgICAgLy8gICAgICd0byBhIG1peGluLicsXG4gICAgICAvLyAgIG5hbWVcbiAgICAgIC8vICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1peGluIGhlbHBlciB3aGljaCBoYW5kbGVzIHBvbGljeSB2YWxpZGF0aW9uIGFuZCByZXNlcnZlZFxuICAgKiBzcGVjaWZpY2F0aW9uIGtleXMgd2hlbiBidWlsZGluZyBSZWFjdCBjbGFzc2VzLlxuICAgKi9cbiAgZnVuY3Rpb24gbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHNwZWMpIHtcbiAgICBpZiAoIXNwZWMpIHtcbiAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyAgIHZhciB0eXBlb2ZTcGVjID0gdHlwZW9mIHNwZWM7XG4gICAgICAvLyAgIHZhciBpc01peGluVmFsaWQgPSB0eXBlb2ZTcGVjID09PSAnb2JqZWN0JyAmJiBzcGVjICE9PSBudWxsO1xuICAgICAgLy9cbiAgICAgIC8vICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vICAgICB3YXJuaW5nKFxuICAgICAgLy8gICAgICAgaXNNaXhpblZhbGlkLFxuICAgICAgLy8gICAgICAgXCIlczogWW91J3JlIGF0dGVtcHRpbmcgdG8gaW5jbHVkZSBhIG1peGluIHRoYXQgaXMgZWl0aGVyIG51bGwgXCIgK1xuICAgICAgLy8gICAgICAgICAnb3Igbm90IGFuIG9iamVjdC4gQ2hlY2sgdGhlIG1peGlucyBpbmNsdWRlZCBieSB0aGUgY29tcG9uZW50LCAnICtcbiAgICAgIC8vICAgICAgICAgJ2FzIHdlbGwgYXMgYW55IG1peGlucyB0aGV5IGluY2x1ZGUgdGhlbXNlbHZlcy4gJyArXG4gICAgICAvLyAgICAgICAgICdFeHBlY3RlZCBvYmplY3QgYnV0IGdvdCAlcy4nLFxuICAgICAgLy8gICAgICAgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q2xhc3MnLFxuICAgICAgLy8gICAgICAgc3BlYyA9PT0gbnVsbCA/IG51bGwgOiB0eXBlb2ZTcGVjXG4gICAgICAvLyAgICAgKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gX2ludmFyaWFudChcbiAgICAvLyAgIHR5cGVvZiBzcGVjICE9PSAnZnVuY3Rpb24nLFxuICAgIC8vICAgXCJSZWFjdENsYXNzOiBZb3UncmUgYXR0ZW1wdGluZyB0byBcIiArXG4gICAgLy8gICAgICd1c2UgYSBjb21wb25lbnQgY2xhc3Mgb3IgZnVuY3Rpb24gYXMgYSBtaXhpbi4gSW5zdGVhZCwganVzdCB1c2UgYSAnICtcbiAgICAvLyAgICAgJ3JlZ3VsYXIgb2JqZWN0LidcbiAgICAvLyApO1xuICAgIC8vIF9pbnZhcmlhbnQoXG4gICAgLy8gICAhaXNWYWxpZEVsZW1lbnQoc3BlYyksXG4gICAgLy8gICBcIlJlYWN0Q2xhc3M6IFlvdSdyZSBhdHRlbXB0aW5nIHRvIFwiICtcbiAgICAvLyAgICAgJ3VzZSBhIGNvbXBvbmVudCBhcyBhIG1peGluLiBJbnN0ZWFkLCBqdXN0IHVzZSBhIHJlZ3VsYXIgb2JqZWN0LidcbiAgICAvLyApO1xuXG4gICAgdmFyIHByb3RvID0gQ29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIHZhciBhdXRvQmluZFBhaXJzID0gcHJvdG8uX19yZWFjdEF1dG9CaW5kUGFpcnM7XG5cbiAgICAvLyBCeSBoYW5kbGluZyBtaXhpbnMgYmVmb3JlIGFueSBvdGhlciBwcm9wZXJ0aWVzLCB3ZSBlbnN1cmUgdGhlIHNhbWVcbiAgICAvLyBjaGFpbmluZyBvcmRlciBpcyBhcHBsaWVkIHRvIG1ldGhvZHMgd2l0aCBERUZJTkVfTUFOWSBwb2xpY3ksIHdoZXRoZXJcbiAgICAvLyBtaXhpbnMgYXJlIGxpc3RlZCBiZWZvcmUgb3IgYWZ0ZXIgdGhlc2UgbWV0aG9kcyBpbiB0aGUgc3BlYy5cbiAgICBpZiAoc3BlYy5oYXNPd25Qcm9wZXJ0eShNSVhJTlNfS0VZKSkge1xuICAgICAgUkVTRVJWRURfU1BFQ19LRVlTLm1peGlucyhDb25zdHJ1Y3Rvciwgc3BlYy5taXhpbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3BlYykge1xuICAgICAgaWYgKCFzcGVjLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gTUlYSU5TX0tFWSkge1xuICAgICAgICAvLyBXZSBoYXZlIGFscmVhZHkgaGFuZGxlZCBtaXhpbnMgaW4gYSBzcGVjaWFsIGNhc2UgYWJvdmUuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcGVydHkgPSBzcGVjW25hbWVdO1xuICAgICAgdmFyIGlzQWxyZWFkeURlZmluZWQgPSBwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICAgIHZhbGlkYXRlTWV0aG9kT3ZlcnJpZGUoaXNBbHJlYWR5RGVmaW5lZCwgbmFtZSk7XG5cbiAgICAgIGlmIChSRVNFUlZFRF9TUEVDX0tFWVMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgUkVTRVJWRURfU1BFQ19LRVlTW25hbWVdKENvbnN0cnVjdG9yLCBwcm9wZXJ0eSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXR1cCBtZXRob2RzIG9uIHByb3RvdHlwZTpcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBtZW1iZXIgbWV0aG9kcyBzaG91bGQgbm90IGJlIGF1dG9tYXRpY2FsbHkgYm91bmQ6XG4gICAgICAgIC8vIDEuIEV4cGVjdGVkIFJlYWN0Q2xhc3MgbWV0aG9kcyAoaW4gdGhlIFwiaW50ZXJmYWNlXCIpLlxuICAgICAgICAvLyAyLiBPdmVycmlkZGVuIG1ldGhvZHMgKHRoYXQgd2VyZSBtaXhlZCBpbikuXG4gICAgICAgIHZhciBpc1JlYWN0Q2xhc3NNZXRob2QgPSBSZWFjdENsYXNzSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpO1xuICAgICAgICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgdmFyIHNob3VsZEF1dG9CaW5kID1cbiAgICAgICAgICBpc0Z1bmN0aW9uICYmXG4gICAgICAgICAgIWlzUmVhY3RDbGFzc01ldGhvZCAmJlxuICAgICAgICAgICFpc0FscmVhZHlEZWZpbmVkICYmXG4gICAgICAgICAgc3BlYy5hdXRvYmluZCAhPT0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNob3VsZEF1dG9CaW5kKSB7XG4gICAgICAgICAgYXV0b0JpbmRQYWlycy5wdXNoKG5hbWUsIHByb3BlcnR5KTtcbiAgICAgICAgICBwcm90b1tuYW1lXSA9IHByb3BlcnR5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc0FscmVhZHlEZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgc3BlY1BvbGljeSA9IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV07XG5cbiAgICAgICAgICAgIC8vIFRoZXNlIGNhc2VzIHNob3VsZCBhbHJlYWR5IGJlIGNhdWdodCBieSB2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlLlxuICAgICAgICAgICAgLy8gX2ludmFyaWFudChcbiAgICAgICAgICAgIC8vICAgaXNSZWFjdENsYXNzTWV0aG9kICYmXG4gICAgICAgICAgICAvLyAgICAgKHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnIHx8XG4gICAgICAgICAgICAvLyAgICAgICBzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTlknKSxcbiAgICAgICAgICAgIC8vICAgJ1JlYWN0Q2xhc3M6IFVuZXhwZWN0ZWQgc3BlYyBwb2xpY3kgJXMgZm9yIGtleSAlcyAnICtcbiAgICAgICAgICAgIC8vICAgICAnd2hlbiBtaXhpbmcgaW4gY29tcG9uZW50IHNwZWNzLicsXG4gICAgICAgICAgICAvLyAgIHNwZWNQb2xpY3ksXG4gICAgICAgICAgICAvLyAgIG5hbWVcbiAgICAgICAgICAgIC8vICk7XG5cbiAgICAgICAgICAgIC8vIEZvciBtZXRob2RzIHdoaWNoIGFyZSBkZWZpbmVkIG1vcmUgdGhhbiBvbmNlLCBjYWxsIHRoZSBleGlzdGluZ1xuICAgICAgICAgICAgLy8gbWV0aG9kcyBiZWZvcmUgY2FsbGluZyB0aGUgbmV3IHByb3BlcnR5LCBtZXJnaW5nIGlmIGFwcHJvcHJpYXRlLlxuICAgICAgICAgICAgaWYgKHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnKSB7XG4gICAgICAgICAgICAgIHByb3RvW25hbWVdID0gY3JlYXRlTWVyZ2VkUmVzdWx0RnVuY3Rpb24ocHJvdG9bbmFtZV0sIHByb3BlcnR5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZJykge1xuICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihwcm90b1tuYW1lXSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm90b1tuYW1lXSA9IHByb3BlcnR5O1xuICAgICAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vICAgLy8gQWRkIHZlcmJvc2UgZGlzcGxheU5hbWUgdG8gdGhlIGZ1bmN0aW9uLCB3aGljaCBoZWxwcyB3aGVuIGxvb2tpbmdcbiAgICAgICAgICAgIC8vICAgLy8gYXQgcHJvZmlsaW5nIHRvb2xzLlxuICAgICAgICAgICAgLy8gICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nICYmIHNwZWMuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICAgIC8vICAgICBwcm90b1tuYW1lXS5kaXNwbGF5TmFtZSA9IHNwZWMuZGlzcGxheU5hbWUgKyAnXycgKyBuYW1lO1xuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWl4U3RhdGljU3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHN0YXRpY3MpIHtcbiAgICBpZiAoIXN0YXRpY3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yICh2YXIgbmFtZSBpbiBzdGF0aWNzKSB7XG4gICAgICB2YXIgcHJvcGVydHkgPSBzdGF0aWNzW25hbWVdO1xuICAgICAgaWYgKCFzdGF0aWNzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNSZXNlcnZlZCA9IG5hbWUgaW4gUkVTRVJWRURfU1BFQ19LRVlTO1xuICAgICAgLy8gX2ludmFyaWFudChcbiAgICAgIC8vICAgIWlzUmVzZXJ2ZWQsXG4gICAgICAvLyAgICdSZWFjdENsYXNzOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gZGVmaW5lIGEgcmVzZXJ2ZWQgJyArXG4gICAgICAvLyAgICAgJ3Byb3BlcnR5LCBgJXNgLCB0aGF0IHNob3VsZG5cXCd0IGJlIG9uIHRoZSBcInN0YXRpY3NcIiBrZXkuIERlZmluZSBpdCAnICtcbiAgICAgIC8vICAgICAnYXMgYW4gaW5zdGFuY2UgcHJvcGVydHkgaW5zdGVhZDsgaXQgd2lsbCBzdGlsbCBiZSBhY2Nlc3NpYmxlIG9uIHRoZSAnICtcbiAgICAgIC8vICAgICAnY29uc3RydWN0b3IuJyxcbiAgICAgIC8vICAgbmFtZVxuICAgICAgLy8gKTtcblxuICAgICAgdmFyIGlzSW5oZXJpdGVkID0gbmFtZSBpbiBDb25zdHJ1Y3RvcjtcbiAgICAgIC8vIF9pbnZhcmlhbnQoXG4gICAgICAvLyAgICFpc0luaGVyaXRlZCxcbiAgICAgIC8vICAgJ1JlYWN0Q2xhc3M6IFlvdSBhcmUgYXR0ZW1wdGluZyB0byBkZWZpbmUgJyArXG4gICAgICAvLyAgICAgJ2Alc2Agb24geW91ciBjb21wb25lbnQgbW9yZSB0aGFuIG9uY2UuIFRoaXMgY29uZmxpY3QgbWF5IGJlICcgK1xuICAgICAgLy8gICAgICdkdWUgdG8gYSBtaXhpbi4nLFxuICAgICAgLy8gICBuYW1lXG4gICAgICAvLyApO1xuICAgICAgQ29uc3RydWN0b3JbbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgdHdvIG9iamVjdHMsIGJ1dCB0aHJvdyBpZiBib3RoIGNvbnRhaW4gdGhlIHNhbWUga2V5LlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb25lIFRoZSBmaXJzdCBvYmplY3QsIHdoaWNoIGlzIG11dGF0ZWQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0d28gVGhlIHNlY29uZCBvYmplY3RcbiAgICogQHJldHVybiB7b2JqZWN0fSBvbmUgYWZ0ZXIgaXQgaGFzIGJlZW4gbXV0YXRlZCB0byBjb250YWluIGV2ZXJ5dGhpbmcgaW4gdHdvLlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cyhvbmUsIHR3bykge1xuICAgIC8vIF9pbnZhcmlhbnQoXG4gICAgLy8gICBvbmUgJiYgdHdvICYmIHR5cGVvZiBvbmUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0d28gPT09ICdvYmplY3QnLFxuICAgIC8vICAgJ21lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoKTogQ2Fubm90IG1lcmdlIG5vbi1vYmplY3RzLidcbiAgICAvLyApO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHR3bykge1xuICAgICAgaWYgKHR3by5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIF9pbnZhcmlhbnQoXG4gICAgICAgIC8vICAgb25lW2tleV0gPT09IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gICAnbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cygpOiAnICtcbiAgICAgICAgLy8gICAgICdUcmllZCB0byBtZXJnZSB0d28gb2JqZWN0cyB3aXRoIHRoZSBzYW1lIGtleTogYCVzYC4gVGhpcyBjb25mbGljdCAnICtcbiAgICAgICAgLy8gICAgICdtYXkgYmUgZHVlIHRvIGEgbWl4aW47IGluIHBhcnRpY3VsYXIsIHRoaXMgbWF5IGJlIGNhdXNlZCBieSB0d28gJyArXG4gICAgICAgIC8vICAgICAnZ2V0SW5pdGlhbFN0YXRlKCkgb3IgZ2V0RGVmYXVsdFByb3BzKCkgbWV0aG9kcyByZXR1cm5pbmcgb2JqZWN0cyAnICtcbiAgICAgICAgLy8gICAgICd3aXRoIGNsYXNoaW5nIGtleXMuJyxcbiAgICAgICAgLy8gICBrZXlcbiAgICAgICAgLy8gKTtcbiAgICAgICAgb25lW2tleV0gPSB0d29ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIHR3byBmdW5jdGlvbnMgYW5kIG1lcmdlcyB0aGVpciByZXR1cm4gdmFsdWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmUgRnVuY3Rpb24gdG8gaW52b2tlIGZpcnN0LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0d28gRnVuY3Rpb24gdG8gaW52b2tlIHNlY29uZC5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0aGUgdHdvIGFyZ3VtZW50IGZ1bmN0aW9ucy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKG9uZSwgdHdvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZFJlc3VsdCgpIHtcbiAgICAgIHZhciBhID0gb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB2YXIgYiA9IHR3by5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKGEgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYjtcbiAgICAgIH0gZWxzZSBpZiAoYiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuICAgICAgdmFyIGMgPSB7fTtcbiAgICAgIG1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoYywgYSk7XG4gICAgICBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKGMsIGIpO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIHR3byBmdW5jdGlvbnMgYW5kIGlnbm9yZXMgdGhlaXIgcmV0dXJuIHZhbGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmUgRnVuY3Rpb24gdG8gaW52b2tlIGZpcnN0LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0d28gRnVuY3Rpb24gdG8gaW52b2tlIHNlY29uZC5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0aGUgdHdvIGFyZ3VtZW50IGZ1bmN0aW9ucy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbihvbmUsIHR3bykge1xuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICBvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHR3by5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgYSBtZXRob2QgdG8gdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBDb21wb25lbnQgd2hvc2UgbWV0aG9kIGlzIGdvaW5nIHRvIGJlIGJvdW5kLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2QgTWV0aG9kIHRvIGJlIGJvdW5kLlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGJvdW5kIG1ldGhvZC5cbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRBdXRvQmluZE1ldGhvZChjb21wb25lbnQsIG1ldGhvZCkge1xuICAgIHZhciBib3VuZE1ldGhvZCA9IG1ldGhvZC5iaW5kKGNvbXBvbmVudCk7XG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAgIGJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZENvbnRleHQgPSBjb21wb25lbnQ7XG4gICAgLy8gICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRNZXRob2QgPSBtZXRob2Q7XG4gICAgLy8gICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRBcmd1bWVudHMgPSBudWxsO1xuICAgIC8vICAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IuZGlzcGxheU5hbWU7XG4gICAgLy8gICB2YXIgX2JpbmQgPSBib3VuZE1ldGhvZC5iaW5kO1xuICAgIC8vICAgYm91bmRNZXRob2QuYmluZCA9IGZ1bmN0aW9uKG5ld1RoaXMpIHtcbiAgICAvLyAgICAgZm9yIChcbiAgICAvLyAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgLy8gICAgICAgICBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLFxuICAgIC8vICAgICAgICAgX2tleSA9IDE7XG4gICAgLy8gICAgICAgX2tleSA8IF9sZW47XG4gICAgLy8gICAgICAgX2tleSsrXG4gICAgLy8gICAgICkge1xuICAgIC8vICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgLy8gVXNlciBpcyB0cnlpbmcgdG8gYmluZCgpIGFuIGF1dG9ib3VuZCBtZXRob2Q7IHdlIGVmZmVjdGl2ZWx5IHdpbGxcbiAgICAvLyAgICAgLy8gaWdub3JlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB0aGF0IHRoZSB1c2VyIGlzIHRyeWluZyB0byB1c2UsIHNvXG4gICAgLy8gICAgIC8vIGxldCdzIHdhcm4uXG4gICAgLy8gICAgIGlmIChuZXdUaGlzICE9PSBjb21wb25lbnQgJiYgbmV3VGhpcyAhPT0gbnVsbCkge1xuICAgIC8vICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gICAgICAgICB3YXJuaW5nKFxuICAgIC8vICAgICAgICAgICBmYWxzZSxcbiAgICAvLyAgICAgICAgICAgJ2JpbmQoKTogUmVhY3QgY29tcG9uZW50IG1ldGhvZHMgbWF5IG9ubHkgYmUgYm91bmQgdG8gdGhlICcgK1xuICAgIC8vICAgICAgICAgICAgICdjb21wb25lbnQgaW5zdGFuY2UuIFNlZSAlcycsXG4gICAgLy8gICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICAvLyAgICAgICAgICk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9IGVsc2UgaWYgKCFhcmdzLmxlbmd0aCkge1xuICAgIC8vICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gICAgICAgICB3YXJuaW5nKFxuICAgIC8vICAgICAgICAgICBmYWxzZSxcbiAgICAvLyAgICAgICAgICAgJ2JpbmQoKTogWW91IGFyZSBiaW5kaW5nIGEgY29tcG9uZW50IG1ldGhvZCB0byB0aGUgY29tcG9uZW50LiAnICtcbiAgICAvLyAgICAgICAgICAgICAnUmVhY3QgZG9lcyB0aGlzIGZvciB5b3UgYXV0b21hdGljYWxseSBpbiBhIGhpZ2gtcGVyZm9ybWFuY2UgJyArXG4gICAgLy8gICAgICAgICAgICAgJ3dheSwgc28geW91IGNhbiBzYWZlbHkgcmVtb3ZlIHRoaXMgY2FsbC4gU2VlICVzJyxcbiAgICAvLyAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICAgcmV0dXJuIGJvdW5kTWV0aG9kO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHZhciByZWJvdW5kTWV0aG9kID0gX2JpbmQuYXBwbHkoYm91bmRNZXRob2QsIGFyZ3VtZW50cyk7XG4gICAgLy8gICAgIHJlYm91bmRNZXRob2QuX19yZWFjdEJvdW5kQ29udGV4dCA9IGNvbXBvbmVudDtcbiAgICAvLyAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRNZXRob2QgPSBtZXRob2Q7XG4gICAgLy8gICAgIHJlYm91bmRNZXRob2QuX19yZWFjdEJvdW5kQXJndW1lbnRzID0gYXJncztcbiAgICAvLyAgICAgcmV0dXJuIHJlYm91bmRNZXRob2Q7XG4gICAgLy8gICB9O1xuICAgIC8vIH1cbiAgICByZXR1cm4gYm91bmRNZXRob2Q7XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgYWxsIGF1dG8tYm91bmQgbWV0aG9kcyBpbiBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBDb21wb25lbnQgd2hvc2UgbWV0aG9kIGlzIGdvaW5nIHRvIGJlIGJvdW5kLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZEF1dG9CaW5kTWV0aG9kcyhjb21wb25lbnQpIHtcbiAgICB2YXIgcGFpcnMgPSBjb21wb25lbnQuX19yZWFjdEF1dG9CaW5kUGFpcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgdmFyIGF1dG9CaW5kS2V5ID0gcGFpcnNbaV07XG4gICAgICB2YXIgbWV0aG9kID0gcGFpcnNbaSArIDFdO1xuICAgICAgY29tcG9uZW50W2F1dG9CaW5kS2V5XSA9IGJpbmRBdXRvQmluZE1ldGhvZChjb21wb25lbnQsIG1ldGhvZCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIElzTW91bnRlZFByZU1peGluID0ge1xuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX19pc01vdW50ZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICB2YXIgSXNNb3VudGVkUG9zdE1peGluID0ge1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBtb3JlIHRvIHRoZSBSZWFjdENsYXNzIGJhc2UgY2xhc3MuIFRoZXNlIGFyZSBhbGwgbGVnYWN5IGZlYXR1cmVzIGFuZFxuICAgKiB0aGVyZWZvcmUgbm90IGFscmVhZHkgcGFydCBvZiB0aGUgbW9kZXJuIFJlYWN0Q29tcG9uZW50LlxuICAgKi9cbiAgdmFyIFJlYWN0Q2xhc3NNaXhpbiA9IHtcbiAgICAvKipcbiAgICAgKiBUT0RPOiBUaGlzIHdpbGwgYmUgZGVwcmVjYXRlZCBiZWNhdXNlIHN0YXRlIHNob3VsZCBhbHdheXMga2VlcCBhIGNvbnNpc3RlbnRcbiAgICAgKiB0eXBlIHNpZ25hdHVyZSBhbmQgdGhlIG9ubHkgdXNlIGNhc2UgZm9yIHRoaXMsIGlzIHRvIGF2b2lkIHRoYXQuXG4gICAgICovXG4gICAgcmVwbGFjZVN0YXRlOiBmdW5jdGlvbihuZXdTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlUmVwbGFjZVN0YXRlKHRoaXMsIG5ld1N0YXRlLCBjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQGZpbmFsXG4gICAgICovXG4gICAgaXNNb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyAgIHdhcm5pbmcoXG4gICAgICAvLyAgICAgdGhpcy5fX2RpZFdhcm5Jc01vdW50ZWQsXG4gICAgICAvLyAgICAgJyVzOiBpc01vdW50ZWQgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwICcgK1xuICAgICAgLy8gICAgICAgJ3N1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gY29tcG9uZW50V2lsbFVubW91bnQgdG8gJyArXG4gICAgICAvLyAgICAgICAncHJldmVudCBtZW1vcnkgbGVha3MuJyxcbiAgICAgIC8vICAgICAodGhpcy5jb25zdHJ1Y3RvciAmJiB0aGlzLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lKSB8fFxuICAgICAgLy8gICAgICAgdGhpcy5uYW1lIHx8XG4gICAgICAvLyAgICAgICAnQ29tcG9uZW50J1xuICAgICAgLy8gICApO1xuICAgICAgLy8gICB0aGlzLl9fZGlkV2FybklzTW91bnRlZCA9IHRydWU7XG4gICAgICAvLyB9XG4gICAgICByZXR1cm4gISF0aGlzLl9faXNNb3VudGVkO1xuICAgIH1cbiAgfTtcblxuICB2YXIgUmVhY3RDbGFzc0NvbXBvbmVudCA9IGZ1bmN0aW9uKCkge307XG4gIF9hc3NpZ24oXG4gICAgUmVhY3RDbGFzc0NvbXBvbmVudC5wcm90b3R5cGUsXG4gICAgUmVhY3RDb21wb25lbnQucHJvdG90eXBlLFxuICAgIFJlYWN0Q2xhc3NNaXhpblxuICApO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29tcG9zaXRlIGNvbXBvbmVudCBjbGFzcyBnaXZlbiBhIGNsYXNzIHNwZWNpZmljYXRpb24uXG4gICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jcmVhdGVjbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3BlYyBDbGFzcyBzcGVjaWZpY2F0aW9uICh3aGljaCBtdXN0IGRlZmluZSBgcmVuZGVyYCkuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBDb21wb25lbnQgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKHNwZWMpIHtcbiAgICAvLyBUbyBrZWVwIG91ciB3YXJuaW5ncyBtb3JlIHVuZGVyc3RhbmRhYmxlLCB3ZSdsbCB1c2UgYSBsaXR0bGUgaGFjayBoZXJlIHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgQ29uc3RydWN0b3IubmFtZSAhPT0gJ0NvbnN0cnVjdG9yJy4gVGhpcyBtYWtlcyBzdXJlIHdlIGRvbid0XG4gICAgLy8gdW5uZWNlc3NhcmlseSBpZGVudGlmeSBhIGNsYXNzIHdpdGhvdXQgZGlzcGxheU5hbWUgYXMgJ0NvbnN0cnVjdG9yJy5cbiAgICB2YXIgQ29uc3RydWN0b3IgPSBpZGVudGl0eShmdW5jdGlvbihwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgICAgLy8gVGhpcyBjb25zdHJ1Y3RvciBnZXRzIG92ZXJyaWRkZW4gYnkgbW9ja3MuIFRoZSBhcmd1bWVudCBpcyB1c2VkXG4gICAgICAvLyBieSBtb2NrcyB0byBhc3NlcnQgb24gd2hhdCBnZXRzIG1vdW50ZWQuXG5cbiAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyAgIHdhcm5pbmcoXG4gICAgICAvLyAgICAgdGhpcyBpbnN0YW5jZW9mIENvbnN0cnVjdG9yLFxuICAgICAgLy8gICAgICdTb21ldGhpbmcgaXMgY2FsbGluZyBhIFJlYWN0IGNvbXBvbmVudCBkaXJlY3RseS4gVXNlIGEgZmFjdG9yeSBvciAnICtcbiAgICAgIC8vICAgICAgICdKU1ggaW5zdGVhZC4gU2VlOiBodHRwczovL2ZiLm1lL3JlYWN0LWxlZ2FjeWZhY3RvcnknXG4gICAgICAvLyAgICk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIFdpcmUgdXAgYXV0by1iaW5kaW5nXG4gICAgICBpZiAodGhpcy5fX3JlYWN0QXV0b0JpbmRQYWlycy5sZW5ndGgpIHtcbiAgICAgICAgYmluZEF1dG9CaW5kTWV0aG9kcyh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XG5cbiAgICAgIC8vIFJlYWN0Q2xhc3NlcyBkb2Vzbid0IGhhdmUgY29uc3RydWN0b3JzLiBJbnN0ZWFkLCB0aGV5IHVzZSB0aGVcbiAgICAgIC8vIGdldEluaXRpYWxTdGF0ZSBhbmQgY29tcG9uZW50V2lsbE1vdW50IG1ldGhvZHMgZm9yIGluaXRpYWxpemF0aW9uLlxuXG4gICAgICB2YXIgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUgPyB0aGlzLmdldEluaXRpYWxTdGF0ZSgpIDogbnVsbDtcbiAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyAgIC8vIFdlIGFsbG93IGF1dG8tbW9ja3MgdG8gcHJvY2VlZCBhcyBpZiB0aGV5J3JlIHJldHVybmluZyBudWxsLlxuICAgICAgLy8gICBpZiAoXG4gICAgICAvLyAgICAgaW5pdGlhbFN0YXRlID09PSB1bmRlZmluZWQgJiZcbiAgICAgIC8vICAgICB0aGlzLmdldEluaXRpYWxTdGF0ZS5faXNNb2NrRnVuY3Rpb25cbiAgICAgIC8vICAgKSB7XG4gICAgICAvLyAgICAgLy8gVGhpcyBpcyBwcm9iYWJseSBiYWQgcHJhY3RpY2UuIENvbnNpZGVyIHdhcm5pbmcgaGVyZSBhbmRcbiAgICAgIC8vICAgICAvLyBkZXByZWNhdGluZyB0aGlzIGNvbnZlbmllbmNlLlxuICAgICAgLy8gICAgIGluaXRpYWxTdGF0ZSA9IG51bGw7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICAgIC8vIF9pbnZhcmlhbnQoXG4gICAgICAvLyAgIHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGluaXRpYWxTdGF0ZSksXG4gICAgICAvLyAgICclcy5nZXRJbml0aWFsU3RhdGUoKTogbXVzdCByZXR1cm4gYW4gb2JqZWN0IG9yIG51bGwnLFxuICAgICAgLy8gICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCAnUmVhY3RDb21wb3NpdGVDb21wb25lbnQnXG4gICAgICAvLyApO1xuXG4gICAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgIH0pO1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IG5ldyBSZWFjdENsYXNzQ29tcG9uZW50KCk7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlLl9fcmVhY3RBdXRvQmluZFBhaXJzID0gW107XG5cbiAgICBpbmplY3RlZE1peGlucy5mb3JFYWNoKG1peFNwZWNJbnRvQ29tcG9uZW50LmJpbmQobnVsbCwgQ29uc3RydWN0b3IpKTtcblxuICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBJc01vdW50ZWRQcmVNaXhpbik7XG4gICAgbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHNwZWMpO1xuICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBJc01vdW50ZWRQb3N0TWl4aW4pO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgZGVmYXVsdFByb3BzIHByb3BlcnR5IGFmdGVyIGFsbCBtaXhpbnMgaGF2ZSBiZWVuIG1lcmdlZC5cbiAgICBpZiAoQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMgPSBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICAgLy8gVGhpcyBpcyBhIHRhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSB1c2Ugb2YgdGhlc2UgbWV0aG9kIG5hbWVzIGlzIG9rLFxuICAgIC8vICAgLy8gc2luY2UgaXQncyB1c2VkIHdpdGggY3JlYXRlQ2xhc3MuIElmIGl0J3Mgbm90LCB0aGVuIGl0J3MgbGlrZWx5IGFcbiAgICAvLyAgIC8vIG1pc3Rha2Ugc28gd2UnbGwgd2FybiB5b3UgdG8gdXNlIHRoZSBzdGF0aWMgcHJvcGVydHksIHByb3BlcnR5XG4gICAgLy8gICAvLyBpbml0aWFsaXplciBvciBjb25zdHJ1Y3RvciByZXNwZWN0aXZlbHkuXG4gICAgLy8gICBpZiAoQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKSB7XG4gICAgLy8gICAgIENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA9IHt9O1xuICAgIC8vICAgfVxuICAgIC8vICAgaWYgKENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU3RhdGUpIHtcbiAgICAvLyAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlLmdldEluaXRpYWxTdGF0ZS5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA9IHt9O1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIC8vIF9pbnZhcmlhbnQoXG4gICAgLy8gICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVuZGVyLFxuICAgIC8vICAgJ2NyZWF0ZUNsYXNzKC4uLik6IENsYXNzIHNwZWNpZmljYXRpb24gbXVzdCBpbXBsZW1lbnQgYSBgcmVuZGVyYCBtZXRob2QuJ1xuICAgIC8vICk7XG5cbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICAgd2FybmluZyhcbiAgICAvLyAgICAgIUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb21wb25lbnRTaG91bGRVcGRhdGUsXG4gICAgLy8gICAgICclcyBoYXMgYSBtZXRob2QgY2FsbGVkICcgK1xuICAgIC8vICAgICAgICdjb21wb25lbnRTaG91bGRVcGRhdGUoKS4gRGlkIHlvdSBtZWFuIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpPyAnICtcbiAgICAvLyAgICAgICAnVGhlIG5hbWUgaXMgcGhyYXNlZCBhcyBhIHF1ZXN0aW9uIGJlY2F1c2UgdGhlIGZ1bmN0aW9uIGlzICcgK1xuICAgIC8vICAgICAgICdleHBlY3RlZCB0byByZXR1cm4gYSB2YWx1ZS4nLFxuICAgIC8vICAgICBzcGVjLmRpc3BsYXlOYW1lIHx8ICdBIGNvbXBvbmVudCdcbiAgICAvLyAgICk7XG4gICAgLy8gICB3YXJuaW5nKFxuICAgIC8vICAgICAhQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMsXG4gICAgLy8gICAgICclcyBoYXMgYSBtZXRob2QgY2FsbGVkICcgK1xuICAgIC8vICAgICAgICdjb21wb25lbnRXaWxsUmVjaWV2ZVByb3BzKCkuIERpZCB5b3UgbWVhbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCk/JyxcbiAgICAvLyAgICAgc3BlYy5kaXNwbGF5TmFtZSB8fCAnQSBjb21wb25lbnQnXG4gICAgLy8gICApO1xuICAgIC8vIH1cblxuICAgIC8vIFJlZHVjZSB0aW1lIHNwZW50IGRvaW5nIGxvb2t1cHMgYnkgc2V0dGluZyB0aGVzZSBvbiB0aGUgcHJvdG90eXBlLlxuICAgIGZvciAodmFyIG1ldGhvZE5hbWUgaW4gUmVhY3RDbGFzc0ludGVyZmFjZSkge1xuICAgICAgaWYgKCFDb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlQ2xhc3M7XG59XG4pO1xuXG52YXIgcmVhY3ROb29wVXBkYXRlUXVldWUgPSBuZXcgUmVhY3QuQ29tcG9uZW50KCkudXBkYXRlcjtcblxudmFyIGNyZWF0ZUNsYXNzID0gZmFjdG9yeShSZWFjdC5Db21wb25lbnQsIFJlYWN0LmlzVmFsaWRFbGVtZW50LCByZWFjdE5vb3BVcGRhdGVRdWV1ZSk7XG5cbmV4cG9ydCB7XG4gIF9hc3NpZ24gICAgICAgICAgICAgICxcbiAgZW1wdHlPYmplY3QgICAgICAgICAgLFxuICBmYWN0b3J5ICAgICAgICAgICAgICAsXG4gIHJlYWN0Tm9vcFVwZGF0ZVF1ZXVlICxcbiAgY3JlYXRlQ2xhc3MgICAgICAgICAgLFxuICBcbn1cbi8qICBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuLi8uLi8uLi8uLi9icy1wbGF0Zm9ybS9saWIvZXM2L2xpc3QuanNcIjtcbmltcG9ydCAqIGFzICQkQXJyYXkgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4uLy4uLy4uLy4uL2JzLXBsYXRmb3JtL2xpYi9lczYvYXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIEN1cnJ5ICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4uLy4uLy4uLy4uL2JzLXBsYXRmb3JtL2xpYi9lczYvY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIFJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucyAgICAgICAgIGZyb20gXCIuLi8uLi8uLi8uLi9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5pbXBvcnQgKiBhcyBSZWFzb25SZWFjdE9wdGltaXplZENyZWF0ZUNsYXNzIGZyb20gXCIuL1JlYXNvblJlYWN0T3B0aW1pemVkQ3JlYXRlQ2xhc3MuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudChzLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhcmFyZyA9IC8qIGFycmF5ICovW1xuICAgICAgcyxcbiAgICAgIHByb3BzXG4gICAgXS5jb25jYXQoY2hpbGRyZW4pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCB2YXJhcmcpO1xufVxuXG52YXIgbWFnaWNOdWxsID0gbnVsbDtcblxuZnVuY3Rpb24gJCRkZWZhdWx0KCkge1xuICByZXR1cm4gLyogKCkgKi8wO1xufVxuXG5mdW5jdGlvbiBjaGFpbihoYW5kbGVyT25lLCBoYW5kbGVyVHdvLCBwYXlsb2FkKSB7XG4gIEN1cnJ5Ll8xKGhhbmRsZXJPbmUsIHBheWxvYWQpO1xuICByZXR1cm4gQ3VycnkuXzEoaGFuZGxlclR3bywgcGF5bG9hZCk7XG59XG5cbnZhciBDYWxsYmFjayA9IC8qIG1vZHVsZSAqL1tcbiAgLyogZGVmYXVsdCAqLyQkZGVmYXVsdCxcbiAgLyogY2hhaW4gKi9jaGFpblxuXTtcblxuZnVuY3Rpb24gbGlmZWN5Y2xlTm9VcGRhdGUoKSB7XG4gIHJldHVybiAvKiBOb1VwZGF0ZSAqLzA7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZVByZXZpb3VzTmV4dFVuaXQoKSB7XG4gIHJldHVybiAvKiAoKSAqLzA7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZVByZXZpb3VzQ3VycmVudFJldHVyblVuaXQoKSB7XG4gIHJldHVybiAvKiAoKSAqLzA7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZVJldHVyblVuaXQoKSB7XG4gIHJldHVybiAvKiAoKSAqLzA7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZVJldHVyblRydWUoKSB7XG4gIHJldHVybiAvKiB0cnVlICovMTtcbn1cblxuZnVuY3Rpb24gd2lsbFJlY2VpdmVQcm9wc0RlZmF1bHQocGFyYW0pIHtcbiAgcmV0dXJuIHBhcmFtWy8qIHN0YXRlICovMl07XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlZmF1bHQoKSB7XG4gIHJldHVybiBcIlJlbmRlck5vdEltcGxlbWVudGVkXCI7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxTdGF0ZURlZmF1bHQoKSB7XG4gIHJldHVybiAvKiAoKSAqLzA7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXJEZWZhdWx0KF8sIF8kMSkge1xuICByZXR1cm4gLyogTm9VcGRhdGUgKi8wO1xufVxuXG5mdW5jdGlvbiBzdWJzY3JpcHRpb25zRGVmYXVsdCgpIHtcbiAgcmV0dXJuIC8qIFtdICovMDtcbn1cblxuZnVuY3Rpb24gY29udmVydFByb3BzSWZUaGV5cmVGcm9tSnMocHJvcHMsIGpzUHJvcHNUb1JlYXNvbiwgZGVidWdOYW1lKSB7XG4gIHZhciBtYXRjaCA9IHByb3BzLnJlYXNvblByb3BzO1xuICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgIGlmIChqc1Byb3BzVG9SZWFzb24pIHtcbiAgICAgIHJldHVybiAvKiBFbGVtZW50ICovW0N1cnJ5Ll8xKGpzUHJvcHNUb1JlYXNvblswXSwgcHJvcHMpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgIFwiQSBKUyBjb21wb25lbnQgY2FsbGVkIHRoZSBSZWFzb24gY29tcG9uZW50IFwiICsgKGRlYnVnTmFtZSArIFwiIHdoaWNoIGRpZG4ndCBpbXBsZW1lbnQgdGhlIEpTLT5SZWFzb24gUmVhY3QgcHJvcHMgY29udmVyc2lvbi5cIilcbiAgICAgICAgICBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbWF0Y2g7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3MoZGVidWdOYW1lKSB7XG4gIHJldHVybiBSZWFzb25SZWFjdE9wdGltaXplZENyZWF0ZUNsYXNzLmNyZWF0ZUNsYXNzKHtcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRlYnVnTmFtZSxcbiAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uczogbnVsbCxcbiAgICAgICAgICAgICAgc2VsZjogKGZ1bmN0aW9uIChzdGF0ZSwgcmV0YWluZWRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgdmFyICQkdGhpcyA9IHRoaXMgO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogaGFuZGxlICovJCR0aGlzLmhhbmRsZU1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcmVkdWNlICovJCR0aGlzLnJlZHVjZU1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc3RhdGUgKi9zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcmV0YWluZWRQcm9wcyAqL3JldGFpbmVkUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHNlbmQgKi8kJHRoaXMuc2VuZE1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbk5leHRUb3RhbFN0YXRlOiAoZnVuY3Rpb24gKGN1clRvdGFsU3RhdGUsIHJlYXNvblN0YXRlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlYXNvblN0YXRlVXBkYXRlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJUb3RhbFN0YXRlO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZWFzb25TdGF0ZVVwZGF0ZS50YWcgfCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAwIDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uU3RhdGU6IHJlYXNvblN0YXRlVXBkYXRlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvblN0YXRlVmVyc2lvbjogY3VyVG90YWxTdGF0ZS5yZWFzb25TdGF0ZVZlcnNpb24gKyAxIHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb25TdGF0ZVZlcnNpb25Vc2VkVG9Db21wdXRlU3ViZWxlbWVudHM6IGN1clRvdGFsU3RhdGUucmVhc29uU3RhdGVWZXJzaW9uVXNlZFRvQ29tcHV0ZVN1YmVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVFZmZlY3RzOiBjdXJUb3RhbFN0YXRlLnNpZGVFZmZlY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAxIDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uU3RhdGU6IHJlYXNvblN0YXRlVXBkYXRlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvblN0YXRlVmVyc2lvbjogY3VyVG90YWxTdGF0ZS5yZWFzb25TdGF0ZVZlcnNpb24gKyAxIHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb25TdGF0ZVZlcnNpb25Vc2VkVG9Db21wdXRlU3ViZWxlbWVudHM6IGN1clRvdGFsU3RhdGUucmVhc29uU3RhdGVWZXJzaW9uVXNlZFRvQ29tcHV0ZVN1YmVsZW1lbnRzICsgMSB8IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZUVmZmVjdHM6IGN1clRvdGFsU3RhdGUuc2lkZUVmZmVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb25TdGF0ZTogY3VyVG90YWxTdGF0ZS5yZWFzb25TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb25TdGF0ZVZlcnNpb246IGN1clRvdGFsU3RhdGUucmVhc29uU3RhdGVWZXJzaW9uICsgMSB8IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uU3RhdGVWZXJzaW9uVXNlZFRvQ29tcHV0ZVN1YmVsZW1lbnRzOiBjdXJUb3RhbFN0YXRlLnJlYXNvblN0YXRlVmVyc2lvblVzZWRUb0NvbXB1dGVTdWJlbGVtZW50cyArIDEgfCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVFZmZlY3RzOiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvblN0YXRlVXBkYXRlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyVG90YWxTdGF0ZS5zaWRlRWZmZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDMgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb25TdGF0ZTogcmVhc29uU3RhdGVVcGRhdGVbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uU3RhdGVWZXJzaW9uOiBjdXJUb3RhbFN0YXRlLnJlYXNvblN0YXRlVmVyc2lvbiArIDEgfCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvblN0YXRlVmVyc2lvblVzZWRUb0NvbXB1dGVTdWJlbGVtZW50czogY3VyVG90YWxTdGF0ZS5yZWFzb25TdGF0ZVZlcnNpb25Vc2VkVG9Db21wdXRlU3ViZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZUVmZmVjdHM6IC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uU3RhdGVVcGRhdGVbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJUb3RhbFN0YXRlLnNpZGVFZmZlY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNCA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvblN0YXRlOiByZWFzb25TdGF0ZVVwZGF0ZVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb25TdGF0ZVZlcnNpb246IGN1clRvdGFsU3RhdGUucmVhc29uU3RhdGVWZXJzaW9uICsgMSB8IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uU3RhdGVWZXJzaW9uVXNlZFRvQ29tcHV0ZVN1YmVsZW1lbnRzOiBjdXJUb3RhbFN0YXRlLnJlYXNvblN0YXRlVmVyc2lvblVzZWRUb0NvbXB1dGVTdWJlbGVtZW50cyArIDEgfCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVFZmZlY3RzOiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvblN0YXRlVXBkYXRlWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyVG90YWxTdGF0ZS5zaWRlRWZmZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBnZXRJbml0aWFsU3RhdGU6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdGhpc0pzID0gKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgdmFyIGNvbnZlcnRlZFJlYXNvblByb3BzID0gY29udmVydFByb3BzSWZUaGV5cmVGcm9tSnModGhpc0pzLnByb3BzLCB0aGlzSnMuanNQcm9wc1RvUmVhc29uLCBkZWJ1Z05hbWUpO1xuICAgICAgICAgICAgICAgICAgdmFyIGluaXRpYWxSZWFzb25TdGF0ZSA9IEN1cnJ5Ll8xKGNvbnZlcnRlZFJlYXNvblByb3BzWzBdWy8qIGluaXRpYWxTdGF0ZSAqLzEwXSwgLyogKCkgKi8wKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvblN0YXRlOiBpbml0aWFsUmVhc29uU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvblN0YXRlVmVyc2lvbjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uU3RhdGVWZXJzaW9uVXNlZFRvQ29tcHV0ZVN1YmVsZW1lbnRzOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlRWZmZWN0czogLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBjb21wb25lbnREaWRNb3VudDogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHRoaXMgPSB0aGlzIDtcbiAgICAgICAgICAgICAgICAgIHZhciB0aGlzSnMgPSAodGhpcyk7XG4gICAgICAgICAgICAgICAgICB2YXIgY29udmVydGVkUmVhc29uUHJvcHMgPSBjb252ZXJ0UHJvcHNJZlRoZXlyZUZyb21Kcyh0aGlzSnMucHJvcHMsIHRoaXNKcy5qc1Byb3BzVG9SZWFzb24sIGRlYnVnTmFtZSk7XG4gICAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gY29udmVydGVkUmVhc29uUHJvcHNbMF07XG4gICAgICAgICAgICAgICAgICB2YXIgY3VyVG90YWxTdGF0ZSA9IHRoaXNKcy5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgIHZhciBjdXJSZWFzb25TdGF0ZSA9IGN1clRvdGFsU3RhdGUucmVhc29uU3RhdGU7XG4gICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9ICQkdGhpcy5zZWxmKGN1clJlYXNvblN0YXRlLCBjb21wb25lbnRbLyogcmV0YWluZWRQcm9wcyAqLzExXSk7XG4gICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50Wy8qIHN1YnNjcmlwdGlvbnMgKi8xM10gIT09IHN1YnNjcmlwdGlvbnNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gTGlzdC5tYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bnN1YnNjcmliZSA9IHBhcmFtWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IEN1cnJ5Ll8xKHBhcmFtWzBdLCAvKiAoKSAqLzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEodW5zdWJzY3JpYmUsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzEoY29tcG9uZW50Wy8qIHN1YnNjcmlwdGlvbnMgKi8xM10sIHNlbGYpKTtcbiAgICAgICAgICAgICAgICAgICAgJCR0aGlzLnN1YnNjcmlwdGlvbnMgPSBzdWJzY3JpcHRpb25zO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudFsvKiBkaWRNb3VudCAqLzRdICE9PSBsaWZlY3ljbGVOb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uU3RhdGVVcGRhdGUgPSBDdXJyeS5fMShjb21wb25lbnRbLyogZGlkTW91bnQgKi80XSwgc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0VG90YWxTdGF0ZSA9ICQkdGhpcy50cmFuc2l0aW9uTmV4dFRvdGFsU3RhdGUoY3VyVG90YWxTdGF0ZSwgcmVhc29uU3RhdGVVcGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFRvdGFsU3RhdGUucmVhc29uU3RhdGVWZXJzaW9uICE9PSBjdXJUb3RhbFN0YXRlLnJlYXNvblN0YXRlVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzSnMuc2V0U3RhdGUobmV4dFRvdGFsU3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY29tcG9uZW50RGlkVXBkYXRlOiAoZnVuY3Rpb24gKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgJCR0aGlzID0gdGhpcyA7XG4gICAgICAgICAgICAgICAgICB2YXIgdGhpc0pzID0gKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgdmFyIGN1clN0YXRlID0gdGhpc0pzLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgdmFyIGN1clJlYXNvblN0YXRlID0gY3VyU3RhdGUucmVhc29uU3RhdGU7XG4gICAgICAgICAgICAgICAgICB2YXIgbmV3SnNQcm9wcyA9IHRoaXNKcy5wcm9wcztcbiAgICAgICAgICAgICAgICAgIHZhciBuZXdDb252ZXJ0ZWRSZWFzb25Qcm9wcyA9IGNvbnZlcnRQcm9wc0lmVGhleXJlRnJvbUpzKG5ld0pzUHJvcHMsIHRoaXNKcy5qc1Byb3BzVG9SZWFzb24sIGRlYnVnTmFtZSk7XG4gICAgICAgICAgICAgICAgICB2YXIgbmV3Q29tcG9uZW50ID0gbmV3Q29udmVydGVkUmVhc29uUHJvcHNbMF07XG4gICAgICAgICAgICAgICAgICBpZiAobmV3Q29tcG9uZW50Wy8qIGRpZFVwZGF0ZSAqLzVdICE9PSBsaWZlY3ljbGVQcmV2aW91c0N1cnJlbnRSZXR1cm5Vbml0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9ICsocHJldlByb3BzID09PSBuZXdKc1Byb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZENvbnZlcnRlZFJlYXNvblByb3BzID0gbWF0Y2ggIT09IDAgPyBuZXdDb252ZXJ0ZWRSZWFzb25Qcm9wcyA6IGNvbnZlcnRQcm9wc0lmVGhleXJlRnJvbUpzKHByZXZQcm9wcywgdGhpc0pzLmpzUHJvcHNUb1JlYXNvbiwgZGVidWdOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZSZWFzb25TdGF0ZSA9IHByZXZTdGF0ZS5yZWFzb25TdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1NlbGYgPSAkJHRoaXMuc2VsZihjdXJSZWFzb25TdGF0ZSwgbmV3Q29tcG9uZW50Wy8qIHJldGFpbmVkUHJvcHMgKi8xMV0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkU2VsZl8wMDAgPSAvKiBoYW5kbGUgKi9uZXdTZWxmWy8qIGhhbmRsZSAqLzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkU2VsZl8wMDEgPSAvKiByZWR1Y2UgKi9uZXdTZWxmWy8qIHJlZHVjZSAqLzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkU2VsZl8wMDMgPSAvKiByZXRhaW5lZFByb3BzICovb2xkQ29udmVydGVkUmVhc29uUHJvcHNbMF1bLyogcmV0YWluZWRQcm9wcyAqLzExXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZFNlbGZfMDA0ID0gLyogc2VuZCAqL25ld1NlbGZbLyogc2VuZCAqLzRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkU2VsZiA9IC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAgICAgICAgICAgICBvbGRTZWxmXzAwMCxcbiAgICAgICAgICAgICAgICAgICAgICBvbGRTZWxmXzAwMSxcbiAgICAgICAgICAgICAgICAgICAgICAvKiBzdGF0ZSAqL3ByZXZSZWFzb25TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICBvbGRTZWxmXzAwMyxcbiAgICAgICAgICAgICAgICAgICAgICBvbGRTZWxmXzAwNFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEobmV3Q29tcG9uZW50Wy8qIGRpZFVwZGF0ZSAqLzVdLCAvKiByZWNvcmQgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG9sZFNlbGYgKi9vbGRTZWxmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBuZXdTZWxmICovbmV3U2VsZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQ6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgJCR0aGlzID0gdGhpcyA7XG4gICAgICAgICAgICAgICAgICB2YXIgdGhpc0pzID0gKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgdmFyIGNvbnZlcnRlZFJlYXNvblByb3BzID0gY29udmVydFByb3BzSWZUaGV5cmVGcm9tSnModGhpc0pzLnByb3BzLCB0aGlzSnMuanNQcm9wc1RvUmVhc29uLCBkZWJ1Z05hbWUpO1xuICAgICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IGNvbnZlcnRlZFJlYXNvblByb3BzWzBdO1xuICAgICAgICAgICAgICAgICAgdmFyIGN1clN0YXRlID0gdGhpc0pzLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgdmFyIGN1clJlYXNvblN0YXRlID0gY3VyU3RhdGUucmVhc29uU3RhdGU7XG4gICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50Wy8qIHdpbGxVbm1vdW50ICovNl0gIT09IGxpZmVjeWNsZVJldHVyblVuaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ3VycnkuXzEoY29tcG9uZW50Wy8qIHdpbGxVbm1vdW50ICovNl0sICQkdGhpcy5zZWxmKGN1clJlYXNvblN0YXRlLCBjb21wb25lbnRbLyogcmV0YWluZWRQcm9wcyAqLzExXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gJCR0aGlzLnN1YnNjcmlwdGlvbnM7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogKCkgKi8wO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExpc3QuaXRlcigoZnVuY3Rpb24gKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKHVuc3Vic2NyaWJlLCAvKiAoKSAqLzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgTGlzdC5yZXYobWF0Y2gpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY29tcG9uZW50V2lsbFVwZGF0ZTogKGZ1bmN0aW9uIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgdmFyICQkdGhpcyA9IHRoaXMgO1xuICAgICAgICAgICAgICAgICAgdmFyIHRoaXNKcyA9ICh0aGlzKTtcbiAgICAgICAgICAgICAgICAgIHZhciBuZXdDb252ZXJ0ZWRSZWFzb25Qcm9wcyA9IGNvbnZlcnRQcm9wc0lmVGhleXJlRnJvbUpzKG5leHRQcm9wcywgdGhpc0pzLmpzUHJvcHNUb1JlYXNvbiwgZGVidWdOYW1lKTtcbiAgICAgICAgICAgICAgICAgIHZhciBuZXdDb21wb25lbnQgPSBuZXdDb252ZXJ0ZWRSZWFzb25Qcm9wc1swXTtcbiAgICAgICAgICAgICAgICAgIGlmIChuZXdDb21wb25lbnRbLyogd2lsbFVwZGF0ZSAqLzddICE9PSBsaWZlY3ljbGVQcmV2aW91c05leHRVbml0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRKc1Byb3BzID0gdGhpc0pzLnByb3BzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSArKG5leHRQcm9wcyA9PT0gb2xkSnNQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRDb252ZXJ0ZWRSZWFzb25Qcm9wcyA9IG1hdGNoICE9PSAwID8gbmV3Q29udmVydGVkUmVhc29uUHJvcHMgOiBjb252ZXJ0UHJvcHNJZlRoZXlyZUZyb21KcyhvbGRKc1Byb3BzLCB0aGlzSnMuanNQcm9wc1RvUmVhc29uLCBkZWJ1Z05hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyU3RhdGUgPSB0aGlzSnMuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJSZWFzb25TdGF0ZSA9IGN1clN0YXRlLnJlYXNvblN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFJlYXNvblN0YXRlID0gbmV4dFN0YXRlLnJlYXNvblN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3U2VsZiA9ICQkdGhpcy5zZWxmKG5leHRSZWFzb25TdGF0ZSwgbmV3Q29tcG9uZW50Wy8qIHJldGFpbmVkUHJvcHMgKi8xMV0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkU2VsZl8wMDAgPSAvKiBoYW5kbGUgKi9uZXdTZWxmWy8qIGhhbmRsZSAqLzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkU2VsZl8wMDEgPSAvKiByZWR1Y2UgKi9uZXdTZWxmWy8qIHJlZHVjZSAqLzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkU2VsZl8wMDMgPSAvKiByZXRhaW5lZFByb3BzICovb2xkQ29udmVydGVkUmVhc29uUHJvcHNbMF1bLyogcmV0YWluZWRQcm9wcyAqLzExXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZFNlbGZfMDA0ID0gLyogc2VuZCAqL25ld1NlbGZbLyogc2VuZCAqLzRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkU2VsZiA9IC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAgICAgICAgICAgICBvbGRTZWxmXzAwMCxcbiAgICAgICAgICAgICAgICAgICAgICBvbGRTZWxmXzAwMSxcbiAgICAgICAgICAgICAgICAgICAgICAvKiBzdGF0ZSAqL2N1clJlYXNvblN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgIG9sZFNlbGZfMDAzLFxuICAgICAgICAgICAgICAgICAgICAgIG9sZFNlbGZfMDA0XG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShuZXdDb21wb25lbnRbLyogd2lsbFVwZGF0ZSAqLzddLCAvKiByZWNvcmQgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG9sZFNlbGYgKi9vbGRTZWxmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBuZXdTZWxmICovbmV3U2VsZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogKGZ1bmN0aW9uIChuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHRoaXMgPSB0aGlzIDtcbiAgICAgICAgICAgICAgICAgIHZhciB0aGlzSnMgPSAodGhpcyk7XG4gICAgICAgICAgICAgICAgICB2YXIgbmV3Q29udmVydGVkUmVhc29uUHJvcHMgPSBjb252ZXJ0UHJvcHNJZlRoZXlyZUZyb21KcyhuZXh0UHJvcHMsIHRoaXNKcy5qc1Byb3BzVG9SZWFzb24sIGRlYnVnTmFtZSk7XG4gICAgICAgICAgICAgICAgICB2YXIgbmV3Q29tcG9uZW50ID0gbmV3Q29udmVydGVkUmVhc29uUHJvcHNbMF07XG4gICAgICAgICAgICAgICAgICBpZiAobmV3Q29tcG9uZW50Wy8qIHdpbGxSZWNlaXZlUHJvcHMgKi8zXSAhPT0gd2lsbFJlY2VpdmVQcm9wc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZEpzUHJvcHMgPSB0aGlzSnMucHJvcHM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9ICsobmV4dFByb3BzID09PSBvbGRKc1Byb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZENvbnZlcnRlZFJlYXNvblByb3BzID0gbWF0Y2ggIT09IDAgPyBuZXdDb252ZXJ0ZWRSZWFzb25Qcm9wcyA6IGNvbnZlcnRQcm9wc0lmVGhleXJlRnJvbUpzKG9sZEpzUHJvcHMsIHRoaXNKcy5qc1Byb3BzVG9SZWFzb24sIGRlYnVnTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRDb21wb25lbnQgPSBvbGRDb252ZXJ0ZWRSZWFzb25Qcm9wc1swXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNKcy5zZXRTdGF0ZSgoZnVuY3Rpb24gKGN1clRvdGFsU3RhdGUsIF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VyUmVhc29uU3RhdGUgPSBjdXJUb3RhbFN0YXRlLnJlYXNvblN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJSZWFzb25TdGF0ZVZlcnNpb24gPSBjdXJUb3RhbFN0YXRlLnJlYXNvblN0YXRlVmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkU2VsZiA9ICQkdGhpcy5zZWxmKGN1clJlYXNvblN0YXRlLCBvbGRDb21wb25lbnRbLyogcmV0YWluZWRQcm9wcyAqLzExXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRSZWFzb25TdGF0ZSA9IEN1cnJ5Ll8xKG5ld0NvbXBvbmVudFsvKiB3aWxsUmVjZWl2ZVByb3BzICovM10sIG9sZFNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9ICsobmV4dFJlYXNvblN0YXRlICE9PSBjdXJSZWFzb25TdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRSZWFzb25TdGF0ZVZlcnNpb24gPSBtYXRjaCAhPT0gMCA/IGN1clJlYXNvblN0YXRlVmVyc2lvbiArIDEgfCAwIDogY3VyUmVhc29uU3RhdGVWZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UmVhc29uU3RhdGVWZXJzaW9uICE9PSBjdXJSZWFzb25TdGF0ZVZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvblN0YXRlOiBuZXh0UmVhc29uU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvblN0YXRlVmVyc2lvbjogbmV4dFJlYXNvblN0YXRlVmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uU3RhdGVWZXJzaW9uVXNlZFRvQ29tcHV0ZVN1YmVsZW1lbnRzOiBjdXJUb3RhbFN0YXRlLnJlYXNvblN0YXRlVmVyc2lvblVzZWRUb0NvbXB1dGVTdWJlbGVtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZUVmZmVjdHM6IG5leHRSZWFzb25TdGF0ZS5zaWRlRWZmZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1clRvdGFsU3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoZnVuY3Rpb24gKG5leHRKc1Byb3BzLCBuZXh0U3RhdGUsIF8pIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHRoaXMgPSB0aGlzIDtcbiAgICAgICAgICAgICAgICAgIHZhciB0aGlzSnMgPSAodGhpcyk7XG4gICAgICAgICAgICAgICAgICB2YXIgY3VySnNQcm9wcyA9IHRoaXNKcy5wcm9wcztcbiAgICAgICAgICAgICAgICAgIHZhciBwcm9wc1dhcnJhbnRSZXJlbmRlciA9ICsobmV4dEpzUHJvcHMgIT09IGN1ckpzUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgdmFyIG9sZENvbnZlcnRlZFJlYXNvblByb3BzID0gY29udmVydFByb3BzSWZUaGV5cmVGcm9tSnModGhpc0pzLnByb3BzLCB0aGlzSnMuanNQcm9wc1RvUmVhc29uLCBkZWJ1Z05hbWUpO1xuICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gKyhuZXh0SnNQcm9wcyA9PT0gY3VySnNQcm9wcyk7XG4gICAgICAgICAgICAgICAgICB2YXIgbmV3Q29udmVydGVkUmVhc29uUHJvcHMgPSBtYXRjaCAhPT0gMCA/IG9sZENvbnZlcnRlZFJlYXNvblByb3BzIDogY29udmVydFByb3BzSWZUaGV5cmVGcm9tSnMobmV4dEpzUHJvcHMsIHRoaXNKcy5qc1Byb3BzVG9SZWFzb24sIGRlYnVnTmFtZSk7XG4gICAgICAgICAgICAgICAgICB2YXIgbmV3Q29tcG9uZW50ID0gbmV3Q29udmVydGVkUmVhc29uUHJvcHNbMF07XG4gICAgICAgICAgICAgICAgICB2YXIgbmV4dFJlYXNvblN0YXRlVmVyc2lvbiA9IG5leHRTdGF0ZS5yZWFzb25TdGF0ZVZlcnNpb247XG4gICAgICAgICAgICAgICAgICB2YXIgbmV4dFJlYXNvblN0YXRlVmVyc2lvblVzZWRUb0NvbXB1dGVTdWJlbGVtZW50cyA9IG5leHRTdGF0ZS5yZWFzb25TdGF0ZVZlcnNpb25Vc2VkVG9Db21wdXRlU3ViZWxlbWVudHM7XG4gICAgICAgICAgICAgICAgICB2YXIgc3RhdGVDaGFuZ2VXYXJyYW50c0NvbXB1dGluZ1N1YmVsZW1lbnRzID0gKyhuZXh0UmVhc29uU3RhdGVWZXJzaW9uVXNlZFRvQ29tcHV0ZVN1YmVsZW1lbnRzICE9PSBuZXh0UmVhc29uU3RhdGVWZXJzaW9uKTtcbiAgICAgICAgICAgICAgICAgIHZhciB3YXJyYW50c1VwZGF0ZSA9IHByb3BzV2FycmFudFJlcmVuZGVyIHx8IHN0YXRlQ2hhbmdlV2FycmFudHNDb21wdXRpbmdTdWJlbGVtZW50cztcbiAgICAgICAgICAgICAgICAgIHZhciBuZXh0UmVhc29uU3RhdGUgPSBuZXh0U3RhdGUucmVhc29uU3RhdGU7XG4gICAgICAgICAgICAgICAgICB2YXIgbmV3U2VsZiA9ICQkdGhpcy5zZWxmKG5leHRSZWFzb25TdGF0ZSwgbmV3Q29tcG9uZW50Wy8qIHJldGFpbmVkUHJvcHMgKi8xMV0pO1xuICAgICAgICAgICAgICAgICAgdmFyIHJldDtcbiAgICAgICAgICAgICAgICAgIGlmICh3YXJyYW50c1VwZGF0ZSAmJiBuZXdDb21wb25lbnRbLyogc2hvdWxkVXBkYXRlICovOF0gIT09IGxpZmVjeWNsZVJldHVyblRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1clN0YXRlID0gdGhpc0pzLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyUmVhc29uU3RhdGUgPSBjdXJTdGF0ZS5yZWFzb25TdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZFNlbGZfMDAwID0gLyogaGFuZGxlICovbmV3U2VsZlsvKiBoYW5kbGUgKi8wXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZFNlbGZfMDAxID0gLyogcmVkdWNlICovbmV3U2VsZlsvKiByZWR1Y2UgKi8xXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZFNlbGZfMDAzID0gLyogcmV0YWluZWRQcm9wcyAqL29sZENvbnZlcnRlZFJlYXNvblByb3BzWzBdWy8qIHJldGFpbmVkUHJvcHMgKi8xMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRTZWxmXzAwNCA9IC8qIHNlbmQgKi9uZXdTZWxmWy8qIHNlbmQgKi80XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZFNlbGYgPSAvKiByZWNvcmQgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgb2xkU2VsZl8wMDAsXG4gICAgICAgICAgICAgICAgICAgICAgb2xkU2VsZl8wMDEsXG4gICAgICAgICAgICAgICAgICAgICAgLyogc3RhdGUgKi9jdXJSZWFzb25TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICBvbGRTZWxmXzAwMyxcbiAgICAgICAgICAgICAgICAgICAgICBvbGRTZWxmXzAwNFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICByZXQgPSBDdXJyeS5fMShuZXdDb21wb25lbnRbLyogc2hvdWxkVXBkYXRlICovOF0sIC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogb2xkU2VsZiAqL29sZFNlbGYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG5ld1NlbGYgKi9uZXdTZWxmXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IHdhcnJhbnRzVXBkYXRlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbmV4dFN0YXRlLnJlYXNvblN0YXRlVmVyc2lvblVzZWRUb0NvbXB1dGVTdWJlbGVtZW50cyA9IG5leHRSZWFzb25TdGF0ZVZlcnNpb247XG4gICAgICAgICAgICAgICAgICB2YXIgbmV4dFNpZGVFZmZlY3RzID0gTGlzdC5yZXYobmV4dFN0YXRlLnNpZGVFZmZlY3RzKTtcbiAgICAgICAgICAgICAgICAgIGlmIChuZXh0U2lkZUVmZmVjdHMgIT09IC8qIFtdICovMCkge1xuICAgICAgICAgICAgICAgICAgICBMaXN0Lml0ZXIoKGZ1bmN0aW9uIChwZXJmb3JtU2lkZUVmZmVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEocGVyZm9ybVNpZGVFZmZlY3RzLCBuZXdTZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIG5leHRTaWRlRWZmZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNKcy5zZXRTdGF0ZSgoZnVuY3Rpb24gKGZ1dHVyZVRvdGFsU3RhdGUsIF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5pdGlhbFNlZ21lbnQgPSBmdW5jdGlvbiAoX2FjYywgX24sIF9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gX2w7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gX247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY2MgPSBfYWNjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2wgPSBsWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX24gPSBuIC0gMSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYWNjID0gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTGlzdC5yZXYoYWNjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExpc3QucmV2KGFjYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IExpc3QubGVuZ3RoKGZ1dHVyZVRvdGFsU3RhdGUuc2lkZUVmZmVjdHMpIC0gTGlzdC5sZW5ndGgobmV4dFN0YXRlLnNpZGVFZmZlY3RzKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1NpZGVFZmZlY3RzID0gaW5pdGlhbFNlZ21lbnQoLyogW10gKi8wLCBuLCBmdXR1cmVUb3RhbFN0YXRlLnNpZGVFZmZlY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uU3RhdGU6IGZ1dHVyZVRvdGFsU3RhdGUucmVhc29uU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb25TdGF0ZVZlcnNpb246IGZ1dHVyZVRvdGFsU3RhdGUucmVhc29uU3RhdGVWZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uU3RhdGVWZXJzaW9uVXNlZFRvQ29tcHV0ZVN1YmVsZW1lbnRzOiBmdXR1cmVUb3RhbFN0YXRlLnJlYXNvblN0YXRlVmVyc2lvblVzZWRUb0NvbXB1dGVTdWJlbGVtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVFZmZlY3RzOiBuZXdTaWRlRWZmZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGhhbmRsZU1ldGhvZDogKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgdmFyICQkdGhpcyA9IHRoaXMgO1xuICAgICAgICAgICAgICAgICAgdmFyIHRoaXNKcyA9ICh0aGlzKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKGNhbGxiYWNrUGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJTdGF0ZSA9IHRoaXNKcy5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VyUmVhc29uU3RhdGUgPSBjdXJTdGF0ZS5yZWFzb25TdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udmVydGVkUmVhc29uUHJvcHMgPSBjb252ZXJ0UHJvcHNJZlRoZXlyZUZyb21Kcyh0aGlzSnMucHJvcHMsIHRoaXNKcy5qc1Byb3BzVG9SZWFzb24sIGRlYnVnTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKGNhbGxiYWNrLCBjYWxsYmFja1BheWxvYWQsICQkdGhpcy5zZWxmKGN1clJlYXNvblN0YXRlLCBjb252ZXJ0ZWRSZWFzb25Qcm9wc1swXVsvKiByZXRhaW5lZFByb3BzICovMTFdKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB1cGRhdGVNZXRob2Q6IChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHRoaXMgPSB0aGlzIDtcbiAgICAgICAgICAgICAgICAgIHZhciB0aGlzSnMgPSAodGhpcyk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgkJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGN1clRvdGFsU3RhdGUgPSB0aGlzSnMuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGN1clJlYXNvblN0YXRlID0gY3VyVG90YWxTdGF0ZS5yZWFzb25TdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udmVydGVkUmVhc29uUHJvcHMgPSBjb252ZXJ0UHJvcHNJZlRoZXlyZUZyb21Kcyh0aGlzSnMucHJvcHMsIHRoaXNKcy5qc1Byb3BzVG9SZWFzb24sIGRlYnVnTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvblN0YXRlVXBkYXRlID0gQ3VycnkuXzIoY2FsbGJhY2ssICQkZXZlbnQsICQkdGhpcy5zZWxmKGN1clJlYXNvblN0YXRlLCBjb252ZXJ0ZWRSZWFzb25Qcm9wc1swXVsvKiByZXRhaW5lZFByb3BzICovMTFdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYXNvblN0YXRlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFRvdGFsU3RhdGUgPSAkJHRoaXMudHJhbnNpdGlvbk5leHRUb3RhbFN0YXRlKGN1clRvdGFsU3RhdGUsIHJlYXNvblN0YXRlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0VG90YWxTdGF0ZS5yZWFzb25TdGF0ZVZlcnNpb24gIT09IGN1clRvdGFsU3RhdGUucmVhc29uU3RhdGVWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzSnMuc2V0U3RhdGUobmV4dFRvdGFsU3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWdpY051bGw7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgc2VuZE1ldGhvZDogKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHRoaXMgPSB0aGlzIDtcbiAgICAgICAgICAgICAgICAgIHZhciB0aGlzSnMgPSAodGhpcyk7XG4gICAgICAgICAgICAgICAgICB2YXIgY29udmVydGVkUmVhc29uUHJvcHMgPSBjb252ZXJ0UHJvcHNJZlRoZXlyZUZyb21Kcyh0aGlzSnMucHJvcHMsIHRoaXNKcy5qc1Byb3BzVG9SZWFzb24sIGRlYnVnTmFtZSk7XG4gICAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gY29udmVydGVkUmVhc29uUHJvcHNbMF07XG4gICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50Wy8qIHJlZHVjZXIgKi8xMl0gIT09IHJlZHVjZXJEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0aWFsU3RhdGVBcHBsaWNhdGlvbiA9IEN1cnJ5Ll8xKGNvbXBvbmVudFsvKiByZWR1Y2VyICovMTJdLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc0pzLnNldFN0YXRlKChmdW5jdGlvbiAoY3VyVG90YWxTdGF0ZSwgXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJSZWFzb25TdGF0ZSA9IGN1clRvdGFsU3RhdGUucmVhc29uU3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvblN0YXRlVXBkYXRlID0gQ3VycnkuXzEocGFydGlhbFN0YXRlQXBwbGljYXRpb24sIGN1clJlYXNvblN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhc29uU3RhdGVVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0VG90YWxTdGF0ZSA9ICQkdGhpcy50cmFuc2l0aW9uTmV4dFRvdGFsU3RhdGUoY3VyVG90YWxTdGF0ZSwgcmVhc29uU3RhdGVVcGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRUb3RhbFN0YXRlLnJlYXNvblN0YXRlVmVyc2lvbiAhPT0gY3VyVG90YWxTdGF0ZS5yZWFzb25TdGF0ZVZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRUb3RhbFN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hZ2ljTnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hZ2ljTnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICByZWR1Y2VNZXRob2Q6IChmdW5jdGlvbiAoY2FsbGJhY2ssIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHRoaXMgPSB0aGlzIDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAkJHRoaXMuc2VuZE1ldGhvZChDdXJyeS5fMShjYWxsYmFjaywgcGF5bG9hZCkpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICByZW5kZXI6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgJCR0aGlzID0gdGhpcyA7XG4gICAgICAgICAgICAgICAgICB2YXIgdGhpc0pzID0gKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgdmFyIGNvbnZlcnRlZFJlYXNvblByb3BzID0gY29udmVydFByb3BzSWZUaGV5cmVGcm9tSnModGhpc0pzLnByb3BzLCB0aGlzSnMuanNQcm9wc1RvUmVhc29uLCBkZWJ1Z05hbWUpO1xuICAgICAgICAgICAgICAgICAgdmFyIGNyZWF0ZWQgPSBjb252ZXJ0ZWRSZWFzb25Qcm9wc1swXTtcbiAgICAgICAgICAgICAgICAgIHZhciBjdXJTdGF0ZSA9IHRoaXNKcy5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgIHZhciBjdXJSZWFzb25TdGF0ZSA9IGN1clN0YXRlLnJlYXNvblN0YXRlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGNyZWF0ZWRbLyogcmVuZGVyICovOV0sICQkdGhpcy5zZWxmKGN1clJlYXNvblN0YXRlLCBjcmVhdGVkWy8qIHJldGFpbmVkUHJvcHMgKi8xMV0pKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJhc2ljQ29tcG9uZW50KGRlYnVnTmFtZSkge1xuICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgIC8qIGRlYnVnTmFtZSAqL2RlYnVnTmFtZSxcbiAgICAgICAgICAvKiByZWFjdENsYXNzSW50ZXJuYWwgKi9jcmVhdGVDbGFzcyhkZWJ1Z05hbWUpLFxuICAgICAgICAgIC8qIGhhbmRlZE9mZlN0YXRlIDogcmVjb3JkICovWy8qIGNvbnRlbnRzIDogTm9uZSAqLzBdLFxuICAgICAgICAgIC8qIHdpbGxSZWNlaXZlUHJvcHMgKi93aWxsUmVjZWl2ZVByb3BzRGVmYXVsdCxcbiAgICAgICAgICAvKiBkaWRNb3VudCAqL2xpZmVjeWNsZU5vVXBkYXRlLFxuICAgICAgICAgIC8qIGRpZFVwZGF0ZSAqL2xpZmVjeWNsZVByZXZpb3VzQ3VycmVudFJldHVyblVuaXQsXG4gICAgICAgICAgLyogd2lsbFVubW91bnQgKi9saWZlY3ljbGVSZXR1cm5Vbml0LFxuICAgICAgICAgIC8qIHdpbGxVcGRhdGUgKi9saWZlY3ljbGVQcmV2aW91c05leHRVbml0LFxuICAgICAgICAgIC8qIHNob3VsZFVwZGF0ZSAqL2xpZmVjeWNsZVJldHVyblRydWUsXG4gICAgICAgICAgLyogcmVuZGVyICovcmVuZGVyRGVmYXVsdCxcbiAgICAgICAgICAvKiBpbml0aWFsU3RhdGUgKi9pbml0aWFsU3RhdGVEZWZhdWx0LFxuICAgICAgICAgIC8qIHJldGFpbmVkUHJvcHMgOiAoKSAqLzAsXG4gICAgICAgICAgLyogcmVkdWNlciAqL3JlZHVjZXJEZWZhdWx0LFxuICAgICAgICAgIC8qIHN1YnNjcmlwdGlvbnMgKi9zdWJzY3JpcHRpb25zRGVmYXVsdCxcbiAgICAgICAgICAvKiBqc0VsZW1lbnRXcmFwcGVkIDogTm9uZSAqLzBcbiAgICAgICAgXTtcbn1cblxudmFyIHN0YXRlbGVzc0NvbXBvbmVudCA9IGJhc2ljQ29tcG9uZW50O1xuXG52YXIgc3RhdGVsZXNzQ29tcG9uZW50V2l0aFJldGFpbmVkUHJvcHMgPSBiYXNpY0NvbXBvbmVudDtcblxudmFyIHJlZHVjZXJDb21wb25lbnQgPSBiYXNpY0NvbXBvbmVudDtcblxudmFyIHJlZHVjZXJDb21wb25lbnRXaXRoUmV0YWluZWRQcm9wcyA9IGJhc2ljQ29tcG9uZW50O1xuXG5mdW5jdGlvbiBlbGVtZW50KCRzdGFyb3B0JHN0YXIsICRzdGFyb3B0JHN0YXIkMSwgY29tcG9uZW50KSB7XG4gIHZhciBrZXkgPSAkc3Rhcm9wdCRzdGFyID8gJHN0YXJvcHQkc3RhclswXSA6IHVuZGVmaW5lZDtcbiAgdmFyIHJlZiA9ICRzdGFyb3B0JHN0YXIkMSA/ICRzdGFyb3B0JHN0YXIkMVswXSA6IHVuZGVmaW5lZDtcbiAgdmFyIGVsZW1lbnQkMSA9IC8qIEVsZW1lbnQgKi9bY29tcG9uZW50XTtcbiAgdmFyIG1hdGNoID0gY29tcG9uZW50Wy8qIGpzRWxlbWVudFdyYXBwZWQgKi8xNF07XG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiBDdXJyeS5fMihtYXRjaFswXSwga2V5LCByZWYpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudFsvKiByZWFjdENsYXNzSW50ZXJuYWwgKi8xXSwge1xuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIHJlZjogcmVmLFxuICAgICAgICAgICAgICAgIHJlYXNvblByb3BzOiBlbGVtZW50JDFcbiAgICAgICAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JhcFJlYXNvbkZvckpzKGNvbXBvbmVudCwganNQcm9wc1RvUmVhc29uKSB7XG4gIHZhciB0bXAgPSBjb21wb25lbnRbLyogcmVhY3RDbGFzc0ludGVybmFsICovMV0ucHJvdG90eXBlO1xuICB0bXAuanNQcm9wc1RvUmVhc29uID0gLyogU29tZSAqL1tqc1Byb3BzVG9SZWFzb25dO1xuICByZXR1cm4gY29tcG9uZW50Wy8qIHJlYWN0Q2xhc3NJbnRlcm5hbCAqLzFdO1xufVxuXG52YXIgZHVtbXlJbnRlcm9wQ29tcG9uZW50ID0gYmFzaWNDb21wb25lbnQoXCJpbnRlcm9wXCIpO1xuXG5mdW5jdGlvbiB3cmFwSnNGb3JSZWFzb24ocmVhY3RDbGFzcywgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBqc0VsZW1lbnRXcmFwcGVkID0gLyogU29tZSAqL1soZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgIHZhciByZWFjdENsYXNzJDEgPSByZWFjdENsYXNzO1xuICAgICAgICB2YXIgcHJvcHMkMSA9IHByb3BzO1xuICAgICAgICB2YXIgY2hpbGRyZW4kMSA9IGNoaWxkcmVuO1xuICAgICAgICB2YXIga2V5ID0gcGFyYW07XG4gICAgICAgIHZhciByZWYgPSBwYXJhbSQxO1xuICAgICAgICB2YXIgcHJvcHMkMiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IH0sIHByb3BzJDEpLCB7XG4gICAgICAgICAgICAgIHJlZjogcmVmLFxuICAgICAgICAgICAgICBrZXk6IGtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHZhciB2YXJhcmdzID0gLyogYXJyYXkgKi9bXG4gICAgICAgICAgICByZWFjdENsYXNzJDEsXG4gICAgICAgICAgICBwcm9wcyQyXG4gICAgICAgICAgXS5jb25jYXQoY2hpbGRyZW4kMSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIHZhcmFyZ3MpO1xuICAgICAgfSldO1xuICB2YXIgbmV3cmVjb3JkID0gZHVtbXlJbnRlcm9wQ29tcG9uZW50LnNsaWNlKCk7XG4gIG5ld3JlY29yZFsvKiBqc0VsZW1lbnRXcmFwcGVkICovMTRdID0ganNFbGVtZW50V3JhcHBlZDtcbiAgcmV0dXJuIG5ld3JlY29yZDtcbn1cblxuZnVuY3Rpb24gcGF0aCgpIHtcbiAgdmFyIG1hdGNoID0gdHlwZW9mICh3aW5kb3cpID09PSBcInVuZGVmaW5lZFwiID8gdW5kZWZpbmVkIDogKHdpbmRvdyk7XG4gIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJhdyA9IG1hdGNoLmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHN3aXRjaCAocmF3KSB7XG4gICAgICBjYXNlIFwiXCIgOiBcbiAgICAgIGNhc2UgXCIvXCIgOiBcbiAgICAgICAgICByZXR1cm4gLyogW10gKi8wO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHJhdyQxID0gcmF3LnNsaWNlKDEpO1xuICAgICAgICB2YXIgbWF0Y2gkMSA9IHJhdyQxW3JhdyQxLmxlbmd0aCAtIDEgfCAwXTtcbiAgICAgICAgdmFyIHJhdyQyID0gbWF0Y2gkMSA9PT0gXCIvXCIgPyByYXckMS5zbGljZSgwLCAtMSkgOiByYXckMTtcbiAgICAgICAgcmV0dXJuICQkQXJyYXkudG9fbGlzdChyYXckMi5zcGxpdChcIi9cIikpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc2goKSB7XG4gIHZhciBtYXRjaCA9IHR5cGVvZiAod2luZG93KSA9PT0gXCJ1bmRlZmluZWRcIiA/IHVuZGVmaW5lZCA6ICh3aW5kb3cpO1xuICBpZiAobWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByYXcgPSBtYXRjaC5sb2NhdGlvbi5oYXNoO1xuICAgIHN3aXRjaCAocmF3KSB7XG4gICAgICBjYXNlIFwiXCIgOiBcbiAgICAgIGNhc2UgXCIjXCIgOiBcbiAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiByYXcuc2xpY2UoMSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgdmFyIG1hdGNoID0gdHlwZW9mICh3aW5kb3cpID09PSBcInVuZGVmaW5lZFwiID8gdW5kZWZpbmVkIDogKHdpbmRvdyk7XG4gIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJhdyA9IG1hdGNoLmxvY2F0aW9uLnNlYXJjaDtcbiAgICBzd2l0Y2ggKHJhdykge1xuICAgICAgY2FzZSBcIlwiIDogXG4gICAgICBjYXNlIFwiP1wiIDogXG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcmF3LnNsaWNlKDEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdXNoKHBhdGgpIHtcbiAgdmFyIG1hdGNoID0gdHlwZW9mIChoaXN0b3J5KSA9PT0gXCJ1bmRlZmluZWRcIiA/IHVuZGVmaW5lZCA6IChoaXN0b3J5KTtcbiAgdmFyIG1hdGNoJDEgPSB0eXBlb2YgKHdpbmRvdykgPT09IFwidW5kZWZpbmVkXCIgPyB1bmRlZmluZWQgOiAod2luZG93KTtcbiAgaWYgKG1hdGNoICE9PSB1bmRlZmluZWQgJiYgbWF0Y2gkMSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWF0Y2gucHVzaFN0YXRlKChudWxsKSwgXCJcIiwgcGF0aCk7XG4gICAgbWF0Y2gkMS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInBvcHN0YXRlXCIpKTtcbiAgICByZXR1cm4gLyogKCkgKi8wO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiAoKSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXJsKCkge1xuICByZXR1cm4gLyogcmVjb3JkICovW1xuICAgICAgICAgIC8qIHBhdGggKi9wYXRoKC8qICgpICovMCksXG4gICAgICAgICAgLyogaGFzaCAqL2hhc2goLyogKCkgKi8wKSxcbiAgICAgICAgICAvKiBzZWFyY2ggKi9zZWFyY2goLyogKCkgKi8wKVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiB3YXRjaFVybChjYWxsYmFjaykge1xuICB2YXIgbWF0Y2ggPSB0eXBlb2YgKHdpbmRvdykgPT09IFwidW5kZWZpbmVkXCIgPyB1bmRlZmluZWQgOiAod2luZG93KTtcbiAgaWYgKG1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgd2F0Y2hlcklEID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGNhbGxiYWNrLCB1cmwoLyogKCkgKi8wKSk7XG4gICAgfTtcbiAgICBtYXRjaC5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgd2F0Y2hlcklEKTtcbiAgICByZXR1cm4gd2F0Y2hlcklEO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gLyogKCkgKi8wO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW53YXRjaFVybCh3YXRjaGVySUQpIHtcbiAgdmFyIG1hdGNoID0gdHlwZW9mICh3aW5kb3cpID09PSBcInVuZGVmaW5lZFwiID8gdW5kZWZpbmVkIDogKHdpbmRvdyk7XG4gIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWF0Y2gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIHdhdGNoZXJJRCk7XG4gICAgcmV0dXJuIC8qICgpICovMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogKCkgKi8wO1xuICB9XG59XG5cbnZhciBSb3V0ZXIgPSBbXG4gIHB1c2gsXG4gIHdhdGNoVXJsLFxuICB1bndhdGNoVXJsLFxuICB1cmxcbl07XG5cbmV4cG9ydCB7XG4gIENhbGxiYWNrICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgc3RhdGVsZXNzQ29tcG9uZW50ICAgICAgICAgICAgICAgICAgLFxuICBzdGF0ZWxlc3NDb21wb25lbnRXaXRoUmV0YWluZWRQcm9wcyAsXG4gIHJlZHVjZXJDb21wb25lbnQgICAgICAgICAgICAgICAgICAgICxcbiAgcmVkdWNlckNvbXBvbmVudFdpdGhSZXRhaW5lZFByb3BzICAgLFxuICBlbGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gIHdyYXBSZWFzb25Gb3JKcyAgICAgICAgICAgICAgICAgICAgICxcbiAgY3JlYXRlRG9tRWxlbWVudCAgICAgICAgICAgICAgICAgICAgLFxuICB3cmFwSnNGb3JSZWFzb24gICAgICAgICAgICAgICAgICAgICAsXG4gIFJvdXRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgXG59XG4vKiBtYWdpY051bGwgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgQ2FtbF9zdHJpbmcgICAgICAgICAgICAgZnJvbSBcIi4vY2FtbF9zdHJpbmcuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfbWlzc2luZ19wb2x5ZmlsbCAgIGZyb20gXCIuL2NhbWxfbWlzc2luZ19wb2x5ZmlsbC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMgZnJvbSBcIi4vY2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuanNcIjtcblxuZnVuY3Rpb24gdG9fYnVmZmVyKGJ1ZmYsIG9mcywgbGVuLCBfLCBfJDEpIHtcbiAgaWYgKG9mcyA8IDAgfHwgbGVuIDwgMCB8fCBvZnMgPiAoYnVmZi5sZW5ndGggLSBsZW4gfCAwKSkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiTWFyc2hhbC50b19idWZmZXI6IHN1YnN0cmluZyBvdXQgb2YgYm91bmRzXCJcbiAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfb3V0cHV0X3ZhbHVlX3RvX2J1ZmZlciBub3QgaW1wbGVtZW50ZWQgYnkgYnVja2xlc2NyaXB0IHlldFxcblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRhX3NpemUoYnVmZiwgb2ZzKSB7XG4gIGlmIChvZnMgPCAwIHx8IG9mcyA+IChidWZmLmxlbmd0aCAtIDIwIHwgMCkpIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcIk1hcnNoYWwuZGF0YV9zaXplXCJcbiAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfbWFyc2hhbF9kYXRhX3NpemUgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG90YWxfc2l6ZShidWZmLCBvZnMpIHtcbiAgcmV0dXJuIDIwICsgZGF0YV9zaXplKGJ1ZmYsIG9mcykgfCAwO1xufVxuXG5mdW5jdGlvbiBmcm9tX2J5dGVzKGJ1ZmYsIG9mcykge1xuICBpZiAob2ZzIDwgMCB8fCBvZnMgPiAoYnVmZi5sZW5ndGggLSAyMCB8IDApKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJNYXJzaGFsLmZyb21fYnl0ZXNcIlxuICAgICAgICBdO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBDYW1sX21pc3NpbmdfcG9seWZpbGwubm90X2ltcGxlbWVudGVkKFwiY2FtbF9tYXJzaGFsX2RhdGFfc2l6ZSBub3QgaW1wbGVtZW50ZWQgYnkgYnVja2xlc2NyaXB0IHlldFxcblwiKTtcbiAgICBpZiAob2ZzID4gKGJ1ZmYubGVuZ3RoIC0gKDIwICsgbGVuIHwgMCkgfCAwKSkge1xuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgIFwiTWFyc2hhbC5mcm9tX2J5dGVzXCJcbiAgICAgICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfaW5wdXRfdmFsdWVfZnJvbV9zdHJpbmcgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21fc3RyaW5nKGJ1ZmYsIG9mcykge1xuICByZXR1cm4gZnJvbV9ieXRlcyhDYW1sX3N0cmluZy5ieXRlc19vZl9zdHJpbmcoYnVmZiksIG9mcyk7XG59XG5cbmZ1bmN0aW9uIHRvX2NoYW5uZWwoXywgXyQxLCBfJDIpIHtcbiAgcmV0dXJuIENhbWxfbWlzc2luZ19wb2x5ZmlsbC5ub3RfaW1wbGVtZW50ZWQoXCJjYW1sX291dHB1dF92YWx1ZSBub3QgaW1wbGVtZW50ZWQgYnkgYnVja2xlc2NyaXB0IHlldFxcblwiKTtcbn1cblxuZnVuY3Rpb24gZnJvbV9jaGFubmVsKCkge1xuICByZXR1cm4gQ2FtbF9taXNzaW5nX3BvbHlmaWxsLm5vdF9pbXBsZW1lbnRlZChcImNhbWxfaW5wdXRfdmFsdWUgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbnZhciBoZWFkZXJfc2l6ZSA9IDIwO1xuXG5leHBvcnQge1xuICB0b19jaGFubmVsICAgLFxuICB0b19idWZmZXIgICAgLFxuICBmcm9tX2NoYW5uZWwgLFxuICBmcm9tX2J5dGVzICAgLFxuICBmcm9tX3N0cmluZyAgLFxuICBoZWFkZXJfc2l6ZSAgLFxuICBkYXRhX3NpemUgICAgLFxuICB0b3RhbF9zaXplICAgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIE1hcnNoYWwgICAgICAgICAgICAgICAgIGZyb20gXCIuL21hcnNoYWwuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYXJyYXkgICAgICAgICAgICAgIGZyb20gXCIuL2NhbWxfYXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfbWlzc2luZ19wb2x5ZmlsbCAgIGZyb20gXCIuL2NhbWxfbWlzc2luZ19wb2x5ZmlsbC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMgZnJvbSBcIi4vY2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuanNcIjtcblxudmFyIGRvdWJsZV9maWVsZCA9IENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQ7XG5cbnZhciBzZXRfZG91YmxlX2ZpZWxkID0gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldDtcblxuZnVuY3Rpb24gbWFyc2hhbCgpIHtcbiAgcmV0dXJuIENhbWxfbWlzc2luZ19wb2x5ZmlsbC5ub3RfaW1wbGVtZW50ZWQoXCJjYW1sX291dHB1dF92YWx1ZV90b19zdHJpbmcgbm90IGltcGxlbWVudGVkIGJ5IGJ1Y2tsZXNjcmlwdCB5ZXRcXG5cIik7XG59XG5cbmZ1bmN0aW9uIHVubWFyc2hhbChzdHIsIHBvcykge1xuICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgTWFyc2hhbC5mcm9tX2J5dGVzKHN0ciwgcG9zKSxcbiAgICAgICAgICBwb3MgKyBNYXJzaGFsLnRvdGFsX3NpemUoc3RyLCBwb3MpIHwgMFxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBleHRlbnNpb25fc2xvdCh4KSB7XG4gIHZhciBzbG90ID0geC5sZW5ndGggIT09IHVuZGVmaW5lZCAmJiAoeC50YWcgfCAwKSAhPT0gMjQ4ICYmIHgubGVuZ3RoID49IDEgPyB4WzBdIDogeDtcbiAgdmFyIG5hbWU7XG4gIGlmIChzbG90Lmxlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHNsb3QudGFnID09PSAyNDgpIHtcbiAgICBuYW1lID0gc2xvdFswXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5ub3RfZm91bmQ7XG4gIH1cbiAgaWYgKG5hbWUudGFnID09PSAyNTIpIHtcbiAgICByZXR1cm4gc2xvdDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5ub3RfZm91bmQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uX25hbWUoeCkge1xuICB0cnkge1xuICAgIHZhciBzbG90ID0gZXh0ZW5zaW9uX3Nsb3QoeCk7XG4gICAgcmV0dXJuIHNsb3RbMF07XG4gIH1cbiAgY2F0Y2ggKGV4bil7XG4gICAgaWYgKGV4biA9PT0gQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMubm90X2ZvdW5kKSB7XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgXCJPYmouZXh0ZW5zaW9uX25hbWVcIlxuICAgICAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGV4bjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uX2lkKHgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgc2xvdCA9IGV4dGVuc2lvbl9zbG90KHgpO1xuICAgIHJldHVybiBzbG90WzFdO1xuICB9XG4gIGNhdGNoIChleG4pe1xuICAgIGlmIChleG4gPT09IENhbWxfYnVpbHRpbl9leGNlcHRpb25zLm5vdF9mb3VuZCkge1xuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgIFwiT2JqLmV4dGVuc2lvbl9pZFwiXG4gICAgICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXhuO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBleHRlbnNpb25fc2xvdCQxKHgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZXh0ZW5zaW9uX3Nsb3QoeCk7XG4gIH1cbiAgY2F0Y2ggKGV4bil7XG4gICAgaWYgKGV4biA9PT0gQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMubm90X2ZvdW5kKSB7XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgXCJPYmouZXh0ZW5zaW9uX3Nsb3RcIlxuICAgICAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGV4bjtcbiAgICB9XG4gIH1cbn1cblxudmFyIGZpcnN0X25vbl9jb25zdGFudF9jb25zdHJ1Y3Rvcl90YWcgPSAwO1xuXG52YXIgbGFzdF9ub25fY29uc3RhbnRfY29uc3RydWN0b3JfdGFnID0gMjQ1O1xuXG52YXIgbGF6eV90YWcgPSAyNDY7XG5cbnZhciBjbG9zdXJlX3RhZyA9IDI0NztcblxudmFyIG9iamVjdF90YWcgPSAyNDg7XG5cbnZhciBpbmZpeF90YWcgPSAyNDk7XG5cbnZhciBmb3J3YXJkX3RhZyA9IDI1MDtcblxudmFyIG5vX3NjYW5fdGFnID0gMjUxO1xuXG52YXIgYWJzdHJhY3RfdGFnID0gMjUxO1xuXG52YXIgc3RyaW5nX3RhZyA9IDI1MjtcblxudmFyIGRvdWJsZV90YWcgPSAyNTM7XG5cbnZhciBkb3VibGVfYXJyYXlfdGFnID0gMjU0O1xuXG52YXIgY3VzdG9tX3RhZyA9IDI1NTtcblxudmFyIGZpbmFsX3RhZyA9IDI1NTtcblxudmFyIGludF90YWcgPSAxMDAwO1xuXG52YXIgb3V0X29mX2hlYXBfdGFnID0gMTAwMTtcblxudmFyIHVuYWxpZ25lZF90YWcgPSAxMDAyO1xuXG5leHBvcnQge1xuICBkb3VibGVfZmllbGQgICAgICAgICAgICAgICAgICAgICAgICxcbiAgc2V0X2RvdWJsZV9maWVsZCAgICAgICAgICAgICAgICAgICAsXG4gIGZpcnN0X25vbl9jb25zdGFudF9jb25zdHJ1Y3Rvcl90YWcgLFxuICBsYXN0X25vbl9jb25zdGFudF9jb25zdHJ1Y3Rvcl90YWcgICxcbiAgbGF6eV90YWcgICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gIGNsb3N1cmVfdGFnICAgICAgICAgICAgICAgICAgICAgICAgLFxuICBvYmplY3RfdGFnICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgaW5maXhfdGFnICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gIGZvcndhcmRfdGFnICAgICAgICAgICAgICAgICAgICAgICAgLFxuICBub19zY2FuX3RhZyAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgYWJzdHJhY3RfdGFnICAgICAgICAgICAgICAgICAgICAgICAsXG4gIHN0cmluZ190YWcgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICBkb3VibGVfdGFnICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgZG91YmxlX2FycmF5X3RhZyAgICAgICAgICAgICAgICAgICAsXG4gIGN1c3RvbV90YWcgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICBmaW5hbF90YWcgICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgaW50X3RhZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gIG91dF9vZl9oZWFwX3RhZyAgICAgICAgICAgICAgICAgICAgLFxuICB1bmFsaWduZWRfdGFnICAgICAgICAgICAgICAgICAgICAgICxcbiAgZXh0ZW5zaW9uX25hbWUgICAgICAgICAgICAgICAgICAgICAsXG4gIGV4dGVuc2lvbl9pZCAgICAgICAgICAgICAgICAgICAgICAgLFxuICBleHRlbnNpb25fc2xvdCQxICAgICAgICAgICAgICAgICAgICAgYXMgZXh0ZW5zaW9uX3Nsb3QsXG4gIG1hcnNoYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICB1bm1hcnNoYWwgICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBDYW1sX2FycmF5ICAgICAgICAgICAgICBmcm9tIFwiLi9jYW1sX2FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgY2FtbF9tZXRob2RzX2NhY2hlID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfdmVjdCgxMDAwLCAwKTtcblxuZnVuY3Rpb24gY2FtbF9nZXRfcHVibGljX21ldGhvZChvYmosIHRhZywgY2FjaGVpZCkge1xuICB2YXIgbWV0aHMgPSBvYmpbMF07XG4gIHZhciBvZmZzID0gY2FtbF9tZXRob2RzX2NhY2hlW2NhY2hlaWRdO1xuICBpZiAobWV0aHNbb2Zmc10gPT09IHRhZykge1xuICAgIHJldHVybiBtZXRoc1tvZmZzIC0gMSB8IDBdO1xuICB9IGVsc2Uge1xuICAgIHZhciBhdXggPSBmdW5jdGlvbiAoX2kpIHtcbiAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgdmFyIGkgPSBfaTtcbiAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmFzc2VydF9mYWlsdXJlLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIFwiY2FtbF9vby5tbFwiLFxuICAgICAgICAgICAgICAgICAgNTksXG4gICAgICAgICAgICAgICAgICAyMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRoc1tpXSA9PT0gdGFnKSB7XG4gICAgICAgICAgY2FtbF9tZXRob2RzX2NhY2hlW2NhY2hlaWRdID0gaTtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaSA9IGkgLSAyIHwgMDtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gbWV0aHNbYXV4KChtZXRoc1swXSA8PCAxKSArIDEgfCAwKSAtIDEgfCAwXTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjYW1sX2dldF9wdWJsaWNfbWV0aG9kICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBPYmogICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9vYmouanNcIjtcbmltcG9ydCAqIGFzIExpc3QgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL2xpc3QuanNcIjtcbmltcG9ydCAqIGFzICQkQXJyYXkgICAgICAgICAgICAgICAgIGZyb20gXCIuL2FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBDdXJyeSAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vbyAgICAgICAgICAgICAgICAgZnJvbSBcIi4vY2FtbF9vby5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vYmogICAgICAgICAgICAgICAgZnJvbSBcIi4vY2FtbF9vYmouanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYXJyYXkgICAgICAgICAgICAgIGZyb20gXCIuL2NhbWxfYXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfaW50MzIgICAgICAgICAgICAgIGZyb20gXCIuL2NhbWxfaW50MzIuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfc3RyaW5nICAgICAgICAgICAgIGZyb20gXCIuL2NhbWxfc3RyaW5nLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgICAgICAgICBmcm9tIFwiLi9jYW1sX2V4Y2VwdGlvbnMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIGNvcHkobykge1xuICByZXR1cm4gQ2FtbF9leGNlcHRpb25zLmNhbWxfc2V0X29vX2lkKENhbWxfb2JqLmNhbWxfb2JqX2R1cChvKSk7XG59XG5cbnZhciBwYXJhbXMgPSAvKiByZWNvcmQgKi9bXG4gIC8qIGNvbXBhY3RfdGFibGUgOiB0cnVlICovMSxcbiAgLyogY29weV9wYXJlbnQgOiB0cnVlICovMSxcbiAgLyogY2xlYW5fd2hlbl9jb3B5aW5nIDogdHJ1ZSAqLzEsXG4gIC8qIHJldHJ5X2NvdW50ICovMyxcbiAgLyogYnVja2V0X3NtYWxsX3NpemUgKi8xNlxuXTtcblxuZnVuY3Rpb24gcHVibGljX21ldGhvZF9sYWJlbChzKSB7XG4gIHZhciBhY2N1ID0gMDtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBzLmxlbmd0aCAtIDEgfCAwOyBpIDw9IGlfZmluaXNoOyArK2kpe1xuICAgIGFjY3UgPSBDYW1sX2ludDMyLmltdWwoMjIzLCBhY2N1KSArIENhbWxfc3RyaW5nLmdldChzLCBpKSB8IDA7XG4gIH1cbiAgYWNjdSA9IGFjY3UgJiAyMTQ3NDgzNjQ3O1xuICBpZiAoYWNjdSA+IDEwNzM3NDE4MjMpIHtcbiAgICByZXR1cm4gYWNjdSAtIC0yMTQ3NDgzNjQ4IHwgMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYWNjdTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoZWlnaHQocGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuIHBhcmFtWzRdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShsLCB4LCBkLCByKSB7XG4gIHZhciBobCA9IGhlaWdodChsKTtcbiAgdmFyIGhyID0gaGVpZ2h0KHIpO1xuICByZXR1cm4gLyogTm9kZSAqL1tcbiAgICAgICAgICBsLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgZCxcbiAgICAgICAgICByLFxuICAgICAgICAgIGhsID49IGhyID8gaGwgKyAxIHwgMCA6IGhyICsgMSB8IDBcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gYmFsKGwsIHgsIGQsIHIpIHtcbiAgdmFyIGhsID0gbCA/IGxbNF0gOiAwO1xuICB2YXIgaHIgPSByID8gcls0XSA6IDA7XG4gIGlmIChobCA+IChociArIDIgfCAwKSkge1xuICAgIGlmIChsKSB7XG4gICAgICB2YXIgbHIgPSBsWzNdO1xuICAgICAgdmFyIGxkID0gbFsyXTtcbiAgICAgIHZhciBsdiA9IGxbMV07XG4gICAgICB2YXIgbGwgPSBsWzBdO1xuICAgICAgaWYgKGhlaWdodChsbCkgPj0gaGVpZ2h0KGxyKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlKGxsLCBsdiwgbGQsIGNyZWF0ZShsciwgeCwgZCwgcikpO1xuICAgICAgfSBlbHNlIGlmIChscikge1xuICAgICAgICByZXR1cm4gY3JlYXRlKGNyZWF0ZShsbCwgbHYsIGxkLCBsclswXSksIGxyWzFdLCBsclsyXSwgY3JlYXRlKGxyWzNdLCB4LCBkLCByKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICAgIFwiTWFwLmJhbFwiXG4gICAgICAgICAgICBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgXCJNYXAuYmFsXCJcbiAgICAgICAgICBdO1xuICAgIH1cbiAgfSBlbHNlIGlmIChociA+IChobCArIDIgfCAwKSkge1xuICAgIGlmIChyKSB7XG4gICAgICB2YXIgcnIgPSByWzNdO1xuICAgICAgdmFyIHJkID0gclsyXTtcbiAgICAgIHZhciBydiA9IHJbMV07XG4gICAgICB2YXIgcmwgPSByWzBdO1xuICAgICAgaWYgKGhlaWdodChycikgPj0gaGVpZ2h0KHJsKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlKGNyZWF0ZShsLCB4LCBkLCBybCksIHJ2LCByZCwgcnIpO1xuICAgICAgfSBlbHNlIGlmIChybCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlKGNyZWF0ZShsLCB4LCBkLCBybFswXSksIHJsWzFdLCBybFsyXSwgY3JlYXRlKHJsWzNdLCBydiwgcmQsIHJyKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICAgIFwiTWFwLmJhbFwiXG4gICAgICAgICAgICBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgXCJNYXAuYmFsXCJcbiAgICAgICAgICBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogTm9kZSAqL1tcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgICBobCA+PSBociA/IGhsICsgMSB8IDAgOiBociArIDEgfCAwXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGQoeCwgZGF0YSwgcGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgdmFyIHIgPSBwYXJhbVszXTtcbiAgICB2YXIgZCA9IHBhcmFtWzJdO1xuICAgIHZhciB2ID0gcGFyYW1bMV07XG4gICAgdmFyIGwgPSBwYXJhbVswXTtcbiAgICB2YXIgYyA9IENhbWxfc3RyaW5nLmNhbWxfc3RyaW5nX2NvbXBhcmUoeCwgdik7XG4gICAgaWYgKGMpIHtcbiAgICAgIGlmIChjIDwgMCkge1xuICAgICAgICByZXR1cm4gYmFsKGFkZCh4LCBkYXRhLCBsKSwgdiwgZCwgcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYmFsKGwsIHYsIGQsIGFkZCh4LCBkYXRhLCByKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiBOb2RlICovW1xuICAgICAgICAgICAgICBsLFxuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICByLFxuICAgICAgICAgICAgICBwYXJhbVs0XVxuICAgICAgICAgICAgXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIE5vZGUgKi9bXG4gICAgICAgICAgICAvKiBFbXB0eSAqLzAsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIC8qIEVtcHR5ICovMCxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmQoeCwgX3BhcmFtKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICB2YXIgYyA9IENhbWxfc3RyaW5nLmNhbWxfc3RyaW5nX2NvbXBhcmUoeCwgcGFyYW1bMV0pO1xuICAgICAgaWYgKGMpIHtcbiAgICAgICAgX3BhcmFtID0gYyA8IDAgPyBwYXJhbVswXSA6IHBhcmFtWzNdO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtWzJdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5ub3RfZm91bmQ7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBmb2xkKGYsIF9tLCBfYWNjdSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICB2YXIgbSA9IF9tO1xuICAgIGlmIChtKSB7XG4gICAgICBfYWNjdSA9IEN1cnJ5Ll8zKGYsIG1bMV0sIG1bMl0sIGZvbGQoZiwgbVswXSwgYWNjdSkpO1xuICAgICAgX20gPSBtWzNdO1xuICAgICAgY29udGludWUgO1xuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0JDEocGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuIHBhcmFtWzRdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSQxKGwsIHgsIGQsIHIpIHtcbiAgdmFyIGhsID0gaGVpZ2h0JDEobCk7XG4gIHZhciBociA9IGhlaWdodCQxKHIpO1xuICByZXR1cm4gLyogTm9kZSAqL1tcbiAgICAgICAgICBsLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgZCxcbiAgICAgICAgICByLFxuICAgICAgICAgIGhsID49IGhyID8gaGwgKyAxIHwgMCA6IGhyICsgMSB8IDBcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gYmFsJDEobCwgeCwgZCwgcikge1xuICB2YXIgaGwgPSBsID8gbFs0XSA6IDA7XG4gIHZhciBociA9IHIgPyByWzRdIDogMDtcbiAgaWYgKGhsID4gKGhyICsgMiB8IDApKSB7XG4gICAgaWYgKGwpIHtcbiAgICAgIHZhciBsciA9IGxbM107XG4gICAgICB2YXIgbGQgPSBsWzJdO1xuICAgICAgdmFyIGx2ID0gbFsxXTtcbiAgICAgIHZhciBsbCA9IGxbMF07XG4gICAgICBpZiAoaGVpZ2h0JDEobGwpID49IGhlaWdodCQxKGxyKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlJDEobGwsIGx2LCBsZCwgY3JlYXRlJDEobHIsIHgsIGQsIHIpKTtcbiAgICAgIH0gZWxzZSBpZiAobHIpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZSQxKGNyZWF0ZSQxKGxsLCBsdiwgbGQsIGxyWzBdKSwgbHJbMV0sIGxyWzJdLCBjcmVhdGUkMShsclszXSwgeCwgZCwgcikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgICBcIk1hcC5iYWxcIlxuICAgICAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgIFwiTWFwLmJhbFwiXG4gICAgICAgICAgXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaHIgPiAoaGwgKyAyIHwgMCkpIHtcbiAgICBpZiAocikge1xuICAgICAgdmFyIHJyID0gclszXTtcbiAgICAgIHZhciByZCA9IHJbMl07XG4gICAgICB2YXIgcnYgPSByWzFdO1xuICAgICAgdmFyIHJsID0gclswXTtcbiAgICAgIGlmIChoZWlnaHQkMShycikgPj0gaGVpZ2h0JDEocmwpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGUkMShjcmVhdGUkMShsLCB4LCBkLCBybCksIHJ2LCByZCwgcnIpO1xuICAgICAgfSBlbHNlIGlmIChybCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlJDEoY3JlYXRlJDEobCwgeCwgZCwgcmxbMF0pLCBybFsxXSwgcmxbMl0sIGNyZWF0ZSQxKHJsWzNdLCBydiwgcmQsIHJyKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICAgIFwiTWFwLmJhbFwiXG4gICAgICAgICAgICBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgXCJNYXAuYmFsXCJcbiAgICAgICAgICBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogTm9kZSAqL1tcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgICBobCA+PSBociA/IGhsICsgMSB8IDAgOiBociArIDEgfCAwXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGQkMSh4LCBkYXRhLCBwYXJhbSkge1xuICBpZiAocGFyYW0pIHtcbiAgICB2YXIgciA9IHBhcmFtWzNdO1xuICAgIHZhciBkID0gcGFyYW1bMl07XG4gICAgdmFyIHYgPSBwYXJhbVsxXTtcbiAgICB2YXIgbCA9IHBhcmFtWzBdO1xuICAgIHZhciBjID0gQ2FtbF9zdHJpbmcuY2FtbF9zdHJpbmdfY29tcGFyZSh4LCB2KTtcbiAgICBpZiAoYykge1xuICAgICAgaWYgKGMgPCAwKSB7XG4gICAgICAgIHJldHVybiBiYWwkMShhZGQkMSh4LCBkYXRhLCBsKSwgdiwgZCwgcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYmFsJDEobCwgdiwgZCwgYWRkJDEoeCwgZGF0YSwgcikpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogTm9kZSAqL1tcbiAgICAgICAgICAgICAgbCxcbiAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgcGFyYW1bNF1cbiAgICAgICAgICAgIF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBOb2RlICovW1xuICAgICAgICAgICAgLyogRW1wdHkgKi8wLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAvKiBFbXB0eSAqLzAsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoZWlnaHQkMihwYXJhbSkge1xuICBpZiAocGFyYW0pIHtcbiAgICByZXR1cm4gcGFyYW1bNF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlJDIobCwgeCwgZCwgcikge1xuICB2YXIgaGwgPSBoZWlnaHQkMihsKTtcbiAgdmFyIGhyID0gaGVpZ2h0JDIocik7XG4gIHJldHVybiAvKiBOb2RlICovW1xuICAgICAgICAgIGwsXG4gICAgICAgICAgeCxcbiAgICAgICAgICBkLFxuICAgICAgICAgIHIsXG4gICAgICAgICAgaGwgPj0gaHIgPyBobCArIDEgfCAwIDogaHIgKyAxIHwgMFxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBiYWwkMihsLCB4LCBkLCByKSB7XG4gIHZhciBobCA9IGwgPyBsWzRdIDogMDtcbiAgdmFyIGhyID0gciA/IHJbNF0gOiAwO1xuICBpZiAoaGwgPiAoaHIgKyAyIHwgMCkpIHtcbiAgICBpZiAobCkge1xuICAgICAgdmFyIGxyID0gbFszXTtcbiAgICAgIHZhciBsZCA9IGxbMl07XG4gICAgICB2YXIgbHYgPSBsWzFdO1xuICAgICAgdmFyIGxsID0gbFswXTtcbiAgICAgIGlmIChoZWlnaHQkMihsbCkgPj0gaGVpZ2h0JDIobHIpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGUkMihsbCwgbHYsIGxkLCBjcmVhdGUkMihsciwgeCwgZCwgcikpO1xuICAgICAgfSBlbHNlIGlmIChscikge1xuICAgICAgICByZXR1cm4gY3JlYXRlJDIoY3JlYXRlJDIobGwsIGx2LCBsZCwgbHJbMF0pLCBsclsxXSwgbHJbMl0sIGNyZWF0ZSQyKGxyWzNdLCB4LCBkLCByKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICAgIFwiTWFwLmJhbFwiXG4gICAgICAgICAgICBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgXCJNYXAuYmFsXCJcbiAgICAgICAgICBdO1xuICAgIH1cbiAgfSBlbHNlIGlmIChociA+IChobCArIDIgfCAwKSkge1xuICAgIGlmIChyKSB7XG4gICAgICB2YXIgcnIgPSByWzNdO1xuICAgICAgdmFyIHJkID0gclsyXTtcbiAgICAgIHZhciBydiA9IHJbMV07XG4gICAgICB2YXIgcmwgPSByWzBdO1xuICAgICAgaWYgKGhlaWdodCQyKHJyKSA+PSBoZWlnaHQkMihybCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZSQyKGNyZWF0ZSQyKGwsIHgsIGQsIHJsKSwgcnYsIHJkLCBycik7XG4gICAgICB9IGVsc2UgaWYgKHJsKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGUkMihjcmVhdGUkMihsLCB4LCBkLCBybFswXSksIHJsWzFdLCBybFsyXSwgY3JlYXRlJDIocmxbM10sIHJ2LCByZCwgcnIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IFtcbiAgICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgICAgXCJNYXAuYmFsXCJcbiAgICAgICAgICAgIF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICBcIk1hcC5iYWxcIlxuICAgICAgICAgIF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBOb2RlICovW1xuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICBkLFxuICAgICAgICAgICAgcixcbiAgICAgICAgICAgIGhsID49IGhyID8gaGwgKyAxIHwgMCA6IGhyICsgMSB8IDBcbiAgICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZCQyKHgsIGRhdGEsIHBhcmFtKSB7XG4gIGlmIChwYXJhbSkge1xuICAgIHZhciByID0gcGFyYW1bM107XG4gICAgdmFyIGQgPSBwYXJhbVsyXTtcbiAgICB2YXIgdiA9IHBhcmFtWzFdO1xuICAgIHZhciBsID0gcGFyYW1bMF07XG4gICAgdmFyIGMgPSBDYW1sX29iai5jYW1sX2ludF9jb21wYXJlKHgsIHYpO1xuICAgIGlmIChjKSB7XG4gICAgICBpZiAoYyA8IDApIHtcbiAgICAgICAgcmV0dXJuIGJhbCQyKGFkZCQyKHgsIGRhdGEsIGwpLCB2LCBkLCByKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBiYWwkMihsLCB2LCBkLCBhZGQkMih4LCBkYXRhLCByKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiBOb2RlICovW1xuICAgICAgICAgICAgICBsLFxuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICByLFxuICAgICAgICAgICAgICBwYXJhbVs0XVxuICAgICAgICAgICAgXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIE5vZGUgKi9bXG4gICAgICAgICAgICAvKiBFbXB0eSAqLzAsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIC8qIEVtcHR5ICovMCxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmQkMSh4LCBfcGFyYW0pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICBpZiAocGFyYW0pIHtcbiAgICAgIHZhciBjID0gQ2FtbF9vYmouY2FtbF9pbnRfY29tcGFyZSh4LCBwYXJhbVsxXSk7XG4gICAgICBpZiAoYykge1xuICAgICAgICBfcGFyYW0gPSBjIDwgMCA/IHBhcmFtWzBdIDogcGFyYW1bM107XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGFyYW1bMl07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IENhbWxfYnVpbHRpbl9leGNlcHRpb25zLm5vdF9mb3VuZDtcbiAgICB9XG4gIH07XG59XG5cbnZhciBkdW1teV90YWJsZSA9IC8qIHJlY29yZCAqL1tcbiAgLyogc2l6ZSAqLzAsXG4gIC8qIG1ldGhvZHMgOiBhcnJheSAqL1svKiAoKSAqLzBdLFxuICAvKiBtZXRob2RzX2J5X25hbWUgOiBFbXB0eSAqLzAsXG4gIC8qIG1ldGhvZHNfYnlfbGFiZWwgOiBFbXB0eSAqLzAsXG4gIC8qIHByZXZpb3VzX3N0YXRlcyA6IFtdICovMCxcbiAgLyogaGlkZGVuX21ldGhzIDogW10gKi8wLFxuICAvKiB2YXJzIDogRW1wdHkgKi8wLFxuICAvKiBpbml0aWFsaXplcnMgOiBbXSAqLzBcbl07XG5cbnZhciB0YWJsZV9jb3VudCA9IFswXTtcblxudmFyIGR1bW15X21ldCA9IFtdO1xuXG5mdW5jdGlvbiBmaXRfc2l6ZShuKSB7XG4gIGlmIChuIDw9IDIpIHtcbiAgICByZXR1cm4gbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZpdF9zaXplKChuICsgMSB8IDApIC8gMiB8IDApIDw8IDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5ld190YWJsZShwdWJfbGFiZWxzKSB7XG4gIHRhYmxlX2NvdW50WzBdID0gdGFibGVfY291bnRbMF0gKyAxIHwgMDtcbiAgdmFyIGxlbiA9IHB1Yl9sYWJlbHMubGVuZ3RoO1xuICB2YXIgbWV0aG9kcyA9IENhbWxfYXJyYXkuY2FtbF9tYWtlX3ZlY3QoKGxlbiA8PCAxKSArIDIgfCAwLCBkdW1teV9tZXQpO1xuICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KG1ldGhvZHMsIDAsIGxlbik7XG4gIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQobWV0aG9kcywgMSwgKChmaXRfc2l6ZShsZW4pIDw8IDUpIC8gOCB8IDApIC0gMSB8IDApO1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGxlbiAtIDEgfCAwOyBpIDw9IGlfZmluaXNoOyArK2kpe1xuICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQobWV0aG9kcywgKGkgPDwgMSkgKyAzIHwgMCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChwdWJfbGFiZWxzLCBpKSk7XG4gIH1cbiAgcmV0dXJuIC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAvKiBzaXplICovMixcbiAgICAgICAgICAvKiBtZXRob2RzICovbWV0aG9kcyxcbiAgICAgICAgICAvKiBtZXRob2RzX2J5X25hbWUgOiBFbXB0eSAqLzAsXG4gICAgICAgICAgLyogbWV0aG9kc19ieV9sYWJlbCA6IEVtcHR5ICovMCxcbiAgICAgICAgICAvKiBwcmV2aW91c19zdGF0ZXMgOiBbXSAqLzAsXG4gICAgICAgICAgLyogaGlkZGVuX21ldGhzIDogW10gKi8wLFxuICAgICAgICAgIC8qIHZhcnMgOiBFbXB0eSAqLzAsXG4gICAgICAgICAgLyogaW5pdGlhbGl6ZXJzIDogW10gKi8wXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZShhcnJheSwgbmV3X3NpemUpIHtcbiAgdmFyIG9sZF9zaXplID0gYXJyYXlbLyogbWV0aG9kcyAqLzFdLmxlbmd0aDtcbiAgaWYgKG5ld19zaXplID4gb2xkX3NpemUpIHtcbiAgICB2YXIgbmV3X2J1Y2sgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KG5ld19zaXplLCBkdW1teV9tZXQpO1xuICAgICQkQXJyYXkuYmxpdChhcnJheVsvKiBtZXRob2RzICovMV0sIDAsIG5ld19idWNrLCAwLCBvbGRfc2l6ZSk7XG4gICAgYXJyYXlbLyogbWV0aG9kcyAqLzFdID0gbmV3X2J1Y2s7XG4gICAgcmV0dXJuIC8qICgpICovMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG52YXIgbWV0aG9kX2NvdW50ID0gWzBdO1xuXG52YXIgaW5zdF92YXJfY291bnQgPSBbMF07XG5cbmZ1bmN0aW9uIG5ld19tZXRob2QodGFibGUpIHtcbiAgdmFyIGluZGV4ID0gdGFibGVbLyogbWV0aG9kcyAqLzFdLmxlbmd0aDtcbiAgcmVzaXplKHRhYmxlLCBpbmRleCArIDEgfCAwKTtcbiAgcmV0dXJuIGluZGV4O1xufVxuXG5mdW5jdGlvbiBnZXRfbWV0aG9kX2xhYmVsKHRhYmxlLCBuYW1lKSB7XG4gIHRyeSB7XG4gICAgdmFyIHggPSBuYW1lO1xuICAgIHZhciBfcGFyYW0gPSB0YWJsZVsvKiBtZXRob2RzX2J5X25hbWUgKi8yXTtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgICBpZiAocGFyYW0pIHtcbiAgICAgICAgdmFyIGMgPSBDYW1sX3N0cmluZy5jYW1sX3N0cmluZ19jb21wYXJlKHgsIHBhcmFtWzFdKTtcbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICBfcGFyYW0gPSBjIDwgMCA/IHBhcmFtWzBdIDogcGFyYW1bM107XG4gICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwYXJhbVsyXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMubm90X2ZvdW5kO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgY2F0Y2ggKGV4bil7XG4gICAgaWYgKGV4biA9PT0gQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMubm90X2ZvdW5kKSB7XG4gICAgICB2YXIgbGFiZWwgPSBuZXdfbWV0aG9kKHRhYmxlKTtcbiAgICAgIHRhYmxlWy8qIG1ldGhvZHNfYnlfbmFtZSAqLzJdID0gYWRkJDEobmFtZSwgbGFiZWwsIHRhYmxlWy8qIG1ldGhvZHNfYnlfbmFtZSAqLzJdKTtcbiAgICAgIHRhYmxlWy8qIG1ldGhvZHNfYnlfbGFiZWwgKi8zXSA9IGFkZCQyKGxhYmVsLCAvKiB0cnVlICovMSwgdGFibGVbLyogbWV0aG9kc19ieV9sYWJlbCAqLzNdKTtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXhuO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRfbWV0aG9kX2xhYmVscyh0YWJsZSwgbmFtZXMpIHtcbiAgcmV0dXJuICQkQXJyYXkubWFwKChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0X21ldGhvZF9sYWJlbCh0YWJsZSwgcGFyYW0pO1xuICAgICAgICAgICAgICB9KSwgbmFtZXMpO1xufVxuXG5mdW5jdGlvbiBzZXRfbWV0aG9kKHRhYmxlLCBsYWJlbCwgZWxlbWVudCkge1xuICBtZXRob2RfY291bnRbMF0gPSBtZXRob2RfY291bnRbMF0gKyAxIHwgMDtcbiAgaWYgKGZpbmQkMShsYWJlbCwgdGFibGVbLyogbWV0aG9kc19ieV9sYWJlbCAqLzNdKSkge1xuICAgIHZhciBhcnJheSA9IHRhYmxlO1xuICAgIHZhciBsYWJlbCQxID0gbGFiZWw7XG4gICAgdmFyIGVsZW1lbnQkMSA9IGVsZW1lbnQ7XG4gICAgcmVzaXplKGFycmF5LCBsYWJlbCQxICsgMSB8IDApO1xuICAgIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGFycmF5Wy8qIG1ldGhvZHMgKi8xXSwgbGFiZWwkMSwgZWxlbWVudCQxKTtcbiAgfSBlbHNlIHtcbiAgICB0YWJsZVsvKiBoaWRkZW5fbWV0aHMgKi81XSA9IC8qIDo6ICovW1xuICAgICAgLyogdHVwbGUgKi9bXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBlbGVtZW50XG4gICAgICBdLFxuICAgICAgdGFibGVbLyogaGlkZGVuX21ldGhzICovNV1cbiAgICBdO1xuICAgIHJldHVybiAvKiAoKSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0X21ldGhvZCh0YWJsZSwgbGFiZWwpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gTGlzdC5hc3NvYyhsYWJlbCwgdGFibGVbLyogaGlkZGVuX21ldGhzICovNV0pO1xuICB9XG4gIGNhdGNoIChleG4pe1xuICAgIGlmIChleG4gPT09IENhbWxfYnVpbHRpbl9leGNlcHRpb25zLm5vdF9mb3VuZCkge1xuICAgICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQodGFibGVbLyogbWV0aG9kcyAqLzFdLCBsYWJlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGV4bjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9fbGlzdChhcnIpIHtcbiAgaWYgKGFycikge1xuICAgIHJldHVybiAkJEFycmF5LnRvX2xpc3QoYXJyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5hcnJvdyh0YWJsZSwgdmFycywgdmlydF9tZXRocywgY29uY3JfbWV0aHMpIHtcbiAgdmFyIHZhcnMkMSA9IHRvX2xpc3QodmFycyk7XG4gIHZhciB2aXJ0X21ldGhzJDEgPSB0b19saXN0KHZpcnRfbWV0aHMpO1xuICB2YXIgY29uY3JfbWV0aHMkMSA9IHRvX2xpc3QoY29uY3JfbWV0aHMpO1xuICB2YXIgdmlydF9tZXRoX2xhYnMgPSBMaXN0Lm1hcCgoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgcmV0dXJuIGdldF9tZXRob2RfbGFiZWwodGFibGUsIHBhcmFtKTtcbiAgICAgICAgfSksIHZpcnRfbWV0aHMkMSk7XG4gIHZhciBjb25jcl9tZXRoX2xhYnMgPSBMaXN0Lm1hcCgoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgcmV0dXJuIGdldF9tZXRob2RfbGFiZWwodGFibGUsIHBhcmFtKTtcbiAgICAgICAgfSksIGNvbmNyX21ldGhzJDEpO1xuICB0YWJsZVsvKiBwcmV2aW91c19zdGF0ZXMgKi80XSA9IC8qIDo6ICovW1xuICAgIC8qIHR1cGxlICovW1xuICAgICAgdGFibGVbLyogbWV0aG9kc19ieV9uYW1lICovMl0sXG4gICAgICB0YWJsZVsvKiBtZXRob2RzX2J5X2xhYmVsICovM10sXG4gICAgICB0YWJsZVsvKiBoaWRkZW5fbWV0aHMgKi81XSxcbiAgICAgIHRhYmxlWy8qIHZhcnMgKi82XSxcbiAgICAgIHZpcnRfbWV0aF9sYWJzLFxuICAgICAgdmFycyQxXG4gICAgXSxcbiAgICB0YWJsZVsvKiBwcmV2aW91c19zdGF0ZXMgKi80XVxuICBdO1xuICB0YWJsZVsvKiB2YXJzICovNl0gPSBmb2xkKChmdW5jdGlvbiAobGFiLCBpbmZvLCB0dmFycykge1xuICAgICAgICAgIGlmIChMaXN0Lm1lbShsYWIsIHZhcnMkMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhZGQobGFiLCBpbmZvLCB0dmFycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0dmFycztcbiAgICAgICAgICB9XG4gICAgICAgIH0pLCB0YWJsZVsvKiB2YXJzICovNl0sIC8qIEVtcHR5ICovMCk7XG4gIHZhciBieV9uYW1lID0gWy8qIEVtcHR5ICovMF07XG4gIHZhciBieV9sYWJlbCA9IFsvKiBFbXB0eSAqLzBdO1xuICBMaXN0Lml0ZXIyKChmdW5jdGlvbiAobWV0LCBsYWJlbCkge1xuICAgICAgICAgIGJ5X25hbWVbMF0gPSBhZGQkMShtZXQsIGxhYmVsLCBieV9uYW1lWzBdKTtcbiAgICAgICAgICB2YXIgdG1wO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0bXAgPSBmaW5kJDEobGFiZWwsIHRhYmxlWy8qIG1ldGhvZHNfYnlfbGFiZWwgKi8zXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoIChleG4pe1xuICAgICAgICAgICAgaWYgKGV4biA9PT0gQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMubm90X2ZvdW5kKSB7XG4gICAgICAgICAgICAgIHRtcCA9IC8qIHRydWUgKi8xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgZXhuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBieV9sYWJlbFswXSA9IGFkZCQyKGxhYmVsLCB0bXAsIGJ5X2xhYmVsWzBdKTtcbiAgICAgICAgICByZXR1cm4gLyogKCkgKi8wO1xuICAgICAgICB9KSwgY29uY3JfbWV0aHMkMSwgY29uY3JfbWV0aF9sYWJzKTtcbiAgTGlzdC5pdGVyMigoZnVuY3Rpb24gKG1ldCwgbGFiZWwpIHtcbiAgICAgICAgICBieV9uYW1lWzBdID0gYWRkJDEobWV0LCBsYWJlbCwgYnlfbmFtZVswXSk7XG4gICAgICAgICAgYnlfbGFiZWxbMF0gPSBhZGQkMihsYWJlbCwgLyogZmFsc2UgKi8wLCBieV9sYWJlbFswXSk7XG4gICAgICAgICAgcmV0dXJuIC8qICgpICovMDtcbiAgICAgICAgfSksIHZpcnRfbWV0aHMkMSwgdmlydF9tZXRoX2xhYnMpO1xuICB0YWJsZVsvKiBtZXRob2RzX2J5X25hbWUgKi8yXSA9IGJ5X25hbWVbMF07XG4gIHRhYmxlWy8qIG1ldGhvZHNfYnlfbGFiZWwgKi8zXSA9IGJ5X2xhYmVsWzBdO1xuICB0YWJsZVsvKiBoaWRkZW5fbWV0aHMgKi81XSA9IExpc3QuZm9sZF9yaWdodCgoZnVuY3Rpb24gKG1ldCwgaG0pIHtcbiAgICAgICAgICBpZiAoTGlzdC5tZW0obWV0WzBdLCB2aXJ0X21ldGhfbGFicykpIHtcbiAgICAgICAgICAgIHJldHVybiBobTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgICBtZXQsXG4gICAgICAgICAgICAgICAgICAgIGhtXG4gICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksIHRhYmxlWy8qIGhpZGRlbl9tZXRocyAqLzVdLCAvKiBbXSAqLzApO1xuICByZXR1cm4gLyogKCkgKi8wO1xufVxuXG5mdW5jdGlvbiB3aWRlbih0YWJsZSkge1xuICB2YXIgbWF0Y2ggPSBMaXN0LmhkKHRhYmxlWy8qIHByZXZpb3VzX3N0YXRlcyAqLzRdKTtcbiAgdmFyIHZpcnRfbWV0aHMgPSBtYXRjaFs0XTtcbiAgdGFibGVbLyogcHJldmlvdXNfc3RhdGVzICovNF0gPSBMaXN0LnRsKHRhYmxlWy8qIHByZXZpb3VzX3N0YXRlcyAqLzRdKTtcbiAgdGFibGVbLyogdmFycyAqLzZdID0gTGlzdC5mb2xkX2xlZnQoKGZ1bmN0aW9uIChzLCB2KSB7XG4gICAgICAgICAgcmV0dXJuIGFkZCh2LCBmaW5kKHYsIHRhYmxlWy8qIHZhcnMgKi82XSksIHMpO1xuICAgICAgICB9KSwgbWF0Y2hbM10sIG1hdGNoWzVdKTtcbiAgdGFibGVbLyogbWV0aG9kc19ieV9uYW1lICovMl0gPSBtYXRjaFswXTtcbiAgdGFibGVbLyogbWV0aG9kc19ieV9sYWJlbCAqLzNdID0gbWF0Y2hbMV07XG4gIHRhYmxlWy8qIGhpZGRlbl9tZXRocyAqLzVdID0gTGlzdC5mb2xkX3JpZ2h0KChmdW5jdGlvbiAobWV0LCBobSkge1xuICAgICAgICAgIGlmIChMaXN0Lm1lbShtZXRbMF0sIHZpcnRfbWV0aHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gaG07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgbWV0LFxuICAgICAgICAgICAgICAgICAgICBobVxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLCB0YWJsZVsvKiBoaWRkZW5fbWV0aHMgKi81XSwgbWF0Y2hbMl0pO1xuICByZXR1cm4gLyogKCkgKi8wO1xufVxuXG5mdW5jdGlvbiBuZXdfc2xvdCh0YWJsZSkge1xuICB2YXIgaW5kZXggPSB0YWJsZVsvKiBzaXplICovMF07XG4gIHRhYmxlWy8qIHNpemUgKi8wXSA9IGluZGV4ICsgMSB8IDA7XG4gIHJldHVybiBpbmRleDtcbn1cblxuZnVuY3Rpb24gbmV3X3ZhcmlhYmxlKHRhYmxlLCBuYW1lKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZpbmQobmFtZSwgdGFibGVbLyogdmFycyAqLzZdKTtcbiAgfVxuICBjYXRjaCAoZXhuKXtcbiAgICBpZiAoZXhuID09PSBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5ub3RfZm91bmQpIHtcbiAgICAgIHZhciBpbmRleCA9IG5ld19zbG90KHRhYmxlKTtcbiAgICAgIGlmIChuYW1lICE9PSBcIlwiKSB7XG4gICAgICAgIHRhYmxlWy8qIHZhcnMgKi82XSA9IGFkZChuYW1lLCBpbmRleCwgdGFibGVbLyogdmFycyAqLzZdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXhuO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0b19hcnJheShhcnIpIHtcbiAgaWYgKENhbWxfb2JqLmNhbWxfZXF1YWwoYXJyLCAwKSkge1xuICAgIHJldHVybiAvKiBhcnJheSAqL1tdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhcnI7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV3X21ldGhvZHNfdmFyaWFibGVzKHRhYmxlLCBtZXRocywgdmFscykge1xuICB2YXIgbWV0aHMkMSA9IHRvX2FycmF5KG1ldGhzKTtcbiAgdmFyIG5tZXRocyA9IG1ldGhzJDEubGVuZ3RoO1xuICB2YXIgbnZhbHMgPSB2YWxzLmxlbmd0aDtcbiAgdmFyIHJlcyA9IENhbWxfYXJyYXkuY2FtbF9tYWtlX3ZlY3Qobm1ldGhzICsgbnZhbHMgfCAwLCAwKTtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBubWV0aHMgLSAxIHwgMDsgaSA8PSBpX2ZpbmlzaDsgKytpKXtcbiAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KHJlcywgaSwgZ2V0X21ldGhvZF9sYWJlbCh0YWJsZSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChtZXRocyQxLCBpKSkpO1xuICB9XG4gIGZvcih2YXIgaSQxID0gMCAsaV9maW5pc2gkMSA9IG52YWxzIC0gMSB8IDA7IGkkMSA8PSBpX2ZpbmlzaCQxOyArK2kkMSl7XG4gICAgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChyZXMsIGkkMSArIG5tZXRocyB8IDAsIG5ld192YXJpYWJsZSh0YWJsZSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldCh2YWxzLCBpJDEpKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gZ2V0X3ZhcmlhYmxlKHRhYmxlLCBuYW1lKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZpbmQobmFtZSwgdGFibGVbLyogdmFycyAqLzZdKTtcbiAgfVxuICBjYXRjaCAoZXhuKXtcbiAgICBpZiAoZXhuID09PSBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5ub3RfZm91bmQpIHtcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmFzc2VydF9mYWlsdXJlLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBcImNhbWxpbnRlcm5hbE9PLm1sXCIsXG4gICAgICAgICAgICAgIDI4NSxcbiAgICAgICAgICAgICAgNTBcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBleG47XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldF92YXJpYWJsZXModGFibGUsIG5hbWVzKSB7XG4gIHJldHVybiAkJEFycmF5Lm1hcCgoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldF92YXJpYWJsZSh0YWJsZSwgcGFyYW0pO1xuICAgICAgICAgICAgICB9KSwgbmFtZXMpO1xufVxuXG5mdW5jdGlvbiBhZGRfaW5pdGlhbGl6ZXIodGFibGUsIGYpIHtcbiAgdGFibGVbLyogaW5pdGlhbGl6ZXJzICovN10gPSAvKiA6OiAqL1tcbiAgICBmLFxuICAgIHRhYmxlWy8qIGluaXRpYWxpemVycyAqLzddXG4gIF07XG4gIHJldHVybiAvKiAoKSAqLzA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV90YWJsZShwdWJsaWNfbWV0aG9kcykge1xuICBpZiAocHVibGljX21ldGhvZHMpIHtcbiAgICB2YXIgdGFncyA9ICQkQXJyYXkubWFwKHB1YmxpY19tZXRob2RfbGFiZWwsIHB1YmxpY19tZXRob2RzKTtcbiAgICB2YXIgdGFibGUgPSBuZXdfdGFibGUodGFncyk7XG4gICAgJCRBcnJheS5pdGVyaSgoZnVuY3Rpb24gKGksIG1ldCkge1xuICAgICAgICAgICAgdmFyIGxhYiA9IChpIDw8IDEpICsgMiB8IDA7XG4gICAgICAgICAgICB0YWJsZVsvKiBtZXRob2RzX2J5X25hbWUgKi8yXSA9IGFkZCQxKG1ldCwgbGFiLCB0YWJsZVsvKiBtZXRob2RzX2J5X25hbWUgKi8yXSk7XG4gICAgICAgICAgICB0YWJsZVsvKiBtZXRob2RzX2J5X2xhYmVsICovM10gPSBhZGQkMihsYWIsIC8qIHRydWUgKi8xLCB0YWJsZVsvKiBtZXRob2RzX2J5X2xhYmVsICovM10pO1xuICAgICAgICAgICAgcmV0dXJuIC8qICgpICovMDtcbiAgICAgICAgICB9KSwgcHVibGljX21ldGhvZHMpO1xuICAgIHJldHVybiB0YWJsZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3X3RhYmxlKC8qIGFycmF5ICovW10pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRfY2xhc3ModGFibGUpIHtcbiAgaW5zdF92YXJfY291bnRbMF0gPSAoaW5zdF92YXJfY291bnRbMF0gKyB0YWJsZVsvKiBzaXplICovMF0gfCAwKSAtIDEgfCAwO1xuICB0YWJsZVsvKiBpbml0aWFsaXplcnMgKi83XSA9IExpc3QucmV2KHRhYmxlWy8qIGluaXRpYWxpemVycyAqLzddKTtcbiAgcmV0dXJuIHJlc2l6ZSh0YWJsZSwgMyArICgoQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldCh0YWJsZVsvKiBtZXRob2RzICovMV0sIDEpIDw8IDQpIC8gMzIgfCAwKSB8IDApO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0cyhjbGEsIHZhbHMsIHZpcnRfbWV0aHMsIGNvbmNyX21ldGhzLCBwYXJhbSwgdG9wKSB7XG4gIHZhciAkJHN1cGVyID0gcGFyYW1bMV07XG4gIG5hcnJvdyhjbGEsIHZhbHMsIHZpcnRfbWV0aHMsIGNvbmNyX21ldGhzKTtcbiAgdmFyIGluaXQgPSB0b3AgPyBDdXJyeS5fMigkJHN1cGVyLCBjbGEsIHBhcmFtWzNdKSA6IEN1cnJ5Ll8xKCQkc3VwZXIsIGNsYSk7XG4gIHdpZGVuKGNsYSk7XG4gIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfY29uY2F0KC8qIDo6ICovW1xuICAgICAgICAgICAgICAvKiBhcnJheSAqL1tpbml0XSxcbiAgICAgICAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgICAgICAgJCRBcnJheS5tYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldF92YXJpYWJsZShjbGEsIHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSwgdG9fYXJyYXkodmFscykpLFxuICAgICAgICAgICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgICAgICAgICAgJCRBcnJheS5tYXAoKGZ1bmN0aW9uIChubSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0X21ldGhvZChjbGEsIGdldF9tZXRob2RfbGFiZWwoY2xhLCBubSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIHRvX2FycmF5KGNvbmNyX21ldGhzKSksXG4gICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0pO1xufVxuXG5mdW5jdGlvbiBtYWtlX2NsYXNzKHB1Yl9tZXRocywgY2xhc3NfaW5pdCkge1xuICB2YXIgdGFibGUgPSBjcmVhdGVfdGFibGUocHViX21ldGhzKTtcbiAgdmFyIGVudl9pbml0ID0gQ3VycnkuXzEoY2xhc3NfaW5pdCwgdGFibGUpO1xuICBpbml0X2NsYXNzKHRhYmxlKTtcbiAgcmV0dXJuIC8qIHR1cGxlICovW1xuICAgICAgICAgIEN1cnJ5Ll8xKGVudl9pbml0LCAwKSxcbiAgICAgICAgICBjbGFzc19pbml0LFxuICAgICAgICAgIGVudl9pbml0LFxuICAgICAgICAgIDBcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gbWFrZV9jbGFzc19zdG9yZShwdWJfbWV0aHMsIGNsYXNzX2luaXQsIGluaXRfdGFibGUpIHtcbiAgdmFyIHRhYmxlID0gY3JlYXRlX3RhYmxlKHB1Yl9tZXRocyk7XG4gIHZhciBlbnZfaW5pdCA9IEN1cnJ5Ll8xKGNsYXNzX2luaXQsIHRhYmxlKTtcbiAgaW5pdF9jbGFzcyh0YWJsZSk7XG4gIGluaXRfdGFibGVbLyogY2xhc3NfaW5pdCAqLzFdID0gY2xhc3NfaW5pdDtcbiAgaW5pdF90YWJsZVsvKiBlbnZfaW5pdCAqLzBdID0gZW52X2luaXQ7XG4gIHJldHVybiAvKiAoKSAqLzA7XG59XG5cbmZ1bmN0aW9uIGR1bW15X2NsYXNzKGxvYykge1xuICB2YXIgdW5kZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLnVuZGVmaW5lZF9yZWN1cnNpdmVfbW9kdWxlLFxuICAgICAgICAgIGxvY1xuICAgICAgICBdO1xuICB9O1xuICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgdW5kZWYsXG4gICAgICAgICAgdW5kZWYsXG4gICAgICAgICAgdW5kZWYsXG4gICAgICAgICAgMFxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfb2JqZWN0KHRhYmxlKSB7XG4gIHZhciBvYmogPSB7XG4gICAgbGVuZ3RoOiB0YWJsZVsvKiBzaXplICovMF0sXG4gICAgdGFnOiBPYmoub2JqZWN0X3RhZ1xuICB9O1xuICBvYmpbMF0gPSB0YWJsZVsvKiBtZXRob2RzICovMV07XG4gIHJldHVybiBDYW1sX2V4Y2VwdGlvbnMuY2FtbF9zZXRfb29faWQob2JqKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX29iamVjdF9vcHQob2JqXzAsIHRhYmxlKSB7XG4gIGlmIChvYmpfMCkge1xuICAgIHJldHVybiBvYmpfMDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgbGVuZ3RoOiB0YWJsZVsvKiBzaXplICovMF0sXG4gICAgICB0YWc6IE9iai5vYmplY3RfdGFnXG4gICAgfTtcbiAgICBvYmpbMF0gPSB0YWJsZVsvKiBtZXRob2RzICovMV07XG4gICAgcmV0dXJuIENhbWxfZXhjZXB0aW9ucy5jYW1sX3NldF9vb19pZChvYmopO1xuICB9XG59XG5cbmZ1bmN0aW9uIGl0ZXJfZihvYmosIF9wYXJhbSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIGlmIChwYXJhbSkge1xuICAgICAgQ3VycnkuXzEocGFyYW1bMF0sIG9iaik7XG4gICAgICBfcGFyYW0gPSBwYXJhbVsxXTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogKCkgKi8wO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcnVuX2luaXRpYWxpemVycyhvYmosIHRhYmxlKSB7XG4gIHZhciBpbml0cyA9IHRhYmxlWy8qIGluaXRpYWxpemVycyAqLzddO1xuICBpZiAoaW5pdHMgIT09IC8qIFtdICovMCkge1xuICAgIHJldHVybiBpdGVyX2Yob2JqLCBpbml0cyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuX2luaXRpYWxpemVyc19vcHQob2JqXzAsIG9iaiwgdGFibGUpIHtcbiAgaWYgKG9ial8wKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5pdHMgPSB0YWJsZVsvKiBpbml0aWFsaXplcnMgKi83XTtcbiAgICBpZiAoaW5pdHMgIT09IC8qIFtdICovMCkge1xuICAgICAgaXRlcl9mKG9iaiwgaW5pdHMpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9vYmplY3RfYW5kX3J1bl9pbml0aWFsaXplcnMob2JqXzAsIHRhYmxlKSB7XG4gIGlmIChvYmpfMCkge1xuICAgIHJldHVybiBvYmpfMDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgb2JqID0gY3JlYXRlX29iamVjdCh0YWJsZSk7XG4gICAgcnVuX2luaXRpYWxpemVycyhvYmosIHRhYmxlKTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkX3BhdGgobiwga2V5cywgdGFibGVzKSB7XG4gIHZhciByZXMgPSAvKiByZWNvcmQgKi9bXG4gICAgLyoga2V5ICovMCxcbiAgICAvKiBkYXRhIDogRW1wdHkgKi8wLFxuICAgIC8qIG5leHQgOiBFbXB0eSAqLzBcbiAgXTtcbiAgdmFyIHIgPSByZXM7XG4gIGZvcih2YXIgaSA9IDA7IGkgPD0gbjsgKytpKXtcbiAgICByID0gLyogQ29ucyAqL1tcbiAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoa2V5cywgaSksXG4gICAgICByLFxuICAgICAgLyogRW1wdHkgKi8wXG4gICAgXTtcbiAgfVxuICB0YWJsZXNbLyogZGF0YSAqLzFdID0gcjtcbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbG9va3VwX2tleXMoaSwga2V5cywgdGFibGVzKSB7XG4gIGlmIChpIDwgMCkge1xuICAgIHJldHVybiB0YWJsZXM7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGtleSA9IENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoa2V5cywgaSk7XG4gICAgdmFyIF90YWJsZXMgPSB0YWJsZXM7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIHRhYmxlcyQxID0gX3RhYmxlcztcbiAgICAgIGlmICh0YWJsZXMkMVsvKiBrZXkgKi8wXSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBsb29rdXBfa2V5cyhpIC0gMSB8IDAsIGtleXMsIHRhYmxlcyQxWy8qIGRhdGEgKi8xXSk7XG4gICAgICB9IGVsc2UgaWYgKHRhYmxlcyQxWy8qIG5leHQgKi8yXSAhPT0gLyogRW1wdHkgKi8wKSB7XG4gICAgICAgIF90YWJsZXMgPSB0YWJsZXMkMVsvKiBuZXh0ICovMl07XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV4dCA9IC8qIENvbnMgKi9bXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIC8qIEVtcHR5ICovMCxcbiAgICAgICAgICAvKiBFbXB0eSAqLzBcbiAgICAgICAgXTtcbiAgICAgICAgdGFibGVzJDFbLyogbmV4dCAqLzJdID0gbmV4dDtcbiAgICAgICAgcmV0dXJuIGJ1aWxkX3BhdGgoaSAtIDEgfCAwLCBrZXlzLCBuZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvb2t1cF90YWJsZXMocm9vdCwga2V5cykge1xuICBpZiAocm9vdFsvKiBkYXRhICovMV0gIT09IC8qIEVtcHR5ICovMCkge1xuICAgIHJldHVybiBsb29rdXBfa2V5cyhrZXlzLmxlbmd0aCAtIDEgfCAwLCBrZXlzLCByb290Wy8qIGRhdGEgKi8xXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJ1aWxkX3BhdGgoa2V5cy5sZW5ndGggLSAxIHwgMCwga2V5cywgcm9vdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV3X2NhY2hlKHRhYmxlKSB7XG4gIHZhciBuID0gbmV3X21ldGhvZCh0YWJsZSk7XG4gIHZhciBuJDEgPSBuICUgMiA9PT0gMCB8fCBuID4gKDIgKyAoKENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQodGFibGVbLyogbWV0aG9kcyAqLzFdLCAxKSA8PCA0KSAvIDMyIHwgMCkgfCAwKSA/IG4gOiBuZXdfbWV0aG9kKHRhYmxlKTtcbiAgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldCh0YWJsZVsvKiBtZXRob2RzICovMV0sIG4kMSwgMCk7XG4gIHJldHVybiBuJDE7XG59XG5cbmZ1bmN0aW9uIG1ldGhvZF9pbXBsKHRhYmxlLCBpLCBhcnIpIHtcbiAgdmFyIG5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaVswXSA9IGlbMF0gKyAxIHwgMDtcbiAgICByZXR1cm4gQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhcnIsIGlbMF0pO1xuICB9O1xuICB2YXIgY2xvID0gbmV4dCgvKiAoKSAqLzApO1xuICBpZiAodHlwZW9mIGNsbyA9PT0gXCJudW1iZXJcIikge1xuICAgIHN3aXRjaCAoY2xvKSB7XG4gICAgICBjYXNlIDAgOiBcbiAgICAgICAgICB2YXIgeCA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgMSA6IFxuICAgICAgICAgIHZhciBuID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICByZXR1cm4gb2JqW25dO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDIgOiBcbiAgICAgICAgICB2YXIgZSA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgbiQxID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBlJDEgPSBlO1xuICAgICAgICAgIHZhciBuJDIgPSBuJDE7XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvYmpbZSQxXVtuJDJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDMgOiBcbiAgICAgICAgICB2YXIgbiQzID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEob2JqWzBdW24kM10sIG9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNCA6IFxuICAgICAgICAgIHZhciBuJDQgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAob2JqLCB4KSB7XG4gICAgICAgICAgICAgIG9ialtuJDRdID0geDtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qICgpICovMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA1IDogXG4gICAgICAgICAgdmFyIGYgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIHgkMSA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGYsIHgkMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNiA6IFxuICAgICAgICAgIHZhciBmJDEgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIG4kNSA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGYkMSwgb2JqW24kNV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDcgOiBcbiAgICAgICAgICB2YXIgZiQyID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBlJDIgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIG4kNiA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgZiQzID0gZiQyO1xuICAgICAgICAgIHZhciBlJDMgPSBlJDI7XG4gICAgICAgICAgdmFyIG4kNyA9IG4kNjtcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGYkMywgb2JqW2UkM11bbiQ3XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgOCA6IFxuICAgICAgICAgIHZhciBmJDQgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIG4kOCA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgZiQ1ID0gZiQ0O1xuICAgICAgICAgIHZhciBuJDkgPSBuJDg7XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShmJDUsIEN1cnJ5Ll8xKG9ialswXVtuJDldLCBvYmopKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA5IDogXG4gICAgICAgICAgdmFyIGYkNiA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgeCQyID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciB5ID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIoZiQ2LCB4JDIsIHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDEwIDogXG4gICAgICAgICAgdmFyIGYkNyA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgeCQzID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBuJDEwID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBmJDggPSBmJDc7XG4gICAgICAgICAgdmFyIHgkNCA9IHgkMztcbiAgICAgICAgICB2YXIgbiQxMSA9IG4kMTA7XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihmJDgsIHgkNCwgb2JqW24kMTFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSAxMSA6IFxuICAgICAgICAgIHZhciBmJDkgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIHgkNSA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgZSQ0ID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBuJDEyID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBmJDEwID0gZiQ5O1xuICAgICAgICAgIHZhciB4JDYgPSB4JDU7XG4gICAgICAgICAgdmFyIGUkNSA9IGUkNDtcbiAgICAgICAgICB2YXIgbiQxMyA9IG4kMTI7XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihmJDEwLCB4JDYsIG9ialtlJDVdW24kMTNdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSAxMiA6IFxuICAgICAgICAgIHZhciBmJDExID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciB4JDcgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIG4kMTQgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIGYkMTIgPSBmJDExO1xuICAgICAgICAgIHZhciB4JDggPSB4JDc7XG4gICAgICAgICAgdmFyIG4kMTUgPSBuJDE0O1xuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIoZiQxMiwgeCQ4LCBDdXJyeS5fMShvYmpbMF1bbiQxNV0sIG9iaikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDEzIDogXG4gICAgICAgICAgdmFyIGYkMTMgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIG4kMTYgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIHgkOSA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgZiQxNCA9IGYkMTM7XG4gICAgICAgICAgdmFyIG4kMTcgPSBuJDE2O1xuICAgICAgICAgIHZhciB4JDEwID0geCQ5O1xuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIoZiQxNCwgb2JqW24kMTddLCB4JDEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSAxNCA6IFxuICAgICAgICAgIHZhciBmJDE1ID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBlJDYgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIG4kMTggPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIHgkMTEgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIGYkMTYgPSBmJDE1O1xuICAgICAgICAgIHZhciBlJDcgPSBlJDY7XG4gICAgICAgICAgdmFyIG4kMTkgPSBuJDE4O1xuICAgICAgICAgIHZhciB4JDEyID0geCQxMTtcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKGYkMTYsIG9ialtlJDddW24kMTldLCB4JDEyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSAxNSA6IFxuICAgICAgICAgIHZhciBmJDE3ID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBuJDIwID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciB4JDEzID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBmJDE4ID0gZiQxNztcbiAgICAgICAgICB2YXIgbiQyMSA9IG4kMjA7XG4gICAgICAgICAgdmFyIHgkMTQgPSB4JDEzO1xuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIoZiQxOCwgQ3VycnkuXzEob2JqWzBdW24kMjFdLCBvYmopLCB4JDE0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSAxNiA6IFxuICAgICAgICAgIHZhciBuJDIyID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciB4JDE1ID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBuJDIzID0gbiQyMjtcbiAgICAgICAgICB2YXIgeCQxNiA9IHgkMTU7XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihvYmpbMF1bbiQyM10sIG9iaiwgeCQxNik7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgMTcgOiBcbiAgICAgICAgICB2YXIgbiQyNCA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgbSA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgbiQyNSA9IG4kMjQ7XG4gICAgICAgICAgdmFyIG0kMSA9IG07XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihvYmpbMF1bbiQyNV0sIG9iaiwgb2JqW20kMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDE4IDogXG4gICAgICAgICAgdmFyIG4kMjYgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIGUkOCA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgbSQyID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBuJDI3ID0gbiQyNjtcbiAgICAgICAgICB2YXIgZSQ5ID0gZSQ4O1xuICAgICAgICAgIHZhciBtJDMgPSBtJDI7XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihvYmpbMF1bbiQyN10sIG9iaiwgb2JqW2UkOV1bbSQzXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgMTkgOiBcbiAgICAgICAgICB2YXIgbiQyOCA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgbSQ0ID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBuJDI5ID0gbiQyODtcbiAgICAgICAgICB2YXIgbSQ1ID0gbSQ0O1xuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIob2JqWzBdW24kMjldLCBvYmosIEN1cnJ5Ll8xKG9ialswXVttJDVdLCBvYmopKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSAyMCA6IFxuICAgICAgICAgIHZhciBtJDYgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIHgkMTcgPSBuZXh0KC8qICgpICovMCk7XG4gICAgICAgICAgdmFyIG0kNyA9IG0kNjtcbiAgICAgICAgICB2YXIgeCQxOCA9IHgkMTc7XG4gICAgICAgICAgbmV3X2NhY2hlKHRhYmxlKTtcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKEN1cnJ5Ll8zKENhbWxfb28uY2FtbF9nZXRfcHVibGljX21ldGhvZCwgeCQxOCwgbSQ3LCAxKSwgeCQxOCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgMjEgOiBcbiAgICAgICAgICB2YXIgbSQ4ID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBuJDMwID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBtJDkgPSBtJDg7XG4gICAgICAgICAgdmFyIG4kMzEgPSBuJDMwO1xuICAgICAgICAgIG5ld19jYWNoZSh0YWJsZSk7XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIHZhciB0bXAgPSBvYmpbbiQzMV07XG4gICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShDdXJyeS5fMyhDYW1sX29vLmNhbWxfZ2V0X3B1YmxpY19tZXRob2QsIHRtcCwgbSQ5LCAyKSwgdG1wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSAyMiA6IFxuICAgICAgICAgIHZhciBtJDEwID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBlJDEwID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBuJDMyID0gbmV4dCgvKiAoKSAqLzApO1xuICAgICAgICAgIHZhciBtJDExID0gbSQxMDtcbiAgICAgICAgICB2YXIgZSQxMSA9IGUkMTA7XG4gICAgICAgICAgdmFyIG4kMzMgPSBuJDMyO1xuICAgICAgICAgIG5ld19jYWNoZSh0YWJsZSk7XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIHZhciB0bXAgPSBvYmpbZSQxMV1bbiQzM107XG4gICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShDdXJyeS5fMyhDYW1sX29vLmNhbWxfZ2V0X3B1YmxpY19tZXRob2QsIHRtcCwgbSQxMSwgMyksIHRtcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgMjMgOiBcbiAgICAgICAgICB2YXIgbSQxMiA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgbiQzNCA9IG5leHQoLyogKCkgKi8wKTtcbiAgICAgICAgICB2YXIgbSQxMyA9IG0kMTI7XG4gICAgICAgICAgdmFyIG4kMzUgPSBuJDM0O1xuICAgICAgICAgIG5ld19jYWNoZSh0YWJsZSk7XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgIHZhciB0bXAgPSBDdXJyeS5fMShvYmpbMF1bbiQzNV0sIG9iaik7XG4gICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShDdXJyeS5fMyhDYW1sX29vLmNhbWxfZ2V0X3B1YmxpY19tZXRob2QsIHRtcCwgbSQxMywgNCksIHRtcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2xvO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldF9tZXRob2RzKHRhYmxlLCBtZXRob2RzKSB7XG4gIHZhciBsZW4gPSBtZXRob2RzLmxlbmd0aDtcbiAgdmFyIGkgPSBbMF07XG4gIHdoaWxlKGlbMF0gPCBsZW4pIHtcbiAgICB2YXIgbGFiZWwgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KG1ldGhvZHMsIGlbMF0pO1xuICAgIHZhciBjbG8gPSBtZXRob2RfaW1wbCh0YWJsZSwgaSwgbWV0aG9kcyk7XG4gICAgc2V0X21ldGhvZCh0YWJsZSwgbGFiZWwsIGNsbyk7XG4gICAgaVswXSA9IGlbMF0gKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIC8qICgpICovMDtcbn1cblxuZnVuY3Rpb24gc3RhdHMoKSB7XG4gIHJldHVybiAvKiByZWNvcmQgKi9bXG4gICAgICAgICAgLyogY2xhc3NlcyAqL3RhYmxlX2NvdW50WzBdLFxuICAgICAgICAgIC8qIG1ldGhvZHMgKi9tZXRob2RfY291bnRbMF0sXG4gICAgICAgICAgLyogaW5zdF92YXJzICovaW5zdF92YXJfY291bnRbMF1cbiAgICAgICAgXTtcbn1cblxuZXhwb3J0IHtcbiAgcHVibGljX21ldGhvZF9sYWJlbCAgICAgICAgICAgICAgICAsXG4gIG5ld19tZXRob2QgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICBuZXdfdmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICxcbiAgbmV3X21ldGhvZHNfdmFyaWFibGVzICAgICAgICAgICAgICAsXG4gIGdldF92YXJpYWJsZSAgICAgICAgICAgICAgICAgICAgICAgLFxuICBnZXRfdmFyaWFibGVzICAgICAgICAgICAgICAgICAgICAgICxcbiAgZ2V0X21ldGhvZF9sYWJlbCAgICAgICAgICAgICAgICAgICAsXG4gIGdldF9tZXRob2RfbGFiZWxzICAgICAgICAgICAgICAgICAgLFxuICBnZXRfbWV0aG9kICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgc2V0X21ldGhvZCAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gIHNldF9tZXRob2RzICAgICAgICAgICAgICAgICAgICAgICAgLFxuICBuYXJyb3cgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgd2lkZW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gIGFkZF9pbml0aWFsaXplciAgICAgICAgICAgICAgICAgICAgLFxuICBkdW1teV90YWJsZSAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgY3JlYXRlX3RhYmxlICAgICAgICAgICAgICAgICAgICAgICAsXG4gIGluaXRfY2xhc3MgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICBpbmhlcml0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgbWFrZV9jbGFzcyAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gIG1ha2VfY2xhc3Nfc3RvcmUgICAgICAgICAgICAgICAgICAgLFxuICBkdW1teV9jbGFzcyAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgY29weSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gIGNyZWF0ZV9vYmplY3QgICAgICAgICAgICAgICAgICAgICAgLFxuICBjcmVhdGVfb2JqZWN0X29wdCAgICAgICAgICAgICAgICAgICxcbiAgcnVuX2luaXRpYWxpemVycyAgICAgICAgICAgICAgICAgICAsXG4gIHJ1bl9pbml0aWFsaXplcnNfb3B0ICAgICAgICAgICAgICAgLFxuICBjcmVhdGVfb2JqZWN0X2FuZF9ydW5faW5pdGlhbGl6ZXJzICxcbiAgbG9va3VwX3RhYmxlcyAgICAgICAgICAgICAgICAgICAgICAsXG4gIHBhcmFtcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICBzdGF0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBCbG9jayAgICAgICAgICBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvYmxvY2suanNcIjtcbmltcG9ydCAqIGFzIEN1cnJ5ICAgICAgICAgIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgICAgICAgICAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFzb25SZWFjdCAgICBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYXNvbi1yZWFjdC9saWIvZXM2X2dsb2JhbC9zcmMvUmVhc29uUmVhY3QuanNcIjtcbmltcG9ydCAqIGFzIENhbWxpbnRlcm5hbE9PIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1saW50ZXJuYWxPTy5qc1wiO1xuXG52YXIgY29tcG9uZW50ID0gUmVhc29uUmVhY3QucmVkdWNlckNvbXBvbmVudChcIk51bWVyaWNJbnB1dFwiKTtcblxudmFyIGNsYXNzX3RhYmxlcyA9IFtcbiAgMCxcbiAgMCxcbiAgMFxuXTtcblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKCkge1xuICBpZiAoIWNsYXNzX3RhYmxlc1swXSkge1xuICAgIHZhciAkJGNsYXNzID0gQ2FtbGludGVybmFsT08uY3JlYXRlX3RhYmxlKDApO1xuICAgIHZhciBlbnZfaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBDYW1saW50ZXJuYWxPTy5jcmVhdGVfb2JqZWN0X29wdCgwLCAkJGNsYXNzKTtcbiAgICB9O1xuICAgIENhbWxpbnRlcm5hbE9PLmluaXRfY2xhc3MoJCRjbGFzcyk7XG4gICAgY2xhc3NfdGFibGVzWzBdID0gZW52X2luaXQ7XG4gIH1cbiAgcmV0dXJuIEN1cnJ5Ll8xKGNsYXNzX3RhYmxlc1swXSwgMCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByZWZpeCh2YWx1ZSwgcHJlZml4KSB7XG4gIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYWRkU3VmZml4KHZhbHVlLCBzdWZmaXgpIHtcbiAgcmV0dXJuIHZhbHVlICsgc3VmZml4O1xufVxuXG5mdW5jdGlvbiBtYWtlKG9uQ2hhbmdlLCB2YWx1ZSwgXykge1xuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKCQkZXZlbnQsIHNlbGYpIHtcbiAgICB2YXIgdmFsdWUgPSAkJGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBDdXJyeS5fMShzZWxmWy8qIHNlbmQgKi80XSwgLyogVXBkYXRlVmFsdWUgKi9bdmFsdWVdKTtcbiAgICByZXR1cm4gQ3VycnkuXzIob25DaGFuZ2UsIHZhbHVlLCAkJGV2ZW50KTtcbiAgfTtcbiAgdmFyIG5ld3JlY29yZCA9IGNvbXBvbmVudC5zbGljZSgpO1xuICBuZXdyZWNvcmRbLyogcmVuZGVyICovOV0gPSAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1bLyogc3RhdGUgKi8yXVsvKiB2YWx1ZSAqLzBdLFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IEN1cnJ5Ll8xKHBhcmFtWy8qIGhhbmRsZSAqLzBdLCBoYW5kbGVDaGFuZ2UpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfSk7XG4gIG5ld3JlY29yZFsvKiBpbml0aWFsU3RhdGUgKi8xMF0gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIC8qIHJlY29yZCAqL1tcbiAgICAgICAgICAgICAgLyogdmFsdWUgKi92YWx1ZSxcbiAgICAgICAgICAgICAgLyogaW50VmFsdWUgKi8xXG4gICAgICAgICAgICBdO1xuICAgIH0pO1xuICBuZXdyZWNvcmRbLyogcmVkdWNlciAqLzEyXSA9IChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhY3Rpb25bMF07XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgIHJldHVybiAvKiBVcGRhdGUgKi9CbG9jay5fXygwLCBbLyogcmVjb3JkICovW1xuICAgICAgICAgICAgICAgICAgICAgIC8qIHZhbHVlICovdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgLyogaW50VmFsdWUgKi9zdGF0ZVsvKiBpbnRWYWx1ZSAqLzFdXG4gICAgICAgICAgICAgICAgICAgIF1dKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIHJldHVybiBuZXdyZWNvcmQ7XG59XG5cbnZhciAkJGRlZmF1bHQgPSBSZWFzb25SZWFjdC53cmFwUmVhc29uRm9ySnMoY29tcG9uZW50LCAoZnVuY3Rpb24gKGpzUHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG1ha2UoanNQcm9wcy5vbkNoYW5nZSwganNQcm9wcy52YWx1ZSwgLyogYXJyYXkgKi9bXSk7XG4gICAgICB9KSk7XG5cbmV4cG9ydCB7XG4gIGNvbXBvbmVudCAgICAsXG4gIGZvcm1hdE51bWJlciAsXG4gIGFkZFByZWZpeCAgICAsXG4gIGFkZFN1ZmZpeCAgICAsXG4gIG1ha2UgICAgICAgICAsXG4gICQkZGVmYXVsdCAgICAsXG4gICQkZGVmYXVsdCAgICAgIGFzIGRlZmF1bHQsXG4gIFxufVxuLyogY29tcG9uZW50IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iXSwibmFtZXMiOlsiQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCIsIkNhbWxfYXJyYXkuY2FtbF9hcnJheV9zdWIiLCJlbXB0eUZ1bmN0aW9uIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJpbnZhcmlhbnQiLCJyZXF1aXJlJCQwIiwid2FybmluZyIsInJlcXVpcmUkJDEiLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJyZXF1aXJlJCQ1IiwiQ2FtbF9leGNlcHRpb25zLmNyZWF0ZSIsIkN1cnJ5Ll8xIiwiQ2FtbF9hcnJheS5jYW1sX2FycmF5X2JsaXQiLCJtYXAiLCJDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0IiwiaXRlcmkiLCJDdXJyeS5fMiIsImVtcHR5T2JqZWN0IiwiUmVhY3QuQ29tcG9uZW50IiwiY3JlYXRlQ2xhc3MiLCJSZWFjdC5pc1ZhbGlkRWxlbWVudCIsIlJlYXNvblJlYWN0T3B0aW1pemVkQ3JlYXRlQ2xhc3MuY3JlYXRlQ2xhc3MiLCJMaXN0Lm1hcCIsIkxpc3QuaXRlciIsIkxpc3QucmV2IiwiTGlzdC5sZW5ndGgiLCJDYW1sX2ludDMyLmltdWwiLCJDYW1sX3N0cmluZy5nZXQiLCJjcmVhdGUkMSIsImFkZCQxIiwiQ2FtbF9zdHJpbmcuY2FtbF9zdHJpbmdfY29tcGFyZSIsIkNhbWxfb2JqLmNhbWxfaW50X2NvbXBhcmUiLCJDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0IiwiQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldCIsIiQkQXJyYXkuYmxpdCIsIiQkQXJyYXkubWFwIiwiJCRBcnJheS5pdGVyaSIsIk9iai5vYmplY3RfdGFnIiwiQ2FtbF9leGNlcHRpb25zLmNhbWxfc2V0X29vX2lkIiwiUmVhc29uUmVhY3QucmVkdWNlckNvbXBvbmVudCIsIkNhbWxpbnRlcm5hbE9PLmNyZWF0ZV90YWJsZSIsIkNhbWxpbnRlcm5hbE9PLmNyZWF0ZV9vYmplY3Rfb3B0IiwiQ2FtbGludGVybmFsT08uaW5pdF9jbGFzcyIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJCbG9jay5fXyIsIlJlYXNvblJlYWN0LndyYXBSZWFzb25Gb3JKcyJdLCJtYXBwaW5ncyI6IkFBR0EsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRTtFQUN0QixLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztFQUNoQixPQUFPLEtBQUssQ0FBQztDQUNkOztBQUVELEFBR0M7b0JBQ21COztBQ1RwQixJQUFJLGFBQWEsY0FBYztFQUM3QixlQUFlO0VBQ2YsQ0FBQztDQUNGLENBQUM7O0FBRUYsSUFBSSxTQUFTLGNBQWM7RUFDekIsV0FBVztFQUNYLENBQUMsQ0FBQztDQUNILENBQUM7O0FBRUYsSUFBSSxPQUFPLGNBQWM7RUFDdkIsU0FBUztFQUNULENBQUMsQ0FBQztDQUNILENBQUM7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

console.log(component);

const element = $$default();