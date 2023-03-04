import React, { useState } from 'react';
import '../styles/scheduleAppointment.css';
// import SelectDate from './SelectDate';
// import $ from 'jquery';
// import jQuery from 'jquery';

const ScheduleAppointment = () => {

    const doctorsAvailable = [
        {
            doc_id: 1,
            name: 'Dr. Vikas'
        },
        {
            doc_id: 2,
            name: 'Dr. Ravi'
        },
        {
            doc_id: 3,
            name: 'Dr. Rakesh'
        },
    ];
    const [docSelect, setdoctorsAvailable] = useState('');
    const [isDocSelected, setIsDocSelected] = useState(false);
    // const [isPendingDoctor, setIsPendingDoctor] = useState(false);
    const handleSelectDoctor = (e) => {
        // console.log(docSelect);
        e.preventDefault();
        console.log(docSelect);
        setIsDocSelected(true);
    }
    // var array = ["2023-03-14", "2023-03-11", "2023-03-26"];

    // $(function () {
    //     $("input").datepicker({
    //         dateFormat: "yy-mm-dd",
    //         beforeShowDay: function (date) {
    //             var string = jQuery.datepicker.formatDate("yy-mm-dd", date);
    //             return [array.indexOf(string) !== -1];
    //         },
    //     });
    // });
    const [appointmentDate, setAppointmentDate] = useState('');
    const [isDateSelected, setIsDateSelected] = useState(false);
    const handleDateClick = (e) => {
        // console.log(e.target.value);
        // setAppointmentDate(e.target.value);
        console.log(appointmentDate);
        setIsDateSelected(true);
    }
    const slots = [
        {
            slot_id: 1,
            time: '10:00 AM'
        },
        {
            slot_id: 2,
            time: '11:00 AM'
        },
        {
            slot_id: 3,
            time: '12:00 PM'
        },

    ];
    const [slotSelect, setSlots] = useState('');
    const [isSlotSelected, setIsSlotSelected] = useState(false);
    const handleSelectSlot = (e) => {
        console.log(slotSelect);
        setIsSlotSelected(true);
    }
    const [patientId, setPatientId] = useState('');
    const [isPatientId, setIsPatientId] = useState(false);

    const handlePatientId = (e) => {
        setPatientId(e.target.value);
        setIsPatientId(true);
    }

    // const [isRender, setIsRender] = useState(false);

    const handleConfirmAppointment = (e) => {
        // e.preventDefault();
        ///popup for confirmation/error
        //go to your dashboard/ schedule another appointment
        console.log('Appointment Confirmed');
        const appointmentData = { docSelect, appointmentDate, slotSelect, patientId };
        console.log(appointmentData);
        console.log('Appointment Confirmed');
        console.log('This is running');
        // setIsRender(true);

    }

    // useEffect(() => {
    //     console.log('use effect ran');
    // },[isRender]);

    return (
        <div className="vikasScheduleAppointmentContainer">
            <div className="vikasRegHead"> Schedule Appointment </div>
            <form className="vikasRegForm">

                <div className="vikasRegRow">
                    <label className='vikasRegCol1'>
                        Available Doctors:
                    </label>
                    <div className="vikasRegCol2">
                        <div>
                            <select
                                value={docSelect}
                                onChange={(e) => setdoctorsAvailable(e.target.value)}
                                required
                            >
                                <option value="">Select</option>
                                {doctorsAvailable.map((doctor) => (
                                    <option key={doctor.doc_id} value={doctor.doc_id}>
                                        {doctor.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='vikasSelectDoctorButton'>
                        <button onClick={handleSelectDoctor}>Select</button>
                    </div>
                </div>
                <hr />
                {isDocSelected && <div className='vikasSelectDate'>
                    <div className="vikasRegRow">
                        <label className='vikasRegCol1'>
                            Choose Date:
                        </label>
                        {/* <div className='form-group'> */}
                            <div className="vikasRegCol2">

                                <input
                                    type="date"
                                    name="date"
                                    value={appointmentDate}
                                    // class="form-control"
                                    placeholder=""
                                    required
                                    // readonly
                                    onChange={(e) => setAppointmentDate(e.target.value)}
                                />
                            {/* </div> */}
                        </div>
                        <div className='vikasSelectDoctorButton'>
                            <button onClick={handleDateClick}>Select</button>
                        </div>
                    </div>
                    <hr />
                    {isDateSelected && <div className='vikasSelectSlot'>
                    <div className="vikasRegRow">
                            <label className='vikasRegCol1'>
                                Choose Slot:
                            </label>
                            <div className="vikasRegCol2">
                            <div>
                                <select
                                    value={slotSelect}
                                    onChange={(e) => setSlots(e.target.value)}
                                    required

                                >
                                    <option value=""></option>
                                    {slots.map((slot) => (
                                        <option key={slot.slot_id} value={slot.slot_id}>
                                            {slot.time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            </div>
                            <div className='vikasSelectDoctorButton'>
                                <button onClick={handleSelectSlot}>Select</button>
                            </div>

                        </div>
                        <hr />
                        {isSlotSelected && <div className='vikasConfirmAppointment'>
                            <div className="vikasRegRow">
                                <label className="vikasRegCol1">
                                    Patient Id:
                                </label>
                                <div className="vikasRegCol2">
                                    <input
                                        type="text"
                                        value={patientId}
                                        required
                                        onChange={handlePatientId} />
                                </div>
                            </div>
                            {isPatientId && <div className='vikasConfirmAppointmentButton'>


                                <button onClick={(e) => handleConfirmAppointment(e)}>Confirm Appointment</button>
                            </div>}
                        </div>}
                    </div>}

                </div>

                }
            </form>

        </div>
    );
}

export default ScheduleAppointment;