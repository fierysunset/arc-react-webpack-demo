import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HelloWorld from '../components/hello-world'

const router = express.Router();

router.get('/', function (req, res) {
	const html = ReactDOMServer.renderToString(
		<HelloWorld/>
	);
	res.status(200).send(serverRenderedPage(html, {
		test: 1
	}));
});

function serverRenderedPage(html, initialState) {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="utf-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    	<meta http-equiv="x-ua-compatible" content="ie=edge">
    	<title>React Router Redux Express</title>
		
    	<link rel="stylesheet" href="../STATIC/style.css">
    </head>
    <body>

    	<div id="reactbody"><div>${html}</div></div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          </script>
    	<script src="../STATIC/client.bundle.js"></script>
    </body>
    </html>
    `
}

export default router;
