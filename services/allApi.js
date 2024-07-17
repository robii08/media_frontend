import { commonAPI } from "./commonApi"
import { serverUrl } from "./serverUrl"



export const allVideoApi = async(reqBody) =>
{
   return await commonAPI('POST',`${serverUrl}/allVideos`,reqBody)
}

export const getAllVideoApi = async()=>
{
   return await commonAPI('GET',`${serverUrl}/allVideos`,'')
}

export const deleteVideoApi = async(id)=>
{
   return await commonAPI('DELETE',`${serverUrl}/allVideos/${id}`,{})
}

export const addVideoHistoryApi = async(reqBody)=>
{
   return await commonAPI('POST', `${serverUrl}/history`,reqBody )
}

export const getVideoHistoryApi = async()=>
{
   return await commonAPI('GET', `${serverUrl}/history`,'' )
}

export const deleteVideoHistoryApi = async(id)=>
{
   return await commonAPI('DELETE', `${serverUrl}/history/${id}`,{} )
}

export const categoryApi = async(reqBody) =>
{
   return await commonAPI('POST',`${serverUrl}/category`,reqBody)
}

export const getCategoryApi = async() =>
{
   return await commonAPI('GET',`${serverUrl}/category`,'')
}

export const deleteCategoryApi = async(id) =>
{
   return await commonAPI('DELETE',`${serverUrl}/category/${id}`,{})
}

export const updateCategoryApi = async(id,reqBody) =>
{
   return await commonAPI('PUT',`${serverUrl}/category/${id}`,reqBody)
}