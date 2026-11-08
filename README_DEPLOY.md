# Publicar la web de Ramón Merino Collado

## Estado actual · 8 de noviembre de 2026

La web ya está publicada en [ramonmerino.com](https://ramonmerino.com/). El repositorio es [IDarkmonI/ramonmerino-web](https://github.com/IDarkmonI/ramonmerino-web), público e independiente de Punto de Héroe. GitHub Pages sirve `main` → `/docs`; el archivo `docs/CNAME` conserva el dominio. HTTPS está activado y el certificado cubre la raíz y `www`.

Para actualizarla, utiliza este mismo repositorio y conserva `docs/CNAME` y `docs/.nojekyll`. Las secciones de alta inicial que siguen quedan como referencia; no hace falta volver a crear el repositorio ni reconfigurar el dominio para publicar cambios de contenido.

Punto de Héroe conserva su repositorio, dominio y contenido. En Porkbun, mantener los nameservers, los MX/TXT y el reenvío de correo. El dominio raíz usa un ALIAS a `IDarkmonI.github.io` y `www` un CNAME al mismo destino, una configuración admitida por GitHub Pages. Conservar también el TXT de verificación de GitHub.

La cuestión de domicilio y NIF sigue pendiente de confirmación, como se indica en la página legal. No se han inventado esos datos.

La vista previa es local. Usa **Abrir vista previa.cmd**, en la carpeta del proyecto, y el navegador abrirá [el Inicio local](http://127.0.0.1:8765/). También puedes ejecutar `python -m http.server 8765 --bind 127.0.0.1 --directory web/docs` desde la carpeta del proyecto.

## 1. Tras aprobar la vista previa

### Conservar otra web de la misma cuenta

Esta web debe subirse a un repositorio **nuevo e independiente**, llamado `ramonmerino-web`. No usar el repositorio de la otra web ni crear o sustituir `USUARIO_GITHUB.github.io`. Configurar Pages únicamente dentro del repositorio nuevo; no cambiar ajustes de Pages, ramas, archivos ni dominios de otros repositorios.

Subir los archivos y activar GitHub Pages son pasos distintos. Primero comprobar la cuenta, el nombre y la URL del repositorio nuevo. Después activar Pages cuando el autor autorice la publicación. Antes de cambiar DNS, anotar la URL y el dominio de la otra web y comprobar que no se están reutilizando.

Si la web principal de la cuenta usa un dominio personalizado, GitHub puede usar ese mismo dominio como base de las webs de proyecto que no tengan uno propio. Comprobar la URL que muestre Pages en el repositorio nuevo. No retirar el dominio de la web anterior para cambiar ese comportamiento; la nueva web puede tener su propio dominio en su repositorio.

[Tipos de webs en GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) · [Dominios de webs de proyecto](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages#using-a-custom-domain-across-multiple-repositories)

### Subida y activación

1. La programación y las pruebas pueden completarse en local. Antes de activar Pages, obtén la autorización del autor y resuelve la cuestión pendiente de domicilio y NIF conforme a la LSSI. Revisa también que los proveedores y los criterios de conservación descritos en `docs/aviso-legal-y-privacidad/index.html` correspondan al uso real. Las notas internas están en `AVISO_LEGAL_Y_PRIVACIDAD_BORRADOR.md`, en la carpeta local del proyecto.
2. En GitHub, crea un repositorio público llamado `ramonmerino-web` si vas a usar GitHub Free. En los pasos siguientes, sustituye `USUARIO_GITHUB` por tu usuario real.
3. En el repositorio nuevo, usa **Add file → Upload files** y sube la carpeta **docs** que está al lado de esta guía. Puedes incluir este README en la raíz del repositorio. Mantén intacta la estructura de carpetas y comprueba que estén `docs/index.html` y `docs/.nojekyll`. Si la interfaz omite el archivo oculto, créalo con **Add file → Create new file**, escribe `docs/.nojekyll` como ruta y guarda el archivo. Sube únicamente el contenido de `web`, dejando fuera el paquete de trabajo con textos fuente y materiales privados.
4. Ve a **Settings → Pages**. En **Source**, elige **Deploy from a branch**. Selecciona **main** y **/docs** y pulsa **Save**.
5. Cuando termine el despliegue, abre `https://USUARIO_GITHUB.github.io/ramonmerino-web/`. Prueba la navegación, el vídeo y las descargas con esa dirección antes de enlazar el dominio.

[Configurar la fuente de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 2. Asociar el dominio

1. Verifica la propiedad de `ramonmerino.com` desde **Settings → Pages** de tu cuenta de GitHub. GitHub te dará un registro TXT de verificación. Añádelo en Porkbun y conserva los TXT existentes.
2. En **Settings → Pages** del repositorio, escribe `ramonmerino.com` en **Custom domain** y guarda. Comprueba que GitHub haya creado `docs/CNAME` con el dominio. Si falta, créalo en esa ruta con una línea que contenga solo `ramonmerino.com`. Si luego trabajas con Git en local, incorpora ese archivo a tu copia.
3. En Porkbun, abre **Domain Management → DNS** para el dominio. Guarda una captura o exporta la configuración actual. Mantén los **nameservers**, el reenvío de correo y todos los registros **MX y TXT existentes**. Ajusta únicamente los registros web del dominio raíz y de `www` que entren en conflicto con los siguientes.

| Tipo | Host en Porkbun | Valor |
| --- | --- | --- |
| A | raíz, campo Host vacío | `185.199.108.153` |
| A | raíz, campo Host vacío | `185.199.109.153` |
| A | raíz, campo Host vacío | `185.199.110.153` |
| A | raíz, campo Host vacío | `185.199.111.153` |
| CNAME | `www` | `USUARIO_GITHUB.github.io` |

El destino de `www` lleva el nombre de usuario real y termina en `.github.io`. Si usas IPv6, añade también los cuatro registros AAAA documentados por GitHub para la raíz. Si prescindes de IPv6, retira los AAAA web antiguos que apunten a otro alojamiento. Cuando GitHub termine de comprobar el DNS y emita el certificado, activa **Enforce HTTPS**. La propagación y el certificado pueden tardar.

[Dominio personalizado en GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) · [Registros DNS en Porkbun](https://kb.porkbun.com/article/231-how-to-add-dns-records-on-porkbun) · [Reenvío de correo en Porkbun](https://kb.porkbun.com/article/10-how-to-set-up-email-forwarding-service)

## 3. Verificar el lanzamiento

- Abre `https://ramonmerino.com/` y `https://www.ramonmerino.com/`. Ambas direcciones deben funcionar con HTTPS y la segunda debe llevar al dominio principal.
- Desde otra cuenta de correo, envía un mensaje a `contacto@ramonmerino.com` y confirma que llega por reenvío.
- Comprueba Inicio, las seis fichas, las redes y el botón de Planeta. Descarga el mapa y la hoja, y abre el vídeo del estuche y los tres tráileres.
- Confirma que las carpetas de originales y reserva y el borrador legal quedan fuera del repositorio público.
- Antes de publicar las copias completas de la hemeroteca, confirma los permisos de reproducción de textos e imágenes de sus respectivos autores o medios. Sus páginas conservan `noindex,nofollow` y quedan fuera del sitemap.
- Comprueba las conexiones, las cabeceras y el almacenamiento del sitio alojado tras el despliegue. La comprobación local respalda la ausencia de banner en la versión actual. Si el alojamiento o un cambio posterior añade tecnologías que requieren consentimiento, revisa el aviso y la solución de consentimiento antes de mantenerlas activas.

## Mantenimiento

Pages sirve directamente el HTML y los recursos de `docs/`. El repositorio de GitHub no necesita instalar dependencias ni ejecutar una compilación. En el paquete local, tras editar los textos aprobados en `02_CONTENIDOS`, ejecuta `python herramientas/generar_web.py` para regenerar el HTML. Para cambiar un vídeo, actualiza su URL de origen y guarda su miniatura oficial en `web/docs/assets/youtube/ID_DEL_VIDEO.jpg` antes de regenerar.

La cabecera provisional usa la capa `.hero-backdrop`, separada del nombre del autor. Cuando estén aprobadas las 3–4 imágenes atmosféricas, esa capa puede contener las imágenes del carrusel con fundido aproximado cada siete segundos y una vista fija para quienes prefieran movimiento reducido.

La hemeroteca se genera desde `07_HEMEROTECA_FUENTES/hemeroteca/` y su `manifiesto.json`, conservados en el paquete local. El generador copia los documentos a `docs/hemeroteca/`, normaliza el botón de regreso y enlaza cada índice con su ficha. Mantén esa carpeta de fuentes para poder regenerar los documentos. Los HTML históricos conservan sus estilos e imágenes incrustados y se abren mediante enlaces locales.
