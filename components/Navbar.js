import PropTypes from 'prop-types'

export const Navbar = ({ brand }) => {
  return (
    <div className="w-full border-b flex flex-row flex-wrap items-center p-1">
      <div className="w-1/5 p-3">
        <button className="text-2xl font-thin text-gray-600"><i className="fa fa-bars"></i></button>
      </div>
      <div className="w-3/5 p-3">
        <center>
          <h1 className='font-bold'>{brand || process.env.NEXT_PUBLIC_ENV_APP_NAME}</h1>
        </center>
      </div>
      <div className="w-1/5 flex flex-row flex-wrap">
        <ul className="w-3/4 flex flex-row flex-wrap text-xs font-semibold">
          <li className="mx-3">
            <a href="#">ABOUT</a>
          </li>
          <li className="mx-3">
            <a href="#">SIGN IN</a>
          </li>
        </ul>
        <div className="w-1/4 text-lg text-gray-600"><a href=""><i className="fa fa-search"></i></a></div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  brand: PropTypes.string
}
