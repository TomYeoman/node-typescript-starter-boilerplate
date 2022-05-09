# node-typescript-starter-boilerplate - Now updated for 2022!

A minimal node typescript boiler plate, loaded with everthing you need to quickly setup a productive typescript environment quickly.

## Features

- Simple express server, with a single route to get started.
- Testing supported via Jest, with coverage reports.
- Ability to debug during development, either via the CLI with auto-restart on file change via nodemon (`npm run debug`), or via the editor (Press F5 whilst in `index.ts`).
- Linting (with prettier support), run automatically on save (see `.vscode/settings.json`), and on commit via husky (see `npm run lint`)

* Changelog (09/05/2022) *

- Use latest jest testing + config format.
- Use latest (and simplified) linting config with prettier support, with ability to lint on save without additional work, and also on commit.
- Add environment variable support, with validation (service will exit if not present) support.
- Added basic express example route, with a single route and validation middleware.


Helpful resources on latest round of changes:
- https://dev.to/viniciuskneves/prettier-eslint-and-typescript-491j
- https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html
- https://blog.logrocket.com/testing-typescript-apps-using-jest/


**Please feel free to open an issue with suggestions / an MR to contribute :).**
