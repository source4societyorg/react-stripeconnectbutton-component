import React from 'react';
import PropTypes from 'prop-types';
import StripeConnectButtonStyles from './StripeConnectButtonStyles';
const StripeConnectButton = ({ redirectUri, clientId, csrfState, children, className }) => (
  <StripeConnectButtonStyles className={className}>
    <a href={`https://connect.stripe.com/express/oauth/authorize?redirect_uri=${redirectUri}&client_id=${clientId}&state=${csrfState}`} className={'connect-button'}>
      <span>{children}</span>
    </a>
  </StripeConnectButtonStyles>
);

StripeConnectButton.defaultProps = {
  children: 'Connect with Stripe',
  className: '',
  redirectUri: '',
  clientId: '',
  csrfState: '',
};

StripeConnectButton.propTypes = {
  redirectUri: PropTypes.string,
  clientId: PropTypes.string,
  csrfState: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default StripeConnectButton;
