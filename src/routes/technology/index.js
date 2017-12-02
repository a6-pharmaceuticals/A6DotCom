/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Technology from './Technology';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['technology'],
    title: 'A6 Pharmaceuticals',
    component: (
      <Layout>
        <Technology />
      </Layout>
    ),
  };
}

export default action;
