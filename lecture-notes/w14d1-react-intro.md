# Intro to React

In Mod 3 you learned how to create basic webpages through HTML, CSS and vanilla JavaScript. In Mod 5 we will create advanced, interactive websites through the most popular frontend library, React.

React is a library that creates your website HTML and manages its complex JavaScript state. That's all it does. React needs extension libraries if you want additional features like routing between pages.

We will talk about how client side code, server side code, vanilla JavaScript and React interplay with each other the your development process.

- vanilla dom manipulation is Imperative Programming
  - more code to write since you have to be explicit about everything
  - more ways to write bugs
  - DOM manipulation code is executed in the browser where it has access to the DOM for that tab. 
  - JS executed in the browser is limited by browser's security policies
  - complete browser and JS functionality can be accessed by loading the tab's sources from a Web Server

- React is a Declarative Programming library.
  - React functions do all of the vanilla dom manipulation for you, allowing you to write less code and produce content faster.
## Client Side vs Server Side environments
- environments are the machine (or program or terminal) where your code is executed.
- Node
  - ExpressJS apps.
  - Any JavaScript code running in a terminal.
  - Some React code can be executed server side. This is called Server Side Rending (SSR). 
  - SSR means the static parts of the DOM was built on the host server and sent to the client pre-built. 
  - SSR sites usually load faster.
- Browser
  - The original execution context for the JavaScript language.
  - When running JavaScript in its native environment, the browser, this is called "client side".
  - Client side React means your DOM (HTML Node tree) is built by running JavaScript in the viewer's Browser engine (v8 for chrome)
  - Client side React builds your HTML using JavaScript after the user lands on the API's home page route (usually "/").

## The differences between React and create-react-app
- take your notes here
- React
  - The lib holds the core functions you need to manipulate the dom declaratively
  - does not have all the functionality enterprise-level websites have
  - is modified through extension libraries
  - not a framework (complete package to do everything you need)
- create-react-app
  - it scaffolds the project
  - hot reload dev server running on port 3000. WebSocket connection to dev server.
  - instant updates in browser
  - sets up a dev environment for React
