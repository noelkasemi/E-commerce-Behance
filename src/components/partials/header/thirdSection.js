import Click from '../../../uitls/svg/click'
import Truck from '../../../uitls/svg/truck'
import Card from '../../../uitls/svg/card'
import Hand from '../../../uitls/svg/hand'

export default function ThirdSection({style = ''}) {

  const articles = [
    {id: 0, label: 'Fast transport', subLabel: 'The world in 2 days', icon: <Truck /> },
    {id: 1, label: 'Original Products', subLabel: 'High quality', icon: <Hand /> },
    {id: 2, label: 'Order Online', subLabel: 'Pay with credit card', icon: <Card /> },
    {id: 3, label: 'Quick orders', subLabel: 'With a single Click', icon: <Click /> }
  ]

    return (

        <section className={`${style === '' ? 'lg:flex' : style} hidden w-full px-8 shadow pb-2 space-x-4 `}>
        {articles.map(article => (
          <article key={article.id} className='bg-slate-100 shadow-xl border items-center space-x-2 p-2 rounded w-full flex' >
           <p key={article.label + 1} className=''>{article.icon}</p>
            <h1>
            <p key={article.label} className=' font-bold'>{article.label}</p>
            <p key={article.subLabel} className='text-sm'>{article.subLabel}</p>
            </h1>
          </article>
        )) }
        </section>
      
    );
  }