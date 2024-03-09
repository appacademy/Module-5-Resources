# Art Museum, Phase 1: Home Page

In Phase 1, you will create a home page and add a route to it in `App`.

## Adding a route

Now that you have your basic router set up, go ahead and add a route for the
home page (`/`).

The home page should display an `h2` with the text "Harvard Art Museum" and a
description (`p`) with the text "Look, but Don't Touch. Please select a Gallery
in the navigation bar." While you could create a separate component for this
page, for now just define it within your route definition.

**Hints:**

* Adding this route is very similar to the "Page Not Found" route that you
  created during setup. If you get stuck, look back at those instructions.
* The route object `element` key requires a single element, so if you need to
  pass two elements at the same level, you will need to wrap them in empty tags
  (`<></>`) or some other wrapper.
* Your router will match routes based on best match; the order in which you list
  them does not matter.

Test out your new route! If everything is configured correctly then refreshing
at [http://localhost:5173] should now show "Harvard Art Museum". Navigating to
any other route--e.g., [http://localhost:5173/not-found]--should instead show
the familiar "Page Not Found".

**Note:** To help catch malformed HTML/JSX code, the linter flags certain
unescaped characters by default: `>`, `"`, `'`, and `}`. Accordingly, if you
copied the `Look, but Don't Touch` text directly into your `p` tag, running your
app will likely produce the following error message from your linter:

```sh
error  `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`  react/no-unescaped-entities
```

If your HTML is otherwise well formed, the text should still display as expected
in the browser. To get rid of the error, simply replace the `'` with the
appropriate HTML escape code, `&apos;` in this case:

```jsx
<p>
  Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.
</p>
```

[http://localhost:5173]: http://localhost:5173
[http://localhost:5173/not-found]: http://localhost:5173/not-found
