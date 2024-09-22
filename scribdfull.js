
var Cookie = {
  'get': function (_0x5bf7bb) {
    let _0x2db298 = _0x5bf7bb + '=';
    let _0xd853c2 = decodeURIComponent(document.cookie);
    let _0x32969b = _0xd853c2.split(';');
    for (let _0xf17b87 = 0x0; _0xf17b87 < _0x32969b.length; _0xf17b87++) {
      let _0x513fe4 = _0x32969b[_0xf17b87];
      while (_0x513fe4.charAt(0x0) == " ") {
        _0x513fe4 = _0x513fe4.substring(0x1);
      }
      if (_0x513fe4.indexOf(_0x2db298) == 0x0) {
        return _0x513fe4.substring(_0x2db298.length, _0x513fe4.length);
      }
    }
    return '';
  },
  'set': function (_0x53f9a8, _0x4a3acc, _0x13f2cf = 0x7, _0x4b5f14 = '/', _0x78a622 = false) {
    const _0x4e19e7 = new Date();
    _0x4e19e7.setTime(_0x4e19e7.getTime() + _0x13f2cf * 0x18 * 0x3c * 0x3c * 0x3e8);
    let _0x283a72 = "expires=" + _0x4e19e7.toUTCString();
    if (_0x78a622 === false) {
      _0x78a622 = new URL(document.location).host.replace("www.", '');
    }
    document.cookie = _0x53f9a8 + '=' + _0x4a3acc + ';' + _0x283a72 + ";path=/;domain=" + _0x78a622 + ";Secure";
  },
  'has': function (_0x34f35b) {
    return !!this.get(_0x34f35b);
  }
};
var Url = {
  'get': function (_0x5da473) {
    var _0x1e3c43 = window.location.search.substring(0x1);
    var _0x170af9 = _0x1e3c43.split('&');
    var _0x20c0ee;
    var _0x104db8;
    for (_0x104db8 = 0x0; _0x104db8 < _0x170af9.length; _0x104db8++) {
      _0x20c0ee = _0x170af9[_0x104db8].split('=');
      if (_0x20c0ee[0x0] === _0x5da473) {
        return _0x20c0ee[0x1] === undefined ? false : decodeURIComponent(_0x20c0ee[0x1]);
      }
    }
    return false;
  },
  'getCleanUrl': function (_0xea490c = false) {
    var _0x511b29 = new URL(_0xea490c === false ? window.location.href : _0xea490c);
    var _0x358932 = _0x511b29.href.replace(_0x511b29.hash, '');
    return _0x358932.replace(_0x511b29.search, '');
  },
  'currentUrl': function () {
    return window.location.href;
  },
  'parseUrl': function (_0x486d83 = false) {
    return !_0x486d83 ? window.location : new URL(_0x486d83);
  },
  'encode': function (_0x18aa4e) {
    return _0x18aa4e !== '' ? encodeURIComponent(_0x18aa4e) : false;
  },
  'decode': function (_0x347830) {
    return _0x347830 !== '' ? decodeURIComponent(_0x347830) : false;
  },
  'go': function (_0x29f1b8) {
    if (_0x29f1b8 !== '') {
      window.location = _0x29f1b8;
    } else {
      return false;
    }
  },
  'isValidUrl': function (_0x47a629) {
    var _0xd7392c = _0x47a629.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return _0xd7392c !== null;
  },
  'getValidUrl': function (_0x45f48b) {
    if (_0x45f48b.substring(0x0, 0x2) === '//') {
      _0x45f48b = "http:" + _0x45f48b;
    }
    if (_0x45f48b[0x0] === '/') {
      _0x45f48b = "http:/" + _0x45f48b;
    }
    if (_0x45f48b.substring(0x0, 0x7) === "http://" || _0x45f48b.substring(0x0, 0x8) === "https://") {
      _0x45f48b = _0x45f48b;
    } else {
      var _0x2070ab = this.parseUrl(this.currentUrl());
      _0x45f48b = "http://" + _0x2070ab.hostname + '/' + _0x45f48b;
    }
    return _0x45f48b;
  }
};
function loader() {
  return "<div class=\"d-flex flex-row justify-content-center\"><div class=\"spinner-border\" style=\"width:25px;height:25px;\"></div><div class=\"ms-1\"> Downloading...</div></div>";
}
function getMessage(_0x2e3c41, _0x13c6af) {
  if (_0x2e3c41 == '' || _0x13c6af == '') {
    return false;
  }
  var _0x1c07c0 = {
    'success': "alert-success radius-2",
    'info': "alert-info radius-2",
    'secondary': "alert-secondary radius-2",
    'warning': "alert-warning radius-2",
    'error': "alert-danger radius-2",
    'danger': "alert-danger radius-2",
    'primary': "alert-primary radius-2",
    'dark': "alert-dark radius-2"
  };
  var _0x111c9b = {
    'success': "<i class=\"bi bi-check-circle-fill me-2\"></i>",
    'info': "<i class=\"bi bi-info-circle-fill me-2\"></i>",
    'secondary': "<i class=\"bi bi-stars me-2\"></i>",
    'warning': "<i class=\"bi bi-exclamation-circle-fill me-2\"></i>",
    'error': "<i class=\"bi bi-exclamation-triangle-fill me-2\"></i>",
    'danger': "<i class=\"bi bi-exclamation-triangle-fill me-2\"></i>",
    'primary': "<i class=\"bi bi-stars me-2\"></i>",
    'dark': "<i class=\"bi bi-star-fill me-2\"></i>"
  };
  return "\n            <div class=\"alert " + _0x1c07c0[_0x2e3c41] + " alert-dismissible m-1\" role=\"alert\">\n            <div class=\"alert-message\">" + _0x111c9b[_0x2e3c41] + " " + _0x13c6af + "</div>\n            <button type=\"button\" class=\"btn-close alert-close btn-sm shadow-none fs-6 p-2\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n            </div>\n        ";
}
function parse_doc_url(_0x43b27f) {
  _0x43b27f = decodeURIComponent(_0x43b27f);
  var _0x8d6c7c = _0x43b27f.match(/(\/(document|presentation|doc)\/([0-9]+)\/(.+):?$)/is);
  return _0x8d6c7c ? {
    'id': _0x8d6c7c[0x3],
    'title': encodeURIComponent(_0x8d6c7c[0x4].replace(/-/g, " ")),
    'url': _0x43b27f,
    'slug': _0x8d6c7c[0x4]
  } : false;
}
function doc_dl_link(_0x572daf) {
  var _0x130583 = parse_doc_url(_0x572daf);
  var _0x26926a = document.querySelector("meta[name=\"_TOKEN\"]").content;
  if (_0x130583) {
    for (k in _0x130583) {
      _0x26926a = _0x26926a.replace('[:' + k + ']', _0x130583[k]);
    }
    return _0x26926a;
  } else {
    return false;
  }
}
function dl_pdf(_0x33ed95) {
  if (_0x33ed95 !== '' && _0x33ed95.getAttribute("data-link")) {
    
    var a = prompt("Haga clic en el anuncio que dice ( ⬇ABRIR ESTE ANUNCIIO⬇ ) y luego copie la URL DEL ANUNCIO y péguelo aquí para poder liberar el enlace.");
    
    
// Obtiene la URL de la página actual
var currentPageUrl = window.location.href;
    
if (a.includes("https://es.scribd.com"  )){
 alert("Ingresaste un enlace equivocado");
}else if (a === currentPageUrl) {
    alert("No puedes ingresar el enlace de esta página");
} else if (a.includes("https://")){
    
    window.open(decodeURIComponent(_0x33ed95.getAttribute("data-link")), "_blank");
    
  
  }
else{
 alert("Ingresaste un enlace equivocado");
}

    
    
  }
}
var url_input = document.querySelector("#doc_url");
var result = document.querySelector(".result");
var message = document.querySelector(".message");
var dl_btn = document.querySelector(".dl_btn");
var dl_btn_current_text = dl_btn.innerHTML;
if (Url.get("doc_url")) {
  var doc_url = Url.get("doc_url");
  if (doc_url !== '') {
    url_input.value = doc_url;
  }
  if (doc_dl_link(doc_url)) {
    dl_btn.innerHTML = "<div class=\"d-flex flex-row justify-content-center\"><div class=\"spinner-border\" style=\"width:25px;height:25px;\"></div><div class=\"ms-1\"> Downloading...</div></div>";
    dl_btn.setAttribute("disabled", "true");
    var doc_dl_time = setInterval(() => {
      clearInterval(doc_dl_time);
      dl_btn.innerHTML = dl_btn_current_text;
      dl_btn.removeAttribute("disabled");
      message.innerHTML = getMessage("success", "Your <b>Download link</b> has been created successfully!");
      var _0x53a724 = parse_doc_url(doc_url);
      result.innerHTML = "\n                    <div class=\"m-auto p-4 rounded-2 mt-3 text-center border border-success bg-success bg-opacity-25\" style=\"max-width:640px;width:100%;\">\n                        <h3 class=\"fs-4 fw-bold d-block\"><i class=\"bi bi-filetype-pdf\"></i> " + decodeURIComponent(_0x53a724.title) + "</h3>\n                        <small class=\"d-block fs-5\">File type: <b>PDF</b></small>\n                        <button type=\"button\" class=\"btn btn-success btn-md shadow mt-2\" data-link=\"" + doc_dl_link(doc_url) + "\" onclick=\"dl_pdf(this)\"><i class=\"bi bi-filetype-pdf\"></i> Download PDF</button>\n                    </div>\n                ";
    }, Math.round(Math.random() * 0x1388));
  } else {
    message.innerHTML = getMessage("error", "Please enter valid document url from <b>scribd.com</b>");
  }
}

// Función para abrir la URL después de 30 segundos
function openUrlAfterDelay() {
    setTimeout(() => {
        window.open('https://www.cpmrevenuegate.com/buhtqmnx?key=644042556b387e772515e2186cbaeede', '_blank');
        localStorage.setItem(lastExecutionKey, Date.now());
    }, 30000); // 30000 milisegundos = 30 segundos
}

// Verifica si ha pasado una hora desde la última ejecución
const oneHour = 60 * 60 * 1000; // milisegundos en una hora
const lastExecutionKey = 'lastExecutionTime';
const lastExecution = localStorage.getItem(lastExecutionKey);

if (!lastExecution || Date.now() - lastExecution >= oneHour) {
    openUrlAfterDelay();
}
