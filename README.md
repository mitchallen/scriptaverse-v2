# scriptaverse-v2
--

# Example

* https://scriptaverse.com

# Cloning:

## Files

If you clone this site, remove this file:

* src/.well-known/brave-rewards-verification.txt

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
