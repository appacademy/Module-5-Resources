# Art Museum, Phase 5: Gallery Images

In Phase 5, you will populate the `GalleryView` with images of the art in the
displayed gallery!

## Overview

Here's a breakdown of the steps you'll be taking in this phase (more detailed
instructions follow):

1. Create an `ArtImageTile` component.
2. Configure `GalleryView` to show a gallery's `ArtImageTile`s.
3. Render the images in `ArtImageTile` as `Link`s.

## 1. Create an `ArtImageTile` component

Add a folder in __components__ called __ArtImageTile__. Make a functional
component that takes a prop `art`. This component will eventually return an
image from `art`, but for now, just return some placeholder text. You'll come
back to it once you have a better idea what `art` looks like.

## 2. Configure `GalleryView` to show a gallery's `ArtImageTile`s

The `GalleryView` component should show an image for each piece of art in the
gallery. Look through your `gallery` object and see if you can find the
artworks. Once you find them, create an array of `ArtImageTile`s--one
`ArtImageTile` for each piece of art--passing each artwork's information into
the `ArtImageTile` as the prop `art`.

**Tips:**

- If you need help figuring out how to do this, use `String.fromCharCode` (look
  it up on MDN) to decrypt this hint (which contains a significant spoiler):  
  89,111,117,32,115,104,111,117,108,100,32,108,111,111,112,32,116,104,114,111,
  117,103,104,32,96,103,97,108,108,101,114,121,46,111,98,106,101,99,116,115,96,
  46,32,58,41

## 3. Render the images in `ArtImageTile` as `Link`s

In the `ArtImageTile` component, take a look inside the `art` prop to find where
it stores the artwork's images. Render the artwork's first image wrapped in a
`Link` component from React Router. When clicked, the `Link` should direct users
to `/galleries/:galleryId/art/:artId`, where `:galleryId` and `:artId` are
replaced with the id of the current art gallery and the image's art id,
respectively. **Remember: `Link to` can take relative links!** This will be how
you navigate to a component you will build in Phase 6.

**Tips:**

- `Link` is a lot like `NavLink`. Use the docs!
- Put an `img` tag in the `Link` component and give it the usual HTML
  attributes like `src`.
- What should be used as `:artId` can be found in the `art` prop object.
- You don't actually need `:galleryId` to make your `Link`s (or in this
  component more generally). (Why?)
- Make sure your `GalleryView` can handle the "Three-handled Loving Cup" in the
  "European and American Art, 17th-19th century" gallery!

Test out your code by navigating to an art gallery from the navigation bar. The
images for each artwork in that gallery should be rendered. If you click on one
of the images, the path should reflect the `/galleries/:galleryId/art/:artId`
pattern.

Go ahead and commit your code. It's time to tackle Phase 6!
