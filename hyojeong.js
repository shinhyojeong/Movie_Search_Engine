exports.handler = async function (){
    return {
        statusCode : 200,
        body: JSON.stringify({
            name: 'Hyojeong',
            age: 15,
            email: 'hyojeonge0@naver.com'
        })
    }
}