import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="flex justify-center items-center max-w-screen-lg mx-auto">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
