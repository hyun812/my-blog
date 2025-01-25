import Image from 'next/image';
import { introductions } from '@/constants/about';
import ContactLink from '../common/ContactLink';

const Introduction = () => {
  return (
    <>
      <div className="flex-center gap-10 mt-20">
        <div>
          <div>
            <h2 className="text-3xl">
              안녕하세요 <br /> <span className="text-4xl font-bold pr-1">이승현</span>입니다.
            </h2>
          </div>
          <div className="flex pt-3">
            <ContactLink />
          </div>
        </div>
        <Image
          src="/profile.png"
          width={140}
          height={140}
          alt="profile"
          className="object-fill rounded-full"
        />
      </div>
      <ul className="mt-20 flex-1 flex flex-col gap-5">
        {introductions.map((intro, index) => (
          <li key={index}>{intro}</li>
        ))}
      </ul>
    </>
  );
};

export default Introduction;
