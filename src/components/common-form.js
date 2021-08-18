import CommonFormInput from "./common-form-input";

const CommonForm = ({
  onSubmitFunction,
  refValue,
  schema,
  submitButtonTitle,
}) => {
  return (
    <>
      {schema.map((item, index) => (
        <div key={index} className="common_form_element_wraping_div">
          {
            // * this div is the warping div for every single item in the form
          }
          {item.filed === "input" ? (
            <CommonFormInput
              name={item.name}
              type={item.type}
              label={item.label}
              refValue={refValue}
              error={item.error}
            />
          ) : null}
        </div>
      ))}
      <button className="btn_outline_primary" onClick={onSubmitFunction}>
        {submitButtonTitle}
      </button>
    </>
  );
};

export default CommonForm;
