GitHub Markup
=============


Example:

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
				         "dojogp/views/applicant/search/ShortVacancySummary",
				         "dojogp/widgets/Carousel",
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

Here we're telling GitHub Markup of the existence of a `rest2html`
command which should be used for any file ending in `rest`,
`rst`, `rest.txt` or `rst.txt`. Any regular expression will do.
