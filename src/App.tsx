import { explorerPlugin } from '@graphiql/plugin-explorer';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import 'graphiql/style.css';
import 'graphiql/graphiql.css';

import './App.scss';

export default function App() {
  const params = new URLSearchParams(document.location.search);

  const _url = params.get('url');

  if (!_url) {
    return (
      <div className="sk-App">
        <div className="sk-App-empty">
          Specify url to crawl like:
          <br />
          <br />
          {`${document.location.origin}?url=http://...`}
        </div>
      </div>
    );
  }

  const fetcher = createGraphiQLFetcher({
    url: _url,
  });

  const explorer = explorerPlugin();

  return (
    <div className="sk-App">
      <div className="sk-App-header">{_url}</div>
      <GraphiQL
        fetcher={fetcher}
        plugins={[explorer]}
        key={_url}
        className="sk-App-editor"
      />
    </div>
  );
};
