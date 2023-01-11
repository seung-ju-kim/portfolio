import GIT from '../assets/GIT.svg';
import GITHUB from '../assets/GITHUB.svg';
import GITLAB from '../assets/GITLAB.svg';
import SkillCard from './SkillCard';

export default function VersionControl() {
  return (
    <SkillCard title='VERSION_CONTROL'>
      <div className='flex justify-around w-full items-center'>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <GIT width={60} height={60} />
          <small>GIT</small>
        </div>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <GITHUB width={60} height={60} />
          <small>GITHUB</small>
        </div>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <GITLAB width={60} height={60} />
          <small>GITLAB</small>
        </div>
      </div>
    </SkillCard>
  );
}
