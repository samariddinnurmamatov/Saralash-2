import PropTypes from 'prop-types';
import Container from '../../../components/shared/Container';

const SectionContainer = ({ children }) => (
  <Container>
    <div className="content">{children}</div>
  </Container>
);

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionContainer;
