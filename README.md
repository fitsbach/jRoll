# jRoll
### Version 0.1.5
jQuery plugin that generates animated spinners.

##Call jRoll
To call jRoll you first have to have a designated `<div>` where to put the spinner.
You can then assign jRoll to it:
```
$("#myDiv").jRoll();
```

##Options

You currently have 4 options to use with jRoll:
```
radius //Currently interpreted as pixels by jRoll
animation //See animation list below
colors //Colors must be an array of hex colors, see example below
monocolor //Animation will load only the first color of the array
```

## Animation List
```
heartbeat
pulse
slicedspinner
halfslicedspinner
gyroscope
wave
jumpdots
hordots
verdots
spreaddots
trailedspreaddots
circledots
squares
3Dsquares
stackedsquares
3dots
popdot
```

##Example

```
$("#myDiv").jRoll({
        radius: 70, 
		animation: "heartbeat",
		colors:['#003056','#04518C','#00A1D9','#47D9BF','#F2D03B']
});
```
