import QNET from '../assets/QNET.svg';
import SkillCard from './SkillCard';

export default function Certificate() {
  return (
    <SkillCard title='CERTIFICATE'>
      <div className='flex justify-around w-full items-center'>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <QNET width={60} height={60} />
          <small>정보처리기사</small>
        </div>
      </div>
    </SkillCard>
  );
}
