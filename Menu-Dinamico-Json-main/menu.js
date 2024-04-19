       // Obtener el elemento del DOM donde se mostrará el menú
       var menuElement = document.getElementById("menu");

       // Función para crear un elemento de menú
       function createMenuItem(item) {
           var li = document.createElement("li");
           var a = document.createElement("a");
           a.textContent = item.nombre;
           a.href = item.enlace;
           li.appendChild(a);

           // Si el elemento tiene un submenú, crearlo también
           if (item.subMenu) {
               var ul = document.createElement("ul");
               for (var i = 0; i < item.subMenu.length; i++) {
                   ul.appendChild(createMenuItem(item.subMenu[i]));
               }
               li.appendChild(ul);
           }

           return li;
       }

       // Crear el menú utilizando la estructura del objeto JSON
       var menuData = {
           "menu": [
               {
                    "nombre": "Inicio",
                    "enlace": "index.html"
               },
               {
                   "nombre": "Sobre nosotros",
                   "enlace": "sobre_nosotros.html",
               },
               {
                   "nombre": "Oferta formativa",
                   "enlace": "oferta_formativa.html"
               },
               {
                    "nombre": "Aulas de formacion",
                    "enlace": "aulas_formacion.html"
                },
                {
                    "nombre": "Contactanos",
                    "enlace": "contactos.html"
                }
               
           ]
       };

       


       var ul = document.createElement("ul");
       for (var i = 0; i < menuData.menu.length; i++) {
           ul.appendChild(createMenuItem(menuData.menu[i]));
       }
       
       menuElement.appendChild(ul);

       // En tu código JavaScript
        function createMenuItem(item) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.textContent = item.nombre;
            a.href = item.enlace;

            // Asignar la clase "inicio" al elemento "Inicio"
            if (item.nombre === "Inicio") {
                a.classList.add("inicio");
            }

            li.appendChild(a);

            // Si el elemento tiene un submenú, crearlo también
            if (item.subMenu) {
                var ul = document.createElement("ul");
                for (var i = 0; i < item.subMenu.length; i++) {
                    ul.appendChild(createMenuItem(item.subMenu[i]));
                }
                li.appendChild(ul);
            }

            return li;
}
