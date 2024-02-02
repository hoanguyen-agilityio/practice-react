import { useState } from 'react';
import {
  DATA_PRODUCT_CATEGORIES,
  DATA_FILTER_BY_COLOR,
  DATA_FILTER_BY_SIZE,
} from '../../constants/data';
import Dropdown from '../Dropdown';

interface ISidebar {
  checked: boolean;
}

interface DropdownStates {
  productCategories: boolean;
  filterByColor: boolean;
  filterBySize: boolean;
}

const Sidebar = ({ checked }: ISidebar) => {
  const [dropdownStates, setDropdownStates] = useState<DropdownStates>({
    productCategories: false,
    filterByColor: false,
    filterBySize: false,
  });

  /**
   * Handle toggle dropdown
   */
  const handleToggleDropdown = (dropdownName: keyof DropdownStates) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  return (
    <aside className='w-60'>
      {/* Dropdown Product Categories */}
      <Dropdown
        className='border-b-2'
        option={DATA_PRODUCT_CATEGORIES}
        labelButton='Product Categories'
        onClick={() => handleToggleDropdown('productCategories')}
        isOpen={dropdownStates.productCategories}
        checked={checked}
      />

      {/* Dropdown Filter by Price */}
      <Dropdown className='border-b-2 pt-5' labelButton='Filter by Price' />

      {/* Dropdown Filter by Color */}
      <Dropdown
        className='border-b-2 pt-5'
        option={DATA_FILTER_BY_COLOR}
        labelButton='Filter by Color'
        onClick={() => handleToggleDropdown('filterByColor')}
        isOpen={dropdownStates.filterByColor}
        checked={checked}
      />

      {/* Dropdown Filter by Size */}
      <Dropdown
        className='border-b-2 pt-5'
        option={DATA_FILTER_BY_SIZE}
        labelButton='Filter by Size'
        onClick={() => handleToggleDropdown('filterBySize')}
        isOpen={dropdownStates.filterBySize}
        checked={checked}
      />
    </aside>
  );
};

export default Sidebar;
