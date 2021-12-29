
export const scriptaverseSchema = {
    "type": "object",
    "properties": {
        "scenes": { "$ref": "#/$defs/scenes" },
    },
    "additionalProperties": false,
    "$defs": {
        "scenes": {
            "type": "array",
            "minItems": 0,
            "items": {
                "type": "object",
                "properties": {
                    "hide": { "type": ["boolean", "null"] },
                    "title": { "type": ["string", "null"] },
                    "backgroundColor": { "type": ["string", "null"] },
                    "teleport": { "$ref": "#/$defs/teleport" },
                    "nodes": { "$ref": "#/$defs/nodes" }
                },
                "additionalProperties": false
            }
        },
        "mimeType": {
            "type": "string",
            "enum": [
                "x-node/group",
                "image/png",
                "model/gltf-binary"
            ]
        },
        "vector3": {
            "type": "object",
            "properties": {
                "x": { "type": "number" },
                "y": { "type": "number" },
                "z": { "type": "number" }
            },
            required: ["x", "y", "z"],
            "additionalProperties": false
        },
        "instances": {
            "type": "array",
            "minItems": 0,
            "items": {
                "type": "object",
                "properties": {
                    "name": { "type": ["string", "null"] },
                    "parent": { "type": ["string", "null"] },
                    "scale": { "$ref": "#/$defs/vector3" },
                    "position": { "$ref": "#/$defs/vector3" },
                },
                "additionalProperties": false
            }
        },
        "teleport": {
            "type": "array",
            "minItems": 0,
            "items": {
                "type": "object",
                "properties": {
                    "name": { "type": ["string", "null"] },
                    "position": { "$ref": "#/$defs/vector3" },
                    "rotation": { "$ref": "#/$defs/vector3" },
                },
                "additionalProperties": false
            }
        },
        "nodes": {
            "type": "array",
            "minItems": 0,
            "items": {
                "type": "object",
                "properties": {
                    "cid": { "type": "string" },
                    "mimeType": { "$ref": "#/$defs/mimeType" },
                    "name": { "type": ["string", "null"] },
                    "instances": { "$ref": "#/$defs/instances" },
                },
                required: ["cid", "mimeType"],
                "additionalProperties": false
            }
        }
    }
};