//import { useState, useEffect, useRef } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Chevron from '../components/Chevron';
import styles from './Collapse.module.scss';

function Collapse({ label, children, className }) {
  const [isOpen, setIsOpen] = useState(false);

  // const bar = useRef(null)

  // useEffect(() => {
  // //   const chevron = bar.current.lastChild
  // //   chevron.style.transform = isOpen ? 'rotateX(180deg)' : 'none'
  //   const contentBox = bar.current.nextElementSibling
  //   contentBox.style.height = isOpen ? contentBox.scrollHeight.toString() + 'px' : null
  // })

  return (
    <div className={classNames(styles.default, className)}>
      <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        {/* ref={bar} */}
        <p className={styles.label}>{label}</p>
        <Chevron className={styles.chevron} up={isOpen} />
      </div>
      <div className={styles.collapse}>{isOpen && <div className={styles.content}>{children}</div>}</div>
    </div>
  );
}

Collapse.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  className: PropTypes.string,
};

export default Collapse;
