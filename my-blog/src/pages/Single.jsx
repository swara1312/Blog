import React from 'react'
import {Link} from 'react-router-dom'
import Edit from "../assests/edit.png"
import Delete from "../assests/delete.png"
import Menu from "../components/Menu"


const Single = () => {
  return (
    <div className='single'>
      <div className="content">
         <img src='https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='image here'/>
        <div className="user">
          <img src='https://www.webiconio.com/_upload/255/image_255.svg' alt='user pic'/>
        <div className="info">
          <span>Roy</span>
          <p>Posted three days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
            <img src={Edit} alt="Edit"/>
          </Link>
          <img src={Delete} alt="Delete"/>
        </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, vitae voluptatibus, optio molestias repellat quaerat eos quod officia deserunt facere consectetur ipsam omnis nostrum! Modi aliquam consectetur quod ullam necessitatibus.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam vel velit exercitationem, suscipit fugit alias aut numquam molestias! Explicabo reprehenderit ullam possimus minima sequi officiis illum accusamus voluptates dignissimos.
          <br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro voluptatum debitis voluptates? Facere odio quia quae cum nobis. Assumenda dolorem vitae vero aliquid architecto aspernatur molestias et ratione a provident?
          <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et non officia unde quibusdam aspernatur suscipit laborum at hic, veniam tempore ipsam necessitatibus ipsa doloremque earum sunt nulla molestiae, natus labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio debitis vel rerum dicta sequi qui, quibusdam voluptatum consectetur! Animi est enim, odio dolores id fuga officiis laudantium quod distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero quasi odit deserunt sapiente repudiandae corrupti eos neque nemo eius odio, animi sequi temporibus aspernatur vitae earum sint explicabo fuga.
          <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut recusandae neque suscipit, consectetur velit itaque iure atque quibusdam, debitis fugiat sequi fugit temporibus esse doloremque qui adipisci similique? Aliquam, atque!
          <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium inventore ipsa earum voluptatem ipsam nobis adipisci quaerat soluta rem in harum praesentium similique molestiae ex, exercitationem voluptate. Culpa, dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, obcaecati tempora. Provident nostrum ad ducimus quisquam, illum dignissimos minima nisi quidem, culpa ipsam dolore rerum saepe nemo a voluptate facilis.
        </p>
      </div>
      <div><Menu/></div>
    </div>
  )
}

export default Single