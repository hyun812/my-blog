import SnippetList from '@/components/snippets/SnippetList';
import { getMDXFileList } from '@/utils/post';
import { Suspense } from 'react';
import SnippetSkeleton from '@/components/common/SnippetSkeleton';

const SnippetsPage = async () => {
  const snippetList = await getMDXFileList('snippets');

  return (
    <div className="w-full">
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
