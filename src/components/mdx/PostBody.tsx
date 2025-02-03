import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import CodeBlock from './CodeBlock';

interface IPostDetailProps {
  content: string;
}

const MdxComponents = {
  pre: CodeBlock,
};

const PostBody = ({ content }: IPostDetailProps) => {
  return (
    <div className="prose dark:prose-invert flex-1">
      <MDXRemote
        source={content}
        components={MdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [
              rehypeSlug,
              rehypePrism,
              [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ['anchor'],
                    ariaLabel: 'anchor',
                  },
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
};

export default PostBody;
