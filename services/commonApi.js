import axios from "axios"


export const commonAPI = async(httpReq,url,reqBody) =>
{
    const reqConfig = 
    {
        method: httpReq,
        url,
        data: reqBody,
        headers:{'Content-Type':'application/json'}
    }
    return await axios(reqConfig).then((result)=>
    {
        return result
    }).catch((err)=>
    {
        return err
    })
}