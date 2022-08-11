import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import ListView from '../components/ListView';
import SearchForm from '../components/SearchForm';

export default function Home({ userData }) {
  const [keyword, setKeyword] = useState('');
  const [filterData, setFilterData] = useState();
  const [loading, setLoading] = useState();

  const handSearch = async () => {
    try {
      if (!keyword) return;
      setLoading(true);
      const userData = await axios.get(process.env.NEXT_PUBLIC_API, {
        params: {
          name_like: keyword,
        },
      });

      if (!userData.data.length) {
        const userDataByUsername = await axios.get(
          process.env.NEXT_PUBLIC_API,
          {
            params: {
              username_like: keyword,
            },
          }
        );

        if (!userDataByUsername.data.length) {
          const userDataByEmail = await axios.get(process.env.NEXT_PUBLIC_API, {
            params: {
              email_like: keyword,
            },
          });
          setFilterData(userDataByEmail.data);
        } else {
          setFilterData(userDataByUsername.data);
        }
      } else {
        setFilterData(userData.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Layout loading={loading}>
      <Head>
        <title>Test Web - User Data</title>
        <meta name="description" content="List user data of website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <SearchForm
          onChange={setKeyword}
          value={keyword}
          reset={() => {
            setKeyword('');
            setFilterData(null);
          }}
          onSearch={handSearch}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          {filterData
            ? filterData.map((item) => {
                return <ListView key={item.id} data={item} />;
              })
            : userData.map((item) => {
                return <ListView key={item.id} data={item} />;
              })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const userData = await axios.get(process.env.NEXT_PUBLIC_API);
    console.log('get data');

    return {
      props: {
        userData: userData.data,
      },
    };
  } catch (error) {
    alert(error.response.message);
  }
}
