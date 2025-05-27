import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'

export default function Index() {
  const list = [
    {
      title: '咨询服务',
      descript: '我们提供咨询服务包括：职业规划、旅游、IT、软件等各种咨询服务，帮助客户快速解决他们的问题。',
    },
    {
      title: '国学文化',
      descript:
        '我们有合作中的国学文化大师等人脉，如果你有需要，我们可以帮助你，并引荐',
    },
    {
      title: '网站/小程序服务',
      descript: '您只需要使用 iWebsite 的模版，然后按照我们的步骤即可拥有一个属于自己的网站。',
    },
    {
      title: '商业引荐',
      descript: '我们有各行各业的人脉资源，涵盖线上线下等各类软件或产品，如果你需要引荐，我们乐于帮你引荐，并助力你生意上的成功。',
    },
  ]
  return (
    <main className="dark:bg-slate-800">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-2 h-96 ">
        <div className="relative h-full">
          <Image src="/banner.jpeg" alt="Banner" layout="fill" objectFit="cover" quality={100} />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">欢迎访问旅神文化官网</h1>
              <p className="text-lg lg:text-xl text-white">
                在这里，你可以了解旅神文化相关服务，并联系我们。
                <a
                  href="https://xiaolvshen.cn/about"
                  className="text-gray bg-blue-500 hover:bg-blue-600 mx-2 px-3 py-2 rounded-md text-sm font-medium"
                >
                  联系我们
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 from-gray-300 to-gray-700">
        <div className="py-2 text-center mb-4">
          <h2 className="text-center text-xl mb-2 dark:text-gray-300">旅神文化服务</h2>
          <p className="text-xs text-gray-400">当然不止这些</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between mb-4 w-full">
          {list.map((item) => {
            return (
              <div
                className="h-1/2 md:h-1/4 mx-2 p-2 mb-8 md:mb-1 rounded-md shadow cursor-pointer hover:shadow-md"
                key={item.title}
              >
                <h3 className="text-center text-lg dark:text-gray-300">{item.title}</h3>
                <p className="block p-4 text-sm text-gray-500 tracking-wider leading-6">
                  {item.descript}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      {/* <div>
        <Image src="/设计图.png" width={1600} height={700} alt="设计图" />{' '}
      </div> */}

      <Footer />
    </main>
  )
}
