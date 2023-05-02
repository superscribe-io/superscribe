# Frequently Asked Questions

>

## Is it possible to update the admin user password via CLI?

You can do this with the following command:

```sh
npx superscribe users passwd --email admin@example.com --password newpasswordhere
```

## Why isn't Superscribe properly saving Chinese characters or emoji?

Please ensure that the encoding for your database, tables, and fields are set to `utf8mb4`.
