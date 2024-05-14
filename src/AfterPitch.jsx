import { forwardRef } from 'react';
import Timer from './components/Timer/Timer';
import ProductCard from './components/ProductCard/ProductCard';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import FloraSlimInfo from './components/FloraSlimInfo/FloraSlimInfo';
// import BonusOffer from './components/BonusOffer/BonusOffer';
import IngredientsList from './components/IngredientsList/IngredientsList';
import FreeShippingOffer from './components/FreeShippingOffer/FreeShippingOffer';
import Testimonials from './components/Testimonials/Testimonials';
import FAQs from './components/FAQs/FAQs';
import ProductHighlight from './components/ProductHighlight/ProductHighlight';
import GuaranteeSection from './components/GuaranteeSection/GuaranteeSection';
import ProductWithModal from './components/ProductWithModal/ProductWithModal';
import ScientificReferences from './components/ScientificReferences/ScientificReferences';

const AfterPitch = forwardRef((_, ref) => {
  return (
    <div>
      <FloraSlimInfo />
      <IngredientsList />
      <Timer
        ref={ref} // Primeiro o Timer recebe a referência
      />
      {/* <ProductCard /> */}
      {/* <BonusOffer /> */}
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
    </div>
  );
});

AfterPitch.displayName = 'AfterPitch'; // Definindo o nome de exibição para o componente

export default AfterPitch;
