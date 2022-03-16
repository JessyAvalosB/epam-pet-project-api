import { connect } from 'mongoose';

connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWD}@cluster0.gjdt9.mongodb.net/${process.env.DB_NAME}?authSource=admin&replicaSet=atlas-wc77e3-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`)
    .then(data => console.log('Database connected!!!'))
    .catch(err => console.error(err));