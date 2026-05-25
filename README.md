# La música y el alma

Pagina web estatica para el programa de mano digital del recital de grado **La música y el alma: una oda**, interpretado por Heidy Julieth Hernández Elejalde.

## Estructura

- `index.html`: contenido y secciones principales.
- `styles.css`: colores, tipografia, responsive y componentes visuales.
- `script.js`: navegacion entre secciones, menu movil y boton para volver arriba.
- `assets/affiche.jpeg`: afiche usado como imagen principal.

## Probar en local

Puedes abrir `index.html` directamente en el navegador.

Tambien puedes usar un servidor local:

```bash
python -m http.server 3000
```

Luego abrir:

```text
http://localhost:3000
```

## Desplegar en Vercel

1. Sube este repositorio a GitHub.
2. Entra a Vercel e inicia sesion.
3. Selecciona **Add New Project**.
4. Importa el repositorio `MusicaYAlma`.
5. Como es un sitio estatico, no necesitas configurar framework ni comandos especiales.
6. Publica el proyecto.
7. Copia la URL final de Vercel y usala para generar el codigo QR.

## Antes de publicar

- Revisar nombres de musicos e instrumentos.
- Confirmar fecha, hora y sala.
- Confirmar textos pendientes:
  - `An die Musik`
  - `Negrina / Gurumbe`
- Probar la pagina desde un celular.
- Probar que el QR abra la URL correcta.
