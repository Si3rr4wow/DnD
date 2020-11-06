/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Gender = "FEMALE" | "MALE" | "%future added value";
export type ArticleQueryVariables = {||};
export type ArticleQueryResponse = {|
  +node: ?{|
    +id: string,
    +name?: ?string,
    +genders?: ?$ReadOnlyArray<?Gender>,
    +brand?: ?{|
      +name: ?string
    |},
    +recommendations?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +id: string
        |}
      |}>
    |},
  |}
|};
export type ArticleQuery = {|
  variables: ArticleQueryVariables,
  response: ArticleQueryResponse,
|};
*/


/*
query ArticleQuery {
  node(id: "3") {
    __typename
    id
    ... on Article {
      name
      genders
      brand {
        name
      }
      recommendations(first: 4) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "3"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "genders",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Brand",
      "kind": "LinkedField",
      "name": "brand",
      "plural": false,
      "selections": [
        (v2/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 4
        }
      ],
      "concreteType": "ArticleConnection",
      "kind": "LinkedField",
      "name": "recommendations",
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
              "concreteType": "Article",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "recommendations(first:4)"
    }
  ],
  "type": "Article",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": "node(id:\"3\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArticleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v1/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": "node(id:\"3\")"
      }
    ]
  },
  "params": {
    "cacheID": "7a67c14d2049d6631bb5b5f8adc9a92b",
    "id": null,
    "metadata": {},
    "name": "ArticleQuery",
    "operationKind": "query",
    "text": "query ArticleQuery {\n  node(id: \"3\") {\n    __typename\n    id\n    ... on Article {\n      name\n      genders\n      brand {\n        name\n      }\n      recommendations(first: 4) {\n        edges {\n          node {\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4d796dc24a734cf1e1fcf973b0de9894';

module.exports = node;
