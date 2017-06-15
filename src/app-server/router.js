import arcResolver from 'arc-resolver';
import AppLayout from '../components/app-layout';
import basePage from './base-page.js';
import express from 'express';
import fs from 'fs';
import MobileDetect from 'mobile-detect';
import React, { Component } from 'react';
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
		desktop: md.phone() === null,
		mobile: md.phone() !== null,
		android: md.os() === 'AndroidOS',
		ios: md.os() === 'iOS',
		iphone: md.is('iPhone')
	};

	return deviceInfo;
}

// Create array of flags to pass to arc resolver module to get output path
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

	// Use arc-resolver to find the directory in the same location that matches the most flags
	outputPath = arcResolver.adaptResource('DIST/default', flags);

	return outputPath;
}

class FlagProvider extends Component {
	getChildContext() {
		return {
			flags: this.props.flags
		}
	}
	render() {
		return this.props.children;
	}
}

FlagProvider.childContextTypes = {
	flags: React.PropTypes.array
};

router.get('/', function (req, res) {
	initialState.deviceInfo = getDeviceInfo(req);
	initialState.outputPath = getOutputPath();

	const html = ReactDOMServer.renderToString(
		<FlagProvider flags={getFlags()}>
			<AppLayout initialState={initialState}/>
		</FlagProvider>
	);
	res.status(200).send(basePage(html, initialState));
});

export default router;
