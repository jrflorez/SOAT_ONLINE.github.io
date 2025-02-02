/* Estilo general */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Navbar */
  .navbar {
    background-color: #004ea5;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  
  .navbar h1 {
    margin: 0;
  }
  
  .navbar ul {
    list-style: none;
    display: flex;
    gap: 15px;
    margin: 0;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  /* Hero Section */
  .hero {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    background-color: #eaf4fc;
}
  
  .hero-content {
    max-width: 50%;
  }
  
  .hero-content h2 {
    color: #004ea5;
  }
  
  .hero-content button {
    background-color: #ffda44;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .alert {
    background-color: #fff4d1;
    padding: 15px;
    margin-top: 10px;
    border: 1px solid #f5c542;
    border-radius: 5px;
  }
  
  /* Cotización Section */
  .cotizacion {
    background-color: white;
    padding: 20px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    max-width: 90%;
    margin: auto;
  }
  
  .cotizacion h3 {
    margin-top: 0;
  }
  
  .cotizacion form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .cotizacion input {
    padding: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
  }
  
  .cotizacion button {
    background-color: #004ea5;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  /* Footer */
  footer {
    background-color: #004ea5;
    color: white;
    text-align: center;
    padding: 15px;
  }
  
  footer ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  footer li {
    display: inline;
    margin: 0 10px;
  }
  
  footer a {
    color: white;
    text-decoration: none;
  }

  /* Botón de WhatsApp */
.whatsapp-btn {
    margin-top: 20px;
    text-align: center;
  }
  
  #btnWhatsapp {
    background-color: #25d366;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  #btnWhatsapp:hover {
    background-color: #1ebe57;
  }
  .whatsapp-btn {
    margin-top: 20px;
    text-align: center;
  }
  
  #btnPagar {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}
  
#btnPagar:hover {
  background-color: #218838;
}
