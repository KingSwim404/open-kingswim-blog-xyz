//https://github.com/pantoffski/vue-cli-plugin-ftp-deploy
module.exports = {
    localBasePath: "/",
    remoteBasePath: "/",
    clear: ["xyz"],
    sync: [
        {src: "/dist", dest: "/"}
    ]
};
