const Notification = require('../Modals/Notificationschema');

exports.createNotification = async (req, res) => {
  try {
    const { user, type, content, read } = req.body;
    console.log('Creating notification:', { user, type, content, read });
    
    const newNotification = new Notification({ user, type, content, read });
    const savedNotification = await newNotification.save();
    
    res.status(201).json(savedNotification); // Use status 201 for successful creation
  } catch (err) {
    console.error('Error creating notification:', err);
    res.status(400).json({ message: err.message });
  }
};

// exports.getAllNotifications = async (req, res)=>{
//     try{
//         const notification = await Notification.find();
//         res.json(notification);
//     }catch(err){
//         res.status(400).json({message : err.message});
//     }
// }
exports.getNotificationByUserId = async (req, res)=>{
    try{
        const userId = req.params.userId;
        const NotificationByUser = await Notification.find({user: userId}) 
        res.json(NotificationByUser);
    }catch(err){
        res.status(500).json({message:err.message})
    }}

exports.deleteNotification = async(req, res)=>{
    try{
        const notification = await Notification.findByIdAndDelete(req.params.id);
        res.json({message :' notification deleted'})
    }catch(err){
        res.status(400).json({message : err.message});
    }
}