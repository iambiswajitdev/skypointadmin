import { Col, Container, Row } from "react-bootstrap";
import {
  emailValidationRegex,
  passwordValidationRegex,
  invalidPasswordMessage,
  invalidEmailMessage,
  loginImages,
  logoImages,
} from "../utility/commonStaticData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CommonForm from "../components/common-form";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(emailValidationRegex, invalidEmailMessage),
  password: yup
    .string()
    .required("Password is required")
    .matches(passwordValidationRegex, invalidPasswordMessage),
});

const Register = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => console.log(data);

  const formSchema = [
    {
      filed: "input",
      type: "text",
      label: "Email",
      name: "email",
      error: errors.email,
    },
    {
      filed: "input",
      type: "password",
      label: "Password",
      name: "password",
      error: errors.password,
    },
  ];

  return (
    <>
      <div className="loginMain">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="loginBackground">
                <Row>
                  <Col lg={2}>
                    <img className="logoimg" src={logoImages} alt="" />
                  </Col>
                </Row>
                <Row>
                  <Col lg={7}>
                    <img src={loginImages} alt="" />
                  </Col>
                  <Col lg={5}>
                    <h2 className="login_title">registration</h2>
                    <div className="main_formg">
                      <CommonForm
                        onSubmitFunction={handleSubmit(onSubmitHandler)}
                        refValue={register}
                        schema={formSchema}
                        submitButtonTitle="Register"
                      />
                    </div>
                    <div className="loginForgetpassword">
                      <a className="reistation" href="">
                        you have a already account
                      </a>
                      <span>OR</span>
                      <a className="forgot" href="">
                        Login
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
