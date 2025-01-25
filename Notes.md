# Three JS Basic Knowledge
- Math, Pysics

- > Dimensions(4)
- Zeroth Dimension (OD) -> Point With no size
- First Dimension (1D) -> Line with no width or height
- Second Dimension (2D) -> Shape with length and width but no depth
- Third Dimension (3D) -> shapes and object have a length, width, depth give them volume
- Fourth Dimension (4D) -> Time

- > 3D Graphics
- 1980 -> CGI -> Computer Generated Imagery
- 10 years later -> api -> openGL
- 2010s -> webGL
- WebGL -> Three JS -> JS library built on top of webGL
- Conversion -> Three JS -> WebGL -> OpenGL(Interact with GPU to render seens on the screen) -> GPU 

- > Three JS
- It's a JS Library and API Build on top of webGL enabling us to create 3D Graphics for the web
- Sceen (Where everything happens ex. earth) 
- Environment (Like whethers)
- Sceen remains same but environment changes
- Objects (These objects are the building block of 3D sceen ex. table, laptop, mouse, wall etc.)
- Animation (Make the sceen and object interactive and dynamic)
- Light & Shadows (To make it more realistic)
- Camera (we will decide which part of 3D object or sceen is visible to viewer ex. like director of movies)
- Renderer (Brain of the three js) (all info is then pass it to renderer) (randerer take all the 3D sceen, environment, object, animation, Light and based on the cameras prespective calculate how everything should looks like when projected to 2D screen) (It Process every Pixcel and ditermine it's color, Lighting, shadows and more to produce that final image)
- > Summary
- start with sceen to difine a space where everything happens
- Then we use camera to ditermine view point and perspectity of the sceen
- Then we use Object to populate the sceen with shapes, models, other 3D element
- With Lighting we illumenate the sceen so that object can be seen and appear as a real
- Then we update the object over time for dynamic biheviour or movement
- finally we render the sceen by calculating it from cameras view point that can be turned into images to be displyed on your monitor
- Then we display those images and then we continue to update and render a sceen to make the animation smooth

- > 3D Objects (Foundatinal object)
- 3D object is anything that you can see and interact with any 3D space
- There are many differnt types of 3D object in three js each with its own purpose
- Mesh is most comman type of 3D object create by combining geometry and material ex. cude = Geometry + Material = Mesh
- Points another type of 3D object is collection of small dots in a 3D space often used to create effect like stars or particals
- Line represents simple between points in 3D space often used to draw shape, graid, wireframe
- Group is a collection of a multiple objects
- sprite is an object is allways faces the camera means it will be always visible no matter where we look
- Light and cameras are not a 3D objects, They are more like seoerate entities or tools that influence how 3D object are seen 
- All elements i have mentioned start from the base JS class Object3D and extend it's properties and provide properties and methods to performing trasformation such as change in position, rotation, scale for all types of entities in 3D sceen 
- > Most comman properties 
- Position where is object is located in 3D space 
- Rotation 
- Scale how the big and small object is in 3D world
- you can combine position, rotation, scale to place an object exactly where you want in 3D sceen oriented it in the desired direction and size it appropriately

- > Mesh
- Geometry + Material
- > Geometry 
-> defines the shape or structure of 3D object it can be furture explained by it's three properties vertices, edges, faces -> vertices are the corner points or positions in 3D space where edges mets each vertices is point in the space define by it's co-ordinates cor(x,y,z) determining where it located in 3D space -> faces are the flate surfaces that connect vertices to from geometry of the shape they are made up of multiple vertices and define the visible surface of 3D object ex. In a cude each of the 6 sides of cude is face which is technically a square formed by connecting four vertices 
- Triangle -> Everything is the 3D world is made up of triangles ->  Most 3D graphics system including three js even squares are represented using triangle 
- > Material -> determines how the surface of the geometry looks
- texture
- light 

- > Camera 
- > Everything we see on the screen in 3D world is come from cameras persepective it determines the view of 3D seen without a camera you could't be able to see any object in the seen there would be no view point from which to observe them object completly pointless
there are two types of cameras
- Perspective Camera -> mimics how human eyes see the world object closer to camera look larger and object further away appears smaller 
- Orthographic Camera -> removes the perspective effect object appears same size no matter how far the are from camera
- Stereo Camera -> create two views of the same seen one for right eye and one for left eye to simulate 3D depth this is used in 3D movies , games , VR
- > Properties of camera
- Field of View (FOV) -> it refers to the extent of the observable world visible through camera at any movement The angle of cameras vision measured in degrees determine how wide or narrow view is -> How much of the seen camera can see at a once how wide your view is
- Point of View (POV) -> refers to the secific position and angle which the camera looks at the seen it's like where the eyes of camera located and what direction they are facing 
- Near & Far Clipping Planes -> cameras viewing range
- camera controls -> orbit controls , TrackballControls , Fly Controls , pointerLockControls , FirstPersonControls