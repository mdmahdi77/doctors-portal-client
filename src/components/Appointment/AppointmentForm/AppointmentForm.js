import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.services = appointmentOn
        data.date = date
        data.created = new Date()
        
        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal()
                alert('Appointment Created Successfully.')
            }
        })
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>On{date.toDateString()}</small></p>
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" name="name" className="form-control" {...register("name")} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Phone Number" name="phone" className="form-control" {...register("phone")} />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Email" name="email" className="form-control" {...register("email")} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <select className="form-control" name="gender" {...register("gender")}>
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group col-4">
                            <input type="number" name="age" className="form-control" {...register("age")} />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group col-4">
                            <input type="number" name="weight" className="form-control" {...register("weight")} />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;