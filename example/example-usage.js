'use strict'

const { parse, refTo } = require('clay-resource-ref')
const clayResource = require('clay-resource')
const clayEntity = require('clay-entity')

{
  let Org = clayResource('Org')
  let org01 = clayEntity({ id: 1, name: 'bar' })
  let user01 = clayEntity({ id: 1, username: 'foo' })

  let ref = refTo(Org, org01.id)
  console.log(ref) // -> Org#1
  user01.org = { $ref: ref }

  let parsed = parse(user01.org.$ref)
  console.log(parsed) // -> { resource: 'Org', id: '1' }
}
