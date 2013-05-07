// Array of assets. The key is the 'handle' used by each object.
window.asset_map = {
	
	'bananapopbaddie': '/assets/images/game/banana01.png',
	'bananaconebaddie': '/assets/images/game/banana02.png',
	'pistachiopopbaddie': '/assets/images/game/pistachio01.png',
	'pistachioconebaddie': '/assets/images/game/pistachio02.png',
	'strawberrypopbaddie': '/assets/images/game/strawberry01.png',
	'strawberryconebaddie': '/assets/images/game/strawberry02.png',
	'chocolatepopbaddie': '/assets/images/game/chocolate01.png',
	'chocolateconebaddie': '/assets/images/game/chocolate02.png',
	'licoricepopbaddie': '/assets/images/game/licorice01.png',
	'licoriceconebaddie': '/assets/images/game/licorice02.png',
	
	'explosion': '/assets/images/game/explosion.png',
	
	'background': '/assets/images/game/bg-sky.jpg',
	
	'btn-start': '/assets/images/game/bt-start.png',
	
	'levelone-bg': '/assets/images/game/bg-sky.jpg',
	'levelone': '/assets/images/game/level01.png',
	'leveltwo-bg': '/assets/images/game/bg-desert-lv2.jpg',
	'leveltwo': '/assets/images/game/level02.png',
	'levelthree-bg': '/assets/images/game/bg-japan-lv3.jpg',
	'levelthree': '/assets/images/game/level03.png',
	'levelfour-bg': '/assets/images/game/bg-undersea-lv4.jpg',
	'levelfour': '/assets/images/game/level04.png',
	'levelfive-bg': '/assets/images/game/bg-space-lv5.jpg',
	'levelfive': '/assets/images/game/level05.png',
	
	'player2': '/assets/images/game/player.png',
	'player2-rocket': '/assets/images/game/player-rocket.png',
	'player': '/assets/images/game/player02.png',
	'player-rocket': '/assets/images/game/player02-rocket.png',
	
	'bullet': '/assets/images/game/bullet-red.png',
	
	'healthdrop': '/assets/images/game/bonus-life.png',
	'healthdrop-ghost': '/assets/images/game/cloud-bonus-life.png',
	'speeddrop': '/assets/images/game/bonus-speed.png',
	'speeddrop-ghost': '/assets/images/game/cloud-bonus-speed.png',
	'slowdrop': '/assets/images/game/bonus-slow.png',
	'slowdrop-ghost': '/assets/images/game/cloud-bonus-slow.png',
	'poisondrop': '/assets/images/game/bonus-poison.png',
	'poisondrop-ghost': '/assets/images/game/cloud-bonus-poison.png',
	'bombdrop': '/assets/images/game/bonus-pchhbomb.png',
	'bombdrop-ghost': '/assets/images/game/cloud-bonus-pchhbomb.png'
	
};

$(function(){

	var assets = window.assets = new AssetManager();
	
	// Queue up the download of all background images
	assets.queueAllBackgroundImages($('#game div'))
	
	// Queue up each asset for download
	$.each(window.asset_map,function(name,uri){
		assets.queueDownload(uri);
	});
	
	// Initiate the game on downloadAll()
	assets.downloadAll(function() {
		window.game = new Game();
		
		// getAsset returns an image object
		bulletImgObj = window.assets.getAsset(window.asset_map['bullet']);
	});
	
})