# LINK DE NETLIFY
[CONTACT MANAGER ON NETLIFY](https://contactmanagerjohel.netlify.app/)

## HU1: Acceso a chatear por WhatsApp

Como usuario de ese tipo de agendas, quiero tener la facilidad de un acceso para chatear en ese instante con ese número a través de Whatsapp.
Criterios de Aceptación:
### Condición 1: 
En la vista Detalle de contacto, debe haber un botón de acceso
### Condición 2: 
Validamos que al hacer clic en el botón nos redirija a la ruta esperada.
### Condición 3: 
El botón debe ser accesible y acorde al entorno

## Conocimientos aplicados
En esta HU he mejorado un componente y pasado información del componente padre al componente hijo mediante props

## HU2: Agregar datos de la API al LocalStorage

Como usuario quiero que al momento de sincronizar la API y pasar los datos al LocalStorage, no quiero que se borre lo que ya tengo en el localstorage sino que se agregue del API
### Condición 1: 
El botón de sincronizar contactos no borrará lo que tengo en el local storage y evitará duplicados mediante el correo.
### Condición 2: 
Al hacer clic se tiene que validar con el mensaje predeterminado
### Condición 3: 
Los datos tanto de la API como del LocalStorage no deben eliminarse.

## Conocimientos aplicados

En esta HU, he manejado conceptos de localstorage, combinando con el manejo de la API para que los datos se junten y pueda permanecer aún recargando la página

## HU3: Agendar una reunión con algún contacto de la agenda

Como usuario quiero tener una opción de agendar una reunión y programarla en  un calendario, que quede grabada en el local storage y cuando vaya a ContactDetail me aparezca
### Condición 1: 
Debe haber un botón adicional que diga agendar reunión con contacto en ContactDetail.
### Condición 2: 
Al hacer clic tiene que llevarme a un componente donde haya un calendario en donde pueda elegir día y hora y un formulario de Detalles de la reunión, poder guardar con un botón la información.
###  Condición 3: 
Los datos guardados deben almacenarse en localstorage con un mensaje de confirmación de almacenamiento y cada vez que entre a contactdetail o contactpinned, verse la información almacenada.

## Conocimientos aplicados

En esta historia de usuario agregué un nuevo componente, utilice la libreria de react "DatePicker" para poder implementar un calendario, almacené en localstorage e hice que la información permanezca aún después de refrescar








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
