# qualweb-extension
## How to install

```shell
  $ git clone repUrl
```

## How to run

In the extension folder do:

```shell
  $ npm install
```

```shell
  $ npm run build
```
Open chrome or chromium with:(https://www.chromium.org/developers/how-tos/run-chromium-with-flags)

```shell
  $ pathToChrome --remote-debugging-port=9222
```
In the browser go to https:/chrome://extensions/ and enable developer mode in the top right corner switch.
To add the extension press Load Unpacked in the top left corner and select the dist folder.
Only the ACT and BP modules are available.
