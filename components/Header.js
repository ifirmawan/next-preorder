import Head from 'next/head'
import PropTypes from 'prop-types'

export const Header = ({ title }) => {
  return (
    <Head>
      <title>{ title ? `${title} | ` : '' }{process.env.NEXT_PUBLIC_ENV_APP_NAME}</title>
    </Head>
  )
}

Header.propTypes = {
  title: PropTypes.string
}
