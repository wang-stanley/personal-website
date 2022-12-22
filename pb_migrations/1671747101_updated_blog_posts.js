migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("usvioa5wr36w2d6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ldigujtn",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6rhjv3py",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("usvioa5wr36w2d6")

  // remove
  collection.schema.removeField("ldigujtn")

  // remove
  collection.schema.removeField("6rhjv3py")

  return dao.saveCollection(collection)
})
