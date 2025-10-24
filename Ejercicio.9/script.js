const camisetas = [
    {
      equipo: "Xolos de Tijuana",
      descripcion: "Jersey local 2025 color rojo con detalles en negro, diseño oficial del club.",
      precio: 1499,
      imagen: "img/Xolos.jpg"
    },
    {
      equipo: "Chivas",
      descripcion: "Camiseta rayada roja y blanca, edición 2025.",
      precio: 1499,
      imagen: "img/chivas.jpeg"
    },
    {
      equipo: "Tigres UANL",
      descripcion: "Jersey oficial 2025 color amarillo con detalles azules.",
      precio: 1599,
      imagen: "img/Tigres.jpeg"
    },
    {
      equipo: "Pumas UNAM",
      descripcion: "Camiseta blanca con el puma dorado clásico al frente.",
      precio: 1399,
      imagen: "img/Pumas.jpeg"
    },
    {
      equipo: "Cruz Azul",
      descripcion: "Jersey azul con detalles en blanco y logo actualizado.",
      precio: 1499,
      imagen: "img/Cruz Azul.jpeg"
    }
  ];
  
  const catalogo = document.getElementById("catalogo");
  
  camisetas.forEach(c => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
  
    tarjeta.innerHTML = `
      <img src="${c.imagen}" alt="${c.equipo}">
      <h2>${c.equipo}</h2>
      <p>${c.descripcion}</p>
      <p class="precio">$${c.precio} MXN</p>
      <button class="boton">Comprar</button>
    `;
  
    catalogo.appendChild(tarjeta);
  });
  