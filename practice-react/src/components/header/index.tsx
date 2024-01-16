import {
  Button,
  Search
} from '..';
import {
  btnHideSidebar,
  btnNotification,
  btnShowSidebar,
} from '../../assets/Images';

interface IHeader {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const Header = ({
  onChange,
  onClick
}: IHeader) => {
  return (
    <header className='header'>
      <Button
        className='btn-show-hide-sidebar btn-hide-sidebar'
        ariaLabel='hide sidebar'
        icon={btnHideSidebar}
        alt='button hide sidebar'
      />
      <Button
        className='btn-show-hide-sidebar btn-show-sidebar'
        ariaLabel='show sidebar'
        icon={btnShowSidebar}
        alt='button show sidebar'
      />
      <Search onChange={(e) => onChange(e)} onClick={onClick} />
      <Button
        className='btn-notification'
        ariaLabel='See announcement'
        icon={btnNotification}
        alt='btn notification'
      />
    </header>
  );
};

export default Header;
