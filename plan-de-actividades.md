# Plan de Actividades — IPUC Locations Web

> Fecha de inicio: Mayo 2026  
> Objetivo: Plataforma web pública con mapa de sedes, noticias automáticas (redes IPUC), eventos y búsqueda por cercanía.  
> Stack objetivo: HTML/JS estático → Vercel (gratis) + Google Sheets (BD de iglesias) + Embeds oficiales IPUC

---

## FASE 1 — Publicar en Vercel (semana 1)
> Meta: La web quede accesible con URL pública real, sin costo.

- [ ] Crear cuenta en [vercel.com](https://vercel.com) con GitHub
- [ ] Crear repositorio en GitHub con la carpeta del proyecto
- [ ] Conectar el repositorio a Vercel (deploy automático)
- [ ] Verificar que `public/index.html` abre correctamente en la URL de Vercel
- [ ] Configurar dominio personalizado si se tiene (ej. `ipuc-locations.vercel.app` o dominio propio)
- [ ] Probar mapa, geolocalización y sección de noticias en producción
- [ ] Ajustar diseño o textos de prueba que aparezcan en producción

**Resultado esperado:** URL pública funcional, compartible.

---

## FASE 2 — Base de datos de iglesias en Google Sheets (semana 2-3)
> Meta: Que cualquier persona del ministerio pueda agregar/editar sedes en una hoja de cálculo y el mapa se actualice solo.

- [ ] Crear hoja de Google Sheets con columnas:
  `id | nombre | ciudad | departamento | latitud | longitud | dirección | horario | descripción | teléfono | activa`
- [ ] Migrar las 12 sedes actuales a la hoja
- [ ] Publicar la hoja como CSV público (Archivo → Publicar en la web → CSV)
- [ ] Modificar `index.html` para leer los datos desde Google Sheets en lugar del array hardcodeado
- [ ] Probar que al agregar una fila en Sheets aparezca en el mapa automáticamente
- [ ] Documentar cómo agregar nuevas sedes (guía breve para el equipo)
- [ ] Ir agregando todas las sedes reales de la red IPUC

**Resultado esperado:** Mapa con sedes reales, actualizable sin tocar código.

---

## FASE 3 — Contenido automático de redes IPUC (semana 3-4)
> Meta: Noticias, videos y posts se actualizan solos desde las cuentas oficiales IPUC.

### YouTube — Canal IPUC
- [ ] Obtener API Key de Google (gratuita, 10.000 req/día)
- [ ] Identificar el canal oficial de YouTube de IPUC Colombia
- [ ] Conectar la sección "Noticias" para mostrar los últimos videos reales
- [ ] Mostrar miniatura, título y enlace de cada video

### Facebook / Instagram
- [ ] Evaluar widget de [Elfsight](https://elfsight.com) (gratis hasta cierto uso) o embed nativo de Meta
- [ ] Embeber timeline/posts de la página oficial de IPUC Colombia
- [ ] Ubicar el feed en la sección de noticias o en una sección nueva "Redes Sociales"

### Eventos
- [ ] Verificar si IPUC Colombia tiene calendario Google o Facebook Events público
- [ ] Si existe: embeber el calendario en una sección "Próximos Eventos"
- [ ] Si no existe: crear sección de eventos manual en Google Sheets (mismo enfoque que sedes)

**Resultado esperado:** Sección de noticias/eventos 100% automática, sin subir nada manualmente.

---

## FASE 4 — Mejoras de experiencia (mes 2)
> Meta: La web se siente profesional y útil para cualquier usuario colombiano.

- [ ] Añadir foto o imagen representativa de cada sede (columna en Sheets)
- [ ] Filtros en el mapa por departamento/ciudad
- [ ] Página de detalle por iglesia (modal o sección desplegable)
- [ ] Sección "Acerca de IPUC" con historia e información institucional
- [ ] Optimización móvil (revisar en teléfonos reales)
- [ ] Añadir meta tags para SEO básico (título, descripción, imagen para compartir)
- [ ] Añadir favicon con logo IPUC

**Resultado esperado:** Web completa, navegable y bien presentada.

---

## FASE 5 — Escalar si crece (mes 3 en adelante)
> Solo si la web crece en usuarios o en funciones complejas.

- [ ] Evaluar migración a **Next.js** (mejor SEO, páginas por iglesia)
- [ ] Evaluar **Supabase** como base de datos con búsqueda geoespacial real
- [ ] Panel de administración para que el equipo IPUC gestione sedes y eventos
- [ ] Autenticación para administradores
- [ ] Notificaciones push de eventos próximos

---

## Resumen de costos

| Recurso | Herramienta | Costo |
|---|---|---|
| Hosting | Vercel | **Gratis** |
| Base de datos de sedes | Google Sheets | **Gratis** |
| Mapa | Leaflet + OpenStreetMap | **Gratis** |
| Videos YouTube | YouTube Data API | **Gratis** |
| Feeds redes sociales | Elfsight (básico) | **Gratis / ~$5/mes** |
| Dominio propio (opcional) | ej. ipuc-locations.co | ~$15/año |

---

## Próximo paso inmediato

**→ Crear cuenta en GitHub + Vercel y hacer el primer deploy.**  
Tiempo estimado: 15-20 minutos.
