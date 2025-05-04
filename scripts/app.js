$(document).ready(function() {
  // Set country content
  function setCountry(countryCode) {
    const country = countryContent[countryCode] || countryContent['KZ'];
    
    // Update testimonials with random growth
    $('#testimonial1-text').text(country.testimonials[0]);
    $('#testimonial2-text').text(country.testimonials[1]);
    $('#testimonial1-author').text(country.authors[0]);
    $('#testimonial2-author').text(country.authors[1]);
    
    // Update advantages list
    $('#block1-list li').each(function(index) {
      $(this).html(`<strong>${country.advantages[index]}</strong>` + 
        (index === 0 ? " - работаем на результат" : 
         index === 1 ? " - идеальный акцент" : 
         index === 2 ? " - полный контроль" : 
         index === 3 ? " - видите каждую сделку" : 
         " - комплексное решение"));
    });
  }

  // Set language
  function setLanguage(lang) {
    $('.lang-btn').removeClass('active');
    $(`#lang-${lang}`).addClass('active');
    
    document.documentElement.lang = lang;
    
    // Set RTL for Arabic
    if (lang === 'ar') {
      document.body.dir = 'rtl';
    } else {
      document.body.dir = 'ltr';
    }
    
    const t = translations[lang] || translations['kk'];
    
    $('#page-title').text(t.title);
    $('#page-description').attr('content', t.description);
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
  }

  // Default to Kazakhstan
  setCountry('KZ');
  setLanguage('kk');
  
  // Language switcher
  $('#lang-kk').click(() => {
    setCountry('KZ');
    setLanguage('kk');
  });
  $('#lang-ru').click(() => {
    setCountry('KZ');
    setLanguage('ru');
  });
  $('#lang-en').click(() => {
    setCountry('US');
    setLanguage('en');
  });
  $('#lang-cn').click(() => {
    setCountry('CN');
    setLanguage('en'); // Chinese version would need additional translation
  });
  $('#lang-ar').click(() => {
    setCountry('AE');
    setLanguage('en'); // Arabic version would need additional translation
  });
  $('#lang-tr').click(() => {
    setCountry('TR');
    setLanguage('en'); // Turkish version would need additional translation
  });
});
