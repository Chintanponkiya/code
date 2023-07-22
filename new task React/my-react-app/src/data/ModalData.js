// import React, { useState } from "react";
// import Modal from "./Modal";

// export default function ModalData() {
//   const [data, setData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [fData, setFData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     address: "",
//     city: "",
//     gender: "",
//     hobby: "",
//     age: "",
//   });
//   const [ferrors, setFerrors] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     address: "",
//     city: "",
//     gender: "",
//     hobby: "",
//     age: "",
//   });

//   const handelChang = (event) => {
//     setFData({
//       ...fData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handelSubmit = (event) => {
//     event.preventDefault();

//     const errors = {};

//     if (!fData.name || !/^[a-zA-Z\s]+$/.test(fData.name)) {
//       errors.name = "Please enter a valid name";
//     }
//     if (!fData.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fData.name)) {
//       errors.email = "Please enter a valid name";
//     }
//     if (!fData.contact || !/^\d{10}$/.test(fData.contact)) {
//       errors.contact = "Please enter a valid name";
//     }
//     if (!fData.address || !/^[a-zA-Z0-9\s,'-]*$/.test(fData.address)) {
//       errors.address = "Please enter a valid name";
//     }
//     if (!fData.city) {
//       errors.city = "Please enter a valid city name";
//     }
//     if (
//       !fData.gender ||
//       !fData.gender === "male" ||
//       fData.gender === "female" ||
//       fData.gender === "other"
//     ) {
//       errors.gender = "Please enter a valid gender";
//     }

//     if (!fData.age || !/^\d{1,3}$/.test(fData.age)) {
//       errors.age = "Please enter a valid age between 1 and 150";
//     }

//     if (Object.keys(errors).length > 0) {
//       setFerrors(errors);
//     } else {
//       setData([
//         ...data,
//         {
//           name: fData.name,
//           email: fData.email,
//           contact: fData.contact,
//           address: fData.address,
//           city: fData.city,
//           gender: fData.gender,
//           hobby: fData.hobby,
//           age: fData.age,
//         },
//       ]);

//       setFData({
//         name: "",
//         email: "",
//         contact: "",
//         address: "",
//         city: "",
//         gender: "",
//         hobby: "",
//         age: "",
//       });

//       setFerrors({
//         name: "",
//         email: "",
//         contact: "",
//         address: "",
//         city: "",
//         gender: "",
//         hobby: "",
//         age: "",
//       });

//       setShowModal(false);
//     }
//   };

//   return (
//     <div>
//       <div className="modal-1">
//         <div className="modal-content">
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Contact</th>
//                 <th>Address</th>
//                 <th>City</th>
//                 <th>Gender</th>
//                 <th>Hobby</th>
//                 <th>Age</th>
//                 <th>
//                   <button onClick={setShowModal(true)}>chgvh</button>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.name}</td>
//                   <td>{row.email}</td>
//                   <td>{row.contact}</td>
//                   <td>{row.city}</td>
//                   <td>{row.gender}</td>
//                   <td>{row.hobby}</td>
//                   <td>{row.age}</td>
//                   <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {showModal && (
//             <Modal
//               handelChang={handelChang}
//               fData={fData}
//               handelSubmit={handelSubmit}
//               setShowModal={setShowModal}
//               ferrors={ferrors}
//               setFerrors={setFerrors}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedItemIndex(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newItem = {
      name: formData.get("name"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      address: formData.get("address"),
      city: formData.get("city"),
      gender: formData.get("gender"),
      hobby: formData.get("hobby"),
      age: formData.get("age"),
    };
    if (selectedItemIndex === null) {
      setData([...data, newItem]);
    } else {
      const newData = [...data];
      newData[selectedItemIndex] = newItem;
      setData(newData);
    }
    setIsModalOpen(false);
    setSelectedItemIndex(null);
  };

  const handleEdit = (index) => {
    setSelectedItemIndex(index);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  const handleCancel = () => {
    setSelectedItemIndex(null);
    setIsEdit(false);
  };

  return (
    <>
      <div className="content-container">
        <div className="modal-row">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>  
                <th>Address</th>
                <th>City</th>
                <th>Gender</th>
                <th>Hobby</th>
                <th>Age</th>
                <th>
                  <button onClick={handleModalOpen}>Add</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.gender}</td>
                  <td>{item.hobby}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>
                      <i class="fa-sharp fa-solid fa-user-pen"></i>
                    </button>
                    <button onClick={() => handleDelete(index)}>
                    <i class="fa-solid fa-trash-can fa-2xl"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleModalClose}>
              &times;
            </span>
            <form onSubmit={handleFormSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  pattern="[A-Za-z ]+"
                  defaultValue={
                    selectedItemIndex !== null
                      ? data[selectedItemIndex].name
                      : ""
                  }
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  defaultValue={
                    selectedItemIndex !== null
                      ? data[selectedItemIndex].email
                      : ""
                  }
                  required
                />
              </label>
              <label>
                Contact:
                <input
                  type="number"
                  name="contact"
                  pattern="[0-9]{10}"
                  defaultValue={
                    selectedItemIndex !== null
                      ? data[selectedItemIndex].contact
                      : ""
                  }
                  required
                  min={Math.pow(10, 9)}
                  max={Math.pow(10, 10) - 1}
                />
              </label>
              <label>
                Age:
                <input
                  type="number"
                  name="age"
                  min="1"
                  max="80"
                  defaultValue={
                    selectedItemIndex !== null
                      ? data[selectedItemIndex].age
                      : ""
                  }
                  required
                />
              </label>
              <label>
                City:
                <select
                  name="city"
                  defaultValue={
                    selectedItemIndex !== null
                      ? data[selectedItemIndex].city
                      : ""
                  }
                  required
                >
                  <option value="rajkot">Rajkot</option>
                  <option value="Junagadh">Junagadh</option>
                  <option value="Surat">Surat</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </label>
              <label>
                Gender:
                <select
                  name="gender"
                  defaultValue={
                    selectedItemIndex !== null
                      ? data[selectedItemIndex].gender
                      : ""
                  }
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className="hobby">
                Hobby:
                <input
                  type="checkbox"
                  name="hobby"
                  value="reading"
                  defaultChecked={
                    selectedItemIndex !== null
                      ? data[selectedItemIndex].hobby === "reading"
                      : false
                  }
                />
                Reading
                <input
                  type="checkbox"
                  name="hobby"
                  value="writing"
                  defaultChecked={
                    selectedItemIndex !== null
                      ? data[selectedItemIndex].hobby === "writing"
                      : false
                  }
                />
                Writing
                <input
                  type="checkbox"
                  name="hobby"
                  value="swimming"
                  defaultChecked={
                    selectedItemIndex !== null
                      ? data[selectedItemIndex].hobby === "swimming"
                      : false
                  }
                />
                Swimming
              </label>

              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  defaultValue={
                    selectedItemIndex !== null
                      ? data[selectedItemIndex].address
                      : ""
                  }
                  required
                />
              </label>
              <button type="submit" className="modal-btn">
                {selectedItemIndex !== null ? "Update" : "Submit"}
              </button>
              {selectedItemIndex !== null && (
                <button type="Cancel" className="btn-2" onClick={handleCancel}>
                  Cancel
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
