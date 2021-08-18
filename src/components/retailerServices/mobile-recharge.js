import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CommonForm from "../common-form";
import * as yup from "yup";
import {
  mobileImages,
  passwordValidationRegex,
  invalidPasswordMessage,
} from "../../utility/commonStaticData";
import { Col, Row } from "react-bootstrap";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(passwordValidationRegex, invalidPasswordMessage),
  age: yup
    .number()
    .typeError("you must specify a number")
    .required("Age is required")
    .positive("Number have to be a positive number"),
});

const MobileRecharge = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => console.log(data);

  const formSchema = [
    {
      filed: "input",
      type: "text",
      label: "First Name",
      name: "firstName",
      error: errors.firstName,
    },
    {
      filed: "input",
      type: "text",
      label: "Age",
      name: "age",
      error: errors.age,
    },
    {
      filed: "input",
      type: "text",
      label: "Password",
      name: "password",
      error: errors.password,
    },
  ];

  return (
    <div className="main_form">
      <Row>
        <Col lg={5}>
          <CommonForm
            onSubmitFunction={handleSubmit(onSubmitHandler)}
            refValue={register}
            schema={formSchema}
            submitButtonTitle="Submit"
          />
        </Col>
        <Col lg={7}>
          <img
            className="mobileimages" // *  change the class name
            src={mobileImages}
            alt="FormSideImage"
            srcSet=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default MobileRecharge;
