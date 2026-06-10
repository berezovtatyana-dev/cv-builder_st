import React, { useContext } from "react";
import CVContext from "../context/CVContext";

const EducationInput = ({ education }) => {
    const { dispatch } = useContext(CVContext);
    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_EDUCATION',
            payload: {
                id: education.id,
                key: e.target.name,
                value: e.target.value
            }
        });
    };

    return (
        <div style={{border: '2px solid black'}}>
            <label>
                Учебное заведение
            </label>
            <input 
            type="text"
            name="educationCompany"
            value={education.educationCompany}
            onChange={handleChange}
            placeholder="Гарвард"
            />
        <div>
            <label>
                Специальность
            </label>
            <input 
            type="text"
            name="profession"
            value={education.profession}
            onChange={handleChange}
            placeholder="Юриспруденция"
            />
        </div>
        <div>
              <label>
                Годы обучения
            </label>
            <input 
            type="text"
            name="yearsEduc"
            value={education.yearsEduc}
            onChange={handleChange}
            placeholder="2020-2025"
            />
        </div>


        </div>
    );

}
export default EducationInput;