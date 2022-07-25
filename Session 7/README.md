# Session 7

## 📖 Overview

Today's session marked the end of the content for the second project.

We started by implementing JWT into our endpoints in a logical manner.

We then took a deep dive into the world of web security and the history of the cat and mouse game between developers and bad actors.

We followed the footsteps of the pioneers of web development and discussed the logical steps they took that led to the introduction of concepts such as hashing, salting and peppering.

We then implementing hashing, salting and peppering into our project.

We then learned how to use jasmine to create unit tests for models with complex relationships and explained the steps needed to make a comprehensive unit test.

## ✍️ Quiz

- [Session 7 Quiz](https://forms.gle/MPut5rX4Coxj5C1HA)

## 📝 Notes

<br />

### **Data Migration**

<br />
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

<br />

### **Segmentation**

We discussed three main topics in this session.

> JWT

> Bcrypt

> Unit testing

We started with implementing jwt then moved to bcrypt then finally unit testing.

If you want to jump into a specific order where the code is only covering the content from the start up to that topic, please do the following.

1. Clone the project

```
    git clone https://github.com/HossamAbubakr/Udacity-Full-Stack-Classroom
```

2. Open a command line in the directory of your local copy
3. Do a **hard reset** to reset the project to your desired state

```
    git reset --hard commit-sha1
```

Using the following table for the specific commit sha1

| Topic        |                  Commit                  |
| ------------ | :--------------------------------------: |
| JWT          | 6ecfcd3f2e44575ebb5a7f6afe58089f62940cf9 |
| Bcrypt       | a12f01cc7ed0a1d74d435dc9c8df94643a2d64f9 |
| Unit Testing | 55392ee8725dda6610fe1442e95c63bbc6361e9c |

So for example if you want to jump to JWT and Bcrypt use:

```
    git reset --hard a12f01cc7ed0a1d74d435dc9c8df94643a2d64f9
```

<br />

If you are confused about what does this do exactly and what is the difference between --hard and --soft params, you can read more [here](https://git-scm.com/docs/git-reset).

## 🔗 Resources

### 🔐 Security

- [Cooking your passwords (Salting & Peppering)](https://www.gearbrain.com/password-security-hashing-salting-peppering-2647766220.html)
- [How does password encryption work?](https://www.okta.com/identity-101/password-encryption/)
- [What is password hashing?](https://www.educative.io/edpresso/what-is-hashing)
- [What is Base64 Encoding?](https://stackify.com/what-are-crud-operations/)
- [What is AES encryption?](https://cybernews.com/resources/what-is-aes-encryption/)
- [What is Bcrypt?](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/)

### 🔁 Unit Testing

- [Jasmine before all, after all, etc..](https://jasmine.github.io/api/4.1/global)
- [Jasmine before all VS before each](http://breazeal.com/blog/jasmineBefore.html)

## 🔗 Essentials

- [SQL aggregate functions](https://www.postgresqltutorial.com/postgresql-aggregate-functions/)
- [SQL rows to JSON](https://hashrocket.com/blog/posts/faster-json-generation-with-postgresql)
- [SQL unique constraints](https://www.techonthenet.com/postgresql/unique.php)
- [SQL delete cascade](https://kb.objectrocket.com/postgresql/how-to-use-the-postgresql-delete-cascade-1369)
