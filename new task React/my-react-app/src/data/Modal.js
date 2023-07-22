import React from 'react'

export default function Modal({ handelChang ,fData , handelSubmit ,setShowModal ,ferrors ,setFerrors}) {

    const hendleClick = () => {
        setShowModal(false)
        setFerrors({
            name:'',
            email:'',
            contact:'',
            address:'',
            city:'',
            gender:'',
            hobby:'',
            age:''
        })
    }


  return (
    <div>
       <div className="modal-1">
         <div className="modal-content">
            <span className="close" onClick={hendleClick}>&times;</span>
            <form onSubmit={handelSubmit}>
                <label  className="label">name</label>
                <input type="text" name='name' value={fData.name} onChange={handelChang}/>
                {ferrors.name && <div className='error-1'>{ferrors.name}</div>}

                <label  className="label">Email</label>
                <input type="email" name='email' value={fData.email} onChange={handelChang}/>
                {ferrors.email && <div className='error-1'>{ferrors.email}</div>}

                <label  className="label">contact</label>
                <input type="text" name='contact' value={fData.contact} onChange={handelChang}/>
                {ferrors.contact && <div className='error-1'>{ferrors.contact}</div>}

                <label  className="label">Age</label>
                <input type="number" name='age' value={fData.age} onChange={handelChang}/>
                {ferrors.age && <div className='error-1'>{ferrors.age}</div>}

                <label  className="label-to">City</label>
                <select name="city" value={fData.city} onChange={handelChang}>
                    <option value="">--Select City--</option>
                    <option value="junagadh">junagadh</option>
                    <option value="surat">surat</option>
                    <option value="ahendabad">Ahendabad</option>
                    <option value="rajkot">Rajkot</option>
                </select>
                {ferrors.city && <div className='error-1'>{ferrors.city}</div>}

                <label  className="label-hobbies">Hobbies
                <input type="checkbox" name='reading' className='chek' checked = {fData.hobby === "Reading"} onChange={handelChang}/>
                 <label htmlFor="reading" className='chek-1'>Reading</label>
                 
                <input type="checkbox" name='gaming' className='chek' checked = {fData.hobby === "Gaming"} onChange={handelChang}/>
                 <label htmlFor="gaming" className='chek-1'>Gaming</label>

                <input type="checkbox" name='coding' className='chek' checked = {fData.hobby === "Coding"} onChange={handelChang}/>
                 <label htmlFor="coding" className='chek-1'>Coding</label>
                </label>

                <label className='lable'>Address</label>
                <textarea type="text" name="address" value={fData.address} onChange={handelChang}></textarea>
                {ferrors.address && <div className='error-1'>{ferrors.address}</div>}


                <button type='submit' className='btn-submit'>Submit</button>
            </form>
         </div>
       </div>
    </div>
  )
}
