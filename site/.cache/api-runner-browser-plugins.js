module.exports = [{
      plugin: require('../../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatsby WordPress Theme","short_name":"Phoenix","start_url":"/","background_color":"#eaeaea","theme_color":"#1e5663","display":"minimal-ui","icon":"/Users/gabriel/L_1_Gabriel/L_2_Work/L_3_Freelance/L_2020/L_19_Fink/L_5_Development/L_Fink_Website/fink-theme/packages/gatsby-wordpress-theme-fink/src/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"3a4a55b152d3c08de35d7b1d25154f9f"},
    },{
      plugin: require('../../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-source-wordpress/gatsby-browser.js'),
      options: {"plugins":[],"url":"https://backend.fink.studio/graphql","hostingWPCOM":false,"useACF":true,"schema":{"perPage":10,"requestConcurrency":3,"previewRequestConcurrency":1}},
    },{
      plugin: require('../../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../packages/gatsby-wordpress-theme-fink/gatsby-browser.js'),
      options: {"plugins":[],"wordPressUrl":"https://backend.fink.studio","frontendUrl":"http://localhost:8000"},
    }]
