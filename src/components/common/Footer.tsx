import { ICONS } from '@/constants/Icons';
import ExternalLink from './ExternalLink';

const Footer = () => {
  return (
    <footer className="my-20 text-center text-sm border-t pt-10">
      <div className="flex-center gap-1 pb-5 ">
        <ExternalLink href="https://github.com/hyun812">{ICONS.GITHUB}</ExternalLink>
        <ExternalLink href="https://www.instagram.com/hyun_ili">{ICONS.INSTAGRAM}</ExternalLink>
        <ExternalLink href="mailto:dltmdgus4802@gmail.com">{ICONS.MAIL}</ExternalLink>
      </div>
      <p className="py-3">Copyright &copy; 2024, All right reserved</p>
      <p>Powered by Next.js, Vercel</p>
    </footer>
  );
};

export default Footer;
