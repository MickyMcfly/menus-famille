v12.1 - Import URL avec proxy Netlify
- L’import URL tente d’abord le fetch direct
- Si CORS bloque, tentative via /.netlify/functions/fetch-recipe
- Ajout d’une Netlify Function fetch-recipe.js
- Ajout de netlify.toml
- Le fallback “Importer texte” reste disponible
