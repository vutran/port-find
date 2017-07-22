# port-find

> Retrieve active connections given a remote port

## Install

```
$ npm i -S port-find
```

or with Yarn:

```
$ yarn add port-find
```

## Usage

```
const portFind = require('port-find');

portFind(3000)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    });
```

## License

MIT © [Vu Tran](https://github.com/vutran)