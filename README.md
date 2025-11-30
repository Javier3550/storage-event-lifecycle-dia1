# Proyecto: Configuración Avanzada de Infraestructura GCP – Día 1  
Automatización con Cloud Storage y Cloud Functions

Este repositorio contiene el código fuente, pruebas unitarias y documentación del proyecto de automatización con Google Cloud Platform (GCP).  
La evidencia visual completa (capturas de pantalla, diagramas y pasos gráficos) se encuentra en el archivo PDF incluido en este repositorio.

---

# 1. Descripción General

El objetivo de este proyecto es implementar una solución automatizada en GCP donde:

- Se crea y configura un proyecto en Google Cloud.
- Se habilitan las APIs necesarias: 
  Cloud Storage, Cloud Functions, Cloud Pub/Sub y Cloud Logging.
- Se implementa un esquema de permisos basado en el principio de mínimo privilegio (IAM).
- Se crea un bucket con reglas de ciclo de vida para eliminar archivos después de 30 días.
- Se desarrolla una Cloud Function en Node.js que se activa automáticamente al subir un archivo.
- La función extrae metadatos del archivo (nombre, tamaño, tipo) y los registra en Cloud Logging.
- Se agregan pruebas unitarias utilizando Jest.

Toda la documentación ilustrada se encuentra en: 
**ConfiguracionAvanzadaInfraestructuraGCP_DIA1.pdf**

---

# 2. Estructura del Proyecto

gcp-storage-project/

│── index.js

│── package.json

│── package-lock.json

│── tests/

│ └── onFileUpload.test.js

│── ConfiguracionAvanzadaInfraestructuraGCP_DIA1.pdf

│── README.md


---

# 3. Cloud Function (Código)


exports.onFileUpload = async (event, context) => {
  try {
    const file = event;

    const name = file.name || "desconocido";
    const size = file.size || 0;
    const contentType = file.contentType || "sin-tipo";

    console.log(`
      Archivo recibido:
      - Nombre: ${name}
      - Tamaño: ${size} bytes
      - Tipo: ${contentType}
    `);

    return {
      status: "OK",
      fileName: name,
    };

  } catch (error) {
    console.error("Error procesando archivo:", error);
    throw new Error("Cloud Function failed.");
  }
};
4. Despliegue de la Cloud Function


gcloud functions deploy onFileUpload \
  --gen2 \
  --runtime=nodejs20 \
  --region=us-central1 \
  --trigger-event-filters="type=google.cloud.storage.object.v1.finalized" \
  --trigger-event-filters="bucket=input-files-prueba" \
  --entry-point=onFileUpload
5. Pruebas Unitarias (Jest)
Archivo de prueba:


const { onFileUpload } = require("../index");

describe("Cloud Function onFileUpload", () => {

  test("procesa correctamente un archivo válido", async () => {
    const fakeEvent = {
      name: "archivo-prueba.txt",
      size: 1500,
      contentType: "text/plain",
    };

    const result = await onFileUpload(fakeEvent, {});
    expect(result.status).toBe("OK");
    expect(result.fileName).toBe("archivo-prueba.txt");
  });

  test("lanza un error cuando el evento es nulo", async () => {
    await expect(onFileUpload(null, {})).rejects.toThrow();
  });
});
Resultado esperado:


Test Suites: 1 passed
Tests:       2 passed


6. Documentación Completa (PDF)

Toda la documentación visual, incluyendo:

Capturas de pantalla del proceso

Configuración del proyecto

IAM y permisos

Bucket y reglas lifecycle

Diagrama del flujo de trabajo

Despliegue de la Cloud Function

Logs en ejecución

Resultados de pruebas unitarias

se encuentra en el archivo:

ConfiguracionAvanzadaInfraestructuraGCP_DIA1.pdf




7. Autor

Proyecto desarrollado por Javier como parte de la evaluación técnica en Google Cloud Platform.



