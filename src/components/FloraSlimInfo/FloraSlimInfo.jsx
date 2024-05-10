import Container from '../Container/Container';

const FloraSlimInfo = () => {
  return (
    <div className="bg-white py-12 px-4">
      <Container>
        <div className="w-full flex flex-col items-center text-center bg-slate-200 p-8 md:p-12 rounded-3xl shadow-sm">
          <h1 className="text-3xl md:text-5xl font-medium mb-4">
            The #1 Rated Weight Loss Formula
          </h1>
          <div className="w-full md:max-w-3xl flex flex-col items-center text-sm md:text-base gap-4 p-2 text-stone-800">
            <p>
              The biggest question I get asked is, &quot;What happens if I
              don&#39;t lose weight?&quot;
            </p>
            <p>
              FloraSlim has helped thousands melt away stubborn fat and sculpt
              their bodies...
            </p>
            <p>Quickly, easily, and from the comfort of home.</p>
            <p>
              Despite this, I fully understand if you&#39;re still uncertain. So
              to take the risk out of ordering...
            </p>
            <p>
              Every bottle of FloraSlim comes with a full 365-day guarantee. You
              can try it out and see its incredible fat-burning effects with
              absolutely no risk whatsoever!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 gap-4">
            <p className="font-semibold italic text-md md:text-lg">
              Dr. Sarah Salinas Creator, FloraSlim
            </p>
            <img
              src="/assets/signature.png"
              alt="Signature of Tom Green"
              className="w-1/2 md:w-3/4"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FloraSlimInfo;
