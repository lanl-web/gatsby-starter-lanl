import React from 'react';
import './StandardContactBlock.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const StandardContactBlock = ({
  className,
  dividerTop,
  dividerBottom,
  contacts,
}) => {
  const classes = classNames(
    'standard-contact-block',
    dividerBottom && 'divider-bottom',
    dividerTop && 'divider-top',
    className,
  );
  return (
    <div className={classes} data-testid='lanl-contactblock'>
      <h3 className='sidebar-header'>CONTACTS</h3>
      {contacts &&
        contacts.map(({ name, mailStop, email }, index) => (
          <div className='contact' key={index}>
            <p className='contact-address'>{name}</p>
            <p className='contact-address'>Los Alamos National Laboratory</p>
            <p className='contact-address'>{mailStop}</p>
            <p className='contact-address'>Los Alamos, NM 87545</p>
            <a className='contact-link' href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        ))}
    </div>
  );
};

StandardContactBlock.defaultProps = {
  className: '',
  dividerTop: false,
  dividerBottom: false,
};

StandardContactBlock.propTypes = {
  className: PropTypes.string,
  dividerTop: PropTypes.bool,
  dividerBottom: PropTypes.bool,

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      mailStop: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
  ),
};

export default StandardContactBlock;
