# cordova-plugin-crop

> Crop an image in a Cordova app


## Install

```
$ cordova plugin add --save cordova-plugin-crop
```


## Usage

```js
function onSuccess (croppedImageUrl) {}
function onFail (errorMessage) {}
var options = {
  quality: 1
};

// Crops with a square ratio
plugins.crop.crop(onSuccess, onFail, '/path/to/image', options)

// Crops with a fixed ratio of 800x600
plugins.crop.crop_fixed_ratio_800x600(onSuccess, onFail, '/path/to/image', options)

// Crops with the provided orientation (height/width)
options.height = 100;
options.width = 100;
plugins.crop.crop_fixed_ratio(onSuccess, onFail, '/path/to/image', options)
```

or, if you are running on an environment that supports Promises
(Crosswalk, Android >= KitKat, iOS >= 8)

```js
plugins.crop.promise('/path/to/image', options)
.then(function success (newPath) {
})
.catch(function fail (err) {
})
```

## API

 * quality: Number
The resulting JPEG quality. default: 100
 * height: Number
The desired height of the cropped image
 * width: Number
The desired width of the cropped image

### Libraries used

 * iOS: [PEPhotoCropEditor](https://github.com/kishikawakatsumi/PEPhotoCropEditor)
 * Android: [android-crop](https://github.com/jdamcd/android-crop)

## License

MIT © [Jeduan Cornejo](https://github.com/jeduan)
