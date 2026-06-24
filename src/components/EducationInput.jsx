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

    const handleRemove = () => {
        if (window.confirm('Удалить эту запись об образовании?')) {
            dispatch({
                type: 'REMOVE_EDUCATION',
                payload: { id: education.id }
            });
        }
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
        <div>
            <button 
                onClick={handleRemove}
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '4px',
                    padding: '4px',
                }}
            >
                Удалить запись
            </button>
        </div>


        </div>
    );

}
export default EducationInput;