import Container from '../Container/Container';

// Estrutura de dados para as perguntas frequentes, facilitando a manutenção e adição de novas questões.
const faqData = [
  {
    question: 'Is Sugar Defender right for Me?',
    answer:
      "Sugar Defender has provided amazing blood sugar support for men and women in their 30s, 40s, 50s and even 70s. Because it was engineered based on teachings of modern science, Sugar Defender formula is very gentle yet very powerful at the same time using pure plant ingredients and natural minerals. And you can rest assured knowing it's manufactured in the United States in a state-of-the-art FDA registered and GMP certified facility."
  },
  {
    question: 'What kind of results can I expect from Sugar Defender?',
    answer:
      'Sugar Defender is a powerful and effective blood sugar support and all-day energy helper. Thousands of people enjoy taking Sugar Defender every day with great results and we have not received a single complaint yet. Once your body adapts to the ingredients you will notice less hunger, more energy and better blood sugar readings.'
  },
  {
    question: 'How long does it take to see results?',
    answer:
      "We're all different and that's why the time it takes to see results varies. Most people start feeling a difference after the first week. In our tests, the best results come when you take Sugar Defender consistently for 3 months (or longer). Therefore, we strongly recommend you take advantage of our 3 or 6 bottle discount package."
  },
  {
    question: 'What is the best way to take Sugar Defender?',
    answer:
      'Take two full droppers under your tongue in the morning before breakfast... Hold the tincture under your tongue for 30 seconds before swallowing to maximize absorption. If the taste is too potent or prefer another method, dissolve two full droppers in a glass of water and drink it either in one go or split into two servings. You will love the results and feel the difference with each drop.'
  },
  {
    question: "What if Sugar Defender doesn't work for me?",
    answer:
      "I demand you are enthusiastic with your purchase, not just satisfied. And you won't know until you try it! So you can use Sugar Defender for 60 days, with my 'No Questions Asked 100% Money Back Guarantee'. The only way to be totally convinced is to try this amazing formula and experience the results for yourself."
  },
  {
    question: 'Where can I buy Sugar Defender and how quickly can I get it?',
    answer:
      "To make sure you are buying the original product and to ensure the purity of ingredients please buy from the official website only. We'll ship your order directly to your home or office using a premium carrier such as FedEx or UPS. We strive to ship every order within 24 working hours and to make things easy you will receive an email with your tracking number so that you can follow your package. On average, the package will arrive at your doorstep somewhere between 5 to 10 days for domestic orders."
  },
  {
    question: 'Is my purchase secure? How many times will you charge my card?',
    answer:
      'To purchase Sugar Defender you are only asked for a one time payment right on this page. There are no other future payments needed to benefit from this product. This website is highly secure. We use industry-leading technology (such as SSLs) to keep your information safe and private.'
  }
];

const FAQs = () => {
  return (
    <div className="bg-gradientCustom py-12 px-4" id="faqs">
      <Container>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-full flex flex-col gap-4">
            {faqData.map((faq, index) => (
              <div key={index} className="collapse collapse-arrow bg-white">
                {/* Input radio utilizado para controlar a abertura exclusiva de cada item do accordion */}
                <input
                  type="radio"
                  name="faq"
                  id={`faq-${index}`}
                  className="peer"
                />

                {/* Título do accordion que, ao ser clicado, alterna a visibilidade do conteúdo */}
                <div className="collapse-title text-xl font-medium bg-slate-100">
                  <p className="text-base md:text-xl">{faq.question}</p>
                </div>

                {/* Conteúdo do accordion que é exibido ou ocultado dinamicamente */}
                <div className="collapse-content transition-all duration-500 ease-in-out transform scale-95 peer-checked:scale-100 peer-checked:opacity-100 opacity-0">
                  <p className="text-base md:text-lg mt-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQs;
