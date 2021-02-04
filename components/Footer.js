import PropTypes from 'prop-types'

export const Footer = ({ copyRight }) => {
  return (
    <footer className="absolute w-full text-right text-sm bottom-0 p-3 mx-auto text-gray-400">
      <center>
        &copy; {copyRight || process.env.NEXT_PUBLIC_ENV_APP_NAME}
      </center>
    </footer>
  )
}

Footer.prototypes = {
  copyRight: PropTypes.string
}
