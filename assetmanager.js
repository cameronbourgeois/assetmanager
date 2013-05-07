function AssetManager() {
  this.successNum = 0;
  this.errorNum = 0;
  this.cache = {};
  this.downloadQueue = [];
}

AssetManager.prototype.queueDownload = function(path) {
  this.downloadQueue.push(path);
}

AssetManager.prototype.downloadAll = function(downloadCallback, progressCallback) {
  if (this.downloadQueue.length === 0) {
    downloadCallback();
  }

  var queueLength = this.downloadQueue.length;

  for (var i = 0; i < queueLength; i++) {
    var path = this.downloadQueue[i];
    var img = new Image();
    var that = this;
    
    var onLoad = function() {
      that.successNum += 1;
      if (typeof(progressCallback) == "function") {
        progressCallback(that.successNum,queueLength);
      }
      if (that.isDone()) {
        downloadCallback();
      }
    }
    var onError = function() {
      that.errorNum += 1;
      if (that.isDone()) {
        downloadCallback();
      }      
    }
    
    if (img.addEventListener) {
      img.addEventListener("load", onLoad, false);
      img.addEventListener("error", onError, false);
    } else {
      img.attachEvent("onload", onLoad, false);
      img.attachEvent("onerror", onError, false);
    }

    img.src = path;
    this.cache[path] = img;
  }
}

AssetManager.prototype.queueAllBackgroundImages = function(elements) {
  for (var i = 0; i < elements.length; i++) {
    if ($(elements[i]).css('background-image') != "none") {
      url = $(elements[i]).css('background-image').replace('url(','').replace(')','').replace(/"/g,'');
      this.queueDownload(url);
    }
  }
}

AssetManager.prototype.getAsset = function(path) {
  return this.cache[path];
}

AssetManager.prototype.isDone = function() {
  if (this.downloadQueue.length == this.successNum + this.errorNum) {
    return true;
  }
  else {
    return false;
  }
}