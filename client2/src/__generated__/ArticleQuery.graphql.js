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
    +id: ?string,
    +name?: ?string,
    +genders?: ?$ReadOnlyArray<?Gender>,
    +brand?: ?{|
      +name: ?string
    |},
    +recommendations?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: ?string
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
  node(id: "art_3") {
    __typename
    id
    ... on Article {
      name
      genders
      brand {
        name
      }
      recommendations(first: 1) {
        edges {
          node {
            __typename
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
    "value": "art_3"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "genders",
  "storageKey": null
},
v4 = {
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
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
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
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": (v5/*: any*/),
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
                        "concreteType": null,
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
                "storageKey": "recommendations(first:1)"
              }
            ],
            "type": "Article",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"art_3\")"
      }
    ],
    "type": "RootQueryType",
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
          (v6/*: any*/),
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": (v5/*: any*/),
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
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          (v1/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "recommendations(first:1)"
              }
            ],
            "type": "Article",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"art_3\")"
      }
    ]
  },
  "params": {
    "cacheID": "91aaf3523833bcbfafb0ef10e2e2dd44",
    "id": null,
    "metadata": {},
    "name": "ArticleQuery",
    "operationKind": "query",
    "text": "query ArticleQuery {\n  node(id: \"art_3\") {\n    __typename\n    id\n    ... on Article {\n      name\n      genders\n      brand {\n        name\n      }\n      recommendations(first: 1) {\n        edges {\n          node {\n            __typename\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3e0d4df14d1ec1e573fbf4507ceafcdb';

module.exports = node;
