

npx 
    es para ejecutar un comando de un módulo que ha sido 
    instalado localmente con

        npm i nodemon -D

    luego en consola

        npx nodemon src/index.js


...en el package.json

    scripts

        "dev" : "nodemon src/index.js"

    que se ejecuta con

        npm run dev



