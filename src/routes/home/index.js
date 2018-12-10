import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['home'],
    title: 'A6 Pharmaceuticals',
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}

export default action;
