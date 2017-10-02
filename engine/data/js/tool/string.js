/*
 * CaMykS Engine
 * Developed by		: camyks.net
 * Author		    : CaMykS Team
 * CaMykS Version	: 1.0a
 * Object Version	: 1.0
 * Object Type		: Engine / JS Lib
 * Creation Date	: Fev 2006
 * Last Modif Date	: Jul 2016
 *
 * String javascript methods
*/

/* 
 * prototype trim method to String object
 * @access public
 * return string
 */
String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g,'');
}

/*
 * prototype untrim method to string object,
 * complete word to given length, with given char
 * @access public
 * @param int slen
 * @param chr schar
 * @param int sposition
 */

String.prototype.untrim = function(slen, schar, sposition) {
  v = this;
  while ( v.length < slen ) {
    if ( sposition == 0 ) {
      v = schar+this;
    } else if ( sposition == 1 ) {
      v += schar;
    } else {
      break;
    }
  }
  return v;
}

/*
 * prototype method to strip tags 
 * @param string allowed
 * @return string
 */
String.prototype.strip_tags = function(allowed) {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('')

  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
  var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi

  return this.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
  });
}

/*
 * pad element with given chars
 * @param int len      - 1
 * @param string str   - ' '
 * @param string pos   - left / right
 * @return string
 */
String.prototype.pad = function(len, str, pos) {
  if (!pos || pos != 'right') pos = 'left';
  if (!str || str == '') str = ' ';
  if (!len) len = 1;

  count = (len - this.length)/str.length;
  if (count <= 0)
    return this;
  v = this;
  if (pos == 'right')
    for (i=0; i<count; i++) v = v + str;
  else
    for (i=0; i<count; i++) v = str+v;
    
  return v;
}

/*
 * replace all 
 * @param string pattern
 * @param string replacement
 * @return string
 */
String.prototype.replaceAll = function(pattern, replacement) {
    var target = this;
    return target.split(pattern).join(replacement);
};
 
/* 
 * trim string 
 * @access public
 * @param string string
 * return string
 */
function string_trim(string) {
  return string.replace(/(^\s*)|(\s*$)/g,'');
}

/* 
 * complete word to given length, with given char
 * @access public
 * @param string string
 * @param int slen
 * @param chr schar
 * @param int sposition
 * return string
 */
function string_untrim( string, slen, schar, sposition ) {
  while ( string.length < slen ) {
    if ( sposition == 0 ) {
      string = schar+string;
    } else if ( sposition == 1 ) {
      string += schar;
    } else {
      break;
    }
  }
  return string;
}

/*
 * strip tags from given value
 * @param string string
 * @param string allowed
 * @return string
 */
function string_stripTags (string, allowed) {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
  var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi

  return string.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
  });
}

/*
 * format string number 
 * @param mixed number
 * @param integer decimals
 * @param string decimalsSep
 * @param string thousandsSep
 * @return string
 */
function string_numberFormat (number, decimals, decimalsSep, thousandsSep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number;
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
  var dec = (typeof decimalsSep === 'undefined') ? '.' : decimalsSep;
  var s = '';

  var toFixedFix = function (n, prec) {
    var k = Math.pow(10, prec);
    return '' + (Math.round(n * k) / k).toFixed(prec);
  }

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }

  return s.join(dec)
} 
