import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Timer from './components/Timer/Timer';
import ProductCard from './components/ProductCard/ProductCard';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import SugarDefenderInfo from './components/SugarDefenderInfo/SugarDefenderInfo';
import BonusOffer from './components/BonusOffer/BonusOffer';
import IngredientsList from './components/IngredientsList/IngredientsList';
import FreeShippingOffer from './components/FreeShippingOffer/FreeShippingOffer';
import Testimonials from './components/Testimonials/Testimonials';
import FAQs from './components/FAQs/FAQs';
import ProductHighlight from './components/ProductHighlight/ProductHighlight';
import GuaranteeSection from './components/GuaranteeSection/GuaranteeSection';
import ScientificReferences from './components/ScientificReferences/ScientificReferences';
import ProductWithModal from './components/ProductWithModal/ProductWithModal';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <VideoPlayer src="https://scripts.converteai.net/878e8e96-9e3c-48f1-96d9-9d726cef585a/players/65c4f5ba92646a0008cc5371/embed.html" />
      <Timer />
      <ProductCard />
      <CustomerReviews />
      <SugarDefenderInfo />
      <BonusOffer />
      <IngredientsList />
      <FreeShippingOffer />
      <Testimonials />
      <Timer />
      <ProductCard />
      <CustomerReviews />
      <FAQs />
      <ProductHighlight />
      <GuaranteeSection />
      <ProductCard
        specialOfferText // Passando o texto especial apenas para esta importação (ele sozinho já é passado como true)
      />
      <CustomerReviews />
      <ScientificReferences />
      <ProductWithModal />
      <Footer />
    </div>
  );
}

export default App;
