/* global cordova */

var crop_export = {}
crop_export.crop = function cropImage (success, fail, image, options) {
  options = options || {}
  options.quality = options.quality || 100
  return cordova.exec(success, fail, 'CropPlugin', 'cropImage', [image, options])
}


crop_export.crop_fixed_ratio_800x600  = function cropImageFixedRatio800x600 (success, fail, image, options) {
  options = options || {}
  options.quality = options.quality || 100
  return cordova.exec(success, fail, 'CropPlugin', 'cropImageFixedRatio800x600', [image, options])
}

crop_export.crop_fixed_ratio  = function cropImageFixedRatio (success, fail, image, options) {
  options = options || {}
  options.quality = options.quality || 100
  return cordova.exec(success, fail, 'CropPlugin', 'cropImageFixedRatio', [image, options.height, options.width, options])
}

crop_export.promise = function cropAsync (image, options) {
  return new Promise(function (resolve, reject) {
    crop(resolve, reject, image, options)
  })
}

module.exports = crop_export;
