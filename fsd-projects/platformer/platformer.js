$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(600, 600, 100, 60, "darkblue");
createPlatform(500, 650, 100, 50, "red");
createPlatform(400, 700, 100, 20, )
createPlatform(700, 350, 100, 25, "green");
createPlatform(400, 500, 100, 25, "green");
createPlatform(950, 450, 100, 25, "green");
createPlatform(250, 500, 100, 25, "pink");
createPlatform(400, 800, 100, 25, "yellow");
createPlatform(1000, 650, 100, 50, "red");
createPlatform(800, 500, 100, 50, "red");
createPlatform(1100, 700, 100, 20, )
createPlatform(900, 600, 100, 60, "darkblue");
createPlatform(700, 500, 100, 50, "red");
createPlatform(500, 250, 100, 25, "green");
createPlatform(200, 500, 100, 25, "pink");
createPlatform(500, 200, 10, 10, "lime"); // bright green for a finished platform
    // TODO 3 - Create Collectables
   createCollectable("diamond", 200, 170, 0.5, 0.7);
   createCollectable("steve", 750, 170, 0.5, 0.7);
  createCollectable("max", 1300, 170, 0.5, 0.7);

    // TODO 4 - Create Cannons
createCannon("top", 400, 1500);
createCannon("top", 855, 2500);
createCannon("right", 500, 3500);
createCannon("top", 1200, 2000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
