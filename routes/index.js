import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
	res.status(200).send(serverRenderedPage('<div>Connie was here?</div>', {
		test: 1
	}));
});

function serverRenderedPage(html, initialState) {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<!-- Required meta tags always come first -->
    	<meta charset="utf-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    	<meta http-equiv="x-ua-compatible" content="ie=edge">
    	<title>React Router Redux Express</title>
		
    	<link rel="stylesheet" href="../stylesheets/main.css">
    </head>
    <body>

    	<div id="reactbody"><div>${html}</div></div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          </script>
    	<script src="../bin/app.bundle.js"></script>
    </body>
    </html>
    `
}

export default router;
