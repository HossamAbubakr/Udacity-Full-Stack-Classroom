# Session 6

## 📖 Overview

In today's session, we learned the essentials of both handlers and models.

We dove deep into some critical and important SQL knowledge.

We moved further into realizing our vision of applying all the project requirements.

We created models for our tables that retrieved the data we want in a way that made sense.

We also created handlers to regulate outside communication with our models in a cohesive way.

We used the correct methods to connect our handlers with our methods and allowed logical communication with our server.

We finally learned about JWT and tokens in a visual way that represented a user's journey through our website from authentication to authorization.

## ✍️ Quiz

- [Session 6 Quiz](https://forms.gle/C7GuTRAKbLyx1ygA7)

## 📝 Notes

#### Data Migration

A data migration file is included with the project in:

```
/data_migration/initialization.sql
```

That includes several entries that you can use to experiment with the project.

Please run the following command after running the schema migrations

```
psql -U USER -d DB -a -f  PATH
```

And replace the following keywords:

**USER** with your postgreSQL user ex: **postgres**

**DB** with your database name ex: **udacity_hub**

**PATH** with your data migration file path ex:
**C:\Udacit-Hub\data_migrations\initialization.sql**

Or **cd** into the directory of the script and then just using the name of the script.

So the end result is something like this:

```
psql -U postgres -d udacity_hub -a -f initialization.sql
```

## 🔗 Resources

- [What are CRUD operations?](https://stackify.com/what-are-crud-operations/)
- [Anatomy of a JWT](https://www.digitalocean.com/community/tutorials/the-anatomy-of-a-json-web-token)
- [Why do we use JWTs?](https://www.educative.io/edpresso/why-should-you-use-jwts)
- [If you can decode JWT, how are they secure?](https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure)

## 🔗 Essentials

- [SQL Joins](https://learnsql.com/blog/learning-sql-joins-using-real-life-situations/)
- [SQL table alias](https://www.codeproject.com/Articles/1279825/How-to-Make-a-Join-Easier-to-Read-using-Table-Alia)
- [SQL column alias](https://www.ibm.com/docs/en/informix-servers/14.10?topic=clause-declaring-column-alias)
