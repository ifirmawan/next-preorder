import { Layout, TextHtml } from '../components'

function HomePage ({ contents }) {
  return (
    <Layout title='Home'>
      {contents?.trending && (
        <>
          <div className='mx-5 my-3 text-sm'>
            <a href='#' className=' text-red-600 font-bold tracking-widest'>{contents.trending.section}</a>
          </div>
          <div className='w-full text-gray-800 text-4xl px-5 font-bold leading-none'>
            {contents.trending.title}
          </div>
          <div className='w-full text-gray-500 px-5 pb-5 pt-2'>
            <TextHtml text={contents.trending.caption} />
          </div>
        </>
      )}
    </Layout>
  )
}

HomePage.getInitialProps = () => {
  return {
    contents: {
      trending: {
        section: 'HOT PREORDER',
        title: 'Action Figure Demon Slayer  Will Release at 1st March 2021',
        caption: 'Demon Slayer: Kimetsu no Yaiba (Japanese: 鬼滅の刃, Hepburn: Kimetsu no Yaiba, lit. &quotBlade of Demon Destruction&quot) is a Japanese manga series written and illustrated by Koyoharu Gotouge.'
      }
    }
  }
}

export default HomePage
