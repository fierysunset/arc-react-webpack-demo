import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MobileDetect from 'mobile-detect';
import HelloWorld from '../components/hello-world';
import basePage from './base-page.js';

const router = express.Router();
const initialState = {
	title: 'ARC React/Webpack Demo'
};

const getDeviceInfo = (req) => {
	const md = new MobileDetect(req.headers['user-agent']);

	let deviceInfo = {
		isMobile: md.phone() !== null,
		isAndroid: md.os() === 'AndroidOS',
		isIOS: md.os() === 'iOS',
		isIPhone: md.is('iPhone')
	};

	console.log(md.os());

	return deviceInfo;
}

router.get('/', function (req, res) {
	const deviceInfo = getDeviceInfo(req);

	const html = ReactDOMServer.renderToString(
		<HelloWorld />
	);
	res.status(200).send(basePage(html, initialState));
});

export default router;
