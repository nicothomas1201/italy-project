import styled from 'styled-components'
import Button from './Button'

const SectionBlogsStyled = styled.div`
  padding-block-end: 4rem;

  .title{
    font: var(--body-13-regular);
    color: var(--black);
    text-align: center;
    margin: 0;
  }

  .blog-list{
    display: flex;
    justify-content: space-between;
    padding-block: 4rem;
    img{
      vertical-align: middle;
    }
  }

  .button-container{
    display: flex;
    justify-content: center;
  }

  
`

function SectionBlogs({blogs}) {
  return (
    <SectionBlogsStyled>
      <h3 className='title'>
        LATEST BLOG POSTS
      </h3>
      <div className='blog-list'>
        {blogs ? blogs.map((image, index) => <img 
          width="361" 
          height="241" 
          src={image} 
          alt="" 
          key={index}/> ) : null}
      </div>
      <div className='button-container'>
        <Button 
          text="view all posts"
          uppercase={false}
        />
      </div>
    </SectionBlogsStyled>
    
  )
}

export default SectionBlogs
