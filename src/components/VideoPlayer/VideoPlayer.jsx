import Container from '../Container/Container';
import PropTypes from 'prop-types';

const VideoPlayer = ({ src }) => {
  return (
    <div className="bg-gradientCustom text-white py-12">
      <Container>
        <div className="w-full flex flex-col items-center text-center gap-6">
          <div className="flex flex-col gap-2 px-4">
            <h1 className="text-4xl font-medium">Doctors Shocked:</h1>
            <h2 className="text-5xl font-bold">
              Can This Enzyme Bust Diabetes?
            </h2>
          </div>
          <div className="relative w-full">
            <iframe
              src={src}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full"
              style={{ aspectRatio: '16 / 9' }}></iframe>
          </div>
          <h3 className="text-base font-bold px-4">
            IMPORTANT HEALTH UPDATE May take up to 10 seconds to load. Make sure
            your sound is on
          </h3>
        </div>
      </Container>
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired
};

export default VideoPlayer;
