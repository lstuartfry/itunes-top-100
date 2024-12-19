# Overview

### Welcome to my iTunes Top 100 Albums application!

#### _Note - as of this writing, the iTunes rss API seemingly only returns the top 80, rather than the top 100_ 🤷

## Production

This project is hosted by Vercel at https://www.itunes-top-100.dev.

## Framework

I built this application using [Next.js](https://nextjs.org/). I wanted to take advantage of Next.js features like React Server components, http request caching (for the album list as well as specific album metadata), and the opinionated file structure.

## Features

- The homepage displays a list of the top 100 albums currently on iTunes.
- The list can be filtered by search term against either the album artist or album name.
- Each album is selectable, and once selected, a detailed view of the album and track list can be accessed.
- Most importantly, **each track's audio can be previewed!**

## Animations

There are two main animations in this application. First is a page transition using the [next-view-transitions](https://github.com/shuding/next-view-transitions) package. This package uses the relatively new browser View Transitions API under the hood. I opted to use this package since this application primarily uses server-side rendering, which eliminated the ability to use more traditional animations that exist on client-side rendered Single Page Applications.

The other animation is applied on the rendering of each album's track list. I used [Framer Motion](https://motion.dev/) to "slide up" each track into view, in a staggered fashion.

## End to end testing

I used [Playwright](https://playwright.dev/) to write an end to end test for the application. The test can be viewed [here](tests/app.spec.ts). I configured a Github Action to run the test on Vercel's preview deployment of the application. The workflow runs can be viewed [here](https://github.com/lstuartfry/itunes-top-100-albums-app/actions/workflows/playwright.yml).

## Screenshots

## Running the application

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
