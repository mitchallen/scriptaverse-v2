# scriptaverse-v2
--

# Usage

```sh
make
```

# Dev Container

To use inside a VS Code dev container:

1. Start docker

On a Mac you can start docker with this command:

```sh
open -a docker
```

2. Start VS Code in your project file (**code .**)
3. Click the **Reopen in Container** button when it appears
4. Open the Terminal window inside VS Code

# Example

* https://scriptaverse.com

# Cloning:

## Google Analytics

Here is how to setup Google Analytics if your site is deployed by a static host CI, like Netlify:

1. Create a new property for your site in Google Analytics
2. Create a variable called **VAR_GTAG** with the value of your tag (**G-...**) 
3. Add this as a build step before your site is deployed:
```sh
sed -i "s/VAR_GTAG/${VAR_GTAG}/g" src/index.html
```

Or you can take the whole block out of the header in src/index.html

## How to use your own 3D objects

1. Upload a GLB or PNG file to IPFS (using services like Pinata)
2. Edit src/component/config.js
3. Change or add a **scenes** record for your new object
4. For the scene.nodes section add an entry 
5. Set the CID to the CID of the object on IPFS
6. On a Mac you can test it locally with: `npm run mac:server` (assumes npm is installed)

Example **scenes** entry in **config.js**:

```js
  {
      "title": "marble",
      "hide": false,
      "teleport": [
          {
              "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
          },
          {
              "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
          }
      ],
      "nodes": [
          {
              "cid": "QmUoZ3dZYBgcr8nfirkVcttUCpgJzuKTLMokHhfcg6nEwY",
              "name": "Marble Alpha",
              "mimeType": "model/gltf-binary",
              "instances": [
                  {
                      "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                      "scale": { "x": 0.5, "y": 0.5, "z": 0.5 }
                  }
              ] 
          }
      ]
  },
```

## package.json settings

```js
  "main": "src/index.html",
  "homepage": ".",
```

## Material Design

* https://google.github.io/material-design-icons/
* https://fonts.google.com/icons?selected=Material+Icons
* https://materialdesignicons.com/icon/google-cardboard - original Google Cardboard image
