import Image from 'next/image';
import Button from './Button';

function Hero() {
  return (
    <div>
      <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
        <div className='hero-map' />

        {/* LEFT */}
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
          <Image
            src='/hero-icon.jpg'
            alt=''
            width={50}
            height={50}
            className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
          />
          <h1 className='bold-52 lg:bold-88'>Shahar Sheetrit</h1>
          <h2 className='bold-32 lg:bold-44'>SecureLife Hub</h2>
          <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
            Guardians of Well-Being: Your Health, Your Future, Your Legacy.{' '}
            <br />
            At Shahar Sheetrit, we’re more than insurance providers; we’re
            guardians committed to your holistic well-being.
          </p>

          <div className='my-11 flex flex-wrap gap-5'>
            <div className='flex items-center gap-2'>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Image
                    src='/star.svg'
                    key={index}
                    alt='star'
                    width={24}
                    height={24}
                  />
                ))}
            </div>

            <p className='bold-16 lg:bold-20 text-blue-70'>
              198k
              <span className='regular-16 lg:regular-20 ml-1'>
                Excellent Reviews
              </span>
            </p>
          </div>

          <div className='flex flex-col w-full gap-3 sm:flex-row'>
            <Button
              type='button'
              title='How we work?'
              icon='/play.svg'
              variant='btn_white_text'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
