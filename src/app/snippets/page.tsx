import SnippetList from '@/components/snippet_list/SnippetList';
import { getMDXFileList } from '@/utils/post';
import { Suspense } from 'react';
import SnippetSkeleton from '@/components/skeleton/SnippetSkeleton';

const SnippetsPage = async () => {
  const snippetList = await getMDXFileList('snippets');

  return (
    <div className="w-full pb-24">
      <div className="my-10">
        <h1 className="text-3xl font-bold pb-3">Snippets</h1>
        <span>개발하면서 유용하게 사용했던 코드조각 모음입니다</span>
      </div>
      <Suspense fallback={<SnippetSkeleton />}>
        <SnippetList snippetList={snippetList} />
      </Suspense>
    </div>
  );
};

export default SnippetsPage;
