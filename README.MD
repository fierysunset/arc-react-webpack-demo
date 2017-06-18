# ARC React Webpack Demo

An adaptive web application demo supporting all devices built using [ARC](https://github.com/mlrawlings/arc)!

The demo is a rough representation of eBay's View Item page (as of June 2017).

### Table of contents
[Try it out!](#try-it-out)  
[Features & Details](#features--details)  
[ARC example usage](#arc-example-usage)  
[Gotchas](#gotchas)  

---

### Try it out!
1. Clone or fork `arc-react-webpack-demo`
2. Run `yarn` to install packages
3. Run `webpack` to generate bundles 
    - (I committed the generated `DIST/` folder so you can view the generated structure, otherwise I'd add it to `.gitignore`)
4. `yarn start` to start your server
5. Navigate to http://localhost:2222 to view the app in any device (Chrome Developer Tools' Device Toolbar is an easy way to see the adaptive functionality in action)

---

### Features & Details
- React, Webpack, Express, Babel
- Client/server rendering
- Device detection done with `mobile-detect`
- Zero media query usage - all resizing done adaptively or with fluid grids

---

### ARC example usage
(under `components/`, sorted by use case)

- **Split layouts due to device size:** `app-layout/`
    - 3 column layout in desktop and ipad; 1 column in mobile
- **Split JS due to difference in functionality:** `header/`
    - Due to less available space, mobile web exposes the search bar in a full page overlay, which is accessible by clicking the search icon button at top right
- **Different image sizes to decrease page weight when possible:** `image/`
    - Mobile can load a smaller size version of the same image since it doesn't need one as large as the desktop would
- **Split CSS due to device size, branding, context:** `color-changing/`
    - Can add any combination of flags to match against based on device type, brand, locale, etc
    - Shared CSS can be put at top level and also required in the template file
- **Component only used in one device type:** `breadcrumbs/`
    - Example of something more typical in desktop and less commonly used in mobile context
- **Specific branded image/style by device:** `share/`
    - Different icons are quickly recognizable to users of different devices
    
---

### Gotchas

- Anytime you split resources into folders, you need an `index.arc` at the top level of the component
- The `index.arc` proxy config requires a default flag
- Make sure to update flagsets accordingly in `webpack.config.babel.js` for any combinations you want to adapt for
- All adapting starts from a default file (e.g `index.js`, `style.scss`) so you can't skip having one
