import Header from './../components/header'
import Footer from './../components/footer'

export default function About() {
  const qaList = [
    {
      q: '国学和商业咨询，请联系',
      a: '微信：fssj131',
    },
    {
      q: '网站/小程序咨询，请联系',
      a: '微信：sankyu-tang',
    },
    {
      q: '你可以通过邮件联系我们',
      a: 'xiaolvshen@126.com',
    }
  ]
  return (
    <main className="dark:bg-slate-800">
      <Header />
      <div className="max-w-7xl mx-auto p-4 h-[36rem]">
        {qaList.map((e) => {
          return (
            <div key={e.a} className="mb-4">
              <h2 className="text-xl mb-2 dark:text-gray-300">{e.q}</h2>
              <p className="text-sm text-gray-600">{e.a}</p>
            </div>
          )
        })}
      </div>
      <Footer />
    </main>
  )
}
