import Close from "./close"
import Menu from "./menu"
import Search from "./search"
import Instagram from "./instagram"
import Facebook from "./facebook"
import Youtube from './youtube'

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

    case 'instagram': {
      return <Instagram {...props} />
    }
    case 'facebook': {
      return <Facebook {...props} />
    }
    case 'youtube': {
      return <Youtube {...props} />
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
