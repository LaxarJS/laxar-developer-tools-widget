/**
 * Copyright 2015-2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/* eslint-env node */

var pkg = require( './package.json' );
var path = require( 'path' );

var webpack = require( 'laxar-infrastructure' ).webpack( {
   context: __dirname,
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: path.resolve( __dirname, 'node_modules' ),
            loader: 'babel-loader'
         },
         {
            test: /\.spec.js$/,
            exclude: path.resolve( __dirname, 'node_modules' ),
            loader: 'laxar-mocks/spec-loader'
         }
      ]
   }
} );


module.exports = [
   webpack.library(),
   webpack.browserSpec( [ './spec/' + pkg.name + '.spec.js' ] )
];
