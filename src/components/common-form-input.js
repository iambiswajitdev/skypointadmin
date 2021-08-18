const CommonFormInput = ({ name, type, label, refValue, error }) => {
  return (
    <>
      <label className="common_form_lable">{label}</label>

      {
        //* fix spelling mistakes
      }
      <input
        className={
          error?.message
            ? "inputfild_1st common_input_alert_massages"
            : "inputfild_1st"
        }
        name={name}
        type={type}
        ref={refValue}
      />
      <p className="input_alert_massages">{error?.message}</p>
    </>
  );
};

export default CommonFormInput;
