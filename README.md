# Creating Plannng Poker app from scratch

## using create-react-app

    npm install -g create-react-app
    create-react-app <folderPath>
    yarn start

    yarn test

## adding [material ui](https://material-ui.co)

    yarn add @material-ui/core

## Adding typescript support to existing application (https://create-react-app.dev/docs/adding-typescript/)

    yarn add typescript @types/node @types/react @types/react-dom @types/jest

- rename App.js => App.tsx (ts won't work, since App uses JSX syntax)
- restart development server

## Addint TSLint (https://palantir.github.io/tslint/)

    yarn global add tslint typescript

## Things we will use for development

### Storybook https://storybook.js.org/docs/guides/guide-react/

    npx -p @storybook/cli sb init --type react

### Classnames: https://www.npmjs.com/package/classnames

    yarn add classnames
    yarn add @types/classnames (I'm not sure if this one)

**Notes**: https://stackoverflow.com/questions/53111195/typescript-with-classnames-no-index-signature
