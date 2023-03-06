import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Chevron from '../Chevron/Chevron';
import styles from './Collapse.module.scss';

function Collapse({ label, children, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const collapsible = useRef(null);
  const resizeObserver = new ResizeObserver((entries) => setHeight(entries[0].borderBoxSize[0].blockSize));

  useEffect(() => {
    if (!isOpen) setHeight(0);
    else resizeObserver.observe(collapsible.current);
  }, [isOpen, height]);

  return (
    <div className={classNames(styles.default, className)}>
      <div className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        <p className={styles.label}>{label}</p>
        <Chevron className={styles.chevron} up={isOpen} />
      </div>
      <div className={styles.collapsible} style={{ height }}>
        <div className={styles.content} ref={collapsible}>
          {children}
        </div>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  className: PropTypes.string,
};

export default Collapse;
