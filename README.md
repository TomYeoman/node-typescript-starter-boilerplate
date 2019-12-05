basic node boiler plate loaded with all the goodies you need to get up and running quickly!

# node-typescript-starter-boilerplate

Basic node boiler plate loaded with all the goodies you need to get up and running quickly!

## Features

 - Eslint to lint ( Includes prettier integration to auto-format code ) - https://eslint.org/blog/2019/01/future-typescript-eslint
 - `test` script with full Jest + TS support
 - `debug` script to use during development which provides auto restarting on changes ( using nodemon + ts-node )
 - `build` script to convert our typescript code to plain JavaScript for usage in a production environment

## Suggested VS code configuration

To make the most of the eslint setup mentioned above I suggest you open up your `settings.json` file and add the following code - it will allow vs code to auto-fix any problems + format on save

```
 /**
    ----- Linting configurations
  */
  // Prevent editor formatting on save for certain file types
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false,
  },
  "[typescript]": {
    "editor.formatOnSave": false,
  },
  // Configure eslint to report + fix errors for correct file types
  "editor.formatOnPaste": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    }
  ],
```

Please feel free to open an issue with suggestions / an MR to contribute :).
