document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cotizacion-form").addEventListener("submit", function (e) {
        e.preventDefault();
        
        const placa = document.getElementById("placa").value.trim();
        const tipoVehiculo = document.getElementById("tipo-vehiculo").value;
        const modelo = parseInt(document.getElementById("modelo").value);
        const cilindraje = document.getElementById("cilindraje").value;
        
        if (!placa || !tipoVehiculo || !modelo || !cilindraje) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const valorSOAT = calcularSOAT(tipoVehiculo, modelo, cilindraje);
        alert(`Cotización: El valor del SOAT para el vehículo de placa ${placa} (${tipoVehiculo}) es de $${valorSOAT.toLocaleString("es-CO")}`);
    });

    document.getElementById("btnPagar").addEventListener("click", function () {
        window.location.href = "https://registro.pse.com.co/PSEUserRegister/";
    });

    document.getElementById("btnWhatsapp").addEventListener("click", function () {
        const numeroWhatsapp = "573001234567"; // Reemplaza con tu número
        const mensaje = "¡Hola! Quisiera más información sobre SOAT SURA.";
        const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    });
});

// Función para calcular el valor del SOAT
// Función para calcular el valor del SOAT
function calcularSOAT(tipo, modelo, cilindraje) {
    const anioActual = new Date().getFullYear();
    const antigüedad = anioActual - modelo;
    const esAntiguo = antigüedad >= 10;

    const tarifas = {
        automovil: {
            menos10: { "-1500": 445300, "1500-2500": 542400, "2500+": 633500 },
            mas10: { "-1500": 590500, "1500-2500": 674700, "2500+": 751300 }
        },
        camioneta: {
            menos10: { "-1500": 789600, "1500-2500": 942800, "2500+": 1105900 },
            mas10: { "-1500": 949200, "1500-2500": 1116800, "2500+": 1269000 }
        },
        taxi: {
            menos10: { "-1500": 267900, "1500-2500": 332700, "2500+": 429000 },
            mas10: { "-1500": 334500, "1500-2500": 410900, "2500+": 503200 }
        },
        motocicleta: {
            menos10: { "-1500": 230200, "1500-2500": 308500, "2500+": 830100 },
            mas10: { "-1500": 230200, "1500-2500": 308500, "2500+": 830100 }
        },
        camion: {
            menos10: { "-1500": 943400, "1500-2500": 1130000, "2500+": 1280000 },
            mas10: { "-1500": 1110000, "1500-2500": 1300000, "2500+": 1500000 }
        },
        bus: {
            menos10: { "-1500": 1220000, "1500-2500": 1450000, "2500+": 1750000 },
            mas10: { "-1500": 1300000, "1500-2500": 1600000, "2500+": 1900000 }
        },
        microbus: {
            menos10: { "-1500": 1000000, "1500-2500": 1200000, "2500+": 1500000 },
            mas10: { "-1500": 1100000, "1500-2500": 1300000, "2500+": 1600000 }
        },
        pickup: {
            menos10: { "-1500": 700000, "1500-2500": 850000, "2500+": 1050000 },
            mas10: { "-1500": 800000, "1500-2500": 950000, "2500+": 1150000 }
        },
        tractocamion: {
            menos10: { "-1500": 1980000, "1500-2500": 2450000, "2500+": 2800000 },
            mas10: { "-1500": 2250000, "1500-2500": 2700000, "2500+": 3000000 }
        },
        volqueta: {
            menos10: { "-1500": 1600000, "1500-2500": 2000000, "2500+": 2400000 },
            mas10: { "-1500": 1800000, "1500-2500": 2200000, "2500+": 2600000 }
        },
        bicicleta: {
            menos10: { "-1500": 200000, "1500-2500": 250000, "2500+": 300000 },
            mas10: { "-1500": 220000, "1500-2500": 270000, "2500+": 320000 }
        }
    };

    if (tipo === "motocicleta") {
        if (cilindraje === "-1500") return 230200;
        if (cilindraje === "1500-2500") return 308500;
        return 830100;
    }

    // Aquí se manejan los demás tipos de vehículos
    const clave = esAntiguo ? "mas10" : "menos10";
    return tarifas[tipo]?.[clave]?.[cilindraje] || 0;
}

