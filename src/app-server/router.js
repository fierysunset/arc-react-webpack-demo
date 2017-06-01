import express from 'express';
import basePage from './base-page.js';
import HelloWorld from '../components/hello-world';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const router = express.Router();
const initialState = {
	title: 'ARC React/Webpack Demo'
};

router.get('/', function (req, res) {
	const html = ReactDOMServer.renderToString(
		<HelloWorld/>
	);
	res.status(200).send(basePage(html, initialState));
});

export default router;
