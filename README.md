<div style="display: flex; justify-content: space-between">
  <p align="center">
    <a href="https://react.dev/" target="blank"><img src="public/react.svg" width="200" alt="React Logo"/></a>
  </p>
  
  <p align="center">
    <a href="https://vitejs.dev/" target="blank"><img src="public/vite.svg" width="200" alt="Vite Logo"/></a>
  </p>

  <p align="center">
    <a href="https://www.typescriptlang.org/" target="blank"><img src="public/typescript.svg" width="200" alt="TypeScript Logo"/></a>
  </p>
</div>

# Calculadora de Propinas - React + Vite + TypeScript + useReducer

Aplicación creada con [React](https://react.dev/) y [Vite](https://vitejs.dev/) usando [TypeScript](https://www.typescriptlang.org/), la cual es una Calculadora de Propinas y Consumos para un Restaurante, puedes realizar una orden en base a los productos listados, eliminarlos de la orden, agregar propina ya sea del 0%, 10%, 20% o 50%, ver el subtotal, la propina y el total a pagar. Incluye un botón para colocar la orden (en un futuro se podrá mandar a una base de datos) y al presionarlo se resetea la aplicación.

Algunos de los conceptos utilizados para la generación de ésta App, son:

1. Componentes.
2. Componentes reutilizables.
3. useEstate.
4. useMemo.
5. useReducer.
6. Hooks personalizados.
7. TailwindCSS
8. Y más.

# React + Vite + TypeScript

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
