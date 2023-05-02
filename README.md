## Introduction

Welcome to Superscribe!

Superscribe is a platform for automatic REST or GraphQL APIs on top of your database. It also comes with a full-featured admin application that you can use to manage your data, schema, metadata and permissions.

- **open-source under the GPL v3** Our committment to the community is that Superscribe will always be released under a permissive open-source license.
- **Automatic API** Use either REST or GraphQL to access and modify your data, with advanced permissions and customization capabilites.
- **Automagical Schema Inspection** Superscribe will evaluate your current database schema and automatically deduce types/api/relationships.
- **Multi-database support** Works with PostgreSQL, MySQL, SQLite, OracleDB, CockroachDB, MariaDB, and MS-SQL.
- **Django's got nothing on us** Superset comes with an instant, easily configurable admin application that be used to manage your data, permissions and even your database schema!

**[Learn more about Superscribe](https://superscribe.io)** • **[Documentation](https://docs.superscribe.io)**

Superscribe is a community fork of Superscribe at the 9.26 branch, prior to the change to the BSL license.

## Why a community fork?

With version 10, Superscribe changed it's license to a non-open source license. This community fork is intended to maintain and enhance the 9.X Superscribe branch with clear, open source license.

<br />

## Roadmap

Superscribe has a different mission and purpose from Superscribe, and this will inevitably drive a different development theory and approach. Much of Superscribe was designed to support the Superscribe Cloud offering.

Superscribe has the advantage of being intended for use as a 100% open source project, and as a result can simplify much of the code base.

As an example, Superscribe's preferred installation and use-case is via:

    npm install @superscribe

One of the first items on our roadmap is to support importing superscribe into your existing NodeJS project and adding it as an express (or other) route.

Given this direction, deploying superscribe via Docker images will probably not be supported in the short-term unless there's high community demand (and contributors!).

Another example is the ability to remove restrictions on the capabilities of the Script operation - since Superscribe is meant to be self-hosted via a simple package dependency, we'll most likely be exposing all NodeJS functionality to the Script Operation.

A top roadmap item is making migration between environments easier. The Superscribe team has done an amazing job with schema snapshots, but many things aren't captured in this - permissions, flows, etc... one of our top items is to enhance this tool to simplify the development and deployment process.

Stay tuned for more roadmap items!

## Feedback requested
This is just the beginning of the community fork of Superscribe. Currently, the intent is to fix bugs, simplfy the code base, and perform small quality of life improvements while developing a longer term strategy.

We'd love to hear your thoughts on the direction this project should take. We have lots of ideas and questions:

 - A new admin app based on Web Components that can be easily reused in any project?
 - Should the project continue to use Typescript internally?
 - How important is real-time? Should we think about websockets, or is this a marginal use case?
 - Should we continue to base the backend on Knex? What would it look like if we switched to Sequelize? Could we have a simpler and/or more capable query DSL? Could we simplify permissions to use Sequelize scopes? The Superscribe permissions model, while very capable, has some performance impacts. How can we address this?
 - Does it make sense to continue to support multiple databases, or should we take the Supabase approach and become Postgres-only? In many ways, the Superscribe project has been hamstrung by multiple database support. This has interfered with the ability to query json fields, amongst other things. How much demand is there for databases other than Postgres?