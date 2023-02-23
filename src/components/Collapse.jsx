import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './Collapse.module.scss'

function Collapse({ title, children }) {
  console.log(styles)

  const [isOpen, toggleIsOpen] = useState(false)
  const contentBox = useRef()
  const chevron = useRef()

  useEffect(() => {
    chevron.current.style.transform = isOpen ? 'none' : 'rotateX(180deg)'
    contentBox.current.style.height = isOpen ? contentBox.current.scrollHeight.toString() + 'px' : null
  })

  return (
    <div className={styles.collapse}>
      <div className={styles['title-box']} onClick={() => toggleIsOpen(!isOpen)}>
        <p className={styles.title}>{title}</p>
        <div className={styles.chevron} ref={chevron}></div>
      </div>
      <div className={styles['content-box']} ref={contentBox}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  className: PropTypes.string,
}

export default Collapse
