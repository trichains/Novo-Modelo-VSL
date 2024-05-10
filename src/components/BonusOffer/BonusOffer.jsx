import Container from '../Container/Container';

const BonusOffer = () => {
  return (
    <div className="bg-gradientCustom py-12 px-4">
      <Container>
        <div className="flex flex-col items-center max-w-4xl text-white p-2 md:p-8 gap-8">
          <h2 className="text-3xl md:text-5xl font-medium text-center">
            Order 6 Bottles Or 3 Bottles And Get{' '}
            <span className="font-bold">2 Free Bonuses</span>!
          </h2>
          <div className="grid grid-cols-1 gap-4 w-full px-2 md:px-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-8 items-center p-4 md:p-8 bg-slate-800 rounded-3xl">
              <img
                src="/assets/books/book1.jpg"
                alt="The Ultimate Tea Remedies"
                className="h-32 rounded-3xl"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-3xl md:text-4xl">
                  Free Bonus #1
                </p>
                <p className="text-base md:text-xl">
                  The Ultimate Tea Remedies
                </p>
                <p className="text-sm">(instant download)</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center p-4 md:p-8 bg-slate-800 rounded-3xl">
              <img
                src="/assets/books/book2.jpg"
                alt="The Ultimate Tea Remedies"
                className="h-32 rounded-3xl"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-3xl md:text-4xl">
                  Free Bonus #2
                </p>
                <p className="text-base md:text-xl">
                  Learn How to Manage Diabetes
                </p>
                <p className="text-sm">(instant download)</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center text-center">
            <a
              href="#products"
              className="w-full max-w-xs p-4 bg-yellow-400 rounded-full font-bold hover:bg-yellow-500 transition-colors">
              ORDER NOW
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BonusOffer;
