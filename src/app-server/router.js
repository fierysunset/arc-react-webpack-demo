import adaptiveImports from '../../../adaptive-imports/webpack';
import basePage from './base-page.js';
import express from 'express';
import fs from 'fs';
import HelloWorld from '../components/hello-world';
import MobileDetect from 'mobile-detect';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const router = express.Router();
let deviceInfo = {};
let initialState = {
	title: 'ARC React/Webpack Demo'
};

// Store any necessary device details into an object for later use
const getDeviceInfo = (req) => {
	const md = new MobileDetect(req.headers['user-agent']);

	deviceInfo = {
		mobile: md.phone() !== null,
		android: md.os() === 'AndroidOS',
		ios: md.os() === 'iOS',
		iphone: md.is('iPhone')
	};

	console.log(JSON.stringify(deviceInfo));

	return deviceInfo;
}

// Create array of flags to pass to adaptive imports module to get output path
const getFlags = () => {
	let flags = [];
	
	for (let key in deviceInfo) {
		if (deviceInfo[key]) {
			flags.push(key);
		}
	}

	return flags;
}

// Get output path based on flags from the user's device info
const getOutputPath = () => {
	let outputPath = '';
	const flags = getFlags();

	outputPath = adaptiveImports.getOutputPath(__dirname, 'DIST', flags);
	// If folder for that set of flags aren't defined, use default
	try {
		const stat = fs.statSync('./' + outputPath);
	} catch(err) {
		outputPath = '/DIST/default';
	}

	return outputPath;
}

router.get('/', function (req, res) {
	const deviceInfo = getDeviceInfo(req);
	initialState.outputPath = getOutputPath();

	const html = ReactDOMServer.renderToString(
		<HelloWorld />
	);
	res.status(200).send(basePage(html, initialState));
});

export default router;
