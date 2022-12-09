import PropTypes from 'prop-types';
import { MainTitle, SecondTitle } from './Titles.styled';

export const MainTitles = ({ title }) => {
  return <MainTitle>{title}</MainTitle>;
};

export const SecondTitles = ({ title }) => {
  return <SecondTitle>{title}</SecondTitle>;
};

MainTitles.propTypes = {
  title: PropTypes.string.isRequired,
};

SecondTitles.propTypes = {
  title: PropTypes.string.isRequired,
};
