var language; 
function getLanguage() {
(localStorage.getItem('language') == null) ? setLanguage('en') : false;
$.ajax({ 
url:  "language/" + localStorage.getItem('language') + '.json', 
dataType: 'json', async: true, dataType: 'json', 
    success: function (lang) { 
        language = lang
        $('.div1').text(language.date);
        $('#setlES').text(language.esp);
        $('#setlEN').text(language.eng);
    } });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    getLanguage();
}
$(document).ready(function(){
    getLanguage();
});