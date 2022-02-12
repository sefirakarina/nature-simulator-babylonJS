## Nature Simulator

### Application Description
This application is a simulation of the nature. The application will show a  scene consists of a river with several other models, and several BABYLON GUI components for user to interact.This application allows users to know kinds of nature phenomenons. The phenomenons that users can try are rain, snow, fog, sunset, daytime, and night. Users can also change the settings that is available as they want.

### Third party API and framework
This project was made using WebGL and BabylonJS. Web Graphics or WebGL is a JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins, and BabylonJS is complete JavaScript framework for building 3D games and experiences with HTML5, WebGL, WebVR and Web Audio.

### models and textures
For most of the models, we use imported 3D models that we found on the internet. The credits and sources can be seen [here](https://github.com/sefirakarina/nature-simulator-babylonJS/blob/master/credits.txt)

here are several things that are textured, and thus are:
- Imported textures for ground, windmill, and all the particles (grass, snowy ground, brick, rain particle, snow particle, lightning).
- BABYLON.SkyMaterial for skybox texture.
- BABYLON.WaterMaterial for the river.
- BABYLON.FireMaterial for the fire.

### interactivity 
In this project, most of the user interaction happens through BABYLON GUI. Types of BABYLON GUI we used are buttons and sliders. The buttons include daytime, sunset, night, rain, snow,  fog, and three other buttons to stop the rain, snow, and fog. 

We also used BABYLON.SkyMaterial. With this, we are able to give effects to the skybox. The skybox will be able to reproduce and configure the sky taking care of the atmosphere state. In other words, for example, determine how the light (from sun) is scattered.  For changing between daytime and sunset, BABYLON.Animation is used. In the animation, we changed the inclination of the sun. The user can change from daytime, dusk, and night through BABYLON GUI buttons.

We also have some weather features, including rain, snow, fog, and wind that the user can interact with. For the snow, rain, and lightning we use Babylon’s ParticleSystem feature. For the fog we use  BABYLON fogMode. Users are able to change the intensity of the rain, snow, and fog through BABYLON GUI’s sliders.
Other than that, when user push the rain button, the lightning strike button will appear. When the lightning strike button is being pushed, the lightning will appear to be closer to the camera, and a fire will appear to burn the tree, after a few seconds the tree will fall down and then the fire will go off. We use BABYLON.Animation to animate the fire and tree.

Users are also able to control the speed of the wind. The wind affects things such as the river flow, and rotation speed of the siren and merry go round. The user can also interact with some of the models by clicking them. For example, the tree will fall (using BABYLON.Animation) if the user click the bottom part of it, and the rotor will spin faster to a certain speed if the center of it is being clicked.


### Application manual
Once you open the application, you will see a scenery of nature in a sunny state. In this simulator, there are a few models, buttons and also sliders for users to interact with.

The first one is the “daytime” button. When the user click the button, it will show the scenery in a sunny mode.

<img src="https://github.com/sefirakarina/challenges-chapter-11/blob/master/cg2.PNG" width="850">

The difference between daytime and the start state is that the inclination of the sun changes.
The second is the “sunset button” . It will show the scenery in sunset mode.

<img src="https://github.com/sefirakarina/challenges-chapter-11/blob/master/cg3.PNG" width="850">

The third one is the “night” button. It will show the scenery in night mode. The moon and the stars appeared in this mode.

<img src="https://github.com/sefirakarina/challenges-chapter-11/blob/master/cg4.PNG" width="850">

The fourth is the “rain” button. The rain button will make the rain fall with thunder in the scenery. The user can also set the heaviness of the rain and if the user wanted to stop the rain, they can click the “stop rain” button.
The user can also click on the “lightning strike” button to make the lightning struck the model. When the lightning strikes the model, the tree model will be on fire and will fall.

<img src="https://github.com/sefirakarina/challenges-chapter-11/blob/master/cg5.PNG" width="850">

The fifth is the “snow” button. This button will show a snow fall in the scenery. A few seconds after the user clicked the “snow button” , the land will be covered in snow and change color into white. The user can also set the speed of the snow fall and the snow fall rate. If the user wants the snow to stop,jet they can click the “stop snow” button.

<img src="https://github.com/sefirakarina/challenges-chapter-11/blob/master/cg6.PNG" width="850">

The sixth button is the “fog” button. When the user click the button. The scenery will be in the foggy state. The user can also set the thickness of the fog with the slider. If the user wants the fog to stop, they can click the “stop fog” button.
