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
    '¯§…' : '¯§„',
    'oy' : 'o–',
    'Uy' : 'Uz',
    'Ky' : 'Kz',
    'Zy' : 'Zz',
    'Zª¨' : 'Î¨',
'g‡v' : '‡gv',
'c‡v' : '‡cv',
'i‡v' : '‡iv',
'M‡v' : '‡Mv',
'j‡v' : '‡jv',
'b‡v' : '‡bv',
'Z…' : 'Z…',
'g…' : 'g„',
'Z¨y' : 'Zz¨',
'q‡v' : '‡qv',
'dy': 'dz',
'f‡v' : '‡fv',
'hw়': 'wq',
'N‡v' : '‡Nv',
'¶y': 'ÿz',
'b…': 'b„',
'i‡v' : '‡iv',
'`…': '`„',
'h‡v' : '‡hv',
'm‡v' : '‡mv',
'nÖ': 'n«',
'c‡v' : '‡cv',
'Z‡v' : '‡Zv',
'óÖ': 'óª',
'b‡v' : '‡bv',
'e‡v' : '‡ev',
'k‡v' : '‡kv',
'UÖ': 'Uª',
'Ww়': 'wo',
'k…': 'k„',
    
    
  }
  str = str.replace(/h়|h‡়|m…|K…|W়|h‡়v|–|Üy|c…|e…|W‡়|wN&b|›`Ö|dÖ|`¨y|-|¯§…|oy|Uy|Ky|Zy|Zª¨|g‡v|c‡v|i‡v|M‡v|j‡v|b‡v|Z…|g…|Z¨y|q‡v|dy|f‡v|hw়|N‡v|¶y|b…|i‡v|`…|h‡v|m‡v|nÖ|c‡v|Z‡v|óÖ|b‡v|e‡v|k‡v|UÖ|Ww়|k„/gi, function (matched) {
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



