export function test(arg) {
    console.log(arg);
}

export async function getRequest(url = undefined) {
    if (url !== undefined) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });

        if (response.ok && response.status === 200) {
            const responseJson = await response.json();
            return Promise.resolve(responseJson)
        } else {
            return Promise.reject("There is an error happen")
        }


    }

    return url;
}

export async function postRequest(url = undefined, body = undefined) {
    if (url !== undefined) {
        const data = body !== undefined || body !== null ? JSON.stringify(body) : null;
        const request = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' // to add an object make sure to set headers content type to application/json and accepts json
            }
        });
        const response = await request.json();

        console.log('Statue => ', request.ok)
        if (request.ok && request.status === 201) { //status code that hold the success of creation of posted data and insure that the creation status was done successfuly is 201
            return Promise.resolve(response)
        } else {
            Promise.reject('THere was an error')
        }
    }
    return url;
}
export async function deleteRequest(url = undefined, parameter = undefined) {
    if (url !== undefined) {
        const request = await fetch(url, {
            method: "delete",
        })

        if (request.ok) {
            const response = await request.json();
            return Promise.resolve(response);
        } else {
            return Promise.resolve(request);
        }
    }
}

export async function updateRequest(url = undefined, item = undefined) {
    if (url !== undefined) {
        item.completed = !item.completed;
        const request = await fetch(url , {
            method:"PUT",
            body:JSON.stringify(item),
            headers : {
                'Accept' : 'application/json',
                'Content-type':'application/json',
            }
        });

        if(request.ok && request.status === 200)
        {
            return Promise.resolve(request);
        }else{
            Promise.reject(request)
            throw new Error(request.statusText);
             
        }
    }
}
export function generateId(max, min) {

    return Math.floor(Math.random() * (max - min) + min);
}


function makeRequest(url) {
    const httpx = new XMLHttpRequest();


    httpx.open('get', url, true);
    httpx.setRequestHeader("Contet-type", 'application/json;charset-utf8;');
    httpx.send();

    httpx.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.responseText))
        }

    }
}

function storeTaskToDatabase(task) {
    task = JSON.stringify(task);
    const httpx = new XMLHttpRequest();

    httpx.open('post', 'http://localhost:3333/tasks', true);
    httpx.setRequestHeader("Content-type", 'application/json;charset=utf-8');
    httpx.send(task);

    httpx.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this);
        }
    }
}




// function generateId(max, min) {
//     return Math.floor(Math.random() * (max - min) + min);
// }


