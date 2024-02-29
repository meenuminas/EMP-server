const jsonServer=require('json-server')
const empServer=jsonServer.create()
const middleware =jsonServer.defaults()
const router = 3000|| process.env.PORT

empServer.use(middleware)
empServer.use(router)

empServer.listen(PORT,()=>{
  console.log(`Employee Portal Started at port:${PORT}`);  
})