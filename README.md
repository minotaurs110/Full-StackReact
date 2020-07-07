# Full-stack React + Node.js in Typescript

A small and straight-forward example of using a Node backend with a [React frontend](https://github.com/facebook/create-react-app), all running **Typescript**.

It can be easily deployed to Heroku, as the `package.json` at the root of the repo will take care of `postinstall` (will create a production build of both client and server), and `start` will run everything in production mode.

## 💻 Local Development

Making use of `concurrently`, you can run the whole stack in one command:

```bash
# Run from the root of the repo, same level as this README.md
yarn dev
```

This command will run everything in dev mode and will refresh automatically whenever changes are made to the client OR server.

## 🔨 Development tools

This repo includes tools that I use in every one of my projects. It's pretty opinionated, so feel free to remove anything you dislike.

- Prettier with an included `.prettierrc.js` configuration file
- A pretty robust TSLint setup
