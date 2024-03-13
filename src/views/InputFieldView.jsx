const InputFieldView = ({ formik, data }) => {
  const { label, name, type } = data;
  return (
    <div>
      <label className="form-label text-warning">{label}</label>
      <input
        onBlur={formik.handleBlur}
        name={name}
        onChange={formik.handleChange}
        className={`form-control ${
          formik.errors[name] && formik.touched[name] ? "is-invalid" : ""
        }`}
        type={type}
        required
      />
      <div className="feedback">{formik.errors[name]} &nbsp;</div>
    </div>
  );
};

export default InputFieldView;
