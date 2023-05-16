## Running a TypeScript file

## tsc

`tsc` is the TypeScript compiler. It takes TypeScript files (.ts) and compiles them to JavaScript files (.js).

### With tsc

Having installed TypeScript globally or locally, run the following command:

```bash
$ tsc <file-name>.ts && node <file-name>.js
```


### With ts-node

`ts-node` is a TypeScript execution engine and REPL for Node.js. It allows you to directly execute
TypeScript files (.ts) without compiling them first.

Having installed ts-node globally or locally, run the following command:

```bash
$ ts-node <file-name>.ts
```