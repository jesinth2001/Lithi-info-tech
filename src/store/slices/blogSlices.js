import { createSlice } from "@reduxjs/toolkit";
import blogImage from '../../Assets/blog/blog.jpg'


const initialState = [
    {id:1,img:blogImage,date:"18/02/2024",name:"name",title:"blog title",creation:"Technology",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum minima delectus iusto, veniam quo dolore sit incidunt exercitationem sed? Explicabo modi veniam ipsam magni optio, nihil reiciendis iusto earum."},
    {id:2,img:blogImage,date:"18/02/2024",name:"Admin",title:"blog Title 2",creation:"Technology",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum minima delectus iusto, veniam quo dolore sit incidunt exercitationem sed? Explicabo modi veniam ipsam magni optio, nihil reiciendis iusto earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum minima delectus iusto, veniam quo dolore sit incidunt exercitationem sed? Explicabo modi veniam ipsam magni optio, nihil reiciendis iusto earum/Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum minima delectus iusto, veniam quo dolore sit incidunt exercitationem sed? Explicabo modi veniam ipsam magni optio, nihil reiciendis iusto earum"},
    {id:3,img:blogImage,date:"18/02/2024",name:"name",title:"blog title",creation:"Technology",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum minima delectus iusto, veniam quo dolore sit incidunt exercitationem sed? Explicabo modi veniam ipsam magni optio, nihil reiciendis iusto earum."}
]

const blogSlice = createSlice({
   name: 'blog',
   initialState,
   reducers:{},
})

export const selectAll =(state)=>state.blog;
export default blogSlice.reducer;