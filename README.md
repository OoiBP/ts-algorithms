# TypeScript Data Structure and Algorithms

This is a personal project to learn data structure and algorithms using TypeScript.

### To run the project

Make sure to have [Node.js](https://nodejs.org/en/). Clone this project and run `npm install`.

This project is structured with path `src/<project>`. Each project will contain an example script `demo.ts`. To run the project, execute (replace <project> with the project folder name):

```bash
npm run app src/<project>/demo.ts
```

### To develop the project

This project has TypeScript compiler and Nodemon setup. To run the tsc in watch mode:

```bash
npm run watch
```

To run the `.ts` file in Nodemon (replace <project> with the project folder name and <filename> with the script file name):

```bash
npm run dev src/<project>/<filename>.ts
```

### To test the project

This project uses [Jest](https://jestjs.io/) testing framework for testing. To run a test:

```bash
npm run test
```

Or to run the test in watch mode:

```bash
npm run test-w
```

### To build the project

To compile all TypeScript file to JavaScript file, run:

```bash
npm run build
```

All compiles `.js` file will reside in `/dist` folder.
