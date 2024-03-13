// yup'taki bütün fonksiyonları (yıldız ile as koy ve adını yup ver) import et
import * as yup from "yup";


// validasyon şeması:
// formdaki inputların geçerli olması için gerekli koşulları tanımladığımız alan

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

// bir alan için koşulları yazarken ilk olarak o alanın tipini tanımlayan yup fonksiyonunu çağırırız
export const schema = yup.object().shape({
    // email in geçerli olması için koşullar
    email: yup.string().email("Mail formatı doğru değildir").required("Zorunlu alan"),

    // yaşın geçerli olması için koşullar
    age: yup.number().min(18, "Yaş 18'den küçük olmamalıdır").max(100, "Yaş 100'den büyük olmamalıdır").integer("Tam sayı girilmeli").required("Zorunlu alan"),
    // şifrenin geçerli olması için koşullar
    password: yup.string().min(8, "Şifre en az 8 haneli olmalıdır")
        // şifre regex kurallarına uygun mu kontrol eder
        .matches(regex, "Şifreniz yeterince güçlü değil").required("Zorunlu alan"),
    // şifre onay alanının geçerli olması için koşullar
    passwordConfirm: yup.string()
        // oneOf() kontrol ettiğimiz inputtaki verinin verdiğimiz değerlere eşit olup olmadığını kontrol eder
        // ref() farklı bir inputtaki veriye erişmemizi sağlar
        .oneOf([yup.ref("password")], "*Şifre eşleşmiyor").required("Zorunlu alan"),
});
