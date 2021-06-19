import { format } from 'date-fns';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import React from 'react';
import clsx from 'clsx';

interface Props {
  date: Date;
  //   changeYear(year: number): void;
  //   changeMonth(month: number): void;
  //   customHeaderCount: number;
  decreaseMonth(): void;
  increaseMonth(): void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  //   decreaseYear(): void;
  //   increaseYear(): void;
  //   prevYearButtonDisabled: boolean;
  //   nextYearButtonDisabled: boolean;
}

interface ArrowProps {
  onClick: () => void;
  direction: 'left' | 'right';
  disabled?: boolean;
}

const Arrrow = ({ direction, onClick, disabled = false }: ArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'p-2 transition-all rounded-sm hover:bg-blue-400 hover:bg-opacity-20  active:bg-opacity-30 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50',
        disabled && 'text-gray-300',
        'disabled:hover:bg-transparent disabled:cursor-default'
      )}
      disabled={disabled}
    >
      {direction === 'left' ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
};

const DatePickerHeader = ({
  decreaseMonth,
  date,
  increaseMonth,
  nextMonthButtonDisabled,
  prevMonthButtonDisabled,
}: Props) => {
  return (
    <div className="flex items-center justify-between px-3 py-4 text-primary">
      <Arrrow
        direction="left"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      />
      <h4 className="text-sm">{format(date, 'MMM yyyy')}</h4>
      <Arrrow
        direction="right"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      />
    </div>
  );
};

export default DatePickerHeader;
