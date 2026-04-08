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

      const usersList = await userCollection.find().toArray()
      if (usersList.length === 0) {
        console.log("USERS COLLECTION IS EMPTIED")
        return
      }

      const ids = usersList.map(user => user._id)
      await userCollection.deleteMany({_id: {$in: ids}})
      console.log("USERS COLLECTION HAS BEEN CLEANED")

    } catch(error) {
        console.log("ERROR: ", error)
    }
  
  },

};
