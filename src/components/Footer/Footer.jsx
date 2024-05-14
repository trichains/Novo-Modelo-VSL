import Container from '../Container/Container';
// importar as politicas de privacidade e links uteis

// Componente Footer responsável por mostrar informações legais e links de navegação
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <Container>
        {/* Área de navegação e avisos */}
        <div className="flex flex-col justify-center items-center gap-8 text-center">
          {/* Links de navegação */}
          <div className="flex flex-wrap text-center md:text-left items-center justify-center gap-4">
            <a
              href="#"
              className="hover:underline hover:text-yellow-400 transition-colors duration-300 tracking-wider font-medium">
              Contact
            </a>
            <a
              href="#"
              className="hover:underline hover:text-yellow-400 transition-colors duration-300 tracking-wider font-medium">
              Terms
            </a>
            <a
              href="#"
              className="hover:underline hover:text-yellow-400 transition-colors duration-300 tracking-wider font-medium">
              Privacy
            </a>
            <a
              href="#"
              className="hover:underline hover:text-yellow-400 transition-colors duration-300 tracking-wider font-medium">
              Return Policy
            </a>
            <a
              href="#"
              className="hover:underline hover:text-yellow-400 transition-colors duration-300 tracking-wider font-medium">
              Shipping
            </a>
            <a
              href="#"
              className="hover:underline hover:text-yellow-400 transition-colors duration-300 tracking-wider font-medium">
              Disclaimer
            </a>
            <a
              href="#"
              className="hover:underline hover:text-yellow-400 transition-colors duration-300 tracking-wider font-medium">
              Report Spam
            </a>
          </div>
          {/* Texto informativo */}
          <div className="flex flex-col gap-4 text-xs md:text-sm">
            <p>
              The information we provide is not intended to replace consultation
              with a qualified medical professional. We encourage you to inform
              your doctor about any changes you make to your lifestyle and
              discuss them with him or her. For questions or concerns about any
              medical conditions you may have, please contact your doctor. The
              content of the website and the product for sale are based on the
              author&#39;s opinion and are provided &quot;AS IS&quot; and
              &quot;AS AVAILABLE&quot;. You should conduct your own research and
              verify the information with other sources when researching health
              issues and always review the information carefully with your
              healthcare professional before using any of the protocols
              presented on this website and/or the product sold here.
              Testimonials, case studies, and examples found on this page are
              results submitted to us by FloraSlim users and may not reflect the
              typical buyer&#39;s experience, may not apply to an average
              person, and are not intended to represent or guarantee that any
              person will achieve the same or similar results. Some names and
              personally identifying information on this site have been changed
              to protect individuals&#39; privacy.
            </p>
            <p>
              The statements on this website have not been evaluated by the Food
              and Drug Administration. This product is not intended to diagnose,
              treat, cure, or prevent any disease. The information provided by
              this website or this company is not a substitute for a
              face-to-face consultation with your physician and should not be
              construed as individual medical advice. The testimonials on this
              website are individual cases and do not guarantee that you will
              get the same results. All content, including text, graphics,
              images, and information, contained on or available through this
              website is for general information purposes only. You are
              encouraged to confirm any information obtained from or through
              this website with other sources and review all information
              regarding any medical condition or treatment with your physician.
              NEVER DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING
              MEDICAL TREATMENT BECAUSE OF SOMETHING YOU HAVE READ ON OR
              ACCESSED THROUGH THIS WEBSITE.
            </p>

            <p className="text-gray-500">
              © FloraSlim Research 2024 All Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
