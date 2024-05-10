import Container from '../Container/Container';

const GuaranteeSection = () => {
  return (
    <div className="bg-white py-12 px-4 text-white">
      <Container>
        <div className="relative flex flex-col items-center text-center w-full bg-gradientCustom py-8 px-4 rounded-3xl">
          {/* Título da seção */}
          <img
            src="/assets/money-back.webp"
            alt="Guarantee Badge"
            className="w-44 absolute -top-20"
          />
          <div className="flex flex-col gap-8 md:gap-12 text-center px-2 pt-24 md:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
              100% Satisfaction Guaranteed
              <br />
              365-Days Money Back Guarantee
            </h2>
            <p className="text-base">
              FloraSlim® is backed by a 100% money-back guarantee for a full 180
              days from your purchase. If you are not completely satisfied with
              the product, your results or your experience within the first 180
              days, simply let us know by sending an email to sac@sevencom.org
              and we will give you a full refund within 48 hours of the full
              amount. That&#39;s right, simply return all bottles of product,
              whether full and/or empty, at any time within 180 days of your
              purchase and you will receive a full refund. This is the extent of
              our confidence in the product. So, request your kit today,
              risk-free. We guarantee your results with our own money.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GuaranteeSection;
