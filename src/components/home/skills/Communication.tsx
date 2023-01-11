import NOTION from '../assets/NOTION.svg';
import FIGMA from '../assets/FIGMA.svg';
import SLACK from '../assets/SLACK.svg';
import SkillCard from './SkillCard';

export default function Communication() {
  return (
    <SkillCard title='COMMUNICATION'>
      <div className='flex justify-around w-full items-center'>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <NOTION width={60} height={60} />
          <small>NOTION</small>
        </div>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <FIGMA width={60} height={60} />
          <small>FIGMA</small>
        </div>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <SLACK width={60} height={60} />
          <small>SLACK</small>
        </div>
      </div>
    </SkillCard>
  );
}
