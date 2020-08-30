import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

const fetchQuery = async (operation, variables) => {
  const res = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
  const json = await res.json()
  return json
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
