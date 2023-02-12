export const Choosen_lesson = async (lesson)=>{
    const d = async()=>{
        await document.getElementById("click_handle").addEventListener("click",()=>{
            console.log("click")
            return true
        })
    }
    if(lesson.length > 0){
        d().then((ms)=>{
            return ms
        })
        .catch((err)=>{console.log("error")})
        return false
    }
}