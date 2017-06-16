const basePage = (props) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no">

            <title>${props.title}</title>
            
            <link rel="stylesheet" href="../DIST/style.css">
        </head>
        <body>
            <div id="root">${props.appHtml}</div>

            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(props.initialState)}
            </script>
            <script src="../DIST/client.bundle.js"></script>
        </body>
    </html>
    `
}

export default basePage;