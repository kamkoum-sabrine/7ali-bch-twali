/**import mongoose from 'mongoose';

const uri = process.env.MONGODB_CONN || 'mongodb://localhost:27017/7ali-bch-twali';

export const connect = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true // Ajoutez cette option si nécessaire
    });

    const db = mongoose.connection;
    db.on('error', (err) => {
        console.error('Erreur de connexion à la base de données :', err);
    });
    db.once('open', () => {
        console.log('Connexion réussie à la base de données !');
    });
}**/
import mongoose from 'mongoose';

const uri = process.env.MONGODB_CONN || 'mongodb://localhost:27017/todo-app';
export const connect = () => {
    mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true // Ajoutez cette option si nécessaire

    });

    const db = mongoose.connection;
    db.on('error', (err) => {
        console.error('Erreur de connexion à la base de données :', err);
    });
    db.once('open', () => {
        console.log('Connexion réussie à la base de données !');
    });
}
/**export const connect = () => {
    mongoose.connect(uri, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Successfully Connected!");
        }
    });
}**/
