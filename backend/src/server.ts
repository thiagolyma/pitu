import app from './app';
import database from './database';

database.sync({force: true});
console.log('Database Postgre running at 5432');

app.listen(3001);
console.log('Server running at 3001');