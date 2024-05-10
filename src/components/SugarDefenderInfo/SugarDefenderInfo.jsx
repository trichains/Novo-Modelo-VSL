import Container from '../Container/Container';

const SugarDefenderInfo = () => {
  return (
    <div className="bg-white py-12 px-4">
      <Container>
        <div className="w-full flex flex-col items-center text-center bg-slate-200 p-8 md:p-12 rounded-3xl shadow-sm">
          <h1 className="text-3xl md:text-5xl font-medium mb-4">
            The #1 Rated Blood Sugar Formula
          </h1>
          <div className="w-full md:max-w-3xl flex flex-col items-center text-sm md:text-base gap-4 p-2 text-stone-800">
            <p>
              The biggest question I get asked is, what happens if my blood
              sugar doesn&#39;t improve or I don&#39;t lose weight?
            </p>
            <p>
              Sugar Defender has helped thousands safely assist their blood
              sugar and drop pounds... Quickly, easily and from home.
            </p>
            <p>
              Despite this, I fully understand if you&#39;re still uncertain. So
              to take the risk out of ordering...
            </p>
            <p>
              Every bottle of Sugar Defender comes with a full 60-day guarantee.
              You can try it out and see its improving effects on your blood
              sugar with absolutely no-risk whatsoever!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 gap-4">
            <p className="font-semibold italic text-md md:text-lg">
              Tom Green Creator, Sugar Defender
            </p>
            <img
              src="/assets/signature.webp"
              alt="Signature of Tom Green"
              className="w-32 md:w-48"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SugarDefenderInfo;
