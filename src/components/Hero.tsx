
import { Link } from 'react-router-dom';
import WomanImg from '../assets/woman.svg';

const Hero = () => {
    return <section className="bg-pink-100 h-[800px] 
    bg-hero bg-no-repeat bg-cover bg-center py-24">
        <div className="container mx-auto flex justify-around h-full">
            <div className='flex flex-col justify-center'>
                <div className='font-semibold flex items-center uppercase'>
                    <div className='w-10 h-[2px] mr-3 bg-red-500'/>New Trend
                </div>
                <h1 className='text-[70px] leading-[1.1] font-light'>
                    É e-commerce da <br />
                    <span className='font-semibold'>mulher</span>
                </h1>
                <Link to={'/'} className='self-start 
                uppercase font-semibold border-b-2 border-primary text-[8px]'>
                    Saiba mais
                </Link>
            </div>
            <div className='hidden lg:block'>
                <img src={WomanImg} alt="" />
            </div>
        </div>
    </section>
};

export default Hero;