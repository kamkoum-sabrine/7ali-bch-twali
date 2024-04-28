import mongoose from 'mongoose';
import app from './config/app.config';
import { connect } from './config/db.config';
import router from './routes';


connect();

app.use('', router);
app.get('/', (req: any, res: any) => {
    res.send('Hello World!');
});
let port = process.env.PORT || 8080;
let connected = false;

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});