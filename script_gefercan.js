window.onload= function(){
	function myFunction() {

		function header_banner(){
    		//header scene
    			const images = [ "./images/design_gefercan_UXUI_portfolio_page2.webp",
      				 "./images/design_gefercan_infographic_sport_voley.webp",
     		 		 "./images/design_gefercan_illustration_tintin.webp",
      				 "./images/design_gefercan_editorial_book_cover1.webp"
    				];
    			let currentIndex = 0;
    			function changeBackground() {
      				const div = document.getElementById("section1");
      				div.style.backgroundImage = `url(${images[currentIndex]})`;
      				currentIndex = (currentIndex + 1) % images.length; // Loop back to start
    				}
    		// Change the background every 3000 milliseconds
    			setInterval(changeBackground, 3000);

    		// Initialize the first image
    			changeBackground();
		}




		function carousel_infographics1(){
			
    			// List of images for the Infographics gallery
    			const images_infographics= [ { id: "red_infographics",  	url: "./images/design_gefercan_infographics_custom1.webp" },
      					     { id: "orange_infographics", 	url: "./images/design_gefercan_infographics_diabetes.webp" },
		                             { id: "blue_infographics", 	url: "./images/design_gefercan_infographic_sport_voley.webp" },
      		                             { id: "purple_infographics", 	url: "./images/design_gefercan_infographics_sport.webp" }
					   ];
    			let currentIndex_infographics = 0; // Current index of the background image
    			// Function to change the background image to the next one
    			function nextImageInfographic() {
      			currentIndex_infographics = (currentIndex_infographics + 1) % images_infographics.length;
      			updateInfographicsGallery();
    			}
    			// Function to change the background image to the previous one
    			function previousImageInfographic() {
      			currentIndex_infographics = (currentIndex_infographics - 1 + images_infographics.length) % images_infographics.length;
      			updateInfographicsGallery();
    			}
    			// Update the gallery background image
    			function updateInfographicsGallery() {
      			const x = document.getElementById("carousel_infographics");
      			x.style.backgroundImage = `url(${images_infographics[currentIndex_infographics].url})`;
    			}
    			// Initialize the first image
    			updateInfographicsGallery();
		}


		function carousel_illustration1(){
    			// List of images for the illustration gallery
    			const images_illustration= [ 
			{ id: "orange_infographics", 	url: "./images/design_gefercan_illustration_pet.webp" },
      			{ id: "blue_infographics", 	url: "./images/design_gefercan_illustration_poster.webp" },
      			{ id: "red_infographics",  	url: "./images/design_gefercan_illustration_ads.webp" },
      			{ id: "purple_infographics", 	url: "./images/design_gefercan_illustration_powerboat.webp" }
			];
    			let currentIndex_illustration = 0; // Current index of the background image
    			// Function to change the background image to the next one
    			function nextImageillustration() {
      			currentIndex_illustration = (currentIndex_illustration + 1) % images_illustration.length;
      			updateillustrationGallery();
    			}
    			// Function to change the background image to the previous one
    			function previousImageillustration() {
      			currentIndex_illustration = (currentIndex_illustration - 1 + images_illustration.length) % images_illustration.length;
      			updateillustrationGallery();
    			}
    			// Update the gallery background image
    			function updateillustrationGallery() {
      			const x = document.getElementById("carousel_illustration");
      			x.style.backgroundImage = `url(${images_illustration[currentIndex_illustration].url})`;
    			}
    			// Initialize the first image
    			updateillustrationGallery();
		}


		function carousel_uxui1(){
    			// List of images for the UXUI gallery
    			const images_uxui= [ 
      			{ id: "blue_infographics", 	url: "./images/design_gefercan_UXUI_videosessions.webp" },
      			{ id: "red_infographics",  	url: "./images/design_gefercan_UXUI_portfolio_page2.webp" },
      			{ id: "orange_infographics", 	url: "./images/design_gefercan_UXUI_portfolio_page.webp" },
      			{ id: "purple_infographics", 	url: "./images/design_gefercan_UXUI_portfolio.webp" }
			];
    			let currentIndex_uxui = 0; // Current index of the background image
    			// Function to change the background image to the next one
    			function nextImageuxui() {
      			currentIndex_uxui = (currentIndex_uxui + 1) % images_uxui.length;
      			updateUXUIGallery();
    			}
    			// Function to change the background image to the previous one
    			function previousImageuxui() {
      			currentIndex_uxui = (currentIndex_uxui - 1 + images_uxui.length) % images_uxui.length;
      			updateUXUIGallery();
    			}
    			// Update the gallery background image
    			function updateUXUIGallery() {
      			const x = document.getElementById("carousel_uxui");
      			x.style.backgroundImage = `url(${images_uxui[currentIndex_uxui].url})`;
    			}
    			// Initialize the first image
    			updateUXUIGallery();
		}


		function carousel_editorial1(){
    			// List of images for the editorial gallery
    			const images_editorial= [ { id: "blue_infographics", 	url: "./images/design_editorial_genderbalance1.webp" },
      					  { id: "red_infographics",  	url: "./images/design_gefercan_editorial_book_cover2.webp" },
      				          { id: "orange_infographics", 	url: "./images/design_editorial_genderbalance2.webp" },
      					  { id: "purple_infographics", 	url: "./images/design_gefercan_editorial_book_cover2.webp" }
					];
    			let currentIndex_editorial = 0; // Current index of the background image
    			// Function to change the background image to the next one
    			function nextImage_editorial() {
      			currentIndex_editorial = (currentIndex_editorial + 1) % images_editorial.length;
      			update_editorialGallery();
    			}
   	 		// Function to change the background image to the previous one
    			function previousImage_editorial() {
      			currentIndex_editorial = (currentIndex_editorial - 1 + images_editorial.length) % images_editorial.length;
      			update_editorialGallery();
    			}
    			// Update the gallery background image
    			function update_editorialGallery() {
      			const x = document.getElementById("carousel_editorial");
      			x.style.backgroundImage = `url(${images_editorial[currentIndex_editorial].url})`;
    			}
    			// Initialize the first image
        		update_editorialGallery();
		}


		function sidemenu(){
			
			document.getElementById("button1").addEventListener("click", () => {
  			const sideMenu = document.getElementById("navheader2");
  			sideMenu.style.top = "10px";
			});
			document.getElementById("container").addEventListener("click", () => {
 			const sideMenu = document.getElementById("navheader2");
  			sideMenu.style.top = "-550px";
			});
		}



		header_banner();
		carousel_infographics1();
		carousel_illustration1();
		carousel_uxui1();
		carousel_editorial1();
		sidemenu();
	}

	myFunction();

}



