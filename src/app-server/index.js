import express from 'express';
import router from './router.js';

let app = express();

app.use('/STATIC', express.static('./STATIC'));

app.use('/', router);

app.listen(2222, function () {
	console.log('Listening on port 2222!');
});