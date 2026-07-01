import React, { useContext } from "react";
import CVContext from "../context/CVContext";

const ExperienceInput = ({ experience }) => {
    const { dispatch } = useContext(CVContext);
    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_EXPERIENCE',
            payload: {
                id: experience.id,
                key: e.target.name,
                value: e.target.value
            }
        });
    };
    const handleRemove = () => {
        if (window.confirm('Удалить эту запись об опыте работы?')) {
            dispatch({
                type: 'REMOVE_EXPERIENCE',
                payload: { id: experience.id }
            });
        }
    };

    return (
        <div style={{border: '2px solid black'}}>
            
            <label>
                Компания
            </label>
            <input 
            type="text"
            name="company"
            value={experience.company}
            onChange={handleChange}
            placeholder="ГазПром"
            />
        <div>
            <label>
                Должность
            </label>
            <input 
            type="text"
            name="role"
            value={experience.role}
            onChange={handleChange}
            placeholder="Директор"
            />
        </div>
        <div>
              <label>
                Годы работы
            </label>
            <input 
            type="text"
            name="years"
            value={experience.years}
            onChange={handleChange}
            placeholder="2025-2026"
            />
        </div>
        <button onClick={handleRemove}
            style={{
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '4px',
                padding: '4px',
            }}
            >Удалить запись</button>
        

        </div>
    );

}
export default ExperienceInput;