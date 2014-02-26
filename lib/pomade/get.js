/**
 * Looks up a property either on the delegate or the target.
 * 
 * @param  {Object}   target
 * @param  {Delegate} delegate
 * @param  {String}   key
 * @return {Object|String|Number|void}
 */
export default function get(target, delegate, key) {
    var value;

    if (key.indexOf('target') === 0) {
        return getOnTarget(target, key.slice(7));
    }

    value = _get(delegate, key);

    if (value === undefined) {
        value = getOnTarget(target, key);
    }

    return value;
}

/**
 * @private
 * @param  {Object} obj
 * @param  {String} key
 * @return {Object|String|Number|void}
 */
function _get(obj, key) {
    var value = obj[key];

    return (typeof value === 'function') ? value.call(obj, key) : value;
}

/**
 * @private
 * @param  {Object} obj
 * @param  {String} key
 * @return {Object|String|Number|void}
 */
function getOnTarget(obj, key) {
    if (obj.get) {
        return obj.get(key);
    }

    return _get(obj, key);
}