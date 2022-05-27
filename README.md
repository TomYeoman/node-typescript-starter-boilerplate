# node-typescript-starter-boilerplate - updated for 2022!

A minimal node typescript boiler plate, loaded with everything you expect from a modern, productive typescript environment.

# Features

- Simple express server, with a single route (with middleware examples) to get started, communicating with a SQLite DB.
- Testing - supported via Jest (`npm run test`), with command also provided to produce coverage reports (`npm run coverage`).
- Debugging experience - Can use `npm run debug` to run you code via nodemon, which will auto-restart on file changes. You can also run the code within the editor (therefore being able to add breakpoints) by pressing F5 whilst in `index.ts` (see `launch.json`).
- Linting - Eslint with prettier support. Runs automatically on save (see `.vscode/settings.json`), and on commit via husky (see `npm run lint`)
- Logging - Supported via Pino. Requests are logged via the logging middleware, then also a logging instance is exposed as an import `@logging`

# How to use

- First thing you need to do when cloning is `npm run prepare` once, in order to setup husky (staged files will then be auto linted on commit after this).

You can then start developing

- Use `npm run debug` to watch files and automatically reload server during development. Once you are happy use `npm run build` to transpile the TS to JS, and `npm run start` to run it.

# Architecture

The architecture implements MVC as follows:
- View - Currently not added, but feel free to modify `./src/index.ts` to serve your HTML.
- Each route will call a controller, which acts as the "manager" to coordinate whatever is required to fulfil that request (fetching data via the data access layer, and transforming it to present to the client).
- Each controller will call out to a Model (AKA repository, or data access layer). The data access layers API should be data access technology agnostic (I.E it doesn't change no matter which DB you implement to action the requests).

## Changelog (09/05/2022)

- Use latest jest testing + config format.
- Use latest (and simplified) linting config with prettier support, with ability to lint on save without additional work, and also on commit.
- Add environment variable support, with validation (service will exit if not present) support.
- Added basic express example route, with a single route, and validation middleware.

*Helpful resources on latest round of changes*
- https://dev.to/viniciuskneves/prettier-eslint-and-typescript-491j
- https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html
- https://blog.logrocket.com/testing-typescript-apps-using-jest/
- https://dev.to/truemark/run-eslint-on-git-commit-with-husky-and-lint-staged-in-reactjs-4oeb


**Please feel free to open an issue with suggestions / a PR to contribute to this project :).**