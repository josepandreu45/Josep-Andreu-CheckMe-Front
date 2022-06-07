import { ChangeEvent, FormEvent, useState } from "react";
import CreateFormContainer from "./CreateFormStyle";

interface FormData {
  title: string;
  times: number;
  description: string;
  image: string;
}

const CreateForm = (): JSX.Element => {
  const blankFields = {
    title: "",
    times: 1,
    description: "",
    image: "",
  };

  const [formData, setFormData] = useState<FormData>(blankFields);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setFormData(blankFields);
  };

  return (
    <CreateFormContainer>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="title">Check</label>
        <input
          type="text"
          id="title"
          autoComplete="off"
          value={formData.title}
          onChange={handleInputChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          autoComplete="off"
          value={formData.description}
          onChange={handleInputChange}
        />
        <label htmlFor="times">Times</label>
        <input
          type="number"
          id="times"
          autoComplete="off"
          value={formData.times}
          onChange={handleInputChange}
        />
        <label htmlFor="image">Image</label>
        <input
          className="image"
          placeholder="image"
          id="image"
          type="file"
          value={formData.image}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button type="submit" className="form-button">
          CREATE CHECK
        </button>
      </form>
    </CreateFormContainer>
  );
};

export default CreateForm;
