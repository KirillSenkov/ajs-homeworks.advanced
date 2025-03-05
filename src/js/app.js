export function orderByProps(obj={}, ord=[]) {
    const dummy = [];
    const result = [];

    for (const prop in obj) {
        dummy.push({key: prop, value: obj[prop]});
    }

    for (const i in ord) { 
        for (const j in dummy) {   
            if (ord[i] === dummy[j].key && !result.includes(dummy[j])) {
                result.push(dummy[j]);
            }
        }
    }

    dummy.sort((prop_a, prop_b) => prop_a.key.localeCompare(prop_b.key));

    for (const i in dummy) {   
        if (!result.includes(dummy[i])) {
            result.push(dummy[i]);
        }
    }

    return result;
}

export function getSpecs(pers={}) {
    const result = [];
    
    const { special: specs } = pers;

    for (const i in specs) {
        const { id, name, icon, description='Описание недоступно' } = specs[i];
        result.push({
            'id': id,
            'name': name,
            'icon': icon,
            'description': description
        });
    }

    return result;
}