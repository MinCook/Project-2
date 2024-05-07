export const date = ()=>{
    const time = new Date();
    const d = time.getDate().toString();
    const m = time.getMonth() + 1;
    const newm = m.toString();
    const y = time.getFullYear().toString();
    const date = " " + d + "/" + newm + "/" + y;
    return date;  
}

