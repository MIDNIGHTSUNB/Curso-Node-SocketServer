


const socketController = (socket) => {
    socket.on('disconnect', () => {
        console.log('Cliente Desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123334;

        callback(id);
        socket.broadcast.emit('enviar-mensaje', payload);
    })
};


module.exports = {
    socketController
}