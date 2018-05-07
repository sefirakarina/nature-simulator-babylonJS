function createMat(scene) {
	var mat = new BABYLON.StandardMaterial("material", scene);
	//diffuse: Basic color or texture --> under light
	//specular: Highlight --> Under light
	//emissive: color or texture as if self lit
	//ambient: color or texture lit by enviromental background lighting
	//scene.ambientColor: new BABYLON.Color3(1,1,1);
	
	mat.diffuseColor = new BABYLON.Color3(1,0,0) ;// color RGB
	mat.specularColor = new BABYLON.Color3(0,1,0);
	mat.specularPower = 25

	mat.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
	// Transparency
	mat.alpha = 1;
	return mat;
};
