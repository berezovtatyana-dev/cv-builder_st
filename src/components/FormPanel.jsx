import { useContext } from "react";
import CVContext from '../context/CVContext';
import './FormPanel.css';
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";

const FormPanel = () => {
    const {state, dispatch } = useContext(CVContext);
    const handlePersonalChange = (e) => {
        dispatch({
            type: 'UPDATE_PERSONAL',
            payload: {key: e.target.name, value: e.target.value}
        });
    };
const clearAllData = () => {
  if (window.confirm('Вы уверены, что хотите очистить все данные?')) {
    localStorage.removeItem('cv_data');
    window.location.reload();
  }
};
    
    return (
        <div className="main-form">
            <h2>Заполните данные</h2>
            <section className="section-form">
                <h3>Личная информация</h3>
                <div>
                    <label>ФИО</label>
                    <input type="text"
                    name="fullName"
                    placeholder="Иванов Иван Иванович"
                    value={state.personalInfo.fullName}
                    onChange={handlePersonalChange}
                     />
                </div>
                <div>
                    <label>email:</label>
                    <input type="email"
                    name="email"
                    placeholder="email@email.ru"
                    value={state.personalInfo.email}
                    onChange={handlePersonalChange}
                     />
                </div>
                 <div>
                    <label>тел.</label>
                    <input type="text"
                    name="phone"
                    placeholder="+7 9999999999"
                    value={state.personalInfo.phone}
                    onChange={handlePersonalChange}
                     />
                </div>
                <div>
                    <label>Должность</label>
                    <input type="text"
                    name="position"
                    placeholder="Директор"
                    value={state.personalInfo.position}
                    onChange={handlePersonalChange}
                     />
                </div>
            </section>
            <section className="section-form">
                <h3>Образование</h3>
                {state.education.map((edu) => (
                <EducationInput key={edu.id} education={edu} />
                ))}
                <button
                onClick={() => dispatch({ type: 'ADD_EDUCATION' })}
                >
                    + Добавить образование
                </button>

            </section>
             <section className="section-form">
                <h3>Опыт работы</h3>
                {state.experience.map((exp) => (
                    <ExperienceInput key={exp.id} experience={exp} />
                ))}
                <button
                onClick={() => dispatch({ type: 'ADD_EXPERIENCE'})}
                >
                    + Добавить опыт работы
                </button>
            </section>
            <button onClick={clearAllData} style={{ marginTop: '15px', backgroundColor: 'red', color: 'white', fontSize: '18px', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
                Очистить все данные
            </button>

        </div>
    );

}

export default FormPanel;