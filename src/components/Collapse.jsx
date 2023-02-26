import { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Chevron from '../components/Chevron'
import styles from './Collapse.module.scss'

function Collapse({ title, titleHeight, children, className }) {
  const extClassName = classNames(styles.default, className)
  const [isOpen, toggleIsOpen] = useState(false)
  const titlebox = useRef(null)

  useEffect(() => {
    titleHeight && (titlebox.current.style.height = titleHeight)
  }, [])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
      console.log('SCROLLH :', titlebox.current.nextElementSibling.scrollHeight)
    })
  })

  useEffect(() => {
    const chevron = titlebox.current.lastChild
    chevron.style.transform = isOpen ? 'rotateX(180deg)' : 'none'
    const contentBox = titlebox.current.nextElementSibling
    contentBox.style.height = isOpen ? contentBox.scrollHeight.toString() + 'px' : null
    // contentBox.style.height = isOpen ? 'auto' : null
    // contentBox.style.maxHeight = isOpen ? '1000px' : null
  })

  return (
    <div className={extClassName}>
      <div className={styles['title-box']} ref={titlebox} onClick={() => toggleIsOpen(!isOpen)}>
        <p className={styles.title}>
          {title} {windowWidth}
        </p>
        <Chevron className={styles.chevron} />
      </div>
      <div className={styles['content-box']}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  titleHeight: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  className: PropTypes.string,
}

export default Collapse
