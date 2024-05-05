
export const config = {
    "scenes": [

        {
            "title": "Tetrahedron",
            "hide": false,
            "backgroundColor": "#000000",
            "teleport": [
                {
                    "name": "T1",
                    "position": { "x": 0.0, "y": -3.0, "z": -5.0 },
                    "rotation": { "x": 1.5707963268, "y": 0.0, "z": 0.0 },
                },
                {
                    "name": "T2",
                    "position": { "x": 0.0, "y": 3.0, "z": -5.0 },
                    "rotation": { "x": -1.5707963268, "y": 0.0, "z": 0.0 },
                },
                {
                    "name": "T3",
                    "position": { "x": 0.0, "y": 0.0, "z": -10.0 },
                    "rotation": { "x": 0.0, "y": 3.14159265359, "z": 0.0 },
                },
                {
                    "name": "T4",
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "name": "tetrahedron-centered",
                    "file": "tetrahedron-centered.glb",
                    "cid": "QmXWipJn3s97mkoEqH7ENAo3w7vzJVMuG2GYdHj311EA54",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "scale": { "x": 2.0, "y": 2.0, "z": 2.0 },
                        }
                    ]
                },
                {
                    "name": "tetrahedron-centered",
                    "file": "tetrahedron-centered.glb",
                    "cid": "QmXWipJn3s97mkoEqH7ENAo3w7vzJVMuG2GYdHj311EA54",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "scale": { "x": 1.0, "y": 1.0, "z": 1.0 },
                        }
                    ]
                },
                {
                    "name": "tetrahedron-corner",
                    "file": "tetrahedron-corner.glb",
                    "cid": "QmTvLsjriPDSb3hzRkiJaT4MsYSUF2y9AENABy6R9rnfgW",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "scale": { "x": 2.0, "y": 2.0, "z": 2.0 },
                        }
                    ]
                }
            ]
        },

        {
            "title": "hollow-candy-ball",
            "hide": false,
            "backgroundColor": "#000000",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmZGokh3tXaYR6Bp1kAqATUJUhA7kM2L1yPJ6QVLkZweYu",
                    "cidv1": "bafybeifcor222ntgvh4s7ogmzg7uw46gu6e54rimyk2lp2fc3efk2rv7py",
                    "name": "hollow-candy-ball",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 1.0, "y": 1.0, "z": 1.0 },
                        }
                    ]
                }
            ]
        },

        {
            "title": "candy-ball",
            "hide": false,
            "backgroundColor": "#000000",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmcMayXKpAC7do1kqdY61wWfd8wxKRFiA7QVS11UX9iA4Z",
                    "cidv1": "bafybeigqid43w4ybe7ubyyazqud7v7quueimqr6jfs6jgir2l4ypmuhtpi",
                    "name": "candy-ball",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 1.0, "y": 1.0, "z": 1.0 },
                        }
                    ]
                }
            ]
        },


        {
            "title": "maze-15x15x15-bw",
            "hide": false,
            "backgroundColor": "#444444",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmbwMqfCBrMzE2bfptxf6x6JAPqfUhj3Fz8VQsz7xn8xaz",
                    "cidv1": "bafybeigkbqxqfxmsyhjoitronhamchzq4kwse2mweo6cnu6lacf5vjf6w4",
                    "name": "Maze 15x15x15 Black and White",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 0.1, "y": 0.1, "z": 0.1 },
                        }
                    ]
                }
            ]
        },

        {
            "title": "maze-cubes-3x6x9",
            "hide": false,
            "backgroundColor": "#000000",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmVj3DVszFypdpDbsjJgQ4apUyCoYAUjYnekrQbN2bUB2n",
                    "cidv1": "bafybeidnxyeol52pxfoyf2mcjfrd2j55uu6p7zvuf432tfy2fnvvnfjva4",
                    "name": "Maze Cube 3x6x9 Red",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 0.1, "y": 0.1, "z": 0.1 },
                        }
                    ]
                },
                {
                    "cid": "QmawJWLmxD2rHTE8s6TC5XqFWj3WH8nx9wy5YjP5LkpxkS",
                    "cidv1": "bafybeif3fs5f5j5blulfyumi4tfllin27yvi4xpgh42botn4gananmrwpm",
                    "name": "Maze Cube 3x6x9 Neon Pink",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": -2.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 0.1, "y": 0.1, "z": 0.1 },
                        }
                    ]
                },
                {
                    "cid": "QmXZ6i5NuLhXDMG8CXjJzoTKBo38UaoRfSCzki7YEpdr3d",
                    "cidv1": "bafybeiei5gglys6xc4mwsuwvqb3alu7vjajr4dgj5uqciyji3ljfkxve5q",
                    "name": "Maze Cube 3x6x9 White",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 2.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 0.1, "y": 0.1, "z": 0.1 },
                        }
                    ]
                },
                {
                    "cid": "QmU8XoaJTXdY1zKT721hBjKfgs6zrYh3bnYfQL252pFZhH",
                    "cidv1": "bafybeicwbnl7c65w5jkdmfkatfb4o7usrlc4l4fg6g7ycgikeazgao2d4a",
                    "name": "Maze Cube 3x6x9 Cyan",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 2.0 },
                            "scale": { "x": 0.1, "y": 0.1, "z": 0.1 },
                        }
                    ]
                },
                {
                    "cid": "QmYXLeNizPiddJxd8G8b5gCzBP7Bfcu9yLYxLSbQzJUFYB",
                    "cidv1": "bafybeiexkhks7g7yyrp2tqa6jo7pzp7secy3m2ucxb2d4febpjpvbufpwa",
                    "name": "Maze Cube 3x6x9 Neon Green",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": -2.0 },
                            "scale": { "x": 0.1, "y": 0.1, "z": 0.1 },
                        }
                    ]
                }
            ]
        },


        {
            "title": "candy-tangle",
            "hide": false,
            "backgroundColor": "#000000",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmSJutDSgtvjvgd4FvVLBHgUFmpGz6LRUx7ogdPEcAMM8Q",
                    "cidv1": "bafybeib27s7ghpwolkmxjrxfik4b6zp4aj4ymph3d6hdrykd5lmh3kqiju",
                    "name": "Candy Tangle",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 0.75, "y": 0.75, "z": 0.75 },
                        }
                    ]
                }
            ]
        },
        {
            "title": "maze-wireframe-30x30x30-neon-green",
            "hide": false,
            "backgroundColor": "#000000",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "Qmdrqj17UoyxritJmJdzpcR8Uwep3iiB631D1QtvHTcyTb",
                    "cidv1": "bafybeihgtmxpdrha4is2jtsznfw5kickoyhif4ong7e3zb7v7zicnccqxy",
                    "name": "Maze Wire Frame 30x30x30 Neon Green",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 0.05, "y": 0.05, "z": 0.05 },
                        }
                    ]
                }
            ]
        },
        {
            "title": "maze-wireframe-11x11-11-neon-green.",
            "hide": false,
            "backgroundColor": "#000000",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmR9CHuBqoHf93mPFs7dg2j9Ea9DG3bwuTNyUTQpjKQgMs",
                    "cidv1": "bafybeibjupgtxizj7hcj4w3v25lnfyxmcto5fxyuq6p2ebgnnm4gdu6nny",
                    "name": "Maze Wire Frame 11x11x11 Neon Green",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 0.1, "y": 0.1, "z": 0.1 },
                        }
                    ]
                }
            ]
        },
        {
            "title": "maze-cube-9x9x9-neon-fat",
            "hide": false,
            "backgroundColor": "#000000",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmV7zKSp1GoMAqYkKt9KWu17jHisoH2bi1qFdk6FFnGmyB",
                    "cidv1": "bafybeideynxcmex4y5hvpvdfevzotqmrglhn7b67pq2jxyv4smsa7aqi2i",
                    "name": "Maze Cube 9x9x9 Neon Fat",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 0.4, "y": 0.4, "z": 0.4 },
                        }
                    ]
                }
            ]
        },
        {
            "title": "maze-cube-15x15x15-neon",
            "hide": false,
            "backgroundColor": "#444444",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmZM7En5gTiVXuzrMpF9HaUufBnMMLGP4iBt6hnYVYMghc",
                    "cidv1": "bafybeifdr2gwwyjxzipube6cirra4k3z6at3wbzuhfnop6huqoqu5qrxp4",
                    "name": "Maze Cube 15x15x15 Neon Fat",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 0.10, "y": 0.10, "z": 0.10 }
                        }
                    ]
                }
            ]
        },
        {
            "title": "maze-cube-9x9x9-neon",
            "hide": false,
            "backgroundColor": "#000000",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmRd2m9ERBucNGhaVDTHdcXFYTFaBB7PzcjSyKnwThUmQT",
                    "cidv1": "bafybeibqyve5idk6enqddmiagal5r4cjliiclcy2qrirxxbvuxcddrywpa",
                    "name": "Maze Cube 9x9x9 Neon",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 0.10, "y": 0.10, "z": 0.10 }
                        }
                    ]
                }
            ]
        },
        {
            "title": "maze-cube-17x17x17-beta",
            "hide": false,
            "backgroundColor": "#AAAAAA",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": null,
                    "cidv1": null,
                    "arid": "nzSBB2NTPu4GSQrvaJtkk5cxCRqdl2rGAS86e3FHUOc",
                    "name": "Maze Cube 17x17x17 Beta",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                            "scale": { "x": 0.10, "y": 0.10, "z": 0.10 }
                        }
                    ]
                }
            ]
        },
        {
            "title": "clone-iris",
            "hide": false,
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmSLMS7qFii3923RweBLeh9gZrqCnDizQYsZduYx1Xu7HR",
                    "cidv1": "bafybeib3lm3mzfn6wdhx5r76edpdigfaxo6ifsnw5elywxnzyn22zd4d2a",
                    "name": "Clone Iris",
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
        {
            "title": "thicker-ball",
            "hide": false,
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -3.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": -1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": -0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.5, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "Qma4XWr9pzjMXgHEACfheDtBRL7jwdSwumaJWKEyHjDCwq",
                    "cidv1": "bafybeifoflinl6wikdbaubwp254u3kuhjvxatutv2tw3nsnzomn3aj4l7a",
                    "name": "Thicker Ball",
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
        {
            "title": "marble",
            "hide": false,
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
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
        {
            "title": "marble satellite",
            "hide": false,
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmY49HSawcsytkvNMN1X3FcSA6MpsCaXWvrEcKj1WLJjiE",
                    "cidv1": "bafybeieqljhbtguwleoppdjpdyr7t3tr2hd47aqm4nyvkzfrqidcggy6g4",
                    "name": "Partial Satellite",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "scale": { "x": 1.0, "y": 1.0, "z": 1.0 }
                        }
                    ]

                },
                {
                    "cid": "QmUoZ3dZYBgcr8nfirkVcttUCpgJzuKTLMokHhfcg6nEwY",
                    "cidv1": "bafybeidabjtft5uqtqesmrmxlzqxiqoeyg6ztmxkrelppo4dvrddkf7ku4",
                    "name": "Marble Alpha",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "scale": { "x": 0.5, "y": 0.5, "z": 0.5 }
                        }
                    ]
                }
            ]
        },
        {
            "title": "Maze 3x3x3 alpha x 2",
            "hide": false,
            "backgroundColor": "#AAAAAA",
            "teleport": [
                {
                    "name": "T1",
                    "position": { "x": 0.0, "y": -3.0, "z": -5.0 },
                    "rotation": { "x": 1.5707963268, "y": 0.0, "z": 0.0 },
                },
                {
                    "name": "T2",
                    "position": { "x": 0.0, "y": 3.0, "z": -5.0 },
                    "rotation": { "x": -1.5707963268, "y": 0.0, "z": 0.0 },
                },
                {
                    "name": "T3",
                    "position": { "x": 0.0, "y": 0.0, "z": -10.0 },
                    "rotation": { "x": 0.0, "y": 3.14159265359, "z": 0.0 },
                },
                {
                    "name": "T4",
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "Qmck1wi5hCErdreYLzjYKn6SCuRtHX7Gv4AFGXJe3qRogo",
                    "name": "Maze Cube 3x3x3 Alpha",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "scale": { "x": 0.4, "y": 0.4, "z": 0.4 },
                        }
                    ]

                },
                {
                    "cid": "Qmck1wi5hCErdreYLzjYKn6SCuRtHX7Gv4AFGXJe3qRogo",
                    "cidv1": "bafybeigv776exuvpn75ujtrt6mo6ldhls7gnmzlmqlqdg2dixqxtvdyfhq",
                    "name": "Maze Cube 3x3x3 Alpha",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "position": { "x": 2.0, "y": 2.0, "z": -2.0 },
                            "scale": { "x": 0.2, "y": 0.2, "z": 0.2 },
                            "rotation": { "x": 0.785398, "y": 0.785398, "z": 0.785398 },
                        }
                    ]
                }

            ]
        },
        {
            "title": "gray beta maze cube",
            "hide": false,
            "backgroundColor": "#AAAAAA",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmP7HVFegqa6U1YVEHXURU7UR7ze8MwZnuHrwTv45dp9zo",
                    "cidv1": "bafybeialn4sbzbeyqmvm2mft3recyk4uzkaejpovgvzucznbyjoft75jsa",
                    "name": "Gray Beta",
                    "mimeType": "image/png",
                    "instances": [
                        {
                            "scale": { "x": 12.0, "y": 3.375, "z": 0.0 },
                            "position": { "x": 0.0, "y": 0.0, "z": -2.0 }
                        }
                    ]
                },
                {
                    "cid": "Qmck1wi5hCErdreYLzjYKn6SCuRtHX7Gv4AFGXJe3qRogo",
                    "cidv1": "bafybeigv776exuvpn75ujtrt6mo6ldhls7gnmzlmqlqdg2dixqxtvdyfhq",
                    "name": "Maze Cube 3x3x3 Alpha",
                    "mimeType": "model/gltf-binary",
                    "instances": [
                        {
                            "scale": { "x": 0.5, "y": 0.5, "z": 0.5 }
                        }
                    ]
                }
            ]
        },
        {
            "title": "fire reactor",
            "hide": false,
            "backgroundColor": "#000000",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmWkGjnZoVRhLs18MHo7DcA1qhPnPPCJiHWgA66yhn3JWD",
                    "cidv1": "bafybeid45klzhjgpz3r76owv7pi5jc3qwatqlmwqi3lbomy6lt2jox5mui",
                    "name": "Fire Reactor",
                    "mimeType": "image/png",
                    "instances": [
                        {
                            "scale": { "x": 8.0, "y": 8.0, "z": 2.0 },
                            "position": { "x": 0.0, "y": 0.0, "z": -2.0 }
                        }
                    ]
                }
            ]
        },
        {
            "title": "gridiculous",
            "hide": false,
            "backgroundColor": "#000000",
            "teleport": [
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -1.0 },
                },
                {
                    "position": { "x": 0.0, "y": 1.0, "z": -2.0 },
                },
                {
                    "position": { "x": 0.0, "y": -1.0, "z": -3.0 },
                },
                {
                    "position": { "x": 1.0, "y": 0.0, "z": -4.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": -5.0 },
                },
                {
                    "position": { "x": 0.0, "y": 0.0, "z": 0.0 },
                }
            ],
            "nodes": [
                {
                    "cid": "QmV9MHjzYUn4bSuJtAkXLs4VTA6YNNV7eKCRbE5V5wbjAY",
                    "cidv1": "bafybeidfds4p5vykmepoa3l66gyrlc3qagrbuetmxssj35pfwuwyveonie",
                    "name": "Gridiculous",
                    "mimeType": "image/png",
                    "instances": [
                        {
                            "scale": { "x": 8.0, "y": 8.0, "z": 0.0 },
                            "position": { "x": 0.0, "y": 0.0, "z": -2.0 }
                        }
                    ]
                }
            ]
        },
    ]
}