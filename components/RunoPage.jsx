// Server component: one Runo page = its markup (rendered to HTML at build time) + its behaviour.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import PageRuntime from './PageRuntime';

export default function RunoPage({ id }) {
  const html = readFileSync(join(process.cwd(), 'content', 'pages', `${id}.html`), 'utf8');
  return (
    <>
      <div key={id} id="page-host" dangerouslySetInnerHTML={{ __html: html }} />
      <PageRuntime key={`rt-${id}`} id={id} />
    </>
  );
}
