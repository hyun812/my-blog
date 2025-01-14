import Image from 'next/image';
import ExternalLink from '../common/ExternalLink';
import { introductions } from '@/constants/about';
import GitHubIcon from '@/assets/icons/github.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import MailIcon from '@/assets/icons/mail.svg';

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
            <ExternalLink href="https://github.com/hyun812">
              <GitHubIcon />
            </ExternalLink>
            <ExternalLink href="https://www.instagram.com/hyun_ili">
              <InstagramIcon />
            </ExternalLink>
            <ExternalLink href="mailto:dltmdgus4802@gmail.com">
              <MailIcon />
            </ExternalLink>
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
