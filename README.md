# Personal Website Source

This repository contains the source code of my personal website.

> [!NOTE]
> The live version of the site is hosted on Neocities.
>
> Live site:
> https://rp0039.neocities.org

## About

This project is a personal website where I experiment with web design and development while learning new technologies.

The repository is public so people can explore the code, suggest improvements, or report issues.

## Project structure

src/
 |-/styles → stylesheets
 |   |- global-css → Components, Media querys and Variables
 |   |- blog.css
 |   |- updates.css
 |
 |-/script → JavaScript
 |-/assets
 |   |- /font → fonts 
 |   |- /svg → svgs 
 |   |- /img → images
 |
 |-/layout
 |   |- layout.astro → general layout
 |   |- /post → Blog and blog post layouts 
 |-/pages
 |   |- /blog/[slug].astro → dinamic paths
 |   |- blog.astro
 |   |- home.astro
 |   |- extras.astro
 |   |- /extras → extras pages
 |   |- index.astro → initial page 
 |
 |-/content → Content of blog, updates and log _**(MARKDOWN only)**_ 
 |
 |-/components


## Contributing

If you'd like to suggest improvements or fixes, please read the CONTRIBUTING.md file before opening a pull request.
