jQuery(document).ready(function($) {	
			if($("meta[name=toTop]").attr("content")=="true"){
				$("<div id='toTop'><img src='images/up.png'></div>").appendTo('body');
				$("#toTop").css({
					width: '50px',
					height: '50px',
					bottom:'35px',
					right:'15px',
					position:'fixed',
					cursor:'pointer',
					zIndex:'999',
				});
				if($(this).scrollTop()<1500){
						$("#toTop").hide();
					}
				$(window).scroll(function(event) {
					/* Act on the event */
					if($(this).scrollTop()<1500){
						$("#toTop").hide();
					}
					if($(this).scrollTop()>=1500){
						$("#toTop").show();
					}
				});	
					$("#toTop").click(function(event) {
								/* Act on the event */
								$("html,body").animate({
									scrollTop:"0px"},
									1200
									)
							});
				}
		});