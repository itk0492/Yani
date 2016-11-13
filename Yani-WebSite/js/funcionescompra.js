  function comprar(articulo, precio, cantidad) {
    if (cantidad <= 0) {
      rc = alert('La cantidad ingresada es incorrecta');
      return false;
    }
    if (confirm('¿Agregar '+cantidad+' '+articulo+' al carrito?')) {
      a = document.cookie.indexOf("Canasta");
      countbegin = (document.cookie.indexOf("=", a) + 1);
            i = document.cookie.indexOf(";", a);
            if (i == -1) {
                  i = document.cookie.length;
            }
                  document.cookie="Canasta="+document.cookie.substring(countbegin, i)+"["+articulo+","+precio+"#"+cantidad+"]";
    }
    return true;
  }

  function reestablecerCanasta() {
    a = document.cookie.indexOf("Canasta");
    document.cookie="Canasta=.";
  }

  function CargarFoto(img, ancho, alto){
  derecha=(screen.width-ancho)/2;
  arriba=(screen.height-alto)/2;
  string="toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width="+ancho+",height="+alto+",left="+derecha+",top="+arriba+"";
  fin=window.open(img,"",string);
}