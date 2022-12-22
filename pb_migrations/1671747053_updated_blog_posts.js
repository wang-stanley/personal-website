migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("usvioa5wr36w2d6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "17ji4duz",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("usvioa5wr36w2d6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "17ji4duz",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
