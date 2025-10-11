import { Hero } from './components/Hero/Hero';
import { Layout } from './components/Layout/Layout';
import { Portfolio } from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Portfolio />
    </Layout>
  );
};
export default App;
