import * as React from "react"

interface HeaderProps {
    headerText: string;
}

export default (props: HeaderProps) => <h1>{props.headerText}</h1>
