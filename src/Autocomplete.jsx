import { useHits } from 'react-instantsearch-hooks'

export function Autocomplete ({ handleSelection, top }) {
  const { hits } = useHits()

  return (
    <div className='autocomplete-panel' style={{ top }}>
      {hits.length > 0 && (
        <ul className='autocomplete-items'>
          {hits.map(hit => (
            <li key={hit.handle}>
              <button className='autocomplete-item' onClick={() => handleSelection(hit.handle)}>
                <Item hit={hit} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Item ({ hit }) {
  return (
    <div className='account-body'>
      <div className='account-avatar'>
        <img src={hit.image} alt={hit.handle} />
      </div>

      <div>
        <div className='account-name'>
          {hit.name}
        </div>

        <div className='account-handle'>
          @{hit.handle}
        </div>
      </div>
    </div>
  )
}
