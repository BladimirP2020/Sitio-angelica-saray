SITIO WEB ESTÁTICO — ANGÉLICA SARAY (rediseño 2026)

QUÉ CAMBIÓ
- Diseño renovado con enfoque "legal-tech": tipografía serif (Fraunces) para
  títulos, sans (IBM Plex Sans) para texto y mono (IBM Plex Mono) para
  etiquetas/fechas al estilo de referencias de expediente.
- Elemento distintivo: un panel de "estado del proceso" en el hero, que
  muestra visualmente las 4 etapas de acompañamiento (Escucha, Diagnóstico,
  Estrategia, Acompañamiento).
- Menú móvil funcional (antes la navegación desaparecía en celular sin
  ninguna forma de acceder a ella).
- Sección nueva "Noticias" (#noticias): 3 tarjetas de actualidad jurídica.
- Sección nueva "Eventos" (#eventos): agenda de talleres/conversatorios con
  botón "Reservar cupo" que abre WhatsApp.
- Botón flotante de WhatsApp visible en todo el sitio.
- Bloque de contacto directo: WhatsApp (+57 311 226 2633) y correo
  (angelica.saray.lawyer@gmail.com), ambos como enlaces "click to chat" /
  "mailto".
- Redes sociales con el usuario angelica.saray.lawyer en LinkedIn, Instagram,
  TikTok y Facebook (las más usadas actualmente por profesionales del
  derecho en Colombia). Estos son enlaces construidos a partir del usuario
  que indicaste: verifica que cada perfil exista y ajusta la URL exacta si
  difiere (por ejemplo, LinkedIn suele requerir un identificador propio, no
  siempre el mismo handle que Instagram/TikTok).
- El logo en PNG (assets/angelica-saray-logo.png) no estaba entre los
  archivos subidos, así que se reemplazó por un monograma "AS" en SVG
  (se ve nítido a cualquier tamaño y no requiere imagen). Si tienes un logo
  real, puedo integrarlo en su lugar.

ARCHIVOS
- index.html: estructura y textos.
- styles.css: diseño, colores, tipografía y adaptación móvil.
- script.js: menú móvil, formulario y animaciones de aparición al hacer scroll.

LOGO
Se incorporó el logo real que compartiste (escudo con las balanzas, la "A/S"
y la familia). Quedó recortado en dos versiones dentro de assets/:
- logo-mark.png: solo el emblema, usado en el encabezado, el pie de página,
  el panel del hero y el medallón de la sección "Perfil".
- logo-full.png: el logo completo con el texto "ANGÉLICA SARAY" debajo, por
  si en el futuro quieres usarlo en algún material o documento aparte
  (no se usa actualmente dentro del sitio, ya que el nombre ya va escrito
  en el encabezado con la tipografía del sitio).
También se generó el favicon (ícono de la pestaña del navegador) a partir
del mismo emblema, en assets/favicon-32.png y favicon-180.png.

IMPORTANTE: al publicar el sitio, no olvide subir también la carpeta
completa "assets/" junto a los archivos .html, .css y .js — si falta esa
carpeta, el logo no se verá.

PUBLICACIÓN GRATIS (recomendado: Netlify)
1. Cree una cuenta gratis en https://netlify.com
2. En el panel, use "Add new site → Deploy manually" y arrastre la carpeta
   con index.html, styles.css, script.js (y assets si los tiene).
3. Netlify publica el sitio en segundos en una dirección tipo
   angelica-saray.netlify.app, con HTTPS activado automáticamente.
4. El formulario de contacto queda funcionando solo (ver sección
   "FORMULARIO" más abajo).
5. Si ya tiene un dominio propio (ej. angelicasaray.com), en
   Domain settings → Add custom domain, Netlify le indica los registros
   DNS a configurar con su proveedor de dominio.

PANEL DE ADMINISTRACIÓN (Decap CMS) — noticias y eventos
Ya se agregó al proyecto un panel de administración gratuito para que
puedas crear, editar o eliminar Noticias y Eventos sin tocar código, en
una dirección como https://angelicasaraylawyer.netlify.app/admin

Qué se agregó al proyecto:
- content/noticias.json y content/eventos.json: donde vive la información
  que ves en esas dos secciones del sitio.
- admin/index.html y admin/config.yml: el panel en sí y su configuración
  (los campos del formulario: título, fecha, categoría, etc.).
- El sitio ahora carga esas dos secciones dinámicamente desde esos
  archivos JSON (si por algún motivo no cargan, el sitio muestra el
  contenido de respaldo que ya trae escrito, así nunca se ve vacío).

IMPORTANTE — este panel SOLO funciona si el sitio está conectado a un
repositorio de GitHub (no funciona con el método de "arrastrar la
carpeta"), porque cada cambio que hagas desde el panel se guarda como
una actualización en ese repositorio, y Netlify vuelve a publicar el
sitio automáticamente. Por eso hay que migrar de "Deploy manually" a
"Import from Git" una única vez. Pasos:

1. Crear el repositorio en GitHub
   - Entre a https://github.com y cree una cuenta gratuita si no tiene.
   - Cree un repositorio nuevo, por ejemplo "sitio-angelica-saray".
   - Puede subir los archivos directamente desde el navegador: en la
     página del repositorio, "Add file → Upload files" y arrastre TODO
     el contenido de esta carpeta (index.html, styles.css, script.js,
     README.txt, y las carpetas assets/, content/ y admin/ completas).
   - Confirme el primer "commit".

2. Conectar ese repositorio a Netlify
   - En Netlify: "Add new site → Import an existing project → Deploy
     with GitHub", autorice el acceso y elija el repositorio que creó.
   - Deje el comando de build vacío y la carpeta de publicación como "/"
     (raíz), ya que este sitio no necesita proceso de compilación.
   - Si ya tenía el sitio publicado por "Deploy manually" con el dominio
     angelicasaraylawyer.netlify.app, puede seguir usando ese mismo sitio:
     en Site settings → Build & deploy → Link repository, conecte el
     repositorio en lugar de crear un sitio nuevo. Si tiene dudas en este
     paso específico, dígamelo antes de continuar para no perder el
     dominio ya generado.

3. Activar Identity (el sistema de login del panel)
   - En el panel del sitio en Netlify: pestaña "Identity" → "Enable
     Identity".
   - En "Registration preferences", seleccione "Invite only" (para que
     nadie más pueda crear una cuenta en su panel).
   - En "Services → Git Gateway", haga clic en "Enable Git Gateway".

4. Invitarse a sí misma como usuaria
   - En la pestaña "Identity", clic en "Invite users" y escriba
     angelica.saray.lawyer@gmail.com
   - Llegará un correo de invitación; al abrirlo y confirmar, le pedirá
     crear una contraseña para el panel.

5. Entrar al panel
   - Abra https://angelicasaraylawyer.netlify.app/admin
   - Inicie sesión con el correo y la contraseña que acaba de crear.
   - Verá dos secciones: "Noticias" y "Eventos". Al entrar a cada una,
     puede agregar un elemento nuevo, editar uno existente, reordenarlos
     arrastrándolos, o borrarlos. Cada vez que dé "Publish", el sitio se
     actualiza solo en uno o dos minutos.

Si prefiere que yo la acompañe en estos pasos (por ejemplo, revisando
capturas de pantalla de cada paso), dígamelo — algunos, como conectar el
repositorio existente sin perder el dominio, conviene hacerlos con
cuidado la primera vez.

PUBLICACIÓN EN OTRO HOSTING (cPanel, hosting tradicional, etc.)
1. Descomprima el ZIP.
2. Cargue todos los archivos en public_html, www o htdocs de su hosting.
3. index.html debe quedar directamente en la raíz pública.
4. Apunte el dominio al hosting con los registros DNS suministrados por el proveedor.
5. Active SSL/HTTPS desde el panel del hosting.
   Nota: fuera de Netlify, el formulario de contacto no enviará correos
   por sí solo — necesitaría conectarlo a Formspree u otro servicio
   equivalente (dígamelo y lo dejo listo para esa opción).

FORMULARIO — CÓMO CONECTARLO A UN CORREO REAL (Netlify Forms)
El formulario ya está preparado para funcionar automáticamente al publicar
el sitio en Netlify, sin crear cuentas aparte ni pegar ningún endpoint:

1. Publique el sitio en Netlify (ver sección "PUBLICACIÓN GRATIS" más abajo).
2. Netlify detecta el formulario solo, gracias al atributo data-netlify="true"
   que ya tiene el <form> en index.html.
3. En el panel de Netlify, vaya a su sitio → pestaña "Forms" y active la
   notificación por correo: Site settings → Forms → Form notifications →
   "Add notification" → "Email notification" → escriba
   angelica.saray.lawyer@gmail.com.
4. Envíe un mensaje de prueba desde el sitio ya publicado (no funciona en
   una prueba local abriendo el archivo, solo una vez esté en Netlify) y
   confirme que llega el correo.

Ya incluye protección anti-spam básica (campo oculto "bot-field") sin
necesidad de configurar nada adicional.

Si en algún momento prefiere usar otro servicio (Formspree, PHP, etc.) en
lugar de Netlify Forms, dígamelo y ajusto el formulario para ese caso —
solo uno de los dos métodos debe estar activo a la vez.

FUENTES
El sitio carga Fraunces, IBM Plex Sans e IBM Plex Mono desde Google Fonts
(requiere conexión a internet en el navegador del visitante). Si el hosting
exige que todo sea 100% local/sin dependencias externas, puedo alojar las
fuentes localmente.

PRUEBA LOCAL
Abra index.html en el navegador o use Live Server en Visual Studio Code.
