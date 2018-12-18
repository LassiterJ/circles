createCircle();
// -Create a new circle with updated point values 
        function createCircle(){
            var x = 50;
            var y = 50;
            
            for( var x = y =0; x<=1000; x+=50){
                var myCircle = new Path.Circle(new Point(x, y), 10);
                 myCircle.fillColor = 'purple';
                var x =+ 25;
                if (i % 10 === 0){
                    var y =+ 25);
                }
            }
        };


        for (var x = y = 0; x <= 1000; x += 50) {

            if (x === 1000 && y !== 1000) {
    
              x = 0;
    
              y += 50;
    
            }
    
            var circles = new Path.Circle(new Point(x, y), 10);
    
            circles.fillColor = 'purple';
    
          };