import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HelloWorld from '../components/hello-world';
import basePage from './base-page.js';

const router = express.Router();

router.get('/', function (req, res) {
	const html = ReactDOMServer.renderToString(
		<HelloWorld/>
	);
	res.status(200).send(basePage(html, {
		test: 1
	}));
});

export default router;
