//Tutorial http://blog.teamtreehouse.com/writing-your-own-jquery-plugins
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y
    ].join(" ");

    return d;       
}

(function($) {

    $.fn.jRoll = function(options) {
        
        // Default options
        var settings = $.extend({
            radius: 100,
            animation: "heartbeat",
			colors: ['#046476','#29DCFF','#61FFD5']
        }, options );

        switch(settings.animation){
			case 'heartbeat':
			//Parent CSS 
				$(this).css("width", settings.radius*2+'px').css("height",settings.radius*2+'px');
				//Rings CSS
				var inRingStyle = "animation: heartbeatIn 1s linear 0s infinite;";
				var midRingStyle = "animation: heartbeatMid 1s linear 0.3s infinite;";
				var outRingStyle = "animation: heartbeatOut 1s linear 0.315s infinite;";
				
				//Rings Sizes
				var inRingSize = settings.radius/4;
				var midRingSize = settings.radius/3 ;
				var halfradius = settings.radius/2;
				var inRing= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" id="jRollInRing" style="'+inRingStyle+'"><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+inRingSize+'" stroke="'+settings.colors[0]+'" stroke-width="6" fill="transparent"></circle></svg>');
				var midRing= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" id="jRollMidRing" style="'+midRingStyle+'"><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+midRingSize+'" stroke="'+settings.colors[1]+'" stroke-width="6" fill="transparent"></circle></svg>');
				var outRing= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" id="jRollOutRing" style="'+outRingStyle+'"><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+((settings.radius/2)-0)+'" stroke="'+settings.colors[2]+'" stroke-width="8" fill="transparent"></circle></svg>');
				$(this).append(inRing).append(midRing).append(outRing);
				break;
			
			case 'pulse':
				//Parent CSS 
				$(this).css("width", settings.radius*2+'px').css("height",settings.radius*2+'px');
				//Rings CSS
				var inRingStyle = "animation: pulseIn 1s linear 0s infinite;";
				var midRingStyle = "animation: pulseMid 1s linear 0s infinite;";
				var outRingStyle = "animation: pulseOut 1s linear 0s infinite;";
				
				//Rings Sizes
				var inRingSize = settings.radius/4;
				var midRingSize = settings.radius/3 ;
				var halfradius = settings.radius/2;
				var strokew = settings.radius/12;
				var inRing= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" style="'+inRingStyle+'"><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+inRingSize+'" stroke="'+settings.colors[0]+'" stroke-width="'+strokew+'" fill="#64d4ce"></circle></svg>');
				var midRing= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" style="'+midRingStyle+'"><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+midRingSize+'" stroke="'+settings.colors[1]+'" stroke-width="'+strokew+'" fill="transparent"></circle></svg>');
				var outRing= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" style="'+outRingStyle+'"><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+halfradius+'" stroke="'+settings.colors[2]+'" stroke-width="2" fill="transparent"></circle></svg>');
				$(this).append(inRing).append(midRing).append(outRing);
				break;
    
				
		}
                
    }

}(jQuery));