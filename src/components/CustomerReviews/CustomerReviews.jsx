import Container from '../Container/Container';

const CustomerReviews = () => {
  return (
    <div className="bg-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
            <p className="text-sm sm:text-base">
              Our customers say <span className="font-bold">4.98/5</span>
            </p>
            <div className="rating flex items-center">
              <input className="mask mask-star-2 bg-yellow-400" disabled />
              <input className="mask mask-star-2 bg-yellow-400" disabled />
              <input className="mask mask-star-2 bg-yellow-400" disabled />
              <input className="mask mask-star-2 bg-yellow-400" disabled />
              <input className="mask mask-star-2 bg-yellow-400" disabled />
            </div>
            <p className="text-xs sm:text-sm">based on 2000+ reviews</p>
          </div>
          <div className="w-full flex justify-center gap-2 text-center items-center text-sm sm:text-base">
            <a
              href="#reviews"
              className="hover:text-indigo-800 transition-colors duration-300 underline">
              View Reviews
            </a>
            <span className="mx-1">|</span>
            <a
              href="#faqs"
              className="hover:text-indigo-800 transition-colors duration-300 underline">
              View FAQ&#39;s
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerReviews;
