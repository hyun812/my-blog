import { PostData } from '@/types/post';
import CalendarIcon from '@/assets/icons/calendar.svg';
import ClockIcon from '@/assets/icons/clock.svg';

const PostHeader = ({ data }: { data: PostData }) => {
  return (
    <header className="pt-10 pb-5 border-b">
      <h1 className="text-4xl mb-5 font-bold">{data.title}</h1>
      <h2 className="text-xl mb-4">{data.description}</h2>
      <div className="flex gap-3">
        <div className="flex items-center gap-1 text-basic-400">
          <CalendarIcon />
          <p className="text-sm">{data.date}</p>
        </div>
        <div className="flex items-center gap-1 text-basic-400">
          <ClockIcon />
          <p className="text-sm">{data.readingTime}분 소요</p>
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
