import { FaCode } from 'react-icons/fa'
import './SectionHeader.css'

const SectionHeader = ({ title }) => {
  return (
    <div className='section-header'>
      <h2>{title}</h2>
      <div className="icon">
        <span>
          <FaCode />
        </span>
      </div>
    </div>
  )
}

export default SectionHeader