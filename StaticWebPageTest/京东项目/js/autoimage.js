// JavaScript Document
/*大轮播图*/
var mian=function(){
	    var child = document.querySelector(".axis"),
			bottom_submit = document.querySelector(".slide_submit"),
			bottom_right = document.querySelector(".slide_right"),
			index = document.querySelectorAll(".slide_index i"),
			imagelength = document.querySelectorAll(".axis li a img").length,
			image = document.querySelector(".axis li a img"),
			imagewidth = image.offsetWidth,
			imagespeed = imagewidth;
   		
		function auto(){
		    var time=setTimeout(function hh(){
				Index(imagespeed)
				imagespeed+=imagewidth;
				child.style.transition=.6+"s"
				if(imagespeed==(imagewidth*imagelength)){
					imagespeed=imagewidth;
					child.style.transition=0+"s"
				}
				child.style.transform="translate3d("+(-imagespeed)+"px"+","+0+","+0+")"	
				auto()
			},3000)
			bottom_submit.left=time
			bottom_right.right=time
		}
		auto()
		function Index(imagespeed){
//			标记移动函数
			var imageindex=Math.floor((imagespeed)/imagewidth)
			if(imageindex==(imagelength-2)||imageindex==(imagelength-1)/*||imageindex==0*/){
				imageindex=0
				index[imagelength-3].classList.remove("javascript_index")
			}
			if(imageindex>0)
			{
				index[imageindex-1].classList.remove("javascript_index")
			}
				index[imageindex].classList.add("javascript_index")
		};
	
		bottom_submit.onclick=function(){
			clearTimeout(this.left)
			imagespeed+=imagewidth;
			child.style.transition=.6+"s"
			if(imagespeed==(imagelength*imagewidth)){
				imagespeed=imagewidth
				child.style.transition=0+"s"
			}
			console.log(index,"大轮播图右键")
			child.style.transform="translate3d("+(-imagespeed)+"px"+","+0+","+0+")"	
			Index(imagespeed-imagewidth)
			 auto()
		}
		bottom_right.onclick=function(){
			clearTimeout(this.right)
			imagespeed-=imagewidth;
			child.style.transition=.6+"s"
			if(imagespeed==-imagewidth){
				imagespeed=imagewidth*(imagelength-2)
				child.style.transition=0+"s"
			}
			console.log(index,"大轮播图左键")
			child.style.transform="translate3d("+(-imagespeed)+"px"+","+0+","+0+")"	
			kan()
			function kan(){
				var imageindex=Math.floor((imagespeed)/imagewidth)
				if(imageindex>0){
					index[imageindex-1].classList.add("javascript_index")
				}
				if(imageindex==0){
					index[imagelength-3].classList.add("javascript_index")
				}
				if(imageindex<imagelength-2){
					index[imageindex].classList.remove("javascript_index")
				}
				/*if(imageindex==8){
					index[0].classList.remove("javascript_index")
				}*/
			}
			auto()
		}	
}
mian()/*淘宝轮播图*/	
















var vice = function () {
	var vice_autoimgae = document.querySelectorAll(".auto_child li"),
		button = document.querySelectorAll(".auto_child button"),
		image_length = vice_autoimgae.length,
		index = 0;
	SetInterval();
	function SetInterval(){
		var time=setInterval(function(){
		for(var i=0;i<image_length;i++){
				vice_autoimgae[i].classList.remove("javascript_auto")
			}
		if(index==image_length-1){
			index=-1;
			}		 
		index+=1;
		vice_autoimgae[index].classList.add("javascript_auto")
		if(index==image_length-1){
			index=-1;
			}		 	
		},9000)
			button[0].left=time;
			button[1].right=time
	}
	 index_image()
	function index_image(){
		
		button[0].onclick=function(){
			clearInterval(this.left)
			
			for(var i=0;i<image_length;i++){
				vice_autoimgae[i].classList.remove("javascript_auto")
			}
			if(index<=-1){
				vice_autoimgae[index+1].classList.remove("javascript_auto")
				index=image_length-1
			}
			index-=1
			if(index==-1){
				vice_autoimgae[index+1].classList.remove("javascript_auto")
				index=image_length-1
			}
			console.log(index,"小轮播图右键")
			vice_autoimgae[index].classList.add("javascript_auto")

			SetInterval();
		}
		button[1].onclick=function(){
			clearInterval(this.right)
			index+=1
			for(var i=0;i<image_length;i++){
				vice_autoimgae[i].classList.remove("javascript_auto")
			}
			if(index==image_length){
					index=0;
			}
			
			vice_autoimgae[index].classList.add("javascript_auto");
			console.log(index,"小轮播图右键")
			if(index==image_length-1){
				index=-1;
			}
			SetInterval();
		}
	}
	
	
}
vice()/*京东轮播图*/	

