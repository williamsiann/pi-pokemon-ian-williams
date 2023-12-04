const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log(`Server listening on port ${PORT}`); 
  });
}).catch(error => console.error(error));
