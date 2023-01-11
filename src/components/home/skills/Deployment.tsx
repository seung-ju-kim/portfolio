import NETLIFY from '../assets/NETLIFY.svg';
import VERCEL from '../assets/VERCEL.svg';
import HEROKU from '../assets/HEROKU.svg';
import LINUX from '../assets/LINUX.svg';
import SkillCard from './SkillCard';

export default function Deployment() {
  return (
    <SkillCard title='DEPLOYMENT'>
      <div className='flex justify-around w-full items-center'>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <NETLIFY width={60} height={60} />
          <small>NETLIFY</small>
        </div>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <VERCEL width={60} height={60} />
          <small>VERCEL</small>
        </div>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <HEROKU width={60} height={60} />
          <small>HEROKU</small>
        </div>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <LINUX width={60} height={60} />
          <small>LINUX</small>
        </div>
      </div>
    </SkillCard>
  );
}
