import React, { useContext } from "react";
import CVContext from "../context/CVContext";
import "./PreviewPanel.css";

const PreviewPanel = () => {
  const { state } = useContext(CVContext);
  const { personalInfo, education, experience } = state;

  return (
    <div className="preview-container">
      <h2>Предпросмотр резюме</h2>
      
      <div style={{backgroundColor: 'white',
                    padding: '20px',
                    border: '1px solid grey'
      }}>
        {/* Личная информация */}
        <section>
          <h3>Личная информация</h3>
          <div>
            <p>ФИО:</p> {personalInfo.fullName || "—"}
          </div>
          <div>
            <p>Email:</p> {personalInfo.email || "—"}
          </div>
          <div>
            <p>Телефон:</p> {personalInfo.phone || "—"}
          </div>
          <div>
            <p>Должность:</p> {personalInfo.position || "—"}
          </div>
        </section>

        {/* Образование */}
        <section className="preview-section">
          <h3>Образование</h3>
          {education.length === 0 ? (
            <p>Нет добавленного образования</p>
          ) : (
            education.map((edu) => (
              <div key={edu.id}  style={{padding: '4px', fontSize: '14px'}}>
                <div>
                  <p>Учебное заведение:</p> {edu.educationCompany || "—"}
                </div>
                <div>
                  <p>Специальность:</p> {edu.profession || "—"}
                </div>
                <div>
                  <p>Годы обучения:</p> {edu.yearsEduc || "—"}
                </div>
                {education.length > 1 && <hr />}
              </div>
            ))
          )}
        </section>

        {/* Опыт работы */}
        <section className="preview-section">
          <h3>Опыт работы</h3>
          {experience.length === 0 ? (
            <p>Нет добавленного опыта работы</p>
          ) : (
            experience.map((exp) => (
              <div key={exp.id}  style={{padding: '4px', fontSize: '14px'}}>
                <div>
                  <p>Компания:</p> {exp.company || "—"}
                </div>
                <div>
                  <p>Должность:</p> {exp.role || "—"}
                </div>
                <div>
                  <p>Годы работы:</p> {exp.years || "—"}
                </div>
                {experience.length > 1 && <hr />}
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default PreviewPanel;