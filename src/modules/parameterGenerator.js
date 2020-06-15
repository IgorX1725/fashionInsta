export const generate = (text) =>{
    const find = ' ';
    const regex = new RegExp(find, 'g');
    return (text).toLowerCase().replace(regex,"-")
}

export const undo = (text) =>{
    const find = '-';
    const regex = new RegExp(find, 'g');
    return (text).toUpperCase().replace(regex," ")
}