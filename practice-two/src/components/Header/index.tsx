import { Button } from '..';
import {
  arrowDropDown,
  cart,
  heart,
  logo,
  search
} from '../../assets/Images';


interface IHeader {
  clickBackHomePage: () => void;
  clickToLoginPage: () => void;
  clickSearch: () => void;
  clickCart: () => void;
}

const Header = ({
  clickBackHomePage,
  clickToLoginPage,
  clickSearch,
  clickCart
}: IHeader) => {
  return (
    <header className='flex items-center justify-between min-w-96'>
      <div className='space-y-2 inline-block pl-16 983pxScreen:hidden'>
        <div className='w-8 h-0.5 bg-gray-600'></div>
        <div className='w-8 h-0.5 bg-gray-600'></div>
        <div className='w-8 h-0.5 bg-gray-600'></div>
      </div>
      <a href='/' onClick={clickBackHomePage} className='px-8 983pxScreen:pl-24'>
        <img src={logo} alt='logo' className='max-w-36' />
      </a>
      <ul className='hidden 983pxScreen:flex'>
        <li className='mr-5'>
          <a href='javascript:void(0);'>Home</a>
        </li>
        <li className='flex mr-5'>
          <a href='javascript:void(0);'>Shop</a>
          <img src={arrowDropDown} alt='arrow drop down' className='w-7' />
        </li>
        <li className='mr-5'>
          <a href='javascript:void(0);'>Our Story</a>
        </li>
        <li className='mr-5'>
          <a href='javascript:void(0);'>Blog</a>
        </li>
        <li>
          <a href='javascript:void(0);'>Contact Us</a>
        </li>
      </ul>
      <div className='flex pr-16 983pxScreen:pr-24'>
        <Button
          type='secondary'
          onClick={clickSearch}
          customClass='w-8 mr-6'
          icon={search}
          alt='search icon'
          label='search icon'
        />
        <Button
          type='secondary'
          customClass='w-8 mr-6'
          icon={heart}
          alt='heart icon'
          label='heart icon'
        />
        <Button
          type='secondary'
          onClick={clickCart}
          customClass='w-8 983pxScreen:mr-6'
          icon={cart}
          alt='cart icon'
          label='cart icon'
        />
        <Button
          onClick={clickToLoginPage}
          type='default'
          label='Login'
          customClass='pt-4 pb-4 pl-7 pr-7 hidden 983pxScreen:flex'
        />
      </div>
    </header>
  );
};

export default Header;
