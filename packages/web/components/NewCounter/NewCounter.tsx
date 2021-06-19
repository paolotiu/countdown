import { useBoolean } from '../../utils/useBoolean';
import DatePicker from '../DatePicker/DatePicker';

const NewCounter = () => {
  const [
    isDatepickerOpen,
    { toFalse: closeDatepicker, toTrue: openDatepicker },
  ] = useBoolean();

  return (
    <div className="grid  grid-rows-[1fr,11fr] h-screen">
      <div></div>
      <div className="grid new-counter-content">
        <div className="flex-col hidden py-10 md:flex align-center rounded-tr-3xl bg-primary">
          <div className="bg-white bg-opacity-60 ">1</div>
        </div>
        <div className="px-4">
          <h1 className="text-2xl font-bold md:text-4xl md:px-32">
            Counter Details
          </h1>
          <form action="" className="pt-10">
            <div>
              <p className="text-base font-medium">Time</p>
              <hr />
              <div>
                <button type="button" onClick={openDatepicker}>
                  Dae
                </button>
                <DatePicker
                  isOpen={isDatepickerOpen}
                  onRequestClose={closeDatepicker}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="hidden bg-primary rounded-tl-3xl"></div>
      </div>
    </div>
  );
};

export default NewCounter;
