document.addEventListener('DOMContentLoaded', function() {
    var brandButtons = document.querySelectorAll('.brandButton');
  
    // Add click event listener to each brand button
    brandButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var brand = button.textContent.trim(); // Get the brand name from the button text
        displayBrandImages(brand);
      });
    });
  });
  
  function displayBrandImages(brand) {
    var imageContainer = document.getElementById('imageContainer');
    // Clear existing images
    imageContainer.innerHTML = '';
  
    // Replace the below switch statement with logic to get image URLs based on the clicked button
    var imageUrls;
    switch (brand) {
      case 'Brand 1':
        imageUrls = [
          'brand1_image1.jpg',
          'brand1_image2.jpg',
          'brand1_image3.jpg',
          // Add more image URLs for Brand 1 as needed
        ];
        break;
      case 'Brand 2':
        imageUrls = [
          'brand2_image1.jpg',
          'brand2_image2.jpg',
          'brand2_image3.jpg',
          // Add more image URLs for Brand 2 as needed
        ];
        break;
      // Add more cases for other brands if needed
    }
  
    // Create and append image elements to the container
    imageUrls.forEach(function(url) {
      var img = document.createElement('img');
      img.src = url;
      img.alt = 'Brand Image';
      imageContainer.appendChild(img);
    });
  }