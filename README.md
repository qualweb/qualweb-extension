# qualweb-extension
## How to install

```shell
  $ git clone https://github.com/qualweb/qualweb-extension.git
```

## How to run

In the extension folder do:

```shell
  $ npm install
```

```shell
  $ npm run build
```
Open chrome or chromium with:

```shell
  $ pathToChrome --remote-debugging-port=9222
```
(More info: https://www.chromium.org/developers/how-tos/run-chromium-with-flags)

In the browser go to <chrome://extensions/> and enable developer mode in the top right corner switch.
To add the extension press Load Unpacked in the top left corner and select the dist folder.
Only the ACT,BP and HTML modules are available.

-mudar tipo de letra e tamanho nos filtros
-diminuir border radius em tudo
mudar margin da column dos filters
mudar em para rem
column-1 -background-color: #303030;

