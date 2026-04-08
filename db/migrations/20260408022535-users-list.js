const data = require('../data/users-update.json');

module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    try {
      const userCollection = db.collection('users')
      if (!userCollection) {
        console.log("USERS COLLECTION NOT FOUND")
        return
      }
      if (!data || data.length <= 0) {
        console.log("DATA IS EMPTIED")
        return
      }
      await userCollection.insertMany(data)
      console.log("INSERT SUCCESS")
        
    } catch (error) {
      console.log("ERROR: ", error)
    }
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    try {
      const userCollection = await db.collection('users')
      if (!userCollection) {
        console.log("USERS COLLECTION NOT FOUND")
        return
      }

      const ids = data.map(user => user.id)
      if (ids.length>0)
      {
        await userCollection.deleteMany({id: {$in: ids}})
        console.log("DATA USERS COLLECTION HAS BEEN DELETED")
      }
      else
      {
        console.log("DATA IS EMPTIED")
        console.log("NOTHING TO DELETE")
      }

    } catch(error) {
        console.log("ERROR: ", error)
    }
  
  },

};
