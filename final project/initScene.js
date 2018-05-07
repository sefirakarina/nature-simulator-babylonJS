function initeScene() {
	canvas = document.getElementById("renderCanvas");
		
		//Create Babylon Engine
		engine = new BABYLON.Engine(canvas, true);

		//Create scene. Scene: Like a level in a game
		scene = new BABYLON.Scene(engine);

		//Create FreeCamera. Camera: To  show in screen. Vector: Camera's position
		camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 4, -10), scene);
		camera.setTarget (new BABYLON.Vector3(0, 0, 0));
		camera.attachControl(canvas);

		//Create Light
		var Light = new BABYLON.HemisphericLight("hLight", new BABYLON.Vector3(0, 0, 0), scene);

		var box = new BABYLON.Mesh.CreateBox("box", 1.0, scene);
		box.position = new BABYLON.Vector3(0, 0, 0)

		engine.runRenderLoop(function(){
			box.position.x = box.position.x + 0.05; //The box moves to the right
			scene.render();
		});
	});
}