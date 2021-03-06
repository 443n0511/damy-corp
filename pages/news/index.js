import { client } from "../../libs/client";
import { Layout } from "../../components/templates/Layout";
import { Heading, Box } from "@chakra-ui/layout";
import { NewsList } from "../../components/molecules/NewsList";
import { Pagination } from "../../components/molecules/Pagination";
export default function newsHome({ news, totalCount }) {
  return (
    <Layout
      title='お知らせ一覧 | 株式会社Sample'
      description='株式会社Sampleのお知らせ一覧ページ'>
      <Box
        as='section'
        bg='white'
        w='90%'
        p={5}
        align='center'
        py={{ base: "40px", lg: "80px" }}
        mx='auto'>
        <Heading
          as='h2'
          fontWeight='bold'
          m={10}
          fontSize={{ base: "4xl", md: "6xl" }}>
          News Archive
        </Heading>
        <NewsList items={6} news={news} margin={10} />
        <Pagination totalCount={totalCount} />
      </Box>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const data = await client.get({
    endpoint: "news",
    queries: {
      limit: 5,
      offset: 0,
    },
  });
  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
};
