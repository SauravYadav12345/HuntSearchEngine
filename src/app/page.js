import  {HomeHeader}  from './components/HomeHeader';
import Image from 'next/image';
import { HomeSearch } from './components/HomeSearch';

const Home = () => {
  return (
    <>
    <HomeHeader/>
    <div className='flex flex-col items-center mt-24' >
      <Image 
      src="https://cdn.vectorstock.com/i/preview-1x/80/89/internet-search-engine-optimization-expose-vector-26128089.webp"
      alt="Google Logo" 
      width={300}
      height={100}
      priority
      style={{ width:"auto" }}
      /> 
      <HomeSearch/>
    </div>
    </>
  );
}

export default Home;