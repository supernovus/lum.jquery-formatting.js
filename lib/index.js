const core = require('@lumjs/core');
const lazy = core.lazy;
const E = core.def.e;

/**
 * jQuery function for simple formatting
 * @module @lumjs/jquery-formatting
 */

/**
 * Format JSON (lazy-loaded plugin)
 * @name module:@lumjs/jquery-formatting.JSON
 * @see module:@lumjs/jquery-formatting/json
 */
lazy(exports, 'JSON', () => require('./json'), E);

/**
 * Format XML (lazy-loaded plugin)
 * @name module:@lumjs/jquery-formatting.XML
 * @see module:@lumjs/jquery-formatting/xml
 */
lazy(exports, 'XML', () => require('./xml'), E);
