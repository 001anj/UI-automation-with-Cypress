# ui-tests

Automated tests using cypress

## Prerequisites

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/get-npm)

## Usage

1. Clone the repository
2. In the package folder run

```bash
npm install
```

3. Launch with

```bash
node app.js
```

4. In a browser navigate to

```
http://localhost:3000
```

4. Install cypress 12.17.2 and setup the cypress project [https://docs.cypress.io/guides/getting-started/opening-the-app]

```bash
npm install cypress --save-dev
```

5. Copy e2e and page_objects folder to cypress project. Include the baseurl "http://localhost:3000" in cypress config file

6. Run cmd

```bash
npm run test
```

## Software Stack

- [Node.js](https://github.com/nodejs/node)
- [Cypress](https://www.cypress.io/)
