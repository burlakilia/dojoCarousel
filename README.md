Dojo Carousel Widget
=============
This is a very simple widget carousel, the carousel that allows you to organize all of the widgets. This widget is fully implements the interface 'dojo/_Container', which will quickly and easily add or delete new widgets to the carousel.

Mixin: 
-------------
	
	dijit/_WidgetBase
	dijit/_TepmateMixi	
	dijit/_Container


CSS :
-------------

    <style>
		@import url('./dojogp/widgets/resources/Carousel.css');
	</style>

Javascript :
-------------

	<script type="text/javascript">
		require(["dojo/ready",
				         'dojo/parser',
				         "bil/widgets/Carousel",
				         "dijit/form/Button",
				         "dijit/layout/ContentPane"], function(ready, parser, ShortVacancySummary, Carousel, Button, ContentPane) {
				         
				        
				         
				         ready(function() {
				            carousel = new Carousel({
				                header: "Carousel",		// header 
				                showArrows: true, 		// show arrow
				                pageSize: 5,    		// the number of displayed widgets
				                scrollStep: 20, 		// mousewheel scrolling speed
				                animationSpeed: 1000, 	// animation speed
				                children: [
				                    new ContentPane({style:"background-color:white", content:'<h5>Hello world1</h5>'}),
									new ContentPane({style:"background-color:white", content:'<h5>Hello world2</h5>'})
				                ]
				            }, "carousel");
				            
							carousel.startup();

							carousel.addChild(new ContentPane({style:"background-color:white", content:'<h5>Hello world</h5>'}));
			});
		});
 	</script>

 
Html :
------------
	
	<div id="carousel"></div>
