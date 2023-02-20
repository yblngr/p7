import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function Collapse({ title, children }) {
  const [isOpen, toggleIsOpen] = useState(false)
  const contentBox = useRef()
  const chevron = useRef()

  useEffect(() => {
    chevron.current.style.transform = isOpen ? 'none' : 'rotateX(180deg)'
    contentBox.current.style.height = isOpen ? contentBox.current.scrollHeight.toString() + 'px' : null
  })

  return (
    <div className="collapse">
      <div className="title-box" onClick={() => toggleIsOpen(!isOpen)}>
        <p className="title">{title}</p>
        <div className="chevron" ref={chevron}></div>
      </div>
      <div className="content-box" ref={contentBox}>
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default Collapse
