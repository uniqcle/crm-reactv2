

let requestsList = await feetch();

async function feetch(url) {

    let requests = []

    try {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error('Error async await...')
        }

        const data = await result.json();

        console.log(data)
        requests = [...data];

    } catch (e) {

    }

    return requests
}

export default requestsList; 