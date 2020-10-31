import React from 'react'

const Book = (props) => {
  //console.log(props)
  const {img, title, author} = props
  /* alternatif  props
  * const {img, title, author} = props //// const Book = ({img, author, title})
  * alt kısımda sadece img, title, author kullanılır
  */ 
 //const {children} = props
  const clickHandler = () => alert('hello World')
  const ahktest = (author) => alert(author)
  return (
    <article className="book">
      <img src={img} alt="one piece"/>
      <h1>{title}</h1>
      <h4 style={{color:'#617d98',fontSize:'0.75rem'}}>{author}</h4>
      <button type="button" onClick={clickHandler}>Submit</button>
      <button type="button" onClick={ () => ahktest(author)} > ahktest2 </button>
    </article>
  )
}

export default Book
