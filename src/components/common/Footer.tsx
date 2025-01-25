import ContactLink from './ContactLink';

const Footer = () => {
  return (
    <footer className="my-20 text-center text-sm border-t pt-10">
      <div className="flex-center gap-1 pb-5 ">
        <ContactLink />
      </div>
      <p className="py-3">Copyright &copy; 2024, All right reserved</p>
      <p>Powered by Next.js, Vercel</p>
    </footer>
  );
};

export default Footer;
