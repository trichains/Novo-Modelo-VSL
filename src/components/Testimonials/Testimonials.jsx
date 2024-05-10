import Container from '../Container/Container';

// Dados das imagens de clientes para simulação
const customerImages = [
  { id: 1, image: '/assets/testimonials/person1.jpg', name: 'Customer 1' },
  { id: 2, image: '/assets/testimonials/person2.jpg', name: 'Customer 2' },
  { id: 3, image: '/assets/testimonials/person3.jpg', name: 'Customer 3' },
  { id: 4, image: '/assets/testimonials/person4.jpg', name: 'Customer 4' }
];

// Dados dos depoimentos para simulação
const testimonials = [
  {
    id: 1,
    name: 'Sean B.',
    location: 'North Carolina, USA',
    testimonial:
      'Very happy with the results. My blood sugar is stable and I have more energy. Product is great. Looked up helpful plants, vitamins and minerals and started buying them separately, but found this product and all were included!',
    stars: 5,
    image: '/assets/testimonials/sean.jpg'
  },
  {
    id: 2,
    name: 'Sabine S.',
    location: 'Arizona, USA',
    testimonial:
      "I really like this product! I've been taking another blood sugar support product for several years that is much more expensive and I thought I'd give this a try. Works just as well as the more expensive but yes, for less cost! Thank you!",
    stars: 5,
    image: '/assets/testimonials/sabine.jpg'
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gradientCustom py-12 px-4" id="reviews">
      <Container>
        <div className="flex flex-col gap-4 md:gap-8 p-4">
          <div className="flex flex-col items-center text-center gap-4 md:gap-8 text-white">
            <h2 className="text-2xl md:text-4xl font-medium">
              Real Customers,
              <br />
              Real Life Changing Results
            </h2>
            {/* Seção de imagens de clientes */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-items-center p-4 gap-4">
              {customerImages.map((customer) => (
                <div
                  key={customer.id}
                  className="rounded-3xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl w-32 md:w-40">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Depoimentos de clientes */}
          <div className="flex flex-col justify-center items-center gap-4 ">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 bg-white rounded-3xl p-4 shadow-md">
                <img
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-32 h-32 rounded-full mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover"
                />
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">{testimonial.testimonial}</p>
                  <div className="flex items-center gap-1">
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>-
                    <span className="text-sm text-gray-500">
                      {testimonial.location}
                    </span>
                  </div>
                  <div className="rating flex items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <input
                        name={`rating-${testimonial.id}`}
                        className="mask mask-star-2 bg-amber-400"
                        key={index}
                        checked={index < testimonial.stars}
                        readOnly
                      />
                    ))}
                    <p className="text-sm ml-2">Verified Purchase</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
