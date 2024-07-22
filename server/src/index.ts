
// import 'reflect-metadata';
// import { createConnection } from 'typeorm';
// import app from './app';

// const PORT = process.env.PORT || 3000;

// createConnection().then(async () => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }).catch((error: any) => console.log(error));



import 'reflect-metadata'; // Required for TypeORM
import { DataSource } from 'typeorm';
import { MenuCategory } from './entities/MenuCategory';
import { MenuItem } from './entities/MenuItem';
import { Order } from './entities/Order';
import { Role } from './entities/Role';
import { User } from './entities/User';
import app from './app'; // Import your Express app

const PORT = process.env.PORT || 3000;

const AppDataSource = new DataSource({
    type: 'postgres', // or your database type
    host: 'localhost',
    port: 5432,
    username: 'your_username',
    password: 'your_password',
    database: 'your_database',
    entities: [MenuCategory, MenuItem, Order, Role, User],
    synchronize: true, // or false if using migrations
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error);
    });

