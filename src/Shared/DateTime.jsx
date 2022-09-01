/* eslint-disable prettier/prettier */
import banner from "../assets/banner.png"
import moment from 'moment';
function DateComponent() {
    const time = moment().format('h:mm A');
    const date = moment().format('dddd, MMMM Do YYYY');
    return (
        <div className='w-full relative mb-3'>
            <img className='rounded-xl w-full mx-auto' src={banner} alt="banner" />
            <div className='absolute rounded-xl w-full flex items-center h-full p-4 top-0 left-0'>
                <div className='ml-0 sm:ml-3'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl text-white font-bold'>
                        {time}
                    </h1>
                    <p className='sm:text-md mt-3 text-white font-bold'>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default DateComponent