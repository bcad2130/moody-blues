# moody-blues

(All work by Bretton Cadigan)



Created with CodeSandbox

build with:

yarn build

Run server on 3000 with:

serve -s build


{
  // These tasks will run in order when initializing your CodeSandbox project.
  "setupTasks": [
    {
      "name": "Install Dependencies",
      "command": "yarn install"
    }
  ],

  // These tasks can be run from CodeSandbox. Running one will open a log in the app.
  "tasks": {
    "start": {
      "name": "start",
      "command": "yarn start",
      "runAtStart": true
    },
    "build": {
      "name": "build",
      "command": "yarn build",
      "runAtStart": false
    },
    "test": {
      "name": "test",
      "command": "yarn test",
      "runAtStart": false
    },
    "eject": {
      "name": "eject",
      "command": "yarn eject",
      "runAtStart": false
    }
  }
}
