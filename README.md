# notunseldom

Blog and home page static site generator, using
[SvelteKit](https://kit.svelte.dev/), Markdown with
[mdsvex](https://mdsvex.com/), Sass and [Nord
theme](https://www.nordtheme.com/).

Built from scratch with help and inspiration from Josh Collingworth's excellent
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

To create a production version of your app:

```bash
npm run build
```

Deploy contents of ./build somewhere (instructions coming soon for AWS).

## How it was done

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
