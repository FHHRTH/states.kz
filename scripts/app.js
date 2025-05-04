$(document).ready(function() {
  // Set active language
  function setActiveLanguage(lang) {
    $('.lang-btn').removeClass('active');
    $(`.lang-btn[data-lang="${lang}"]`).addClass('active');
  }

  // Set country content
  function setCountry(countryCode) {
    const country = countryContent[countryCode] || countryContent['US'];
    
    // Update testimonials
    $('#testimonial1-text').text(country.testimonials[0]);
    $('#testimonial2-text').text(country.testimonials[1]);
    $('#testimonial1-author').text(country.authors[0]);
    $('#testimonial2-author').text(country.authors[1]);
    
    // Update advantages
    $('#block1-list li').each(function(index) {
      $(this).html('<strong>' + country.advantages[index] + '</strong>');
    });
  }

  // Set language
  function setLanguage(lang) {
    const t = translations[lang] || translations['en'];
    
    // Update metadata
    document.title = t.title;
    $('meta[name="description"]').attr('content', t.description);
    
    // Update content
    $('#main-heading').text(t.heading);
    $('#main-tagline').text(t.tagline);
    
    $('#block1-heading').text(t.block1.heading);
    $('#btn-telegram').text(t.block1.btn1);
    $('#btn-whatsapp').text(t.block1.btn2);
    
    $('#block2-heading').text(t.block2.heading);
    $('#btn-partner').text(t.block2.btn);
    
    $('#block3-heading').text(t.block3.heading);
    $('#btn-contact').text(t.block3.btn);
    
    $('#footer').text(t.footer);
    
    // Set RTL if needed
    $('body').attr('dir', t.rtl ? 'rtl' : 'ltr');
    document.documentElement.lang = lang;
  }

  // Language switcher
  $('.lang-btn').click(function() {
    const lang = $(this).data('lang');
    const countryMap = {
      'ru': 'KZ',
      'kk': 'KZ',
      'en': 'US',
      'ar': 'AR',
      'zh': 'CN',
      'tr': 'TR'
    };
    
    setActiveLanguage(lang);
    setCountry(countryMap[lang]);
    setLanguage(lang);
    
    // Save preference
    localStorage.setItem('preferredLang', lang);
  });

  // Initialize
  const preferredLang = localStorage.getItem('preferredLang') || 'ru';
  $('.lang-btn[data-lang="' + preferredLang + '"]').click();
});
