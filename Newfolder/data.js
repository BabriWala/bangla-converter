document.querySelector('.convertBtn').addEventListener('click', () => {
  let str = document.querySelector('.unicode').value;
  const mapObj6 = {

    'h়': 'q',
    'h‡়': '‡q',
    'm…': 'm„',
    'K…': 'K…',
    'W়': 'o',
    'h‡়v': '‡qv',
    '–': 'Ñ',
    'Üy': 'Üz',
    'c…': 'c„',
    'e…': 'e„',
    'W‡়': '‡o',
    'wN&b': 'wNœ',
    '›`Ö': '›`ª',
    'dÖ': 'd«',
    '`¨y': '`y¨',
    '-': '-',
    
 
    
    

    
  }
  str = str.replace(/h়|h‡়|m…|K…|W়|h‡়v|–|Üy|c…|e…|W‡়|wN&b|›`Ö|dÖ|`¨y|-/gi, function (matched) {
    return mapObj6[matched];
  });

  if (document.querySelector('.unicode').value !== "") {
    document.querySelector('.bijoy').value = str;
  }
})

document.querySelector('.resetBtn').addEventListener('click', () => {
  document.querySelector('.bijoy').value = "";
  document.querySelector('.unicode').value = "";
})



