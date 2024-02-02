import { NAME_MENU } from '../../constants/data';
import { Button } from '..';
import { cart, heart, logo, search } from '../../assets/Images';

interface IHeader {
  onNavigateToHomePage: () => void;
  onNavigateToLoginPage: () => void;
  onSearchClick: () => void;
  onCartClick: () => void;
}

const Header = ({
  onNavigateToHomePage,
  onNavigateToLoginPage,
  onSearchClick,
  onCartClick,
}: IHeader) => {
  return (
    <header className='flex items-center justify-between min-w-96'>
      <div className='space-y-2 inline-block pl-16 983pxScreen:hidden'>
        <div className='w-8 h-0.5 bg-gray-600'></div>
        <div className='w-8 h-0.5 bg-gray-600'></div>
        <div className='w-8 h-0.5 bg-gray-600'></div>
      </div>
      <a href='/' onClick={onNavigateToHomePage} className='px-8 983pxScreen:pl-24'>
        <img src={logo} alt='logo' className='max-w-36' />
      </a>
      <ul className='hidden 983pxScreen:flex'>
        {NAME_MENU.map(({ className, href, name, src, alt, classImg }) => (
          <li key={name} className={className}>
            <a href={href}>{name}</a>
            {src && <img src={src} alt={alt} className={classImg} />}
          </li>
        ))}
      </ul>
      <div className='flex pr-16 983pxScreen:pr-24'>
        <Button
          type='secondary'
          onClick={onSearchClick}
          customClass='w-8 mr-6'
          icon={search}
          alt='search icon'
        />
        <Button type='secondary' customClass='w-8 mr-6' icon={heart} alt='heart icon' />
        <Button
          type='secondary'
          onClick={onCartClick}
          customClass='w-8 983pxScreen:mr-6'
          icon={cart}
          alt='cart icon'
        />
        <Button
          onClick={onNavigateToLoginPage}
          type='default'
          label='Login'
          customClass='pt-4 pb-4 pl-7 pr-7 hidden 983pxScreen:flex'
        />
      </div>
    </header>
  );
};

export default Header;
