import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, `${path.resolve(__dirname,'..','..','upload_pdf')}`);
    },
    filename: function(ref,res, cb){
        cb(null, Date.now().toString()+ '.pdf')
    }
  });

export const upload = multer({storage:storage})

