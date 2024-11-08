import { useState } from "react";
import AuthRedirectSection from "../Components/AuthRedirectSection";
import { LoginValidations } from "../Validations/loginValidations";
import { useForm } from "react-hook-form";
import CommonTextField from "../Form Fields/CommonTextField";
import { ClosedEye, OpenEye } from "../assets/Icons/Svg";
import { useNavigate } from "react-router-dom";
import { login } from "../api/apiFunctions";
import logo from '../assets/images/brod-logo.png';


const Login = () => {
  const navigate = useNavigate();
  const formConfig = useForm();
  const { handleSubmit } = formConfig;
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit = (values) => {
    console.log(values, "inside submit");
    // update required: add token from the API here
    const token = Date.now();
    localStorage.setItem("token", token);
    navigate("/products");

    login(values)
      .then((res) => {
        // update the token logic with actual token
        const token = Date.now();
        localStorage.setItem("token", token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* <AuthRedirectSection
        text="Don't have an account? "
        linkText="Sign up"
        linkUrl="/sign-up"
        className="right-align"
      /> */}
      <div className="login-text-area">
      <div>
        <div className="login-logo">
            <img src={logo} />
        </div>
        <div className="login-text">
          <h2>Sign Up</h2>
          <p className="login-para">More than <span className="plus-product">120+ Products</span> from around the world!</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <CommonTextField
          fieldName="fullname"
          formConfig={formConfig}
          type="text"
          placeholder="E.g. John Doe"
          rules={LoginValidations["fullname"]}
          label="Full Name"
        />
        <CommonTextField
          fieldName="email"
          formConfig={formConfig}
          type="email"
          placeholder="E.g. johndoe@example.com"
          rules={LoginValidations["email"]}
          label="Email"
        />
        <CommonTextField
          fieldName="phoneNumber"
          formConfig={formConfig}
          type="number"
          placeholder="E.g. 123 456 7890"
          rules={LoginValidations["phoneNumber"]}
          label="Phone Number"
        />
        <div className="position-relative">
        <CommonTextField
          fieldName="password"
          formConfig={formConfig}
          placeholder="********"
          rules={LoginValidations["password"]}
          label="Password"
          type={showPassword ? "text" : "password"}
          //   for adding icons
          onIconClick={toggleShowPassword}
          icon={showPassword ? ClosedEye : OpenEye}
        />
        </div>
        <div className="position-relative">
        <CommonTextField
          fieldName="confirmpassword"
          formConfig={formConfig}
          placeholder="********"
          rules={LoginValidations["password"]}
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          //   for adding icons
          onIconClick={toggleShowPassword}
          icon={showPassword ? ClosedEye : OpenEye}
        />
        </div>
        
        <button type="submit" className="sign-in-button mb-3">
        Sign Up
        </button>
        {/* <AuthRedirectSection
          text="Don't have an acount? "
          linkText="Sign up"
          linkUrl="/sign-up"
        /> */}
      <div>
        <h4 className="dont-account">Don’t Have An Account?</h4>
      </div>
      </form>
      
      </div>
      <div className="login-footer">
        <div className="container">
          <div className="login-copyright">
            <div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Help & FAQ </a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
                    <div className="career-social-icon">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_25582)">
                        <path d="M18 9C18 4.02948 13.9705 0 9 0C4.02948 0 0 4.02948 0 9C0 13.2206 2.90592 16.7623 6.82596 17.735V11.7504H4.97016V9H6.82596V7.81488C6.82596 4.75164 8.21232 3.3318 11.2198 3.3318C11.79 3.3318 12.7739 3.44376 13.1764 3.55536V6.04836C12.964 6.02604 12.595 6.01488 12.1367 6.01488C10.661 6.01488 10.0908 6.57396 10.0908 8.02728V9H13.0306L12.5255 11.7504H10.0908V17.9341C14.5472 17.3959 18.0004 13.6015 18.0004 9H18Z" fill="#303030"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_25582">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7447 1.42773H16.2748L10.7473 7.74535L17.25 16.3422H12.1584L8.17053 11.1283L3.60746 16.3422H1.07582L6.98808 9.58481L0.75 1.42773H5.97083L9.57555 6.19348L13.7447 1.42773ZM12.8567 14.8278H14.2587L5.20905 2.86258H3.7046L12.8567 14.8278Z" fill="#303030"/>
                      </svg>

                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_25580)">
                        <path d="M9 1.6207C11.4047 1.6207 11.6895 1.63125 12.6352 1.67344C13.5141 1.71211 13.9887 1.85977 14.3051 1.98281C14.7234 2.14453 15.0258 2.34141 15.3387 2.6543C15.6551 2.9707 15.8484 3.26953 16.0102 3.68789C16.1332 4.0043 16.2809 4.48242 16.3195 5.35781C16.3617 6.30703 16.3723 6.5918 16.3723 8.99297C16.3723 11.3977 16.3617 11.6824 16.3195 12.6281C16.2809 13.507 16.1332 13.9816 16.0102 14.298C15.8484 14.7164 15.6516 15.0187 15.3387 15.3316C15.0223 15.648 14.7234 15.8414 14.3051 16.0031C13.9887 16.1262 13.5105 16.2738 12.6352 16.3125C11.6859 16.3547 11.4012 16.3652 9 16.3652C6.59531 16.3652 6.31055 16.3547 5.36484 16.3125C4.48594 16.2738 4.01133 16.1262 3.69492 16.0031C3.27656 15.8414 2.97422 15.6445 2.66133 15.3316C2.34492 15.0152 2.15156 14.7164 1.98984 14.298C1.8668 13.9816 1.71914 13.5035 1.68047 12.6281C1.63828 11.6789 1.62773 11.3941 1.62773 8.99297C1.62773 6.58828 1.63828 6.30351 1.68047 5.35781C1.71914 4.47891 1.8668 4.0043 1.98984 3.68789C2.15156 3.26953 2.34844 2.96719 2.66133 2.6543C2.97773 2.33789 3.27656 2.14453 3.69492 1.98281C4.01133 1.85977 4.48945 1.71211 5.36484 1.67344C6.31055 1.63125 6.59531 1.6207 9 1.6207ZM9 0C6.55664 0 6.25078 0.0105469 5.29102 0.0527344C4.33477 0.0949219 3.67734 0.249609 3.10781 0.471094C2.51367 0.703125 2.01094 1.00898 1.51172 1.51172C1.00898 2.01094 0.703125 2.51367 0.471094 3.1043C0.249609 3.67734 0.0949219 4.33125 0.0527344 5.2875C0.0105469 6.25078 0 6.55664 0 9C0 11.4434 0.0105469 11.7492 0.0527344 12.709C0.0949219 13.6652 0.249609 14.3227 0.471094 14.8922C0.703125 15.4863 1.00898 15.9891 1.51172 16.4883C2.01094 16.9875 2.51367 17.2969 3.1043 17.5254C3.67734 17.7469 4.33125 17.9016 5.2875 17.9437C6.24727 17.9859 6.55312 17.9965 8.99648 17.9965C11.4398 17.9965 11.7457 17.9859 12.7055 17.9437C13.6617 17.9016 14.3191 17.7469 14.8887 17.5254C15.4793 17.2969 15.982 16.9875 16.4813 16.4883C16.9805 15.9891 17.2898 15.4863 17.5184 14.8957C17.7398 14.3227 17.8945 13.6687 17.9367 12.7125C17.9789 11.7527 17.9895 11.4469 17.9895 9.00352C17.9895 6.56016 17.9789 6.2543 17.9367 5.29453C17.8945 4.33828 17.7398 3.68086 17.5184 3.11133C17.2969 2.51367 16.991 2.01094 16.4883 1.51172C15.9891 1.0125 15.4863 0.703125 14.8957 0.474609C14.3227 0.253125 13.6688 0.0984375 12.7125 0.05625C11.7492 0.0105469 11.4434 0 9 0Z" fill="#303030"/>
                        <path d="M9 4.37695C6.44766 4.37695 4.37695 6.44766 4.37695 9C4.37695 11.5523 6.44766 13.623 9 13.623C11.5523 13.623 13.623 11.5523 13.623 9C13.623 6.44766 11.5523 4.37695 9 4.37695ZM9 11.9988C7.34414 11.9988 6.00117 10.6559 6.00117 9C6.00117 7.34414 7.34414 6.00117 9 6.00117C10.6559 6.00117 11.9988 7.34414 11.9988 9C11.9988 10.6559 10.6559 11.9988 9 11.9988Z" fill="#303030"/>
                        <path d="M14.8852 4.19453C14.8852 4.79219 14.4 5.27383 13.8059 5.27383C13.2082 5.27383 12.7266 4.78867 12.7266 4.19453C12.7266 3.59688 13.2117 3.11523 13.8059 3.11523C14.4 3.11523 14.8852 3.60039 14.8852 4.19453Z" fill="#303030"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_25580">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>



                    </div>
                    <h4>© copyright 2024 brödkorgen.se</h4>
              </div>   
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
