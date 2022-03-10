import { connect } from 'mongoose';

connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWD}@cluster0.gjdt9.mongodb.net/${process.env.DB_NAME}?authSource=admin&replicaSet=atlas-wc77e3-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`)
    .then(data => console.log('Database connected!!!'))
    .catch(err => console.error(err));


// // 2. Create a Schema corresponding to the document interface.


// // 3. Create a Model.
// const UserModel = model<User>('User', schema); 

