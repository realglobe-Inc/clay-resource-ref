/**
 * Resource referenece for cleay entity
 * @module clay-resource-ref
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get Enums () { return d(require('./enums')) },
  get parse () { return d(require('./parse')) },
  get refTo () { return d(require('./ref_to')) }
}
