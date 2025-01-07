import { awards } from '@/constants/about';

const Award = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold">자격증 & 수상</h2>
      <div className="mt-10">
        <ul className="flex flex-col gap-10">
          {awards.map((award) => (
            <li
              key={award.name}
              className="flex flex-col sm:flex-row gap-5"
            >
              <div className="basis-2/5">
                <p className="text-lg font-semibold">{award.name}</p>
                <p className="text-sm text-basic-500 pt-1">{award.date}</p>
              </div>
              <p className="flex-1">{award.descriptions}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Award;
