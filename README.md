# jRoll
jQuery plugin that generates animated spinners.

To call jRoll you first have to have a designated `<div>` where to put the spinner.
You can then assign jRoll to it:
```
$("#myDiv").jRoll();
```

You currently have only 3 options to use with jRoll:

```
$("#heartbeat").jRoll({
        radius: 70, //At the moment, jRoll will interpret this value as pixels.
		animation: "heartbeat", //Choices between 'heartbea't and 'pulse'
		colors:['#046476','#29DCFF','#61FFD5'] //You can put 3 colors at the moment
});
```
