export function getDate(myDate){
    const date = new Date(myDate)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()   //오늘잘짜

    return `${year}년${month}월${day}일` // 2021-11-10
}