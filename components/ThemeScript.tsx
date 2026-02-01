/**
 * Script que se ejecuta antes del primer paint para aplicar el tema guardado (o prefers-color-scheme)
 * y evitar parpadeo al cargar la página.
 */
export function ThemeScript() {
  const script = `(function(){var d=document.documentElement,c=localStorage.getItem('theme');if(c==='dark'||(c===null&&window.matchMedia('(prefers-color-scheme:dark)').matches))d.classList.add('dark');else d.classList.remove('dark');})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
