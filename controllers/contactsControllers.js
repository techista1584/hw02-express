import { Contact } from "../models/contactsModel.js";
// prettier-ignore
import { contactValidation, favoriteValidation } from "../validations/validation.js";
import { httpError } from "../helpers/httpError.js";

const getAllContacts = async (_req, res) => {
  // REFERENCE: https://mongoosejs.com/docs/api/model.html#Model.find()
  const result = await Contact.find();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  // REFERENCE: https://mongoosejs.com/docs/api/model.html#Model.findById()
  const result = await Contact.findById(contactId);

  if (!result) {
    throw httpError(404, "Contact ID Not Found");
  }

  res.json(result);
};

const addContact = async (req, res) => {
  // Preventing lack of necessary data for contacts (check validations folder)
  const { error } = contactValidation.validate(req.body);

  if (error) {
    throw httpError(400, "missing required field");
  }

  // REFERENCE: https://mongoosejs.com/docs/api/model.html#Model.create()
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;

  // REFERENCE: https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()
  const result = await Contact.findByIdAndDelete(contactId);

  if (!result) {
    throw httpError(404);
  }

  res.json({
    message: "Contact deleted",
  });
};

const updateContactById = async (req, res) => {
  // Preventing lack of necessary data for contacts (check validations folder)
  const { error } = contactValidation.validate(req.body);
  if (error) {
    throw httpError(400, "missing fields");
  }

  const { contactId } = req.params;

  // REFERENCE: https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw httpError(404);
  }

  res.json(result);
};

const updateStatusContact = async (req, res) => {
  // Preventing lack of necessary data for favorite (check validations folder)
  const { error } = favoriteValidation.validate(req.body);
  if (error) {
    throw httpError(400, "missing field favorite");
  }

  const { contactId } = req.params;

  // REFERENCE: https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw httpError(404);
  }

  res.json(result);
};

// prettier-ignore
export { getAllContacts, getContactById, addContact, deleteContactById, updateContactById, updateStatusContact};
