import express from "express";
import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";
// prettier-ignore
import { addContact, deleteContactById, getAllContacts, getContactById, updateContactById, updateStatusContact } from "../../controllers/contactsControllers.js";

const router = express.Router();

/* GET: // http://localhost:3000/api/contacts */
router.get("/", ctrlWrapper(getAllContacts));

/* GET: // http://localhost:3000/api/contacts/:contactId */
router.get("/:contactId", ctrlWrapper(getContactById));

/* POST: // http://localhost:3000/api/contacts/ 
{
    "name": "Ruby Mateo",
    "email": "rubymateo@example.com",
    "phone": "(639) 898-1622"
} 
*/
router.post("/", ctrlWrapper(addContact));

/* DELETE: // http://localhost:3000/api/contacts/:contactId */
router.delete("/:contactId", ctrlWrapper(deleteContactById));

/* PUT: // http://localhost:3000/api/contacts/:contactId 
{
    "name": "Joanna Shaw",
    "email": "joannashaw@example.com",
    "phone": "(639) 777-8819"
} 
*/
router.put("/:contactId", ctrlWrapper(updateContactById));

/* PATCH: // http://localhost:3000/api/contacts/:contactId/favorite
{
    "favorite": true,
}
*/
router.patch("/:contactId/favorite", ctrlWrapper(updateStatusContact));

export { router };