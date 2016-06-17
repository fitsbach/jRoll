# jRoll
jQuery plugin that generates animated spinners.

##Call jRoll
To call jRoll you first have to have a designated `<div>` where to put the spinner.
You can then assign jRoll to it:
```
$("#myDiv").jRoll();
```

##Options

You currently have only 3 options to use with jRoll:
```
radius //Currently interpreted as pixels by jRoll
animation //See animation list below
colors //Colors must be an array of hex colors, see example below
```

## Animation List
```
heartbeat
pulse
slicedspinner
```

##Example

```
$("#myDiv").jRoll({
        radius: 70, 
		animation: "heartbeat",
		colors:['#046476','#29DCFF','#61FFD5']
});
```
