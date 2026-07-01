import React, { useContext } from "react";
import CVContext from "../context/CVContext";
import "./PreviewPanel.css";

const PreviewPanel = () => {
  const { state } = useContext(CVContext);
  const { personalInfo, education, experience } = state;

  const hasEducation = education.some(edu => 
    edu.educationCompany?.trim() !== '' || 
    edu.profession?.trim() !== '' || 
    edu.yearsEduc?.trim() !== ''
  );

  return (
    <div className="preview-container">
      <h2>Предпросмотр резюме</h2>
      <div style={{backgroundColor: 'white'}}>
        <section className="preview-section">
          <h3>Личная информация</h3>
          <div>
            ФИО: {personalInfo.fullName || " — "}
          </div>
          <div>
            email: {personalInfo.email || " — "}
          </div>
          <div>
            Телефон: {personalInfo.phone || "—"}
          </div>
          <div>
            Должность: {personalInfo.position || "—"}
          </div>
        </section>
        {hasEducation && (
          <section className="preview-section">
            <h3>Образование</h3>
            {education.map((edu) => (
              <div key={edu.id}  style={{fontSize: '14px'}}>
                  <div>
                    Учебное заведение: {edu.educationCompany || "—"}
                  </div>
                  <div>
                    Специальность: {edu.profession || "—"}
                  </div>
                  <div>
                    Годы обучения: {edu.yearsEduc || "—"}
                  </div>
                  {education.length > 1 && <hr />}
                </div>
            ))}
            </section>
        )}

        <section className="preview-section">
          <h3>Опыт работы</h3>
          {experience.map((exp) => (
            <div key={exp.id}  style={{fontSize: '14px'}}>
                <div>
                  Компания: {exp.company || "—"}
                </div>
                <div>
                  Должность: {exp.role || "—"}
                </div>
                <div>
                  Годы работы: {exp.years || "—"}
                </div>
                {experience.length > 1 && <hr />}
              </div>
          ))}
          </section>
      </div>
    </div>
  );
};

export default PreviewPanel;