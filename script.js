document.getElementById("btnPagar").addEventListener("click", function () {
  window.location.href = "https://registro.pse.com.co/PSEUserRegister/";
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cotizacion-form").addEventListener("submit", function (e) {
      e.preventDefault(); // Evita que el formulario se recargue
      const placa = document.getElementById("placa").value.trim();

      if (placa === "") {
          alert("Por favor, ingresa una placa válida.");
      } else {
          alert(`Cotización: El valor del SOAT para el vehiculo de placa: ${placa} es de $1000000`);
      }
  });

  // Configura el número de WhatsApp
  const numeroWhatsapp = "573001234567"; // Reemplaza con el número deseado

  // Agrega funcionalidad al botón
  document.getElementById("btnWhatsapp").addEventListener("click", function () {
      const mensaje = "¡Hola! Quisiera más información sobre SOAT SURA.";
      const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
  });
});
