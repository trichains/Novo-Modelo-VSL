import Container from '../Container/Container';

// Componente de promoção com detalhes e imagem do produto
const FreeShippingOffer = () => {
  return (
    <div className="bg-white py-12 px-4">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between py-8 px-12 gap-4 sm:gap-8 bg-gradientCustom rounded-3xl text-white">
          {/* Texto e botão de ação */}
          <div className="flex flex-col gap-4 sm:gap-8 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-medium md:text-left">
              Every 6 Bottles Order Gets FREE Shipping Too!
            </h1>
            <p className="text-sm md:text-base">
              *96% Of Customers Order 6 Bottles (Our Recommended Option)
            </p>
            <p className="text-sm md:text-base">
              365-Days Money Back Guarantee 100% Satisfaction Guaranteed
            </p>
            <div className="flex justify-center items-center text-center">
              <a
                href="#products"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-3xl transition-colors">
                ORDER NOW
              </a>
            </div>
          </div>
          {/* Imagem do produto e frutas */}
          <div className="w-full sm:w-2/4">
            <img
              src="/assets/1bottle-fruits.png"
              alt="FloraSlim Bottles with Fruits"
              className="w-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FreeShippingOffer;
