import React from 'react';
import Layout from '../../components/Layout';
import People from './People';

function action() {
  return {
    chunks: ['about'],
    title: 'People',
    component: (
      <Layout>
        <People />
      </Layout>
    ),
  };
}

export default action;
