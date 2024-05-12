import PropTypes from 'prop-types';

const ProductCard = ({
  title,
  supply,
  price,
  oldPrice,
  shipping,
  savings,
  bonus,
  buttonText,
  imageUrl,
  isFeatured,
  checkoutUrl
}) => {
  return (
    <div
      // A borda azul só vai aparecer caso isFeatured seja true (para destacar o card do produto)
      className={` bg-white rounded-3xl overflow-hidden shadow-xl transition-shadow duration-300 ${
        isFeatured ? 'ring-2 ring-sky-600 scale-100 sm:scale-105' : ''
      }`}>
      <div className="flex flex-col gap-2 justify-center p-4 items-center bg-slate-100">
        <h3 className="text-4xl font-semibold">{title}</h3>
        <p className="text-base text-gray-800">{supply}</p>
      </div>
      <div className="w-3/4 p-2 mx-auto">
        <img
          src={imageUrl}
          alt={title}
          className="w-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-2">
        <div className="flex items-center justify-center gap-1">
          <span className="text-7xl font-bold">${price}</span>
          <span className="text-sm text-gray-500">
            Per
            <br />
            Bottle
          </span>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-1">
          <p className="text-base sm:text-lg text-green-600 font-semibold">
            YOU SAVE ${savings}
          </p>
          <p className="text-sm">{bonus}</p>
        </div>
        <div className="w-full flex items-center justify-center text-center">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-300 hover:bg-yellow-400 text-lg font-bold p-4 rounded-full w-full transition-colors duration-300">
            {buttonText}
          </a>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-1">
          <p className="text-sm sm:text-base text-center mt-2">
            365 Days Money-Back Guarantee
          </p>
          <div className="p-4">
            <img
              src="/assets/cards.webp"
              alt="Payment Methods"
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-1 text-base">
            Total:
            <span className="text-stone-500 line-through">${oldPrice}</span>
            <span className="font-semibold text-lg">${savings}</span>
          </div>
          <span className="text-sm sm:text-base font-semibold">{shipping}</span>
        </div>
      </div>
    </div>
  );
};

// Definição de PropTypes para o ProductCard
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  supply: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  shipping: PropTypes.string.isRequired,
  savings: PropTypes.string.isRequired,
  bonus: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isFeatured: PropTypes.bool, // valor booleano para 'true' ou 'false'
  checkoutUrl: PropTypes.string.isRequired
};

const Products = ({ specialOfferText }) => {
  return (
    <div id="products" className="bg-white py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Caso tenha o specialOfferText, mostre o texto */}
        {specialOfferText && (
          <div className="flex flex-col items-center gap-4 text-center mb-8 mx-auto">
            <h2 className="text-4xl font-medium">
              Try <span className="font-bold">FloraSlim</span> Today
              <br />
              At Special Introductory Pricing!
            </h2>

            {/* Seta apontando para baixo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-down animate-bounce"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M8 3.5a.5.5 0 0 1 .5.5v8.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.493.493 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 12.793V4a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </div>
        )}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-10">
          {/* 1 kit */}
          <ProductCard
            title="Try One"
            supply="30 Day Supply"
            price="59"
            oldPrice="118"
            shipping="+ Shipping"
            savings="59"
            bonus="" // no bonuses
            buttonText="BUY NOW!"
            imageUrl="/assets/products/1kit.png"
            checkoutUrl="https://www.digistore24.com/product/546334" // 1 bottle - $59
          />
          {/* 6 kits */}
          <ProductCard
            title="Best Value"
            supply="180 Day Supply"
            price="39"
            oldPrice="588"
            shipping="+ Free Us Shipping"
            savings="247"
            bonus="" // no bonuses
            buttonText="BUY NOW!"
            imageUrl="/assets/products/6kits.png"
            isFeatured={true} // A borda azul será exibida para destacar esse card do produto
            checkoutUrl="https://www.digistore24.com/product/544946" // 6 bottles - $247
          />
          {/* 3 kits */}
          <ProductCard
            title="Most Popular"
            supply="90 Day Supply"
            price="49"
            oldPrice="354"
            shipping="+ Free Us Shipping"
            savings="147"
            bonus="" // no bonuses
            buttonText="BUY NOW!"
            imageUrl="/assets/products/3kits.png"
            checkoutUrl="https://www.digistore24.com/product/544945" // 3 bottles - $147
          />
        </div>
      </div>
    </div>
  );
};

// Definição de PropTypes para o componente Products
Products.propTypes = {
  // `specialOfferText` é um valor booleano que controla a exibição do texto promocional especial no topo dos cartões de produto.
  // Se `true`, o texto promocional "Try FloraSlim Today At Special Introductory Pricing!" é exibido acima dos cartões de produto.
  // Esse valor é passado como `true` no último uso do componente Products no arquivo App.jsx para destacar uma oferta especial.
  specialOfferText: PropTypes.bool
};

export default Products;
