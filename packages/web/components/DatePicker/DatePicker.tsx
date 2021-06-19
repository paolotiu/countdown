import ReactDatePicker from 'react-datepicker';
import Modal from 'react-modal';
import DatePickerHeader from './DatePickerHeader';
import 'react-datepicker/dist/react-datepicker.css';

const customStyles: Modal.Styles = {
  //   content: {
  //     top: '20%',
  //     left: '50%',
  //     transform: 'translateX(-50%)',
  //     padding: '1rem',
  //     height: 'min-content',
  //     width: 'min-content',
  //   },
};

Modal.setAppElement('#__next');

interface Props extends Modal.Props {
  isOpen: boolean;
}

const DatePicker = ({ isOpen, ...props }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      closeTimeoutMS={100}
      overlayClassName={{
        base: `bg-black bg-opacity-0 transition-all duration-200 fixed inset-0 `,
        afterOpen: '!bg-opacity-40 children:scale-100',
        beforeClose: '!bg-opacity-20 children:scale-95 duration-100 ',
      }}
      className="top-[10%] left-1/2 -translate-x-1/2 transition-all absolute bg-white scale-90 rounded "
      {...props}
    >
      <div className="flex flex-col items-center">
        <ReactDatePicker
          onChange={(data) => console.log(data)}
          calendarContainer={({ children }) => {
            return <div className="p-4">{children}</div>;
          }}
          minDate={new Date()}
          renderCustomHeader={DatePickerHeader}
          enableTabLoop={false}
          dayClassName={() => 'datepicker-day'}
          className="datepicker"
          // Needed to not use input
          inline
          open
        />
        <div className="w-full py-4">
          <hr />
        </div>
        <div className="px-4 pb-4">
          Time{' '}
          <div>
            <input type="number" maxLength={2} max={12} min={0} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DatePicker;
