import ExternalLink from './ExternalLink';
import GitHubIcon from '@/assets/icons/github.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import MailIcon from '@/assets/icons/mail.svg';

const ContactLink = () => {
  return (
    <>
      <ExternalLink
        aria-label="github"
        href="https://github.com/hyun812"
      >
        <GitHubIcon />
      </ExternalLink>
      <ExternalLink
        aria-label="instagram"
        href="https://www.instagram.com/hyun_ili"
      >
        <InstagramIcon />
      </ExternalLink>
      <ExternalLink
        aria-label="mail"
        href="mailto:dltmdgus4802@gmail.com"
      >
        <MailIcon />
      </ExternalLink>
    </>
  );
};

export default ContactLink;
