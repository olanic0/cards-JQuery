$(document).ready(function() {
  // Cuando el documento HTML esté completamente cargado y listo para manipular

  // Arreglo de objetos que representa a los clientes
  const clientes = [
    {
      nombre: "Nicolás",
      apellido: "Acuña",
      email: "nacumar@aulaestudio.es",
      imagen: "img/davidlaid.png"
    },
    {
      nombre: "Javier María",
      apellido: "Pastor",
      email: "jmpasrod@aulaestudio.es",
      imagen: "img/perroviejo.png"
    },
    {
      nombre: "Noel",
      apellido: "Santiañez",
      email: "nsanrod@aulaestudio.es",
      imagen: "img/yonki.png"
    },
    {
      nombre: "Adrian",
      apellido: "Condines",
      email: "aconcel@aulaestudio.es",
      imagen: "img/dimaria.png"
    },
    {
      nombre: "Bruno",
      apellido: "Fandiño",
      email: "bfanvei@aulaestudio.es",
      imagen: "img/rubio.png"
    },
    {
      nombre: "Birhan",
      apellido: "Fernández",
      email: "bferfer@aulaestudio.es",
      imagen: "img/negro.png"
    },
    {
      nombre: "Eder",
      apellido: "Martinez",
      email: "emarcas@aulaestudio.es",
      imagen: "img/tiotodofeo.png"
    },
    {
      nombre: "Angel",
      apellido: "Rodriguez",
      email: "arodpan@aulaestudio.es",
      imagen: "img/gnomofeo.png"
    },
    {
      nombre: "Roberto",
      apellido: "Castro",
      email: "roberto@aulaestudio.es",
      imagen: "img/gigahiperchad.png"
    }
  ];

  // Función para mostrar los clientes en la página
  function mostrarClientes(textoBusqueda) {
    // Limpia el contenedor de resultados
    $('#results').html('');

    // Si no hay texto de búsqueda, muestra todos los clientes
    if (textoBusqueda.trim() === '') {
      clientes.forEach(function(cliente) {
        // Crea una tarjeta para cada cliente y la agrega al contenedor de resultados
        const card = $('<div class="card"></div>');
        card.append(`<img src="${cliente.imagen}" alt="Imagen de ${cliente.nombre}">`);
        card.append(`<p>${cliente.nombre} ${cliente.apellido}</p>`);
        card.append(`<p>Email: ${cliente.email}</p>`);
        $('#results').append(card);
      });
      return;
    }
    
    // Filtra los clientes según el texto de búsqueda
    const clientesFiltrados = clientes.filter(function(cliente) {
      const nombreCompleto = `${cliente.nombre} ${cliente.apellido}`.toLowerCase();
      return nombreCompleto.includes(textoBusqueda.toLowerCase());
    });

    // Para cada cliente filtrado, crea una tarjeta y la agrega al contenedor de resultados
    clientesFiltrados.forEach(function(cliente) {
      const card = $('<div class="card"></div>');
      card.append(`<img src="${cliente.imagen}" alt="Imagen de ${cliente.nombre}">`);
      card.append(`<p>${cliente.nombre} ${cliente.apellido}</p>`);
      card.append(`<p>Email: ${cliente.email}</p>`);
      $('#results').append(card);
    });
  }

  // Asigna un controlador de eventos para el evento de entrada en el campo de búsqueda
  $('#searchInput').on('input', function() {
    // Llama a la función mostrarClientes con el valor del campo de búsqueda como argumento
    mostrarClientes($(this).val());
  });

  // Muestra todos los clientes al cargar la página
  mostrarClientes('');
});
