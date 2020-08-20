export function path(fileName = 'hello_world.txt') {
    return process.env.SELENOID ? '/home/uploads/' + fileName : __dirname + '/' + fileName;
}