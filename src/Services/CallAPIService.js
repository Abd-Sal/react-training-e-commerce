export const CallAPIService = {
  getFetch: (options={})=>{
    const params = new URLSearchParams();  
    options.searchQuery && params.append('q', options.searchQuery)
    options.limit && params.append('limit', options.limit)
    options.skip && params.append('skip', options.skip)
    options.sortBy && params.append('sortBy', options.sortBy)
    options.order && params.append('order', options.order)
    options.select && params.append('select', options.select)
    const url = `${options.url}?${params.toString()}`
    return fetch(url)
      .then((response) =>{
        if(response.ok)
            return response.json();
          return response.json().then((serverErrorMessage) =>{ throw new Error(serverErrorMessage.message)})
      })
      .then((data)=>{
        return data;
      })
  }
}
