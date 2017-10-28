import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { locale, messages } = state.intl;
  return {
    key: locale,
    locale,
    messages
  };
};

export default connect(mapStateToProps)(IntlProvider);
