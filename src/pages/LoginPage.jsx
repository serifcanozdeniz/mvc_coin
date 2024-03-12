import { useFormik } from "formik";
import { schema } from "../schema";

const LoginPage = () => {
  // formik in bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // formda tutulacak verilerin ilk değeri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    //validasyon şeması:
    // inputlardaki veriler tanımladığımız şemadaki koşullara uygun mu diye kontrol eder. Eğer geçerli değil ise error state'inde hataları ekler
    validationSchema: schema,

    // form gönderilince çalışacak olan fonksiyon
    // otomatik olarak sayfa yenilemeyi engeller
    // 1.parametre olarak formdaki verileri alır
    // 2.parametre olarak formda çalışabilecek aksiyonları alır
    onSubmit: (values, actions) => {
      console.log(values);
      console.log(actions);
    },
  });

  return (
    <div className="login-page">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/coin.png" alt="" />
          <span>CoinMania</span>
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-5 mt-5"
        >
          <div>
            <label>E-Mail</label>
            <input
              name="email"
              onChange={formik.handleChange}
              className="form-control mt-2"
              type="email"
            />
          </div>

          <div>
            <label>Yaş</label>
            <input
              name="age"
              onChange={formik.handleChange}
              className="form-control mt-2"
              type="number"
            />
          </div>

          <div>
            <label>Şifre</label>
            <input
              name="password"
              onChange={formik.handleChange}
              className="form-control mt-2"
              type="password"
            />
          </div>

          <div>
            <label>Şifre Onay</label>
            <input
              name="passwordConfirm"
              onChange={formik.handleChange}
              className="form-control mt-2"
              type="password"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
