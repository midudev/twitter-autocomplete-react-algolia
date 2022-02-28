import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-hooks'

const searchClient = algoliasearch(
  'latency',
  'a4390aa69f26de2fd0c4209ff113a4f9'
)

const INDEX_NAME = 'autocomplete_twitter_accounts'

ReactDOM.render(
  <InstantSearch
    searchClient={searchClient}
    indexName={INDEX_NAME}
    suppressExperimentalWarning
  >
    <App />
  </InstantSearch>,
  document.getElementById('root')
)
