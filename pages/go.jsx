import Link from "next/link"

export default function Document(props) {
  
    return (
       <>
       
      { props.posts.map(post=>(
     <div key={post.id}>
      <Link href={`posts/${props.id}`}>
      {post.title}
      </Link>
     </div>
       ))}
       
     
       
       </>
       
    )
  }
  export async function  getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    const data= await res.json()
  
    return{
        props:{
          posts:data
        }
        
    }

  }