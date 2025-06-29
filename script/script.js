    // Gallery functionality
    document.addEventListener('DOMContentLoaded', function() {
      // Category tabs
      const tabs = document.querySelectorAll('.category-tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', function() {
          // Remove active class from all tabs and galleries
          document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
          document.querySelectorAll('.gallery-category').forEach(g => g.classList.remove('active'));
          
          // Add active class to clicked tab and corresponding gallery
          this.classList.add('active');
          const category = this.getAttribute('data-category');
          document.getElementById(`${category}-gallery`).classList.add('active');
        });
      });
    });

    // Image gallery data
    const galleryData = {
      lehenga: [
        { src: 'Image/Lengha/Lengha1.jpg', alt: 'डिजाइनर लहँगा - अनुष्का बुटिक में उपलब्ध लाल और गोल्ड वर्क वाला ब्राइडल लहँगा', caption: 'डिजाइनर लहँगा 1' },
        { src: 'Image/Lengha/Lengha2.jpg', alt: 'डिजाइनर लहँगा - अनुष्का बुटिक में उपलब्ध नीले रंग का जरी वर्क वाला लहँगा', caption: 'डिजाइनर लहँगा 2' },
        { src: 'Image/Lengha/Lengha3.jpg', alt: 'डिजाइनर लहँगा - अनुष्का बुटिक में उपलब्ध पिंक कलर का फ्लोरल प्रिंट लहँगा', caption: 'डिजाइनर लहँगा 3' },
        { src: 'Image/Lengha/Lengha4.jpg', alt: 'डिजाइनर लहँगा - अनुष्का बुटिक में उपलब्ध ग्रीन कलर का ट्रेडिशनल लहँगा', caption: 'डिजाइनर लहँगा 4' }
      ],
      blowj: [
        { src: 'Image/Blowj/Blowj1.jpg', alt: 'डिजाइनर ब्लाउज - अनुष्का बुटिक में उपलब्ध नेट वर्क वाला डिजाइनर ब्लाउज', caption: 'डिजाइनर ब्लाउज 1' }
      ],
      chunni: [
        { src: 'Image/Chunni/Chunni1.jpg', alt: 'डिजाइनर चुन्नी - अनुष्का बुटिक में उपलब्ध जरी वर्क वाली चुन्नी', caption: 'डिजाइनर चुन्नी 1' },
        { src: 'Image/Chunni/Chunni2.jpg', alt: 'डिजाइनर चुन्नी - अनुष्का बुटिक में उपलब्ध प्रिंटेड डिजाइन वाली चुन्नी', caption: 'डिजाइनर चुन्नी 2' }
      ],
      chunri: [
        { src: 'Image/Chunri/Chunri1.jpg', alt: 'डिजाइनर चुनरी - अनुष्का बुटिक में उपलब्ध ट्रेडिशनल प्रिंट वाली चुनरी', caption: 'डिजाइनर चुनरी 1' },
        { src: 'Image/Chunri/Chunri2.jpg', alt: 'डिजाइनर चुनरी - अनुष्का बुटिक में उपलब्ध ब्राइट कलर वाली चुनरी', caption: 'डिजाइनर चुनरी 2' },
        { src: 'Image/Chunri/Chunri3.jpg', alt: 'डिजाइनर चुनरी - अनुष्का बुटिक में उपलब्ध हैंड प्रिंटेड चुनरी', caption: 'डिजाइनर चुनरी 3' },
        { src: 'Image/Chunri/Chunri4.jpg', alt: 'डिजाइनर चुनरी - अनुष्का बुटिक में उपलब्ध ज्योमेट्रिक डिजाइन वाली चुनरी', caption: 'डिजाइनर चुनरी 4' }
      ],
      gaghra: [
        { src: 'Image/Gaghra/Gaghra1.jpg', alt: 'डिजाइनर घाघरा - अनुष्का बुटिक में उपलब्ध लाल रंग का जरी वर्क वाला घाघरा', caption: 'डिजाइनर घाघरा 1' },
        { src: 'Image/Gaghra/Gaghra2.jpg', alt: 'डिजाइनर घाघरा - अनुष्का बुटिक में उपलब्ध गुलाबी रंग का फ्लोरल प्रिंट वाला घाघरा', caption: 'डिजाइनर घाघरा 2' },
        { src: 'Image/Gaghra/Gaghra3.jpg', alt: 'डिजाइनर घाघरा - अनुष्का बुटिक में उपलब्ध ग्रीन कलर का ट्रेडिशनल घाघरा', caption: 'डिजाइनर घाघरा 3' },
        { src: 'Image/Gaghra/Gaghra4.jpg', alt: 'डिजाइनर घाघरा - अनुष्का बुटिक में उपलब्ध ब्लू कलर का मॉडर्न डिजाइन घाघरा', caption: 'डिजाइनर घाघरा 4' }
      ],
      lacha: [
        { src: 'Image/Lacha/Lacha1.jpg', alt: 'डिजाइनर लाचा - अनुष्का बुटिक में उपलब्ध रेड कलर का ट्रेडिशनल लाचा', caption: 'डिजाइनर लाचा 1' },
        { src: 'Image/Lacha/Lacha2.jpg', alt: 'डिजाइनर लाचा - अनुष्का बुटिक में उपलब्ध पिंक कलर का एम्ब्रॉयडरी वाला लाचा', caption: 'डिजाइनर लाचा 2' },
        { src: 'Image/Lacha/Lacha3.jpg', alt: 'डिजाइनर लाचा - अनुष्का बुटिक में उपलब्ध गोल्डन वर्क वाला लाचा', caption: 'डिजाइनर लाचा 3' },
        { src: 'Image/Lacha/Lacha4.jpg', alt: 'डिजाइनर लाचा - अनुष्का बुटिक में उपलब्ध पर्पल कलर का मॉडर्न लाचा', caption: 'डिजाइनर लाचा 4' }
      ],
      'pila-pomcha': [
        { src: 'Image/PilaPomcha/PilaPomcha1.jpg', alt: 'डिजाइनर पीला पोमचा - अनुष्का बुटिक में उपलब्ध ट्रेडिशनल पीला पोमचा', caption: 'डिजाइनर पीला पोमचा 1' },
        { src: 'Image/PilaPomcha/PilaPomcha2.jpg', alt: 'डिजाइनर पीला पोमचा - अनुष्का बुटिक में उपलब्ध मॉडर्न डिजाइन वाला पीला पोमचा', caption: 'डिजाइनर पीला पोमचा 2' },
        { src: 'Image/PilaPomcha/Pomcha/Pomcha1.jpg', alt: 'डिजाइनर पोमचा - अनुष्का बुटिक में उपलब्ध ट्रेडिशनल डिजाइन वाला पोमचा', caption: 'डिजाइनर पोमचा 3' },
        { src: 'Image/PilaPomcha/Pomcha/Pomcha2.jpg', alt: 'डिजाइनर पोमचा - अनुष्का बुटिक में उपलब्ध मॉडर्न प्रिंट वाला पोमचा', caption: 'डिजाइनर पोमचा 4' }
      ],
      suit: [
        { src: 'Image/Suit/Suit1.jpg', alt: 'डिजाइनर सूट - अनुष्का बुटिक में उपलब्ध कॉटन प्रिंटेड सूट', caption: 'डिजाइनर सूट 1' },
        { src: 'Image/Suit/Suit2.jpg', alt: 'डिजाइनर सूट - अनुष्का बुटिक में उपलब्ध जॉर्जेट फैब्रिक सूट', caption: 'डिजाइनर सूट 2' }
      ]
    };

    // Modal functionality
    let currentCategory = '';
    let currentIndex = 0;

    function openModal(category, index) {
      currentCategory = category;
      currentIndex = index;
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImage');
      const captionText = document.getElementById('caption');
      const thumbnailsContainer = document.getElementById('thumbnails');
      
      modal.style.display = "block";
      modalImg.src = galleryData[category][index].src;
      modalImg.alt = galleryData[category][index].alt;
      captionText.innerHTML = galleryData[category][index].caption;
      
      // Create thumbnails
      thumbnailsContainer.innerHTML = '';
      galleryData[category].forEach((img, idx) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = img.src;
        thumbnail.alt = img.alt;
        thumbnail.className = 'thumbnail' + (idx === index ? ' active' : '');
        thumbnail.onclick = () => {
          currentIndex = idx;
          modalImg.src = img.src;
          modalImg.alt = img.alt;
          captionText.innerHTML = img.caption;
          updateActiveThumbnail();
        };
        thumbnailsContainer.appendChild(thumbnail);
      });
    }

    function closeModal() {
      document.getElementById('imageModal').style.display = "none";
    }

    function changeImage(n) {
      const images = galleryData[currentCategory];
      currentIndex = (currentIndex + n + images.length) % images.length;
      const modalImg = document.getElementById('modalImage');
      const captionText = document.getElementById('caption');
      
      modalImg.src = images[currentIndex].src;
      modalImg.alt = images[currentIndex].alt;
      captionText.innerHTML = images[currentIndex].caption;
      updateActiveThumbnail();
    }

    function updateActiveThumbnail() {
      const thumbnails = document.querySelectorAll('.thumbnail');
      thumbnails.forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === currentIndex);
      });
    }

    // Close modal when clicking outside the image
    window.onclick = function(event) {
      const modal = document.getElementById('imageModal');
      if (event.target == modal) {
        closeModal();
      }
    }

    // Mobile menu toggle
    document.addEventListener('DOMContentLoaded', function() {
      const menuToggle = document.createElement('button');
      menuToggle.className = 'menu-toggle';
      menuToggle.innerHTML = '<i class="fas fa-bars"></i> मेनू';
      const nav = document.querySelector('nav');
      nav.insertBefore(menuToggle, nav.firstChild);
      
      menuToggle.addEventListener('click', function() {
        const ul = document.querySelector('nav ul');
        ul.classList.toggle('show');
      });
    });

