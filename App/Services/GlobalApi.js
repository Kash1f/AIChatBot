

const BASE_URL = ""

const getBardApi = (userMsg)=>axios.get(BASE_URL+"?ques="+userMsg)

export default{
    getBardApi
}