
import { defaultInput } from "./defaultInput.js";
import { scriptaverseSchema } from "./schema.js";

import { createLogger } from "./logger.js";
import { createSceneManager } from "./sceneManager.js";

export function createScriptaverse(context = {}) {

    let {
        verbose = true,
        name = 'scriptaverse',
    } = context;

    let log = createLogger({verbose, name});

    function parseInput() {

        let {
            input = defaultInput,
            schema = scriptaverseSchema,
        } = context;

        const ajv = new ajv2020();

        // validate input
        log.info('validating input');

        const valid = ajv.validate(schema, input);
        if (!valid) {
            log.fail(ajv.errors);
            return [];
        }

        log.info('validation succeeded');

        let {
            scenes = [],
        } = input;

        let visibleScenes = scenes.filter(el => !el.hide);

        log.info(`scenes found: ${visibleScenes.length}`);

        return visibleScenes;
    }

    context.scenes = parseInput();

    log.json(context.scenes);

    function renderScene() {

        let sceneManager = createSceneManager(context);

        window.addEventListener('resize', onWindowResize, false);
    
        function onWindowResize() {
            sceneManager.resize();
          }
    
        let render = function() {
            requestAnimationFrame(render);
            sceneManager.step();
        }

        render();
    }

    renderScene();
}
