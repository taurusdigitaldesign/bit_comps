## Installation

```Shell
npm install --save-dev @babel/plugin-syntax-dynamic-import
```

## Usage

you should config the .babelrc file

```JSON
"plugins": ["@babel/plugin-syntax-dynamic-import"]
```

## example

```JavaScript
const wasm = import("@bit/zxfed.linkfox.zx-encrypt");
wasm.then(wasm => {
  console.log(
      wasm.zx_encrypt('abc', key, iv);
  );
})
```