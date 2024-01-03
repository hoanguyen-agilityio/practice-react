import './search.css'
import {
  Button,
  Input
} from '..'
import { search } from '../../assets/Images'

const Search = () => {
  return (
    <form
      action='/'
      className='form-search'
      method='GET'
    >
      <Input
        type='search'
        placeholder='Search...'
        className='search-field'
        ariaLabel='Enter the content you want to search for'
        name='search'
      />
      <Button
        className='btn-search'
        ariaLabel='search'
        icon={search}
      />
    </form>
  )
}

export default Search
