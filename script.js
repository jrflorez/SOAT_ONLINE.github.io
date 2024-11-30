document.getElementById("cotizacion-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se recargue
    const placa = document.getElementById("placa").value;
  
    if (placa.trim() === "") {
      alert("Por favor, ingresa una placa válida.");
    } else {
      alert(`Cotización generada para la placa: ${placa}`);
    }
  });
  