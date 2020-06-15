const fetchRequests = { get : async (url)=>{

    const response = await (await fetch(url)).json()
    return response
    }
}

export default fetchRequests