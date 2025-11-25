# Tapajos Kite Vibes - AI Coding Agent Instructions

## Project Overview
Angular 21 standalone application with Server-Side Rendering (SSR) using Angular's new application builder and `@angular/ssr` package. Modern setup with Vitest for testing, SCSS styling, and strict TypeScript configuration.

## Architecture

### Component Structure
- **Standalone components only**: All components use `imports: []` array, not NgModules
- **Signal-based state**: Use signals (`signal()`) for component state, see `src/app/app.ts`
- **File naming**: Component files follow pattern: `component-name.ts`, `component-name.html`, `component-name.scss`
- **No decorators for templates**: Use `templateUrl` and `styleUrl` (singular, not `styleUrls`)

### SSR Configuration
- **Dual bootstrap**: `src/main.ts` (client) and `src/main.server.ts` (server) with separate configs
- **Server config merging**: `app.config.server.ts` merges client config with SSR-specific providers
- **Render modes**: Configure in `src/app/app.routes.server.ts` - currently using `RenderMode.Prerender` for all routes
- **Express server**: `src/server.ts` uses `AngularNodeAppEngine` - add REST API endpoints here before the Angular catch-all handler

### Configuration Files
- **Two config systems**: `app.config.ts` (client) and `app.config.server.ts` (server merged)
- **Client config**: Uses `provideClientHydration(withEventReplay())` for hydration with event replay
- **Server routes**: Define SSR strategy in `app.routes.server.ts` with `ServerRoute[]` array

## Development Workflows

### Running the App
- **Dev server**: `npm start` (runs `ng serve`, starts dev server on http://localhost:4200)
- **SSR dev**: Dev server automatically handles SSR during development
- **Production SSR**: `npm run build` then `npm run serve:ssr:tapajos-kite-vibes`

### Testing
- **Test runner**: Vitest (not Karma) - configured in `tsconfig.spec.json` with `vitest/globals`
- **Run tests**: `npm test` (executes `ng test`)
- **Test files**: Use `*.spec.ts` suffix in `src/` directory
- **Test setup**: Use Angular's `TestBed` with async configuration - see `src/app/app.spec.ts`

### Code Generation
- **Angular CLI**: Use `ng generate component component-name` for scaffolding
- **Component prefix**: `app` (configured in `angular.json`)
- **Style format**: SCSS (default for all schematics)

## Project-Specific Conventions

### TypeScript Configuration
- **Strict mode enabled**: All strict flags on in `tsconfig.json`
- **Module system**: `"module": "preserve"` for modern ESM output
- **Isolated modules**: `"isolatedModules": true` required for build performance
- **No implicit returns/fallthrough**: Code must explicitly return or handle all switch cases

### Styling
- **Global styles**: `src/styles.scss` for global styles
- **Component styles**: Inline or separate `.scss` files with `styleUrl` property
- **Prettier config**: 100 char line width, single quotes, Angular parser for HTML files (in `package.json`)

### State Management
- **Signals**: Use `signal()` for reactive state instead of class properties
- **Readonly signals**: Prefix protected readonly signals in components (e.g., `protected readonly title = signal('...')`)
- **No RxJS for simple state**: Only use RxJS where necessary (HTTP, complex async flows)

### Build Configuration
- **Output mode**: `"server"` in `angular.json` build options for SSR
- **Budget limits**: 500KB warning / 1MB error for initial bundle, 4KB/8KB for component styles
- **Asset handling**: Use `public/` folder for static assets (no `src/assets/`)

## Integration Points

### Express Server (`src/server.ts`)
- Add custom API routes before the `app.use((req, res, next) =>` Angular handler
- Example pattern commented in file: `app.get('/api/{*splat}', ...)`
- Static files served from `/browser` with 1-year cache, no index/redirect
- Port: Environment variable `PORT` or default 4000

### SSR Providers
- `provideServerRendering(withRoutes(serverRoutes))` required in server config
- `provideBrowserGlobalErrorListeners()` in client config for error handling
- Event replay enabled via `withEventReplay()` on hydration

## Key Files Reference
- `src/app/app.ts` - Root component with signal-based state pattern
- `src/server.ts` - Express server setup with Angular SSR engine
- `angular.json` - Build configuration with application builder
- `src/app/app.routes.server.ts` - SSR rendering strategy per route
- `package.json` - Scripts, Prettier config, npm 10.9.2 required
