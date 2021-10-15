// JavaScript Document
/*llogo_javascript动态start*/
logo()
function logo(){
	var logo_animation_background=document.querySelector(".logo_animation_background"),
	
	logo_animation_word=document.querySelectorAll(".logo_animation_word"),
	logo_image=document.querySelector(".logo_image"),
	logo_animation_word_length=logo_animation_word.length
		
	logo_image.onmouseover = function(){
		var step=0
		logo_image.style.opacity="0"
		
		logo_animation_background.classList.add("javascript_animation")
		
		
		var close=setInterval(function(){
			for(var i=0;i<logo_animation_word_length;i++){
						logo_animation_word[i].style.opacity="1"
						logo_animation_word[i].style.transition=1+'s'
					}
						step+=1;
						if(step>=2){
							clearInterval(close)
							for(var i=0;i<logo_animation_word_length;i++){
							logo_animation_word[i].style.opacity="0"
							logo_animation_word[i].style.transition=0+'s'
						}	
							logo_image.style.transition=2+"s"
							logo_image.style.opacity="1"
							logo_image.style.transition=0+"s"
							logo_animation_background.classList.remove("javascript_animation")
					}
		},3000)
	}
}
var html = document.getElementsByTagName('html'),
	inspect = true;
onresize = function () {
	if(inspect){
		html[0].className = 'wid'
		inspect = false;
	} else{
		html[0].className = ''
		inspect = true;
	}
	
}




/*llogo_javascript动态end*/