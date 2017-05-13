const basePage = (html, initialState) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no">
            <meta http-equiv="x-ua-compatible" content="ie=edge">

            <title>React Router Redux Express</title>
            
            <link rel="stylesheet" href="../STATIC/style.css">
        </head>
        <body>
            <div id="main-content">
                ${html}
            </div>
            
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="../STATIC/client.bundle.js"></script>
        </body>
    </html>
    `
}

export default basePage;