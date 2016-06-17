//
//jRoll - http://fitsbachinteractive.com/jroll
//Version - 0.1.2
//Licensed unter the GNU General Public License - gnu.org/licenses/gpl.html
//
//Copyright (c) 2016 Jimmy Fitzback
//

(function($) {

    $.fn.jRoll = function(options) {
        
        // Default options
        var settings = $.extend({
            radius: 100,
            animation: "heartbeat",
			colors: ['#046476','#29DCFF','#61FFD5']
        }, options );
		
		//Fill the colors array if it's not full(3 colors)
		switch(settings.colors.length){
			case 0:
				settings.colors = ['#046476','#29DCFF','#61FFD5'];
				break;
			case 1:
				settings.colors[1]='#29DCFF';
				settings.colors[2]='#61FFD5';
				break;
			case 2:
				settings.colors[2]='#61FFD5';
				break;
		}
		
        switch(settings.animation){
			case 'heartbeat':
			//Parent CSS 
				$(this).css("width", settings.radius*2+'px').css("height",settings.radius*2+'px').css("overflow","hidden");;
				//Rings CSS
				var inRingStyle = "animation: heartbeatIn 1s linear 0s infinite;";
				var midRingStyle = "animation: heartbeatMid 1s linear 0.3s infinite;";
				var outRingStyle = "animation: heartbeatOut 1s linear 0.315s infinite;";
				
				//Rings Sizes
				var inRingSize = settings.radius/4;
				var midRingSize = settings.radius/3 ;
				var halfradius = settings.radius/2;
				var inRing= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" id="jRollInRing" style="'+inRingStyle+'"><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+inRingSize+'" stroke="'+settings.colors[0]+'" stroke-width="6" fill="transparent"></circle></svg>');
				var midRing= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" id="jRollMidRing" style="'+midRingStyle+'"><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+midRingSize+'" stroke="'+settings.colors[1]+'" stroke-width="3" fill="transparent"></circle></svg>');
				var outRing= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" id="jRollOutRing" style="'+outRingStyle+'"><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+((settings.radius/2)-0)+'" stroke="'+settings.colors[2]+'" stroke-width="4" fill="transparent"></circle></svg>');
				$(this).append(inRing).append(midRing).append(outRing);
				break;
			
			case 'pulse':
				//Parent CSS 
				$(this).css("width", settings.radius*2+'px').css("height",settings.radius*2+'px').css("overflow","hidden");;
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
				
			case 'slicedspinner':
				//Parent CSS 
				$(this).css("width", (settings.radius*2)+'px').css("height",(settings.radius*2)+'px').css("overflow","hidden");
				//Animation has to be runned on parent container because of the Circle hack.
				$(this).css("animation", "slicedspinner 1s linear 0s infinite" );
				
				//SVG
				var Ring1= $('<svg height="'+settings.radius+'" width="'+settings.radius+'" ><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+(settings.radius-2)+'" stroke="'+settings.colors[0]+'" stroke-width="2" fill="transparent"></circle></svg>');
				var Ring2= $('<svg height="'+settings.radius+'" width="'+settings.radius+'" style="left:'+settings.radius+'px; transform: rotate(90deg);" ><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+(settings.radius-2)+'" stroke="'+settings.colors[1]+'" stroke-width="2" fill="transparent"></circle></svg>');
				var Ring3= $('<svg height="'+settings.radius+'" width="'+settings.radius+'" style="left:'+settings.radius+'px; top:'+settings.radius+'px; transform: rotate(180deg);" ><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+(settings.radius-2)+'" stroke="'+settings.colors[0]+'" stroke-width="2" fill="transparent"></svg>');
				var Ring4= $('<svg height="'+settings.radius+'" width="'+settings.radius+'" style="top:'+settings.radius+'px; transform: rotate(270deg);" ><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+(settings.radius-2)+'" stroke="'+settings.colors[1]+'" stroke-width="2" fill="transparent"></svg>');
				$(this).append(Ring1).append(Ring2).append(Ring3).append(Ring4);
				break;
				
			case 'halfslicedspinner':
				//Parent CSS 
				$(this).css("width", (settings.radius*2)+'px').css("height",(settings.radius*2)+'px').css("overflow","hidden");
				//Animation has to be runned on parent container because of the Circle hack.
				$(this).css("animation", "slicedspinner 1s linear 0s infinite" );
				
				//SVG
				var Ring1= $('<svg height="'+settings.radius+'" width="'+settings.radius+'" ><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+(settings.radius-2)+'" stroke="'+settings.colors[0]+'" stroke-width="2" fill="transparent"></circle></svg>');
				var Ring2= $('<svg height="'+settings.radius+'" width="'+settings.radius+'" style="left:'+settings.radius+'px; top:'+settings.radius+'px; transform: rotate(180deg);" ><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+(settings.radius-2)+'" stroke="'+settings.colors[0]+'" stroke-width="2" fill="transparent"></svg>');
				$(this).append(Ring1).append(Ring2);
				break;
				
			case 'gyroscope':
				//Parent CSS 
				$(this).css("width", settings.radius*2+'px').css("height",settings.radius*2+'px').css("overflow","hidden").css("animation","gyroscope3D 2s linear 0s infinite");
				//Rings CSS
				var inRingStyle = "animation: gyroscopeIn 2s linear 0s infinite;z-index:1;";
				var outRingStyle = "animation: gyroscopeOut 2s linear 0s infinite;z-index:2;";
				
				//Rings Sizes
				var inRingSize = settings.radius/4;
				var halfradius = settings.radius/2;
				var strokew = settings.radius/12;
				var inRing= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" style="'+inRingStyle+'"><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+(settings.radius-6)+'" stroke="'+settings.colors[0]+'" stroke-width="'+strokew+'" fill="transparent"></circle></svg>');
				var outRing= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" style="'+outRingStyle+'"><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+(settings.radius-4)+'" stroke="'+settings.colors[1]+'" stroke-width="2" fill="transparent"></circle></svg>');
				var midBall= $('<svg height="'+(settings.radius*2)+'" width="'+(settings.radius*2)+'" style="z-index:-2;" > <defs><radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="0%" style="stop-color:'+settings.colors[1]+'; stop-opacity:1" /><stop offset="100%" style="stop-color:'+settings.colors[0]+';stop-opacity:1" /></radialGradient></defs><circle cx="'+settings.radius+'" cy="'+settings.radius+'" r="'+(settings.radius/2)+'"  fill="url(#grad1)"></circle></svg>');
				
				$(this).append(inRing).append(outRing).append(midBall);
				break;
    
				
		}
                
    }

}(jQuery));