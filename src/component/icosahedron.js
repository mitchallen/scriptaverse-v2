/*
 * File: icosahedron.js
 * Author: Mitch Allen
 * Reference:
 *  https://threejs.org/docs/#api/en/geometries/IcosahedronGeometry
 */

// 1. Define and export a icosahedron factory class
export class IcosahedronFactory {

    // 2. Define a static create method to return new icosahedrons
    static create(options = {}) {
  
      // 3. Setup default values or use arguments

      let {
        name =  "icosahedron", 
        color =  "#FF00FF",
        radius = 1,
        visible = true,
        // detail: Setting this to a value greater than 0 adds more vertices 
        // making it no longer an icosahedron. 
        // When detail is greater than 1, it's effectively a sphere.
        detail = 0,
        wireframe = true,
        translateX = 0.0,
        translateY = 0.0,
        translateZ = 0.0,
      } = options;

      // 4. Use ThreeJS to define a 3D icosahedron
      var geometry = new THREE.IcosahedronGeometry(radius, detail);
      var material = new THREE.MeshBasicMaterial({ 
        color: color,
        wireframe: wireframe 
      });
      let icosahedron = new THREE.Mesh(geometry, material);
  
      // 5. Use the name property to specify a type
      icosahedron.name = name;
      icosahedron.visible = visible;
  
      // 6. Using ThreeJS methods on the icosahedron, move it to a specific offset
      icosahedron.translateX(translateX);
      icosahedron.translateY(translateY);
      icosahedron.translateZ(translateZ);
  
      // 7. Return the new icosahedron
      return icosahedron;
    }
  }