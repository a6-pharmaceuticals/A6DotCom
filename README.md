# A6 Pharmaceuticals (a6pharma.com)

## Overview
[a6pharma.com](www.a6pharma.com) is a React/Node.js app built off the [React Starter Kit](https://github.com/kriasoft/react-starter-kit). All content in this repo is either from the React Starter Kit (RSK) or was written for A6 specifically.

### Cosmic.js

The site is pretty simple, it's essentially just static content with a few React bells and whistles. We use [Cosmic.js](https://cosmicjs.com), a [headless CMS](https://en.wikipedia.org/wiki/Headless_content_management_system), to serve most media and editorial content on the site. While Cosmic doesn't provide the same one-stop-shop for the entire application that older CMS applications can, it allows us to keep a small React/Node.js application on the dev side and give business-side folks control over most of the content on the site.

We mostly use Cosmic.js as a media storage bin and metadata server, so everything one needs should be found in [the Cosmic REST API docs](https://cosmicjs.github.io/rest-api-docs/).

### Hosting
We host the site on [Heroku](https://www.heroku.com/), a modern CI and deployment service. Heroku integrates with our GitHub repo, and can pull code and start the application in production mode from the CLI (see [the docs folder](./docs/README.js) for more info).

We use GoDaddy as our DNS provider.

## More info
See [the docs folder](./docs/README.js) for more info on the application (how to build the app, how to deploy, etc). The React Starter Kit-written docs do a much better job at explaining the app infrastructure than I could.

## License info

Copyright (c) 2018-present A6 Pharmaceuticals
