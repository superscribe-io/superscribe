---
description:
  The JS SDK provides an intuitive interface for the Superscribe API from within a JavaScript-powered project (browsers and
  Node.js). The default implementation uses [Axios](https://npmjs.com/axios) for transport and `localStorage` for
  storing state.
readTime: 14 min read
---

# JavaScript SDK

> The JS SDK provides an intuitive interface for the Superscribe API from within a JavaScript-powered project (browsers and
> Node.js). The default implementation uses [Axios](https://npmjs.com/axios) for transport and `localStorage` for
> storing state. Advanced customizations are available.

## Installation

```bash
npm install @superscribe/sdk
```

## Basic Usage

This is the starting point to use the JS SDK. After you've created the `Superscribe` instance, you can start invoking
methods from it to access your project and data.

```js
import { Superscribe } from '@superscribe/sdk';

const superscribe = new Superscribe('http://superscribe.example.com');
```

You can always access data available to the [public role](/configuration/users-roles-permissions.html#superscribe-roles).

```js
async function publicData() {
	// GET DATA

	// We don't need to authenticate if the public role has access to some_public_collection.
	const publicData = await superscribe.items('some_public_collection').readByQuery({ sort: ['id'] });

	console.log(publicData.data);
}
```

### Basic Authentication

To access anything that is not available to the
[public role](/configuration/users-roles-permissions.html#superscribe-roles), you must be
[authenticated](/reference/authentication.md).

```js
async function start() {
	// AUTHENTICATION

	let authenticated = false;

	// Try to authenticate with token if exists
	await superscribe.auth
		.refresh()
		.then(() => {
			authenticated = true;
		})
		.catch(() => {});

	// Let's login in case we don't have token or it is invalid / expired
	while (!authenticated) {
		const email = window.prompt('Email:');
		const password = window.prompt('Password:');

		await superscribe.auth
			.login({ email, password })
			.then(() => {
				authenticated = true;
			})
			.catch(() => {
				window.alert('Invalid credentials');
			});
	}

	// GET DATA

	// After authentication, we can fetch data from any collections that the user has permissions to.
	const privateData = await superscribe.items('some_private_collection').readByQuery({ sort: ['id'] });

	console.log(privateData.data);
}

start();
```

## Custom Configuration

The previous section covered basic installation and usage of the JS SDK with default configurations for `init`. But
sometimes you may need to customize these defaults.

### Constructor

```js
import { Superscribe } from '@superscribe/sdk';

const superscribe = new Superscribe(url, init);
```

### Parameters

<br />

#### `url` _required_

- **Type** — `String`
- **Description** — A string that points to your Superscribe instance. E.g., `https://example.superscribe.io`
- **Default** — N/A

<br />

#### `init` _optional_

- **Type** — `Object`
- **Description** — Defines authentication, storage and transport settings.
- **Default** — The following shows the default values for `init`.

```js
// This is the default init object
const config = {
	auth: {
		mode: 'cookie', // 'json' in Node.js
		autoRefresh: true,
		msRefreshBeforeExpires: 30000,
		staticToken: '',
	},
	storage: {
		prefix: '',
		mode: 'LocalStorage', // 'MemoryStorage' in Node.js
	},
	transport: {
		params: {},
		headers: {},
		onUploadProgress: (ProgressEvent) => {},
		maxBodyLength: null,
		maxContentLength: null,
	},
};
```

## Customize `auth`

Defines how authentication is handled by the SDK. By default, Superscribe creates an instance of `auth` which handles
refresh tokens automatically.

```js
const auth = {
	mode: 'cookie', // 'json' in Node.js
	autoRefresh: true,
	msRefreshBeforeExpires: 30000,
	staticToken: '',
};
```

### Options

<br />

#### `mode`

- **Type** — `String`
- **Description** — Defines the mode you want to use for authentication. It can be `'cookie'` for cookies or `'json'`
  for JWT.
- **Default** — Defaults to `'cookie'` on browsers and `'json'` otherwise.

:::tip

We recommend using cookies when possible to prevent any kind of attacks, mostly XSS.

:::

#### `autoRefresh`

- **Type** — `Boolean`
- **Description** — Determines whether SDK handles refresh tokens automatically.
- **Default** — Defaults to `true`.

<br />

#### `msRefreshBeforeExpires`

- **Type** — `Number`
- **Description** — When `autoRefresh` is enabled, this tells how many milliseconds before the refresh token expires and
  needs to be refreshed.
- **Default** — Defaults to `30000`.

<br />

#### `staticToken`

- **Type** — `String`
- **Description** - Defines the static token to use. It is not compatible with the options above since it does not
  refresh.
- **Default** — Defaults to `''` (no static token).

### Extend `auth`

It is possible to provide a custom implementation by extending `IAuth`. While this could be useful in certain advanced
situations, it is not needed for most use-cases.

```js
import { IAuth, Superscribe } from '@superscribe/sdk';

class MyAuth extends IAuth {
	async login() {
		return { access_token: '', expires: 0 };
	}
	async logout() {}
	async refresh() {
		return { access_token: '', expires: 0 };
	}
	async static() {
		return true;
	}
}

const superscribe = new Superscribe('https://example.superscribe.app', {
	auth: new MyAuth(),
});
```

## Customize `storage`

The storage is used to load and save token information. By default, Superscribe creates an instance of `storage` which
handles store information automatically.

```js
const storage = {
	prefix: '',
	mode: 'LocalStorage', // 'MemoryStorage' in Node.js
};
```

:::tip Multiple Instances

If you want to use multiple instances of the SDK you should set a different [`prefix`](#prefix) for each one.

:::

::: tip

The axios instance can be used for custom requests by calling:

```ts
await superscribe.transport.<method>('/path/to/endpoint', {
	/* body, params, ... */
});
```

:::

### Options

<br />

#### `prefix`

- **Type** — `String`
- **Description** — Defines the tokens prefix tokens that are saved. This should be fulfilled with different values when
  using multiple instances of SDK.
- **Default** — Defaults to `''` (no prefix).

<br />

#### `mode`

- **Type** — `String`
- **Description** — Defines the storage location to be used to save tokens. Allowed values are `LocalStorage` and
  `MemoryStorage`. The mode `LocalStorage` is not compatible with Node.js. `MemoryStorage` is not persistent, so once
  you leave the tab or quit the process, you will need to authenticate again.
- **Default** — Defaults to `LocalStorage` on browsers and `MemoryStorage` on Node.js.

### Extend `storage`

It is possible to provide a custom implementation by extending `BaseStorage`. While this could be useful in certain
advanced situations, it is not needed for most use-cases.

```js
import { BaseStorage, Superscribe } from '@superscribe/sdk';

class SessionStorage extends BaseStorage {
	get(key) {
		return sessionStorage.getItem(key);
	}
	set(key, value) {
		return sessionStorage.setItem(key, value);
	}
	delete(key) {
		return sessionStorage.removeItem(key);
	}
}

const superscribe = new Superscribe('https://example.superscribe.app', {
	storage: new SessionStorage(),
});
```

## Customize `transport`

Defines settings you want to customize regarding [Transport](#extend-transport).

By default, Superscribe creates an instance of `Transport` which handles requests automatically. It uses
[`axios`](https://axios-http.com/) so it is compatible in both browsers and Node.js. With axios, it is also possible to
handle upload progress (a downside of `fetch`).

The configurations within `init.transport` are passed to `axios`. For more details, see
[Request Config](https://axios-http.com/docs/req_config) in the axios documentation.

```js
export default {
	params: {},
	headers: {},
	onUploadProgress: (ProgressEvent) => {},
	maxBodyLength: null,
	maxContentLength: null,
};
```

### Options

<br />

#### `params`

- **Type** — `Object`
- **Description** — Defines an object with keys and values to be passed as additional query string.
- **Default** — N/A

<br />

#### `headers`

- **Type** — `Object`
- **Description** - Defines an object with keys and values to be passed as additional headers.
- **Default** — N/A

<br />

#### `onUploadProgress`

- **Type** — `Function`
- **Description** — Defines a callback function to indicate the upload progress.
- **Default** — N/A

:::tip ProgressEvent Please see the MDN documentation to learn more about the
[ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent).

:::

<br />

#### `maxBodyLength`

- **Type** — `Number`
- **Description** — The maximum body length in bytes. Set `Infinity` for no limit.
- **Default** — N/A

<br />

#### `maxContentLength`

- **Type** — `Number`
- **Description** — The maximum content length in bytes. Set `Infinity` for no limit.
- **Default** — N/A

### Extend `Transport`

It is possible to provide a custom implementation by extending `ITransport`. For example, you can customize it to use
different HTTP libraries. While this could be useful in certain advanced situations, it is not needed for most
use-cases.

```js
import { ITransport, Superscribe } from '@superscribe/sdk';

class MyTransport extends ITransport {
	buildResponse() {
		return {
			raw: '',
			data: {},
			status: 0,
			headers: {},
		};
	}

	async get(path, options) {
		return this.buildResponse();
	}
	async head(path, options) {
		return this.buildResponse();
	}
	async options(path, options) {
		return this.buildResponse();
	}
	async delete(path, data, options) {
		return this.buildResponse();
	}
	async post(path, data, options) {
		return this.buildResponse();
	}
	async put(path, data, options) {
		return this.buildResponse();
	}
	async patch(path, data, options) {
		return this.buildResponse();
	}
}

const superscribe = new Superscribe('https://example.superscribe.app', {
	transport: new MyTransport(),
});
```

## TypeScript

Version >= 4.1

Although it's not required, it is recommended to use TypeScript to have an easy development experience. This allows more
detailed IDE suggestions for return types, sorting, filtering, etc.

To feed the SDK with your current schema, you need to pass it on the constructor.

```ts
type BlogPost = {
	id: ID;
	title: string;
};

type BlogSettings = {
	display_promotions: boolean;
};

type MyCollections = {
	posts: BlogPost;
	settings: BlogSettings;
};

// This is how you feed custom type information to Superscribe.
const superscribe = new Superscribe<MyCollections>('https://example.superscribe.app');

// ...

const post = await superscribe.items('posts').readOne(1);
// typeof(post) is a partial BlogPost object

const settings = await posts.singleton('settings').read();
// typeof(settings) is a partial BlogSettings object
```

You can also extend the Superscribe system type information by providing type information for system collections as well.

```ts
import { Superscribe } from '@superscribe/sdk';

// Custom fields added to Superscribe user collection.
type UserType = {
	level: number;
	experience: number;
};

type CustomTypes = {
	/*
	This type will be merged with Superscribe user type.
	It's important that the naming matches a superscribe
	collection name exactly. Typos won't get caught here
	since SDK will assume it's a custom user collection.
	*/
	superscribe_users: UserType;
};

const superscribe = new Superscribe<CustomTypes>('https://example.superscribe.app');

await superscribe.auth.login({
	email: 'admin@example.com',
	password: 'password',
});

const me = await superscribe.users.me.read();
// typeof me = partial SuperscribeUser & UserType;

// OK
me.level = 42;

// Error TS2322: Type "string" is not assignable to type "number".
me.experience = 'high';
```

## Authentication

### Get current token

```ts
await superscribe.auth.token;
```

::: warning Async

Reading the token is an asynchronous getter. This makes sure that any currently active `refresh` calls are being awaited
before the current token is returned.

:::

### Login

#### With credentials

```js
await superscribe.auth.login({
	email: 'admin@example.com',
	password: 'd1r3ctu5',
});
```

#### With static tokens

```js
await superscribe.auth.static('static_token');
```

### Refresh Auth Token

By default, Superscribe will handle token refreshes. Although, you can handle this behavior manually by setting
[`autoRefresh`](#options.auth.autoRefresh) to `false`.

```js
await superscribe.auth.refresh();
```

::: tip Developing Locally

If you're developing locally, you might not be able to refresh your auth token automatically in all browsers. This is
because the default auth configuration requires secure cookies to be set, and not all browsers allow this for localhost.
You can use a browser which does support this such as Firefox, or
[disable secure cookies](/self-hosted/config-options#security).

:::

### Logout

```js
await superscribe.auth.logout();
```

### Request a Password Reset

By default, the address defined in `PUBLIC_URL` on `.env` file is used for the link to the reset password page sent in
the email:

```js
await superscribe.auth.password.request('admin@example.com');
```

But a custom address can be passed as second argument:

```js
await superscribe.auth.password.request(
	'admin@example.com',
	'https://myapp.com' // In this case, the link will be https://myapp.com?token=FEE0A...
);
```

**Note**: To use a custom address you need to configure the
[`PASSWORD_RESET_URL_ALLOW_LIST` environment variable](/self-hosted/config-options#security) to enable this feature.

### Reset a Password

```js
await superscribe.auth.password.reset('abc.def.ghi', 'n3w-p455w0rd');
```

Note: The token passed in the first parameter is sent in an email to the user when using `request()`

## Items

You can get an instance of the item handler by providing the collection (and type, in the case of TypeScript) to the
`items` function. The following examples will use the `Article` type.

> JavaScript

```js
// import { Superscribe, ID } from '@superscribe/sdk';
const { Superscribe } = require('@superscribe/sdk');

const superscribe = new Superscribe('https://example.superscribe.app');

const articles = superscribe.items('articles');
```

> TypeScript

```ts
import { Superscribe, ID } from '@superscribe/sdk';

// Map your collection structure based on its fields.
type Article = {
	id: ID;
	title: string;
	body: string;
	published: boolean;
};

// Map your collections to its respective types. The SDK will
// infer its types based on usage later.
type MyBlog = {
	// [collection_name]: typescript_type
	articles: Article;

	// You can also extend Superscribe collection. The naming has
	// to match a Superscribe system collection and it will be merged
	// into the system spec.
	superscribe_users: {
		bio: string;
	};
};

// Let the SDK know about your collection types.
const superscribe = new Superscribe<MyBlog>('https://example.superscribe.app');

// typeof(article) is a partial "Article"
await superscribe.items('articles').readOne(10);

// Error TS2322: "hello" is not assignable to type "boolean".
// post.published = 'hello';
```

### Create Single Item

```js
await articles.createOne({
	title: 'My New Article',
});
```

### Create Multiple Items

```js
await articles.createMany([
	{
		title: 'My First Article',
	},
	{
		title: 'My Second Article',
	},
]);
```

### Read By Query

```js
await articles.readByQuery({
	search: 'Superscribe',
	filter: {
		date_published: {
			_gte: '$NOW',
		},
	},
});
```

### Read All

```js
await articles.readByQuery({
	// By default API limits results to 100.
	// With -1, it will return all results, but it may lead to performance degradation
	// for large result sets.
	limit: -1,
});
```

### Read Single Item

```js
await articles.readOne(15);
```

Supports optional query:

```js
await articles.readOne(15, {
	fields: ['title'],
});
```

### Read Multiple Items

```js
await articles.readMany([15, 16, 17]);
```

Supports optional query:

```js
await articles.readMany([15, 16, 17], {
	fields: ['title'],
});
```

### Update Single Item

```js
await articles.updateOne(15, {
	title: 'This articles now has a different title',
});
```

Supports optional query:

```js
await articles.updateOne(
	42,
	{
		title: 'This articles now has a similar title',
	},
	{
		fields: ['title'],
	}
);
```

### Update Multiple Items

```js
await articles.updateMany([15, 42], {
	title: 'Both articles now have the same title',
});
```

Supports optional query:

```js
await articles.updateMany(
	[15, 42],
	{
		title: 'Both articles now have the same title',
	},
	{
		fields: ['title'],
	}
);
```

### Delete

```js
// One
await articles.deleteOne(15);

// Multiple
await articles.deleteMany([15, 42]);
```

### Request Parameter Overrides

To override any of the axios request parameters, provide an additional parameter with a `requestOptions` object:

```js
await articles.createOne(
	{ title: 'example' },
	{ fields: ['id'] },
	{
		requestOptions: {
			headers: {
				'X-My-Custom-Header': 'example',
			},
		},
	}
);
```

## Activity

```js
superscribe.activity;
```

The activity property has all the methods of superscribe.items('superscribe_activity') with the addition of an alias to the
activity comments (below).

```js
superscribe.activity.comments;
```

## Comments

```js
superscribe.comments;
```

### Create a comment

```js
await superscribe.comments.create({...});
```

### Update a comment

```js
await superscribe.comments.update(/* comment activity id */ 15, 'Yo, dawg!');
```

### Delete a comment

````js
await superscribe.comments.delete(/* comment activity id */ 15);

## Collections

```js
superscribe.collections;
````

### Read a single collection

```js
await superscribe.collections.readOne(/* collection name */ 'articles');
```

### Read all collections

```js
await superscribe.collections.readAll(); //does not currently support query or searching
```

### Create a collection

```js
await superscribe.collections.createOne({collection: 'articles', ...});
```

### Create multiple collections

```js
await superscribe.collections.createMany([{collection: 'articles', ...},...]);
```

### Update a collection

```js
await superscribe.collections.updateOne(/* collection name */ 'articles', /* patch */ { note: 'All the articles' }, query);
```

### Delete a collection

```js
await superscribe.collections.deleteOne(/* collection name */ 'articles');
```

## Fields

```js
superscribe.fields;
```

### Read a single field

```js
await superscribe.fields.readOne(/* collection name */ 'articles', /* id of the field */ 15);
```

### Read multiple fields

```js
await superscribe.fields.readMany(/* collection name */ 'articles'); //doesn't currently support query parameter
```

### Read all fields

```js
await superscribe.fields.readAll(); //does not currently support query or searching
```

### Create a field

```js
await superscribe.fields.createOne(/* collection name */ 'articles', {field: 'alt_title', ...});
```

### Update a field

```js
await superscribe.fields.updateOne(
	/* collection name */ 'articles',
	/* field_name */ 'alt_title',
	/* patch */ { hidden: true }
);
```

### Delete a field

```js
await superscribe.fields.deleteOne(/* collection name */ 'articles', /* field_name */ 'alt_title');
```

## Files

```js
superscribe.files;
```

The files property support all of the functions common to all items - superscribe.items('superscribe_files') with one
addition: import.

### Import

In addition to the items common methods, the files property adds the import method for importing files.

```js
superscribe.files.import(...);
```

See [API File Import](https://docs.superscribe.io/reference/files/#import-a-file)

### Uploading a file

To upload a file you will need to send a `multipart/form-data` as body. On browser side you do so:

```js
/* index.js */
import { Superscribe } from 'https://unpkg.com/@superscribe/sdk@latest/dist/sdk.esm.min.js';

const superscribe = new Superscribe('https://example.superscribe.app', {
	auth: {
		staticToken: 'STATIC_TOKEN', // If you want to use a static token, otherwise check below how you can use email and password.
	},
});

// await superscribe.auth.login({ email, password })
// If you want to use email and password, remove the staticToken above.

const form = document.querySelector('#upload-file');

if (form && form instanceof HTMLFormElement) {
	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		const form = new FormData(event.target);
		await superscribe.files.createOne(form);
	});
}
```

```html
<!-- index.html -->
<head></head>
<body>
	<form id="upload-file">
		<input type="text" name="title" />
		<input type="file" name="file" />
    	<button>Send</button>
	</form>
	<script src="/index.js" type="module"></script>
</body>
</html>
```

#### NodeJS usage

When uploading a file from a NodeJS environment, you'll have to override the headers to ensure the correct boundary is
set:

```js
import { Superscribe } from 'https://unpkg.com/@superscribe/sdk@latest/dist/sdk.esm.min.js';

const superscribe = new Superscribe('https://example.superscribe.app', {
	auth: {
		staticToken: 'STATIC_TOKEN', // If you want to use a static token, otherwise check below how you can use email and password.
	},
});

const form = new FormData();
form.append("file", fs.createReadStream("./to_upload.jpeg"));

await superscribe.files.createOne(form, {}, {
  requestOptions: {
    headers: {
      ...form.getHeaders()
    }
  }
);
```

### Importing a file

Example of [importing a file from a URL](/reference/files#import-a-file):

```js
await superscribe.files.import({
	url: 'http://www.example.com/example-image.jpg',
});
```

Example of importing file with custom data:

```js
await superscribe.files.import({
	url: 'http://www.example.com/example-image.jpg',
	data: {
		title: 'My Custom File',
	},
});
```

## Folders

```js
superscribe.folders;
```

Same methods as `superscribe.items("superscribe_folders")`.

## Permissions

```js
superscribe.permissions;
```

Same methods as `superscribe.items("superscribe_permissions")`.

## Presets

```js
superscribe.presets;
```

Same methods as `superscribe.items("superscribe_presets")`.

## Relations

```js
superscribe.relations;
```

Same methods as `superscribe.items("superscribe_relations")`.

## Revisions

```js
superscribe.revisions;
```

Same methods as `superscribe.items("superscribe_revisions")`.

## Roles

```js
superscribe.roles;
```

Same methods as `superscribe.items("superscribe_roles")`.

## Settings

```js
superscribe.settings;
```

Same methods as `superscribe.items("superscribe_settings")`.

## Server

### Ping the Server

```js
await superscribe.server.ping();
```

### Get Server/Project Info

```js
await superscribe.server.info();
```

## Users

```js
superscribe.users;
```

Same methods as `superscribe.items("superscribe_users")`, and:

### Invite a New User

```js
await superscribe.users.invites.send('admin@example.com', 'fe38136e-52f7-4622-8498-112b8a32a1e2');
```

The second parameter is the role of the user

### Accept a User Invite

```js
await superscribe.users.invites.accept('<accept-token>', 'n3w-p455w0rd');
```

The provided token is sent to the user's email

### Enable Two-Factor Authentication

```js
await superscribe.users.tfa.enable('my-password');
```

### Disable Two-Factor Authentication

```js
await superscribe.users.tfa.disable('691402');
```

### Get the Current User

```js
await superscribe.users.me.read();
```

Supports optional query:

```js
await superscribe.users.me.read({
	fields: ['last_access'],
});
```

### Update the Current Users

```js
await superscribe.users.me.update({ first_name: 'Admin' });
```

Supports optional query:

```js
await superscribe.users.me.update({ first_name: 'Admin' }, { fields: ['last_access'] });
```

## Utils

### Get a Random String

```js
await superscribe.utils.random.string();
```

Supports an optional `length` (defaults to 32):

```js
await superscribe.utils.random.string(50);
```

### Generate a Hash for a Given Value

```js
await superscribe.utils.hash.generate('My String');
```

### Verify if a Hash is Valid

```js
await superscribe.utils.hash.verify('My String', '$argon2i$v=19$m=4096,t=3,p=1$A5uogJh');
```

### Sort Items in a Collection

```js
await superscribe.utils.sort('articles', 15, 42);
```

This will move item `15` to the position of item `42`, and move everything in between one "slot" up.

### Revert to a Previous Revision

```js
await superscribe.utils.revert(451);
```

Note: The key passed is the primary key of the revision you'd like to apply.

---
