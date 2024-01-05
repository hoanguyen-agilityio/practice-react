import './search.css';
import {
  Button,
  Input
} from '..';
import { search } from '../../assets/Images';

const Search = () => {
  return (
    <div className='form-search'>
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
    </div>
  )
}

export default Search;
