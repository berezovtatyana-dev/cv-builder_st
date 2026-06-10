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

    return (
        <div style={{border: '2px solid black'}}>
            <label>
                Компания
            </label>
            <input 
            type="text"
            name="Company"
            value={experience.Company}
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


        </div>
    );

}
export default ExperienceInput;