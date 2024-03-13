import InputFieldView from "./InputFieldView";
import { inputs } from "../constants";

const LoginView = ({ formik }) => {
  return (
    <div className="login-page">
      <div
        className="container my-4 py-3 rounded-2 bg-black"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/coin.png" alt="" />
          <span className="text-warning">CoinMania</span>
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-5"
        >
          {inputs.map((data) => (
            <InputFieldView key={data.name} formik={formik} data={data} />
          ))}

          <button className="btn btn-warning" type="submit">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
