import { useEffect, useState } from 'react';
import { faqType } from '../types/microCms';
import { client } from './client';

const INDEX_FAQ_NUMBER = 3;

export const useGetFaq = () => {
  const [faq, setFaq] = useState<faqType[]>([]);
  useEffect(() => {
    const data = async () => {
      const microCMSData = await client.get({
        endpoint: 'faq',
        queries: {
          offset: 0,
          limit: 100,
        },
      });
      setFaq(microCMSData.contents.reverse());
    };
    data();
  }, []);

  const getAllFaq = () => faq;
  const getIndexFaq = () => faq.slice(0, INDEX_FAQ_NUMBER);

  return { getAllFaq, getIndexFaq };
};
