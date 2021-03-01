# apollo-federation-sample

Getting started with apollo-federation 🚀

## Installation

```
$ git clone https://github.com/shoNagai/apollo-federation-sample.git
$ cd apollo-federation-sample
$ yarn install
$ yarn federation:dev
```

## sample query

```TypeScript
query charactersWithBook {
  characters {
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

![playground](https://i.gyazo.com/afd082cbd502188ad8a287259fadeb35.gif)
