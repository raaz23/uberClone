import userModel from '../models/userModel.js';
export const userProfile = async (req, res, next) => {
    try {

        console.log(req.user);
        
        const user = await userModel.findById(req.user._id);
         
        if (!user) {
          return res.status(404).send("User does not exist.");
        }
    
        const { password, ...rest } = user._doc;
    
        return res.status(200).json(rest);
      } catch (error) {
        
        console.error(error);
        return res.status(500).send("An error occurred while retrieving the user profile.");
      }
    };
  

    