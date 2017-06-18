import arcResolver from 'arc-resolver';
import AppLayout from '../components/app-layout';
import basePage from './base-page.js';
import express from 'express';
import { FlagProvider } from 'arc-react';
import MobileDetect from 'mobile-detect';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const router = express.Router();

// Store any necessary device details into an object for later use
const getDeviceInfo = (req) => {
	const md = new MobileDetect(req.headers['user-agent']);

	return {
		desktop: md.phone() === null,
		mobile: md.phone() !== null,
		android: md.os() === 'AndroidOS',
		ios: md.os() === 'iOS',
		iphone: md.is('iPhone')
	};
}

// Create array of flags to pass to arc resolver module to get output path
const getFlags = (req) => {
	let flags = [];
	let deviceInfo = getDeviceInfo(req);

	for (let key in deviceInfo) {
		if (deviceInfo[key]) {
			flags.push(key);
		}
	}

	return flags;
}

// Get output path based on flags from the user's device info
const getOutputPath = (flags) => {
	// Use arc-resolver to find the directory in the same location that matches the most flags
	return arcResolver.adaptResource('DIST/default', flags);
}

router.get('/', function (req, res) {
	const flags = getFlags(req);
	const outputPath = getOutputPath(flags);
	const initialState = {};

	const appHtml = ReactDOMServer.renderToString(
		<FlagProvider flags={flags}>
			<AppLayout initialState={initialState}/>
		</FlagProvider>
	);

	const pageHtml = basePage({
		title: 'ARC React/Webpack Demo',
		appHtml,
		outputPath
	});

	res.status(200).send(pageHtml);
});

export default router;
