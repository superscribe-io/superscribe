---
description: This guide shows you how build a website with Nuxt 3 and Superscribe as a Headless CMS.
tags: []
skill_level:
superscribe_version: 9.21.4
author_override:
author: Kevin Lewis
---

# Build a Website With Nuxt 3 and the Superscribe JavaScript SDK

> {{ $frontmatter.description }}

[Nuxt](https://nuxt.com/) is a popular JavaScript framework based on Vue.js. In this tutorial, you will learn how to
build a website using Superscribe as a CMS. You will store, retrieve, and use global metadata such as the site title,
create new pages dynamically based on Superscribe items, and build a blog.

## Before You Start

You will need:

- To install Node.js and a code editor on your computer.
- To sign up for a Superscribe Cloud account.
- Some knowledge of Vue.js and Nuxt.

Create a new Superscribe Cloud project - any tier and configuration is suitable for this tutorial.

Open your terminal and run the following commands to create a new Nuxt project and the Superscribe JavaScript SDK:

```
npx nuxt init my-website
cd my-website
npm install
npm install @superscribe/sdk
```

Open `my-website` in your code editor and type `npm run dev` in your terminal to start the Nuxt development server and
open `http://localhost:3000` in your browser.

## Create Plugin For @superscribe/sdk

To expose an npm package available globally in your Nuxt project you must create a plugin. Create a new directory called
`plugins` and a new file called `superscribe.js` inside of it.

```js
import { Superscribe } from '@superscribe/sdk';
const superscribe = new Superscribe('https://your-project-id.superscribe.app');

export default defineNuxtPlugin(() => {
	return {
		provide: { superscribe },
	};
});
```

Ensure your Project URL is correct when initializing the Superscribe JavaScript SDK.

Inside of your `app.vue` entry file, add the following to the bottom to test that your plugin works:

```js
<script setup>const {$superscribe} = useNuxtApp() console.log($superscribe)</script>
```

Refresh your browser, and check the console. You should see the Superscribe instance logged, which means you have access to
all of the Superscribe JavaScript SDK methods by using the `useNuxtApp()` composable in any page or component.

Once you've confirmed this, remove the `<script>` from `app.vue` before continuing.

## Using Global Metadata and Settings

In your Superscribe project, navigate to Settings -> Data Model and create a new collection called `global`. Under the
Singleton option, select 'Treat as a single object', as this collection will have just a single entry containing global
website metadata.

Create two text input fields - one with the key of `title` and one `description`.

Navigate to the content module and enter the global collection. Collections will generally display a list of items, but
as a singleton, it will launch directly into the one-item form. Enter information in the title and description field and
hit save.

![A form named "Global" has two inputs - a title and a description, each filled with some text.](https://cdn.superscribe.io/docs/v9/headless-cms/how-to-packet-20220222A/nuxt-global-config.webp)

By default, new collections are not accessible to the public. Navigate to Settings -> Roles & Permissions -> Public and
give Read access to the Global collection.

In `app.vue`, remove `<NuxtWelcome />` and replace it with `<NuxtPage />`. This tells Nuxt to use file-based routing.

Create a new directory called `pages` and a new file called `index.vue` inside of it.

```js
<template>
  <h1>{{global.data.title}}</h1>
  <p>{{global.data.description}}</p>
</template>

<script setup>
  const { $superscribe } = useNuxtApp()
  const { data: global } = await useAsyncData('global', () => {
    return $superscribe.items('global').readByQuery()
  })
</script>
```

Refresh your browser. You should see data from your Superscribe Global collection in your page.

## Creating Pages With Superscribe

Create a new collection called `pages` - make the Primary ID Field a "Manually Entered String" called `slug`, which will
correlate with the URL for the page. For example `about` will later correlate to the page `localhost:3000/about`.

Create a text input field called `title` and a WYSIWYG input field called `content`. In Roles & Permissions, give the
Public role read access to the new collection. Create 3 items in the new collection -
[here's some sample data](https://github.com/superscribe/examples/blob/main/website-nuxt3/demo-data).

Inside of `pages`, create a new file called `[slug].vue`. This is a dynamic route, so a single file can be used for all
of the top-level pages.

```js
<template>
  <h1>{{page.title}}</h1>
  <div v-html="page.content"></div>
</template>

<script setup>
  const { $superscribe } = useNuxtApp()
  const route = useRoute()
  const { data: page } = await useAsyncData('page', () => {
    return $superscribe.items('pages').readOne(route.params.slug)
  })
  if (!page.value) throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
</script>
```

Go to `http://localhost:3000/about`, replacing `about` with any of your item slugs. Using the Superscribe JavaScript SDK,
the single item with that slug is retrieved, and the page should show your data. `readOne()` only checks against your
`slug` Primary ID Field.

_Note that we check if a returned value exists, and return a 404 if not. Please also note that
[`v-html` should only be used for trusted content.](https://vuejs.org/api/built-in-directives.html#v-html)_

## Creating Blog Posts With Superscribe

Create a new collection called `authors` with a single text input field called `name`. Create one or more authors.

Then, create a new collection called `posts` - make the Primary ID Field a "Manually Entered String" called `slug`,
which will correlate with the URL for the page. For example `hello-world` will later correlate to the page
`localhost:3000/blog/hello-world`.

Create the following fields in your `posts` data model:

- a text input field called `title`
- a WYSIWYG input field called `content`
- an image relational field called `image`
- a datetime selection field called `published` - set the type to 'date'
- a many-to-one relational field called `author` with the related collection set to `authors`

In Roles & Permissions, give the Public role read access to the `authors`, `posts`, and `superscribe_files` collections.

Create 3 items in the posts collection -
[here's some sample data](https://github.com/superscribe/examples/blob/main/website-nuxt3/demo-data).

### Create Blog Post Listing

Inside of the `pages` directory, create a new subdirectory called `blog` and a new file called `index.vue` inside of it.

```js
<template>
  <h1>Blog</h1>
</template>

<script setup>
  const { $superscribe } = useNuxtApp()
  const { data: posts } = await useAsyncData('posts', () => {
    return $superscribe.items('posts').readByQuery({
      fields: ['slug', 'title', 'publish_date', 'author.name'],
      sort: ['-publish_date']
    })
  })
</script>
```

This query will retrieve the first 100 items (default), sorted by publish date (descending order, which is latest
first). It will only return the specific fields we request - `slug`, `title`, `publish_date`, and the `name` from the
related `author` item.

Update the `<template>` section:

```html
<template>
	<h1>Blog</h1>
	<ul>
		<li v-for="post in posts.data">
			<NuxtLink :href="`/blog/${post.slug}`">
				<h2>{{post.title}}</h2>
			</NuxtLink>
			<span>{{post.publish_date}} &bull; {{post.author.name}}</span>
		</li>
	</ul>
</template>
```

Visit `http://localhost:3000` and you should now see a blog post listing, with latest items first.

![A page with a title of "Blog". On it is a list of three items - each with a title, author, and date. The title is a link.](https://cdn.superscribe.io/docs/v9/headless-cms/how-to-packet-20220222A/nuxt-blog-listing.webp)

### Create Blog Post Listing

Each blog post links to a page that does not yet exist. In the `pages/blog` directory, create a new file called
`[slug].vue`:

```js
<template>
  <img :src="`${$superscribe.url}/assets/${post.image.filename_disk}?width=600`" alt="">
  <h1>{{post.title}}</h1>
  <div v-html="post.content"></div>
</template>

<script setup>
  const { $superscribe } = useNuxtApp()
  const route = useRoute()
  const { data: post } = await useAsyncData('post', () => {
    return $superscribe.items('posts').readOne(route.params.slug, {
      fields: ['*.*']
    })
  })
  if (!post.value) throw createError({
    statusCode: 404,
    statusMessage: 'Post Not Found'
  })
</script>
```

Some key notes about this code snippet.

- In the `<img>` tag, `$superscribe.url` is the value provided when creating the Superscribe plugin.
- The `width` attribute demonstrates Superscribe' built-in image transformations.
- Once again, `v-html` should only be used if all content is trusted.
- Because almost-all fields are used in this page, including those from the `image` relational field, the `fields`
  property when using the Superscribe JavaScript SDK can be set to `*.*`.

Click on any of the blog post links, and it will take you to a blog post page complete with a header image.

![A blog post page shows an image, a title, and a number of paragraphs.](https://cdn.superscribe.io/docs/v9/headless-cms/how-to-packet-20220222A/nuxt-blog-single.webp)

## Add Navigation

While not strictly Superscribe-related, there are now several pages that aren't linked to each other. In `app.vue`, above
the `<NuxtPage />` component, add a navigation. Don't forget to use your specific page slugs.

```html
<nav>
	<NuxtLink to="/">Home</NuxtLink>
	<NuxtLink to="/about">About</NuxtLink>
	<NuxtLink to="/conduct">Code of Conduct</NuxtLink>
	<NuxtLink to="/privacy">Privacy Policy</NuxtLink>
	<NuxtLink to="/blog">Blog</NuxtLink>
</nav>
```

## Next Steps

Through this guide, you have set up a Nuxt project, created a Superscribe plugin, and used it to query data. You have used
a singleton collection for global metadata, dynamically created pages, as well as blog listing and post pages.

If you want to change what is user-accessible, consider setting up more restrictive roles and accessing only valid data
at build-time.

If you want to build more complex dynamic pages made out of reusable components, check out
[our recipe on doing just this](/use-cases/headless-cms/create-reusable-page-components-using-m2a).

If you want to see the code for this project, you can find it
[on GitHub](https://github.com/superscribe/examples/blob/main/website-nuxt3).
