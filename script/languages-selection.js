const languageSelect = document.querySelector('.languages-select');
const languageOptions = document.querySelectorAll('.languages-select option');
console.log(languageSelect);

const chooseLanguage = () => {
  let lang = 'eng';
  languageOptions.forEach(item => {
    if (item.selected) {
      console.log(item.value);
      lang = item.value;
    }
  });
  return lang;
};

const getLanguageObject = (languages, lang)=>{
    const langContent = languages.find(element=>element[lang])
return langContent[lang]
}

const getLanguageTheme = (elements, languages, lang) => {
      const languageObject = getLanguageObject(languages, lang);
  elements.forEach(element => {
    const attribute = element.getAttribute('data-i18n');
    // const languageObject = getLanguageObject(languages, lang);

    console.log(attribute);
    element.textContent = languageObject[attribute];
    
  });
};

const setLanguageTheme = (elements,languages ) => {
  languageSelect.addEventListener('change', () => {
    console.log(languageOptions);
    const lang =  chooseLanguage();
    console.log(lang);
    getLanguageTheme(elements, languages, lang);
  });
};

export default setLanguageTheme;
