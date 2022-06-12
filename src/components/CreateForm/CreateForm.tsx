import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  createCheckThunk,
  editCheckThunk,
} from "../../redux/thunks/checkThunks/checkThunks";

import CreateFormContainer from "./CreateFormStyle";

const CreateForm = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { idCheck } = useParams();
  const dispatch = useAppDispatch();
  const { checks } = useAppSelector((state) => state);
  const checkToEdit = checks.find((check) => check.id === idCheck);

  const blankFields = {
    title: checkToEdit ? checkToEdit.title : "",
    times: checkToEdit ? checkToEdit.times : 1,
    description: checkToEdit ? checkToEdit.description : "",
    image: checkToEdit ? checkToEdit.image : "",
    imageBackup: checkToEdit ? checkToEdit.imageBackup : "",
    id: checkToEdit ? checkToEdit.id : "",
    date: checkToEdit ? checkToEdit.date : "",
  };

  const [formData, setFormData] = useState(blankFields);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    const newCheck = new FormData();

    newCheck.append("title", formData.title);
    newCheck.append("times", JSON.stringify(formData.times));
    newCheck.append("description", formData.description);
    newCheck.append("image", formData.image);

    formData.id
      ? dispatch(editCheckThunk(formData.id, formData))
      : dispatch(createCheckThunk(newCheck));

    setFormData(blankFields);

    navigate("/home");
  };

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] || "",
    });
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
        <label htmlFor="times">Times</label>
        <input
          className="times"
          type="number"
          id="times"
          autoComplete="off"
          value={formData.times}
          onChange={handleInputChange}
        />
        <label htmlFor="description">Description</label>
        <input
          className="description"
          type="text"
          id="description"
          autoComplete="off"
          value={formData.description}
          onChange={handleInputChange}
        />
        <label htmlFor="image">Image</label>
        <input
          className="image"
          id="image"
          type="file"
          onChange={uploadImage}
          autoComplete="off"
        />
        <button type="submit" className="form-button">
          {location.pathname === "/add" ? "CREATE CHECK" : "EDIT CHECK"}
        </button>
      </form>
    </CreateFormContainer>
  );
};

export default CreateForm;
