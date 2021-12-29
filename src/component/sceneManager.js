
import { createLogger } from "./logger.js";

import { createButtonXR } from './buttonXR.js';

import { createZeroBasedCounter } from './counter.js';

import {
    creatControllerXR,
    CONTROLLER_PROFILE,
    OCULUS_GO,
    OCULUS_QUEST
} from './controllerXR.js';

// mport the icosahedron class factory
import { IcosahedronFactory } from './icosahedron.js';

const ROOT_NAME = 'root';

export function createSceneManager(context = {}) {

    let log = createLogger(context);

    let isInXR = false;

    let teleportMap = [];
    let teleportCounter = createZeroBasedCounter({ limit: 0 });


    // Setup default values or use context
    let {
        clear = "#000000",
        scenes = [],
        // fov — Camera frustum vertical field of view
        fov = 75,
        // aspect — Camera frustum aspect ratio
        aspectRatio = window.innerWidth / window.innerHeight,
        near = 0.1,  // near — Camera frustum near plane
        far = 1000, // far — Camera frustum far plane.
    } = context;

    // Setup a ThreeJS renderer to render the scene
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(clear);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // [VR] Enable WebXR support
    renderer.xr.enabled = true;

    document.body.appendChild(renderer.domElement);
    document.body.appendChild(createButtonXR(renderer, context));

    // Create a ThreeJS camera
    let camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);

    context.onSessionStarted = function () {
        log.info('### VR SESSION STARTED');
        isInXR = true;
    };

    context.onSessionEnded = function () {
        log.info('--- VR SESSION ENDED');
        isInXR = false;
    };

    // Create a new ThreeJS scene
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(clear);

    const dolly = new THREE.Group();
    dolly.name = 'dolly';
    dolly.add(camera);

    // XR controls
    let xrCtrl = creatControllerXR();

    xrCtrl.connect({
        xr: renderer.xr,
    });

    const light = new THREE.SpotLight(0xffa95c, 4);
    light.position.set(-100, 100, 100);
    light.castShadow = true;
    light.shadow.bias = -0.0001;
    light.shadow.mapSize.width = 1024 * 4;
    light.shadow.mapSize.height = 1024 * 4;
    scene.add(light);

    let hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    scene.add(hemiLight);

    const LOAD_INDICATOR = 'load_indicator';
    const ERROR_INDICATOR = 'error_indicator';

    var icosahedronOptions = [
        { name: LOAD_INDICATOR, color: "#39FF14", radius: 0.5, wireframe: true },
        { name: ERROR_INDICATOR, visible: false, color: "#FF0000", radius: 0.5, wireframe: true },
    ];

    icosahedronOptions.forEach(options => scene.add(IcosahedronFactory.create(options)));

    let busy = false;

    let sceneCounter = createZeroBasedCounter( { limit: scenes.length });

    function loadNextScene( random = false ) {

        if (busy) return;

        busy = true;

        dolly.position.set( 0.0, 0.0, 0.0 );

        let indicator = scene.getObjectByName(LOAD_INDICATOR);

        if (indicator) {
            indicator.visible = true;
        }

        let doomed = scene.getObjectByName(ROOT_NAME);
        if (doomed) {
            scene.remove(doomed);
        }

        if (scenes.length === 0) {
            log.warn('No scenes found');
            let errorIndicator = scene.getObjectByName(ERROR_INDICATOR);
            if (errorIndicator) {
                errorIndicator.visible = true;
                indicator.visible = false;
            }
            return;
        }

        let pickOne = (list) => list[Math.floor(Math.random() * list.length)];

        let currentScene = random ? pickOne(scenes) : scenes[sceneCounter.increment()];

        // See: https://luke.lol/ipfs.php
        // const IPFS_GATEWAY = 'https://cloudflare-ipfs.com/ipfs/'; // sometime fails 
        // const IPFS_GATEWAY = 'https://ipfs.io/ipfs/';
        const IPFS_GATEWAY = 'https://ipfs.infura.io/ipfs/';

        const ipfsPath = (hash) => `${IPFS_GATEWAY}${hash}`;

        // Teleport

        teleportMap = currentScene.teleport ? currentScene.teleport : [];

        teleportCounter = createZeroBasedCounter({ limit: teleportMap.length });

        log.info("### TELEPORT MAP")
        log.json(teleportMap);

        // Nodes

        function getNodes() {
            let nodes = currentScene.nodes;

            let list = nodes.map(function (el) {

                let {
                    cid,
                    mimeType,
                } = el;

                let filepath = cid ? ipfsPath(el.cid) : undefined;
                return {
                    ...el,
                    filepath,
                }
            });

            return list;
        }

        let rootNode = new THREE.Group();
        rootNode.name = ROOT_NAME;

        scene.add(rootNode);
        scene.add(dolly);

        let nodeList = getNodes();

        for (let i = 0; i < nodeList.length; i++) {

            let {
                filepath,
                mimeType,
                instances,
                // position = { x: 0, y: 0, z: 0 },
                // scale = { x: 1, y: 1, z: 1 },
            } = nodeList[i];

            // log.log(mimeType, filepath);

            if (mimeType === 'x-node/group') {

                for (let i = 0; i < instances.length; i++) {
                    let {
                        name = 'node',  // random ?
                        position = { x: 0, y: 0, z: 0 },
                        scale = { x: 1, y: 1, z: 1 },
                        parent = undefined,
                    } = instances[i];

                    if (name === ROOT_NAME) {
                        rootNode.scale.set(scale.x, scale.y, scale.z);
                        rootNode.position.set(position.x, position.y, position.z);
                    } else {
                        // add a new node, also checking its parent
                        let childNode = new THREE.Group();
                        childNode.name = name;
                        childNode.scale.set(scale.x, scale.y, scale.z);
                        childNode.position.set(position.x, position.y, position.z);
                        // log.log(`${name} group has a parent: ${parent}`);
                        if (parent) {
                            // find parent
                            let pNode = scene.getObjectByName(parent);
                            if (pNode) {
                                // log.log(`Adding ${name} to: ${parent}`);
                                pNode.add(childNode);
                            } else {
                                // log.log(`Could not find parent: ${parent} for: ${name}`);
                            }
                        } else {
                            rootNode.add(childNode);
                        }
                    }
                }

            }

            if (mimeType === 'image/png') {
                let loader = new THREE.TextureLoader();

                //allow cross origin loading
                loader.crossOrigin = '';

                loader.load(
                    // the first argument is the relative or absolute path of the file
                    // './models/snowflake.png',
                    filepath,
                    // the second argument is an on done call back
                    function (map) {

                        const material = new THREE.SpriteMaterial({ map: map });
                        const sprite = new THREE.Sprite(material);
                        sprite.visible = false;

                        for (let i = 0; i < instances.length; i++) {
                            let {
                                name = "imageNode",
                                position = { x: 0, y: 0, z: 0 },
                                scale = { x: 1, y: 1, z: 1 },
                                parent = undefined,
                            } = instances[i];
                            let clone = sprite.clone();
                            clone.name = name;
                            clone.scale.set(scale.x, scale.y, 1);
                            clone.position.set(position.x, position.y, position.z);
                            clone.visible = true;
                            if (parent) {
                                // find parent
                                let pNode = scene.getObjectByName(parent);
                                if (pNode) {
                                    pNode.add(clone);
                                }
                            } else {
                                rootNode.add(clone);
                            }
                        }

                        if (indicator) {
                            indicator.visible = false;
                        }
                        busy = false; // turn off busy flag
                    }

                );
            }

            if (mimeType === 'model/gltf-binary') {
                // GLB files
                let loader = new THREE.GLTFLoader();
                loader.load(filepath, (gltf) => {
                    let model = gltf.scene;
                    model.visible = false;

                    for (let i = 0; i < instances.length; i++) {
                        let {
                            name = "glbNode",
                            position = { x: 0, y: 0, z: 0 },
                            scale = { x: 1, y: 1, z: 1 },
                            parent = undefined,
                        } = instances[i];
                        let clone = model.clone();
                        clone.name = name;
                        clone.scale.set(scale.x, scale.y, scale.z);
                        clone.position.set(position.x, position.y, position.z);
                        clone.visible = true; // TODO - get from JSON def
                        // log.log(`PARENT: ${parent}`);
                        if (parent) {
                            // find parent
                            let pNode = scene.getObjectByName(parent);
                            if (pNode) {
                                // log.log(`GLB: ${clone.name}  ${parent}`);
                                pNode.add(clone);
                            } else {
                                log.warn(`Could not find parent: ${parent}`);
                            }
                        } else {
                            // log.log(`GLB: ${clone.name} [root]`);
                            rootNode.add(clone);
                        }
                    }

                    // hide indicator once model loaded
                    if (indicator) {
                        indicator.visible = false;
                    }
                    busy = false; // turn off busy flag
                });
            }

        }

    }

    loadNextScene();

    document.getElementById('btnRandom').addEventListener('click', function () {
        loadNextScene( true );
    });

    document.getElementById('btnNext').addEventListener('click', function () {
        loadNextScene( false );
    });

    function teleport() {
        log.info("### TELEPORTING! ... ###")
        // teleport();
        let target = teleportMap[teleportCounter.value].position;
        if( target ) {
            dolly.position.set( target.x, target.y, target.z );
        }
        let dRot = teleportMap[teleportCounter.value].rotation;
        if( dRot ) {
            dolly.rotation.set( dRot.x, dRot.y, dRot.z );
        } else {
            // set default rotation to 0,0,0 when not specified
            dolly.rotation.set( 0.0, 0.0, 0.0 );   
        }
        teleportCounter.increment();
    }

    document.getElementById('btnTeleport').addEventListener('click', function () {
        teleport();
    });

    let pressedNextScene = false;
    let pressedTeleport = false;

    // Define a scene with methods to return
    var modelScene = {

        // Define a method on the scene to handle browser window resizing
        resize: function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        },

        // 12. Define a method to be called when the scene is rendered
        step: function () {

            let controller = xrCtrl.getState();

            function onNextScene(btnPressed) {
                if (btnPressed) {
                    if (!pressedNextScene) {
                        pressedNextScene = true;
                        loadNextScene( false );
                    }
                } else {
                    pressedNextScene = false;
                }
            }

            function onTeleport(btnPressed) {
                if (btnPressed) {
                    // log.info("### ON TELEPORT ###");
                    if (!pressedTeleport) {
                        pressedTeleport = true;
                        teleport();
                    }
                } else {
                    pressedTeleport = false;
                }
            }

            if (controller.profile === CONTROLLER_PROFILE.OCULUS_TOUCH) {
                onNextScene(controller.right.pressed[OCULUS_QUEST.INDEX_TRIGGER]);
                onTeleport(controller.left.pressed[OCULUS_QUEST.INDEX_TRIGGER]);
            }


            if (controller.profile === CONTROLLER_PROFILE.OCULUS_GO) {
                onNextScene(
                    // button in emulator
                    controller.left.pressed[OCULUS_GO.TOUCHPAD_CLICK]
                    || controller.right.pressed[OCULUS_GO.TOUCHPAD_CLICK]
                );
                onTeleport(
                    controller.left.pressed[OCULUS_GO.INDEX_TRIGGER]
                    || controller.right.pressed[OCULUS_GO.INDEX_TRIGGER]
                );
            }

            scene.traverse(function (node) {

                if (node.name === ROOT_NAME) {
                    if (isInXR) {
                        node.position.set(0, 1.6, -5);
                    } else {
                        node.position.set(0, 0, -5);
                    }
                }

                // if( node.name === 'dolly') {
                //     // node.position.z += 0.01;
                //     node.rotation.y += 0.01;
                // }

                if ((node.name === LOAD_INDICATOR || node.name === ERROR_INDICATOR) && node.visible) {
                    let speedX = 0.1;
                    let speedY = 0.2;
                    node.rotation.x += speedX;
                    node.rotation.y += speedY;
                }
                if (node.name === ROOT_NAME) {
                    let speedX = 0.001;
                    let speedY = 0.002;
                    node.rotation.x += speedX;
                    node.rotation.y += speedY;

                    // model stuff
                    node.castShadow = true;
                    node.receiveShadow = true;
                    // if(node.material.map) node.material.map.anisotropy = 16;
                }
            });

            // model stuff
            renderer.shadowMap.enabled = true;

            renderer.render(scene, camera);
        },

        animate: function () {
            renderer.setAnimationLoop(this.step);
        }
    };

    // Return the scene
    return modelScene;
}