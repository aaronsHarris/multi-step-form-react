import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";

function Form() {
  const [page, setPage] = useState(0)

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
      <div className="progress-bar"></div>
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
        </div>
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
  );
}

export default Form;
