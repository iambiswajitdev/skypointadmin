import { Col, Container, Row } from "react-bootstrap";
import {
  emailValidationRegex,
  invalidEmailMessage,
  forgotImages,
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
});

const ForgotPassword = () => {
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
  ];

  return (
    <>
      <div className="forgot_password">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="loginBackground_for">
                <Row>
                  <Col lg={2}>
                    <img className="logoimg" src={logoImages} alt="" />
                  </Col>
                </Row>
                <Row>
                  <Col lg={7}>
                    <img className="loginleftimg" src={forgotImages} alt="" />
                  </Col>
                  <Col lg={5}>
                    <h2 className="login_title">forgot password ?</h2>
                    <div className="main_forms">
                      <CommonForm
                        onSubmitFunction={handleSubmit(onSubmitHandler)}
                        refValue={register}
                        schema={formSchema}
                        submitButtonTitle="Submit"
                      />
                    </div>
                    <div className="loginForgetpassword">
                      <a className="reistation" href="">
                        Registration
                      </a>
                      <span>OR</span>
                      <a className="forgot" href="">
                        Forgot Password ?
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

export default ForgotPassword;
