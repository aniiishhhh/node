const { readFile,writeFile } = require('fs')

readFile('./module/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./module/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',`hey its the result ${first},${second}`,
            (err,result)=>{
            if (err){
                console.log(err)
                return
            }
            console.log(result)
        }
    )

})

})
