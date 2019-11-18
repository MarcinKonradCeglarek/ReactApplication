# Creating Planing Poker app from scratch

## using create-react-app

    npm install -g create-react-app
    mkdir client
    create-react-app client
    cd client
    yarn                         // download all dependencies into node_modules
    yarn start                   // starts development server (watch)

    yarn test                    // runs tests (watch)

## adding [material ui](https://material-ui.co)

    yarn add @material-ui/core

## Adding typescript support to existing application (https://create-react-app.dev/docs/adding-typescript/)

    yarn global add tslint typescript
    yarn add typescript @types/node @types/react @types/react-dom @types/jest

- rename App.js => App.tsx (ts won't work, since App uses JSX syntax)
- restart development server  (yarn start)

## Things we will use for development

### Storybook https://storybook.js.org/docs/guides/guide-react/

    npx -p @storybook/cli sb init --type react

#### Configuring storybook to use typescript: https://storybook.js.org/docs/configurations/typescript-config/

    yarn add -D typescript awesome-typescript-loader @storybook/addon-info react-docgen-typescript-loader jest "@types/jest" ts-jest

- create client/.storybook/webpack.config.js   (contents are on link above)
- modify client/.storybook/config.js   (change from .jsx to .tsx)
- ceate new story with .tsx extension :)

#### Storybook state https://github.com/dump247/storybook-state

    yarn add -D @dump247/storybook-state

- Add `import '@storybook/addon-knobs/register';` to `client/.storybook/addons.js`

#### Storybook knobs https://github.com/storybookjs/storybook/tree/master/addons/knobs

    yarn add @storybook/addon-knobs --dev

### Classnames: https://www.npmjs.com/package/classnames

    yarn add classnames
    yarn add @types/classnames (not required, but there are warnings if you don't do this)

**Notes**: https://stackoverflow.com/questions/53111195/typescript-with-classnames-no-index-signature

## Redux - https://redux.js.org/recipes/usage-with-typescript

    yarn add redux-actions @types/redux-actions

Working example: https://codesandbox.io/s/w02m7jm3q7

### redux-logger

### React Immutability Helpers - https://reactjs.org/docs/update.html

https://stackoverflow.com/questions/35628774/how-to-update-single-value-inside-specific-array-item-in-redux

## Socket.io

https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34
