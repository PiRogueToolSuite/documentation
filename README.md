<div align="center">
<img width="60px" src="https://pts-project.org/android-chrome-512x512.png">
<h1>PiRogue Tool Suite documentation</h1>
<p>
The documentation site of the PiRogue Tool Suite, built with Docusaurus.
</p>
<p>
<a href="https://pts-project.org">Website</a> | 
<a href="https://doc.pts-project.org">Documentation</a> |
<a href="https://discord.com/invite/qGX73GYNdp">Support</a>
</p>
</div>


## Getting Started

This is a quick guide to contributing to the documentation.

### Setting Up
Node.js 20 or newer and `npm` are required. Install the dependencies with:
```
npm install
```

### Development
Start the site locally and automatically reload it while editing the content:
```
npm start
```
The site opens on `http://localhost:3000`.

### Build
Build the static site with the `build` command. The output is written to `build/`:
```
npm run build
```

### Preview
To preview the production build locally, use the `serve` command:
```
npm run serve
```


## Project structure

The documentation follows the [Diátaxis](https://diataxis.fr/) framework: every page is one of four types, and each type has its own folder and its own tab in the navigation bar.

```
docs/
  index.mdx             Start here: the four sections and the learning paths
  tutorials/            Lessons: a newcomer follows them step by step to a working result
  how-to/               Directions for a specific task, for users who know what they want
    pirogue/ colander/ threatr/ mandolin/ investigations/
  reference/            Facts to look up: settings, commands, files, fields, APIs
    pirogue/ colander/ threatr/ mandolin/ investigations/
  explanation/          Discussions: how things work and why
    pts/ pirogue/ colander/ threatr/ mandolin/ investigations/
src/
  pages/                Home page
  css/custom.css        Brand theme (PTS purple #7122dc)
  components/           Shared MDX components
static/img/             Images, logos, favicons
docusaurus.config.js    Site configuration, including the redirects of former URLs
sidebars.js             One sidebar per type of documentation
```

When you write a page, decide first which type it is, and keep it to that type:

* a **tutorial** is a lesson: it says "we will", gives no choices, and ends with what the learner achieved
* a **how-to guide** is titled after the task ("Deploy…", "Configure…"), lists its prerequisites and only gives the steps
* a **reference** page describes, in tables and lists, without instructions or opinions
* an **explanation** page discusses the why, the design and the alternatives, without steps

Link to the other types instead of mixing them in a page: a how-to links to the reference for the list of settings, and to the explanation for the background.

Colander is deployed in exactly two ways, both from the [`colander-ansible`](https://github.com/PiRogueToolSuite/colander-ansible) repository: the [Ansible playbooks](https://pts-project.org/docs/colander/deployment/) and [Colander quick deploy](https://pts-project.org/colander-ansible/) with Docker Compose. Do not document any other deployment method.

If you move a page, add a redirect for its old URL to `legacyRedirects` in `docusaurus.config.js` so that existing links keep working.


## Contributing
If you find any issues or have suggestions, please submit a pull request.

## Community
[GitHub](https://github.com/PiRogueToolSuite) | 
[Mastodon](https://infosec.exchange/@pts) | 
[X](https://x.com/PiRogueTools) | 
[Discord](https://discord.com/invite/qGX73GYNdp) | 
[Open Collective](https://opencollective.com/pts)
