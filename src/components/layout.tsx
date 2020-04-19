import * as React from "react"
import { Link } from "gatsby"

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

const ListLink = (props: LinkProps) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout: React.FC = ({ children }) => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem`}}>
        <Link to={"/index2"} style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`}}>
          <ListLink to={"/index2"}>Home</ListLink>
          <ListLink to={"/about2/"}>About</ListLink>
          <ListLink to={"/contact2/"}>Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
