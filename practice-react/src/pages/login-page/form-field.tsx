import Input from "../../components/input"

interface IFormField {
  name: string,
  type: string,
  placeholder?: string
}

export const FormField = ({ name, type, placeholder } :IFormField) => {
  return (
    <div className="form-field">
      <label className="input-label">{name}</label>
      <Input  type={type} placeholder={placeholder}/>
    </div>
  )
}
