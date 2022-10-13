import Close from "./close"
import Menu from "./menu"
import Search from "./search"

function Index({name, ...props}) {
  switch(name){
    case 'close': {
      return <Close {...props} />
    }

    case 'menu': {
      return <Menu {...props} />
    }

    case 'search':{
      return <Search {...props} />
    }

    default: {
      return null
    }
  }
}

Index.defaultProps = {
  size: 24, 
  color: 'var(--black)'
}

export default Index
