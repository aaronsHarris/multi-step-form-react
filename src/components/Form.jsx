import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";

function Form() {
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    age: 0,
    city: '',
    additional1: '',
    additional2: '',
    additional3: ''

  })
  const FormTitles = ['Sign Up', 'Personal Info', 'Additional Info']

  const pageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo />
    } else if (page === 1) {
      return <PersonalInfo />
    } else {
      return <AdditionalInfo />
    }
  }
  return (
    <div className="form">
      <div className="progress-bar">
      <div style={{width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%'}}></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{pageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            prev
          </button>
          <button
            disabled={page == FormTitles.length - 1}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
