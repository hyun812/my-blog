import Activity from '@/components/about/Activity';
import Award from '@/components/about/Award';
import Introduction from '@/components/about/Introduction';
import Project from '@/components/about/Project';

const AboutPage = () => {
  return (
    <>
      <div className="my-10">
        <h1 className="text-3xl font-bold pb-3">About</h1>
        <p>저에 대해 소개합니다.</p>
      </div>
      <Introduction />
      <Project />
      <Activity />
      <Award />
    </>
  );
};

export default AboutPage;
