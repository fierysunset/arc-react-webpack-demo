const basePage = (props) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no">

            <link rel="shortcut icon" href="http://www.iconj.com/ico/w/x/wxcg9rbdj8.ico" type="image/x-icon" />
            
            <title>${props.title}</title>

            <link rel="stylesheet" href="${props.outputPath}/style.css">
        </head>
        <body>
            <div id="root">${props.appHtml}</div>

            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(props.initialState)}
            </script>
            <script src="${props.outputPath}/client.bundle.js"></script>
        </body>
    </html>
    `
}

export default basePage;