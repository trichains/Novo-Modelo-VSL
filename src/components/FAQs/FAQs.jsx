import Container from '../Container/Container';

// Estrutura de dados para as perguntas frequentes, facilitando a manutenção e adição de novas questões.
const faqData = [
  {
    question: 'What Is FloraSlim?',
    answer:
      'FloraSlim is a 100% natural, safe, and effective weight loss product. Thousands of people undergo treatment with FloraSlim every day without any reports of side effects. Each bottle is manufactured in the United States in state-of-the-art facilities approved by the FDA, ensuring the highest standards of excellence and quality in production. Rest assured that you are using a product that is safe and of the highest quality in your weight loss routine.'
  },
  {
    question: "What's the best-selling package?",
    answer:
      "Our best-selling package is the 6-bottle bundle for a 6-month treatment because its natural ingredients work progressively in the body, providing more lasting results. This package is recommended because it's the treatment duration identified by researchers as the optimal time to achieve the best weight loss results. With continuous use of FloraSlim, you can achieve a healthier and slimmer body. Take advantage of our offer for incredible results in your weight loss journey."
  },
  {
    question: 'Are there any contraindications or side effects?',
    answer:
      'FloraSlim is a natural weight loss product that causes no side effects and has no contraindications, making it completely safe for anyone. Approved by the FDA and other US regulatory bodies, FloraSlim is suitable for your weight loss routine. Enjoy the benefits worry-free.'
  },
  {
    question: 'How should i use FloraSlim?',
    answer:
      "It's very simple! Just use 2 droppers of FloraSlim per day as directed, incorporating it into your daily routine. Results will start to become apparent within the first few weeks of use."
  },
  {
    question: 'Is the composition natural?',
    answer:
      "Yes, FloraSlim's composition is made from 100% natural, health-safe ingredients that have been clinically tested and approved. Our product is carefully formulated to ensure effectiveness in weight loss while maintaining user safety and health. With FloraSlim, you can be confident that you're using a reliable product on your weight loss journey."
  },
  {
    question: 'How soon can i see my results?',
    answer:
      'Results with FloraSlim vary from person to person, but many users report significant improvements in their weight and body composition within the first few weeks of use. With its natural and effective formula, FloraSlim can help speed up metabolism, reduce body fat, and promote healthy weight loss. Try it for yourself and start enjoying the benefits of a slimmer body with FloraSlim.'
  },
  {
    question: "What's the delivery time frame?",
    answer:
      "The average delivery time for FloraSlim in the United States is 3 to 12 business days, depending on the location. Our product is shipped following payment confirmation, and we are committed to providing high-quality service to our customers, ensuring that your order is delivered quickly and in perfect condition. If you're looking to improve your body composition with FloraSlim, just place your order now and wait for the efficient and reliable delivery of the product."
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
