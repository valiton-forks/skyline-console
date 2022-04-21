// Copyright 2021 99cloud
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Base from '../client/base';
import { manilaBase, manilaEndpoint } from '../client/constants';

class ManilaClient extends Base {
  get baseUrl() {
    return manilaBase();
  }

  get enable() {
    return !!manilaEndpoint();
  }

  get projectInUrl() {
    return true;
  }

  get resources() {
    return [
      {
        key: 'shares',
        responseKey: 'share',
        extendOperations: [
          {
            key: 'detail',
            method: 'get',
            isDetail: false,
          },
        ],
      },
      {
        key: 'types',
        responseKey: 'share_type',
        extendOperations: [
          {
            key: 'action',
            method: 'post',
          },
          {
            name: 'getAccess',
            key: 'share_type_access',
          },
          {
            key: 'default',
          },
        ],
        subResources: [
          {
            name: 'extraSpecs',
            key: 'extra_specs',
            responseKey: 'extra_spec',
          },
        ],
      },
      {
        name: 'shareGroupTypes',
        key: 'share-group-types',
        responseKey: 'share_group_type',
        extendOperations: [
          {
            key: 'action',
            method: 'post',
          },
          {
            name: 'getAccess',
            key: 'access',
          },
          {
            key: 'default',
          },
        ],
        subResources: [
          {
            name: 'groupSpecs',
            key: 'group-specs',
            responseKey: 'group_spec',
          },
        ],
      },
    ];
  }
}

const manilaClient = new ManilaClient();
export default manilaClient;
