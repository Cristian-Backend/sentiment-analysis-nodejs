# Análisis de Sentimientos con Node.js y Xenova

Este proyecto implementa un análisis de sentimientos utilizando Node.js, Express y el modelo de aprendizaje automático `Xenova/distilbert-base-uncased-finetuned-sst-2-english`. El sistema permite a los usuarios ingresar un texto y recibir una predicción sobre su sentimiento (positivo o negativo).

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript en el servidor.
- **Express**: Framework de Node.js para construir aplicaciones web.
- **EJS**: Motor de plantillas para generar HTML.
- **Xenova Transformers**: Biblioteca para modelos de aprendizaje automático.

## Estructura del Proyecto

sentiment-analysis-nodejs/ │ ├── .cache/ # Carpeta donde se almacenan los modelos descargados │ └── Xenova/ │ └── distilbert-base-uncased-finetuned-sst-2-english/ │ ├── config.json # Configuración del modelo │ ├── tokenizer.json # Tokenizador del modelo │ ├── tokenizer_config.json # Configuración del tokenizador │ └── onnx/ │ └── model_quantized.onnx # Modelo de aprendizaje automático │ ├── node_modules/ # Dependencias del proyecto │ ├── views/ # Vistas EJS │ └── index.ejs # Vista principal de la aplicación │ ├── package.json # Archivo de configuración del proyecto ├── package-lock.json # Archivo de bloqueo de dependencias ├── .gitattributes # Configuración de atributos de Git └── index.js # Archivo principal de la aplicación



## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Cristian-Backend/sentiment-analysis-nodejs.git
   cd sentiment-analysis-nodejs

## instala dependencias
npm install



## Uso
Inicia el servidor:

node index.js


Abre tu navegador y accede a http://localhost:8000.

Ingresa un texto en el formulario y envíalo para obtener la predicción de sentimiento.

Sobre la Carpeta .cache
La carpeta .cache es donde se almacenan los modelos de aprendizaje automático descargados. Cuando ejecutas el proyecto por primera vez, el modelo Xenova/distilbert-base-uncased-finetuned-sst-2-english se descarga automáticamente en esta carpeta. Esto permite que el modelo esté disponible localmente para su uso sin necesidad de descargarlo nuevamente en futuras ejecuciones.

Es importante tener en cuenta que la carpeta .cache puede contener archivos grandes (como el modelo ONNX), por lo que se recomienda agregarla al archivo .gitignore si se planea evitar subirla a un repositorio remoto.


SITIO WEB como se veria la aplicacion
https://sentiment-analysis-nodejs.onrender.com/