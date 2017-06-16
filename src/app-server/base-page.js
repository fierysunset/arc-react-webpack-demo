const basePage = (html, initialState) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no">

            <title>${initialState.title}</title>
            
            <link rel="stylesheet" href="${initialState.outputPath}/style.css">
        </head>
        <body>
            <div id="root">${html}</div>

            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="${initialState.outputPath}/client.bundle.js"></script>
        </body>
    </html>
    `
}

export default basePage;