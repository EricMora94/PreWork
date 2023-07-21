Documentacion.

Primero para darle estilo a la pagina, se realizo un set de los elementos *, con la finalidad de evitar los marcos blancos en la aplicacion. Usando <margin:0> y <padding:0> , esto creando que la pagina abarque todo el espacio disponible.
Despues se arreglo el body para darle una direccion de columna a la aplicacion, esto usando <display;flex>  con <flex-direction:column>  para darle un formato de columnas. Se añadio un 100% del alto de la ventana con <heigth: 100vh> y un estilo de fuente <font-family: 'Courier New', Courier, monospace>.

Headers.
Para el header se utilizo  <display:flex> y <flex-direction: row> con un alineamiento de objetos <align-items: center> y un justificado <justify-content: space-between>, agregando un <padding: 15px> para evitar que quedara pegado a las orillas. Se le dio un color de fondo <background-color: gray> para que contrastara con el <main>. Esto creando un alineamiento horizontal para pantallas mayores a 768px, mientras que para las pantallas menores se uso un media query para hacer que estas tuvieran un alineamiento en columna, dando un mejor estilo. <@media (max-width: 767px) {
    header {
        flex-direction: column;
    }}>

Para el logo se le dio un <border-radius: 75px> para darle un aspecto redondo y un tamaño de 100px. Para el nombre de la empresa se le dio un tamaño de fuente <font-size: large>, un <color: aliceblue> para resaltar y un tamaño de fuente <font-weigth: bolder>. Finalizando con el nav, dandole un <dispay:flex> para justificarlo <justify-content: space-between> y un paddin de 10 <padding:10px> para darle ese espacio y estilo familiar.

Main.
Para el main se utilizo una estrategia similar al header, para que los objetos se pudieran colocar de una forma horizontal para pantallas grandes y vertical para las pantallas pequeñas. Utlizando igualmente un media query para estos.
Para la imagen del producto, bicicleta, se le dio un marco para resaltar la imagen, <border-radius:14px>, <border: solid 3px gray>  y un margen para mejor visualizacion.
Para el texto se le dio margenes para evitar que se pegara a los lados en la visualizacion mobile. Para el aside se le dio un margen <margin-top: 20px> y <margin-bottom: 20px> para la vista mobile no quedara pegado al footer ni al texto.

Footer
El pide de pagina se realizo con un display flex similar a los otros para darle una mejor visualizacion y creando una vista horizontal para dispositivos mayores a 768 y vertical para menores. Dandole un <background-color: gray> para diferenciarlo del main.

Media query.
Se agrego un mediaquery para el diseño responsivo, partiendo de la parte mobile, se fue diseñando deacuero a una vista vertical, ayudando a que no se perdiera la visualizacion y buena ux cuando cambiara a pantallas mas grandes. El media query tiene un <max-width: 767px> con esto queda perfecto el uso en pantallas mas pequeñas. 