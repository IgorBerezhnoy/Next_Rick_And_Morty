import React from 'react';
import Head from 'next/head';

export const HeadMeta = ({title, description}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description ?? 'Generated by create next app'}/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
  );
};

type Props = {
  title: string
  description?: string
}