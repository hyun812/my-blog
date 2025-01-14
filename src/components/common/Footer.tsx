import ExternalLink from './ExternalLink';
import GitHubIcon from '@/assets/icons/github.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import MailIcon from '@/assets/icons/mail.svg';

const Footer = () => {
  return (
    <footer className="my-20 text-center text-sm border-t pt-10">
      <div className="flex-center gap-1 pb-5 ">
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
      <p className="py-3">Copyright &copy; 2024, All right reserved</p>
      <p>Powered by Next.js, Vercel</p>
    </footer>
  );
};

export default Footer;
