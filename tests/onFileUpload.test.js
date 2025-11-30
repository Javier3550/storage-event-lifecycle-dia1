// Importamos la función desde index.js
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
