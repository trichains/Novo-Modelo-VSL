import Container from '../Container/Container';

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
              href="/contact"
              className="hover:underline hover:text-amber-400 transition-colors duration-300 tracking-wider font-medium">
              Contact
            </a>
            <a
              href="/terms"
              className="hover:underline hover:text-amber-400 transition-colors duration-300 tracking-wider font-medium">
              Terms
            </a>
            <a
              href="/privacy"
              className="hover:underline hover:text-amber-400 transition-colors duration-300 tracking-wider font-medium">
              Privacy
            </a>
            <a
              href="/return-policy"
              className="hover:underline hover:text-amber-400 transition-colors duration-300 tracking-wider font-medium">
              Return Policy
            </a>
            <a
              href="/shipping"
              className="hover:underline hover:text-amber-400 transition-colors duration-300 tracking-wider font-medium">
              Shipping
            </a>
            <a
              href="/disclaimer"
              className="hover:underline hover:text-amber-400 transition-colors duration-300 tracking-wider font-medium">
              Disclaimer
            </a>
            <a
              href="/report-spam"
              className="hover:underline hover:text-amber-400 transition-colors duration-300 tracking-wider font-medium">
              Report Spam
            </a>
          </div>
          {/* Texto informativo */}
          <div className="flex flex-col gap-4 text-xs md:text-sm">
            <p>
              Statements on this website have not been evaluated by the FDA.
              Products are not intended to diagnose, treat, cure or prevent any
              disease.
            </p>
            <p>
              The website&#39;s content and the product for sale is based upon
              the author&#39;s opinion and is provided solely on an &#34;AS
              IS&#34 and &#34;AS AVAILABLE&#34; basis. You should do your own
              research and confirm the information with other sources when
              searching for information regarding health issues and always
              review the information carefully with your professional health
              care provider before using any of the protocols presented on this
              website and/or in the product sold here. Neither ClickBank nor the
              author are engaged in rendering medical or similar professional
              services or advice via this website or in the product, and the
              information provided is not intended to replace medical advice
              offered by a physician or other licensed healthcare provider. You
              should not construe ClickBank&#39;s sale of this product as an
              endorsement by ClickBank of the views expressed herein, or any
              warranty or guarantee of any strategy, recommendation, treatment,
              action, or application of advice made by the author of the
              product.
            </p>
            <p>
              Some names and personal identifying information have been changed
              to protect the privacy of individuals.
            </p>
            <p>
              ClickBank is the retailer of products on this site. CLICKBANK® is
              a registered trademark of Click Sales Inc., a Delaware corporation
              located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709,
              USA and used by permission. ClickBank&#39;s role as retailer does
              not constitute an endorsement, approval or review of these
              products or any claim, statement or opinion used in promotion of
              these products.
            </p>
            <div className="flex flex-col gap-1">
              <p>
                For Product Support, please contact the vendor{' '}
                <a
                  href="#"
                  className="text-blue-400 underline hover:text-blue-600">
                  here
                </a>
                .
              </p>
              <p>
                For Order Support, please contact ClickBank{' '}
                <a
                  href="#"
                  className="text-blue-400 underline hover:text-blue-600">
                  here
                </a>
                .
              </p>
            </div>
            <p className="text-gray-500">
              © Sugar Defender Research 2024 All Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
