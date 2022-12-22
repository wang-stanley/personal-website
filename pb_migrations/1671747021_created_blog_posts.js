migrate((db) => {
  const collection = new Collection({
    "id": "usvioa5wr36w2d6",
    "created": "2022-12-22 22:10:21.978Z",
    "updated": "2022-12-22 22:10:21.978Z",
    "name": "blog_posts",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("usvioa5wr36w2d6");

  return dao.deleteCollection(collection);
})
