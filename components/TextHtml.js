import PropTypes from 'prop-types'

export const TextHtml = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />
}

TextHtml.propTypes = {
  text: PropTypes.string.isRequired
}
