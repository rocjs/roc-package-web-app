import { runHook } from 'roc';

const packageJSON = require('../../package.json');
/**
 * Helper function for invoking/running a hook, pre-configured for the current package.
 *
 * @param {...Object} args - The arguments to pass along to the action.
 *
 * @returns {Object|function} - Either a object, the final value from the actions or a function if callback is used.
 */
 // eslint-disable-next-line
export function invokeHook(...args) {
    return runHook(packageJSON.name)(...args);
}
