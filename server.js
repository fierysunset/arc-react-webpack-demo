import express from 'express';
import router from './src/routes/index';

let app = express();

app.use('/bin', express.static('./bin'));
// app.use('/stylesheets', express.static('./public/stylesheets'));

app.use('/', router);
// app.use('/view/*', router);

app.listen(3000, function () {
	console.log('Listening on port 3000!');
});