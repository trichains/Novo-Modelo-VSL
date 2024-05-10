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
  isFeatured
}) => {
  return (
    <div
      // A borda vermelha só vai aparecer caso isFeatured seja true (para destacar o card do produto)
      className={` bg-white rounded-3xl overflow-hidden shadow-xl transition-shadow duration-300 ${
        isFeatured ? 'ring-2 ring-red-800' : ''
      }`}>
      <div className="flex flex-col gap-2 justify-center p-4 items-center bg-slate-100">
        <h3 className="text-4xl font-semibold">{title}</h3>
        <p className="text-base text-gray-800">{supply}</p>
      </div>
      <div className="w-full p-2">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover hover:scale-110 transition-transform duration-300"
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
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-lg text-green-600 font-semibold">
            YOU SAVE ${savings}
          </p>
          <p className="text-sm">{bonus}</p>
        </div>
        <div className="w-full">
          <button className="bg-amber-300 hover:bg-amber-400 text-lg font-bold py-4 px-6 rounded-full w-full transition-colors duration-300">
            {buttonText}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-base text-center mt-2">
            60 Day Money-Back Guarantee
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
            <span className="font-semibold text-lg">${price}</span>
          </div>
          <span className="text-base font-semibold">{shipping}</span>
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
  isFeatured: PropTypes.bool // valor booleano para 'true' ou 'false'
};

const Products = ({ specialOfferText }) => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Caso tenha o specialOfferText, mostre o texto */}
        {specialOfferText && (
          <div className="text-center mb-8 mx-auto">
            <h2 className="text-2xl md:text-4xl font-medium">
              Try <span className="font-bold">FloraSlim</span> Today
              <br />
              At Special Introductory Pricing!
            </h2>
          </div>
        )}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-2">
          <ProductCard
            title="Try One"
            supply="30 Day Supply"
            price="69"
            oldPrice="179"
            shipping="+ Shipping"
            savings="110"
            bonus="No bonuses"
            buttonText="ADD TO CART"
            imageUrl="/assets/products/prod1.webp"
          />
          <ProductCard
            title="Best Value"
            supply="180 Day Supply"
            price="49"
            oldPrice="1074"
            shipping="+ Free Us Shipping"
            savings="780"
            bonus="+ 2 FREE E-BOOKS"
            buttonText="ADD TO CART"
            imageUrl="/assets/products/prod6.webp"
            isFeatured={true} // A borda vermelha será exibida para destacar esse card do produto
          />
          <ProductCard
            title="Most Popular"
            supply="90 Day Supply"
            price="59"
            oldPrice="537"
            shipping="+ Free Us Shipping"
            savings="360"
            bonus="+ 2 FREE E-BOOKS"
            buttonText="ADD TO CART"
            imageUrl="/assets/products/prod3.webp"
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
