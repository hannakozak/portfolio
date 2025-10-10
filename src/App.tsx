import { Hero } from './components/Hero/Hero';
import { Layout } from './components/Layout/Layout';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Analytics } from '@vercel/analytics/next';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Portfolio />
      <Analytics />
    </Layout>
  );
};
export default App;
