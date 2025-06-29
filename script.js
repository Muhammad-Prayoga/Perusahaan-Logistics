document.addEventListener('DOMContentLoaded', () => {
    window.changeLanguage = function(selectElement) {
        const selectedLanguage = selectElement.value;
        console.log(`Language changed to: ${selectedLanguage}`);

        if (selectedLanguage === 'en') {
            document.querySelector('.hero-content h1').textContent = 'Fast, Safe, and On Time';
            document.querySelector('.hero-content p').textContent = 'Best logistics delivery solutions across Indonesia.';
            document.querySelector('.navbar li a[href="#beranda"]').textContent = 'Home';
            document.querySelector('.navbar li a[href="#tentang"]').textContent = 'About';
            document.querySelector('.navbar li a[href="#layanan"]').textContent = 'Services';
            document.querySelector('.navbar li a[href="#kontak"]').textContent = 'Contact';
            document.querySelector('.section-title').textContent = 'About Us';
            document.querySelector('.about-section p').innerHTML = `
                <strong>Logistics</strong> is a company engaged in shipping and logistics services,
                committed to providing fast, safe, and reliable transportation solutions.
                Established in 2020, we have served various shipping needs for
                small, medium, and large companies throughout Indonesia. Supported by
                a modern fleet, advanced tracking systems, and an experienced professional team,
                we ensure every package arrives on time and in the best condition. We
                believe that efficient logistics is key to the success of your business supply chain.
                <strong>Logistics</strong> continues to innovate to provide logistics services that adapt to technological developments and market needs.
            `;
            document.querySelector('.services-container h2').textContent = 'Our Services';
            document.querySelector('.services-subtitle').textContent = 'We provide various integrated logistics solutions to meet your needs.';
            document.querySelectorAll('.service-card h3')[0].textContent = 'Shipping';
            document.querySelectorAll('.service-card p')[0].textContent = 'Land, Sea, Air';
            document.querySelectorAll('.service-card h3')[1].textContent = 'Distribution';
            document.querySelectorAll('.service-card p')[1].textContent = 'National Goods';
            document.querySelectorAll('.service-card h3')[2].textContent = 'Warehouse'; 
            document.querySelectorAll('.service-card p')[2].textContent = 'Management'; 
            document.querySelectorAll('.service-card h3')[3].textContent = 'E-Commerce';
            document.querySelectorAll('.service-card p')[3].textContent = 'Logistics';
            document.querySelector('#kontak h2').textContent = 'Contact Us';
            document.querySelector('#kontak p').textContent = 'Please contact us for more information.';
            document.querySelector('.kontak-info h3').textContent = 'Contact Information';
            document.querySelector('.kontak-info p:nth-of-type(1)').innerHTML = '<strong>Email:</strong> info@logistics.co.id';
            document.querySelector('.kontak-info p:nth-of-type(2)').innerHTML = '<strong>Phone:</strong> +62 812-3456-7890';
            document.querySelector('.kontak-info p:nth-of-type(3)').innerHTML = '<strong>Operating Hours:</strong> Monday - Friday, 08.00 - 17.00';
            document.querySelector('.footer-about h3').textContent = 'Logistics';
            document.querySelector('.footer-about p').textContent = 'Trusted logistics solution provider for fast and safe delivery across Indonesia.';
            document.querySelector('.footer-contact h4').textContent = 'Contact Us';
            document.querySelector('.footer-contact p:nth-of-type(1)').textContent = 'Email: info@logistics.co.id';
            document.querySelector('.footer-contact p:nth-of-type(2)').textContent = 'Phone: +62 812-3456-7890';
            document.querySelector('.footer-bottom p').textContent = '© 2025 Muhammad Prayoga Yuswantoro. All rights reserved.';


        } else if (selectedLanguage === 'id') {
            document.querySelector('.hero-content h1').textContent = 'Cepat, Aman, dan Tepat Waktu';
            document.querySelector('.hero-content p').textContent = 'Solusi pengiriman logistik terbaik ke seluruh Indonesia.';
            document.querySelector('.navbar li a[href="#beranda"]').textContent = 'Beranda';
            document.querySelector('.navbar li a[href="#tentang"]').textContent = 'Tentang';
            document.querySelector('.navbar li a[href="#layanan"]').textContent = 'Layanan';
            document.querySelector('.navbar li a[href="#kontak"]').textContent = 'Kontak';
            document.querySelector('.section-title').textContent = 'Tentang Kami';
            document.querySelector('.about-section p').innerHTML = `
                <strong>Logistics</strong> adalah perusahaan yang bergerak di bidang jasa pengiriman dan logistik,
                berkomitmen untuk memberikan solusi transportasi yang cepat, aman, dan terpercaya.
                Berdiri sejak 2020, kami telah melayani berbagai kebutuhan pengiriman baik untuk bisnis
                kecil, menengah, hingga perusahaan besar di seluruh Indonesia. Dengan didukung oleh
                armada modern, sistem pelacakan canggih, serta tim profesional yang berpengalaman,
                kami memastikan setiap paket sampai tepat waktu dan dalam kondisi terbaik. Kami
                percaya bahwa logistik yang efisien adalah kunci kesuksesan dalam rantai pasok bisnis
                Anda. <strong>Logistics</strong> terus berinovasi untuk menghadirkan layanan logistik yang adaptif terhadap perkembangan teknologi dan kebutuhan pasar.
            `;
            document.querySelector('.services-container h2').textContent = 'Layanan Kami';
            document.querySelector('.services-subtitle').textContent = 'Kami menyediakan berbagai solusi logistik terpadu untuk memenuhi kebutuhan Anda.';
            document.querySelectorAll('.service-card h3')[0].textContent = 'Pengiriman';
            document.querySelectorAll('.service-card p')[0].textContent = 'Darat, Laut, Udara';
            document.querySelectorAll('.service-card h3')[1].textContent = 'Distribusi';
            document.querySelectorAll('.service-card p')[1].textContent = 'Barang Nasional';
            document.querySelectorAll('.service-card h3')[2].textContent = 'Management';
            document.querySelectorAll('.service-card p')[2].textContent = 'Gudang';
            document.querySelectorAll('.service-card h3')[3].textContent = 'Logistik';
            document.querySelectorAll('.service-card p')[3].textContent = 'E-Commerce';
            document.querySelector('#kontak h2').textContent = 'Hubungi Kami';
            document.querySelector('#kontak p').textContent = 'Silakan hubungi kami untuk informasi lebih lanjut.';
            document.querySelector('.kontak-info h3').textContent = 'Informasi Kontak';
            document.querySelector('.kontak-info p:nth-of-type(1)').innerHTML = '<strong>Email:</strong> info@logistics.co.id';
            document.querySelector('.kontak-info p:nth-of-type(2)').innerHTML = '<strong>Telepon:</strong> +62 812-3456-7890';
            document.querySelector('.kontak-info p:nth-of-type(3)').innerHTML = '<strong>Jam Operasional:</strong> Senin - Jumat, 08.00 - 17.00';
            document.querySelector('.footer-about h3').textContent = 'Logistics';
            document.querySelector('.footer-about p').textContent = 'Penyedia solusi logistik terpercaya untuk pengiriman cepat dan aman ke seluruh Indonesia.';
            document.querySelector('.footer-contact h4').textContent = 'Hubungi Kami';
            document.querySelector('.footer-contact p:nth-of-type(1)').textContent = 'Email: info@logistics.co.id';
            document.querySelector('.footer-contact p:nth-of-type(2)').textContent = 'Telepon: +62 812-3456-7890';
            document.querySelector('.footer-bottom p').textContent = '© 2025 Muhammad Prayoga Yuswantoro. All rights reserved.';
        }
    };
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar ul li a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
