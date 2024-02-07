import conf from '../conf.js'
import { Client,ID,Databases,Storage,Query } from 'appwrite'

export class Service{
  client =new Client();
  databases;
  bucket;
  
   constructor (){
        this.client
                   .setEndpoint(conf.appwriteUrl)
                   .setProject(conf.appwriteProjectId);
                   this.databases=new Databases(this.client);
                   this.bucket =new Storage(this.client);
   }

  async createpost({title,slug,content,featuredImage,status,userId}){
    try { 
        return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
               title,
               content,
               featuredImage,
               status,
               userId
    } )
}
        catch (error) {
            console.log(error)
        }
  }

    async update(slug,{title,content,featuredImage,status,userId}){
      
      try {
            return await this.databases.updateDocument();
          }
     catch (error) {
        console.log(error)
         }
  }

  async updatePost(slug,{title,content,featuredImage,status,userId}){
    try {
      return await this.databases.updateDocument(
                            conf.appwriteDatabaseId,
                            conf.appwriteCollectionId,
                            slug,{
                                title,
                                content,
                                featuredImage,
                                status,
                            })


                                          
    } catch (error) {
        console.log(error)
    }

  }
  async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug)
        }
     catch (error) {
        console.log(error)
        return false;
    }

  }
  async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,)
            
    } catch (error) {
        console.log(error)
        return false;
    }
  }
  async getposts(queries = [Query.equal("status","active")]){
         return await this.databases.listDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          [queries],
         )
         }     
  async uploadFile(file){
    return await this.bucket .createFile(
      conf.appwriteBucketId,
      ID.unique(),
      file
    )
  } 
  async deleteFile(fileID){
    try {
      return await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileID(), 
      )
    } catch (error) {
      console.log(error)
    }
  }
  
  getFilePreview(fileID){
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileID
      )
    }

   }
const service = new Service()
export default service