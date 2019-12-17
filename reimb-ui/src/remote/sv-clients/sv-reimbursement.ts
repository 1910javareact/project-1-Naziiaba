import { svReimbursementClient } from "../sv-reimbursement-client";
//hits get on /gardens to recieve all gardens
export const getReimbursementsById = async () => {
    try{
        let response = await svReimbursementClient.get('/reimbursements')
        if(response.status === 200){
            return{
                status:response.status,
                body:response.data
            }
        }else{
            return {
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}