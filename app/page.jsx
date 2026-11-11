import RunoPage from '@/components/RunoPage';
import { HOME, getPage } from '@/lib/pages';

export const metadata = { title: getPage(HOME).title };

export default function Home() {
  return <RunoPage id={HOME} />;
}
