/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  Theme as TechomahaTheme
} from './components/theme/theme';

declare global {
  interface HTMLTechomahaThemeElement extends TechomahaTheme, HTMLStencilElement {
  }
  var HTMLTechomahaThemeElement: {
    prototype: HTMLTechomahaThemeElement;
    new (): HTMLTechomahaThemeElement;
  };
  interface HTMLElementTagNameMap {
    "techomaha-theme": HTMLTechomahaThemeElement;
  }
  interface ElementTagNameMap {
    "techomaha-theme": HTMLTechomahaThemeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "techomaha-theme": JSXElements.TechomahaThemeAttributes;
    }
  }
  namespace JSXElements {
    export interface TechomahaThemeAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
