
//diskStorage = use for to save in system

// Import the multer library, used for handling multipart/form-data (file uploads)
import multer from "multer";

// Set up multer to use memory storage.
// This means uploaded files will be stored in RAM as Buffer objects, not on disk.
const storage = multer.memoryStorage();

// Create the multer middleware to handle multiple file uploads:
// - `.array("files", 10)` means it will accept up to 10 files,
// - The files must come from the form field named "files",
// - The uploaded files will be accessible in `req.files` as Buffer objects.
const uploadFiles = multer({ storage }).array("files", 10);

// Export the middleware so it can be used in routes to handle file uploads
export default uploadFiles;
