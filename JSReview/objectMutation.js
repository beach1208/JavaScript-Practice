const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'value'
    }
}

//o is constant but object inside o can be modified

//o2 and o reference the same object
//o and o2 pointing same address of the object
const o2 = o;

o2.a = 'new value';
console.log(o.a) //new value

//shallow copy the object o to object o3  separete copy of the object
const o3 = Object.assign({}, o);

//deep copy
function deepCopy(obj) {
    //check if values are objects
    //if so copy that object
    //else return the value
    const keys = Object.keys(obj);
    const newObject = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key]);
        } else {
            newObject[key] = obj[key];
        }
    }
    return newObject;
}


const o4 = deepCopy(o);
o.obj.key = 'new key';
console.log(o4.obj.key);