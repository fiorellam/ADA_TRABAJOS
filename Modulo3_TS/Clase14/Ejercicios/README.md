touch# Instalacion 
1. npm init -y (Para inicializar un proyecto node.js, crea el package.json)
2. npm install express
3. npm install -D typescript ts-node ts-node-dev @types/express
4. npx tsc --init (crea tsconfig.json)
5. Estructura proyecto
    proyecto/
        src/
            index.ts
            routes/
                quotes-router.ts
            controllers/
                quotes-controller.ts
            models/
                quotes-model.ts
            database/
                quotes.json
            middlewares/
                auth-middleware.ts
                validate-middleware.ts
                error-middleware.ts
    package.json
    tsconfig.json
