/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type app$ref: FragmentReference;
declare export opaque type app$fragmentType: app$ref;
export type app = {|
  +articles: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: ?string
      |}
    |}>
  |},
  +$refType: app$ref,
|};
export type app$data = app;
export type app$key = {
  +$data?: app$data,
  +$fragmentRefs: app$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "app",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ArticleConnection",
      "kind": "LinkedField",
      "name": "articles",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArticleEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '67a46c3eaa0d68fbdda00010b72e53b9';

module.exports = node;
