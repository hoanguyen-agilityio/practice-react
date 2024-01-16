import './search.css';
import {
  Button,
  Input
} from '..';
import { search } from '../../assets/Images';

interface ISearch {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void
}

const Search = ({
  onChange,
  onClick
} :ISearch) => {
  return (
    <div className='form-search'>
      <Input
        type='search'
        placeholder='Search...'
        className='search-field'
        ariaLabel='Enter the content you want to search for'
        name='search'
        onChange={onChange}
      />
      <Button
        className='btn-search'
        ariaLabel='search'
        icon={search}
        onClick={onClick}
      />
    </div>
  )
}

export default Search;
