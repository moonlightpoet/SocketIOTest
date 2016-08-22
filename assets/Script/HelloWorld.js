cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        let self = this;
        if (cc.sys.isNative) {
            window.io = SocketIO.connect;
        } else {
            require('socket.io');
        }
        var socket = io('http://localhost:3000');
        socket.on('connected', function (msg) {
            self.label.string = msg;
        });
    },

    // called every frame
    update: function (dt) {

    },
});
