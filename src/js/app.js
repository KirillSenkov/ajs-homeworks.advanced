export function orderByProps(obj={}, ord=[]) {
    const props = [];
    const result = [];

    for (const prop in obj) {
        props.push({key: prop, value: obj[prop]});
    }

    for (const ordPos of ord) { 
        for (const prop of props) {   
            if (ordPos === prop.key) {
                result.push(prop);
            }
        }
    }

    props.sort((prop_a, prop_b) => prop_a.key.localeCompare(prop_b.key));

    for (const prop of props) {   
        if (!result.includes(prop)) {
            result.push(prop);
        }
    }
    
    return result;
}

export function getSpecs(char) { // если деконструкцию включить сразу в аргумент, будет падать при undefined
    const specs = char?.special ?? [];
    return specs.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
        id,
        name,
        icon,
        description
    }));
}