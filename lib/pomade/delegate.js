import get from './get';

/**
 * Bread and butter object delegation class
 * 
 * @constructor
 * @param {Object} target The object you wish to delegate property look-ups to
 */
export default function Delegate(target) {
    setupTarget(this, target);
}

/** @ignore */
Delegate.extend = extend;
/** @ignore */
Delegate.create = create;

/**
 * Used to create your own delegate class definitions.
 * 
 * @static
 * @param  {Object} The prototype for your delegate
 * @return {Class}      
 */
function extend(props) {
    function PomadeDelegate(target) {
        setupTarget(this, target);
    }

    var prototype = PomadeDelegate.prototype = new Delegate();
    prototype.constructor = PomadeDelegate;

    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            prototype[key] = props[key];
        }
    }

    PomadeDelegate.create = create;
    PomadeDelegate.extend = extend;

    return PomadeDelegate;
}

/**
 * Static Helper for Delegate.create() vs. new Delegate()
 * 
 * @static
 * @param  {Object} target The object you wish to delegate to
 * @return {Delegate}      
 */
function create(target) {
    return new this(target);
}

/**
 * Helper to add a getter to the delegate instance. Creates a closure on the
 * `target` so it isn't accessible as a property or otherwise.
 * 
 * @private
 * @param  {Pomade.Delegate}
 * @param  {Object} target   
 */
function setupTarget(delegate, target) {
    delegate.get = function (key) {
        return get(target, delegate, key);
    };
}