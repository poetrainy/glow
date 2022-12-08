import { FC } from 'react';
import Head from 'next/head';
import { pathType } from '../types/path';

type Props = {
  data?: pathType;
};

const title = '結婚相談所GLOW - トランスジェンダー専門結婚相談サービス';
const description =
  'GLOWは大阪・天王寺にてトランスジェンダー専門の結婚相談サービスを行なっています。';
const url = 'gender-glow-marriage.com';
const img =
  'https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/3ee965d5d96d4ef69794c484e0c285db/fv.png?w=1600';

const HeadOgp: FC<Props> = ({ data }) => {
  return (
    <Head>
      {data !== undefined ? (
        <>
          <title>{data.title + '｜' + title}</title>
          <meta property="og:title" content={data.title + '｜' + title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={url + '/' + data.path} />
        </>
      ) : (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:url" content={url} />
        </>
      )}
      <meta property="og:description" content={description} />
      {/* ページの種類 */}
      <meta property="og:type" content="website" />
      {/* サイト名 */}
      <meta property="og:site_name" content={title} />
      {/* サムネイル画像の URL */}
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};

export default HeadOgp;
