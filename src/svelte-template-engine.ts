import 'svelte/register';

export function svelteTemplateEngine(filePath: string, options: any, next) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Component = require(filePath).default;
  // eslint-disable-next-line prefer-const
  let { html, head, css } = Component.render(options);
  if (css.code) {
    head = `${head}<style>${css.code}</style>`;
  }
  next(null, html.replace('%head%', head));
}
