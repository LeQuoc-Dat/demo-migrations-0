const data = require('../data/users-update.json');

module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    for (const user of data ) {
      await db.collection('users').updateOne(
        { id: user.id},
        {
          $set: {
            fullName: user.fullName,
            gender: user.gender,
            birthday: user.birthday
          }
        }
      )
    }
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    const ids = data.map(user => user.id)
    await db.collection('users').deleteMany({id: {$in: ids}})
  }
};
