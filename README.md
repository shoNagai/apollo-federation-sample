# apollo-federation-sample

Getting started with GraphQL on apollo-server-micro 🚀

## Installation

```
$ git clone https://github.com/shoNagai/apollo-federation-sample.git
$ cd apollo-federation-sample
$ yarn install
$ yarn federation:dev
```

## sample query

```TypeScript
query usersWithBook {
  users {
    id
    name
    book {
      id
      title
      author
    }
  }
}

```

![playground](https://i.gyazo.com/439dc4cf1ac00573c1aa64b7d160de57.gif)
