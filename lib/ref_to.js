/**
 * Resolve ref to resource entity
 * @function refTo
 * @param {ClayResource|string} resource - Resource or name of it
 * @param {ClayId} id - Entity id
 * @returns {string} - Ref string
 */
'use strict'

const clayId = require('clay-id')
const clayResourceName = require('clay-resource-name')
const { JOINER } = require('./enums')

/** @lends refTo */
function refTo (resource, id) {
  return [
    clayResourceName(resource),
    clayId(id)
  ].map(String).join(JOINER)
}

module.exports = refTo
