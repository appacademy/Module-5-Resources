## Intro to React

In Mod 3 you learned how to create basic webpages through HTML, CSS and vanilla JavaScript. In Mod 5 we will create advanced, interactive websites through the most popular frontend library, React.

React is a library that creates your website HTML and manages its complex JavaScript state. That's all it does. React needs extension libraries if you want additional features like routing between pages.

We will talk about how client side code, server side code, vanilla JavaScript and React interplay with each other the your development process.

## Vanilla DOM Manipulation(VDM) is Imperative Programming
  - more code to write since you have to build functionality and state management from scratch
  - more ways to write bugs
  - DOM manipulation code is executed in the browser where it has access to the DOM for that tab. 
  - JS executed in the browser is limited by browser's security policies complete browser and JS functionality can be accessed by loading the tab's sources from a Web Server

## React is a Declarative Programming library.
  - React functions do all of the vanilla dom manipulation for you, allowing you to write less code and produce content faster.
  - React is used with JSX which allows you to write XML syntax in a JS file for very fast DOM building.
  - Has built in local state management and basic global state
  - No built in routing
  - No built in Global State Management (GSM)

## Build Tools

These are programs used to bootstrap a frontend app quickly. They build a JS Module that includes React, a module bundler and JSX. Build tools do most of the heavy lifting in the background and allow you to scaffold a project quickly through a template project.

Common build tools for React:

- [create-react-app](https://create-react-app.dev/)
- [Vite](https://vitejs.dev/guide/)

## The differences between React and Build Tools
React
  - The library itself that holds the core functions you need to manipulate the dom declaratively
  - does not have all the functionality enterprise-level websites have
  - is modified through extension libraries
  - not a framework

Build Tools
  - help scaffold a project (creates initial folders and files)
  - creates a WebSocket server running on port 3000. WebSockets picks up changes in your code and sends the changes to the browser. This is hot reloading.
  - sets up a dev environment for React
  - creates the project's Module and initial dependencies

<a name="#readme-top"></a>
