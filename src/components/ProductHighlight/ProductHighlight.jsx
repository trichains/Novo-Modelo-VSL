import Container from '../Container/Container';

const ProductHighlight = () => {
  return (
    <div className="bg-white pt-12 pb-20 px-4">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Área das imagens dos produtos */}
          <div className="w-full flex justify-center">
            <img
              src="/assets/2bottles-fruits.png"
              alt="FloraSlim Bottle"
              className="w-3/4 hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Área de conteúdo e call to action */}
          <div className="w-full flex flex-col gap-6">
            <h2 className="text-3xl font-medium">
              Are you struggling to lose weight, fighting stubborn fat, or
              feeling low on energy? Boost your energy, melt fat fast, and
              transform your body with the FloraSlim Weight Loss Formula!
            </h2>
            <p className="text-base">
              This highly effective formula will turn your metabolism into a
              fat-incinerating furnace, burning away extra weight and sculpting
              your body naturally. While you sleep, your body will become a
              furnace that melts away all the stubborn fat. Wake up slimmer and
              watch your measurements shrink daily, leaving you feeling sexier!
            </p>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-xs sm:text-sm">
              <li>✔ Natural Formula</li>
              <li>✔ Plant Ingredients</li>
              <li>✔ Non-GMO</li>
              <li>✔ Easy To Swallow</li>
              <li>✔ Non-Habit Forming</li>
              <li>✔ 100% Safe</li>
            </ul>
            <div className="flex justify-center items-center text-center">
              <a
                href="#products"
                className="w-full bg-yellow-400 text-black py-2 px-6 rounded-full font-bold hover:bg-yellow-500 transition-colors">
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductHighlight;
