DIA 1. CONFIGURACION AVANZADA DE LA INFRAESTRUCTURA DE GCP.
1.	Creación y configuracion del Proyecto:
Dirigirse a la URL console.cloud.google.com/.
Para crear un proyecto seleccionar el boton Crear o selecciona un proyecto.

<img width="312" height="121" alt="image" src="https://github.com/user-attachments/assets/c7b68ebf-f6fc-4bea-8398-4ede0080d9bd" />

Esto mostra una pestaña en la cual es posible visualizar los proyectos existentes o crear uno nuevo, para crear el nuevo proyecto dar click en proyecto nuevo, siendo el boton mostrado en la esquina superior izquierda.

<img width="468" height="138" alt="image" src="https://github.com/user-attachments/assets/b8745568-845a-40db-b056-b650d33a5364" />

Al seleccionar ese boton se mostraran las siguientes opciones donde se elegira el nombre del proyecto, al hacerlo y dar clic en el boton de crear proyecto mostrara la siguiente notificacion indicando el tiempo de espera de creacion del proyecto


<img width="325" height="130" alt="image" src="https://github.com/user-attachments/assets/2a31c909-89a1-488c-9933-e57891a4471a" />


Ahora seleccionar el menu de navegacion, APIs y servicios, APIs y servicios habilitados; al hacer esto mostrara los proyectos que se tienen disponibles.


<img width="285" height="217" alt="image" src="https://github.com/user-attachments/assets/436e644a-6e5b-489e-8d7a-5e15585d5571" /><img width="229" height="214" alt="image" src="https://github.com/user-attachments/assets/18e587e2-2930-4198-91c7-2b65915aa7cf" />









Seleccionar el proyecto STORAGE-EVENTS-LIFECYCLE para ahora poder habilitar las APIs: Cloud Storage, Cloud Functions, Cloud Pub/Su, Cloud Logging y Cloud Build. Seleccionar cloud shell (opcion superior izquierda de la pagina) para introducir lo siguiente. Seguido de eso, mostrara un mensaje de “Finalizado exitosamente” con la linea de la operacion

<img width="91" height="37" alt="image" src="https://github.com/user-attachments/assets/45286974-3e7c-4027-8467-06c98c2d05a5" />
<img width="468" height="63" alt="image" src="https://github.com/user-attachments/assets/2dd66263-2add-4108-a7d2-4c8fc7c07a98" />


Dentro del mismo cloud shell se creara el usuario con permisos minimos realizando lo siguiente:

<img width="468" height="33" alt="image" src="https://github.com/user-attachments/assets/cab6ab80-4f30-480f-9e88-6a78906f2c03" />


Con el usuario ya creado se procede a añadir sus respectivos permisos de la siguiente manera:

Utilizar el siguiente comando para crear una variable donde se guardara el ID del proyecto

<img width="471" height="50" alt="image" src="https://github.com/user-attachments/assets/196e3816-31ea-4340-bcda-e8f24cc39958" />


Escribir el siguiente comando para dar los permisos de subir archivos al bucket

<img width="468" height="60" alt="image" src="https://github.com/user-attachments/assets/da94700b-9bd6-4326-8815-cb88cb9a74bb" />


Escribir el siguiente comando para dar el permiso de leer metadatos dentro del bucket

<img width="468" height="43" alt="image" src="https://github.com/user-attachments/assets/b37f9bd2-7a76-46f6-8604-eaff7b465b1f" />


Escribir el siguiente comando para dar el permiso de las funciones sean ejecutadas.

<img width="469" height="44" alt="image" src="https://github.com/user-attachments/assets/d713b710-1820-4bf8-abdf-5420689d89f1" />


Escribir el siguiente comando para dar el permiso de que la Cloud Function escriba logs.

<img width="471" height="42" alt="image" src="https://github.com/user-attachments/assets/4c1157bd-0788-422b-b1a5-f1e6c24603a6" />


2.	Diseño de Almacenamiento y Automatización Inicial:
Crear un bucket en cloud storage.
Se creara un bucket, para ello ir a Menu de navegacion -> Cloud Storage -> Buckets


<img width="468" height="135" alt="image" src="https://github.com/user-attachments/assets/e3875c44-2b31-4e56-8e19-4cda2ed2efd7" />





Dar click en crear buckets.

<img width="184" height="43" alt="image" src="https://github.com/user-attachments/assets/00319e34-84b6-4c98-bf31-25e42d9aed82" />

Ahora introducir el nombre, en este caso INPUT-FILES-PRUEBA

<img width="261" height="78" alt="image" src="https://github.com/user-attachments/assets/3984d185-b31f-4fd3-a0de-6f9533abec19" />



Seleccionar la region US-CENTRAL1 del bucket

<img width="323" height="72" alt="image" src="https://github.com/user-attachments/assets/80e75e0f-4107-43fb-9260-598541be4bad" />


Seleccionar la manera de almacenar en estandar

<img width="413" height="294" alt="image" src="https://github.com/user-attachments/assets/6a319516-4b94-4d75-8852-24461cb8916a" />

Dejar la configuracion como muestra en la opcion de como controlar el acceso a los objetos

<img width="294" height="204" alt="image" src="https://github.com/user-attachments/assets/0fa5dd04-b6ed-4502-a1ea-5a8c56863235" />

Y ahora desmarcar la POLITICA DE ELIMINACION NO DEFINITIVA

<img width="302" height="214" alt="image" src="https://github.com/user-attachments/assets/3b33c3db-ddc1-4a69-92af-1a3729ddc160" />

Y por ultimo dar click en el boton Crear

<img width="275" height="104" alt="image" src="https://github.com/user-attachments/assets/2faa8803-fed9-4b22-b970-c3c0c0c3d57c" />




Al seleccionar el boton crear se mostrara la siguiente ventana, sin necesidad de seleccionar algo mas, dar click en confirmar.

<img width="284" height="203" alt="image" src="https://github.com/user-attachments/assets/66e6a940-79c0-4c86-bda0-4ecf30db8141" />

En la interfaz ahí mismo en el bucket, seleccionar Ciclo de vida (Lifecycle) -> Agregar regla (Add rule) -> Borrar objeto (Delete) -> Edad (Age) = 30

<img width="468" height="330" alt="image" src="https://github.com/user-attachments/assets/efa6af04-268b-4218-8089-be5dff23067f" />

Al seleccionar agregar una regla, se mostrara lo siguiente, para siguiente seleccionar la opcion borrar objeto

<img width="297" height="149" alt="image" src="https://github.com/user-attachments/assets/fcf065ce-7612-44a6-aca8-9b5d1dda82d8" />

En las condiciones del objeto que sera la opcion siguiente a seleccionar, marcar la casilla antigüedad y añadir 30

<img width="389" height="103" alt="image" src="https://github.com/user-attachments/assets/ed52109c-f2c0-46d6-b531-a702d19a99fa" />

Seleccionar el boton de crear, basicamente borrara archivos despues de 30 días.
 
<img width="468" height="172" alt="image" src="https://github.com/user-attachments/assets/77038a9c-3a89-41f5-8e8a-b429e94a5d47" />



Ahora, despues de crear la regla, seleccionar la opcion Permisos en los detalles de bucket con el objetivo de aplicar minimo privilegio al bucket.

<img width="358" height="130" alt="image" src="https://github.com/user-attachments/assets/1b2aa8ba-8860-467d-b3b6-7db9b726f13c" />

Marcar al usuario de prubeas que aparece en la seccion de permisos

<img width="468" height="34" alt="image" src="https://github.com/user-attachments/assets/ae1dd2b8-e2b8-4497-996a-ef696c1a23bf" />

Seleccionar la opcion otorgar acceso

<img width="168" height="38" alt="image" src="https://github.com/user-attachments/assets/80f18fba-1035-4d7c-9e5d-3ba8b97ab256" />


Seleccionar el service account

<img width="340" height="129" alt="image" src="https://github.com/user-attachments/assets/dca7a195-0988-4541-84df-07d3156e189f" />

Ahora sigue el momento de asignar los roles siendo 2 los que se buscan, storage object creator y storage object viewer
Seleccionar Cloud Storage -> Creador de objetos de Storage

<img width="268" height="89" alt="image" src="https://github.com/user-attachments/assets/ed42c2a6-0086-48c7-ad35-78da7805ce24" />



Despues de hacer eso, se mostrara lo siguiente, solo sera necesario dar click en guardar

<img width="222" height="226" alt="image" src="https://github.com/user-attachments/assets/e30feb97-4ccf-44bc-b8cd-fa62f3314682" />

Nuevamente otorgamos al mismo usuario acceso para agregar otro rol

<img width="101" height="43" alt="image" src="https://github.com/user-attachments/assets/2898e8ca-8a79-45bc-bb0a-991c601d542a" />

Seleccionar el mismo principal de la anterior con el rol Cloud Storage -> Visualizador de objetos de Storage y click en guardar.

<img width="311" height="278" alt="image" src="https://github.com/user-attachments/assets/03296d45-49d8-4b36-8bf1-161246ad83b5" />










DIAGRAMA REPRESENTATIVO DEL FLUJO COMPLETO

<img width="248" height="248" alt="image" src="https://github.com/user-attachments/assets/7a727e4f-ff6f-4f82-a2ce-8d06a6b91cb9" />

Desarrollar una Cloud Function  (en node.js) que se active automaticamente al subir un archivo al bucket.
Para esto, crear un archivo index.js en el Cloud Shell

<img width="468" height="17" alt="image" src="https://github.com/user-attachments/assets/d3dc6cfa-d5f4-4177-8664-81e2cd600ad8" />

En este archivo se ingreso el siguiente codigo

<img width="309" height="300" alt="image" src="https://github.com/user-attachments/assets/667b68e5-163d-45d9-aca8-715eac69d03d" />










Lo siguiente es, en el mismo Cloud Shell se crea un archivo package.json

<img width="468" height="21" alt="image" src="https://github.com/user-attachments/assets/bbb89933-6f6e-4d3f-8f10-bc25fe89c8ed" />

E ingresar lo siguiente

<img width="190" height="89" alt="image" src="https://github.com/user-attachments/assets/7321d78d-9a0d-4fd3-835a-62259a1b2ae0" />

Ahora se procese a realizar el despliegue la funcion

<img width="468" height="101" alt="image" src="https://github.com/user-attachments/assets/5527a732-6535-4f1b-bb35-80f6c411b18d" />

Para saber si se desplego correctamente solo es mirar el status

<img width="416" height="105" alt="image" src="https://github.com/user-attachments/assets/0cb32d5a-30f6-44d8-a9a2-16ad76bac369" />

Para probar la funcion, sera subir un archivo llamado prueba.txt siendo dentro del bucket

<img width="468" height="165" alt="image" src="https://github.com/user-attachments/assets/20397258-b7de-4dd3-a90d-79e3870f0b67" />

Seleccionar la opcion subir -> subir archivos

<img width="311" height="132" alt="image" src="https://github.com/user-attachments/assets/30cccf11-edc5-4b6d-b446-b5a750c4a217" />

Seleccionar el archivo a utilizar en la computadora, en este caso prueba.txt

<img width="468" height="238" alt="image" src="https://github.com/user-attachments/assets/a3cd0eef-431c-4e26-8a07-73b1a3b80e50" />

El archivo seleccionado ahora esta dentro del bucket

<img width="468" height="63" alt="image" src="https://github.com/user-attachments/assets/02da4766-7e0b-4a83-8485-7875a4aad591" />

Ahora en el explorador, buscar lo siguiente “Explorador de registros”

<img width="468" height="66" alt="image" src="https://github.com/user-attachments/assets/0644fee5-967e-42a8-94ed-55847cc65438" />


Ya dentro del explorador de registros, en la barra de busqueda agregar 

y despues dar click en el boton Ejecutar consulta
para seguido mostrar los siguientes datos, donde indica el archivo, su peso y la informacion que se requeria.

<img width="468" height="243" alt="image" src="https://github.com/user-attachments/assets/c18b669b-c766-4463-92df-1fd45e8d1021" />


Aquí con mas detalle el archivo de prueba.txt que se subio.

<img width="468" height="14" alt="image" src="https://github.com/user-attachments/assets/3450ac7f-fde5-43da-af0e-660e6f47d49c" />


3.	Pruebas y documentacion
Implementar pruebas basicas unitarias para la Cloud Function.
Instalar Jest como dependencia usando NPM –save-dev jest

<img width="468" height="16" alt="image" src="https://github.com/user-attachments/assets/39f948da-0a96-4941-a4b7-9db1e9e318ad" />


Abrir el package.json que se crearon en los pasos anteriores.

<img width="468" height="17" alt="image" src="https://github.com/user-attachments/assets/1dce9a39-d2e0-4a73-9edc-c70f1f9e1fe5" />


Y colocar lo siguiente dentro del archivo

<img width="307" height="236" alt="image" src="https://github.com/user-attachments/assets/e71b114c-e54b-4f90-8de8-65687d0a25a8" />


Crear una carpeta para las pruebas

<img width="468" height="16" alt="image" src="https://github.com/user-attachments/assets/78f2df76-975a-4e9b-bf39-c6c5f8d1abc3" />

Ahora crear el archivo dentro de la carpeta tests

<img width="468" height="16" alt="image" src="https://github.com/user-attachments/assets/5351acd2-7051-43da-9816-34d3aa84f7f9" />

agregar lo siguiente dentro del archivo. Lo que se busca es tener un flujo correcto y un flujo de error bien manejado y logueado

<img width="278" height="282" alt="image" src="https://github.com/user-attachments/assets/51b72a6a-c349-40a1-8778-580ca6df9a53" />



En el cloud shell se veria asi

<img width="340" height="227" alt="image" src="https://github.com/user-attachments/assets/9cd806ea-532d-4bfb-a606-bf7518d4f0f8" />

 
Entonces, ahora para poder analizar si funciono o no todo esto, es momento de ejecutar las pruebas escribiendo npm test en la raiz donde se tiene package.json mostrando el siguiente resultado.  
 

<img width="468" height="233" alt="image" src="https://github.com/user-attachments/assets/42d04b32-dddd-45aa-8f27-e4f6e77b4221" />


<img width="468" height="222" alt="image" src="https://github.com/user-attachments/assets/133b2403-8033-4783-8afe-a9724ef5fb98" />
