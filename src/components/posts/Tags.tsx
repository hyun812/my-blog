const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-14">
      {tags.map((tag) => (
        <span
          key={tag}
          className="border rounded-full px-2 py-1 text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
