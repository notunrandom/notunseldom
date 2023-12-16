# notunseldom

Blog and home page static site generator, using
[SvelteKit](https://kit.svelte.dev/), Markdown with
[mdsvex](https://mdsvex.com/), Sass and [Nord
theme](https://www.nordtheme.com/).

Built from scratch with help and inspiration from Josh Collinsworth's excellent
tutorial: [Let's learn SvelteKit by building a static Markdown blog from
scratch](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog).

## Quick start

To use, either clone...

```bash
git clone https://github.com/notunrandom/notunseldom.git my-blog
```

... or degit if you don't intend to modify:

```bash
npx degit https://github.com/notunrandom/notunseldom.git my-blog
```

Then to try out locally, build and run:

```bash
cd my-blog
npm install
npm run dev -- --open
```

To adapt to your needs, modify/add \*.md files in src/routes.

To create a production version of your app:

```bash
npm run build
```

Deploy contents of ./build somewhere (instructions coming soon for AWS).

## How it was done

### Create SvelteKit skeleton

Requires npm to be installed, e.g. on Arch Linux:

```bash
sudo pacman -S npm
```

Create a new SvelteKit project:

```bash
npm create svelte@latest notunseldom
```

Respond to questions with:

- create a skeleton project
- use Javascript without type checking
- use ESLint, Prettier, Playwright and Vitest

Build and test:

```bash
cd notunseldom
npm install
npm run dev -- --open
```

This should open a browser tab with a page displaying "Welcome to SvelteKit".

If using git, this is a good time to:

```bash
git init
git add -A
git commit -m"Initial commit"
```

Create a basic layout with a header and a footer:

- Root [layout](https://github.com/notunrandom/notunseldom/blob/73a696e3c9726193ca9478d14f5f328ad5dc1e90/src/routes/%2Blayout.svelte) Svelte applies to all pages.
- Add a src/lib/components directory.
- [Header](https://github.com/notunrandom/notunseldom/blob/73a696e3c9726193ca9478d14f5f328ad5dc1e90/src/lib/components/Header.svelte) component with basic navigation.
- [Footer](https://github.com/notunrandom/notunseldom/blob/73a696e3c9726193ca9478d14f5f328ad5dc1e90/src/lib/components/Footer.svelte) component with minimal copyright notice.
- [About](https://github.com/notunrandom/notunseldom/blob/73a696e3c9726193ca9478d14f5f328ad5dc1e90/src/routes/about/%2Bpage.svelte) page in src/routes/about directory.
- [Contact](https://github.com/notunrandom/notunseldom/blob/73a696e3c9726193ca9478d14f5f328ad5dc1e90/src/routes/contact/%2Bpage.svelte) page in src/routes/contact directory.

**Note**: the above permalinks to a specific commit of a file were obtained by viewing the file in the browser on GitHub, and pressing the Y key.

### A touch of style

More tools are needed to use [Sass](https://sass-lang.com/) and [Nord theme](https://www.nordtheme.com/):

```bash
npm install -D svelte-preprocess sass nord
```

Then:

- Modify [svelte.config.js](https://github.com/notunrandom/notunseldom/blob/6b7dd9b26c6ff1edbe8f463602eb1bd83da12c0c/svelte.config.js) to perform Sass preprocessing.
- Create a ./src/lib/styles directory with a [style.sass](https://github.com/notunrandom/notunseldom/blob/6b7dd9b26c6ff1edbe8f463602eb1bd83da12c0c/src/lib/styles/style.sass) file.
- Import that Sass file in [+layout.svelte](https://github.com/notunrandom/notunseldom/blob/6b7dd9b26c6ff1edbe8f463602eb1bd83da12c0c/src/routes/%2Blayout.svelte).
- Add Sass styling directly to [Header.svelte](https://github.com/notunrandom/notunseldom/blob/6b7dd9b26c6ff1edbe8f463602eb1bd83da12c0c/src/lib/components/Header.svelte) and [Footer.svelte](https://github.com/notunrandom/notunseldom/blob/6b7dd9b26c6ff1edbe8f463602eb1bd83da12c0c/src/lib/components/Footer.svelte) components.
- Add googlefont to [app.html](https://github.com/notunrandom/notunseldom/blob/6b7dd9b26c6ff1edbe8f463602eb1bd83da12c0c/src/app.html).

### Markdown

First install mdsvex:

```bash
npm install -D mdsvex
```

Then:

- add markdown preprocessing to [svelte.config.js](https://github.com/notunrandom/notunseldom/blob/4fe969e717914dc743c53bb4f2e5ce146e5a7298/svelte.config.js)
- make new [+page.md](https://github.com/notunrandom/notunseldom/blob/4fe969e717914dc743c53bb4f2e5ce146e5a7298/src/routes/colophon/%2Bpage.md) in routing directory instead of +page.svelte

Mdsvex comes with prism.js for code syntax highlighting, but this needs to be themed:

- add a new partial [\_prism.sass](https://github.com/notunrandom/notunseldom/blob/a818b7e5fca3cfcd0330c9b59f34840bc9a0843e/src/lib/styles/_prism.sass) file in src/lib/styles
- use the partial in the main [style.sass](https://github.com/notunrandom/notunseldom/blob/a818b7e5fca3cfcd0330c9b59f34840bc9a0843e/src/lib/styles/style.sass) file
- test with some code in a [+page.md](https://github.com/notunrandom/notunseldom/blob/a818b7e5fca3cfcd0330c9b59f34840bc9a0843e/src/routes/colophon/%2Bpage.md) file

### Blog

Using dynamic routing:

- create a src/routes/blog subdirectory
- create a src/routes/blog/[slug] subdirectory
- in latter, create a [+page.js](https://github.com/notunrandom/notunseldom/blob/fdc5c9e7ebdf88786cef01a172c5b4fc981e268e/src/routes/blog/%5Bslug%5D/%2Bpage.js) file step 1 of the routing
- also create a [+page.svelte](https://github.com/notunrandom/notunseldom/blob/fdc5c9e7ebdf88786cef01a172c5b4fc981e268e/src/routes/blog/%5Bslug%5D/%2Bpage.svelte) for step 2 (rendering)
- add example blog pages \*.md in src/routes/blog.

This is enough to access individual posts by entering their address.

Creating a server route (API endpoint) is a convenient approach towards building an index of blogs.

- create a src/routes/api/posts directory
- in it, create a [+server.js](https://github.com/notunrandom/notunseldom/blob/cab1ff200213e481ed74633c90d94fa881cdbc89/src/routes/api/posts/%2Bserver.js) server route file
- create a src/lib/utils directory
- in it, create a [index.js](https://github.com/notunrandom/notunseldom/blob/cab1ff200213e481ed74633c90d94fa881cdbc89/src/lib/utils/index.js) script that provides a list of blog entries

The API endpoint /api/posts now works. All that is left is using it to build the index page...

- preload the list of posts with a [+page.js](https://github.com/notunrandom/notunseldom/blob/cab1ff200213e481ed74633c90d94fa881cdbc89/src/routes/blog/%2Bpage.js) in src/routes/blog
- render it with the [+page.svelte](https://github.com/notunrandom/notunseldom/blob/cab1ff200213e481ed74633c90d94fa881cdbc89/src/routes/blog/%2Bpage.svelte) in src/routes/blog

... and adding a menu item for the blog index (in the [Header.svelte](https://github.com/notunrandom/notunseldom/blob/cab1ff200213e481ed74633c90d94fa881cdbc89/src/lib/components/Header.svelte) component).
