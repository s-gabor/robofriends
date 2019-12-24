const generateName = require('sillyname');

const generateRobots = (count) => {
    const robots = [];

    for (let i = 0; i < count; i++) {
        const id = i,
            name = generateName(),
            email = name.split(' ')[1].toLowerCase() + '@gmail.com';

        robots.push({ id, name: name.split(' ')[0], email });
    };

    return robots;
}

export default generateRobots(100);
