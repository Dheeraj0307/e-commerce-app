import React, { useState } from 'react'
import Swal from 'sweetalert2';

const BuyNow = () => {
    const [pnumber, setPnumber] = useState();

    const handleClick = (e) => {
        e.preventDefault()
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Product has been confirmed",
            showConfirmButton: false,
            timer: 2500
        });

        setPnumber('')
    }

    return (
        <div >
            <div className='loginPageContainer'>
                <h2>Fill the Form</h2>
                <form action="" onSubmit={handleClick} className='inputform' >

                    <input className='inputData' type="number" value={pnumber} min={6000000000} max={9999999999} placeholder='Enter your Mobile Number' required />
                    <button id='form-btn' type="submit"   >
                        Continue
                    </button>

                </form>


            </div>

        </div>
    )
}

export default BuyNow   