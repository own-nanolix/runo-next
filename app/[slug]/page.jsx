import { notFound } from 'next/navigation';
import RunoPage from '@/components/RunoPage';
import { PAGES, getPage } from '@/lib/pages';

export const dynamicParams = false;
export const generateStaticParams = () => PAGES.map((p) => ({ slug: p.id }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPage(slug);
  return page ? { title: page.title } : {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!getPage(slug)) notFound();
  return <RunoPage id={slug} />;
}
