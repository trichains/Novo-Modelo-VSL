import Container from '../Container/Container';
import { scientificReferences } from './scientificReferencesData';

// Componente que renderiza a seção de referências científicas
const ScientificReferences = () => {
  console.log('Referencias Cientificas', scientificReferences);
  return (
    <div className="bg-white py-12 px-4">
      <Container>
        <div className="flex flex-col items-center justify-center px-4 gap-8">
          <h2 className="text-3xl md:text-4xl font-medium text-center">
            Scientific <span className="font-bold">References</span>
          </h2>
          <div className="w-full md:w-3/4 flex flex-wrap justify-center items-center">
            <img
              src="/assets/refs/refs.png"
              alt="American Diabetes Association"
              className="w-full"
            />
          </div>
          <p className="text-center text-xs">
            The company is not endorsed by, sponsored by, or affiliated with any
            of these organizations
          </p>
          <div className="w-full p-4">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 list-decimal">
              {scientificReferences.map((reference, index) => (
                <li key={index} className="text-xs leading-tight">
                  {reference}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ScientificReferences;
