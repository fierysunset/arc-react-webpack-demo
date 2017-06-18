## context-demo

An adaptive web application demo supporting all devices built using [ARC](https://github.com/mlrawlings/arc)!

The demo is a rough representation of eBay's View Item page (as of June 2017).

#### Try it out!
1. Clone or fork `context-demo`
2. run `yarn` to install packages
3. run `webpack` to generate bundles 
    - view the `flagsets` to be generated in `webpack.config.babel.js`
    - (I committed the generated `DIST/` folder so you can view the generated structure, otherwise I'd add it to `.gitignore`)
4. `yarn start` to start your server
5. navigate to http://localhost:2222 to view the app in any device (Chrome Developer Tools' Device Toolbar is an easy way to see the adaptive functionality in action

#### Features & Details
- client/server rendering
- React, Webpack, Express, Babel
- `mobile-detect` for device detection
- zero media query usage - all resizing done adaptively or with fluid grids

#### ARC examples under `components/`, by use case

- Split layouts due to device size: `app-layout/`
    - 3 column layout in desktop and ipad; 1 column in mobile
- Split JS due to difference in functionality: `header/`
    - due to less available space, mobile web exposes the search bar in a full page overlay, when users clicks on a search icon 
- Different image sizes to decrease page weight when possible: `image/`
    - mobile can load a smaller size version of the same image
- Split CSS due to device size, branding, context: `color-changing/`
    - can add any combination of flags to match against based on device type, brand, locale, etc
    - shared CSS can be put at top level and also required in the template file
- Component only used in one device type: `breadcrumbs`
    - not as often used in mobile context

#### Gotchas

- Anytime you split resources into folders, you will need an `index.arc` at the top level of the component
- The `index.arc` proxy config requires a default flag
- Make sure to update flagsets accordingly in `webpack.config.babel.js` for any combinations you want to adapt for
- All adapting starts from a default file (e.g `index.js`, `style.css`) so you can't skip having one

---

_Note!! I intentionally kept the package dependencies minimal to help with quickest understanding of ARC usage but you can definitely add a webpack dev server, CSS preprocessor, hot reloading, etc etc to make your life easier!_

_Apologies for skipping some general frontend best practices as I built this in a bit of a rush ;)_
