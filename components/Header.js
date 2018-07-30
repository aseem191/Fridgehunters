import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
//import "typeface-lobster";

const linkStyle = {
  marginRight: 15,
  border: '2px solid #DDD'
}

const Header = () => {
    return(
    <div>
    	<h1 align="center">Fridgehunters</h1><style jsx>{`

        h1 {
          font-family: "Lobster", Times, serif;
          font-size: 54px
        }
        
      `}</style>
      <AppBar position="static">
        <Toolbar  style={{justifyContent: 'center'}}>
        <div>
          <Link href="/hot">
            <Button style={{ fontWeight: "bold", fontSize: "16px"  }}>HOT</Button>
          </Link>

          <Link href="/">
            <Button style={{ fontWeight: "bold", fontSize: "16px"  }}>HOME</Button>
          </Link>

          <Link href="/create">
            <Button style={{ fontWeight: "bold", fontSize: "16px" }}>CREATE</Button>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
        
    </div>
  )
}

export default Header