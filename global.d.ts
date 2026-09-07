/// <reference types="next" />

// Ambient declarations for global (non-module) CSS side-effect imports.
// Next.js 15.5 declares `*.module.css` but not plain `.css` side-effect imports,
// so we add empty declarations to satisfy TypeScript's `noUncheckedSideEffectImports`
// check (enabled by default in TypeScript 6.0).
declare module '*.css' {}
declare module '*.sass' {}
declare module '*.scss' {}
