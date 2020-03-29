export function path(fileName = 'hello_world.txt') {
    if (process.env.SELENOID) return "/home/uploads/" + fileName;
    else return __dirname + '/' + fileName;
}