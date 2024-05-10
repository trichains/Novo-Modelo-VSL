import Container from '../Container/Container';

const ProductHighlight = () => {
  return (
    <div className="bg-white py-12 px-4">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Área das imagens dos produtos */}
          <div className="w-full flex justify-center">
            <img
              src="/assets/2bootle-fruits.webp"
              alt="FloraSlim Bottle"
              className="w-3/4 hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Área de conteúdo e call to action */}
          <div className="w-full flex flex-col gap-6">
            <h2 className="text-3xl font-medium">
              Are you suffering from constant mid-day energy crashes,
              infuriating brain-fog or incurable irritability?
            </h2>
            <p className="text-base">
              Support healthy blood sugar levels, boost your all-day natural
              energy, and promote your sharp thinking with the help of BLOOD
              SUGAR FORMULA by FloraSlim RESEARCH! A highly effective formula,
              proven to help support your healthy fat-burning metabolism for
              perfect blood sugar!
            </p>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              <li>✔ Natural Formula</li>
              <li>✔ Plant Ingredients</li>
              <li>✔ Non-GMO</li>
              <li>✔ Easy To Swallow</li>
              <li>✔ Non-Habit Forming</li>
              <li>✔ 100% Safe</li>
            </ul>
            <button className="bg-amber-400 text-black py-2 px-6 rounded-full font-bold hover:bg-amber-500 transition-colors">
              ORDER NOW
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductHighlight;
