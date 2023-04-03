import Footer from '../components/Footer';
import Header from '../components/Header';
import HoroscopeImage from '../assets/backgrounds/celestial.jpg';
import { useState } from 'react';

function Horoscopes() {
  const [day, setDay] = useState('today');
  return (
    <div>
      <Header
        isDarkBackground={true}
        image={HoroscopeImage}
        header="Horoscopes For Today, Tomorrow and Yesterday"
        subheader="Discover everyday magic of our horoscope predictions"
      />
      <div className="my-20 flex flex-col justify-center items-center gap-y-8 gap-x-20 md:flex-row tracking-wider">
        <h1
          className={`duration-200 hover:text-indigo-600 ${
            day === 'yesterday' ? 'border-b-4 border-solid border-black' : ''
          }`}
          onClick={() => setDay('yesterday')}
        >
          YESTERDAY
        </h1>
        <h1
          className={`border-slate-600 duration-200 hover:text-indigo-600 p-4'
            ${day === 'today' ? 'border-b-4 border-solid' : ''}`}
          onClick={() => setDay('today')}
        >
          TODAY
        </h1>
        <h1
          className={`duration-200 hover:text-indigo-600 p-4 ${
            day === 'tomorrow' ? 'border-b-4 border-solid border-black' : ''
          }`}
          onClick={() => setDay('tomorrow')}
        >
          TOMORROW
        </h1>
      </div>
      <div className="mx-20 md:mx-40 my-4 ">
        {day === 'today' && (
          <>
            <h1 className='text-2xl py-5'>Discover Today's Horoscopes</h1>
            <section className='flex flex-col gap-y-10'>
            <div>
             {/* <h3 className='text-lg'> Aries</h3> */}
              {window.localStorage.getItem('aries')}
              </div>
            <div>{window.localStorage.getItem('taurus')}</div>
            <div>{window.localStorage.getItem('gemini')}</div>
            <div>{window.localStorage.getItem('cancer')}</div>
            <div>{window.localStorage.getItem('leo')}</div>
            <div>{window.localStorage.getItem('virgo')}</div>
            <div>{window.localStorage.getItem('libra')}</div>
            <div>{window.localStorage.getItem('scorpio')}</div>
            <div>{window.localStorage.getItem('sagittarius')}</div>
            <div>{window.localStorage.getItem('capricorn')}</div>
            <div>{window.localStorage.getItem('aquarius')}</div>
            <div>{window.localStorage.getItem('pisces')}</div>
            </section>
          </>
        )}
        {day === 'yesterday' && <h1>Yesterday</h1>}
        {day === 'tomorrow' && <h1>Tomorrow</h1>}
      </div>
      <Footer />
    </div>
  );
}
export default Horoscopes;
