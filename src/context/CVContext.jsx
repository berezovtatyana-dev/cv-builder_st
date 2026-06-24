import React, { useReducer, useEffect, createContext } from "react";

const CVContext = createContext();

const loadInitialState = () => {
    const savedData = localStorage.getItem('cv_data');
    if (savedData) {
        return JSON.parse(savedData);
    }
    return {
        personalInfo: {
            fullName: '',
            email: '',
            phone: '',
            position: ''
        },
        education: [{
            id: 1,
            educationCompany: '',
            profession: '',
            yearsEduc: ''
        }],
        experience: [{
            id: 1,
            company: '',
            role: '',
            years: ''
        }],
        theme: 'classic'
    };
};
function cvReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_PERSONAL':
            return {
                ...state,
                personalInfo: {
                    ...state.personalInfo,
                    [action.payload.key]: action.payload.value
                }
            };
        case 'ADD_EDUCATION':
            const newId = state.education.length > 0 ? Math.max(...state.education.map(edu => edu.id)) + 1 : 1;
            return {
                ...state,
                education: [...state.education, { id: newId, educationCompany: '', profession: '', yearsEduc: ''}]
            };

        case 'UPDATE_EDUCATION':
            return {
                ...state,
                education: state.education.map(edu => 
                    edu.id === action.payload.id ? { ...edu, [action.payload.key]: action.payload.value } : edu
                )
            };
        
        case 'ADD_EXPERIENCE':  {
            const newExpId = state.experience.length > 0 ? Math.max(...state.experience.map(exp => exp.id)) + 1 : 1;
            return {
                ...state,
                experience: [...state.experience, { id: newExpId, company: '', role: '', years: ''}]
            };
        }

        case 'UPDATE_EXPERIENCE':
            return {
                ...state,
                experience: state.experience.map(exp => 
                    exp.id === action.payload.id ? { ...exp, [action.payload.key]: action.payload.value } : exp
                )
            };

        
        case 'SET_THEME':
            return {
            ...state,
            theme: action.payload.theme
            };
        default:
            return state;
    }
}
const initialState = loadInitialState();
export const CVProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cvReducer, null, loadInitialState);
        
    useEffect(() => {
        localStorage.setItem('cv_data', JSON.stringify(state));
    }, [state]);
        
    return (
        <CVContext.Provider value={{ state, dispatch }}>
            {children}
        </CVContext.Provider>
    );
};

export default CVContext;