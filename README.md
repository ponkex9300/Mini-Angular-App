# Mini App Angular - Gestion de Cursos

Spike de aprendizaje para fundamentos de Angular 17+ usando TypeScript y componentes standalone.

## Alcance implementado

- Ruta `/courses`: listado de cursos.
- Ruta `/courses/:id`: detalle de curso.
- `CoursesService` con datos hardcodeados (sin backend).
- Uso de componentes standalone (sin NgModules).
- Uso de `@Input()` y `@Output()`.
- Uso de `*ngFor` y `*ngIf`.
- Routing basico.

## Requisitos

- Node.js 18 o 20 recomendado por Angular 17.
- npm.

## Ejecucion local

1. Instalar dependencias:

```bash
npm install
```

2. Levantar la app:

```bash
npm start
```

3. Abrir en navegador:

`http://localhost:4200/courses`

## Build

```bash
npm run build
```

## Documento de entrega

Ver `ENTREGA_SPIKE.md` para la parte teorica, checklist de evidencias y formato sugerido para ClickUp.
