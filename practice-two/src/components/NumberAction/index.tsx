import {
  minus,
  plus
} from '../../assets/Images';

interface INumberAction {
  index: number;
  onClickIncrease: () => void;
  onClickReduce: () => void;
}

const NumberAction = ({
  index,
  onClickIncrease,
  onClickReduce
}: INumberAction) => {
  return (
    <div className='flex justify-around content-center py-2.5 border-2 w-32 rounded-10px border-black border-solid'>
      {index === 0 ? (
        <button className='w-8 bg-none cursor-not-allowed opacity-50'>
          <img src={minus} alt='minus icon' onClick={onClickReduce} />
        </button>
      ) : (
        <button className='w-8'>
          <img src={minus} alt='minus icon' onClick={onClickReduce} />
        </button>
      )}
      <p className='font-jost text-xl'>{index}</p>
      <button className='w-8'>
        <img src={plus} alt='plus icon' onClick={onClickIncrease} />
      </button>
    </div>
  );
};

export default NumberAction;
