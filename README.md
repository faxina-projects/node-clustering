# NODE CLUSTERING

- POC to test node clustering
- Description: using node clustering to better performance when execute CPU-intensive task
- References:
  - https://blog.bitsrc.io/nodejs-performance-optimization-with-clustering-b52915054cc2
- Node (Express)

- [NODE-CLUSTERING](#node-clustering)
  - [Requisitos](#requisitos)
  - [Instalação](#instalação)
  - [Acesso](#acesso)
    - [Aplicação](#aplicação)

## Requisitos

- [Node]
- [Yarn]

## Instalação

- Clone this repository

```bash
$ git clone https://github.com/faxina-projects/node-clustering.git
```

- Go to project folder

```bash
$ cd node-clustering
```

- Start with clustering

```bash
$ yarn clustering
```

- Start with no clustering

```bash
$ yarn no-clustering
```

## Access

### Applications

- clustering: http://localhost:3001
- no-clustering: http://localhost:3000

## Load Tests

- Test with clustering

```bash
$ yarn test-clustering
```

- Test with no clustering

```bash
$ yarn test-no-clustering
```
