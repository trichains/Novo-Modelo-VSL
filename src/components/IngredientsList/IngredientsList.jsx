import Container from '../Container/Container';

// Array de ingredientes com detalhes para cada um.
const ingredients = [
  {
    name: 'Eleuthero',
    desc: 'Increases Energy and Reduces Fatigue',
    image: '/assets/ingredients/i-eleuthero.jpg'
  },
  {
    name: 'Coleus',
    desc: 'Fat Burning Aid',
    image: '/assets/ingredients/i-coleus.jpg'
  },
  {
    name: 'Maca Root',
    desc: 'Boosts Your Energy',
    image: '/assets/ingredients/i-maca-root.jpg'
  },
  {
    name: 'African Mango',
    desc: 'Fat Burning Agent',
    image: '/assets/ingredients/i-african-mango.jpg'
  },
  {
    name: 'Guarana',
    desc: 'Stimulates Your Metabolism',
    image: '/assets/ingredients/i-guarana.jpg'
  },
  {
    name: 'Gymnema',
    desc: 'Supports Healthy Heart & Blood Sugar',
    image: '/assets/ingredients/i-gymnema.jpg'
  },
  {
    name: 'Ginseng',
    desc: 'Supports Healthy Blood Glucose',
    image: '/assets/ingredients/i-ginseng-root.jpg'
  },
  {
    name: 'Chromium',
    desc: 'Controls Blood Glucose Levels',
    image: '/assets/ingredients/i-chromium-picolinate.jpg'
  }
];

const IngredientsList = () => {
  return (
    <div className="bg-white py-12 px-4">
      <Container>
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-4xl font-medium">
            Inside Every <span className="font-bold">Sugar Defender</span> Drop
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
