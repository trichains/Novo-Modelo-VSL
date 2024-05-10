import Container from '../Container/Container';

// Array de ingredientes com detalhes para cada um.
const ingredients = [
  {
    name: 'Maca Root',
    desc: 'Explodes energy and libido, torches fat, and turbocharges your metabolism.',
    image: '/assets/ingredients/i-maca-root.jpg'
  },
  {
    name: 'Grape Seed',
    desc: 'Flushes toxins, obliterates fat, and gives you unbeatable cardiovascular health.',
    image: '/assets/ingredients/i-grape-seed.png'
  },
  {
    name: 'Guarana Seed',
    desc: 'Burns fat, boosts focus, and melts away flab for ultimate weight loss.',
    image: '/assets/ingredients/i-guarana.jpg'
  },
  {
    name: 'African Mango',
    desc: 'Controls appetite, incinerates belly fat, and crushes cravings in days.',
    image: '/assets/ingredients/i-african-mango.jpg'
  },
  {
    name: 'Eleuthero',
    desc: 'Supercharges stamina and obliterates fat, sculpting your body in weeks.',
    image: '/assets/ingredients/i-eleuthero.jpg'
  },
  {
    name: 'Astragalus Root',
    desc: 'Annihilates fat, and fires up your metabolism like a rocket.',
    image: '/assets/ingredients/i-astragalus-root.webp'
  },
  {
    name: 'Green Tea Leaf',
    desc: 'Turbocharges fat-burning, crushes appetite, and powers up your metabolism perfectly.',
    image: '/assets/ingredients/i-green-tea.webp'
  },
  {
    name: 'Gymnema',
    desc: 'Destroys sugar cravings, blocks carbs, and turns your body into a fat-burning machine.',
    image: '/assets/ingredients/i-gymnema.jpg'
  }
];

const IngredientsList = () => {
  return (
    <div className="bg-white py-12 px-4">
      <Container>
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-4xl font-medium">
            Inside Every <span className="font-bold">FloraSlim</span> Drop
            You&#39;ll Find:
          </h2>
          <p className="text-base text-gray-600">
            8 Carefully-Selected Ingredients That Support Healthy Blood Sugar
            Levels, Including:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {/* itera sobre o array ingredients, criando um card para cada ingrediente com sua imagem, nome e descrição. */}
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-slate-100 rounded-lg shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IngredientsList;
