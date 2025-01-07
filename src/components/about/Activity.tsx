import { activities } from '@/constants/about';

const Activity = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold">교육 & 대외활동</h2>
      <div className="mt-10">
        <ul className="flex flex-col gap-10">
          {activities.map((activity) => (
            <li
              key={activity.name}
              className="flex flex-col sm:flex-row gap-5"
            >
              <div className="basis-1/3">
                <p className="text-xl font-semibold">{activity.name}</p>
                <p className="text-sm text-neutral-500 pt-1">{activity.period}</p>
              </div>
              <ul className="flex-1">
                {activity.descriptions.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Activity;
