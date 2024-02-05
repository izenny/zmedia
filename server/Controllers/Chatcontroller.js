const Chat = require('../Modals/Chatschema')

// exports.incomingMessage = async (req, res) => {
//     try {
//         const { roomId, senderId, content } = req.body;
//         const chat = await Chat.findOne({ room: roomId });
//         if (!chat) {
//             const newChat = new Chat({
//                 room: roomId,
//                 message: [{ sender: senderId, content }],
//             });
//             await newChat.save();
//             io.to(roomId).emit('chat message', { sender: senderId, content });
//         } else {
//             chat.message.push({ sender: senderId, content });
//             await chat.save();
//             io.to(roomId).emit('chat message', { sender: senderId, content });
//         }
//         res.status(201).json({ message: 'message send successfully' });
//     } catch (err) {
//         console.log('err creating message', err);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };
exports.incomingMessage = async (req, res) => {
    try {
      const { roomId, senderId, content } = req.body;
      const chat = await Chat.findOne({ room: roomId });
      if (!chat) {
        const newChat = new Chat({
          room: roomId,
          message: [{ sender: senderId, content }],
        });
        await newChat.save();
        io.to(roomId).emit('chat message', { sender: senderId, content });
      } else {
        chat.message.push({ sender: senderId, content });
        await chat.save();
        io.to(roomId).emit('chat message', { sender: senderId, content });
      }
      res.status(201).json({ message: 'message send successfully' });
    } catch (err) {
      console.log('err creating message', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };