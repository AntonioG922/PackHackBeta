//document ready
$( document ).ready(function() { 
    
    //Globals
    var fullSite = 0;
    
    // Falling binary effect
    // ** Adapted from matrix rain animation courtesy of thecodeplayer
    // ** Link: http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    
    /* 
     * Make the canvas full screen
     * 1) Use screen width so when readjusting browser siz binary rain doesnt get cut off
     * 2) Subtract 2 so that the canvas width matches width: 100% (2?)
     */
    c.height = screen.availHeight;
    c.width = screen.availWidth;
    
    //binary characters - taken from the unicode charset
    var binary = "10010100011110100101010011101000101010";
    //converting the string into an array of single characters
    binary = binary.split("");

    var font_size = 10;
    var columns = c.width/font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(var x = 0; x < columns; x++)
        drops[x] = 1; 

    //drawing the characters
    function draw()
    {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(195,49,73, 0.08)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "rgba(255, 255, 255, .6)"; //white, semi-transparent text
        ctx.font = font_size + "px arial";
        //looping over drops
        for(var i = 0; i < drops.length; i++)
        {
            //a random binary character to print
            var text = binary[Math.floor(Math.random()*binary.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 33);
    
    //Open answers for questions in FAQ
    $('.question').on('click', function() {
        $(this).toggleClass("reveal-answer");
    });
    
    /*
    $('.about-section').mousemove(function (e) {
        var objLeft = $(this).offset().left;
        var objTop = $(this).offset().top;

        var objCenterX = objLeft + $(this).width() / 2;
        var objCenterY = objTop + $(this).height() / 2;
        
        $(this).css("clip-path", function() {
            var maxPercentChange = 10; //Adjust to create more skewed parallelogram
            var relCursPosX = e.pageX - objCenterX;
            var relCursPosY = e.pageY - objCenterY;
            var topLeftCornerPos = 10 + (-1 * (maxPercentChange/2 * (relCursPosX / (objCenterX - objLeft)) + maxPercentChange/2 * (relCursPosY / (objCenterY - objTop))));
            var botLeftCornerPos = 90 - (-1 * (maxPercentChange/2 * (relCursPosX / (objCenterX - objLeft)) - maxPercentChange/2 * (relCursPosY / (objCenterY - objTop))));
            var topRightCornerPos = 10 + (maxPercentChange/2 * (relCursPosX / (objCenterX - objLeft)) - maxPercentChange/2 * (relCursPosY / (objCenterY - objTop)));
            var botRightCornerPos = 90 - (maxPercentChange/2 * (relCursPosX / (objCenterX - objLeft)) + maxPercentChange/2 * (relCursPosY / (objCenterY - objTop)));
                
            return "polygon(0% " + topLeftCornerPos + "%, 100% " + topRightCornerPos + "%, 100% " + botRightCornerPos + "%, 0% " + botLeftCornerPos + "%)";
        });
    });
    */
});