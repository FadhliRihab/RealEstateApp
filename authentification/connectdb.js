const mongoose=require('mongoose')
const connectdb=()=>{
    try {
        mongoose.connect("mongodb+srv://fadhlirihab123:Taetae30@cluster0.btof6y0.mongodb.net/?retryWrites=true&w=majority")
        console.log('database succesfully connected')
    } catch (error) {
        console.log('database is not connected')
    }
}

module.exports=connectdb

// traduction je suis un pas rouge dans l'ambule que dispirance ooooooh ma douce soufrance 