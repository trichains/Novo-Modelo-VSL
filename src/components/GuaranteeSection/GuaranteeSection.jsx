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
              100% Satisfaction Guaranteed 60-Day Money Back Guarantee
            </h2>
            <p className="text-base">
              FloraSlim comes with a 100% money back guarantee - 60 full days
              from your original purchase. If you&#39;re not totally and
              completely satisfied with our product or your results within the
              first 60 days simply let us know by calling our toll-free number
              or dropping us an email and we&#39;ll gladly give you a full
              refund within 48 hours of the product being returned. That&#39;s
              right - simply return the product, even your empty bottles,
              anytime within 60 days of your purchase and you&#39;ll receive a
              full, no-questions-asked refund (minus shipping and handling
              fees).
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GuaranteeSection;
