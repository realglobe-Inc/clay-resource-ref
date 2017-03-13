/**
 * Parse ref
 * @function parse
 * @param {string|Object} ref - Ref or ref object
 * @returns {Object}
 */
'use strict'

const { JOINER } = require('./enums')
const clayId = require('clay-id')
const clayResourceName = require('clay-resource-name')

/** @lends parse */
function parse (ref) {
  if (!ref) {
    return null
  }
  if (typeof ref === 'object') {
    let refString = [ ref.resource, ref.id ].join(JOINER)
    return parse(refString)
  }

  let [ resource, id ] = ref.split(JOINER)
  let valid = !!resource && !!id
  if (!valid) {
    throw new Error(`Invalid ref: "${ref}"`)
  }
  return {
    resource: clayResourceName(resource),
    id: clayId(id)
  }
}

module.exports = parse

/**
 * A ref object
 * @typedef {Object} Ref
 * @property {string} resource - Name of resource
 * @property {string} id - Entity id
 */
