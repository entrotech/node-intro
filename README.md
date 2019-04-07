# Node Intro

##Installation
You will need to have Node and NPM installed first.
Then clone this repo to your hard drive and open a terminal window and navigate to the
root level directory containing the package.json file.

Then run

```
npm install
```

to download the requisite npm modules.

##Running the Examples
Each of the \*.js files starting with a two-digit number is a separate example that can be followed in
sequence as a quick intro to node.

Examples 00 through 14 can be run from a terminal by simply typing

```
node <file-name>
```

Some of the examples will terminate when they have finished. Others will
require you to type Ctl-C to force-terminate the application.

The `15-express-server.js` example runs a simple express web servrer, which you can exercise by first
starting the server from the terminal:

```
node 15-express-server.js
```

and then using your web browser to navigate to oneof the following urls

```
locahost:3004/hello/<some name>
locahost:3004/api/hackernews/<some topic>
```

to exercise the express server.

##Refactored Express Server
Example 15 is then re-factored into a more standard folder and file structure for non-trivial
applications comprised of the server.js file and the files foudn under the /app directory. This splits
the routing and services into separate js modules.
Running this example from the console by typing

```
npm server.js
```

will start the re-factored web server and implements the same routes as Example 15. The
refactored example can serve as a reasonable starting point for a non-trivial
express application.
