import express from 'express';
import basePage from './base-page.js';
import HelloWorld from '../components/hello-world';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const router = express.Router();

router.get('/', function (req, res) {
	const appHtml = ReactDOMServer.renderToString(
		<HelloWorld/>
	);

	const pageHtml = basePage({
		title: 'ARC React/Webpack Demo',
		appHtml
	});

	res.status(200).send(pageHtml);
});

export default router;
