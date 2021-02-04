import PropTypes from 'prop-types'
import { Footer } from './Footer'
import { Header } from './Header'
import { Navbar } from './Navbar'

export const Layout = ({ children, title, ...props }) => {
  return (
    <>
      <Header title={title} />
      <Navbar />
      <div className="w-full md:w-2/5 mx-auto">
        {children}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string
}
