import LoginView from "../views/LoginView";
import { useFormik } from "formik";
import { schema } from "../schema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginController = () => {
  const navigate = useNavigate();
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
      navigate("/home");
      toast.success("Giriş başarılı");
    },
  });
  return <LoginView formik={formik} />;
};

export default LoginController;
