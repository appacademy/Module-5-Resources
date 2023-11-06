# Intro to React

In Mod 3 you learned how to create basic webpages through HTML, CSS and vanilla JavaScript. In Mod 4 you learned how to create servers the send JSON data to clients that need to render this data. In Mod 5 we will use a professional library to create HTML and manage our component states for us. We will integrate the API you created in Mod 4 to finally build your first full-stack portfolio project. create advanced, interactive websites through the most popular frontend library, React.

React is a library that creates your website's HTML using JavaScript and manages its complex JavaScript state. While that may be all it does, React helps frontend developers build complex and interactive modern websites. React needs extension libraries if you want additional features like routing between pages. React is the most popular library used to create client-side websites.

We will talk about how client side code, server side code, vanilla JavaScript, browsers and React interplay with each other in a website.

- Vanilla DOM manipulation is Imperative Programming
  - More code to write since you have to be explicit about everything.
  - More ways to write bugs.
  - DOM manipulation code is executed in the browser where it has access to the DOM for that tab. 
  - JS executed in the browser is limited by the browser's security policies.
  - Complete browser and JS functionality can be accessed by loading the tab's sources from a Web Server.

- React is a Declarative Programming library.
  - React functions do all of the vanilla dom manipulation for you, allowing you to write less code and produce content faster.


## Client Side vs Server Side environments
- environments are the machine (or program or terminal) where your code is running.
- Node
  - Any JavaScript code running in a terminal, whether in a data center or your own computer. ExpressJS and similar apps run on a machine using Node.
  - Some React code can be executed on the host server - this is used to programmatically generate HTML before sending it to client's browser. This is called Server Side Rending (SSR). 
  - SSR means the static parts of the HTML document was built on the host server and sent to the client pre-built. These SSR pages usually load faster.
- Browser
  - The original execution context for the JavaScript language.
  - When running JavaScript in its native environment, the browser, this is called "client side".
  - Client side React means your HTML document is built by running JavaScript in the viewer's browser. Browsers have JavaScript engines that run JavaScript from servers and power the internet. The most widely used one is V8 - Google's JS engine.
  - Client side React builds your HTML using JavaScript after the user lands on the API's home page route (usually "/").

## The differences between React and Vite
- take your notes here
- React
  - The lib that powers core functions, hooks and APIs you need to manipulate the DOM declaratively.
  - Can be modified through extension libraries like React Router.
  - Not a framework (complete package to do everything you need).
- Vite
  - Library that scaffolds frontend projects.
  - Provides a pre-built dev server running on port 5173. Uses WebSockets as the connection to dev server, allowing Hot Module Reloading (HMR) which speeds up development process.
  - Instant updates in browser during development.
  - Built-in bundler (Rollup) that compresses your code into a smaller footprint, ready for sending to clients. Production ready.
