import Image from 'next/image';

interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const MDXImage = ({ src, alt, width, height }: MDXImageProps) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width || 700}
        height={height || 300}
        className="rounded-md object-contain"
        priority={false}
      />
      {alt !== 'img' && (
        <span className="mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400">{alt}</span>
      )}
    </>
  );
};

export default MDXImage;
