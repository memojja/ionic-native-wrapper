## Using

    $ cordova plugin add https://github.com/memojja/ionic-native-wrapper.git
    

Edit `www/js/index.js` and add the following code inside `onDeviceReady`

```js
    var num1 = 5;
    var num2 = 6;
    var success = function(message) {
        alert(message);
    }

    var failure = function() {
        alert("Something happen!!");
    }

    calculator.add ({
            param1: num1,
            param2: num2
        }, success, failure);
```

Install iOS or Android platform

    cordova platform add ios
    cordova platform add android
    
Run the code

    cordova run 

## More Info

For more information on setting up Cordova see [the documentation](http://cordova.apache.org/docs/en/latest/guide/cli/index.html)

For more info on plugins see the [Plugin Development Guide](http://cordova.apache.org/docs/en/latest/guide/hybrid/plugins/index.html)
