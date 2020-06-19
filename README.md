# montreal.toplap.org

live coding website for montreal

## installation requirements

- node installed on machine (v8)

- use nvm to install node v8
- install nvm
- nvm install v8
- nvm use v8
- nvm current "to check that we are running at node v8"

- install dependencies: `npm i`

## development on local server

- to run project in dev mode : `npm run start`
- project can be served now on local server : http://localhost:8080

## build project

to build project into production : `npm run build`

## deployment project

to deploy website to production : 

(firebase-tools needs to be installed globally on node)

https://www.npmjs.com/package/firebase-tools

- then login into firebase project with `firebase login`
- then deploy `firebase deploy --only hosting`
