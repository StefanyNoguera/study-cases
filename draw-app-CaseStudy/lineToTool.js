function LineToTool(){
  //set an icon and a name for the object
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

  //to smoothly draw we'll draw a line from the previous mouse location
  //to the current mouse location. The following values store
  //the locations from the last frame. They are -1 to start with because
  //we haven't started drawing yet.
	var startMouseX = -1;
	var startMouseY = -1;
  //this variable will be used to determine if the user is currently drawing
	var drawing = false;

	this.draw = function(){
    //if the mouse is pressed
		if(mouseIsPressed){
      //if the user is not currently drawing
      //set the startMouseX and startMouseY to the current mouse location
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
        //we need to load the pixels array so we can use the updatePixels function
        //loadPixels() is called when the user starts drawing a line. This prepares the pixel data for manipulation.
				loadPixels();
			}

			else{
        //if the user is drawing
        //is called when the line is being drawn.
        //This updates the canvas with the line drawn from the previous mouse position to the current mouse position.
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
      //if the user has released the mouse we want to set the previousMouse values
      //back to -1.
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
