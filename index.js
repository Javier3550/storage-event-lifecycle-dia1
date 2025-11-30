exports.onFileUpload = async (event, context) => {
  try{
    const file = event;
    //extraer metadatos
    const name = file.name || "desconocido";
    const size = file.size || 0;
    const contentType = file.contentType || "sin-tipo";
    console.log(`Archivo procesado: Nombre: ${name} Tamaño: ${size} bytes Tipo: ${contentType}`);

    return {
      status: "OK", fileName: name,
    };

  } catch (error) {
    console.error("Error rpocesando archivo: ", error);
    throw new Error("Cloud Function Failed.");
    
  }


};
