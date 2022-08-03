const express=require('express')
const app=express()
const PORT=8000

const champs={
    'jinx':{
        'birthName':'unlucky',
        'birthLocation':'runterra'},

    'jayce':{
        'birthName':'Jayce bro',
        'birthLocation':'Runeterra'}
    }


app.get('/',(request,response)=>{
    response.sendFile(__dirname+ '/index.html')
})
app.get('/api/:name',(request,response)=>{
    const champName=request.params.name.toLowerCase()
    if (champs[champName]){
     response.json(champs[champName])   
    }
    
})

app.listen(PORT,()=>{
    console.log(`The server is now running on port ${PORT}!`)
})
