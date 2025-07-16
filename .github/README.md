# Customized starter from Astro Starter Kit: Minimal

`v. 1.0.0`

```sh
# create a new project based on a GitHub repository’s main branch
npm create astro@latest -- --template Karlbovski/astro-starter
# to use a different **branch** name, pass it as part of the --template argument
npm create astro@latest -- --template Karlbovski/astro-starter#decap-cms.
```

> ## 🚧 This page is under construction.
>
> It will contain details about all the features of this starter and how to use it.

# Dev Snippets

Dev notes while experimenting with Astro's features.

## Images

> Research. This works in dev builds for me but the documentation says that works on the server only and should break builds if implemented in the client.

```jsx
---
import { getImage } from "astro:assets";
import logo from "../assets/heartbeat.png";

const optimizedBackground = await getImage({ src: logo, format: "avif" });
---

<div style={`background-image: url(${optimizedBackground.src}); height:100vh; width:100%; background-size: cover; background-position: center center; position: fixed; top: 0; z-index: -1;`} </div>

```

## Netlify Deploy

- TODO

## Netlify Decap-CMS integration

- TODO

## Todo

- Site wide data importing
  Like from a json file or similar.
- SEO
  - sitemap
  - robot.txt
  - meta-tags
  - schemas
- Markdown advanced rendering
